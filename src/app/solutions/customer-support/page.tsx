'use client';

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
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

export default function CustomerSupportPage() {
  const benefits = [
    {
      title: '24/7 Availability',
      description: 'Provide round-the-clock support to your customers without increasing staffing costs',
      icon: 'clock'
    },
    {
      title: 'Instant Responses',
      description: 'Eliminate wait times with immediate responses to customer inquiries',
      icon: 'lightning-charge'
    },
    {
      title: 'Consistent Quality',
      description: 'Deliver consistent support quality across all customer interactions',
      icon: 'award'
    },
    {
      title: 'Multilingual Support',
      description: 'Support customers in multiple languages without additional resources',
      icon: 'translate'
    },
    {
      title: 'Reduced Costs',
      description: 'Lower support costs while maintaining or improving service quality',
      icon: 'piggy-bank'
    },
    {
      title: 'Scalable Solution',
      description: 'Easily scale your support operations during peak periods without hiring',
      icon: 'graph-up'
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
  
  // Customer support stats for modern section
  const supportStats = [
    {
      value: '65%',
      label: 'Cost Reduction',
      description: 'Average reduction in support costs for businesses using AI automation'
    },
    {
      value: '24/7',
      label: 'Availability',
      description: 'Round-the-clock support without additional staffing costs'
    },
    {
      value: '90%',
      label: 'Resolution Rate',
      description: 'First-contact resolution rate for common customer inquiries'
    },
    {
      value: '5 sec',
      label: 'Response Time',
      description: 'Average response time compared to industry standard of 24+ hours'
    }
  ];

  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <PageTransition>
      <main className="customer-support-page">
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
                  <span className="badge bg-warning text-white mb-3">Customer Experience</span>
                  <div className="d-flex"></div>
                  <h1 className="section-title mb-4">Customer Support Solution</h1>
                  <p className="section-subtitle mb-4">
                    Transform your customer support with our AI-powered solution. Reduce response times, 
                    improve satisfaction, and lower costs while providing 24/7 support.
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
                    src="/illustrations/customer-support.svg" 
                    alt="Customer Support Solution" 
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
              <h2 className="section-title">Benefits of AI-Powered Customer Support</h2>
              <p className="section-subtitle"><i className="bi bi-stars"></i> Enhance your customer experience</p>
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

        {/* How It Works Section */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">A simple four-step process to transform customer support</p>
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
                      <h3 className="h5">Customer Inquiry</h3>
                      <p>Customer submits a question or request</p>
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
                      <h3 className="h5">Response Generation</h3>
                      <p>AI generates a personalized, accurate response</p>
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
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Key Features</h2>
              <p className="section-subtitle">Powerful tools to transform your customer support</p>
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
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Customizable Support Templates</h2>
              <p className="section-subtitle">Tailor your AI support agent to match your brand voice and customer needs</p>
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
                    <h3 className="h4 mb-3">Industry-Specific Templates</h3>
                    <p>
                      Get started quickly with pre-built templates designed for your industry, including 
                      retail, SaaS, financial services, travel, and more. Each template comes with optimized 
                      responses for common customer inquiries in your field.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="h4 mb-3">Brand Voice Customization</h3>
                    <p>
                      Customize your AI support agent's communication style to match your brand voice. 
                      Whether your brand is friendly and casual or professional and formal, your AI agent 
                      will communicate consistently with your brand guidelines.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="h4 mb-3">Custom Response Templates</h3>
                    <p>
                      Create custom prompt templates for specific support scenarios, product lines, 
                      or customer segments. Ensure your AI support agent provides the most relevant 
                      and effective responses for every situation.
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
                    src="/illustrations/sentiment.svg" 
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

        {/* Stats Section (replacing case study) */}
        <section className="py-5">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-5"
            >
              <h2 className="section-title">Transform Your Support Operations</h2>
              <p className="section-subtitle">Industry-leading results that drive business growth</p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4 justify-content-center">
                {supportStats.map((stat, index) => (
                  <Col key={index} md={6} lg={3}>
                    <motion.div
                      variants={fadeUp}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <Card className="h-100 border-0 shadow-sm text-center">
                        <CardBody className="p-4">
                          <div className="display-4 fw-bold text-primary mb-2">{stat.value}</div>
                          <h3 className="h5 mb-3">{stat.label}</h3>
                          <p className="mb-0 text-muted">{stat.description}</p>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="py-5 px-4 bg-primary text-white rounded-4">
                <h2 className="h1 mb-3">Ready to Transform Your Customer Support?</h2>
                <p className="lead mb-4">Get started with our AI-powered Customer Support Solution today.</p>
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
  )
} 