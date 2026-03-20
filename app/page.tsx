"use client"

import { useState } from "react"
import {
  Clock,
  Bot,
  Calendar,
  RotateCcw,
  ArrowRight,
  Shield,
  ChevronDown,
  BadgeCheck,
  CheckCircle2,
  MessageSquare,
  Star,
  X,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CalButton } from "@/components/cal-button"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { translations, type Lang } from "@/lib/translations"

const problemIcons = [Clock, RotateCcw, Bot]
const howItWorksIcons = [MessageSquare, Bot, Calendar]

export default function SparkRiseAI() {
  const [lang, setLang] = useState<Lang>('en')
  const [showModal, setShowModal] = useState(false)
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Reactivation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-border bg-background p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold text-foreground pr-8">{t.modal.heading}</h2>
            <p className="mt-2 mb-6 text-sm text-muted-foreground">{t.modal.sub}</p>
            <ContactForm />
          </div>
        </div>
      )}

      <SiteNav lang={lang} setLang={setLang} onClaimReactivation={() => setShowModal(true)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pt-36 pb-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-[var(--orange)]/6 blur-3xl" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <div aria-hidden="true" className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-4 py-1.5 text-sm font-medium text-[var(--orange)]">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)]" />
            {t.hero.badge}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.hero.headlinePart1}{" "}
            <span className="text-[var(--orange)]">{t.hero.headlinePart2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--orange)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full sm:w-auto">
              {t.hero.primaryCta}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </CalButton>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--orange)]/50 bg-transparent px-8 py-4 text-base font-semibold text-[var(--orange)] transition-colors hover:bg-[var(--orange)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full sm:w-auto"
            >
              {t.hero.secondaryCta}
            </button>
          </div>
          {/* Social Proof Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {t.hero.proof.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--orange)]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.problem.heading}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.problem.sub}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.problem.cards.map((card, i) => {
              const Icon = problemIcons[i]
              return (
                <Card key={i} className="border-border bg-card">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-[var(--orange)]/10 p-4">
                      <Icon className="h-8 w-8 text-[var(--orange)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{card.title}</h3>
                    <p className="mt-2 text-muted-foreground">{card.body}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.howItWorks.heading}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.howItWorks.sub}</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {t.howItWorks.steps.map((step, i) => {
              const Icon = howItWorksIcons[i]
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon className="h-10 w-10" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--orange)] text-sm font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--orange)]/90">
              {t.hero.primaryCta}
              <ArrowRight className="h-5 w-5" />
            </CalButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* TODO: Replace with real client testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">What Med Spa Owners Are Saying</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "We recovered 18 appointments in the first 3 weeks. Clients we hadn't heard from in over a year started booking again.",
                name: "Med Spa Owner",
                location: "Northern Virginia",
              },
              {
                quote: "The bilingual AI was a game changer for us. Half our clients speak Spanish and now they get follow-ups in their language automatically.",
                name: "Med Spa Owner",
                location: "Fairfax, VA",
              },
              {
                quote: "Setup was done in 4 days. I didn't have to change anything about how we operate. It just works.",
                name: "Med Spa Owner",
                location: "Ashburn, VA",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
                  ))}
                </div>
                <p className="flex-1 text-muted-foreground leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.pricing.heading}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.pricing.sub}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {t.pricing.tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  tier.popular
                    ? 'border-[var(--orange)] bg-[var(--orange)]/5 ring-2 ring-[var(--orange)]'
                    : 'border-border bg-card'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1.5 rounded-full bg-[var(--orange)] px-4 py-1 text-sm font-semibold text-white">
                      <Star className="h-3.5 w-3.5" />
                      {t.pricing.popular}
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-sm font-semibold uppercase tracking-widest text-[var(--orange)]">{tier.tier}</p>
                  <h3 className="mt-1 text-xl font-bold text-foreground">{tier.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                </div>
                <div className="mb-6 border-t border-border pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">{tier.monthly}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.setup} {t.pricing.setup}
                  </p>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--orange)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CalButton
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-[var(--orange)] text-white hover:bg-[var(--orange)]/90'
                      : 'border border-[var(--orange)]/50 text-[var(--orange)] hover:bg-[var(--orange)]/10'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </CalButton>
              </div>
            ))}
          </div>

          {/* Free Offer Callout */}
          <div className="mt-12 rounded-2xl border border-dashed border-[var(--orange)]/40 bg-[var(--orange)]/5 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground">{t.pricing.freeOffer.heading}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{t.pricing.freeOffer.body}</p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[var(--orange)] px-6 py-3 text-sm font-semibold text-[var(--orange)] transition-colors hover:bg-[var(--orange)]/10"
            >
              {t.pricing.freeOffer.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[var(--orange)]/30 bg-[var(--orange)]/5 p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="shrink-0 rounded-full bg-[var(--orange)]/10 p-5">
                <Shield className="h-10 w-10 text-[var(--orange)]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{t.guarantee.heading}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">{t.guarantee.body}</strong>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {t.guarantee.items.map((item) => (
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
      <section id="faq" className="bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.faq.heading}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{t.faq.sub}</p>
          </div>
          <div className="mt-12 space-y-4">
            {t.faq.items.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-border bg-card px-6 py-4 open:pb-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-card-foreground">
                  {item.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-[var(--orange)]/10 to-primary/10 p-8 text-center ring-1 ring-[var(--orange)]/20 sm:p-12">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.finalCta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{t.finalCta.body}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[var(--orange)]/90 w-full sm:w-auto">
                {t.finalCta.cta}
                <ArrowRight className="h-5 w-5" />
              </CalButton>
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--orange)]/50 px-8 py-4 text-base font-semibold text-[var(--orange)] transition-colors hover:bg-[var(--orange)]/10 w-full sm:w-auto"
              >
                {t.hero.secondaryCta}
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.finalCta.sub}</p>
            <p className="mt-6 text-sm text-muted-foreground">
              Want to know who&apos;s behind SparkRise AI?{" "}
              <Link href="/about" className="font-medium text-[var(--orange)] hover:underline">
                Meet Cristian →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  )
}
