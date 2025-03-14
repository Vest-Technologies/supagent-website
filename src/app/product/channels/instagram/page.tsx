'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import styles from '../channels.module.css';

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

export default function InstagramChannelPage() {
  const features = [
    'Instagram DM automation with AI responses',
    'Comment monitoring and engagement',
    'Visual content analysis and responses',
    'Seamless handoff to human agents when needed (coming soon)',
    'Multilingual support for global audiences',
    'Detailed analytics and conversation insights'
  ];

  const integrationSteps = [
    {
      title: 'Connect Instagram Business Account',
      description: 'Link your Instagram Business account to our platform.',
      icon: 'instagram'
    },
    {
      title: 'Configure Your Agent',
      description: 'Train your AI agent with your brand voice and product knowledge.',
      icon: 'robot'
    },
    {
      title: 'Set Response Parameters',
      description: 'Define when and how your agent should respond to messages and comments.',
      icon: 'sliders'
    },
    {
      title: 'Test and Validate',
      description: 'Ensure your agent responds correctly to various inquiries.',
      icon: 'check-circle'
    },
    {
      title: 'Launch and Monitor',
      description: 'Go live with your Instagram AI agent and track performance.',
      icon: 'graph-up'
    }
  ];

  const businessBenefits = [
    {
      title: 'Enhanced Customer Experience',
      description: 'Provide immediate responses to customer inquiries, improving satisfaction and engagement.',
      icon: 'emoji-smile-fill'
    },
    {
      title: 'Increased Efficiency',
      description: 'Automate routine interactions, allowing your team to focus on high-value activities.',
      icon: 'speedometer2'
    },
    {
      title: 'Consistent Brand Voice',
      description: 'Maintain a consistent brand voice across all Instagram interactions, strengthening your brand identity.',
      icon: 'chat-square-quote-fill'
    }
  ];

  const instagramFeatures = [
    {
      title: 'Direct Messages',
      description: 'Automatically respond to customer inquiries through Instagram DMs with personalized, AI-generated responses.',
      icon: 'chat-dots-fill'
    },
    {
      title: 'Comments',
      description: 'Monitor and respond to comments on your posts, engaging with your audience and addressing questions.',
      icon: 'chat-square-text-fill'
    },
    {
      title: 'Analytics',
      description: 'Track engagement metrics, response times, and customer satisfaction to continuously improve your strategy.',
      icon: 'bar-chart-fill'
    }
  ];

  return (
    <PageTransition>
      <div className="instagram-channel-page">
        <section className="page-showcase-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h1 className="section-title mb-3">
                    Instagram Integration
                    <span className="ms-2 fs-6 align-middle badge bg-warning text-white" style={{ WebkitTextFillColor: 'white' }}>Coming Soon</span>
                  </h1>
                  <p className="section-subtitle text-muted mb-4">
                    Engage with your audience on Instagram through AI-powered messaging and comment management
                  </p>
                  <motion.div
                    className="d-flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <Link href="#integration-steps" className="btn btn-primary">
                      <i className="bi bi-arrow-right-circle me-2"></i>
                      How to Integrate
                    </Link>
                    <Link href="/support" className="btn btn-outline-secondary">
                      <i className="bi bi-envelope me-2"></i>
                      Request Demo
                    </Link>
                  </motion.div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                >
                  <div className="position-relative p-4">
                    <div className="bg-light rounded-4 p-4 shadow-sm">
                      <div className="display-1 text-primary mb-3" style={{ color: '#C13584' }}>
                        <i className={`bi bi-instagram`}></i>
                      </div>
                      <h2 className="h4 mb-3">
                        Instagram Business
                        <span className="ms-2 badge bg-warning text-white" style={{ fontSize: '0.7rem' }}>Coming Soon</span>
                      </h2>
                      <p className="mb-0 text-muted">Connect AI support to your Instagram presence</p>
                    </div>
                    <motion.div
                      className="position-absolute top-0 end-0"
                      style={{ marginTop: '-10px', marginRight: '-10px' }}
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <div className="bg-primary text-white rounded-circle p-2 shadow">
                        <i className="bi bi-stars fs-4"></i>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <div className="text-center mb-5">
              <h2 className="h2 mb-3">Connect With Your Visual Audience</h2>
              <p className="lead text-muted">
                Leverage Instagram's visual platform to engage with customers and convert followers into loyal customers
              </p>
            </div>

            <Row className="g-4 align-items-center">
              <Col lg={6}>
                <div className="bg-white p-4 rounded-4 shadow-sm">
                  <h3 className="h4 mb-4">Key Features</h3>
                  <ul className="list-unstyled mb-0">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="mb-3 d-flex align-items-baseline"
                      >
                        <i className="bi bi-check-circle-fill text-success fs-5 me-3"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div className="rounded-4 overflow-hidden shadow text-center">
                  <div className="channel-image-container instagram-channel">
                    <div className="spotlight"></div>
                    <div className="floating-icon icon-1">
                      <i className="bi bi-instagram"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="bi bi-camera"></i>
                    </div>
                    <Image
                      src="/images/FrontView/Instagram.png"
                      alt="Instagram Integration Demo"
                      width={400}
                      height={200}
                      className="img-fluid rounded-3"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-3">Comprehensive Instagram Management</h2>
              <p className="lead text-muted">
                Our Instagram integration provides complete automation for messages and comments
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Row className="g-4">
                {instagramFeatures.map((feature, index) => (
                  <Col key={index} md={4}>
                    <motion.div variants={fadeUp} custom={index}>
                      <Card className="h-100 border-0 shadow-sm hover-lift">
                        <CardBody className="d-flex flex-column text-center">
                          <div className="mb-4 text-primary fs-1">
                            <i className={`bi bi-${feature.icon}`}></i>
                          </div>
                          <h3 className="h5 mb-3">{feature.title}</h3>
                          <p className="text-muted">{feature.description}</p>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        <section className="py-5 bg-light" id="integration-steps">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-5 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="h2 mb-4">Integration Process</h2>
                  <p className="lead mb-4">
                    Follow these simple steps to integrate our AI agent with Instagram
                  </p>

                  <div className="integration-timeline">
                    {integrationSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="d-flex mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="me-3">
                          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '50px', height: '50px' }}>
                            <i className={`bi bi-${step.icon}`}></i>
                          </div>
                        </div>
                        <div>
                          <h3 className="h5 mb-2">{step.title}</h3>
                          <p className="text-muted mb-0">{step.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="border-0 shadow-lg h-100">
                    <CardBody className="p-4">
                      <h3 className="h4 mb-4">Instagram Business Benefits</h3>

                      {businessBenefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="mb-4 d-flex"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <div className="me-3 text-primary fs-4" style={{ color: '#C13584' }}>
                            <i className={`bi bi-${benefit.icon}`}></i>
                          </div>
                          <div>
                            <h4 className="h5 mb-2">{benefit.title}</h4>
                            <p className="text-muted mb-0">{benefit.description}</p>
                          </div>
                        </motion.div>
                      ))}

                      <div className="alert alert-primary mt-4 mb-0 d-flex align-items-center">
                        <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                        <span>We help you configure your Instagram Business account to maximize engagement.</span>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="text-white py-5" style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-4">Ready to Enhance Your Instagram Presence?</h2>
                  <p className="lead mb-4">Start providing instant, AI-powered support to your Instagram audience today.</p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Link href="/signup" className="btn btn-light btn-lg">
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      Get Started
                    </Link>
                    <Link href="/support" className="btn btn-outline-light btn-lg">
                      <i className="bi bi-headset me-2"></i>
                      Contact Sales
                    </Link>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
} 