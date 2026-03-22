"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { CalButton } from "@/components/cal-button"
import { translations, type Lang } from "@/lib/translations"

interface SiteNavProps {
  lang?: Lang
  setLang?: (l: Lang) => void
}

export function SiteNav({ lang = 'en', setLang }: SiteNavProps) {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const t = translations[lang].nav

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logoT.jpg"
              alt="SparkRise AI"
              width={38}
              height={38}
              className="rounded-md"
            />
            <span className="text-lg font-bold text-[#001533]" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
              SparkRise AI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
              >
                {t.services}
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                  {t.servicesList.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#001533]"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#case-studies"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
            >
              {t.caseStudies}
            </Link>
            <Link
              href="/#pricing"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
            >
              {t.pricing}
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
            >
              About
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* EN | ES toggle */}
            {setLang && (
              <div className="hidden items-center rounded-lg border border-gray-200 text-sm font-semibold sm:flex">
                <button
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 rounded-l-lg transition-colors ${
                    lang === 'en'
                      ? 'bg-[#f97316] text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  onClick={() => setLang('es')}
                  className={`px-3 py-1.5 rounded-r-lg transition-colors ${
                    lang === 'es'
                      ? 'bg-[#f97316] text-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-label="Cambiar a Español"
                >
                  ES
                </button>
              </div>
            )}

            <CalButton className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-[#f97316] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#ea6c0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]/50">
              {t.bookCta}
            </CalButton>

            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:text-gray-700 md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 md:hidden">
            {/* Services group */}
            <p className="mb-1 px-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
              {t.services}
            </p>
            {t.servicesList.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-1 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="my-3 border-t border-gray-100" />

            <Link
              href="/#case-studies"
              className="block px-1 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
              onClick={() => setOpen(false)}
            >
              {t.caseStudies}
            </Link>
            <Link
              href="/#pricing"
              className="block px-1 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
              onClick={() => setOpen(false)}
            >
              {t.pricing}
            </Link>
            <Link
              href="/about"
              className="block px-1 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:text-[#001533]"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            {/* Mobile language toggle */}
            {setLang && (
              <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
                <span className="text-xs text-gray-400 font-medium">Language:</span>
                <div className="flex items-center rounded-lg border border-gray-200 text-sm font-semibold">
                  <button
                    onClick={() => { setLang('en'); setOpen(false) }}
                    className={`px-3 py-1.5 rounded-l-lg transition-colors ${
                      lang === 'en' ? 'bg-[#f97316] text-white' : 'text-gray-500'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => { setLang('es'); setOpen(false) }}
                    className={`px-3 py-1.5 rounded-r-lg transition-colors ${
                      lang === 'es' ? 'bg-[#f97316] text-white' : 'text-gray-500'
                    }`}
                  >
                    ES
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4">
              <CalButton className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#f97316] px-4 py-3 text-sm font-semibold text-white">
                {t.bookCta}
              </CalButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
