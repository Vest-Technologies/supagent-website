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

export default function WebChannelPage() {
  const features = [
    'Seamless website integration with minimal code',
    'Customizable chat widget matching your brand',
    'Proactive engagement based on user behavior',
    'Multilingual support for global audiences',
    'Contextual responses based on page content',
    'Seamless handoff to human agents when needed (coming soon)'
  ];

  const integrationSteps = [
    {
      title: 'Create Your Agent',
      description: 'Design and train your AI agent with your knowledge base and brand voice.',
      icon: 'robot'
    },
    {
      title: 'Configure Your Widget',
      description: 'Customize the appearance and behavior of your chat widget to match your website.',
      icon: 'sliders'
    },
    {
      title: 'Add the Integration Code',
      description: 'Insert a simple JavaScript snippet into your website to activate the agent.',
      icon: 'code-slash'
    },
    {
      title: 'Test and Refine',
      description: 'Validate the integration and fine-tune your agent\'s responses.',
      icon: 'check-circle'
    },
    {
      title: 'Monitor Performance',
      description: 'Track engagement metrics and continuously improve your agent.',
      icon: 'graph-up'
    }
  ];

  return (
    <PageTransition>
      <div className="web-channel-page">
        <section className="page-showcase-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h1 className="section-title mb-3">Web Integration</h1>
                  <p className="section-subtitle text-muted mb-4">
                    Transform your website into an interactive support hub with our AI-powered web integration
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
                      <div className="display-1 text-primary mb-3">
                        <i className={`bi bi-globe`}></i>
                      </div>
                      <h2 className="h4 mb-3">Website Chat Widget</h2>
                      <p className="mb-0 text-muted">Deploy AI support directly on your website</p>
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
              <h2 className="h2 mb-3">Create the Ultimate Web Experience</h2>
              <p className="lead text-muted">
                Transform your website into a powerful platform for customer engagement and conversion
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

                  <div className="channel-image-container web-channel">
                    <div className="spotlight"></div>
                    <div className="floating-icon icon-1">
                      <i className="bi bi-globe"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="bi bi-chat-dots"></i>
                    </div>
                    <Image
                      src="/images/FrontView/Dribbble.png"
                      alt="Web Integration Demo"
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
              <h2 className="h2 mb-3">How It Works</h2>
              <p className="lead text-muted">
                Our lightweight JavaScript widget connects to our secure cloud infrastructure
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-light p-4 p-lg-5 rounded-4">
                <Row className="justify-content-center text-center">
                  <Col xs={6} sm={4} md={2} className="mb-4 mb-md-0">
                    <motion.div variants={fadeUp} className="step-item">
                      <div className="fs-1 text-primary mb-2">👤</div>
                      <h4 className="h6 mb-1">User</h4>
                      <p className="text-muted small mb-0">Asks a question</p>
                    </motion.div>
                  </Col>
                  <Col xs={12} md="auto" className="d-none d-md-flex align-items-center mb-4 mb-md-0">
                    <motion.div
                      variants={fadeIn}
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <i className="bi bi-arrow-right fs-3 text-primary"></i>
                    </motion.div>
                  </Col>
                  <Col xs={6} sm={4} md={2} className="mb-4 mb-md-0">
                    <motion.div variants={fadeUp} className="step-item">
                      <div className="fs-1 text-primary mb-2">🔌</div>
                      <h4 className="h6 mb-1">Widget</h4>
                      <p className="text-muted small mb-0">Captures query</p>
                    </motion.div>
                  </Col>
                  <Col xs={12} md="auto" className="d-none d-md-flex align-items-center mb-4 mb-md-0">
                    <motion.div
                      variants={fadeIn}
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                    >
                      <i className="bi bi-arrow-right fs-3 text-primary"></i>
                    </motion.div>
                  </Col>
                  <Col xs={6} sm={4} md={2} className="mb-4 mb-md-0">
                    <motion.div variants={fadeUp} className="step-item">
                      <div className="fs-1 text-primary mb-2">🤖</div>
                      <h4 className="h6 mb-1">AI Agent</h4>
                      <p className="text-muted small mb-0">Processes request</p>
                    </motion.div>
                  </Col>
                  <Col xs={12} md="auto" className="d-none d-md-flex align-items-center mb-4 mb-md-0">
                    <motion.div
                      variants={fadeIn}
                      animate={{ x: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}
                    >
                      <i className="bi bi-arrow-right fs-3 text-primary"></i>
                    </motion.div>
                  </Col>
                  <Col xs={6} sm={4} md={2}>
                    <motion.div variants={fadeUp} className="step-item">
                      <div className="fs-1 text-primary mb-2">💬</div>
                      <h4 className="h6 mb-1">Response</h4>
                      <p className="text-muted small mb-0">Delivers answer</p>
                    </motion.div>
                  </Col>
                </Row>
              </div>
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
                    Follow these simple steps to integrate our AI agent with your website
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
                      <h3 className="h4 mb-4">Sample Integration Code</h3>
                      <div className="bg-dark text-light p-3 rounded">
                        <pre className="mb-0" style={{ overflow: 'auto' }}>
                          <code>
                            {`<script
  src="https://chatbot-content-public.s3.eu-north-1.amazonaws.com/general/supagent.umd.js?v=1.0.0"
  data-id="{agentId}"
  id="supagent-script"
  async defer>
</script>`}
                          </code>
                        </pre>
                      </div>
                      <div className="mt-4">
                        <div className="alert alert-info mb-0 d-flex align-items-center">
                          <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                          <span>Copy and paste this code snippet just before the closing <code>&lt;/body&gt;</code> tag of your website.</span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-primary text-white py-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-4">Ready to Transform Your Website?</h2>
                  <p className="lead mb-4">Start providing instant, AI-powered support to your website visitors today.</p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Link href="/signup" className="btn btn-light btn-lg">
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      Get Started
                    </Link>
                    <Link href="/product/channels/whatsapp" className="btn btn-outline-light btn-lg">
                      <i className="bi bi-whatsapp me-2"></i>
                      Explore WhatsApp Integration
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