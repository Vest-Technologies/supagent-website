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

export default function OnboardingBuddyPage() {
  const benefits = [
    {
      title: 'Accelerated Onboarding',
      description: 'Reduce time-to-productivity for new hires with streamlined onboarding processes',
      icon: 'speedometer2'
    },
    {
      title: 'Consistent Experience',
      description: 'Ensure all new hires receive the same high-quality onboarding experience',
      icon: 'stars'
    },
    {
      title: 'Reduced HR Workload',
      description: 'Free up HR and manager time by automating routine onboarding tasks',
      icon: 'person-check'
    },
    {
      title: 'Improved Retention',
      description: 'Increase new hire retention with a smooth, engaging onboarding experience',
      icon: 'heart'
    },
    {
      title: 'Personalized Guidance',
      description: 'Provide tailored guidance based on role, department, and experience level',
      icon: 'person-gear'
    },
    {
      title: '24/7 Support',
      description: 'Offer round-the-clock assistance to new hires whenever they need help',
      icon: 'clock-history'
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
      icon: 'envelope-paper'
    },
    {
      day: 'Day 1',
      title: 'Orientation & Setup',
      description: 'Guide new hires through first-day activities, introductions, and system setup',
      icon: 'calendar-check'
    },
    {
      day: 'Week 1',
      title: 'Role & Team Integration',
      description: 'Facilitate team introductions, role-specific training, and initial projects',
      icon: 'people'
    },
    {
      day: 'Month 1',
      title: 'Deep Dive & Development',
      description: 'Provide comprehensive training, feedback sessions, and development planning',
      icon: 'graph-up'
    }
  ]

  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredTimelineCard, setHoveredTimelineCard] = useState<number | null>(null);

  return (
    <PageTransition>
      <main className="onboarding-buddy-page">
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
                  <span className="badge bg-warning text-white mb-3">Employee Experience</span>
                  <div className="d-flex"></div>
                  <h1 className="section-title mb-4">Onboarding Buddy Solution</h1>
                  <p className="section-subtitle mb-4">
                    Transform your employee onboarding with our AI-powered Onboarding Buddy. Streamline the process, 
                    enhance the new hire experience, and accelerate time-to-productivity.
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
                    src="/illustrations/onboarding.svg" 
                    alt="Onboarding Buddy Solution" 
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
              <h2 className="section-title">Benefits of AI-Powered Onboarding</h2>
              <p className="section-subtitle"><i className="bi bi-stars"></i> Create exceptional first impressions</p>
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

        {/* Timeline Section */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Onboarding Journey</h2>
              <p className="section-subtitle">Guide new hires through every step of their onboarding experience</p>
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
                  {timeline.map((phase, index) => (
                    <Col key={index} md={6} lg={3}>
                      <motion.div 
                        variants={fadeUp}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        onMouseEnter={() => setHoveredTimelineCard(index)}
                        onMouseLeave={() => setHoveredTimelineCard(null)}
                        className="h-100"
                      >
                        <Card className="h-100 border-0 shadow-sm">
                          <CardBody className="p-4 text-center">
                            <motion.div 
                              animate={{ 
                                scale: hoveredTimelineCard === index ? 1.05 : 1,
                                transition: { duration: 0.3 }
                              }}
                              className="mb-3"
                            >
                              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                                <i className={`bi bi-${phase.icon} fs-3`}></i>
                              </div>
                            </motion.div>
                            <div className="badge bg-warning text-white mb-2">{phase.day}</div>
                            <h3 className="h5 mb-3">{phase.title}</h3>
                            <p className="mb-0">{phase.description}</p>
                          </CardBody>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
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
              <p className="section-subtitle">Powerful tools to streamline and enhance your onboarding process</p>
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
              <h2 className="section-title">Customizable Onboarding Templates</h2>
              <p className="section-subtitle">Tailor your onboarding experience to match your company culture and job roles</p>
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
                    <h3 className="h4 mb-3">Role-Specific Templates</h3>
                    <p>
                      Fast-track your implementation with ready-to-use templates for different roles and departments, 
                      including sales, engineering, marketing, customer support, and more. Each template includes
                      recommended training paths, resources, and milestones.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="h4 mb-3">Customizable Responses</h3>
                    <p>
                      Configure how your AI onboarding buddy responds to common new hire questions. 
                      Customize the tone, level of detail, and recommended resources to align with
                      your company's communication style and values.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="h4 mb-3">Culture-Aligned Interactions</h3>
                    <p>
                      Ensure your AI onboarding buddy reflects your company culture and values in every interaction, 
                      creating a consistent and authentic experience for new hires from day one.
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
                    src="/illustrations/training-modules.svg" 
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
                <h2 className="h1 mb-3">Ready to Transform Your Onboarding Process?</h2>
                <p className="lead mb-4">Get started with our AI-powered Onboarding Buddy Solution today.</p>
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