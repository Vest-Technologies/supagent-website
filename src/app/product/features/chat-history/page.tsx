'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../features.module.css';

// Custom styles for the Chat History page
const customStyles: Record<string, CSSProperties> = {
  filterButton: {
    transition: 'all 0.3s ease',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#e9ecef',
    borderRadius: '8px',
    padding: '10px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#f8f9fa',
    cursor: 'pointer'
  },
  fixedHeightContainer: {
    position: 'relative',
    height: '420px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '2rem'
  },
  screenshotFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden'
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '15px 15px 50px'
  },
  screenshotInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '10px 15px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))',
    borderTop: '1px solid #e9ecef'
  },
  screenshotBadge: {
    display: 'inline-block',
    padding: '5px 10px',
    background: '#1e95e0',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 600
  },
  sliderThumb: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'white',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#1e95e0',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  }
};

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

// Filter options for the chat history
const filterOptions = [
  { id: 'country', name: 'Country', icon: 'globe2', options: ['United States', 'Germany', 'Turkey', 'France', 'United Kingdom'] },
  { id: 'city', name: 'City', icon: 'building', options: ['New York', 'Berlin', 'Istanbul', 'Paris', 'London'] },
  { id: 'time', name: 'Time Period', icon: 'calendar3', options: ['Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'Custom'] },
  { id: 'source', name: 'Source', icon: 'broadcast', options: ['Website', 'WhatsApp', 'Instagram', 'Messenger', 'Slack'] },
  { id: 'sort', name: 'Sort By', icon: 'sort-down-alt', options: ['Newest first', 'Oldest first'] }
];

// Chat history features
const historyFeatures = [
  {
    title: 'Comprehensive Filtering',
    description: 'Filter conversations by location, time period, channel source, and other custom parameters.',
    icon: 'funnel',
    illustration: '/illustrations/sales-analytics.svg'
  },
  {
    title: 'Sentiment Analysis',
    description: 'Track user satisfaction with visual indicators for liked and disliked messages.',
    icon: 'emoji-smile',
    illustration: '/illustrations/sentiment.svg'
  },
  {
    title: 'Export Capabilities',
    description: 'Export chat logs and analytics in multiple formats for reporting and analysis.',
    icon: 'file-earmark-arrow-down',
    illustration: '/illustrations/learning-analytics.svg'
  },
  {
    title: 'Conversation Timeline',
    description: 'View complete interaction history with timestamps and user context.',
    icon: 'clock-history',
    illustration: '/illustrations/progress-tracking.svg'
  }
];

export default function ChatHistoryPage() {
  const [activeFilter, setActiveFilter] = useState('time');
  
  return (
    <PageTransition>
      <div className="chat-history-page">
        <section className="page-showcase-section py-5">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">Chat History</h1>
              <p className="section-subtitle text-muted">
                Monitor, analyze, and export conversation data to improve your customer support experience
              </p>
            </motion.div>

            <div className="row align-items-center">
              <div className="col-lg-5 d-none d-lg-block">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="h3 mb-4">Conversation Insights</h2>
                  <p className="lead mb-4">
                    Access and analyze all conversations between your users and AI agents to gain valuable insights and continuously improve your support quality.
                  </p>
                  
                  <div className="bg-light p-4 rounded-3 border-1" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#dee2e6' }}>
                    <h4 className="h5 mb-3">Filter & Sort Options</h4>
                    <ul className="list-unstyled mb-0">
                      {filterOptions.map((filter) => (
                        <li key={filter.id} className="mb-2 d-flex align-items-baseline">
                          <i className={`bi bi-${filter.icon} text-primary me-2`}></i>
                          <span>{filter.name}: <span className="text-muted small">{filter.options.slice(0, 3).join(', ')}...</span></span>
                        </li>
                      ))}
                      <li className="mt-3 d-flex align-items-baseline">
                        <i className="bi bi-file-earmark-arrow-down text-success me-2"></i>
                        <span>Export chat data as CSV, PDF, or JSON</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              
              <div className="col-lg-7">
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="showcase-content"
                >
                  <div className="screenshot-container fixed-height-container" style={customStyles.fixedHeightContainer}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="screenshot-frame"
                      style={customStyles.screenshotFrame}
                    >
                      <div className="image-wrapper" style={customStyles.imageWrapper}>
                        <Image
                          src="/screenshots/ChatHistory/Chat-en.png"
                          alt="Chat History Interface"
                          fill
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="feature-image"
                          priority
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      
                      <div className="screenshot-info" style={customStyles.screenshotInfo}>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h4 className="mb-1 d-lg-none">Customer Conversations</h4>
                            <p className="text-muted mb-0 small">View and analyze complete chat history</p>
                          </div>
                          <div className="screenshot-badge" style={customStyles.screenshotBadge}>
                            <span>Chat History</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Mobile-only content */}
                  <div className="d-block d-lg-none mt-4">
                    <h2 className="h3 mb-3">Conversation Insights</h2>
                    <p className="mb-3">
                      Access and analyze all conversations between your users and AI agents to gain valuable insights.
                    </p>
                    
                    <div className="bg-light p-3 rounded-3" style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#dee2e6' }}>
                      <h4 className="h5 mb-2">Filter Options</h4>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        {filterOptions.slice(0, 3).map((filter) => (
                          <div key={filter.id} className="d-flex align-items-center">
                            <i className={`bi bi-${filter.icon} text-primary me-1`}></i>
                            <span className="small">{filter.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2">
                        <i className="bi bi-file-earmark-arrow-down text-success me-1"></i>
                        <span className="small">Export data</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-5"
            >
              <h3 className="h4 text-center mb-4">Filter & Analyze Conversations</h3>
              <Row className="g-4 justify-content-center">
                <Col lg={10}>
                  <Card className="shadow-sm" style={{ borderWidth: 0 }}>
                    <CardBody>
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {filterOptions.map((filter) => (
                          <motion.div
                            key={filter.id}
                            whileHover={{ y: -3, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                            whileTap={{ y: 0 }}
                            style={{
                              ...customStyles.filterButton,
                              ...(activeFilter === filter.id ? {
                                backgroundColor: '#1e95e0',
                                color: 'white',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: '#1e95e0'
                              } : {})
                            }}
                            onClick={() => setActiveFilter(filter.id)}
                          >
                            <i className={`bi bi-${filter.icon}`}></i>
                            <span>{filter.name}</span>
                          </motion.div>
                        ))}
                        <motion.div
                          whileHover={{ y: -3, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                          whileTap={{ y: 0 }}
                          style={{
                            ...customStyles.filterButton,
                            backgroundColor: '#ff8e03',
                            color: 'white',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            borderColor: '#ff8e03'
                          }}
                        >
                          <i className="bi bi-file-earmark-arrow-down"></i>
                          <span>Export</span>
                        </motion.div>
                      </div>
                      
                      <div className="filter-options mb-4">
                        <h5 className="h6 mb-3">
                          <i className={`bi bi-${filterOptions.find(f => f.id === activeFilter)?.icon} me-2`}></i>
                          {filterOptions.find(f => f.id === activeFilter)?.name} Options
                        </h5>
                        <div className="d-flex flex-wrap gap-2">
                          {filterOptions.find(f => f.id === activeFilter)?.options.map((option, idx) => (
                            <div 
                              key={idx} 
                              className={`badge ${idx === 0 ? 'bg-primary' : 'bg-light text-dark'} p-2`}
                              style={{ cursor: 'pointer' }}
                            >
                              {option}
                              {idx === 0 && <i className="bi bi-check-lg ms-1"></i>}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="summary-stats pt-3 border-top">
                        <div className="row g-3">
                          <div className="col-6 col-md-4">
                            <div className="stat-item">
                              <div className="small text-muted">Total Chats</div>
                              <div className="fw-bold fs-5">1,425</div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="stat-item">
                              <div className="small text-muted">Positive Feedback</div>
                              <div className="fw-bold fs-5">78%</div>
                            </div>
                          </div>
                          <div className="col-6 col-md-4">
                            <div className="stat-item">
                              <div className="small text-muted">Human Escalation (coming soon)</div>
                              <div className="fw-bold fs-5">12%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </motion.div>
          </Container>
        </section>
        
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-3">Key Features</h2>
              <p className="lead text-muted">
                Track, analyze and manage your customer conversations with powerful tools
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {historyFeatures.map((feature, index) => (
                  <Col key={index} md={6}>
                    <motion.div
                      variants={fadeUp}
                      className="h-100"
                      custom={index}
                    >
                      <Card className="h-100 shadow-sm" style={{ borderWidth: 0 }}>
                        <CardBody className="d-flex flex-column">
                          <div className="d-flex align-items-center mb-3">
                            <div className={`${styles['feature-icon']} fs-2 me-3`}>
                              <i className={`bi bi-${feature.icon}`}></i>
                            </div>
                            <h3 className="h4 mb-0">{feature.title}</h3>
                          </div>
                          <CardText className="text-muted mb-4">
                            {feature.description}
                          </CardText>
                          <div className="mt-auto text-center">
                            <Image 
                              src={feature.illustration}
                              alt={feature.title}
                              width={120}
                              height={120}
                              className="img-fluid"
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="h4 mb-4">User Sentiment Analysis</h3>
                  <p className="mb-4">
                    Easily identify messages that received positive or negative feedback from your users to understand what's working and what needs improvement.
                  </p>
                  
                  <div className="bg-white p-4 rounded-3 shadow-sm mb-4">
                    <div className="d-flex align-items-start mb-3">
                      <div className="bg-success-subtle p-2 rounded-circle me-3">
                        <i className="bi bi-hand-thumbs-up-fill text-success"></i>
                      </div>
                      <div>
                        <h5 className="h6 mb-1">Positive Feedback</h5>
                        <p className="text-muted small mb-0">
                          Track messages that users found helpful or accurate to identify your AI's strengths
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <div className="bg-danger-subtle p-2 rounded-circle me-3">
                        <i className="bi bi-hand-thumbs-down-fill text-danger"></i>
                      </div>
                      <div>
                        <h5 className="h6 mb-1">Negative Feedback</h5>
                        <p className="text-muted small mb-0">
                          Identify where your AI agent needs improvement to continuously enhance accuracy
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="h6 mb-3">Use sentiment data to:</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Improve AI training with feedback-driven data</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Identify common pain points in customer journeys</span>
                      </li>
                      <li className="d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Track sentiment trends over time to measure improvement</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className={styles.timeline}>
                    <div className={styles['timeline-item']}>
                      <div className={styles['timeline-marker']}></div>
                      <div className={styles['timeline-content']}>
                        <div className="d-flex justify-content-between mb-1">
                          <h5 className="mb-0">User Question</h5>
                          <span className="text-muted small">12:34 PM</span>
                        </div>
                        <p className="mb-0">How do I change my subscription plan?</p>
                      </div>
                    </div>
                    <div className={styles['timeline-item']}>
                      <div className={styles['timeline-marker']}></div>
                      <div className={styles['timeline-content']}>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h5 className="mb-0">AI Response</h5>
                          <div>
                            <i className="bi bi-hand-thumbs-up-fill text-success me-1"></i>
                            <span className="text-muted small">12:35 PM</span>
                          </div>
                        </div>
                        <p className="mb-0">You can change your subscription plan by going to Settings {'>'}; Subscription. There you'll find options to upgrade, downgrade, or cancel your current plan.</p>
                      </div>
                    </div>
                    <div className={styles['timeline-item']}>
                      <div className={styles['timeline-marker']}></div>
                      <div className={styles['timeline-content']}>
                        <div className="d-flex justify-content-between mb-1">
                          <h5 className="mb-0">User Question</h5>
                          <span className="text-muted small">12:36 PM</span>
                        </div>
                        <p className="mb-0">What happens if I downgrade in the middle of billing cycle?</p>
                      </div>
                    </div>
                    <div className={styles['timeline-item']}>
                      <div className={styles['timeline-marker']}></div>
                      <div className={styles['timeline-content']}>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h5 className="mb-0">AI Response</h5>
                          <div>
                            <i className="bi bi-hand-thumbs-down-fill text-danger me-1"></i>
                            <span className="text-muted small">12:37 PM</span>
                          </div>
                        </div>
                        <p className="mb-0">Your downgrade will take effect immediately and you'll lose access to premium features, but you'll still be charged for the current billing cycle.</p>
                        <div className="mt-2 p-2 bg-danger-subtle rounded-2">
                          <p className="small mb-0 text-danger"><i className="bi bi-info-circle me-1"></i> Identified issue: Incorrect billing information</p>
                        </div>
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
              <Col md={10} lg={8} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-4">Ready to Analyze Your Customer Conversations?</h2>
                  <p className="lead mb-4">
                    Gain valuable insights from your chat history to improve customer satisfaction and AI performance.
                  </p>
                  <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <motion.a 
                      href="/waitlist" 
                      className="btn btn-warning btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="bi bi-envelope-check me-2"></i>
                      Join the Waiting List
                    </motion.a>
                    <motion.a 
                      href="/support" 
                      className="btn btn-outline-light btn-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Sales
                    </motion.a>
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