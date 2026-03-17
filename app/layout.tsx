import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = "https://sparkriseai.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SparkRise AI | AI Lead Automation Agency | Northern Virginia',
    template: '%s | SparkRise AI',
  },
  description:
    "Northern Virginia's #1 AI lead automation agency. We build AI systems that book appointments while you sleep. Your leads get followed up in under 5 minutes, 24/7. Serving Fairfax, Arlington, Alexandria, Loudoun & Prince William.",
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
  authors: [{ name: "SparkRise AI", url: siteUrl }],
  creator: "SparkRise AI",
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
      "We build AI systems that book appointments while you sleep. Leads followed up in under 5 minutes, 24/7. Northern Virginia's #1 AI lead automation agency.",
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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
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
