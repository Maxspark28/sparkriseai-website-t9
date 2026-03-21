/**
 * Outreach Writer Agent
 *
 * Writes personalized multi-touch outreach sequences — like ManyChat but smarter:
 * - LinkedIn DM sequences
 * - Cold email sequences
 * - Facebook DM sequences
 * - SMS/WhatsApp sequences (for Spanish-speaking market)
 *
 * Built for SparkRise AI's dead database reactivation offer to med spas.
 * Also handles personal brand DM responses and follow-ups.
 */

import Anthropic from "@anthropic-ai/sdk";
import { log, printStream, printHeader, timestamp, sendToN8n, saveOutput } from "../utils.js";
import type { OutreachSequence, AgentResult } from "../types.js";

const OUTREACH_SYSTEM = `You are Cristian González Rivera's outreach copywriter for SparkRise AI.

CRISTIAN'S BACKGROUND:
- Sales background — he knows closing
- Bilingual English/Spanish, Puerto Rican roots, DMV-based
- Founder of SparkRise AI — builds AI automation systems for med spas

THE OFFER (primary):
FREE dead database reactivation campaign for med spas:
- We take their dormant past-customer list
- Build and run a personalized reactivation sequence using AI
- ONLY charge if we generate booked appointments
- Zero risk for the business owner
- This is the entry wedge into the Revenue Recovery System

OUTREACH PRINCIPLES (non-negotiable):

1. SHORT FIRST MESSAGE — Under 3 sentences. Curiosity gap. End on a question.
2. HUMAN, NOT PITCHY — Sounds like a real person noticed them, not a blast
3. PERSONALIZATION HOOK — Reference something specific about their business/location/situation
4. PAIN BEFORE OFFER — Identify their problem before you mention anything you do
5. NO ATTACHMENTS in cold messages — Link only after they respond
6. PATTERN INTERRUPT — Don't sound like every other AI vendor
7. FOLLOW-UP ADDS VALUE — Each follow-up message adds something new, not just "checking in"
8. 5-TOUCH MAX — Day 1, Day 3, Day 7, Day 14, Day 21 (breakup)
9. SPANISH SEQUENCES — Simple, warm, WhatsApp-native tone

CHANNEL RULES:

LINKEDIN DM:
- 150 chars or less for the first message
- Reference their profile/business specifically
- Never attach a calendar link in msg 1
- Connection request note: ultra-short, curious, not pitchy

COLD EMAIL:
- Subject line: personalized, curiosity-based, no clickbait
- Opening: mirror their world, not your product
- Body: 3-5 sentences max per paragraph
- CTA: one clear ask per email
- P.S. lines: often the most-read part — use them

FACEBOOK DM:
- Casual, friendly, like a fellow business owner
- Reference the group you connected in or shared context
- Lower guard — more conversational

SMS / WHATSAPP:
- Under 160 chars for SMS
- WhatsApp can be longer but still conversational
- Spanish: "usted" in first touch for professionalism, then "tú" once they respond
- Include emoji sparingly — 1 max for professional contexts

SEQUENCES TO MASTER:
- Cold outreach to med spa (entry: free reactivation offer)
- Dead lead reactivation (for Cristian's OWN lead list)
- Post-content DM (follow up with people who engaged with posts)
- Speaking to someone who visited the website but didn't book
- Referral request from past contact`;

export async function runOutreachWriterAgent(
  options: {
    target?: string;
    channel?: "linkedin" | "email" | "facebook" | "sms_whatsapp";
    language?: "en" | "es";
    offer?: string;
    sequenceLength?: number;
    context?: string;
  } = {}
): Promise<AgentResult> {
  const client = new Anthropic();
  printHeader("OUTREACH WRITER AGENT");

  const channel = options.channel ?? "linkedin";
  const language = options.language ?? "en";
  const target = options.target ?? "med spa owner in Northern Virginia";
  const offer = options.offer ?? "free dead database reactivation campaign (performance-based, zero risk)";
  const days = options.sequenceLength ?? 5;

  log("outreach-writer", `Channel: ${channel} | Language: ${language} | Target: ${target}`);

  const prompt = `Write a complete ${days}-touch outreach sequence.

TARGET: ${target}
CHANNEL: ${channel}
LANGUAGE: ${language}
OFFER: ${offer}
${options.context ? `CONTEXT/PERSONALIZATION: ${options.context}` : ""}

Write the full sequence with:
- Each message clearly labeled (Day X — Touch X)
- ${channel === "email" ? "Subject line + body + P.S." : "Full message text"}
- Intent tag: (AWARENESS / VALUE / OFFER / FOLLOWUP / BREAKUP)
- Note on personalization slot: [BUSINESS_NAME], [OWNER_NAME], [LOCATION], etc.
- Character/word count for each message

After the sequence, include:
## HANDLING RESPONSES
Write 3 response scripts:
1. "I'm interested, tell me more"
2. "We already use [tool/system]"
3. "Not a good time right now"`;

  let fullOutput = "";

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 8192,
    thinking: { type: "adaptive" },
    system: OUTREACH_SYSTEM,
    messages: [{ role: "user", content: prompt }],
  });

  stream.on("text", (delta) => {
    printStream(delta);
    fullOutput += delta;
  });

  await stream.finalMessage();
  console.log("\n");

  const result: AgentResult = {
    agent: "outreach-writer",
    timestamp: timestamp(),
    output: fullOutput,
    metadata: { channel, language, target, offer, days },
  };

  await sendToN8n({
    agent: "outreach-writer",
    timestamp: result.timestamp,
    data: result,
    action: "outreach_sequence",
  });

  await saveOutput(result);
  return result;
}

export async function writeSingleOutreach(
  channel: "linkedin" | "email" | "facebook" | "sms",
  context: string,
  language: "en" | "es" = "en"
): Promise<string> {
  const client = new Anthropic();
  log("outreach-writer", `Writing single ${channel} message (${language})...`);

  let output = "";

  const stream = client.messages.stream({
    model: "claude-opus-4-6",
    max_tokens: 2048,
    system: OUTREACH_SYSTEM,
    messages: [
      {
        role: "user",
        content: `Write a single cold ${channel} message in ${language}.\n\nContext: ${context}\n\nMake it human, specific, and short. Include personalization placeholders.`,
      },
    ],
  });

  stream.on("text", (delta) => {
    printStream(delta);
    output += delta;
  });

  await stream.finalMessage();
  console.log("\n");
  return output;
}

export async function writeReactivationMessage(
  leadInfo: {
    name: string;
    businessName: string;
    lastContact: string;
    channel: "sms" | "email" | "whatsapp";
    language: "en" | "es";
  }
): Promise<string> {
  const client = new Anthropic();
  log("outreach-writer", `Writing reactivation for ${leadInfo.name} @ ${leadInfo.businessName}...`);

  const prompt = `Write a dead-lead reactivation message for:

Name: ${leadInfo.name}
Business: ${leadInfo.businessName}
Last contact: ${leadInfo.lastContact}
Channel: ${leadInfo.channel}
Language: ${leadInfo.language}

This is a past lead who showed interest but went cold. The goal is to get them back into a conversation — not to pitch immediately. Reference the time gap naturally. Be warm, not salesy. Give them a reason to respond.`;

  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: OUTREACH_SYSTEM,
    messages: [{ role: "user", content: prompt }],
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock?.type === "text" ? textBlock.text : "";
}
