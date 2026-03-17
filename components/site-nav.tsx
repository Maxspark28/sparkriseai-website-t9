"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { CalButton } from "@/components/cal-button"

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
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
          <Link
            href="/about"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:block"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <CalButton className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--orange)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--orange)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Book a Call
          </CalButton>
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 sm:hidden">
          <Link
            href="/about"
            className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  )
}
