/**
 * Market Research Agent
 *
 * Runs niche intelligence for SparkRise AI:
 * - Med spa industry pain points, trends, seasonality
 * - AI automation niche — what's hot, what's noise
 * - Prospect intelligence — what med spa owners are saying online
 * - Content angles that would resonate with target audience
 * - Keyword opportunities for outreach personalization
 */

import Anthropic from "@anthropic-ai/sdk";
import { log, printStream, printHeader, timestamp, sendToN8n, saveOutput } from "../utils.js";
import type { MarketResearch, AgentResult } from "../types.js";

const RESEARCH_SYSTEM = `You are a market intelligence analyst for SparkRise AI, an AI lead automation agency targeting med spas in Northern Virginia (NOVA/DMV area).

YOUR JOB:
Produce actionable intelligence — not generic summaries. Think like a sales strategist who needs to know exactly what to say to a med spa owner to make them book a call.

COMPANY CONTEXT:
- SparkRise AI builds AI-powered lead automation and dead database reactivation systems
- Current vertical: Med spas in NOVA/DMV
- Entry offer: Free dead database reactivation (performance-based)
- Full product: Revenue Recovery System ($2,997 setup + $2,500/mo retainer)
- Founder: Cristian González Rivera — sales background, bilingual, DMV-based

TARGET CUSTOMER:
- Med spa owner or manager in Northern Virginia (Loudoun, Fairfax, Arlington, Alexandria, Prince William counties)
- 1-3 locations
- Has a past customer list of 500-5,000 contacts they haven't touched in months
- Frustrated with no-shows, slow seasons, low rebooking rates
- Has tried email blasts that didn't work
- Busy — doesn't have time to manually follow up with everyone

RESEARCH CATEGORIES:
1. NICHE TRENDS — What's happening in med spas right now (seasonality, popular treatments, pricing trends)
2. PAIN POINTS — Specific operational/revenue problems med spa owners complain about publicly
3. AI AUTOMATION LANDSCAPE — What AI tools are targeting med spas, what's working/failing
4. PROSPECT INTELLIGENCE — Behavioral patterns, objections, decision triggers
5. CONTENT ANGLES — Topics that would make a med spa owner stop scrolling and read
6. OUTREACH HOOKS — Opening lines that would get a cold DM or email opened

Always ground your analysis in specifics. Use real examples, real numbers, real scenarios.
Think: "what would make a Loudoun County med spa owner respond to a cold message today?"`;

export async function runMarketResearchAgent(
  options: {
    focus?: "med-spa" | "ai-niche" | "prospect-intel" | "all";
    vertical?: string;
    depth?: "quick" | "deep";
  } = {}
): Promise<AgentResult> {
  const client = new Anthropic();
  printHeader("MARKET RESEARCH AGENT");

  const focus = options.focus ?? "all";
  const vertical = options.vertical ?? "med spas in Northern Virginia (NOVA/DMV)";
  const depth = options.depth ?? "deep";

  log("market-research", `Focus: ${focus} | Vertical: ${vertical} | Depth: ${depth}`);

  const prompt = `Run a ${depth} market intelligence report for SparkRise AI.

Target: ${vertical}
Focus area: ${focus}

Deliver the following sections:

## 1. MED SPA NICHE PULSE (right now)
- Current season's high/low demand treatments
- What med spa owners are worried about heading into next 90 days
- Industry-specific revenue patterns (when do they feel the pain?)
- Any external pressures (economy, competition, regulations) affecting them now

## 2. PROSPECT PAIN POINTS (specific, not generic)
List 8-10 exact pain points a NOVA med spa owner would verbalize if you asked them "what's your biggest business problem?"
Format each as: "I [pain]" — written in the owner's own words.

## 3. AI AUTOMATION NICHE INTELLIGENCE
- What AI tools are currently targeting med spas (name them)
- Why most of them fail small practices
- What gap SparkRise fills that no one else is filling
- Objections SparkRise will face ("I already use X", "I tried AI before")

## 4. CONTENT ANGLES (proven to get engagement)
10 specific post angles that would make a med spa owner stop scrolling:
- Frame each as a hook
- Explain why it triggers engagement for this audience

## 5. COLD OUTREACH INTELLIGENCE
- Top 3 opening lines for cold LinkedIn DM to a med spa owner
- Top 3 email subject lines
- Top 3 Facebook group post angles to attract med spa owners
- Common objection: "We already have a CRM" — how to handle it
- Common objection: "We don't have a big budget" — how to reframe it

## 6. 30-DAY OPPORTUNITY WINDOW
What specific trigger events or seasonal factors in the next 30 days make this the right time to pitch dead database reactivation to NOVA med spas?`;

  let fullOutput = "";

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 8192,
    thinking: { type: "adaptive" },
    system: RESEARCH_SYSTEM,
    messages: [{ role: "user", content: prompt }],
  });

  stream.on("text", (delta) => {
    printStream(delta);
    fullOutput += delta;
  });

  await stream.finalMessage();
  console.log("\n");

  const result: AgentResult = {
    agent: "market-research",
    timestamp: timestamp(),
    output: fullOutput,
    metadata: { focus, vertical, depth },
  };

  await sendToN8n({
    agent: "market-research",
    timestamp: result.timestamp,
    data: result,
    action: "research_report",
  });

  await saveOutput(result);
  return result;
}

export async function researchProspect(
  businessName: string,
  location: string,
  additionalContext?: string
): Promise<AgentResult> {
  const client = new Anthropic();
  printHeader("PROSPECT INTELLIGENCE");
  log("market-research", `Researching: ${businessName} — ${location}`);

  const prompt = `Build a prospect intelligence brief for a cold outreach to this med spa:

Business: ${businessName}
Location: ${location}
${additionalContext ? `Additional context: ${additionalContext}` : ""}

Deliver:
1. LIKELY PAIN POINTS — What problems is this specific business probably experiencing right now?
2. PERSONALIZATION HOOKS — 3 specific opening lines for cold outreach that reference their situation
3. OFFER FRAMING — How to position the free reactivation offer for this specific business
4. LIKELY OBJECTIONS — What will they push back on? How to handle each.
5. BEST CHANNEL — LinkedIn, cold email, or Facebook DM? Why?
6. TIMING — Best time/day to reach out for this type of business`;

  let fullOutput = "";

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 4096,
    thinking: { type: "adaptive" },
    system: RESEARCH_SYSTEM,
    messages: [{ role: "user", content: prompt }],
  });

  stream.on("text", (delta) => {
    printStream(delta);
    fullOutput += delta;
  });

  await stream.finalMessage();
  console.log("\n");

  const result: AgentResult = {
    agent: "market-research",
    timestamp: timestamp(),
    output: fullOutput,
    metadata: { businessName, location },
  };

  return result;
}
