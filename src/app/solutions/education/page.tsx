import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SupAgent - Education Solution',
  description: 'AI-powered education solution to enhance learning experiences and improve educational outcomes',
}

export default function EducationPage() {
  const benefits = [
    {
      title: 'Personalized Learning',
      description: 'Deliver tailored educational content based on individual learning styles and progress',
      icon: 'bi-person-check'
    },
    {
      title: '24/7 Learning Support',
      description: 'Provide round-the-clock assistance to students whenever they need help',
      icon: 'bi-clock'
    },
    {
      title: 'Reduced Educator Workload',
      description: 'Free up educators to focus on high-value interactions and complex teaching moments',
      icon: 'bi-briefcase'
    },
    {
      title: 'Improved Learning Outcomes',
      description: 'Enhance student comprehension and retention through interactive, adaptive learning',
      icon: 'bi-graph-up'
    },
    {
      title: 'Scalable Education',
      description: 'Deliver high-quality education to more students without proportional resource increases',
      icon: 'bi-people'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into student performance and learning patterns',
      icon: 'bi-bar-chart'
    }
  ]

  const features = [
    {
      title: 'Intelligent Tutoring',
      description: "Provide personalized guidance and explanations tailored to each student's needs",
      image: '/illustrations/tutoring.svg'
    },
    {
      title: 'Adaptive Learning Paths',
      description: 'Create customized learning journeys that adapt based on student progress and performance',
      image: '/illustrations/learning-path.svg'
    },
    {
      title: 'Interactive Content',
      description: 'Engage students with interactive, multimedia learning materials and assessments',
      image: '/illustrations/interactive-content.svg'
    },
    {
      title: 'Learning Analytics',
      description: 'Track and analyze student performance with detailed dashboards and reports',
      image: '/illustrations/learning-analytics.svg'
    }
  ]

  const applications = [
    {
      title: 'K-12 Education',
      description: 'Support classroom learning with personalized tutoring and homework help',
      icon: 'bi-book'
    },
    {
      title: 'Higher Education',
      description: 'Enhance university courses with AI-powered teaching assistants and study aids',
      icon: 'bi-mortarboard'
    },
    {
      title: 'Corporate Training',
      description: 'Streamline employee training with adaptive learning programs and on-demand support',
      icon: 'bi-briefcase'
    },
    {
      title: 'Language Learning',
      description: 'Facilitate language acquisition with conversational practice and personalized feedback',
      icon: 'bi-translate'
    },
    {
      title: 'Test Preparation',
      description: 'Help students prepare for standardized tests with targeted practice and guidance',
      icon: 'bi-pencil-square'
    },
    {
      title: 'Special Education',
      description: 'Provide additional support for students with diverse learning needs',
      icon: 'bi-puzzle'
    }
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Education Solution</h1>
              <p className="lead mb-4">Transform educational experiences with our AI-powered education solution. Personalize learning, reduce educator workload, and improve outcomes for students of all ages and abilities.</p>
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
                src="/illustrations/education.svg" 
                alt="Education Solution" 
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
          <h2 className="text-center mb-2">Benefits of AI-Powered Education</h2>
          <p className="text-center text-warning mb-5"><i className="bi bi-stars"></i> Revolutionize the learning experience</p>
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

      {/* Applications Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Applications Across Education</h2>
          <div className="row g-4">
            {applications.map((application, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                      <i className={`bi ${application.icon} fs-3`}></i>
                    </div>
                    <h3 className="h5 mb-3">{application.title}</h3>
                    <p className="mb-0">{application.description}</p>
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
                  <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">1</span>
                  </div>
                  <h3 className="h5">Assessment</h3>
                  <p>Evaluate student knowledge, learning style, and needs</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">2</span>
                  </div>
                  <h3 className="h5">Personalization</h3>
                  <p>Create customized learning paths and content</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">3</span>
                  </div>
                  <h3 className="h5">Engagement</h3>
                  <p>Deliver interactive content and provide real-time support</p>
                </div>
                <div className="col-md-3 text-center">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                    <span className="h3 mb-0">4</span>
                  </div>
                  <h3 className="h5">Analysis</h3>
                  <p>Track progress and continuously adapt the learning experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
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
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Seamless Integrations</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <p className="lead">Our Education Solution integrates with popular learning management systems and educational tools.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 align-items-center justify-content-center">
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/canvas.svg" alt="Canvas" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/blackboard.svg" alt="Blackboard" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/moodle.svg" alt="Moodle" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/google-classroom.svg" alt="Google Classroom" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/microsoft-teams.svg" alt="Microsoft Teams" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-4 col-md-2 text-center">
                  <Image src="/logos/zoom.svg" alt="Zoom" width={80} height={80} className="img-fluid" />
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
                      src="/logos/university-logo.svg" 
                      alt="University Logo" 
                      width={60} 
                      height={60} 
                      className="me-3" 
                    />
                    <div>
                      <h3 className="h5 mb-1">University Improves Student Performance by 35%</h3>
                      <p className="mb-0 text-muted">Higher Education</p>
                    </div>
                  </div>
                  <p className="mb-4">A leading university implemented our Education Solution in their introductory STEM courses and achieved remarkable results:</p>
                  <div className="row g-4 mb-4">
                    <div className="col-md-4 text-center">
                      <div className="h2 text-warning mb-2">35%</div>
                      <p className="mb-0">Improvement in student performance</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="h2 text-warning mb-2">42%</div>
                      <p className="mb-0">Reduction in dropout rates</p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="h2 text-warning mb-2">90%</div>
                      <p className="mb-0">Student satisfaction rate</p>
                    </div>
                  </div>
                  <blockquote className="blockquote mb-0">
                    <p>"SupAgent's Education Solution has transformed how we support our students. The personalized learning experience has significantly improved student outcomes, particularly for those who traditionally struggled in STEM courses."</p>
                    <footer className="blockquote-footer">Dr. Rebecca Martinez, <cite title="Source Title">Dean of Science</cite></footer>
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
            <h2 className="mb-3">Ready to Transform Your Educational Offerings?</h2>
            <p className="lead mb-4">Join forward-thinking educational institutions that have revolutionized learning with SupAgent.</p>
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