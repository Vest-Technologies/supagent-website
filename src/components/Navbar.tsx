'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  // Translations
  const t = {
    home: 'Home',
    product: 'Product',
    features: 'Features',
    channels: 'Channels',
    solutions: 'Solutions',
    faq: 'FAQ',
    support: 'Support',
    pricing: 'Pricing',
    signIn: 'Sign In',
    getStarted: 'Get Started Free'
  }

  const navbarClass = `navbar navbar-expand-lg navbar-light fixed-top py-2 ${scrolled ? 'bg-light-icy' : 'bg-white'}`

  return (
    <nav className={navbarClass}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src="/logo.svg" alt="AI Agents Logo" height={50} width={60} />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" type="button" id="productDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {t.product}
              </button>
              <ul className="dropdown-menu" aria-labelledby="productDropdown">
                <li>
                  <button type="button" className="dropdown-item dropdown-submenu">
                    <span>{t.features}</span>
                    <ul className="dropdown-menu submenu">
                      <li><Link href="/product/features/training" className="dropdown-item">Training</Link></li>
                      <li><Link href="/product/features/customization" className="dropdown-item">Customization</Link></li>
                      <li><Link href="/product/features/multilanguage" className="dropdown-item">Multilanguage</Link></li>
                      <li><Link href="/product/features/ai-knowledge" className="dropdown-item">AI Knowledge</Link></li>
                      <li><Link href="/product/features/analytics" className="dropdown-item">Analytics</Link></li>
                      <li><Link href="/product/features/history" className="dropdown-item">History</Link></li>
                    </ul>
                  </button>
                </li>
                <li>
                  <button type="button" className="dropdown-item dropdown-submenu">
                    <span>{t.channels}</span>
                    <ul className="dropdown-menu submenu">
                      <li><Link href="/product/channels/web" className="dropdown-item">Web</Link></li>
                      <li><Link href="/product/channels/whatsapp" className="dropdown-item">WhatsApp</Link></li>
                      <li><Link href="/product/channels/instagram" className="dropdown-item">Instagram</Link></li>
                      <li><Link href="/product/channels/messenger" className="dropdown-item">Messenger</Link></li>
                      <li><Link href="/product/channels/slack" className="dropdown-item">Slack</Link></li>
                    </ul>
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" type="button" id="solutionsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                {t.solutions}
              </button>
              <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                <li><Link href="/solutions/customer-support" className="dropdown-item">Customer Support</Link></li>
                <li><Link href="/solutions/sales-agent" className="dropdown-item">Sales Agent</Link></li>
                <li><Link href="/solutions/hr-support" className="dropdown-item">HR Support</Link></li>
                <li><Link href="/solutions/onboarding-buddy" className="dropdown-item">Onboarding Buddy</Link></li>
                <li><Link href="/solutions/education" className="dropdown-item">Education</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/faq" className="nav-link">
                {t.faq}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/support" className="nav-link">
                {t.support}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pricing" className="nav-link">
                {t.pricing}
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Link href="/signin" className="btn btn-outline-primary me-2">{t.signIn}</Link>
            <Link href="/signup" className="btn btn-primary">{t.getStarted}</Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 