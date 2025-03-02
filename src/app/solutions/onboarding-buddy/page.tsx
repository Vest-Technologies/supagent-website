import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SupAgent - Onboarding Buddy Solution',
  description: 'AI-powered onboarding solution to streamline employee onboarding and improve new hire experience',
}

export default function OnboardingBuddyPage() {
  const benefits = [
    {
      title: 'Accelerated Onboarding',
      description: 'Reduce time-to-productivity for new hires with streamlined onboarding processes',
      icon: 'bi-speedometer2'
    },
    {
      title: 'Consistent Experience',
      description: 'Ensure all new hires receive the same high-quality onboarding experience',
      icon: 'bi-stars'
    },
    {
      title: 'Reduced HR Workload',
      description: 'Free up HR and manager time by automating routine onboarding tasks',
      icon: 'bi-person-check'
    },
    {
      title: 'Improved Retention',
      description: 'Increase new hire retention with a smooth, engaging onboarding experience',
      icon: 'bi-heart'
    },
    {
      title: 'Personalized Guidance',
      description: 'Provide tailored guidance based on role, department, and experience level',
      icon: 'bi-person-gear'
    },
    {
      title: '24/7 Support',
      description: 'Offer round-the-clock assistance to new hires whenever they need help',
      icon: 'bi-clock-history'
    }
  ]

  const features = [
    {
      title: 'Personalized Onboarding Plans',
      description: 'Create customized onboarding journeys based on role, department, and experience',
      image: '/illustrations/onboarding-plan.svg'
    },
    {
      title: 'Interactive Training Modules',
      description: 'Engage new hires with interactive, self-paced training content',
      image: '/illustrations/training-modules.svg'
    },
    {
      title: 'Knowledge Base Access',
      description: 'Provide instant access to company policies, procedures, and resources',
      image: '/illustrations/knowledge-access.svg'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor onboarding progress and completion of key milestones',
      image: '/illustrations/progress-tracking.svg'
    }
  ]

  const timeline = [
    {
      day: 'Pre-boarding',
      title: 'Welcome & Preparation',
      description: 'Send welcome materials, collect necessary information, and prepare new hires before their first day',
      icon: 'bi-envelope-paper'
    },
    {
      day: 'Day 1',
      title: 'Orientation & Setup',
      description: 'Guide new hires through first-day activities, introductions, and system setup',
      icon: 'bi-calendar-check'
    },
    {
      day: 'Week 1',
      title: 'Role & Team Integration',
      description: 'Facilitate team introductions, role-specific training, and initial projects',
      icon: 'bi-people'
    },
    {
      day: 'Month 1',
      title: 'Deep Dive & Development',
      description: 'Provide comprehensive training, feedback sessions, and development planning',
      icon: 'bi-graph-up'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Onboarding Buddy Solution</h1>
              <p className="lead mb-4">Transform your employee onboarding with our AI-powered Onboarding Buddy. Streamline the process, enhance the new hire experience, and accelerate time-to-productivity.</p>
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
                src="/illustrations/onboarding.svg" 
                alt="Onboarding Buddy Solution" 
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
          <h2 className="text-center mb-2">Benefits of AI-Powered Onboarding</h2>
          <p className="text-center text-warning mb-5"><i className="bi bi-stars"></i> Create exceptional first impressions</p>
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

      {/* Timeline Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Onboarding Journey</h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                {timeline.map((phase, index) => (
                  <div key={index} className="col-md-6 col-lg-3">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body p-4 text-center">
                        <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                          <i className={`bi ${phase.icon} fs-3`}></i>
                        </div>
                        <div className="badge bg-warning text-white mb-2">{phase.day}</div>
                        <h3 className="h5 mb-3">{phase.title}</h3>
                        <p className="mb-0">{phase.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
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

      {/* Call to Action */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <div className="py-5 px-4 bg-primary text-white rounded-4">
            <h2 className="mb-3">Ready to Transform Your Onboarding Process?</h2>
            <p className="lead mb-4">Get started with our AI-powered Onboarding Buddy Solution today.</p>
            <div className="d-flex justify-content-center gap-3">
              <Link href="/demo" className="btn btn-light btn-lg">
                Request Demo
              </Link>
              <Link href="/contact" className="btn btn-warning btn-lg">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 