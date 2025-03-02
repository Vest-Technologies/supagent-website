import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './custom-bootstrap.scss'
import './globals.scss'
import Script from 'next/script'

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
        <ScrollToTop />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script id="bootstrap-init" strategy="afterInteractive">
          {`
            setTimeout(() => {
              document.addEventListener('DOMContentLoaded', function() {
                // Handle dropdown items with submenus
                document.querySelectorAll('.dropdown-item.dropdown-submenu').forEach(function(element) {
                  element.addEventListener('click', function(e) {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      e.stopPropagation();
                      let submenu = this.querySelector('.submenu');
                      if (submenu) {
                        // Close all other open submenus first
                        document.querySelectorAll('.submenu.show').forEach(function(menu) {
                          if (menu !== submenu) {
                            menu.classList.remove('show');
                          }
                        });
                        // Toggle current submenu
                        submenu.classList.toggle('show');
                      }
                    }
                  });
                });

                // Add collapsed class and hide navbar when menu item is clicked
                document.querySelectorAll('#navbarNav .nav-link, #navbarNav .dropdown-item').forEach(function(element) {
                  element.addEventListener('click', function() {
                    if (window.innerWidth < 992) {
                      const navbarToggler = document.querySelector('.navbar-toggler');
                      const navbarCollapse = document.querySelector('.navbar-collapse');
                      if (navbarToggler) {
                        navbarToggler.classList.add('collapsed');
                        navbarToggler.setAttribute('aria-expanded', 'false');
                      }
                      if (navbarCollapse) {
                        navbarCollapse.classList.remove('show');
                        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                        bsCollapse.hide();
                      }
                    }
                  });
                });
              });
            }, 100);
          `}
        </Script>
      </body>
    </html>
  )
} 