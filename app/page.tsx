import {
  Clock,
  DollarSign,
  MessageSquare,
  Bot,
  Calendar,
  RotateCcw,
  Star,
  BarChart3,
  Globe,
  Link2,
  CheckCircle2,
  ArrowRight,
  Shield,
  ChevronDown,
  BadgeCheck,
  Search,
  TrendingUp,
  FileText,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CalButton } from "@/components/cal-button"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

const faqs = [
  {
    question: "How fast does the AI follow up with new leads?",
    answer:
      "Our AI responds to new leads in under 5 minutes, 24 hours a day, 7 days a week — including weekends and holidays. Studies show leads go cold after just 5 minutes, so speed is everything.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with service-based businesses in Northern Virginia and the DMV area — including HVAC, dental practices, real estate agents, home services, law firms, and more. If you rely on appointments to generate revenue, we can help.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most clients are fully live within 5 business days. We handle the entire setup — AI configuration, CRM integration, and calendar connection — so you can focus on running your business.",
  },
  {
    question: "What happens if I don't get results?",
    answer:
      "We back every engagement with a 30-day guarantee. If you don't book a single appointment in the first 30 days, we keep working for free until you do. We only win when you win.",
  },
  {
    question: "Do I need to change my existing software or CRM?",
    answer:
      "No. Our system integrates with the tools you already use — GoHighLevel, HubSpot, Salesforce, and most major CRMs. We connect to your existing workflow rather than replacing it.",
  },
  {
    question: "Does the AI work in Spanish?",
    answer:
      "Yes. Our AI is fully bilingual in English and Spanish, allowing you to serve a wider customer base in the Northern Virginia and DMV market without any extra effort.",
  },
]

export default function SparkRiseAI() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-[var(--orange)]/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-4 py-1.5 text-sm font-medium text-[var(--orange)]">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)]" />
            AI Automation for Northern Virginia Service Businesses
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            We Build AI Systems That Book Appointments{" "}
            <span className="text-[var(--orange)]">While You Sleep</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Your leads get followed up in under 5 minutes, 24/7 — so you never lose another
            potential customer to slow response times.
          </p>
          <div className="mt-10">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--orange)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Book Your Free Revenue Leak Audit
              <ArrowRight className="h-5 w-5" />
            </CalButton>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> Live in 5 business days
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> 30-day results guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[var(--orange)]" /> No long-term contracts
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Leads Are Slipping Through the Cracks</h2>
            <p className="mt-4 text-lg text-muted-foreground">Every hour of delay is lost revenue.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-[var(--orange)]/10 p-4">
                  <Clock className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Slow Response Times</h3>
                <p className="mt-2 text-muted-foreground">
                  {"Studies show leads go cold after just 5 minutes. Can you respond that fast, every time?"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-[var(--orange)]/10 p-4">
                  <DollarSign className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Missed Revenue</h3>
                <p className="mt-2 text-muted-foreground">
                  {"Every unanswered lead is money walking out the door. How many did you miss this week?"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-[var(--orange)]/10 p-4">
                  <RotateCcw className="h-8 w-8 text-[var(--orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Dead Lead Database</h3>
                <p className="mt-2 text-muted-foreground">
                  {"You're sitting on thousands of old leads. They're not dead — they're just waiting to be reactivated."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Serving service-based businesses across Northern Virginia & the DMV
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-muted-foreground">
            {["HVAC & Plumbing", "Dental Practices", "Real Estate", "Home Services", "Law Firms", "Med Spas"].map(
              (industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-border px-4 py-1.5 text-sm font-medium"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">Live in 5 business days. Zero disruption to your workflow.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                step: 1,
                title: "Capture",
                desc: "AI captures leads from all your channels — web forms, social media, and ads.",
              },
              {
                icon: Bot,
                step: 2,
                title: "Follow Up",
                desc: "Instant AI-powered SMS and email follow-up within minutes, not hours.",
              },
              {
                icon: Calendar,
                step: 3,
                title: "Book",
                desc: "Qualified leads automatically booked on your calendar. You just show up.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon className="h-10 w-10" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--orange)] text-sm font-bold text-white">
                    {step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{"What's Included"}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to automate your lead follow-up and book more appointments.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessageSquare, title: "AI SMS + Email Follow-up", desc: "Instant multi-channel outreach" },
              { icon: Bot, title: "Lead Qualification Chatbot", desc: "Pre-qualify leads automatically" },
              { icon: Calendar, title: "Appointment Booking Automation", desc: "Seamless calendar integration" },
              { icon: RotateCcw, title: "Dead Lead Reactivation", desc: "Revive your old lead database" },
              { icon: Star, title: "Google Review Automation", desc: "Boost your online reputation" },
              { icon: BarChart3, title: "Weekly Revenue Report", desc: "Track ROI and performance" },
              { icon: Globe, title: "Bilingual English/Spanish AI", desc: "Serve more customers" },
              { icon: Link2, title: "CRM Integration", desc: "Works with your existing tools" },
            ].map((feature, index) => (
              <Card key={index} className="border-border bg-card transition-all hover:border-[var(--orange)]/40">
                <CardContent className="p-6">
                  <feature.icon className="mb-4 h-8 w-8 text-primary" />
                  <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect on the Call */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">What Happens on Your Free Audit Call</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              30 minutes. No pressure. Real, actionable insights.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Search,
                step: "01",
                title: "We Map Your Lead Flow",
                desc: "We look at where leads come in and exactly where they fall off — your form, calls, social, or ads.",
              },
              {
                icon: TrendingUp,
                step: "02",
                title: "We Find the Revenue Leak",
                desc: "We put a real number on what slow follow-up is costing your business every single month.",
              },
              {
                icon: FileText,
                step: "03",
                title: "You Leave with a Plan",
                desc: "Whether you work with us or not, you walk away with a clear action plan you can use immediately.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <Card key={step} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--orange)]/10">
                      <Icon className="h-5 w-5 text-[var(--orange)]" />
                    </div>
                    <span className="text-2xl font-bold text-[var(--orange)]/30">{step}</span>
                  </div>
                  <h3 className="font-semibold text-card-foreground">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--orange)]/90">
              Book Your Free 30-Min Audit
              <ArrowRight className="h-5 w-5" />
            </CalButton>
            <p className="mt-3 text-sm text-muted-foreground">Free. No commitment. No pitch deck.</p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--orange)]/30 bg-[var(--orange)]/5 p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="shrink-0 rounded-full bg-[var(--orange)]/10 p-5">
                <Shield className="h-10 w-10 text-[var(--orange)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Our 30-Day Results Guarantee</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {"We're so confident in our system that we put our time on the line. "}
                  <strong className="text-foreground">
                    {"If you don't book at least one appointment in your first 30 days, we keep working for free — no questions asked — until you do."}
                  </strong>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["No long-term contracts", "Cancel anytime", "Setup in 5 business days"].map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-sm font-medium text-[var(--orange)]">
                      <BadgeCheck className="h-4 w-4" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know before booking a call.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-border bg-card px-6 py-4 open:pb-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-card-foreground">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-[var(--orange)]/10 to-primary/10 p-8 text-center ring-1 ring-[var(--orange)]/20 sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Stop Losing Leads?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {"Book your free revenue leak audit and find out exactly how many appointments you're leaving on the table."}
            </p>
            <CalButton className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[var(--orange)]/90">
              Book Your Free Audit Now
              <ArrowRight className="h-5 w-5" />
            </CalButton>
            <p className="mt-4 text-sm text-muted-foreground">Free. No commitment. 30 minutes.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
