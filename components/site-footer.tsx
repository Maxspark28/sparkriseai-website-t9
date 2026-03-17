import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logoT.jpg" alt="SparkRise AI" width={36} height={36} className="rounded-md" />
            <span className="text-lg font-bold">SparkRise AI</span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="transition-colors hover:text-foreground">
              About
            </Link>
            <span>sparkriseai.com</span>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground sm:text-right">
          Serving Northern Virginia — Fairfax, Arlington, Alexandria, Loudoun, Prince William
        </div>
        <div className="mt-6 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SparkRise AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
