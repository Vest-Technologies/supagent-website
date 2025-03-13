'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from '@/components/BootstrapClient';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import styles from './channels.module.css';

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

const channels = [
  {
    title: 'Web',
    description: 'Integrate AI agents directly into your website for seamless customer support',
    path: '/product/channels/web',
    icon: 'globe',
    emoji: '🌐',
    comingSoon: false
  },
  {
    title: 'WhatsApp',
    description: 'Connect with customers on the world\'s most popular messaging platform',
    path: '/product/channels/whatsapp',
    icon: 'whatsapp',
    emoji: '📱',
    comingSoon: true
  },
  {
    title: 'Instagram',
    description: 'Provide support through Instagram\'s messaging features',
    path: '/product/channels/instagram',
    icon: 'instagram',
    emoji: '📸',
    comingSoon: true
  },
  {
    title: 'Messenger',
    description: 'Engage with your Facebook audience through Messenger',
    path: '/product/channels/messenger',
    icon: 'messenger',
    emoji: '💬',
    comingSoon: true
  },
  {
    title: 'Slack',
    description: 'Streamline internal communications with AI-powered Slack integration',
    path: '/product/channels/slack',
    icon: 'slack',
    emoji: '🔄',
    comingSoon: true
  }
];

// Custom styles for mobile tabs
const customStyles: Record<string, React.CSSProperties> = {
  scrollContainer: {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px 0 15px',
    margin: '0 -15px',
    paddingLeft: '15px',
    paddingRight: '15px',
    WebkitOverflowScrolling: 'touch',
    msOverflowStyle: 'none',
    scrollbarWidth: 'none'
  } as React.CSSProperties,
  mobileTab: {
    minWidth: '140px',
    padding: '12px 15px',
    margin: '0 8px 0 0',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    border: '1px solid #e9ecef',
    transition: 'all 0.3s ease',
    gap: '8px',
    position: 'relative',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  } as React.CSSProperties,
  mobileTabActive: {
    backgroundColor: '#1e95e0',
    color: 'white',
    border: '1px solid #1e95e0',
    boxShadow: '0 4px 12px rgba(30,149,224,0.15)'
  }
};

// Add styles to hide scrollbars in the container
const scrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function ChannelsPage() {
  const [activeChannel, setActiveChannel] = useState('Web');

  const getActiveChannel = () => {
    return channels.find(channel => channel.title === activeChannel) || channels[0];
  };

  return (
    <PageTransition>
      <style>{scrollbarStyles}</style>
      <div className="channels-page">
        <section className="page-showcase-section py-5">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">Integration Channels</h1>
              <p className="section-subtitle text-muted">
                Deploy your AI agents across multiple platforms to provide consistent support everywhere your customers are
              </p>
            </motion.div>

            {/* Mobile Tabs - Horizontal scrolling buttons for small screens */}
            <div className="d-md-none page-tabs-mobile mb-4">
              <div style={customStyles.scrollContainer} className="hide-scrollbar">
                {channels.map((channel) => (
                  <motion.button
                    key={channel.title}
                    style={{
                      ...customStyles.mobileTab,
                      ...(activeChannel === channel.title ? customStyles.mobileTabActive : {})
                    }}
                    onClick={() => setActiveChannel(channel.title)}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`bi bi-${channel.icon} ${activeChannel === channel.title ? 'fs-4' : 'fs-5'}`}></i>
                    <span className="fw-medium">{channel.title}</span>
                    {channel.comingSoon && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white" style={{ fontSize: '0.6rem', transform: 'translate(-50%, -50%)' }}>
                        Soon
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            <Row className="align-items-center">
              {/* Desktop sidebar - Hidden on mobile */}
              <Col lg={4} className="d-none d-md-block">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="nav flex-column feature-nav" role="tablist">
                    {channels.map((channel) => (
                      <motion.button
                        key={channel.title}
                        className={`nav-link text-start my-2 ${activeChannel === channel.title ? 'active' : ''}`}
                        onClick={() => setActiveChannel(channel.title)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="feature-icon me-3">
                            <i className={`bi bi-${channel.icon}`}></i>
                          </div>
                          <div>
                            <h5 className="mb-0">
                              {channel.title}
                              {channel.comingSoon && (
                                <span className="ms-2 badge bg-warning text-white" style={{ fontSize: '0.7rem' }}>
                                  Coming Soon
                                </span>
                              )}
                            </h5>
                            <small>{channel.description}</small>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </Col>
              
              <Col lg={8}>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="showcase-content">
                    <div className="screenshot-container">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeChannel}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-center"
                        >
                          <Link href={getActiveChannel().path} className="text-decoration-none">
                            <Card className="border-0 shadow-lg hover-lift overflow-hidden">
                              <div className="p-5 bg-light text-center">
                                <div className="display-1 mb-3 text-primary">
                                  <i className={`bi bi-${getActiveChannel().icon}`}></i>
                                </div>
                                <h2 className="h3 mb-4">
                                  {getActiveChannel().title} Integration
                                  {getActiveChannel().comingSoon && (
                                    <span className="ms-2 badge bg-warning text-white">Coming Soon</span>
                                  )}
                                </h2>
                                <p className="lead mb-0">
                                  {getActiveChannel().description}
                                </p>
                              </div>
                              <div className="bg-primary text-white p-3 text-center">
                                <span className="fw-medium">Explore {getActiveChannel().title} Integration</span>
                                <i className="bi bi-arrow-right-circle ms-2"></i>
                              </div>
                            </Card>
                          </Link>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-3">Available Integrations</h2>
              <p className="lead text-muted">
                Choose the channels that best fit your business needs
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Row className="g-4">
                {channels.map((channel, index) => (
                  <Col key={channel.title} md={6} lg={4}>
                    <motion.div variants={fadeUp} custom={index}>
                      <Link href={channel.path} className="text-decoration-none">
                        <Card className="h-100 border-0 shadow-sm hover-lift">
                          <CardBody className="d-flex flex-column">
                            <div className={`${styles['feature-icon']} align-self-center p-3 rounded-circle mb-3 bg-light`} style={{ fontSize: '2rem' }}>
                              <i className={`bi bi-${channel.icon}`}></i>
                            </div>
                            <CardTitle className="text-center h4 mb-3">
                              {channel.title}
                              {channel.comingSoon && (
                                <div className="mt-2">
                                  <span className="badge bg-warning text-white">Coming Soon</span>
                                </div>
                              )}
                            </CardTitle>
                            <CardText className="text-muted text-center mb-4">{channel.description}</CardText>
                            <div className="mt-auto text-center">
                              <span className="btn btn-sm btn-outline-primary">
                                Learn More <i className="bi bi-arrow-right ms-1"></i>
                              </span>
                            </div>
                          </CardBody>
                        </Card>
                      </Link>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        <section className="py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="h2 mb-4">Omnichannel Support</h2>
                  <p className="lead mb-4">
                    Our platform enables true omnichannel support, allowing your AI agents to provide consistent experiences across all touchpoints.
                  </p>
                  
                  <div className="bg-light p-4 rounded-3 border border-1">
                    <h4 className="h5 mb-3">Key Benefits</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span><strong>Maintain context</strong> across different channels</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span><strong>Provide consistent responses</strong> regardless of platform</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span><strong>Transfer conversations</strong> between channels when needed</span>
                      </li>
                      <li className="d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span><strong>Collect unified analytics</strong> across all touchpoints</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                  className="position-relative"
                >
                  <div className="position-relative">
                    <div className={styles['integration-diagram']} style={{ height: '350px' }}>
                      <div className={styles['central-hub']}>
                        <span className={styles['hub-icon']}>🤖</span>
                        <span className={styles['hub-text']}>AI Agent</span>
                      </div>
                      <div className={styles['connection-lines']}></div>
                      <div className={styles['channel-bubbles']}>
                        {channels.map((channel, index) => (
                          <motion.div
                            key={index}
                            className={styles['channel-bubble']}
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 3,
                              delay: index * 0.5 
                            }}
                          >
                            <span className={styles['bubble-icon']}>{channel.emoji}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                  <h2 className="mb-4">Ready to expand your reach?</h2>
                  <p className="lead mb-4">
                    Explore our channel integrations to learn how you can deploy AI agents where they'll have the most impact.
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <Link href="/product/channels/web" className="btn btn-light btn-lg">
                      Start with Web Integration
                    </Link>
                    <Link href="/support" className="btn btn-outline-light btn-lg">
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