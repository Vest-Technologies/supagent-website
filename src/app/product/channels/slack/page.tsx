'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import styles from '../channels.module.css';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

export default function SlackChannelPage() {
  const features = [
    'Seamless Slack workspace integration',
    'Internal support automation for employees',
    'Knowledge base access through natural language',
    'Workflow automation and task management',
    'Cross-department coordination',
    'Detailed analytics and usage insights'
  ];

  const integrationSteps = [
    {
      title: 'Connect Your Slack Workspace',
      description: 'Authorize our app in your Slack workspace with just a few clicks.'
    },
    {
      title: 'Configure Your Agent',
      description: 'Train your AI agent with your internal knowledge base and processes.'
    },
    {
      title: 'Set Access Permissions',
      description: 'Define which teams and channels can interact with your agent.'
    },
    {
      title: 'Test and Validate',
      description: 'Ensure your agent responds correctly to various internal inquiries.'
    },
    {
      title: 'Launch and Monitor',
      description: 'Deploy your Slack AI agent and track usage and performance.'
    }
  ];

  return (
    <PageTransition>
      <div className="slack-channel-page">
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
                    Slack Integration
                    <span className="ms-2 fs-6 align-middle badge bg-warning text-white" style={{ WebkitTextFillColor: 'white' }}>Coming Soon</span>
                  </h1>
                  <p className="section-subtitle text-muted mb-4">
                    Streamline internal communications and support with AI-powered Slack integration
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
                        <i className={`bi bi-slack`}></i>
                      </div>
                      <h2 className="h4 mb-3">
                        Slack Workspace
                        <span className="ms-2 badge bg-warning text-white" style={{ fontSize: '0.7rem' }}>Coming Soon</span>
                      </h2>
                      <p className="mb-0 text-muted">Connect AI support to your Slack workspace</p>
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
              <h2 className="h2 mb-3">Enhance Internal Efficiency</h2>
              <p className="lead text-muted">
                Our Slack integration will bring powerful AI capabilities to streamline your internal communications
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
                  <div className="channel-image-container slack-channel">
                    <div className="spotlight"></div>
                    <div className="floating-icon icon-1">
                      <i className="bi bi-slack"></i>
                    </div>
                    <div className="floating-icon icon-2">
                      <i className="bi bi-chat-dots"></i>
                    </div>
                    <Image
                      src="/images/FrontView/Slack.png"
                      alt="Slack Integration Demo"
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
              <h2 className="h2 mb-3">Internal Support Use Cases</h2>
              <p className="lead text-muted">
                Discover how our Slack integration can transform your internal support processes
              </p>
            </motion.div>

            <Row className="g-4">
              <Col md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <Card className="h-100 border-0 shadow-sm hover-lift">
                    <CardBody className="p-4 text-center">
                      <div className="fs-1 mb-3 text-primary">📚</div>
                      <h3 className="h5 mb-3">Knowledge Access</h3>
                      <p className="text-muted mb-0">
                        Instantly access company policies, procedures, and documentation through natural language queries.
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Card className="h-100 border-0 shadow-sm hover-lift">
                    <CardBody className="p-4 text-center">
                      <div className="fs-1 mb-3 text-primary">🔧</div>
                      <h3 className="h5 mb-3">IT Support</h3>
                      <p className="text-muted mb-0">
                        Resolve common IT issues, reset passwords, and submit support tickets without leaving Slack.
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Card className="h-100 border-0 shadow-sm hover-lift">
                    <CardBody className="p-4 text-center">
                      <div className="fs-1 mb-3 text-primary">📅</div>
                      <h3 className="h5 mb-3">HR Assistance</h3>
                      <p className="text-muted mb-0">
                        Get answers about benefits, time off policies, and company events through simple conversations.
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              </Col>
            </Row>
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
                    Follow these simple steps to integrate our AI agent with Slack
                  </p>

                  <div className="integration-timeline">
                    {integrationSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        className="d-flex mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="me-3">
                          <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '50px', height: '50px' }}>
                            <span className="fw-bold">{index + 1}</span>
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
                      <h3 className="h4 mb-4">Slack Integration Benefits</h3>
                      <div className="mb-3">
                        <h4 className="h5 mb-2">Increased Productivity</h4>
                        <p className="text-muted mb-0">
                          Reduce time spent searching for information or waiting for support responses.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h4 className="h5 mb-2">Improved Employee Experience</h4>
                        <p className="text-muted mb-0">
                          Provide instant support and answers to employees, enhancing satisfaction and engagement.
                        </p>
                      </div>
                      <div>
                        <h4 className="h5 mb-2">Reduced Support Costs</h4>
                        <p className="text-muted mb-0">
                          Decrease the burden on internal support teams by automating routine inquiries and tasks.
                        </p>
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
                  <h2 className="mb-4">Ready to Transform Your Internal Support?</h2>
                  <p className="lead mb-4">Sign up to be notified when our Slack integration launches.</p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Link href="/signup" className="btn btn-light btn-lg">
                      <i className="bi bi-rocket-takeoff me-2"></i>
                      Get Started
                    </Link>
                    <Link href="/product/channels" className="btn btn-outline-light btn-lg">
                      <i className="bi bi-grid-3x3-gap me-2"></i>
                      Explore All Channels
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