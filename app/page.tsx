"use client"

import { useState } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const faqs = [
  { question: "How fast does the AI follow up with new leads?", answer: "Our AI responds to new leads in under 5 minutes, 24 hours a day, 7 days a week — including weekends and holidays. Studies show leads go cold after just 5 minutes, so speed is everything." },
  { question: "What types of businesses do you work with?", answer: "We work with service-based businesses in Northern Virginia and the DMV area — including HVAC, dental practices, real estate agents, home services, law firms, and more. If you rely on appointments to generate revenue, we can help." },
  { question: "How long does it take to go live?", answer: "Most clients are fully live within 5 business days. We handle the entire setup — AI configuration, CRM integration, and calendar connection — so you can focus on running your business." },
  { question: "What happens if I don't get results?", answer: "We back every engagement with a 30-day guarantee. If you don't book a single appointment in the first 30 days, we keep working for free until you do. We only win when you win." },
  { question: "Do I need to change my existing software or CRM?", answer: "No. Our system integrates with the tools you already use — GoHighLevel, HubSpot, Salesforce, and most major CRMs. We connect to your existing workflow rather than replacing it." },
  { question: "Does the AI work in Spanish?", answer: "Yes. Our AI is fully bilingual in English and Spanish, allowing you to serve a wider customer base in the Northern Virginia and DMV market without any extra effort." },
]

export default function SparkRiseAI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent bg-input text-accent text-sm font-extrabold">
                SR
              </div>
              <span className="text-xl font-bold text-foreground">SparkRise AI</span>
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 btn-orange-glow font-semibold">
            Book a Call
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              AI Automation for Northern Virginia Service Businesses
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              We Build AI Systems That Book Appointments{" "}
              <span className="text-accent">While You Sleep</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Your leads get followed up in under 5 minutes, 24/7 — so you never lose another potential customer to slow response times.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-orange-glow text-lg px-8 py-6 font-bold rounded-xl mb-6">
              Book Your Free Revenue Leak Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-accent" /> Live in 5 business days</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-accent" /> 30-day results guarantee</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-accent" /> No long-term contracts</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="relative">
              {/* Founder Photo Placeholder */}
              <div className="w-80 h-80 rounded-full border-4 border-accent/30 overflow-hidden bg-secondary flex items-center justify-center text-sm text-muted-foreground">
                FOUNDER PHOTO
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border rounded-full px-5 py-2 text-center">
                <div className="text-sm font-semibold">Cristian González Rivera</div>
                <div className="text-xs text-muted-foreground">Founder, SparkRise AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Leads Are Slipping Through the Cracks</h2>
        <p className="text-center text-muted-foreground text-lg mb-12">Every hour of delay is lost revenue.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "Slow Response Times", desc: "Studies show leads go cold after just 5 minutes. Can you respond that fast, every time?" },
            { icon: DollarSign, title: "Missed Revenue", desc: "Every unanswered lead is money walking out the door. How many did you miss this week?" },
            { icon: RotateCcw, title: "Dead Lead Database", desc: "You're sitting on thousands of old leads. They're not dead — they're just waiting to be reactivated." },
          ].map((card) => (
            <Card key={card.title} className="card-premium border-border bg-card text-center hover:border-accent/30 transition-all">
              <CardContent className="p-8">
                <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <card.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
          Serving service-based businesses across Northern Virginia & the DMV
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["HVAC & Plumbing", "Dental Practices", "Real Estate", "Home Services", "Law Firms", "Med Spas"].map((i) => (
            <span key={i} className="border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground">{i}</span>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-secondary/30 py-20 px-6">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Live in 5 business days. Zero disruption to your workflow.</p>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { step: 1, icon: MessageSquare, title: "Capture", desc: "AI captures leads from all your channels — web forms, social media, and ads." },
              { step: 2, icon: Bot, title: "Follow Up", desc: "Instant AI-powered SMS and email follow-up within minutes, not hours." },
              { step: 3, icon: Calendar, title: "Book", desc: "Qualified leads automatically booked on your calendar. You just show up." },
            ].map((item) => (
              <div key={item.step}>
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{"What's Included"}</h2>
        <p className="text-center text-muted-foreground text-lg mb-12">Everything you need to automate your lead follow-up and book more appointments.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: MessageSquare, title: "AI SMS + Email Follow-up", desc: "Instant multi-channel outreach" },
            { icon: Bot, title: "Lead Qualification Chatbot", desc: "Pre-qualify leads automatically" },
            { icon: Calendar, title: "Appointment Booking Automation", desc: "Seamless calendar integration" },
            { icon: RotateCcw, title: "Dead Lead Reactivation", desc: "Revive your old lead database" },
            { icon: Star, title: "Google Review Automation", desc: "Boost your online reputation" },
            { icon: BarChart3, title: "Weekly Revenue Report", desc: "Track ROI and performance" },
            { icon: Globe, title: "Bilingual English/Spanish AI", desc: "Serve more customers" },
            { icon: Link2, title: "CRM Integration", desc: "Works with your existing tools" },
          ].map((f) => (
            <Card key={f.title} className="card-premium border-border bg-card hover:border-accent/30 transition-all">
              <CardContent className="p-6">
                <f.icon className="h-7 w-7 text-primary mb-3" />
                <div className="font-semibold mb-1">{f.title}</div>
                <div className="text-sm text-muted-foreground">{f.desc}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What to Expect on the Call */}
      <section className="relative bg-secondary/30 py-20 px-6">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">What Happens on Your Free Audit Call</h2>
          <p className="text-muted-foreground text-lg mb-12">30 minutes. No pressure. Real, actionable insights.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {[
              { step: "01", icon: Search, title: "We Map Your Lead Flow", desc: "We look at where leads come in and exactly where they fall off — your form, calls, social, or ads." },
              { step: "02", icon: TrendingUp, title: "We Find the Revenue Leak", desc: "We put a real number on what slow follow-up is costing your business every single month." },
              { step: "03", icon: FileText, title: "You Leave with a Plan", desc: "Whether you work with us or not, you walk away with a clear action plan you can use immediately." },
            ].map((item) => (
              <Card key={item.step} className="border-border bg-card">
                <CardContent className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-3xl font-extrabold text-accent/25">{item.step}</span>
                  </div>
                  <div className="font-semibold mb-2">{item.title}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-orange-glow text-lg px-8 py-6 font-bold rounded-xl">
            Book Your Free 30-Min Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">Free. No commitment. No pitch deck.</p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="border border-accent/30 bg-accent/5 rounded-2xl p-10 flex gap-8 items-start">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
            <Shield className="h-8 w-8 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Our 30-Day Results Guarantee</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {"We're so confident in our system that we put our time on the line. "}
              <strong className="text-foreground">{"If you don't book at least one appointment in your first 30 days, we keep working for free — no questions asked — until you do."}</strong>
            </p>
            <div className="flex flex-wrap gap-5">
              {["No long-term contracts", "Cancel anytime", "Setup in 5 business days"].map((item) => (
                <span key={item} className="text-accent text-sm font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-secondary/30 py-20 px-6">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-muted-foreground text-lg mb-12">Everything you need to know before booking a call.</p>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold hover:bg-secondary/50 transition-colors"
                >
                  {faq.question}
                  <ChevronDown className={`h-5 w-5 text-accent transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="cta-radial-gradient border border-accent/20 rounded-3xl p-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Losing Leads?</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            {"Book your free revenue leak audit and find out exactly how many appointments you're leaving on the table."}
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 btn-orange-glow text-lg px-10 py-6 font-bold rounded-xl">
            Book Your Free Audit Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">Free. No commitment. 30 minutes.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent bg-input text-accent text-xs font-extrabold">
              SR
            </div>
            <span className="text-lg font-bold">SparkRise AI</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-foreground transition-colors">About</a>
            <span>sparkriseai.com</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-center">
          Serving Northern Virginia — Fairfax, Arlington, Alexandria, Loudoun, Prince William
        </p>
        <p className="mt-2 text-sm text-muted-foreground text-center">
          © 2025 SparkRise AI. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
