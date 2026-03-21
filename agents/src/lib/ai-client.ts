/**
 * Unified AI Client
 *
 * Routes requests to Anthropic or OpenAI based on:
 * - Key availability (ANTHROPIC_API_KEY / OPENAI_API_KEY)
 * - Task tier: "primary" (heavy tasks) → Anthropic preferred
 *              "fast"    (quick tasks)  → OpenAI always
 *
 * Add your Anthropic key when ready — primary tasks automatically upgrade.
 * For now, everything runs on OpenAI.
 */

import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";

type Tier = "primary" | "fast";
type Provider = "anthropic" | "openai";

const MODELS: Record<Provider, Record<Tier, string>> = {
  anthropic: {
    primary: "claude-opus-4-6",
    fast: "claude-haiku-4-5-20251001",
  },
  openai: {
    primary: "gpt-4o",
    fast: "gpt-4o-mini",
  },
};

function resolveProvider(tier: Tier): Provider {
  // Fast tasks always go to OpenAI (cheap + quick)
  if (tier === "fast") return "openai";
  // Primary tasks: use Anthropic if key exists, else fall back to OpenAI
  return process.env.ANTHROPIC_API_KEY ? "anthropic" : "openai";
}

export interface StreamRunner {
  onText: (handler: (delta: string) => void) => StreamRunner;
  complete: () => Promise<string>;
}

export interface CompletionOptions {
  system: string;
  messages: { role: "user" | "assistant"; content: string }[];
  maxTokens?: number;
  tier?: Tier;
}

/**
 * Build a streaming completion runner.
 * Register handlers with .onText() BEFORE calling .complete().
 *
 * const runner = buildStream({ system, messages, tier: "primary" });
 * runner.onText(printStream);
 * const output = await runner.complete();
 */
export function buildStream(options: CompletionOptions): StreamRunner {
  const tier = options.tier ?? "primary";
  const provider = resolveProvider(tier);
  const handlers: ((delta: string) => void)[] = [];

  const runner: StreamRunner = {
    onText(handler) {
      handlers.push(handler);
      return runner;
    },

    async complete() {
      let fullText = "";

      if (provider === "anthropic") {
        const client = new Anthropic();
        const stream = client.messages.stream({
          model: MODELS.anthropic[tier],
          max_tokens: options.maxTokens ?? 4096,
          thinking: { type: "enabled", budget_tokens: 2000 },
          system: options.system,
          messages: options.messages,
        });

        stream.on("text", (delta) => {
          fullText += delta;
          handlers.forEach((h) => h(delta));
        });

        await stream.finalMessage();
      } else {
        const client = new OpenAI();
        const msgs: OpenAI.ChatCompletionMessageParam[] = [
          { role: "system", content: options.system },
          ...options.messages,
        ];

        const stream = await client.chat.completions.create({
          model: MODELS.openai[tier],
          max_tokens: options.maxTokens ?? 4096,
          messages: msgs,
          stream: true,
        });

        for await (const chunk of stream) {
          const delta = chunk.choices[0]?.delta?.content ?? "";
          if (delta) {
            fullText += delta;
            handlers.forEach((h) => h(delta));
          }
        }
      }

      return fullText;
    },
  };

  return runner;
}

/**
 * Non-streaming completion — use for JSON responses, scoring, summaries.
 */
export async function chat(options: CompletionOptions): Promise<string> {
  const tier = options.tier ?? "primary";
  const provider = resolveProvider(tier);

  if (provider === "anthropic") {
    const client = new Anthropic();
    const response = await client.messages.create({
      model: MODELS.anthropic[tier],
      max_tokens: options.maxTokens ?? 2048,
      thinking: { type: "enabled", budget_tokens: 1000 },
      system: options.system,
      messages: options.messages,
    });
    const textBlock = response.content.find((b) => b.type === "text");
    return textBlock?.type === "text" ? textBlock.text : "";
  } else {
    const client = new OpenAI();
    const msgs: OpenAI.ChatCompletionMessageParam[] = [
      { role: "system", content: options.system },
      ...options.messages,
    ];
    const response = await client.chat.completions.create({
      model: MODELS.openai[tier],
      max_tokens: options.maxTokens ?? 2048,
      messages: msgs,
    });
    return response.choices[0]?.message?.content ?? "";
  }
}
