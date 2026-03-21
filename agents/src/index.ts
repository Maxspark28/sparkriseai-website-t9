#!/usr/bin/env node
/**
 * SparkRise AI — Agent Core CLI
 *
 * Usage:
 *   pnpm brand-voice                          Run brand voice agent
 *   pnpm content                              Generate weekly content calendar
 *   pnpm research                             Run market research
 *   pnpm outreach                             Build outreach sequences
 *   pnpm run-all                              Full weekly pipeline
 *
 * Or with tsx directly:
 *   tsx src/index.ts brand-voice --rewrite "text to rewrite"
 *   tsx src/index.ts content --theme "spring med spa offers"
 *   tsx src/index.ts market-research --focus med-spa
 *   tsx src/index.ts outreach --channel linkedin --lang en
 *   tsx src/index.ts outreach --channel facebook --lang es
 *   tsx src/index.ts coordinator --task weekly-brand-sprint
 *   tsx src/index.ts run-all
 */

import "dotenv/config";
import { runBrandVoiceAgent } from "./agents/brand-voice.js";
import { runContentIdeasAgent, generateSinglePost } from "./agents/content-ideas.js";
import { runMarketResearchAgent, researchProspect } from "./agents/market-research.js";
import { runOutreachWriterAgent, writeSingleOutreach } from "./agents/outreach-writer.js";
import { runCoordinator } from "./agents/coordinator.js";
import { printHeader } from "./utils.js";

const args = process.argv.slice(2);
const command = args[0];

function getArg(flag: string): string | undefined {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : undefined;
}

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

async function main(): Promise<void> {
  if (!process.env.OPENAI_API_KEY && !process.env.ANTHROPIC_API_KEY) {
    console.error("ERROR: No AI key found. Add OPENAI_API_KEY (or ANTHROPIC_API_KEY) to agents/.env");
    process.exit(1);
  }

  switch (command) {
    case "brand-voice": {
      const input = getArg("--input") ?? getArg("--rewrite") ?? "Write a LinkedIn post about why med spas lose revenue by not following up with past clients.";
      const rewrite = hasFlag("--rewrite");
      const lang = (getArg("--lang") as "en" | "es") ?? "en";
      await runBrandVoiceAgent(input, { rewrite, language: lang });
      break;
    }

    case "content-ideas":
    case "content": {
      const theme = getArg("--theme");
      const platform = (getArg("--platform") as "all" | "linkedin" | "facebook" | "facebook_es") ?? "all";
      const count = parseInt(getArg("--count") ?? "7", 10);
      await runContentIdeasAgent({ weekTheme: theme, platform, postsCount: count });
      break;
    }

    case "market-research":
    case "research": {
      const focus = (getArg("--focus") as "med-spa" | "ai-niche" | "prospect-intel" | "all") ?? "all";
      const depth = (getArg("--depth") as "quick" | "deep") ?? "deep";
      const business = getArg("--business");
      const location = getArg("--location");

      if (business && location) {
        await researchProspect(business, location, getArg("--context"));
      } else {
        await runMarketResearchAgent({ focus, depth });
      }
      break;
    }

    case "outreach": {
      const channel = (getArg("--channel") as "linkedin" | "email" | "facebook" | "sms_whatsapp") ?? "linkedin";
      const lang = (getArg("--lang") as "en" | "es") ?? "en";
      const target = getArg("--target");
      const offer = getArg("--offer");
      const context = getArg("--context");

      if (hasFlag("--single")) {
        const singleContext = getArg("--context") ?? "Med spa owner in Northern Virginia";
        await writeSingleOutreach(channel as "linkedin" | "email" | "facebook" | "sms", singleContext, lang);
      } else {
        await runOutreachWriterAgent({ channel, language: lang, target, offer, context });
      }
      break;
    }

    case "coordinator": {
      const task = (getArg("--task") as Parameters<typeof runCoordinator>[0]["task"]) ?? "weekly-brand-sprint";
      const theme = getArg("--theme");
      const target = getArg("--target");
      const channel = getArg("--channel") as "linkedin" | "email" | "facebook" | "sms_whatsapp" | undefined;
      const lang = getArg("--lang") as "en" | "es" | undefined;
      await runCoordinator({ task, weekTheme: theme, target, channel, language: lang });
      break;
    }

    case "run-all": {
      const theme = getArg("--theme");
      await runCoordinator({ task: "weekly-brand-sprint", weekTheme: theme });
      break;
    }

    case "full-pipeline": {
      await runCoordinator({ task: "full-pipeline" });
      break;
    }

    default: {
      printHeader("SPARKRISE AI — AGENT CORE");
      console.log(`Commands:
  brand-voice      Generate or rewrite content in Cristian's voice
  content          Generate weekly content calendar (LinkedIn + Facebook EN/ES)
  research         Market research: med spa niche + prospect intelligence
  outreach         Build multi-touch outreach sequences
  coordinator      Run multi-agent pipeline
  run-all          Full weekly brand sprint (research → content → outreach)
  full-pipeline    Everything including brand voice review

Options:
  --lang en|es     Language (default: en)
  --channel        linkedin|email|facebook|sms_whatsapp
  --theme          Week theme for content
  --focus          Research focus: med-spa|ai-niche|prospect-intel|all
  --depth          quick|deep (default: deep)
  --business       Business name (for prospect research)
  --location       Business location (for prospect research)
  --single         Write a single message instead of a sequence
  --rewrite        Rewrite provided text in brand voice
  --count          Number of posts to generate (default: 7)
  --task           Coordinator task: weekly-brand-sprint|outreach-campaign|research-only|content-only|full-pipeline

Examples:
  tsx src/index.ts content --theme "spring promotions for med spas"
  tsx src/index.ts outreach --channel linkedin --lang en
  tsx src/index.ts outreach --channel facebook --lang es
  tsx src/index.ts research --focus med-spa --depth deep
  tsx src/index.ts research --business "Glow Med Spa" --location "Ashburn VA"
  tsx src/index.ts brand-voice --rewrite "I help businesses grow with AI"
  tsx src/index.ts run-all`);
      break;
    }
  }
}

main().catch((err) => {
  console.error("Agent error:", err);
  process.exit(1);
});
