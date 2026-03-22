import Image from "next/image"
import Link from "next/link"
import { translations, type Lang } from "@/lib/translations"

interface SiteFooterProps {
  lang?: Lang
}

export function SiteFooter({ lang = 'en' }: SiteFooterProps) {
  const t = translations[lang].footer

  return (
    <footer className="bg-[#001533] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Column 1: Logo + tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logoT.jpg" alt="SparkRise AI" width={36} height={36} className="rounded-md" />
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                SparkRise AI
              </span>
            </Link>
            <p className="mt-3 text-sm text-blue-200 max-w-xs leading-relaxed">{t.tagline}</p>
          </div>

          {/* Column 2: Menu */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-300">
              Menu
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/#services" className="text-sm text-blue-200 transition-colors hover:text-white">
                  {t.links.services}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-sm text-blue-200 transition-colors hover:text-white">
                  {t.links.pricing}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-blue-200 transition-colors hover:text-white">
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-sm text-blue-200 transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-300">
              {t.links.services}
            </p>
            <ul className="space-y-2.5">
              {t.services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-blue-200 transition-colors hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-blue-300">
              Follow Us
            </p>
            <ul className="space-y-2.5">
              {t.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-blue-900 pt-6 text-center text-sm text-blue-400">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
