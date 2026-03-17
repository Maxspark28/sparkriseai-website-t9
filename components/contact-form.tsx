"use client"

import { useState } from "react"
import { Phone, Mail, Building2, User, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      }
      setStatus("success")
      setFormData({ name: "", business: "", phone: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
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
            required
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
            required
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
            required
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
        disabled={status === "submitting"}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        size="lg"
      >
        <Send className="mr-2 h-5 w-5" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <p className="text-center text-sm text-primary font-medium">
          Message sent! We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-destructive font-medium">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}
