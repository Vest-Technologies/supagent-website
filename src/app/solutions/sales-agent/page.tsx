import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SupAgent - Sales Agent Solution',
  description: 'AI-powered sales agent solution to boost conversion rates and streamline your sales processes',
}

export default function SalesAgentPage() {
  const benefits = [
    {
      title: 'Increased Conversion Rates',
      description: 'Convert more leads into customers with personalized, data-driven sales approaches',
      icon: 'bi-graph-up-arrow'
    },
    {
      title: 'Automated Lead Qualification',
      description: 'Automatically qualify leads based on behavior and engagement patterns',
      icon: 'bi-funnel'
    },
    {
      title: 'Personalized Interactions',
      description: 'Deliver tailored sales pitches based on customer preferences and history',
      icon: 'bi-person-check'
    },
    {
      title: 'Consistent Follow-ups',
      description: 'Never miss a follow-up opportunity with automated, timely outreach',
      icon: 'bi-calendar-check'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into customer behavior and sales performance',
      icon: 'bi-bar-chart'
    },
    {
      title: 'Seamless CRM Integration',
      description: 'Integrate with your existing CRM system for unified customer data',
      icon: 'bi-database-check'
    }
  ]

  const features = [
    {
      title: 'Intelligent Lead Scoring',
      description: 'Automatically score and prioritize leads based on likelihood to convert',
      image: '/illustrations/lead-scoring.svg'
    },
    {
      title: 'Automated Sales Sequences',
      description: 'Create and execute personalized sales sequences for different customer segments',
      image: '/illustrations/sales-sequence.svg'
    },
    {
      title: 'Smart Product Recommendations',
      description: 'Recommend relevant products based on customer preferences and behavior',
      image: '/illustrations/product-recommendation.svg'
    },
    {
      title: 'Sales Performance Analytics',
      description: 'Track and analyze sales performance with detailed dashboards and reports',
      image: '/illustrations/sales-analytics.svg'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-warning text-white mb-3">Featured Solution</span>
              <h1 className="display-4 fw-bold mb-4">Sales Agent Solution</h1>
              <p className="lead mb-4">Boost your sales performance with our AI-powered sales agent solution. Automate lead qualification, personalize customer interactions, and increase conversion rates.</p>
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
                src="/illustrations/sales-agent.svg" 
                alt="Sales Agent Solution" 
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
          <h2 className="text-center mb-5">Benefits of AI-Powered Sales Agents</h2>
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
                  <h3 className="h5">Lead Capture</h3>
                  <p>Capture and qualify leads across multiple channels</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">2</span>
                  </div>
                  <h3 className="h5">Personalized Engagement</h3>
                  <p>Engage leads with personalized, timely communications</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">3</span>
                  </div>
                  <h3 className="h5">Nurture & Convert</h3>
                  <p>Nurture leads through the sales funnel with targeted content</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">4</span>
                  </div>
                  <h3 className="h5">Analyze & Optimize</h3>
                  <p>Continuously analyze performance and optimize strategies</p>
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

      {/* Integration Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Seamless Integrations</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <p className="lead">Our Sales Agent Solution integrates with your favorite CRM and sales tools to create a unified sales ecosystem.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/salesforce.svg" alt="Salesforce" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/hubspot.svg" alt="HubSpot" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/zoho.svg" alt="Zoho" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/pipedrive.svg" alt="Pipedrive" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/zendesk.svg" alt="Zendesk" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/zapier.svg" alt="Zapier" width={80} height={80} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5">
        <div className="container text-center">
          <div className="py-5 px-4 bg-primary text-white rounded-4">
            <h2 className="mb-3">Ready to Transform Your Sales Process?</h2>
            <p className="lead mb-4">Get started with our AI-powered Sales Agent Solution today.</p>
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