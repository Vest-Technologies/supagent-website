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
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icons/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180" />
        {/* Google Analytics - GA4 Implementation */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PBS8PEV2ET"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBS8PEV2ET');
          `}
        </Script>
        <script
          src="https://chatbot-content-public-test.s3.eu-north-1.amazonaws.com/general/supagent.umd.js?v=1.0.0"
          data-id="2801d1fa-4178-4f08-af38-bec8aa2e8eaf"
          data-env="TEST"
          id="supagent-script"
          async defer>
        </script>
      </head>
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