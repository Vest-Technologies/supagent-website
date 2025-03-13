import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SupAgent - Customer Support Solution',
  description: 'Automated customer support solution powered by AI to enhance customer satisfaction and reduce response times',
}

export default function CustomerSupportPage() {
  const benefits = [
    {
      title: '24/7 Availability',
      description: 'Provide round-the-clock support to your customers without increasing staffing costs',
      icon: 'bi-clock'
    },
    {
      title: 'Instant Responses',
      description: 'Eliminate wait times with immediate responses to customer inquiries',
      icon: 'bi-lightning-charge'
    },
    {
      title: 'Consistent Quality',
      description: 'Deliver consistent support quality across all customer interactions',
      icon: 'bi-award'
    },
    {
      title: 'Multilingual Support',
      description: 'Support customers in multiple languages without additional resources',
      icon: 'bi-translate'
    },
    {
      title: 'Reduced Costs',
      description: 'Lower support costs while maintaining or improving service quality',
      icon: 'bi-piggy-bank'
    },
    {
      title: 'Scalable Solution',
      description: 'Easily scale your support operations during peak periods without hiring',
      icon: 'bi-graph-up'
    }
  ]

  const features = [
    {
      title: 'Knowledge Base Integration',
      description: 'Seamlessly integrates with your existing knowledge base to provide accurate information',
      image: '/illustrations/knowledge-base.svg'
    },
    {
      title: 'Smart Escalation',
      description: 'Intelligently escalates complex issues to human agents when necessary',
      image: '/illustrations/escalation.svg'
    },
    {
      title: 'Customer Sentiment Analysis',
      description: 'Analyzes customer sentiment to adapt responses and improve satisfaction',
      image: '/illustrations/sentiment.svg'
    },
    {
      title: 'Omnichannel Support',
      description: 'Provides consistent support across all customer communication channels',
      image: '/illustrations/omnichannel.svg'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Customer Support Solution</h1>
              <p className="lead mb-4">Transform your customer support with our AI-powered solution. Reduce response times, improve satisfaction, and lower costs while providing 24/7 support.</p>
              <div className="d-flex gap-3">
                <Link href="/demo" className="btn btn-primary btn-lg">
                  Request Demo
                </Link>
                <Link href="/pricing" className="btn btn-lg">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image 
                src="/illustrations/customer-support.svg" 
                alt="Customer Support Solution" 
                width={600} 
                height={400} 
                className="img-fluid" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-2">Benefits of AI-Powered Customer Support</h2>
          <p className="text-center text-warning mb-5"><i className="bi bi-stars"></i> Enhance your customer experience</p>
          <div className="row g-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className={`bi ${benefit.icon} fs-2 text-warning me-3`}></i>
                      <h3 className="h5 mb-0">{benefit.title}</h3>
                    </div>
                    <p className="mb-0">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">1</span>
                  </div>
                  <h3 className="h5">Customer Inquiry</h3>
                  <p>Customer submits a question or request</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">2</span>
                  </div>
                  <h3 className="h5">AI Analysis</h3>
                  <p>Our AI analyzes the request and retrieves relevant information</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">3</span>
                  </div>
                  <h3 className="h5">Response Generation</h3>
                  <p>AI generates a personalized, accurate response</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">4</span>
                  </div>
                  <h3 className="h5">Continuous Learning</h3>
                  <p>System learns from each interaction to improve future responses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Key Features</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm" style={{ borderLeft: index % 2 === 0 ? '4px solid var(--orange)' : '', borderRight: index % 2 !== 0 ? '4px solid var(--orange)' : '' }}>
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-4 text-center">
                        <Image 
                          src={feature.image} 
                          alt={feature.title} 
                          width={120} 
                          height={120} 
                          className="img-fluid mb-3 mb-md-0" 
                        />
                      </div>
                      <div className="col-md-8">
                        <h3 className="h5 mb-3">{feature.title}</h3>
                        <p className="mb-0">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Success Story</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center mb-4">
                    <Image 
                      src="/logos/company-logo.svg" 
                      alt="Company Logo" 
                      width={60} 
                      height={60} 
                      className="me-3" 
                    />
                    <div>
                      <h3 className="h5 mb-1">E-Commerce Giant Reduces Support Costs by 65%</h3>
                      <p className="mb-0 text-muted">Online Retail Industry</p>
                    </div>
                  </div>
                  <p className="mb-4">A leading e-commerce company implemented our Customer Support Solution and saw dramatic improvements in their support metrics within just 3 months:</p>
                  <div className="row g-4 mb-4">
                    <div className="col-md-4 text-center">
                      <div className="h2 text-warning mb-2">65%</div>
                      <p className="mb-0">Reduction in support costs</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="h2 text-warning mb-2">92%</div>
                      <p className="mb-0">Customer satisfaction rate</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="h2 text-warning mb-2">3 min</div>
                      <p className="mb-0">Average response time</p>
                    </div>
                  </div>
                  <blockquote className="blockquote mb-0">
                    <p>"SupAgent's Customer Support Solution transformed our support operations. We're now able to handle 5x the volume of inquiries with the same team size, while improving customer satisfaction."</p>
                    <footer className="blockquote-footer">Sarah Johnson, <cite title="Source Title">Customer Support Director</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container text-center">
          <div className="py-5 px-4 bg-primary text-white rounded-4">
            <h2 className="mb-3">Ready to Transform Your Customer Support?</h2>
            <p className="lead mb-4">Join hundreds of businesses that have revolutionized their customer support with SupAgent.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/waitlist" className="btn btn-warning btn-lg">
                <i className="bi bi-envelope-check me-2"></i>
                Join the Waiting List
              </Link>
              <Link href="/support" className="btn btn-light btn-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 