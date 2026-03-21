import fs from "fs/promises";
import path from "path";
import type { WebhookPayload, AgentResult } from "./types.js";

export function timestamp(): string {
  return new Date().toISOString();
}

export function log(agent: string, message: string): void {
  console.log(`[${agent}] ${new Date().toLocaleTimeString()} — ${message}`);
}

export async function sendToN8n(payload: WebhookPayload): Promise<void> {
  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    log("utils", "N8N_WEBHOOK_URL not set — skipping webhook");
    return;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      log("utils", `n8n webhook failed: ${res.status} ${res.statusText}`);
    } else {
      log("utils", `n8n webhook sent: ${payload.agent} / ${payload.action ?? "output"}`);
    }
  } catch (err) {
    log("utils", `n8n webhook error: ${err}`);
  }
}

export async function saveOutput(result: AgentResult): Promise<string> {
  const outputDir = process.env.OUTPUT_DIR ?? "./output";
  await fs.mkdir(outputDir, { recursive: true });

  const date = new Date().toISOString().split("T")[0];
  const filename = `${date}-${result.agent}.md`;
  const filepath = path.join(outputDir, filename);

  const content = [
    `# ${result.agent}`,
    `**Generated:** ${result.timestamp}`,
    "",
    result.output,
  ].join("\n");

  await fs.writeFile(filepath, content, "utf-8");
  log(result.agent, `Saved to ${filepath}`);
  return filepath;
}

export function printStream(chunk: string): void {
  process.stdout.write(chunk);
}

export function printHeader(title: string): void {
  const line = "─".repeat(60);
  console.log(`\n${line}`);
  console.log(`  ${title}`);
  console.log(`${line}\n`);
}
