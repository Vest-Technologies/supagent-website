'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../features.module.css';

// Custom styles for the training page
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
  mobileTabDisabled: {
    backgroundColor: '#f1f3f5',
    color: '#adb5bd',
    cursor: 'not-allowed'
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

// Training method options
const trainingMethods = [
  { 
    id: 'website', 
    name: 'Website Training', 
    icon: 'globe',
    description: 'Train your AI with content from your websites',
    addImage: '/screenshots/Training/AddWebsiteTraining-en.png',
    listImage: '/screenshots/Training/WebsiteTraining-en.png',
    features: [
      'Crawl entire websites or specific pages',
      'Sync content hourly, daily, weekly, or monthly',
      'Easily manage multiple website sources'
    ]
  },
  { 
    id: 'file', 
    name: 'File Training', 
    icon: 'file-earmark-text',
    description: 'Upload documents to train your AI assistant',
    addImage: '/screenshots/Training/AddFileTraining-en.png',
    listImage: '/screenshots/Training/FileTraining-en.png',
    features: [
      'Support for CSV, DOC, TXT, and PDF files',
      'Automatic content extraction and structuring',
      'Organize documents by categories'
    ]
  },
  { 
    id: 'text', 
    name: 'Text Training', 
    icon: 'chat-text',
    description: 'Directly add custom text content to your AI',
    addImage: '/screenshots/Training/AddTextTraining-en.png',
    listImage: '/screenshots/Training/TextTraining-en.png', // Using website training as placeholder
    features: [
      'Add custom text directly in the interface',
      'Create structured knowledge with rich text editor',
      'Immediate training with instant feedback'
    ]
  },
  { 
    id: 'gdocs', 
    name: 'Google Docs', 
    icon: 'google',
    description: 'Connect and train with your Google Docs content',
    addImage: '/screenshots/Training/AddFileTraining-en.png', // Using file training as placeholder
    listImage: '/screenshots/Training/FileTraining-en.png', // Using file training as placeholder
    features: [
      'Sync with your Google Docs for training',
      'Automatically update when docs change',
      'Share knowledge across your organization'
    ],
    comingSoon: true
  },
  { 
    id: 'notion', 
    name: 'Notion', 
    icon: 'journal-richtext',
    description: 'Connect your Notion workspace for AI training',
    addImage: '/screenshots/Training/AddFileTraining-en.png', // Using file training as placeholder
    listImage: '/screenshots/Training/FileTraining-en.png', // Using file training as placeholder
    features: [
      'Integrate with your Notion knowledge base',
      'Use existing documentation for training',
      'Keep AI up-to-date with your workspace'
    ],
    comingSoon: true
  }
];

// Sync frequency options
const syncOptions = [
  { id: 'hourly', name: 'Hourly', icon: 'clock' },
  { id: 'daily', name: 'Daily', icon: 'calendar-day' },
  { id: 'weekly', name: 'Weekly', icon: 'calendar-week' },
  { id: 'monthly', name: 'Monthly', icon: 'calendar-month' }
];

export default function TrainingPage() {
  const [activeMethod, setActiveMethod] = useState('website');
  const [viewMode, setViewMode] = useState('add'); // 'add' or 'list'

  const getActiveMethod = () => {
    return trainingMethods.find(method => method.id === activeMethod) || trainingMethods[0];
  };

  const getActiveImage = () => {
    const method = getActiveMethod();
    return viewMode === 'add' ? method.addImage : method.listImage;
  };

  return (
    <PageTransition>
      <style>{scrollbarStyles}</style>
      <div className="training-page">
        <section className="page-showcase-section py-5">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">AI Agent Training</h1>
              <p className="section-subtitle text-muted">
                Empower your AI with comprehensive training capabilities to deliver exceptional support experiences.
              </p>
            </motion.div>

            {/* Mobile Tabs - Horizontal scrolling buttons for small screens */}
            <div className="d-md-none page-tabs-mobile mb-4">
              <div style={customStyles.scrollContainer} className="hide-scrollbar">
                {trainingMethods.map((method) => (
                  <motion.button
                    key={method.id}
                    style={{
                      ...customStyles.mobileTab,
                      ...(activeMethod === method.id ? customStyles.mobileTabActive : {}),
                      ...(method.comingSoon ? customStyles.mobileTabDisabled : {})
                    }}
                    onClick={() => !method.comingSoon && setActiveMethod(method.id)}
                    whileHover={!method.comingSoon ? { scale: 1.05, y: -3 } : {}}
                    whileTap={!method.comingSoon ? { scale: 0.95 } : {}}
                    disabled={method.comingSoon}
                  >
                    <i className={`bi bi-${method.icon} ${activeMethod === method.id ? 'fs-4' : 'fs-5'}`}></i>
                    <span className="fw-medium">{method.name}</span>
                    {method.comingSoon && (
                      <div className="position-absolute top-0 end-0 p-1">
                        <span className="badge bg-warning text-white rounded-pill fw-normal" 
                          style={{ fontSize: '0.65rem', whiteSpace: 'nowrap', opacity: 0.9 }}>
                          Soon
                        </span>
                      </div>
                    )}
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
                  <div className="d-flex align-items-center mb-4">
                    <div className="btn-group" role="group">
                      <button 
                        className={`btn ${viewMode === 'add' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setViewMode('add')}
                      >
                        <i className="bi bi-plus-lg me-2"></i>Add Training
                      </button>
                      <button 
                        className={`btn ${viewMode === 'list' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setViewMode('list')}
                      >
                        <i className="bi bi-list me-2"></i>Trained Sources
                      </button>
                    </div>
                  </div>
                  
                  <div className="nav flex-column feature-nav" role="tablist">
                    {trainingMethods.map((method) => (
                      <motion.button
                        key={method.id}
                        className={`nav-link text-start my-2 ${activeMethod === method.id ? 'active' : ''}`}
                        onClick={() => setActiveMethod(method.id)}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        disabled={method.comingSoon}
                      >
                        <div className="d-flex align-items-center">
                          <div className="feature-icon me-3">
                            <i className={`bi bi-${method.icon}`}></i>
                          </div>
                          <div>
                            <h5 className="mb-0">
                              {method.name}
                              {method.comingSoon && (
                                <span className="ms-2 badge bg-warning text-white" style={{ fontSize: '0.7rem' }}>
                                  Coming Soon
                                </span>
                              )}
                            </h5>
                            <small>{method.description}</small>
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
                          key={`${activeMethod}-${viewMode}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="screenshot-frame"
                        >
                          <div className="image-wrapper">
                            <Image
                              src={getActiveImage()}
                              alt={`${getActiveMethod().name} - ${viewMode === 'add' ? 'Add' : 'List'} View`}
                              fill
                              sizes="(max-width: 768px) 100vw, 800px"
                              className="feature-image"
                              priority={activeMethod === 'website'}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="screenshot-info">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-md-none">
                            <h4 className="mb-1">{getActiveMethod().name}</h4>
                            <p className="text-muted mb-0">{getActiveMethod().description}</p>
                          </div>
                          <div className="screenshot-badge">
                            <span>{viewMode === 'add' ? 'Add New' : 'Trained Sources'}</span>
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
              <h2 className="h2 mb-3">Key Training Features</h2>
              <p className="lead text-muted">
                SupAgent provides multiple ways to train your AI with your business knowledge
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {trainingMethods.slice(0, 3).map((method, index) => (
                  <Col key={method.id} md={8} lg={4}>
                    <motion.div
                      variants={fadeUp}
                      className="h-100"
                      custom={index}
                    >
                      <Card className="h-100 border-0 shadow-sm hover-lift">
                        <CardBody className="d-flex flex-column">
                          <div className={`${styles['feature-icon']} bg-light align-self-center p-3 rounded-circle mb-3`} style={{ fontSize: '2rem' }}>
                            <i className={`bi bi-${method.icon}`}></i>
                          </div>
                          <h3 className="h5 text-center mb-3">{method.name}</h3>
                          <CardText className="text-muted text-center mb-3">{method.description}</CardText>
                          <ul className="list-unstyled mt-auto">
                            {method.features.map((feature, fIndex) => (
                              <li key={fIndex} className="mb-2 d-flex align-items-baseline">
                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                <span className="small">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
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
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="h2 mb-4">Sync Your Content Automatically</h2>
                  <p className="lead mb-4">
                    Keep your AI assistant up-to-date with the latest information by setting up automatic syncing for your training sources.
                  </p>
                  
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    {syncOptions.map((option) => (
                      <motion.div 
                        key={option.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-light rounded-3 p-3 text-center" 
                        style={{ width: '120px' }}
                      >
                        <div className="mb-2 fs-3 text-primary">
                          <i className={`bi bi-${option.icon}`}></i>
                        </div>
                        <div className="fw-bold">{option.name}</div>
                        <div className="small text-muted">Sync</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-light p-4 rounded-3 border border-1">
                    <h4 className="h5 mb-3">Benefits of Regular Syncing</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Always have the most up-to-date content</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Reflect website changes automatically</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Maintain accuracy with fresh information</span>
                      </li>
                      <li className="d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Reduce manual training efforts</span>
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
                  className="position-relative"
                >
                  <div className="position-relative mb-4">
                    <Image
                      src="/screenshots/Training/Sync-en.png"
                      alt="Sync Settings"
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
                        <i className="bi bi-arrow-repeat fs-3"></i>
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
                  <h2 className="mb-4">Ready to Train Your AI Assistant?</h2>
                  <p className="lead mb-4">
                    Start building a smart AI agent that understands your business and can provide exceptional support to your customers.
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