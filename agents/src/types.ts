export interface AgentResult {
  agent: string;
  timestamp: string;
  output: string;
  metadata?: Record<string, unknown>;
}

export interface ContentPost {
  platform: "linkedin" | "facebook" | "facebook_es";
  hook: string;
  body: string;
  cta: string;
  hashtags: string[];
  postType: "story" | "pain-point" | "proof" | "authority" | "value";
}

export interface ContentBatch {
  posts: ContentPost[];
  weekOf: string;
  theme: string;
}

export interface MarketResearch {
  nicheTrends: string[];
  competitorInsights: string[];
  prospectPainPoints: string[];
  contentAngles: string[];
  keywordOpportunities: string[];
  outreachHooks: string[];
}

export interface OutreachSequence {
  target: string;
  channel: "linkedin_dm" | "email" | "facebook_dm" | "sms";
  language: "en" | "es";
  messages: OutreachMessage[];
}

export interface OutreachMessage {
  day: number;
  subject?: string;
  body: string;
  intent: "awareness" | "value" | "offer" | "followup" | "breakup";
}

export interface BrandVoiceOutput {
  original: string;
  rewritten: string;
  voiceScore: number;
  notes: string[];
}

export interface WebhookPayload {
  agent: string;
  timestamp: string;
  data: unknown;
  action?: string;
}
