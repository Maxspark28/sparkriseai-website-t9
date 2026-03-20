import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const siteUrl = "https://sparkriseai.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'SparkRise AI | AI Lead Automation for Med Spas',
    template: '%s | SparkRise AI',
  },
  description:
    "SparkRise AI helps med spas recover lost revenue with AI-powered lead follow-up, reactivation campaigns, and automated booking. Built in Northern Virginia. Serving businesses nationwide.",
  keywords: [
    "ai automation med spa",
    "med spa lead follow-up",
    "ai booking system med spa",
    "lead reactivation med spa",
    "ai automation northern virginia",
    "med spa ai agency",
    "AI lead automation for med spas",
    "med spa booking automation",
    "AI lead reactivation",
    "Northern Virginia med spa",
    "Loudoun County AI automation",
    "DMV area med spa",
    "serving med spas nationwide",
    "reactivate past clients med spa",
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
    title: "SparkRise AI | AI Lead Automation for Med Spas",
    description:
      "AI-powered lead follow-up and client reactivation for med spas. Built in Northern Virginia. Serving businesses nationwide.",
    images: [
      {
        url: "https://sparkriseai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SparkRise AI — AI Lead Automation for Med Spas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SparkRise AI | AI Lead Automation for Med Spas",
    description:
      "AI-powered lead follow-up and client reactivation for med spas.",
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
