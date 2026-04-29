import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sparkriseai.com'),
  title: 'SparkRise AI | AI Lead Automation for Home Service Contractors Nationwide',
  description: 'AI lead automation for home service contractors across the country. We build AI systems that book appointments while you work — responding to leads in under 5 minutes, 24/7. Bilingual AI (EN + ES).',
  generator: 'v0.app',
  keywords: 'AI lead automation, contractor AI, home service automation, nationwide contractor AI, HVAC leads, plumbing leads, roofing leads, landscaping leads, bilingual AI',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'SparkRise AI | AI Lead Automation for Home Service Contractors',
    description: 'AI lead automation for home service contractors across the country. Bilingual AI (EN + ES). Live in 5 days.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkRise AI | AI Lead Automation for Home Service Contractors',
    description: 'AI lead automation for home service contractors across the country. Bilingual AI (EN + ES). Live in 5 days.',
    images: ['/og-image.jpg'],
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
