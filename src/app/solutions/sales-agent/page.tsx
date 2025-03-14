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

export default function SalesAgentPage() {
  const benefits = [
    {
      title: 'Increased Conversion Rates',
      description: 'Convert more leads into customers with personalized, data-driven sales approaches',
      icon: 'graph-up-arrow'
    },
    {
      title: 'Automated Lead Qualification',
      description: 'Automatically qualify leads based on behavior and engagement patterns',
      icon: 'funnel'
    },
    {
      title: 'Personalized Interactions',
      description: 'Deliver tailored sales pitches based on customer preferences and history',
      icon: 'person-check'
    },
    {
      title: 'Consistent Follow-ups',
      description: 'Never miss a follow-up opportunity with timely outreach',
      icon: 'calendar-check'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into customer behavior and sales performance',
      icon: 'bar-chart'
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

  // Platform integrations from landing page
  const integrations = [
    { name: 'Zapier', icon: 'bi-lightning', color: '#FF4A00' },
    { name: 'Make.com', icon: 'bi-gear-wide-connected', color: '#5A4CEE' },
    { name: 'Shopify', icon: 'bi-bag', color: '#7AB55C' },
    { name: 'WordPress', icon: 'bi-wordpress', color: '#21759B' },
    { name: 'WooCommerce', icon: 'bi-cart3', color: '#96588A' },
    { name: 'Trendyol', icon: 'bi-shop', color: '#FF6000' }
  ];
  
  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <PageTransition>
      <main className="sales-agent-page">
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
                  <span className="badge bg-warning text-white mb-3">Featured Solution</span>
                  <div className="d-flex"></div>
                  <h1 className="section-title mb-4">Sales Agent Solution</h1>
                  <p className="section-subtitle mb-4">
                    Boost your sales performance with our AI-powered sales agent solution. Automate lead qualification, 
                    personalize customer interactions, and increase conversion rates.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link href="/waitlist" className="btn btn-primary btn-lg">
                      Join Waitlist
                    </Link>
                    {/* <Link href="/pricing" className="btn btn-outline-primary btn-lg">
                      View Pricing
                    </Link> */}
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
                    src="/illustrations/sales-agent.svg" 
                    alt="Sales Agent Solution" 
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
              <h2 className="section-title">Benefits of AI-Powered Sales Agents</h2>
              <p className="section-subtitle">Transform your sales process with intelligent automation</p>
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
              <p className="section-subtitle">A simple four-step process to transform your sales operations</p>
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
                      <h3 className="h5">Lead Capture</h3>
                      <p>Capture and qualify leads across multiple channels</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-2-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Personalized Engagement</h3>
                      <p>Engage leads with personalized, timely communications</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-3-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Nurture & Convert</h3>
                      <p>Nurture leads through the sales funnel with targeted content</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-4-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Analyze & Optimize</h3>
                      <p>Continuously analyze performance and optimize strategies</p>
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
              <p className="section-subtitle">Powerful tools to supercharge your sales process</p>
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
              <h2 className="section-title">Customizable Templates</h2>
              <p className="section-subtitle">Tailor your AI sales agent to match your exact business needs</p>
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
                    <h3 className="h4 mb-3">Choose from Ready-to-Use Templates</h3>
                    <p>
                      Get started quickly with industry-specific templates designed to address common sales scenarios 
                      and customer interactions. Our library of templates covers everything from initial outreach to 
                      closing deals.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="h4 mb-3">Create Custom Prompt Templates</h3>
                    <p>
                      Fine-tune your AI agent's responses by creating and updating custom prompt templates. 
                      Align the sales approach with your brand voice, product positioning, and target audience to ensure 
                      consistent and effective customer interactions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="h4 mb-3">Dynamic Adaptation</h3>
                    <p>
                      Your AI sales agent continuously learns from interactions and adapts its approach based on 
                      what works best for your specific customers and products.
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

        {/* Integration Section */}
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Seamless Integrations</h2>
              <p className="section-subtitle">Connect your AI sales agent with your favorite tools and platforms</p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="logo-grid"
            >
              <Row className="justify-content-center">
                <Col lg={10}>
                  <div className="d-flex flex-wrap justify-content-center">
                    {integrations.map((integration, index) => (
                      <motion.div 
                        key={index} 
                        variants={fadeUp}
                        className="text-center m-3 position-relative"
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      >
                        <div 
                          className="integration-icon mb-2 d-flex align-items-center justify-content-center mx-auto"
                          style={{ 
                            backgroundColor: 'white', 
                            color: integration.color,
                            width: '60px',
                            height: '60px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            fontSize: '1.75rem'
                          }}
                        >
                          <i className={integration.icon}></i>
                        </div>
                        <div className="badge bg-warning position-absolute" style={{ top: 0, right: 0, fontSize: '0.6rem' }}>
                          Coming Soon
                        </div>
                        <span className="d-block mt-2">{integration.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </Col>
              </Row>
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
                <h2 className="h1 mb-3">Ready to Transform Your Sales Process?</h2>
                <p className="lead mb-4">Get started with our AI-powered Sales Agent Solution today.</p>
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