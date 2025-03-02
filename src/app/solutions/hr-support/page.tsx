import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SupAgent - HR Support Solution',
  description: 'AI-powered HR support solution to streamline HR processes and enhance employee experience',
}

export default function HRSupportPage() {
  const benefits = [
    {
      title: 'Streamlined HR Processes',
      description: 'Automate routine HR tasks and workflows to save time and reduce errors',
      icon: 'bi-gear'
    },
    {
      title: 'Enhanced Employee Experience',
      description: 'Provide instant responses to employee queries and requests',
      icon: 'bi-emoji-smile'
    },
    {
      title: 'Reduced Administrative Burden',
      description: 'Free up HR staff to focus on strategic initiatives and complex issues',
      icon: 'bi-briefcase'
    },
    {
      title: 'Consistent Policy Application',
      description: 'Ensure consistent application of HR policies and procedures',
      icon: 'bi-shield-check'
    },
    {
      title: 'Data-Driven HR Insights',
      description: 'Gain valuable insights into employee needs and HR performance',
      icon: 'bi-graph-up'
    },
    {
      title: 'Scalable HR Support',
      description: 'Scale HR support capabilities without increasing headcount',
      icon: 'bi-people'
    }
  ]

  const features = [
    {
      title: 'Employee Self-Service Portal',
      description: 'Empower employees to find answers and resolve issues on their own',
      image: '/illustrations/self-service.svg'
    },
    {
      title: 'Automated HR Workflows',
      description: 'Streamline HR processes with intelligent workflow automation',
      image: '/illustrations/workflow.svg'
    },
    {
      title: 'Policy Knowledge Base',
      description: 'Centralize HR policies and procedures for easy access and updates',
      image: '/illustrations/policy-kb.svg'
    },
    {
      title: 'HR Analytics Dashboard',
      description: 'Track and analyze HR metrics and employee engagement',
      image: '/illustrations/hr-analytics.svg'
    }
  ]

  const useCases = [
    {
      title: 'Employee Onboarding',
      description: 'Streamline the onboarding process for new employees with automated workflows and personalized guidance',
      icon: 'bi-person-plus'
    },
    {
      title: 'Leave Management',
      description: 'Automate leave requests, approvals, and tracking to simplify the process for employees and HR',
      icon: 'bi-calendar-check'
    },
    {
      title: 'Benefits Enrollment',
      description: 'Guide employees through benefits selection and enrollment with personalized recommendations',
      icon: 'bi-heart-pulse'
    },
    {
      title: 'Policy Inquiries',
      description: 'Provide instant answers to employee questions about company policies and procedures',
      icon: 'bi-question-circle'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">HR Support Solution</h1>
              <p className="lead mb-4">Transform your HR operations with our AI-powered HR support solution. Automate routine tasks, enhance employee experience, and free up your HR team to focus on strategic initiatives.</p>
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
                src="/illustrations/hr-support.svg" 
                alt="HR Support Solution" 
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
          <h2 className="text-center mb-2">Benefits of AI-Powered HR Support</h2>
          <p className="text-center text-warning mb-5"><i className="bi bi-stars"></i> Elevate your HR operations</p>
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

      {/* Use Cases Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Common HR Use Cases</h2>
          <div className="row g-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                        <i className={`bi ${useCase.icon} fs-4`}></i>
                      </div>
                      <h3 className="h5 mb-0">{useCase.title}</h3>
                    </div>
                    <p className="mb-0">{useCase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">How It Works</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">1</span>
                  </div>
                  <h3 className="h5">Employee Inquiry</h3>
                  <p>Employee submits a question or request</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">2</span>
                  </div>
                  <h3 className="h5">AI Analysis</h3>
                  <p>Our AI analyzes the request and retrieves relevant information</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">3</span>
                  </div>
                  <h3 className="h5">Resolution</h3>
                  <p>AI resolves the request or routes to appropriate HR staff</p>
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

      {/* Integration Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Seamless Integrations</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <p className="lead">Our HR Support Solution integrates with your favorite HR systems and tools to create a unified HR ecosystem.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/workday.svg" alt="Workday" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/bamboo.svg" alt="BambooHR" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/adp.svg" alt="ADP" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/sap.svg" alt="SAP" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/oracle.svg" alt="Oracle" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/zenefits.svg" alt="Zenefits" width={80} height={80} className="img-fluid" />
                </div>
              </div>
            </div>
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
                      src="/logos/enterprise-logo.svg" 
                      alt="Enterprise Logo" 
                      width={60} 
                      height={60} 
                      className="me-3" 
                    />
                    <div>
                      <h3 className="h5 mb-1">Global Enterprise Reduces HR Workload by 70%</h3>
                      <p className="mb-0 text-muted">Manufacturing Industry</p>
                    </div>
                  </div>
                  <p className="mb-4">A global manufacturing company with 5,000+ employees implemented our HR Support Solution and achieved significant improvements:</p>
                  <div className="row g-4 mb-4">
                    <div className="col-md-4 text-center">
                      <div className="h2 text-primary mb-2">70%</div>
                      <p className="mb-0">Reduction in HR administrative tasks</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="h2 text-primary mb-2">85%</div>
                      <p className="mb-0">Employee satisfaction with HR support</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="h2 text-primary mb-2">30%</div>
                      <p className="mb-0">Increase in HR strategic initiatives</p>
                    </div>
                  </div>
                  <blockquote className="blockquote mb-0">
                    <p>"SupAgent's HR Support Solution has transformed how we deliver HR services. Our HR team now spends less time on administrative tasks and more time on strategic initiatives that drive business value."</p>
                    <footer className="blockquote-footer">Emily Rodriguez, <cite title="Source Title">Global HR Director</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5">
        <div className="container text-center">
          <div className="py-5 px-4 bg-warning text-white rounded-4">
            <h2 className="mb-3">Ready to Transform Your HR Operations?</h2>
            <p className="lead mb-4">Get started with our AI-powered HR Support Solution today.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/demo" className="btn btn-light btn-lg">
                Request Demo
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 