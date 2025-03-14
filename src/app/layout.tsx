import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './custom-bootstrap.scss'
import './globals.scss'
import Script from 'next/script'
import CookieConsent from '@/components/CookieConsent'
import BootstrapInit from '@/components/BootstrapInit'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' })

export const metadata: Metadata = {
  title: 'SupAgent - AI-Driven Agent Integrated Support Solution',
  description: 'Innovative AI agent-based product designed to reduce support burdens for companies and solo entrepreneurs.',
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  appleWebApp: {
    title: 'SupAgent',
    statusBarStyle: 'default',
  },
  openGraph: {
    type: 'website',
    title: 'SupAgent - AI-Driven Agent Integrated Support Solution',
    description: 'Innovative AI agent-based product designed to reduce support burdens for companies and solo entrepreneurs.',
    siteName: 'SupAgent',
    images: [{ url: '/images/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SupAgent - AI-Driven Agent Integrated Support Solution',
    description: 'Innovative AI agent-based product designed to reduce support burdens for companies and solo entrepreneurs.',
    images: [{ url: '/images/twitter-image.png' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${inter.variable} font-quicksand`}>
        <Navbar />
        {children}
        <Footer />
        <CookieConsent />
        <ScrollToTop />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <BootstrapInit />
      </body>
    </html>
  )
} 