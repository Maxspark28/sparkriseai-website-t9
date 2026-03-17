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
  Phone,
  Mail,
  Building2,
  User,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SparkRiseAI() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <img src="/logo.jpg" alt="SparkRise AI" style={{height: '40px'}} />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Book a Call
          </Button>
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
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90"
            >
              Book Your Free Revenue Leak Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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

      {/* How It Works Section */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Live in 5 business days.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MessageSquare className="h-10 w-10" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-sm font-bold text-card-foreground">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold">Capture</h3>
              <p className="mt-2 text-muted-foreground">
                AI captures leads from all your channels—web forms, social media, and ads.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-10 w-10" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-sm font-bold text-card-foreground">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold">Follow Up</h3>
              <p className="mt-2 text-muted-foreground">
                Instant AI-powered SMS and email follow-up within minutes, not hours.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Calendar className="h-10 w-10" />
                </div>
                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-card text-sm font-bold text-card-foreground">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold">Book</h3>
              <p className="mt-2 text-muted-foreground">
                Qualified leads automatically booked on your calendar. You just show up.
              </p>
            </div>
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
                <Button className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
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
                <Button className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
          {/* Guarantee Badge */}
          <div className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-6 py-4">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">30-Day Guarantee</p>
                <p className="text-sm text-muted-foreground">
                  {"No appointment in 30 days? We work free until you get results."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Ready to stop losing leads? Fill out the form below and we'll be in touch."}
            </p>
          </div>
          <Card className="mt-12 border-border bg-card">
            <CardContent className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                      <User className="h-4 w-4 text-primary" />
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business" className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                      <Building2 className="h-4 w-4 text-primary" />
                      Business
                    </label>
                    <Input
                      id="business"
                      placeholder="ABC Company"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business and how we can help..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-border bg-input text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
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
            <Button
              size="lg"
              className="mt-8 bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90"
            >
              Book Your Free Audit Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
              <p className="mt-1">Northern Virginia DMV</p>
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
