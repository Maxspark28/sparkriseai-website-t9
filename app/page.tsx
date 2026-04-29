"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Zap,
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
  Search,
  TrendingUp,
  FileText,
  ChevronDown,
  Sparkles,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalButton } from "@/components/cal-button"

const faqs = [
  { question: "How fast does the AI follow up with new leads?", answer: "Our AI responds to new leads in under 5 minutes, 24 hours a day, 7 days a week — including weekends and holidays. Studies show leads go cold after just 5 minutes, so speed is everything." },
  { question: "What types of businesses do you work with?", answer: "We work with home service businesses — including HVAC, plumbing, landscaping, roofing, concrete, dental practices, real estate agents, law firms, and more. If you rely on appointments to generate revenue, we can help." },
  { question: "How long does it take to go live?", answer: "Most clients are fully live within 5 business days. We handle the entire setup — AI configuration, CRM integration, and calendar connection — so you can focus on running your business." },
  { question: "What happens if I don't get results?", answer: "We back every engagement with a 30-day guarantee. If you don't book a single appointment in the first 30 days, we keep working for free until you do. We only win when you win." },
  { question: "Do I need to change my existing software or CRM?", answer: "No. Our system integrates with the tools you already use — GoHighLevel, HubSpot, Salesforce, and most major CRMs. We connect to your existing workflow rather than replacing it." },
  { question: "Does the AI work in Spanish?", answer: "Yes. Our AI is fully bilingual in English and Spanish, allowing you to serve a wider customer base without any extra effort on your end." },
]

const stats = [
  { value: "5min", label: "Average Response Time" },
  { value: "47+", label: "Leads Reactivated" },
  { value: "5 Days", label: "To Go Live" },
  { value: "24/7", label: "AI Availability" },
]

const projectedResults = [
  {
    trade: "HVAC Company",
    metric: "$18K+",
    metricLabel: "projected reactivation revenue",
    result: "An HVAC business with a stale lead database could recover tens of thousands through automated follow-up alone.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
    alt: "HVAC technician working on a rooftop unit",
  },
  {
    trade: "Landscaping Crew",
    metric: "12+",
    metricLabel: "projected new jobs per month",
    result: "A landscaping crew responding to leads in under 5 minutes is positioned to win the job before competitors even pick up the phone.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    alt: "Landscaping crew working on a lawn",
  },
  {
    trade: "General Contractor",
    metric: "5x",
    metricLabel: "faster lead response",
    result: "Contractors who follow up in under 5 minutes are 5x more likely to convert a lead. Our system makes that the default.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    alt: "Construction workers at a jobsite",
  },
]

export default function SparkRiseAI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-3 no-underline group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                <Zap className="h-5 w-5 text-white" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-primary opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
              </div>
              <span className="text-xl font-bold text-foreground">SparkRise AI</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          <CalButton className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-6 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </CalButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground mb-8 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              AI Lead Automation for Contractors
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Stop Losing Jobs to
              <br />
              <span className="bg-gradient-to-r from-accent via-orange-400 to-accent bg-clip-text text-transparent">
                Unanswered Calls
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              Your leads get followed up in under 5 minutes, around the clock — so you never lose another job to slow response times.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <CalButton size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 font-semibold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all hover:shadow-[0_0_40px_rgba(249,115,22,0.5)]">
                Book Your Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalButton>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm text-foreground hover:bg-white/10 text-lg px-8 py-6 font-semibold rounded-full">
                  See How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
              {["Live in 5 days", "30-day guarantee", "No contracts"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {["Nationwide", "Bilingual AI (EN + ES)"].map((loc) => (
                <span key={loc} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3 w-3 text-accent" />
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Hero jobsite image */}
          <div className="mt-16 relative rounded-2xl overflow-hidden border border-white/[0.06] h-64 md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
              alt="Construction crew working on a jobsite"
              fill
              className="object-cover opacity-60"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-semibold text-center px-6">
                While you&apos;re on the job, your AI is closing the next one.
              </p>
            </div>
          </div>

          {/* Integrations Carousel */}
          <div className="mt-20">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8">
              Easily integrates with your existing platforms
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
              <div className="flex animate-scroll gap-8">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-8 shrink-0">
                    {[
                      { name: "GoHighLevel", icon: "GHL" },
                      { name: "HubSpot", icon: "HS" },
                      { name: "Google Sheets", icon: "GS" },
                      { name: "Salesforce", icon: "SF" },
                      { name: "Yelp", icon: "Y" },
                      { name: "Google Reviews", icon: "GR" },
                      { name: "Ramp", icon: "R" },
                      { name: "Zapier", icon: "Z" },
                      { name: "Calendly", icon: "C" },
                      { name: "Stripe", icon: "S" },
                    ].map((integration) => (
                      <div
                        key={`${setIndex}-${integration.name}`}
                        className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-colors shrink-0"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-xs font-bold text-foreground">
                          {integration.icon}
                        </div>
                        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leads Are Slipping Through the Cracks</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Every hour of delay is lost revenue.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Slow Response Times", desc: "Studies show leads go cold after just 5 minutes. Can you respond that fast, every time?", gradient: "from-blue-500/20 to-primary/20" },
              { icon: DollarSign, title: "Missed Revenue", desc: "Every unanswered lead is money walking out the door. How many did you miss this week?", gradient: "from-accent/20 to-orange-500/20" },
              { icon: RotateCcw, title: "Dead Lead Database", desc: "You're sitting on thousands of old leads. They're not dead — they're just waiting to be reactivated.", gradient: "from-primary/20 to-blue-500/20" },
            ].map((card) => (
              <Card key={card.title} className="group relative border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all hover:border-white/[0.1] hover:bg-white/[0.04]">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <CardContent className="relative p-8 text-center">
                  <div className="mb-6 mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Built for home service businesses across the country
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["HVAC & Plumbing", "Landscaping", "Roofing", "Concrete & Masonry", "Dental Practices", "Real Estate", "Home Services", "Law Firms"].map((industry) => (
              <span key={industry} className="border border-white/[0.08] bg-white/[0.02] rounded-full px-5 py-2 text-sm text-muted-foreground hover:border-white/[0.15] hover:bg-white/[0.04] transition-all cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-24 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Three Steps to Automated Growth</h2>
            <p className="text-xl text-muted-foreground">Live in 5 business days. Zero disruption to your workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, icon: MessageSquare, title: "Capture", desc: "AI captures leads from all your channels — web forms, social media, and ads." },
              { step: 2, icon: Bot, title: "Follow Up", desc: "Instant AI-powered SMS and email follow-up within minutes, not hours." },
              { step: 3, icon: Calendar, title: "Book", desc: "Qualified leads automatically booked on your calendar. You just show up." },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
                )}
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border border-primary/20">
                      <item.icon className="h-9 w-9 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white font-bold text-sm flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="features" className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">Features</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{"Everything You Need"}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Complete automation suite to capture, nurture, and convert leads.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { icon: MessageSquare, title: "AI SMS + Email", desc: "Instant multi-channel outreach the moment a lead comes in" },
              { icon: Bot, title: "Lead Qualification", desc: "Pre-qualify leads automatically before they hit your calendar" },
              { icon: Calendar, title: "Auto Booking", desc: "Seamless calendar integration — leads book themselves" },
              { icon: RotateCcw, title: "Lead Reactivation", desc: "Revive your old database and win back lost opportunities" },
              { icon: Star, title: "Review Automation", desc: "Boost your online reputation on autopilot" },
              { icon: BarChart3, title: "Revenue Reports", desc: "Track ROI and performance with clear dashboards" },
              { icon: Globe, title: "Bilingual AI", desc: "Full English and Spanish support for broader reach" },
              { icon: Link2, title: "CRM Integration", desc: "Works with GoHighLevel, HubSpot, Salesforce, and more" },
            ].map((feature) => (
              <Card key={feature.title} className="group border-white/[0.06] bg-white/[0.02] hover:border-accent/30 hover:bg-white/[0.04] transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services imagery */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] h-52">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Contractor reviewing work on a tablet at a jobsite"
                fill
                className="object-cover opacity-50"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">AI Follow-Up</p>
                  <p className="text-lg font-semibold max-w-xs">Respond to every lead before your competitor picks up the phone.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] h-52">
              <Image
                src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&q=80"
                alt="Roofing crew working on a roof"
                fill
                className="object-cover opacity-50"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
              <div className="absolute inset-0 flex items-center p-8">
                <div>
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">Voice Agent</p>
                  <p className="text-lg font-semibold max-w-xs">Never miss a call. Your AI voice agent answers 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projected Results */}
      <section className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">What Our System Is Built to Deliver</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Results for Trades Businesses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These projections reflect the performance benchmarks our AI automation system is designed to hit.
            </p>
          </div>
          <p className="text-center text-xs text-muted-foreground/60 mb-12 italic">
            * Projected outcomes based on system benchmarks — not yet from live client results. Actual results vary.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projectedResults.map((result) => (
              <Card key={result.trade} className="group border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.1] transition-all">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={result.image}
                    alt={result.alt}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent bg-background/80 rounded-full px-3 py-1 border border-accent/20">
                      {result.trade}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent mb-1">
                    {result.metric}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide mb-3">{result.metricLabel}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{result.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect on the Call */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">Free Audit</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Happens on Your Call</h2>
          <p className="text-xl text-muted-foreground mb-16">30 minutes. No pressure. Real, actionable insights.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            {[
              { step: "01", icon: Search, title: "We Map Your Lead Flow", desc: "We look at where leads come in and exactly where they fall off." },
              { step: "02", icon: TrendingUp, title: "We Find the Revenue Leak", desc: "We put a real number on what slow follow-up is costing you." },
              { step: "03", icon: FileText, title: "You Leave with a Plan", desc: "Walk away with a clear action plan you can use immediately." },
            ].map((item) => (
              <Card key={item.step} className="border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-white/10">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <CalButton size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 font-semibold rounded-full shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            Book Your Free 30-Min Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </CalButton>
          <p className="mt-4 text-sm text-muted-foreground">Free. No commitment. No pitch deck.</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="relative overflow-hidden border border-accent/20 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-3xl p-10 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
              <Shield className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our 30-Day Results Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                {"We're so confident in our system that we put our time on the line. "}
                <strong className="text-foreground">{"If you don't book at least one appointment in your first 30 days, we keep working for free until you do."}</strong>
              </p>
              <div className="flex flex-wrap gap-6">
                {["No long-term contracts", "Cancel anytime", "Live in 5 days"].map((item) => (
                  <span key={item} className="text-accent text-sm font-semibold flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-24 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Common Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know before booking.</p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden transition-all hover:border-white/[0.1]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold hover:bg-white/[0.02] transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-accent flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[32px] p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Stop Losing Leads?</h2>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
                {"Book your free audit and discover how many appointments you're leaving on the table."}
              </p>
              <CalButton size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-7 font-semibold rounded-full shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all hover:shadow-[0_0_50px_rgba(249,115,22,0.6)]">
                Book Your Free Audit Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </CalButton>
              <p className="mt-6 text-sm text-muted-foreground">Free. No commitment. 30 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-primary">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">SparkRise AI</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="/about" className="hover:text-foreground transition-colors">About</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/[0.06] text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Built for home service businesses across the country · Bilingual AI (EN + ES)
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 SparkRise AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
