import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const siteUrl = "https://sparkriseai.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SparkRise AI | AI Lead Automation for DMV Contractors',
    template: '%s | SparkRise AI',
  },
  description:
    "SparkRise AI helps DMV contractors — HVAC, plumbing, landscaping, concrete, fencing & remodeling — stop losing jobs to unanswered calls. AI lead follow-up and voice automation. Built in Northern Virginia. Bilingual (EN+ES).",
  keywords: [
    "ai automation for contractors",
    "contractor lead follow-up AI",
    "HVAC AI automation DMV",
    "landscaping AI lead follow-up",
    "contractor voice agent",
    "AI for Latino contractors",
    "bilingual AI contractor",
    "Northern Virginia contractor AI",
    "DMV area contractor automation",
    "ai booking system contractors",
    "contractor lead reactivation",
    "SparkRise AI",
    "Loudoun County contractor automation",
    "automated lead follow-up HVAC",
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
    title: "SparkRise AI | AI Lead Automation for DMV Contractors",
    description:
      "Stop losing jobs to unanswered calls. AI-powered lead follow-up and voice automation for DMV contractors. Built in Northern Virginia. Bilingual EN+ES.",
    images: [
      {
        url: "https://sparkriseai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SparkRise AI — AI Lead Automation for Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkRise AI | AI Lead Automation for DMV Contractors",
    description:
      "AI-powered lead follow-up and voice automation for DMV contractors.",
    images: ["https://sparkriseai.com/og-image.jpg"],
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
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  other: {
    "geo.region": "US-VA",
    "geo.placename": "Loudoun County, Virginia",
    "geo.position": "39.0837;-77.6535",
    "ICBM": "39.0837, -77.6535",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
