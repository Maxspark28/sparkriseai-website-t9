/**
 * Brand Voice Agent
 *
 * Rewrites or generates content in Cristian's exact voice:
 * - Pain-first, specific, no filler
 * - Gary Halbert / Dan Kennedy / Alex Hormozi influenced
 * - 3rd grade reading level for Spanish content
 * - Human-sounding, not AI-sounding
 */

import { buildStream, chat } from "../lib/ai-client.js";
import { log, printStream, printHeader, timestamp, sendToN8n, saveOutput } from "../utils.js";
import type { BrandVoiceOutput, AgentResult } from "../types.js";

const BRAND_VOICE_SYSTEM = `You are the brand voice editor for Cristian González Rivera, founder of SparkRise AI.

CRISTIAN'S VOICE DNA:
- Born in Puerto Rico, raised in Springfield MA, lives in Loudoun County VA (DMV)
- Background in sales — he thinks like a closer, not a marketer
- Bilingual English/Spanish, uses both naturally
- Husband and father — human, real, relatable
- Early AI adopter who actually builds and uses the tools he talks about

COPY STYLE (non-negotiable):
1. PAIN FIRST — open with the problem the reader is already feeling, not the solution
2. SPECIFIC — "181 med spa leads" not "many leads." "23-minute response time" not "slow."
3. NO FILLER — cut "I'm excited to share", "In today's world", "game-changer", "leverage"
4. HUMAN — write like you'd text a friend who needs help, not like a LinkedIn influencer
5. AUTHORITY THROUGH RESULTS — show the system, the numbers, the proof. Skip the title flexing.
6. SHORT SENTENCES — especially for hooks. One idea per sentence.
7. 3RD GRADE READING LEVEL for Spanish content — clear, direct, zero jargon

INFLUENCES:
- Gary Halbert: Start with the reader's pain. Make them feel seen before you pitch.
- Dan Kennedy: Urgency, specificity, clear CTA. No one owes you their attention.
- Alex Hormozi: Value stack, lead with outcomes, "pay zero until you see results"
- Sugarman: Story-based, curiosity-driven, slippery slope into the offer

WHAT CRISTIAN DOES:
- Builds AI automation systems for small businesses (starting with med spas in NOVA/DMV)
- The offer: dead database reactivation — FREE, performance-based entry wedge
- Full product: Revenue Recovery System ($2,997 + $2,500/mo)
- Not a SaaS — he builds and manages the system for clients

NEVER DO:
- "Unlock your potential"
- "In today's fast-paced world"
- "I'm passionate about"
- "Excited to announce"
- AI-sounding phrases
- Third person self-references
- Hashtag spam (3-5 max, relevant only)`;

export async function runBrandVoiceAgent(
  input: string,
  options: { rewrite?: boolean; language?: "en" | "es" } = {}
): Promise<AgentResult> {
  printHeader("BRAND VOICE AGENT");

  const task = options.rewrite
    ? `Rewrite this content in Cristian's brand voice. Language: ${options.language ?? "en"}\n\nContent to rewrite:\n${input}`
    : `Generate brand-voice content based on this brief. Language: ${options.language ?? "en"}\n\nBrief:\n${input}`;

  log("brand-voice", `Running... (rewrite mode: ${options.rewrite ?? false})`);

  const runner = buildStream({
    system: BRAND_VOICE_SYSTEM,
    messages: [{ role: "user", content: task }],
    maxTokens: 4096,
    tier: "primary",
  });

  runner.onText(printStream);
  const fullOutput = await runner.complete();
  console.log("\n");

  const result: AgentResult = {
    agent: "brand-voice",
    timestamp: timestamp(),
    output: fullOutput,
    metadata: { language: options.language ?? "en", rewrite: options.rewrite ?? false },
  };

  await sendToN8n({
    agent: "brand-voice",
    timestamp: result.timestamp,
    data: result,
    action: options.rewrite ? "rewrite" : "generate",
  });

  await saveOutput(result);
  return result;
}

export async function checkBrandVoice(content: string): Promise<BrandVoiceOutput> {
  log("brand-voice", "Scoring content against brand voice...");

  const text = await chat({
    system: BRAND_VOICE_SYSTEM,
    messages: [
      {
        role: "user",
        content: `Score this content on Cristian's brand voice scale (0-100) and rewrite it if needed.

Return JSON with this exact structure:
{
  "original": "<the original text>",
  "rewritten": "<improved version>",
  "voiceScore": <0-100>,
  "notes": ["<specific issue 1>", "<specific issue 2>"]
}

Content to evaluate:
${content}`,
      },
    ],
    maxTokens: 2048,
    tier: "fast",
  });

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("Could not parse JSON from brand voice response");

  return JSON.parse(jsonMatch[0]) as BrandVoiceOutput;
}
