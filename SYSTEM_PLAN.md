# SparkRise AI — Full System Plan
*Written in plain language. No tech jargon.*

---

## What Is This, Really?

Your website (sparkriseai.com) is the **storefront** — it tells people what you do and gets them to book a call.

But behind the website lives your **AI Brain** — a set of smart programs (called agents) that do the actual work:

- Write LinkedIn posts and Facebook content for you
- Research med spa businesses you want to reach
- Write personalized outreach messages (DMs, emails, SMS)
- Help you manage and track who you've reached out to

Right now the AI Brain exists but has **no front door** — you can only use it by typing commands into a terminal (like a programmer would). That's what we're fixing.

---

## The Full System — How It All Connects

```
YOU (on your phone or laptop)
         |
         |-- Telegram Bot (mobile, quick approvals)
         |-- Website Dashboard (desktop, full view)
         |
         ↓
    n8n (your automation hub — already running)
         |
         |-- Schedules when agents run (daily, weekly)
         |-- Routes outputs to Telegram + Dashboard
         |-- Manages the approval queue
         |
         ↓
    AI Agents (the brains — already built)
         |
         |-- Content Agent → writes 7 posts/week (LinkedIn, Facebook EN, Facebook ES)
         |-- Research Agent → looks up med spa businesses, finds their pain points
         |-- Outreach Agent → writes personalized DMs, emails, SMS sequences
         |-- Brand Voice Agent → makes everything sound like YOU
         |-- Coordinator → runs all agents in the right order
         |
         ↓
    Outreach Log (your paper trail)
         |
         |-- Every message written goes in the log
         |-- You approve it (or edit it) before it sends
         |-- Tracks: written → approved → sent → seen → replied
         |
         ↓
    Sending Systems (low/no cost)
         |-- Email: Resend (free tier = 3,000 emails/month)
         |-- SMS: Twilio (~$1-5/month)
         |-- LinkedIn: You copy-paste (or semi-auto helper)
         |-- Facebook: You copy-paste from dashboard
```

---

## Answering Your Questions

### "Do you need an OpenAI key?"
**Yes.** OpenAI (ChatGPT) is what powers the agents right now.
You need to go to platform.openai.com, get an API key, and we put it in a `.env` file.
Cost: roughly $10-20/month depending on how much you use it.

If you also have an Anthropic (Claude) key, the system uses it for bigger/better tasks automatically. But OpenAI alone works fine.

### "Where is this running?"
Right now: **nowhere**. It lives in this code folder but nothing is turned on yet.

After we build the plan below:
- The agents run on a schedule inside **n8n** (which you already have)
- The dashboard lives on **your website** (a private, password-protected page)
- Your phone gets pinged via **Telegram**

### "Where is my dashboard?"
**It doesn't exist yet.** We're going to build it at sparkriseai.com/dashboard.
It will show you:
- All content the AI wrote (approve or edit before posting)
- All outreach messages (approve or edit before sending)
- A log of everyone you've reached out to and where they are in the sequence
- Research reports on businesses you're targeting

### "Can I send outputs to Discord or Telegram?"
You chose **Telegram + Dashboard**.
We'll build a Telegram bot that:
- Pings you when new content or outreach is ready
- Shows you a preview
- You type "approve" or "edit" right from your phone
- Then it goes in the queue to send

### "Can I use this chat to execute things?"
**YES.** This chat (Claude Code) is like a direct line into your system.
You can type things like:
- *"Write me 3 LinkedIn posts about med spa lead generation"*
- *"Research Glow Med Spa in Ashburn VA"*
- *"Write an outreach sequence for a dental office in Fairfax"*

And I will run the agents and give you the output right here. No coding knowledge needed.

### "Am I using n8n?"
**Yes, and you already have it running.**
n8n is the scheduler/dispatcher. Think of it like a factory manager:
- It tells the agents when to work (every Monday morning, generate this week's content)
- It takes the output and routes it to Telegram and your dashboard
- It watches your approval queue and sends things once you approve

We need to connect your n8n to this system by setting up the webhook URL.

### "Am I using ManyChat?"
**Not right now.** ManyChat is great for Facebook/Instagram comment-to-DM automation.
We can add it later as Phase 2, especially for:
- Someone comments on your Facebook post → ManyChat sends them a DM automatically
- Spanish-speaking audience campaigns on Facebook

For Phase 1, we don't need it.

### "Will you handle my outreach? Lead automation? LinkedIn posts/research?"
Here's exactly what the AI will handle vs. what you approve:

| Task | AI Does | You Do |
|------|---------|--------|
| Write 7 posts/week | ✅ Auto | Approve or edit |
| Research a prospect | ✅ Auto | Review report |
| Write DM sequence (5 messages) | ✅ Auto | Approve first message before it sends |
| Track if they replied | ✅ Logs it | Check the dashboard |
| Send follow-up messages | ✅ Auto (after approval pattern set) | Set the rules once |
| LinkedIn connection requests | Semi-auto | You click send |
| Emails | ✅ Auto sends | After your approval |
| SMS | ✅ Auto sends | After your approval |

---

## Build Phases

### Phase 1 — Turn On the Engine (Week 1)
1. Set up your `.env` file with your OpenAI key
2. Connect n8n to the existing webhook (already coded, just needs your n8n URL)
3. Test all 5 agents work by running them manually
4. Save outputs to files you can read

*Result: Agents work. You can run them from this chat.*

### Phase 2 — Telegram Bot (Week 1-2)
1. Create a Telegram bot (free, takes 5 minutes to register)
2. Connect it so when agents finish, you get a Telegram message with the output
3. You can type "approve" or reply with edits right from Telegram
4. Approved items go into a queue

*Result: You run your AI system from your phone.*

### Phase 3 — Dashboard on Your Website (Week 2-3)
1. Add a private `/dashboard` page to sparkriseai.com
2. Password login (simple, just for you)
3. Shows all agent outputs organized by type (Content, Research, Outreach)
4. Approve, edit, or reject with one click
5. Shows the Outreach Log (who you contacted, when, what stage they're at)

*Result: Full desktop control center.*

### Phase 4 — Outreach Log & Sending (Week 3-4)
1. Database to track every prospect (free with Supabase)
2. Every message written goes in the log with status
3. Email sending via Resend (free tier covers you easily)
4. SMS via Twilio (pay as you go, very cheap)
5. LinkedIn: paste-ready format, or semi-automated helper
6. Approval system: you approve the first touch, then follow-ups auto-send on schedule

*Result: Full outreach system with paper trail. You stay in control.*

### Phase 5 — Scheduling & Automation (Week 4-5)
1. n8n runs the Content Agent every Monday (generates the week's posts)
2. n8n runs the Research Agent on demand or weekly
3. n8n manages the outreach follow-up timing (Day 1, 3, 7, 14, 21)
4. Everything runs automatically, you just review and approve

*Result: The system runs itself. You just make decisions.*

---

## What It Costs (Low/No Cost Focus)

| Tool | Cost | What It Does |
|------|------|------|
| OpenAI API | ~$10-20/mo | Powers all the AI agents |
| Anthropic (optional) | ~$10-20/mo | Better quality for heavy tasks |
| n8n | Already yours | Scheduler/automation hub |
| Telegram Bot | FREE | Mobile notifications + approvals |
| Supabase | FREE tier | Database for outreach log |
| Resend | FREE tier (3k emails) | Email sending |
| Twilio | ~$1-5/mo | SMS sending |
| Vercel (hosting) | FREE tier | Runs your website |
| **TOTAL** | **~$15-25/mo** | Full AI-powered outreach system |

---

## What You DON'T Need (Yet)
- GoHighLevel (add later when you have paying clients)
- ManyChat (Phase 2 add-on)
- Zapier (n8n replaces this)
- Any expensive SaaS tools

---

## Your Questions About "What Did You Just Build?"

Before today, someone already built:
- ✅ The marketing website (sparkriseai.com)
- ✅ 5 AI agents (content, research, outreach, brand voice, coordinator)
- ✅ A smart AI routing system (uses cheapest AI that still gives good results)
- ✅ A basic n8n webhook (just needs your n8n URL to activate)
- ✅ The logic for a weekly content sprint and outreach campaign

What's **NOT built yet** (what we do next):
- ❌ Your `.env` file with real API keys
- ❌ Telegram bot
- ❌ Website dashboard
- ❌ Outreach log / database
- ❌ Email/SMS sending integration
- ❌ n8n workflows (schedules + routing)

---

## How We Work Together

You use this chat to:
- Ask me to build specific features ("build the Telegram bot")
- Run agents on demand ("research this business for me")
- Ask questions about the system
- Approve or review what I've done before I push it live

I will:
- Never push changes to your live website without telling you first
- Always explain what I'm doing in plain language
- Build things one phase at a time so nothing breaks
- Keep costs low/free wherever possible

---

## Next Step (After You Approve This Plan)

**Phase 1 startup — I'll need from you:**
1. Your OpenAI API key (so agents can actually run)
2. Your n8n webhook URL (so outputs route to n8n)
3. Your Telegram username or phone number (to set up the bot)

That's it. I'll handle the rest.
