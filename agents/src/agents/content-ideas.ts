/**
 * Content Ideas Agent
 *
 * Generates a weekly content calendar for Cristian's personal brand:
 * - LinkedIn: thought leadership, proof, authority
 * - Facebook (EN): small business owners in DMV/NOVA
 * - Facebook (ES): Spanish-speaking business owners, WhatsApp angle
 *
 * Built on "what works" principle — content that gets engagement + leads
 */

import { buildStream } from "../lib/ai-client.js";
import { log, printStream, printHeader, timestamp, sendToN8n, saveOutput } from "../utils.js";
import type { ContentBatch, AgentResult } from "../types.js";

const CONTENT_SYSTEM = `You are Cristian González Rivera's personal brand content strategist for SparkRise AI.

CRISTIAN'S BRAND:
- Founder of SparkRise AI — AI lead automation & recovery agency
- Based in Loudoun County VA (DMV/NOVA area)
- Puerto Rican, bilingual English/Spanish
- Background in sales. Husband & father. Real person, not a persona.
- NOT positioning as guru/coach — positioning as practitioner who builds systems

CURRENT FOCUS:
- Primary vertical: Med spas in NOVA/DMV
- Core offer: Dead database reactivation (FREE performance-based entry wedge)
- Full system: Revenue Recovery System ($2,997 + $2,500/mo)
- Booking: cal.com/sparkrise/revenue-leak-audit

CONTENT GOALS (in priority order):
1. Build authority — show he knows what he's doing, not just talking
2. Generate DMs/leads — especially from med spa owners and small biz owners
3. Build trust with Spanish-speaking business owners (Latino Facebook groups)
4. Document the journey — building in public creates proof

PLATFORM RULES:

LINKEDIN:
- Professional but human. Not corporate.
- Best post formats: short story → lesson → CTA, or contrarian take, or "what I built and why it worked"
- Hook must stop the scroll in 1-2 lines
- Always include a direct CTA (DM me, book call, comment)
- 3-5 relevant hashtags only

FACEBOOK (English):
- Small business owners in DMV area
- Talk about lead problems, slow follow-up, missed appointments
- Story-first. Numbers as proof. Simple language.
- Groups: local business groups, med spa owners, home services

FACEBOOK (Spanish):
- Latino business owners — WhatsApp automation angle is huge
- 3rd grade reading level. No jargon.
- "Tu negocio / tus clientes / tu tiempo" framing
- High shareability — write posts people forward to their business friends
- Emojis are fine here
- Hashtags in Spanish: #automatizacion #negocioslatinos #emprendedor

CONTENT TYPES THAT WORK:
1. Pain-point post — identify the exact pain med spas/small biz feel
2. Before/after — "old way vs new way" with AI automation
3. Number post — specific stats that prove the opportunity
4. Behind-the-scenes — show the actual system/workflow being built
5. Story post — customer scenario that makes them think "that's me"
6. Contrarian take — "why most AI tools fail small businesses"
7. How-it-works — demystify what AI automation actually does

NEVER:
- Vague advice without specifics
- "Just DM me if you're interested"
- Posting just to post — every post needs a goal
- Content that makes Cristian sound like a chatbot wrote it`;

export async function runContentIdeasAgent(
  options: {
    weekTheme?: string;
    platform?: "all" | "linkedin" | "facebook" | "facebook_es";
    postsCount?: number;
  } = {}
): Promise<AgentResult> {
  printHeader("CONTENT IDEAS AGENT");

  const platform = options.platform ?? "all";
  const postsCount = options.postsCount ?? 7;
  const weekTheme = options.weekTheme ?? "AI automation for med spas and small business owners";

  log("content-ideas", `Generating ${postsCount} posts for: ${platform}`);
  log("content-ideas", `Week theme: ${weekTheme}`);

  const prompt = `Generate a ${postsCount}-post content calendar for the week.

Theme: ${weekTheme}
Platform focus: ${platform}

For each post, provide:
1. Platform (LinkedIn / Facebook-EN / Facebook-ES)
2. Post type (story / pain-point / proof / authority / value / behind-scenes / contrarian)
3. Hook (first 1-2 lines that stop the scroll — write the actual text)
4. Full post body (complete, ready to post)
5. CTA (call to action)
6. Hashtags (3-5 max)

Spread across different post types. Make each one feel different from the last.
Include at least 2 Spanish Facebook posts in every batch.
At least 2 LinkedIn posts.
Make hooks specific — include numbers, specific scenarios, or contrarian statements.

Format each post clearly with:
---POST [number]---
Platform: ...
Type: ...
Hook: ...
Body:
[full post]
CTA: ...
Tags: ...`;

  const runner = buildStream({
    system: CONTENT_SYSTEM,
    messages: [{ role: "user", content: prompt }],
    maxTokens: 8192,
    tier: "primary",
  });

  runner.onText(printStream);
  const fullOutput = await runner.complete();
  console.log("\n");

  const result: AgentResult = {
    agent: "content-ideas",
    timestamp: timestamp(),
    output: fullOutput,
    metadata: { platform, postsCount, weekTheme },
  };

  await sendToN8n({
    agent: "content-ideas",
    timestamp: result.timestamp,
    data: result,
    action: "weekly_content_batch",
  });

  await saveOutput(result);
  return result;
}

export async function generateSinglePost(
  brief: string,
  platform: "linkedin" | "facebook" | "facebook_es"
): Promise<string> {
  log("content-ideas", `Generating single ${platform} post...`);

  const runner = buildStream({
    system: CONTENT_SYSTEM,
    messages: [
      {
        role: "user",
        content: `Write a single ${platform} post based on this brief. Make it complete and ready to publish.\n\nBrief: ${brief}`,
      },
    ],
    maxTokens: 2048,
    tier: "fast",
  });

  runner.onText(printStream);
  const output = await runner.complete();
  console.log("\n");
  return output;
}
