"use client"

import { useEffect, type ReactNode } from "react"
import Script from "next/script"

declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void
      q?: unknown[]
      ns?: Record<string, unknown>
    }
  }
}

const CAL_NAMESPACE = "sparkriseai"

interface CalButtonProps {
  children: ReactNode
  className?: string
  calLink?: string
}

export function CalButton({ children, className, calLink }: CalButtonProps) {
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK ?? ""

  useEffect(() => {
    if (window.Cal && link) {
      window.Cal("init", CAL_NAMESPACE, { origin: "https://cal.com" })
      window.Cal(`${CAL_NAMESPACE}:ui`, {
        theme: "dark",
        styles: { branding: { brandColor: "#7B9EFF" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    }
  }, [link])

  // If no Cal link configured, fall back to scrolling to the contact form
  if (!link) {
    return (
      <a href="#contact" className={className}>
        {children}
      </a>
    )
  }

  return (
    <>
      <Script
        id="cal-embed"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {}; cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = api.q || [];
      if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); return; }
      p(cal, ar); return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "${CAL_NAMESPACE}", {origin:"https://cal.com"});
Cal("${CAL_NAMESPACE}:ui", {"theme":"dark","styles":{"branding":{"brandColor":"#7B9EFF"}},"hideEventTypeDetails":false,"layout":"month_view"});
          `,
        }}
      />
      <button
        className={className}
        data-cal-namespace={CAL_NAMESPACE}
        data-cal-link={link}
        data-cal-config='{"layout":"month_view"}'
      >
        {children}
      </button>
    </>
  )
}
