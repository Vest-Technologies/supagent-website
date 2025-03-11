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