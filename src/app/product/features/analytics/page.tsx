'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../features.module.css';

// Custom styles for the analytics page
const customStyles: Record<string, CSSProperties> = {
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
  },
  mobileTabActive: {
    backgroundColor: '#1e95e0',
    color: 'white',
    border: '1px solid #1e95e0',
    boxShadow: '0 4px 12px rgba(30,149,224,0.15)'
  },
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
  },
  metricsChart: {
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    padding: '15px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  statCard: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '20px', 
    height: '100%',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
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

  .stat-counter {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e95e0;
    line-height: 1;
    margin-bottom: 10px;
  }

  .stat-title {
    font-size: 0.9rem;
    color: #666;
    text-align: center;
  }

  .pulse-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #1e95e0;
    margin-right: 8px;
    position: relative;
  }

  .pulse-dot::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(30, 149, 224, 0.4);
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  .chart-bar {
    height: 36px;
    background-color: #1e95e0;
    border-radius: 4px;
    transition: width 1s ease-out;
  }

  .animate-number {
    animation: countUp 2s ease-out forwards;
  }

  @keyframes countUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

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

// Analytics tabs options
const analyticsOptions = [
  { 
    id: 'overview', 
    name: 'Dashboard Overview', 
    icon: 'speedometer2',
    description: 'Complete overview of your AI assistant performance',
    image: '/screenshots/Analytics/Main-en.png',
    features: [
      'Real-time performance metrics',
      'User engagement statistics',
      'Conversion rate tracking'
    ]
  },
  { 
    id: 'trends', 
    name: 'Engagement Trends', 
    icon: 'graph-up',
    description: 'Track how user engagement with your AI changes over time',
    image: '/screenshots/Analytics/Trend-en.png',
    features: [
      'Daily, weekly, and monthly trends',
      'Traffic patterns analysis',
      'Growth rate visualization'
    ]
  },
  { 
    id: 'demographics', 
    name: 'Geographic Distribution', 
    icon: 'globe',
    description: 'See where your users are located around the world',
    image: '/screenshots/Analytics/CountryDistribution-en.png',
    features: [
      'Country and region breakdown',
      'Language preference analysis',
      'Time zone distribution'
    ]
  },
  { 
    id: 'metrics', 
    name: 'Performance Metrics', 
    icon: 'bar-chart',
    description: 'Detailed metrics about your AI assistant performance',
    image: '/screenshots/Analytics/Metrics-en.png',
    features: [
      'Response time analytics',
      'User satisfaction scores',
      'Conversation completion rates'
    ]
  }
];

// Key metrics
const metricCategories = [
  {
    title: 'Engagement Metrics',
    metrics: [
      'User Retention Rate',
      'Session Duration',
      'Return Frequency',
      'Questions per Session'
    ]
  },
  {
    title: 'Conversation Metrics',
    metrics: [
      'Average Response Time',
      'Completion Rate',
      'User Satisfaction Score',
      'Escalation Rate'
    ]
  },
  {
    title: 'Performance Metrics',
    metrics: [
      'Knowledge Base Coverage',
      'Error Handling Success',
      'Conversation Flow Score',
      'Resolution Rate'
    ]
  }
];

// Quick stats
const quickStats = [
  { value: '87%', label: 'Resolution Rate', icon: 'check-circle', color: '#00d09c' },
  { value: '50K+', label: 'Daily Conversations', icon: 'chat-dots', color: '#1e95e0' },
  { value: '92%', label: 'User Satisfaction', icon: 'emoji-smile', color: '#ff8e03' },
  { value: '24/7', label: 'Availability', icon: 'clock-history', color: '#5eadf7' }
];

// Growth metrics
const growthMetrics = [
  { label: 'User Growth', value: '+67%', period: 'Last 30 days' },
  { label: 'Conversation Volume', value: '+83%', period: 'Last 30 days' },
  { label: 'Chat Completion Rate', value: '+12%', period: 'Last 30 days' },
  { label: 'Response Quality', value: '+24%', period: 'Last 30 days' }
];

// Source distribution
const sourceDistribution = [
  { source: 'Website', percentage: 42 },
  { source: 'WhatsApp', percentage: 27 },
  { source: 'Messenger', percentage: 18 },
  { source: 'Slack', percentage: 13 }
];

export default function AnalyticsPage() {
  const [activeOption, setActiveOption] = useState('overview');

  const getActiveOption = () => {
    return analyticsOptions.find(option => option.id === activeOption) || analyticsOptions[0];
  };

  return (
    <PageTransition>
      <style>{scrollbarStyles}</style>
      <div className="analytics-page">
        <section className="page-showcase-section py-5">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">Analytics & Insights</h1>
              <p className="section-subtitle text-muted">
                Make data-driven decisions with comprehensive analytics and real-time business intelligence
              </p>
            </motion.div>

            {/* Mobile Tabs - Horizontal scrolling buttons for small screens */}
            <div className="d-md-none page-tabs-mobile mb-4">
              <div style={customStyles.scrollContainer} className="hide-scrollbar">
                {analyticsOptions.map((option) => (
                  <motion.button
                    key={option.id}
                    style={{
                      ...customStyles.mobileTab,
                      ...(activeOption === option.id ? customStyles.mobileTabActive : {})
                    }}
                    onClick={() => setActiveOption(option.id)}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`bi bi-${option.icon} ${activeOption === option.id ? 'fs-4' : 'fs-5'}`}></i>
                    <span className="fw-medium">{option.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="row align-items-center">
              {/* Desktop sidebar - Hidden on mobile */}
              <div className="col-lg-4 d-none d-md-block">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="nav flex-column feature-nav" role="tablist">
                    {analyticsOptions.map((option) => (
                      <motion.button
                        key={option.id}
                        className={`nav-link text-start my-2 ${activeOption === option.id ? 'active' : ''}`}
                        onClick={() => setActiveOption(option.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="feature-icon me-3">
                            <i className={`bi bi-${option.icon}`}></i>
                          </div>
                          <div>
                            <h5 className="mb-0">{option.name}</h5>
                            <small>{option.description}</small>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="col-lg-8">
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="showcase-content">
                    <div className="screenshot-container fixed-height-container">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeOption}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="screenshot-frame"
                        >
                          <div className="image-wrapper">
                            <Image
                              src={getActiveOption().image}
                              alt={`${getActiveOption().name}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 800px"
                              className="feature-image"
                              style={{ objectFit: 'cover', objectPosition: 'left' }}
                              priority={activeOption === 'overview'}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="screenshot-info">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-md-none">
                            <h4 className="mb-1">{getActiveOption().name}</h4>
                            <p className="text-muted mb-0">{getActiveOption().description}</p>
                          </div>
                          <div className="screenshot-badge">
                            <span>Real-time Analytics</span>
                          </div>
                        </div>
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
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-3">Key Performance Insights</h2>
              <p className="lead text-muted">
                Track important metrics that help you understand and improve your AI assistant's performance
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4 mb-5">
                {quickStats.map((stat, index) => (
                  <Col key={index} md={6} lg={3}>
                    <motion.div
                      variants={fadeUp}
                      className="h-100"
                      custom={index}
                    >
                      <Card className="h-100 border-0 shadow-sm text-center hover-lift">
                        <CardBody>
                          <div className="mb-3">
                            <div 
                              className="d-inline-flex align-items-center justify-content-center rounded-circle p-3 mb-2"
                              style={{ backgroundColor: `${stat.color}20`}}
                            >
                              <i className={`bi bi-${stat.icon} fs-3`} style={{ color: stat.color }}></i>
                            </div>
                            <div className="stat-counter animate-number">{stat.value}</div>
                            <div className="stat-title">{stat.label}</div>
                          </div>
                        </CardBody>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            <motion.div
              className="mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Row className="g-4">
                <Col lg={6}>
                  <Card className="border-0 shadow-sm h-100">
                    <CardBody>
                      <h3 className="h5 mb-4">Chat Source Distribution</h3>
                      <Row className="g-4">
                        {sourceDistribution.map((source, index) => (
                          <Col key={index} xs={12}>
                            <div className="mb-3">
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <span>{source.source}</span>
                                <span className="text-primary fw-bold">{source.percentage}%</span>
                              </div>
                              <motion.div 
                                className="bg-light rounded-pill" 
                                style={{ height: '8px', width: '100%' }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                              >
                                <motion.div 
                                  className="bg-primary rounded-pill" 
                                  style={{ height: '100%' }}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${source.percentage}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: index * 0.2 }}
                                ></motion.div>
                              </motion.div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                      <div className="d-flex align-items-center mt-3">
                        <div className="pulse-dot"></div>
                        <span className="text-muted">Demo data for illustration purposes</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                
                <Col lg={6}>
                  <Card className="border-0 shadow-sm h-100">
                    <CardBody>
                      <h3 className="h5 mb-4">Growth Metrics</h3>
                      <Row className="g-3">
                        {growthMetrics.map((metric, index) => (
                          <Col key={index} xs={12} sm={6}>
                            <motion.div 
                              className="p-3 bg-light rounded-3"
                              whileHover={{ y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <p className="text-muted mb-1 small">{metric.label}</p>
                              <div className="d-flex justify-content-between align-items-end">
                                <h4 className="mb-0 text-success">{metric.value}</h4>
                                <span className="text-muted small">{metric.period}</span>
                              </div>
                            </motion.div>
                          </Col>
                        ))}
                      </Row>
                      <div className="d-flex align-items-center mt-3">
                        <div className="pulse-dot"></div>
                        <span className="text-muted">Demo data for illustration purposes</span>
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
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="h2 mb-4">Real-time Conversation Metrics</h2>
                  <p className="lead mb-4">
                    Monitor your chatbot's performance with detailed analytics on user interactions
                  </p>
                  
                  <div className={styles['metrics-grid']}>
                    {metricCategories.map((category, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="border-0 shadow-sm">
                          <CardBody>
                            <h4 className="h5 mb-3">{category.title}</h4>
                            <ul className="list-unstyled mb-0">
                              {category.metrics.map((metric, metricIndex) => (
                                <li key={metricIndex} className={styles['metric-item']}>
                                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                                  {metric}
                                </li>
                              ))}
                            </ul>
                          </CardBody>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <Image
                    src="/illustrations/learning-analytics.svg"
                    alt="Analytics Dashboard"
                    width={450}
                    height={350}
                    className="img-fluid"
                  />
                  <div className="position-relative d-inline-block">
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '-30%', right: '-10%' }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 3, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Image
                        src="/illustrations/sales-analytics.svg"
                        alt="Business Analytics"
                        width={180}
                        height={140}
                        className="img-fluid"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="h2 mb-4">Business Intelligence Benefits</h2>
                  <p className="lead mb-4">
                    Turn analytics into actionable insights that help improve your business
                  </p>
                  
                  <div className={styles['benefits-list']}>
                    <motion.div 
                      className={styles['benefit-item']}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={styles['benefit-icon']}>
                        <i className="bi bi-graph-up-arrow text-primary"></i>
                      </div>
                      <div className={styles['benefit-content']}>
                        <h5>Data-Driven Decisions</h5>
                        <p className="text-muted mb-0">Make informed decisions based on concrete data and trends.</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={styles['benefit-item']}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className={styles['benefit-icon']}>
                        <i className="bi bi-bullseye text-primary"></i>
                      </div>
                      <div className={styles['benefit-content']}>
                        <h5>Performance Optimization</h5>
                        <p className="text-muted mb-0">Identify and address areas for improvement in your AI support operations.</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={styles['benefit-item']}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className={styles['benefit-icon']}>
                        <i className="bi bi-lightbulb text-primary"></i>
                      </div>
                      <div className={styles['benefit-content']}>
                        <h5>Actionable Insights</h5>
                        <p className="text-muted mb-0">Convert data into actionable insights for business growth.</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className={styles['benefit-item']}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <div className={styles['benefit-icon']}>
                        <i className="bi bi-lightning-charge text-primary"></i>
                      </div>
                      <div className={styles['benefit-content']}>
                        <h5>Real-time Monitoring</h5>
                        <p className="text-muted mb-0">Stay on top of your AI's performance with live monitoring tools.</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="position-relative">
                    <Image
                      src="/screenshots/Analytics/CountryDistribution-en.png"
                      alt="Global Analytics"
                      width={600}
                      height={400}
                      className="img-fluid rounded-3 shadow-lg"
                    />
                    <div className="position-absolute top-0 start-100 translate-middle">
                      <motion.div 
                        className="bg-primary text-white p-2 rounded-circle shadow"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}
                      >
                        <i className="bi bi-globe-americas fs-3"></i>
                      </motion.div>
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
                  <h2 className="mb-4">Ready to Gain Actionable Insights?</h2>
                  <p className="lead mb-4">
                    Get comprehensive analytics to optimize your AI assistant and drive better business outcomes
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