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
          <div className="col-md-4 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/about" className="text-decoration-none text-dark">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="text-decoration-none text-dark">Terms of Use</Link>
              </li>
              <li className="mb-2">
                <Link href="/privacy" className="text-decoration-none text-dark">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/dpa" className="text-decoration-none text-dark">Data Processing Agreement</Link>
              </li>
              <li className="mb-2">
                <Link href="/gdpr" className="text-decoration-none text-dark">GDPR</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="mb-3 text-warning">Contact Us</h5>
            <p className="text-content">
              Have questions? We're here to help!
              <br />
              <a href="mailto:support@supagent.com" className="text-decoration-none text-warning">
                support@supagent.com
              </a>
            </p>
            <button className="btn btn-warning btn-sm mt-2">Send Message</button>
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