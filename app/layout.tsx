import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import MotionProvider from '@/components/providers/MotionProvider'

const serif = Fraunces({
  subsets: ['latin'],
  // Variable font (no fixed weights): static-weight requests make Google
  // return extensionless URLs that next@14.2's font loader can't parse.
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Digital Next - Building companies that build the future',
    template: '%s | Digital Next',
  },
  description:
    'Digital Next is a technology holding company. We build, acquire, and scale internet businesses - and hold them for the long term.',
  metadataBase: new URL('https://digitalnext.com'),
  openGraph: {
    title: 'Digital Next - Building companies that build the future',
    description:
      'A technology holding company building, acquiring, and scaling internet businesses for the long term.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-bg font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <BackToTop />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
