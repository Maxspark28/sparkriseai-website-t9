"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield, ChevronDown, X } from "lucide-react"
import { CalButton } from "@/components/cal-button"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { translations, type Lang } from "@/lib/translations"

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [showModal, setShowModal] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [leads, setLeads] = useState(40)
  const [jobValue, setJobValue] = useState(2500)
  const t = translations[lang]

  const lostRevenue = Math.round(leads * jobValue * t.calculator.lossRate)
  const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(lostRevenue)

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Reactivation Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 rounded-md p-1 text-gray-400 transition-colors hover:text-gray-700"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-900 pr-8" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
              {t.modal.heading}
            </h2>
            <p className="mt-2 mb-6 text-sm text-gray-500">{t.modal.sub}</p>
            <ContactForm />
          </div>
        </div>
      )}

      <SiteNav lang={lang} setLang={setLang} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#001533] px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f97316]/8 blur-3xl" />
          <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/6 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Star social proof */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="h-4 w-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-blue-200">Trusted by 50+ contractors across the DMV</span>
          </div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-sm font-medium text-[#f97316]">
            {t.hero.badge}
          </div>
          <h1
            className="text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            {t.hero.headlinePart1}{" "}
            <span className="text-[#f97316]">{t.hero.headlinePart2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-200 sm:text-xl leading-relaxed">
            {t.hero.sub}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]/50 w-full sm:w-auto shadow-lg">
              {t.hero.primaryCta}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </CalButton>
            <button
              onClick={() => {
                const el = document.getElementById('services')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10 w-full sm:w-auto"
            >
              {t.hero.secondaryCta}
            </button>
          </div>
          {/* Proof chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {t.hero.proof.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-blue-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f97316]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES CAROUSEL ── */}
      <section className="overflow-hidden border-b border-gray-100 bg-white py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          {t.industries.heading}
        </p>
        <div className="relative">
          <div className="animate-marquee">
            {[...t.industries.list, ...t.industries.list].map((industry, i) => (
              <span
                key={i}
                className="mx-6 flex items-center gap-2 text-lg font-semibold text-gray-700 whitespace-nowrap"
                style={{ fontFamily: 'var(--font-syne), sans-serif' }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#f97316]" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#001533] px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p
                  className="text-4xl font-bold text-[#f97316] sm:text-5xl"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-blue-200 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-bold text-[#001533] sm:text-4xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.howItWorks.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t.howItWorks.sub}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col">
                {/* Connector line */}
                {i < t.howItWorks.steps.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+2rem)] right-[-50%] hidden h-px bg-[#f97316]/20 lg:block" />
                )}
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-gray-50 h-full">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#001533] text-xl font-bold text-[#f97316]"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                    {step.number}
                  </div>
                  <h3
                    className="text-base font-bold text-[#001533] mb-2"
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a] shadow-lg">
              {t.hero.primaryCta}
              <ArrowRight className="h-5 w-5" />
            </CalButton>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-bold text-[#001533] sm:text-4xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.services.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t.services.sub}</p>
          </div>
          <div className="space-y-16">
            {t.services.items.map((service, i) => (
              <div
                key={i}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual card */}
                <div className="lg:w-1/2">
                  <div className="rounded-2xl bg-[#001533] p-8 sm:p-10">
                    <div className="mb-4 inline-flex rounded-lg bg-[#f97316]/20 px-3 py-1.5 text-xs font-semibold text-[#f97316]">
                      {service.tag}
                    </div>
                    <h3
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-blue-200">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f97316]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Text */}
                <div className="lg:w-1/2">
                  <p className="text-lg text-gray-600 leading-relaxed">{service.body}</p>
                  <CalButton className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#001533] px-6 py-3 text-sm font-semibold text-[#001533] transition-colors hover:bg-[#001533] hover:text-white">
                    {t.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </CalButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="case-studies" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#001533] sm:text-4xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.caseStudies.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t.caseStudies.sub}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.caseStudies.items.map((cs, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-[#f97316]/10 px-3 py-1 text-xs font-semibold text-[#f97316]">
                    {cs.trade}
                  </span>
                  <span className="text-xs text-gray-400">{cs.location}</span>
                </div>
                <p
                  className="text-xl font-bold text-[#001533] leading-snug"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  {cs.result}
                </p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{cs.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#001533] sm:text-4xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.testimonials.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t.testimonials.sub}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((review, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <svg key={s} className="h-4 w-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-sm text-gray-600 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-[#001533] text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{review.trade} · {review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVENUE CALCULATOR ── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md sm:p-10">
            <h2
              className="text-2xl font-bold text-[#001533] sm:text-3xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.calculator.heading}
            </h2>
            <p className="mt-3 text-gray-500">{t.calculator.sub}</p>

            <div className="mt-8 space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">{t.calculator.leadsLabel}</label>
                  <span className="text-sm font-bold text-[#001533]">{leads}</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full accent-[#f97316]"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-400">
                  <span>5</span><span>200</span>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">{t.calculator.valueLabel}</label>
                  <span className="text-sm font-bold text-[#001533]">${jobValue.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={20000}
                  step={200}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className="w-full accent-[#f97316]"
                />
                <div className="mt-1 flex justify-between text-xs text-gray-400">
                  <span>$200</span><span>$20,000</span>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#001533] p-6 text-center">
              <p className="text-sm text-blue-200">{t.calculator.resultPrefix}</p>
              <p
                className="mt-1 text-4xl font-bold text-[#f97316]"
                style={{ fontFamily: 'var(--font-syne), sans-serif' }}
              >
                {formatted}
              </p>
              <p className="mt-1 text-sm text-blue-200">{t.calculator.resultSuffix}</p>
              <CalButton className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#f97316] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#ea6c0a]">
                {t.calculator.ctaText}
                <ArrowRight className="h-4 w-4" />
              </CalButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#001533] sm:text-4xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.pricing.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t.pricing.sub}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {t.pricing.tiers.map((tier, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
                  tier.popular
                    ? 'border-[#f97316] bg-[#001533] shadow-xl ring-2 ring-[#f97316]'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#f97316] px-4 py-1 text-sm font-semibold text-white shadow">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <p className={`text-xs font-semibold uppercase tracking-widest ${tier.popular ? 'text-[#f97316]' : 'text-[#f97316]'}`}>
                    {tier.tier}
                  </p>
                  <h3
                    className={`mt-1 text-xl font-bold ${tier.popular ? 'text-white' : 'text-[#001533]'}`}
                    style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                  >
                    {tier.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${tier.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                    {tier.description}
                  </p>
                </div>
                <div className={`mb-6 border-t pt-4 ${tier.popular ? 'border-blue-800' : 'border-gray-100'}`}>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-3xl font-bold ${tier.popular ? 'text-white' : 'text-[#001533]'}`}
                      style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                      {tier.monthly}
                    </span>
                  </div>
                  <p className={`mt-1 text-sm ${tier.popular ? 'text-blue-300' : 'text-gray-400'}`}>
                    {tier.setup} {t.pricing.setup}
                  </p>
                </div>
                <ul className="mb-8 space-y-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${tier.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f97316]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CalButton
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-[#f97316] text-white hover:bg-[#ea6c0a]'
                      : 'border-2 border-[#001533] text-[#001533] hover:bg-[#001533] hover:text-white'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </CalButton>
              </div>
            ))}
          </div>

          {/* Free offer callout */}
          <div className="mt-12 rounded-2xl border border-dashed border-[#f97316]/40 bg-[#f97316]/5 p-8 text-center">
            <h3
              className="text-xl font-bold text-[#001533]"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.pricing.freeOffer.heading}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">{t.pricing.freeOffer.body}</p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#f97316] px-6 py-3 text-sm font-semibold text-[#f97316] transition-colors hover:bg-[#f97316] hover:text-white"
            >
              {t.pricing.freeOffer.cta}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#f97316]/30 bg-[#f97316]/5 p-8 sm:p-10">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="shrink-0 rounded-full bg-[#f97316]/15 p-5">
                <Shield className="h-10 w-10 text-[#f97316]" />
              </div>
              <div>
                <h3
                  className="text-xl font-bold text-[#001533]"
                  style={{ fontFamily: 'var(--font-syne), sans-serif' }}
                >
                  {t.guarantee.heading}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">{t.guarantee.body}</strong>
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {t.guarantee.items.map((item) => (
                    <span key={item} className="flex items-center gap-1.5 text-sm font-medium text-[#f97316]">
                      <CheckCircle2 className="h-4 w-4" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-[#001533] sm:text-4xl"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {t.faq.heading}
            </h2>
            <p className="mt-4 text-lg text-gray-500">{t.faq.sub}</p>
          </div>
          <div className="space-y-3">
            {t.faq.items.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-[#001533]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="border-t border-gray-100 px-6 pb-5 pt-4">
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="relative overflow-hidden bg-[#001533] px-4 py-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f97316]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            {t.finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-blue-200 leading-relaxed">
            {t.finalCta.body}
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CalButton className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#ea6c0a] w-full sm:w-auto shadow-lg">
              {t.finalCta.cta}
              <ArrowRight className="h-5 w-5" />
            </CalButton>
          </div>
          <p className="mt-4 text-sm text-blue-300">{t.finalCta.sub}</p>
          <p className="mt-6 text-sm text-blue-300">
            Want to know who&apos;s behind SparkRise AI?{" "}
            <Link href="/about" className="font-medium text-[#f97316] hover:underline">
              Meet Cristian →
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter lang={lang} />
    </div>
  )
}
