'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function HRSupportPage() {
  const benefits = [
    {
      title: 'Streamlined HR Processes',
      description: 'Automate routine HR tasks and workflows to save time and reduce errors',
      icon: 'gear'
    },
    {
      title: 'Enhanced Employee Experience',
      description: 'Provide instant responses to employee queries and requests',
      icon: 'emoji-smile'
    },
    {
      title: 'Reduced Administrative Burden',
      description: 'Free up HR staff to focus on strategic initiatives and complex issues',
      icon: 'briefcase'
    },
    {
      title: 'Consistent Policy Application',
      description: 'Ensure consistent application of HR policies and procedures',
      icon: 'shield-check'
    },
    {
      title: 'Data-Driven HR Insights',
      description: 'Gain valuable insights into employee needs and HR performance',
      icon: 'graph-up'
    },
    {
      title: 'Scalable HR Support',
      description: 'Scale HR support capabilities without increasing headcount',
      icon: 'people'
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
      icon: 'person-plus'
    },
    {
      title: 'Leave Management',
      description: 'Automate leave requests, approvals, and tracking to simplify the process for employees and HR',
      icon: 'calendar-check'
    },
    {
      title: 'Benefits Enrollment',
      description: 'Guide employees through benefits selection and enrollment with personalized recommendations',
      icon: 'heart-pulse'
    },
    {
      title: 'Policy Inquiries',
      description: 'Provide instant answers to employee questions about company policies and procedures',
      icon: 'question-circle'
    }
  ]

  // Advanced features for enhanced section
  const advancedFeatures = [
    {
      title: 'Sentiment Analysis',
      description: 'Monitor employee sentiment and detect potential issues before they escalate',
      icon: 'emoji-smile'
    },
    {
      title: 'Real-time Translation',
      description: 'Support global workforce with instant translation of HR policies and responses',
      icon: 'translate'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Stay updated with changing regulations and ensure company-wide compliance',
      icon: 'shield-check'
    },
    {
      title: 'Personalized Employee Development',
      description: 'Recommend training and career development paths based on individual employee profiles',
      icon: 'graph-up-arrow'
    }
  ];

  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <PageTransition>
      <main className="hr-support-page">
        {/* Hero Section */}
        <section className="page-showcase-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="badge bg-warning text-white mb-3">Employee-Centric Solution</span>
                  <div className="d-flex"></div>
                  <h1 className="section-title mb-4">HR Support Solution</h1>
                  <p className="section-subtitle mb-4">
                    Transform your HR operations with our AI-powered HR support solution. Automate routine tasks, 
                    enhance employee experience, and free up your HR team to focus on strategic initiatives.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link href="/waitlist" className="btn btn-primary btn-lg">
                      Join Waitlist
                    </Link>
                    <Link href="/pricing" className="btn btn-outline-primary btn-lg">
                      View Pricing
                    </Link>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                >
                  <Image 
                    src="/illustrations/hr-support.svg" 
                    alt="HR Support Solution" 
                    width={500} 
                    height={400} 
                    className="img-fluid hero-image" 
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-5">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title">Benefits of AI-Powered HR Support</h2>
              <p className="section-subtitle"><i className="bi bi-stars"></i> Elevate your HR operations</p>
            </div>
            
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <Col key={index} md={6} lg={4}>
                  <div className="h-100">
                    <Card className="border-0 shadow-sm h-100">
                      <CardBody className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="feature-icon me-3">
                            <i className={`bi bi-${benefit.icon} fs-2 text-primary`}></i>
                          </div>
                          <h3 className="h5 mb-0">{benefit.title}</h3>
                        </div>
                        <p className="mb-0">{benefit.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              ))}
            </div>
          </Container>
        </section>

        {/* Use Cases Section */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Common HR Use Cases</h2>
              <p className="section-subtitle">Transform everyday HR processes with intelligent automation</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {useCases.map((useCase, index) => (
                <Col key={index} md={6}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="h-100"
                  >
                    <Card className="h-100 border-0 shadow-sm">
                      <CardBody className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                            <i className={`bi bi-${useCase.icon} fs-4`}></i>
                          </div>
                          <h3 className="h5 mb-0">{useCase.title}</h3>
                        </div>
                        <p className="mb-0">{useCase.description}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">A simple four-step process to transform HR operations</p>
            </motion.div>
            
            <Row className="justify-content-center">
              <Col lg={10}>
                <motion.div
                  className="row g-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-1-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Employee Inquiry</h3>
                      <p>Employee submits a question or request</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-2-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">AI Analysis</h3>
                      <p>Our AI analyzes the request and retrieves relevant information</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-3-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Resolution</h3>
                      <p>AI resolves the request or routes to appropriate HR staff</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-4-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Continuous Learning</h3>
                      <p>System learns from each interaction to improve future responses</p>
                    </motion.div>
                  </Col>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Key Features</h2>
              <p className="section-subtitle">Powerful tools to revolutionize your HR department</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <Col key={index} md={6}>
                  <motion.div 
                    variants={fadeUp}
                    className="h-100"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                      <CardBody className="p-4">
                        <Row className="align-items-center">
                          <Col md={5} className="text-center mb-3 mb-md-0">
                            <motion.div
                              animate={{ 
                                scale: hoveredCard === index ? 1.05 : 1,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <Image 
                                src={feature.image} 
                                alt={feature.title} 
                                width={140} 
                                height={140} 
                                className="img-fluid" 
                              />
                            </motion.div>
                          </Col>
                          <Col md={7}>
                            <h3 className="h5 mb-3">{feature.title}</h3>
                            <p className="mb-0">{feature.description}</p>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Template Customization Section - NEW */}
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Customizable Templates</h2>
              <p className="section-subtitle">Tailor your HR agent to your organization's culture and policies</p>
            </motion.div>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <h3 className="h4 mb-3">HR-Specific Templates</h3>
                    <p>
                      Get started quickly with pre-built templates for common HR tasks, including onboarding, 
                      benefits explanation, policy guidance, and performance review preparation.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="h4 mb-3">Customizable Prompt Library</h3>
                    <p>
                      Customize how your AI agent responds to different HR scenarios by creating and updating prompt templates. 
                      Align the agent's language and approach with your company's unique voice and values.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="h4 mb-3">Policy-Aware Responses</h3>
                    <p>
                      The HR agent stays up-to-date with your latest policies and procedures, 
                      ensuring consistent and accurate responses to employee inquiries.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Image 
                    src="/illustrations/knowledge-base.svg" 
                    alt="Customizable Templates" 
                    width={400} 
                    height={300} 
                    className="img-fluid" 
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Advanced Features Section - NEW (replacing integrations) */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Advanced HR Capabilities</h2>
              <p className="section-subtitle">Next-generation features for the modern HR department</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {advancedFeatures.map((feature, index) => (
                <Col key={index} md={6} lg={3}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="h-100"
                  >
                    <Card className="border-0 shadow-sm h-100 text-center">
                      <CardBody className="p-4">
                        <div className="mb-3">
                          <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                            <i className={`bi bi-${feature.icon} fs-1 text-primary`}></i>
                          </div>
                          <h3 className="h5 mb-3">{feature.title}</h3>
                          <p className="mb-0">{feature.description}</p>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-5">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="py-5 px-4 bg-primary text-white rounded-4">
                <h2 className="h1 mb-3">Ready to Transform Your HR Department?</h2>
                <p className="lead mb-4">Get started with our AI-powered HR Support Solution today.</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/waitlist" className="btn btn-warning btn-lg">
                    <i className="bi bi-envelope-check me-2"></i>
                    Join the Waiting List
                  </Link>
                  <Link href="/support" className="btn btn-light btn-lg">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
    </PageTransition>
  );
} 