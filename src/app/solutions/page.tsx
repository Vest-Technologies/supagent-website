import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SupAgent - Solutions',
  description: 'Explore our comprehensive AI-driven solutions for various business needs',
}

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Customer Support',
      description: 'Automated support for customer inquiries and requests, reducing response time and improving satisfaction.',
      image: '/illustrations/customer-support.svg',
      link: '/solutions/customer-support',
      highlight: false
    },
    {
      title: 'Sales Agent',
      description: 'AI-powered sales support and lead management to boost conversion rates and streamline sales processes.',
      image: '/illustrations/sales-agent.svg',
      link: '/solutions/sales-agent',
      highlight: true
    },
    {
      title: 'HR Support',
      description: 'Automated HR processes and employee support for efficient workforce management and improved employee experience.',
      image: '/illustrations/hr-support.svg',
      link: '/solutions/hr-support',
      highlight: false
    },
    {
      title: 'Onboarding Buddy',
      description: 'Streamlined onboarding and training support to help new employees integrate quickly and effectively.',
      image: '/illustrations/onboarding.svg',
      link: '/solutions/onboarding-buddy',
      highlight: false
    },
    {
      title: 'Education',
      description: 'AI-powered educational support and guidance for enhanced learning experiences and knowledge retention.',
      image: '/illustrations/education.svg',
      link: '/solutions/education',
      highlight: false
    }
  ]

  return (
    <main>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Solutions for Every Business Need</h1>
              <p className="lead mb-4">Our AI-driven platform offers comprehensive support across various business functions, helping you automate processes and improve efficiency.</p>
              <div className="d-flex gap-2">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
                <Link href="#solutions" className="btn btn-outline-primary btn-lg">
                  Explore Solutions
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image 
                src="/illustrations/solutions.svg" 
                alt="SupAgent Solutions" 
                width={600} 
                height={400} 
                className="img-fluid" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5" id="solutions">
        <div className="container">
          <h2 className="text-center mb-2">Explore Our Solutions</h2>
          <p className="text-center text-warning mb-5"><i className="bi bi-stars"></i> Find the perfect fit for your business needs</p>
          <div className="row g-4">
            {solutions.map((solution, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className={`card h-100 shadow-sm border-0 hover-card ${solution.highlight ? 'border-top border-warning border-4' : ''}`}>
                  <div className="card-body text-center p-4">
                    <Image 
                      src={solution.image} 
                      alt={solution.title} 
                      width={120} 
                      height={120} 
                      className="mb-3" 
                    />
                    <h3 className={`h4 mb-3 ${solution.highlight ? 'text-warning' : ''}`}>{solution.title}</h3>
                    <p className="mb-4">{solution.description}</p>
                    <Link href={solution.link} className={`btn ${solution.highlight ? 'btn-warning' : 'btn-primary'}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Not Sure Which Solution Fits Your Needs?</h2>
          <p className="lead mb-4">Our team of experts is ready to help you find the perfect solution for your business.</p>
          <Link href="/contact" className="btn btn-lg btn-warning">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
} 