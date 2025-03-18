'use client';

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)
  const [mobileFeatureOpen, setMobileFeatureOpen] = useState(false)
  const [mobileChannelOpen, setMobileChannelOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)

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

  // Handle client-side navigation
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()

    // If it's the current page, do nothing
    if (pathname === href) return

    // Use router.push for client-side navigation
    router.push(href)

    // Close the mobile navbar if open
    if (window.innerWidth < 992) {
      const navbarCollapse = document.querySelector('.navbar-collapse')
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapse)
        bsCollapse.hide()
      }

      // Reset all mobile dropdown states
      setMobileProductOpen(false)
      setMobileFeatureOpen(false)
      setMobileChannelOpen(false)
      setMobileSolutionsOpen(false)
    }
  }

  // Toggle mobile dropdowns
  const toggleMobileDropdown = (dropdown: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (window.innerWidth < 992) {
      if (dropdown === 'product') {
        setMobileProductOpen(!mobileProductOpen)
        setMobileSolutionsOpen(false)
      } else if (dropdown === 'solutions') {
        setMobileSolutionsOpen(!mobileSolutionsOpen)
        setMobileProductOpen(false)
        setMobileFeatureOpen(false)
        setMobileChannelOpen(false)
      }
    }
  }

  // Toggle mobile submenu
  const toggleMobileSubmenu = (submenu: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (window.innerWidth < 992) {
      if (submenu === 'features') {
        setMobileFeatureOpen(!mobileFeatureOpen)
        setMobileChannelOpen(false)
      } else if (submenu === 'channels') {
        setMobileChannelOpen(!mobileChannelOpen)
        setMobileFeatureOpen(false)
      }
    }
  }

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
    getStarted: 'Get Started Free',
    joinWaitlist: 'Join the Waiting List'
  }

  const navbarClass = `navbar navbar-expand-lg navbar-light fixed-top py-2 ${scrolled ? 'bg-light-icy' : 'bg-white'}`

  return (
    <nav className={navbarClass}>
      <div className="container">
        <Link href="/" className="navbar-brand" onClick={(e) => handleNavigation('/', e)}>
          <img className="logo-img" src="/logo.png" alt="AI Agents Logo" width={170} />
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
            <li className={`nav-item dropdown ${mobileProductOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle"
                type="button"
                id="productDropdown"
                onClick={(e) => toggleMobileDropdown('product', e)}
                aria-expanded={mobileProductOpen ? 'true' : 'false'}
              >
                {t.product}
              </button>
              <ul className={`dropdown-menu ${mobileProductOpen ? 'show' : ''}`} aria-labelledby="productDropdown">
                <li>
                  <button
                    type="button"
                    className={`dropdown-item dropdown-submenu ${mobileFeatureOpen ? 'active' : ''}`}
                    onClick={(e) => toggleMobileSubmenu('features', e)}
                  >
                    <span>{t.features}</span>
                    <ul className={`dropdown-menu submenu ${mobileFeatureOpen ? 'show' : ''}`}>
                      <li><a href="/product/features/training" className="dropdown-item" onClick={(e) => handleNavigation('/product/features/training', e)}>Training</a></li>
                      <li><a href="/product/features/customization" className="dropdown-item" onClick={(e) => handleNavigation('/product/features/customization', e)}>Customization</a></li>
                      <li><a href="/product/features/multilanguage" className="dropdown-item" onClick={(e) => handleNavigation('/product/features/multilanguage', e)}>Multilanguage</a></li>
                      <li><a href="/product/features/ai-technology" className="dropdown-item" onClick={(e) => handleNavigation('/product/features/ai-technology', e)}>AI Technology</a></li>
                      <li><a href="/product/features/analytics" className="dropdown-item" onClick={(e) => handleNavigation('/product/features/analytics', e)}>Analytics</a></li>
                      <li><a href="/product/features/chat-history" className="dropdown-item" onClick={(e) => handleNavigation('/product/features/chat-history', e)}>Chat History</a></li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between" style={{ cursor: 'default', pointerEvents: 'none' }}>
                          Action Flow
                          <span
                            className="ms-2 d-inline-flex align-items-center"
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              backgroundColor: 'rgba(255, 142, 3, 0.15)',
                              color: '#ff8e03',
                              padding: '1px 6px',
                              borderRadius: '4px',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                              letterSpacing: '0.2px',
                              textTransform: 'uppercase',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            Coming soon
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown-item d-flex align-items-center justify-content-between" style={{ cursor: 'default', pointerEvents: 'none' }}>
                          Human Intervention
                          <span
                            className="ms-2 d-inline-flex align-items-center"
                            style={{
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              backgroundColor: 'rgba(255, 142, 3, 0.15)',
                              color: '#ff8e03',
                              padding: '1px 6px',
                              borderRadius: '4px',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                              letterSpacing: '0.2px',
                              textTransform: 'uppercase',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            Coming soon
                          </span>
                        </div>
                      </li>
                    </ul>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className={`dropdown-item dropdown-submenu ${mobileChannelOpen ? 'active' : ''}`}
                    onClick={(e) => toggleMobileSubmenu('channels', e)}
                  >
                    <span>{t.channels}</span>
                    <ul className={`dropdown-menu submenu ${mobileChannelOpen ? 'show' : ''}`}>
                      <li><a href="/product/channels/web" className="dropdown-item" onClick={(e) => handleNavigation('/product/channels/web', e)}>Web</a></li>
                      <li><a href="/product/channels/whatsapp" className="dropdown-item" onClick={(e) => handleNavigation('/product/channels/whatsapp', e)}>WhatsApp</a></li>
                      <li><a href="/product/channels/instagram" className="dropdown-item" onClick={(e) => handleNavigation('/product/channels/instagram', e)}>Instagram</a></li>
                      <li><a href="/product/channels/messenger" className="dropdown-item" onClick={(e) => handleNavigation('/product/channels/messenger', e)}>Messenger</a></li>
                      <li><a href="/product/channels/slack" className="dropdown-item" onClick={(e) => handleNavigation('/product/channels/slack', e)}>Slack</a></li>
                    </ul>
                  </button>
                </li>
              </ul>
            </li>
            <li className={`nav-item dropdown ${mobileSolutionsOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle"
                type="button"
                id="solutionsDropdown"
                onClick={(e) => toggleMobileDropdown('solutions', e)}
                aria-expanded={mobileSolutionsOpen ? 'true' : 'false'}
              >
                {t.solutions}
              </button>
              <ul className={`dropdown-menu ${mobileSolutionsOpen ? 'show' : ''}`} aria-labelledby="solutionsDropdown">
                <li><a href="/solutions/customer-support" className="dropdown-item" onClick={(e) => handleNavigation('/solutions/customer-support', e)}>Customer Support</a></li>
                <li><a href="/solutions/sales-agent" className="dropdown-item" onClick={(e) => handleNavigation('/solutions/sales-agent', e)}>Sales Agent</a></li>
                <li><a href="/solutions/hr-support" className="dropdown-item" onClick={(e) => handleNavigation('/solutions/hr-support', e)}>HR Support</a></li>
                <li><a href="/solutions/onboarding-buddy" className="dropdown-item" onClick={(e) => handleNavigation('/solutions/onboarding-buddy', e)}>Onboarding Buddy</a></li>
                <li><a href="/solutions/education" className="dropdown-item" onClick={(e) => handleNavigation('/solutions/education', e)}>Education</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/faq" className="nav-link" onClick={(e) => handleNavigation('/faq', e)}>
                {t.faq}
              </a>
            </li>
            <li className="nav-item">
              <a href="/support" className="nav-link" onClick={(e) => handleNavigation('/support', e)}>
                {t.support}
              </a>
            </li>
            {/* <li className="nav-item">
              <a href="/pricing" className="nav-link" onClick={(e) => handleNavigation('/pricing', e)}>
                {t.pricing}
              </a>
            </li> */}
          </ul>
          <div className="d-flex align-items-center">
            {/* Original buttons commented out for future use
            <a href="/signin" className="btn btn-outline-primary me-2" onClick={(e) => handleNavigation('/signin', e)}>{t.signIn}</a>
            <a href="/signup" className="btn btn-primary" onClick={(e) => handleNavigation('/signup', e)}>{t.getStarted}</a>
            */}
            <motion.a
              href="/waitlist"
              className="btn btn-warning w-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleNavigation('/waitlist', e)}
            >
              <i className="bi bi-envelope-check me-2"></i>
              {t.joinWaitlist}
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Add TypeScript global declaration for Bootstrap
declare global {
  interface Window {
    bootstrap: any;
  }
} 