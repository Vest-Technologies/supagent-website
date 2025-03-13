import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">About SupAgent</h5>
            <p className="text-content">
              AI-Driven Agent Integrated Support Solution for reducing support burdens and optimizing operations.
            </p>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Features</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/product/features/training" className="text-decoration-none text-dark">Training</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/features/customization" className="text-decoration-none text-dark">Customization</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/features/multilanguage" className="text-decoration-none text-dark">Multilanguage</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/features/ai-knowledge" className="text-decoration-none text-dark">AI Knowledge</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/features/analytics" className="text-decoration-none text-dark">Analytics</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/features/history" className="text-decoration-none text-dark">History</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Channels</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/product/channels/web" className="text-decoration-none text-dark">Web</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/channels/whatsapp" className="text-decoration-none text-dark">WhatsApp</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/channels/instagram" className="text-decoration-none text-dark">Instagram</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/channels/messenger" className="text-decoration-none text-dark">Messenger</Link>
              </li>
              <li className="mb-2">
                <Link href="/product/channels/slack" className="text-decoration-none text-dark">Slack</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Solutions</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/solutions/customer-support" className="text-decoration-none text-dark">Customer Support</Link>
              </li>
              <li className="mb-2">
                <Link href="/solutions/sales-agent" className="text-decoration-none text-dark">Sales Agent</Link>
              </li>
              <li className="mb-2">
                <Link href="/solutions/hr-support" className="text-decoration-none text-dark">HR Support</Link>
              </li>
              <li className="mb-2">
                <Link href="/solutions/onboarding-buddy" className="text-decoration-none text-dark">Onboarding Buddy</Link>
              </li>
              <li className="mb-2">
                <Link href="/solutions/education" className="text-decoration-none text-dark">Education</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-dark">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/pricing" className="text-decoration-none text-dark">Pricing</Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="text-decoration-none text-dark">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="/support" className="text-decoration-none text-dark">Support</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-9 mb-4">
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled d-flex flex-wrap">
              <li className="me-4 mb-2">
                <Link href="/legal/terms" className="text-decoration-none text-dark">Terms of Use</Link>
              </li>
              <li className="me-4 mb-2">
                <Link href="/legal/privacy" className="text-decoration-none text-dark">Privacy Policy</Link>
              </li>
              <li className="me-4 mb-2">
                <Link href="/legal/dpa" className="text-decoration-none text-dark">Data Processing Agreement</Link>
              </li>
              <li className="me-4 mb-2">
                <Link href="/gdpr" className="text-decoration-none text-dark">GDPR</Link>
              </li>
              <li className="me-4 mb-2">
                <Link href="/legal/cookies" className="text-decoration-none text-dark">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <p className="text-content">
              Have questions? We're here to help!
              <br />
              <a href="mailto:support@supagent.com" className="text-decoration-none text-dark">
                support@supagent.com
              </a>
            </p>
            <button className="btn btn-primary btn-sm mt-2">Send Message</button>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0 text-content">
            © {new Date().getFullYear()} SupAgent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 