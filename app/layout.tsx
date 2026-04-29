import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SparkRise AI | AI Lead Automation for Contractors | Bergen County NJ & Northern Virginia',
  description: 'AI lead automation for home service contractors. We build AI systems that book appointments while you work — responding to leads in under 5 minutes, 24/7. Serving Bergen County NJ, Northern Virginia, and contractors nationwide.',
  generator: 'v0.app',
  keywords: 'AI lead automation, contractor AI, home service automation, Bergen County NJ, Northern Virginia, HVAC leads, plumbing leads, roofing leads, landscaping leads',
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  other: {
    'geo.region': 'US-NJ, US-VA',
    'geo.placename': 'Bergen County, NJ; Northern Virginia',
    'geo.position': '40.9726;-74.0747',
    'ICBM': '40.9726, -74.0747',
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
