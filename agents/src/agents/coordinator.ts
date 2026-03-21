/**
 * Coordinator Agent
 *
 * The brain of the SparkRise Agent Core.
 * Takes a high-level goal and decides which agents to run, in what order,
 * and how to combine their outputs into a final deliverable.
 *
 * Runs multiple agents in parallel where possible.
 * Passes research context to content + outreach agents for better output.
 */

import Anthropic from "@anthropic-ai/sdk";
import { log, printHeader, timestamp, sendToN8n, saveOutput } from "../utils.js";
import { runMarketResearchAgent } from "./market-research.js";
import { runContentIdeasAgent } from "./content-ideas.js";
import { runOutreachWriterAgent } from "./outreach-writer.js";
import { runBrandVoiceAgent } from "./brand-voice.js";
import type { AgentResult } from "../types.js";

type CoordinatorTask =
  | "weekly-brand-sprint"
  | "outreach-campaign"
  | "research-only"
  | "content-only"
  | "full-pipeline";

interface CoordinatorOptions {
  task: CoordinatorTask;
  weekTheme?: string;
  target?: string;
  channel?: "linkedin" | "email" | "facebook" | "sms_whatsapp";
  language?: "en" | "es";
  context?: string;
}

export async function runCoordinator(options: CoordinatorOptions): Promise<void> {
  printHeader("SPARKRISE COORDINATOR");
  log("coordinator", `Task: ${options.task}`);

  const results: AgentResult[] = [];

  switch (options.task) {
    case "weekly-brand-sprint":
      await runWeeklyBrandSprint(options, results);
      break;

    case "outreach-campaign":
      await runOutreachCampaign(options, results);
      break;

    case "research-only":
      results.push(await runMarketResearchAgent({ focus: "all", depth: "deep" }));
      break;

    case "content-only":
      results.push(await runContentIdeasAgent({
        weekTheme: options.weekTheme,
        platform: "all",
        postsCount: 7,
      }));
      break;

    case "full-pipeline":
      await runFullPipeline(options, results);
      break;
  }

  await buildSummaryReport(results, options.task);
}

async function runWeeklyBrandSprint(
  options: CoordinatorOptions,
  results: AgentResult[]
): Promise<void> {
  log("coordinator", "Running weekly brand sprint...");

  // Step 1: Research runs first to inform content
  log("coordinator", "Step 1: Market research...");
  const research = await runMarketResearchAgent({ focus: "all", depth: "deep" });
  results.push(research);

  // Step 2: Content ideas informed by research context
  log("coordinator", "Step 2: Content ideas (informed by research)...");
  const researchSummary = research.output.slice(0, 2000); // pass top of research as context
  const content = await runContentIdeasAgent({
    weekTheme: options.weekTheme ?? `Based on research insights: ${researchSummary}`,
    platform: "all",
    postsCount: 7,
  });
  results.push(content);

  // Step 3: LinkedIn outreach sequence (parallel would be ideal but keeping sequential for clarity)
  log("coordinator", "Step 3: LinkedIn outreach sequence...");
  const outreach = await runOutreachWriterAgent({
    channel: "linkedin",
    language: "en",
    target: "med spa owner in Northern Virginia",
  });
  results.push(outreach);

  // Step 4: Spanish Facebook sequence
  log("coordinator", "Step 4: Spanish Facebook outreach...");
  const outreachEs = await runOutreachWriterAgent({
    channel: "facebook",
    language: "es",
    target: "dueño de negocio de estética en el área DMV/NOVA",
    offer: "campaña gratuita de reactivación de clientes inactivos",
  });
  results.push(outreachEs);

  log("coordinator", "Weekly brand sprint complete.");
}

async function runOutreachCampaign(
  options: CoordinatorOptions,
  results: AgentResult[]
): Promise<void> {
  log("coordinator", "Building outreach campaign...");

  const channel = options.channel ?? "linkedin";
  const language = options.language ?? "en";

  // Research → Outreach (sequential for quality)
  log("coordinator", "Researching target...");
  const research = await runMarketResearchAgent({ focus: "prospect-intel", depth: "deep" });
  results.push(research);

  log("coordinator", `Writing ${channel} sequence (${language})...`);
  const outreach = await runOutreachWriterAgent({
    channel,
    language,
    target: options.target,
    context: options.context,
  });
  results.push(outreach);
}

async function runFullPipeline(
  options: CoordinatorOptions,
  results: AgentResult[]
): Promise<void> {
  log("coordinator", "Running FULL pipeline (all agents)...");

  // Research first
  const research = await runMarketResearchAgent({ focus: "all", depth: "deep" });
  results.push(research);

  const researchContext = research.output.slice(0, 3000);

  // Content + Outreach (both informed by research)
  log("coordinator", "Running content + outreach agents...");

  const [content, outreach, outreachEs] = await Promise.all([
    runContentIdeasAgent({
      weekTheme: options.weekTheme,
      platform: "all",
      postsCount: 10,
    }),
    runOutreachWriterAgent({
      channel: "linkedin",
      language: "en",
      context: researchContext,
    }),
    runOutreachWriterAgent({
      channel: "facebook",
      language: "es",
      offer: "campaña gratuita de reactivación de clientes inactivos",
    }),
  ]);

  results.push(content, outreach, outreachEs);

  // Brand voice check on content
  log("coordinator", "Brand voice review...");
  const brandCheck = await runBrandVoiceAgent(
    `Review and strengthen the top 3 hooks from this content batch:\n\n${content.output.slice(0, 2000)}`,
    { rewrite: true }
  );
  results.push(brandCheck);
}

async function buildSummaryReport(results: AgentResult[], task: string): Promise<void> {
  const client = new Anthropic();
  log("coordinator", "Building summary report...");

  const outputSummaries = results
    .map((r) => `### ${r.agent}\n${r.output.slice(0, 500)}...`)
    .join("\n\n");

  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `You ran a SparkRise AI agent pipeline (task: ${task}). Here are the outputs from each agent:

${outputSummaries}

Write a brief coordinator summary (bullet points):
1. What was produced
2. Top 3 immediate actions Cristian should take based on the outputs
3. What to push to n8n or GHL first
4. Any gaps or follow-up research needed`,
      },
    ],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  const summary = textBlock?.type === "text" ? textBlock.text : "No summary generated";

  const summaryResult: AgentResult = {
    agent: "coordinator-summary",
    timestamp: timestamp(),
    output: summary,
    metadata: { task, agentsRun: results.map((r) => r.agent) },
  };

  await saveOutput(summaryResult);

  await sendToN8n({
    agent: "coordinator",
    timestamp: summaryResult.timestamp,
    data: {
      task,
      agentsRun: results.map((r) => r.agent),
      summary,
    },
    action: "pipeline_complete",
  });

  console.log("\n" + "═".repeat(60));
  console.log("  COORDINATOR SUMMARY");
  console.log("═".repeat(60) + "\n");
  console.log(summary);
  console.log("\n");
}
