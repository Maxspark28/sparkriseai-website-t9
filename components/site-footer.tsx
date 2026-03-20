import Image from "next/image"
import Link from "next/link"
import { translations, type Lang } from "@/lib/translations"

interface SiteFooterProps {
  lang?: Lang
}

export function SiteFooter({ lang = 'en' }: SiteFooterProps) {
  const t = translations[lang].footer

  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logoT.jpg" alt="SparkRise AI" width={36} height={36} className="rounded-md" />
              <span className="text-lg font-bold">SparkRise AI</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">{t.tagline}</p>
            {/* TODO: Replace with real business phone number */}
            <a
              href={`tel:${t.phone.replace(/\D/g, '')}`}
              className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              📞 {t.phone}
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/#how-it-works" className="transition-colors hover:text-foreground">
              {t.links.howItWorks}
            </Link>
            <Link href="/#pricing" className="transition-colors hover:text-foreground">
              {t.links.pricing}
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground">
              {t.links.about}
            </Link>
            <Link href="/#faq" className="transition-colors hover:text-foreground">
              {t.links.faq}
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  )
}
