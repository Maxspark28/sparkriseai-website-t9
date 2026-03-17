import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const siteUrl = "https://sparkriseai.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SparkRise AI | AI Lead Automation Agency | Northern Virginia',
    template: '%s | SparkRise AI',
  },
  description:
    "SparkRise AI builds AI systems that book appointments while you sleep. Your leads get followed up in under 5 minutes, 24/7. Serving service businesses in Fairfax, Arlington, Alexandria, Loudoun & Prince William.",
  keywords: [
    "AI lead automation Northern Virginia",
    "AI appointment booking agency",
    "automated lead follow-up",
    "AI SMS follow-up",
    "HVAC lead automation",
    "dental AI booking",
    "real estate lead automation",
    "Northern Virginia marketing automation",
    "DMV AI agency",
    "dead lead reactivation",
  ],
  authors: [{ name: "Cristian González Rivera", url: siteUrl }],
  creator: "Cristian González Rivera",
  publisher: "SparkRise AI",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SparkRise AI",
    title: "SparkRise AI | AI Lead Automation Agency | Northern Virginia",
    description:
      "We build AI systems that book appointments while you sleep. Leads followed up in under 5 minutes, 24/7. Serving service businesses across Northern Virginia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SparkRise AI — AI Lead Automation Agency, Northern Virginia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkRise AI | AI Lead Automation Agency | Northern Virginia",
    description:
      "We build AI systems that book appointments while you sleep. Leads followed up in under 5 minutes, 24/7.",
    images: ["/og-image.jpg"],
    creator: "@sparkriseai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  )
}
