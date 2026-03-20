"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { CalButton } from "@/components/cal-button"
import { translations, type Lang } from "@/lib/translations"

interface SiteNavProps {
  lang?: Lang
  setLang?: (l: Lang) => void
  onClaimReactivation?: () => void
}

export function SiteNav({ lang = 'en', setLang, onClaimReactivation }: SiteNavProps) {
  const [open, setOpen] = useState(false)
  const t = translations[lang].nav

  const navLinks = [
    { label: t.howItWorks, href: "/#how-it-works" },
    { label: t.pricing, href: "/#pricing" },
    { label: t.about, href: "/about" },
    { label: t.faq, href: "/#faq" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo + desktop links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logoT.jpg"
                alt="SparkRise AI"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-xl font-bold">SparkRise AI</span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side: Language toggle + CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* EN | ES toggle */}
            {setLang && (
              <div className="hidden items-center rounded-md border border-border text-sm font-semibold sm:flex">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-l-md transition-colors ${
                    lang === 'en'
                      ? 'bg-[var(--orange)] text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('es')}
                  className={`px-3 py-1.5 rounded-r-md transition-colors ${
                    lang === 'es'
                      ? 'bg-[var(--orange)] text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  aria-label="Cambiar a Español"
                >
                  ES
                </button>
              </div>
            )}

            <CalButton className="hidden sm:inline-flex items-center justify-center gap-2 rounded-md border border-[var(--orange)] bg-[#001533] px-4 py-2 text-sm font-semibold text-[var(--orange)] transition-colors hover:bg-[#001533]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              {t.bookCta}
            </CalButton>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile language toggle */}
            {setLang && (
              <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
                <span className="text-xs text-muted-foreground font-medium">Language:</span>
                <div className="flex items-center rounded-md border border-border text-sm font-semibold">
                  <button
                    onClick={() => { setLang('en'); setOpen(false) }}
                    className={`px-3 py-1.5 rounded-l-md transition-colors ${
                      lang === 'en' ? 'bg-[var(--orange)] text-white' : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => { setLang('es'); setOpen(false) }}
                    className={`px-3 py-1.5 rounded-r-md transition-colors ${
                      lang === 'es' ? 'bg-[var(--orange)] text-white' : 'text-muted-foreground'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>
            )}
            <div className="mt-3">
              <CalButton className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--orange)] bg-[#001533] px-4 py-2.5 text-sm font-semibold text-[var(--orange)]">
                {t.bookCta}
              </CalButton>
            </div>
            {onClaimReactivation && (
              <button
                onClick={() => { onClaimReactivation(); setOpen(false) }}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                {translations[lang].hero.secondaryCta}
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
