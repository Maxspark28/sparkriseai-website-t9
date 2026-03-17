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
  ChevronDown,
  BadgeCheck,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalButton } from "@/components/cal-button"
import { ContactForm } from "@/components/contact-form"

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">SparkRise AI</span>
          </div>
          <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Book a Call
          </CalButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            We Build AI Systems That Book Appointments{" "}
            <span className="text-primary">While You Sleep</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {"Northern Virginia's #1 AI lead automation agency. Your leads get followed up in under 5 minutes, 24/7."}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Book Your Free Revenue Leak Audit
              <ArrowRight className="h-5 w-5" />
            </CalButton>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Or send us a message
            </a>
          </div>
          {/* Trust signals below hero CTA */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Live in 5 business days
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> 30-day results guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-primary" /> No long-term contracts
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Leads Are Slipping Through the Cracks
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every hour of delay is lost revenue.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Slow Response Times</h3>
                <p className="mt-2 text-muted-foreground">
                  {"Studies show leads go cold after just 5 minutes. Can you respond that fast, every time?"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Missed Revenue</h3>
                <p className="mt-2 text-muted-foreground">
                  {"Every unanswered lead is money walking out the door. How many did you miss this week?"}
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <RotateCcw className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Dead Lead Database</h3>
                <p className="mt-2 text-muted-foreground">
                  {"You're sitting on thousands of old leads. They're not dead—they're just waiting to be reactivated."}
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
            Trusted by service-based businesses across Northern Virginia
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

      {/* How It Works Section */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">Live in 5 business days.</p>
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
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-sm font-bold text-card-foreground">
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

      {/* What's Included Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{"What's Included"}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to automate your lead follow-up.
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
              <Card key={index} className="border-border bg-card transition-all hover:border-primary/50">
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

      {/* Social Proof Section */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Real Results</h2>
            <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">47 leads reactivated in week 1</span>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "SparkRise AI transformed our follow-up process. We're booking 3x more appointments.",
                author: "Sarah M.",
                role: "Dental Practice Owner",
              },
              {
                quote: "The ROI was immediate. Within the first month, we recovered leads we thought were lost forever.",
                author: "Michael R.",
                role: "HVAC Business Owner",
              },
              {
                quote: "Finally, a system that works 24/7. Our response time went from hours to minutes.",
                author: "Jennifer L.",
                role: "Real Estate Agent",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-card-foreground">{`"${testimonial.quote}"`}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-card-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that fits your business.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="relative border-border bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Revenue Recovery System</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Perfect for businesses ready to stop losing leads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-card-foreground">$2,997</span>
                  <span className="text-muted-foreground"> setup</span>
                  <div className="mt-1">
                    <span className="text-2xl font-semibold text-card-foreground">+ $2,500</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "AI SMS + Email Follow-up",
                    "Lead Qualification Chatbot",
                    "Appointment Booking",
                    "Dead Lead Reactivation",
                    "Weekly Revenue Reports",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CalButton className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  Get Started
                </CalButton>
              </CardContent>
            </Card>
            <Card className="relative border-primary bg-card">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Full AI Automation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Complete automation for scaling businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-card-foreground">Custom</span>
                  <span className="text-muted-foreground"> pricing</span>
                  <div className="mt-1 text-muted-foreground">Tailored to your needs</div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Everything in Revenue Recovery",
                    "Google Review Automation",
                    "Bilingual English/Spanish AI",
                    "Full CRM Integration",
                    "Priority Support",
                    "Custom Workflows",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <CalButton className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                  Contact Sales
                </CalButton>
              </CardContent>
            </Card>
          </div>

          {/* Expanded Guarantee Section */}
          <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="shrink-0 rounded-full bg-primary/10 p-5">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Our 30-Day Results Guarantee</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  We&apos;re so confident in our system that we put our time on the line.{" "}
                  <strong className="text-foreground">
                    If you don&apos;t book at least one appointment in your first 30 days, we keep
                    working for free — no questions asked — until you do.
                  </strong>{" "}
                  We only win when you win.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {["No long-term contracts", "Cancel anytime", "Setup in 5 business days"].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-1.5 text-sm font-medium text-primary"
                    >
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

      {/* FAQ Section */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about SparkRise AI.
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

      {/* About / Founder Credibility */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Built by People Who Get It</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            SparkRise AI was founded in Northern Virginia with one goal: help local service businesses
            compete like enterprise companies — without the enterprise headcount. We combine battle-tested
            AI automation with deep knowledge of how service businesses actually operate, so every system
            we build is practical, fast to deploy, and built to generate real revenue from day one.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 text-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-base font-bold text-primary">
              S
            </span>
            <span className="text-card-foreground font-medium">SparkRise AI — Northern Virginia DMV</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8" id="contact">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Ready to stop losing leads? Fill out the form below and we'll be in touch within 5 minutes."}
            </p>
          </div>
          <Card className="mt-12 border-border bg-card">
            <CardContent className="p-6 sm:p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-primary/10 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Stop Losing Leads?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              {"Book your free revenue leak audit and discover how much money you're leaving on the table."}
            </p>
            <CalButton className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Book Your Free Audit Now
              <ArrowRight className="h-5 w-5" />
            </CalButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SparkRise AI</span>
            </div>
            <div className="text-center text-muted-foreground sm:text-right">
              <p>sparkriseai.com</p>
              <p className="mt-1">Serving Northern Virginia — Fairfax, Arlington, Alexandria, Loudoun, Prince William</p>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} SparkRise AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
