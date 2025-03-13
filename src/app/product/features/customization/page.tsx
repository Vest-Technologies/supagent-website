'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../features.module.css';

// Custom styles for the customization page
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

// Customization options
const customizationOptions = [
  { 
    id: 'container', 
    name: 'Container', 
    icon: 'layout-wtf',
    description: 'Customize the main container of your chatbot',
    image: '/screenshots/Customization/Container-en.png',
    features: [
      'Adjust size, position and animation',
      'Set custom borders and shadows',
      'Choose screen position (corner or full-width)'
    ]
  },
  { 
    id: 'bubble', 
    name: 'Chat Bubble', 
    icon: 'chat-square-text',
    description: 'Style the floating chat bubble for your website',
    image: '/screenshots/Customization/Bubble-en.png',
    features: [
      'Customize bubble icon and colors',
      'Set animation and pulse effects',
      'Position anywhere on your website'
    ]
  },
  { 
    id: 'header', 
    name: 'Header', 
    icon: 'window',
    description: 'Customize the header of your chatbot interface',
    image: '/screenshots/Customization/Header-en.png',
    features: [
      'Add your logo and brand colors',
      'Customize header text and buttons',
      'Choose from various header styles'
    ]
  },
  { 
    id: 'messages', 
    name: 'Messages', 
    icon: 'chat-left-text',
    description: 'Style how messages appear in conversations',
    image: '/screenshots/Customization/Message-en.png',
    features: [
      'Customize message bubbles and spacing',
      'Set different styles for user and AI messages',
      'Add custom avatars or icons'
    ]
  },
  { 
    id: 'input', 
    name: 'Input Area', 
    icon: 'input-cursor-text',
    description: 'Design the input area where users type messages',
    image: '/screenshots/Customization/Input-en.png',
    features: [
      'Style the input field and send button',
      'Add custom placeholder text',
      'Include suggested message buttons'
    ]
  },
  { 
    id: 'templates', 
    name: 'Templates', 
    icon: 'palette',
    description: 'Choose from pre-designed chatbot themes',
    image: '/screenshots/Customization/Template-en.png',
    features: [
      'Quick apply professional designs',
      'Industry-specific themes',
      'Customize templates further to match your brand'
    ]
  }
];

// Branding benefits
const brandingBenefits = [
  { title: 'Brand Consistency', icon: 'palette2', description: 'Maintain consistent visual identity across all customer touchpoints' },
  { title: 'User Experience', icon: 'emoji-smile', description: 'Create intuitive and visually appealing interactions' },
  { title: 'Professionalism', icon: 'briefcase', description: 'Present a polished and professional image to your customers' },
  { title: 'Recognition', icon: 'eye', description: 'Increase brand recognition with consistent visual elements' }
];

export default function CustomizationPage() {
  const [activeOption, setActiveOption] = useState('container');

  const getActiveOption = () => {
    return customizationOptions.find(option => option.id === activeOption) || customizationOptions[0];
  };

  return (
    <PageTransition>
      <style>{scrollbarStyles}</style>
      <div className="customization-page">
        <section className="page-showcase-section py-5">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">Chatbot Customization</h1>
              <p className="section-subtitle text-muted">
                Tailor every aspect of your AI chatbot to perfectly match your brand and business needs
              </p>
            </motion.div>

            {/* Mobile Tabs - Horizontal scrolling buttons for small screens */}
            <div className="d-md-none page-tabs-mobile mb-4">
              <div style={customStyles.scrollContainer} className="hide-scrollbar">
                {customizationOptions.map((option) => (
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
                    {customizationOptions.map((option) => (
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
                              alt={`${getActiveOption().name} Customization`}
                              fill
                              sizes="(max-width: 768px) 100vw, 800px"
                              className="feature-image"
                              style={{ objectFit: 'cover', objectPosition: 'right' }}
                              priority={activeOption === 'container'}
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
                            <span>Customization</span>
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
              <h2 className="h2 mb-3">Customizable Elements</h2>
              <p className="lead text-muted">
                Reshape every aspect of your chatbot to create a perfect match for your brand
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {customizationOptions.slice(0, 3).map((option, index) => (
                  <Col key={option.id} md={6} lg={4}>
                    <motion.div
                      variants={fadeUp}
                      className="h-100"
                      custom={index}
                    >
                      <Card className="h-100 border-0 shadow-sm hover-lift">
                        <CardBody className="d-flex flex-column">
                          <div className={`${styles['feature-icon']} bg-light align-self-center p-3 rounded-circle mb-3`} style={{ fontSize: '2rem' }}>
                            <i className={`bi bi-${option.icon}`}></i>
                          </div>
                          <h3 className="h5 text-center mb-3">{option.name}</h3>
                          <CardText className="text-muted text-center mb-3">{option.description}</CardText>
                          <ul className="list-unstyled mt-auto">
                            {option.features.map((feature, fIndex) => (
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
                  <h2 className="h2 mb-4">Professional Templates</h2>
                  <p className="lead mb-4">
                    Jump-start your chatbot design with our professionally crafted templates, or create your own from scratch.
                  </p>
                  
                  <div className="bg-light p-4 rounded-3 border border-1 mb-4">
                    <h4 className="h5 mb-3">Available Template Categories</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>E-commerce and Retail</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Healthcare and Medical</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>SaaS and Technology</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Finance and Banking</span>
                      </li>
                      <li className="d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Travel and Hospitality</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="d-flex flex-wrap gap-3 mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-light rounded-3 p-3 text-center" 
                      style={{ width: '120px' }}
                    >
                      <div className="mb-2 fs-3 text-primary">
                        <i className="bi bi-palette"></i>
                      </div>
                      <div className="fw-bold">Modern</div>
                      <div className="small text-muted">Style</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-light rounded-3 p-3 text-center" 
                      style={{ width: '120px' }}
                    >
                      <div className="mb-2 fs-3 text-primary">
                        <i className="bi bi-shield-check"></i>
                      </div>
                      <div className="fw-bold">Professional</div>
                      <div className="small text-muted">Style</div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-light rounded-3 p-3 text-center" 
                      style={{ width: '120px' }}
                    >
                      <div className="mb-2 fs-3 text-primary">
                        <i className="bi bi-emoji-smile"></i>
                      </div>
                      <div className="fw-bold">Friendly</div>
                      <div className="small text-muted">Style</div>
                    </motion.div>
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
                      src="/screenshots/Customization/Template-en.png"
                      alt="Template Selection"
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
                        <i className="bi bi-palette fs-3"></i>
                      </motion.div>
                    </div>
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
                  <h2 className="h2 mb-4">Brand Alignment Benefits</h2>
                  <p className="lead mb-4">
                    A well-designed chatbot that aligns with your brand identity creates a seamless customer experience.
                  </p>
                  
                  <Row className="g-4">
                    {brandingBenefits.map((benefit, index) => (
                      <Col key={index} sm={6}>
                        <motion.div 
                          whileHover={{ scale: 1.03 }}
                          className="bg-white p-4 rounded-3 shadow-sm h-100"
                        >
                          <div className="d-flex align-items-center mb-3">
                            <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                              <i className={`bi bi-${benefit.icon} text-primary fs-4`}></i>
                            </div>
                            <h5 className="mb-0">{benefit.title}</h5>
                          </div>
                          <p className="text-muted mb-0 small">{benefit.description}</p>
                        </motion.div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </Col>
              <Col lg={6} className="order-lg-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="position-relative d-inline-block">
                    <Image
                      src="/screenshots/Customization/Bubble-en.png"
                      alt="Customizable Chat Bubble"
                      width={500}
                      height={380}
                      className="img-fluid rounded-3 shadow-lg"
                    />
                    <motion.div 
                      className="position-absolute top-0 end-0 translate-middle-x"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    >
                      <div className="bg-warning text-white p-3 rounded-3 shadow">
                        <span className="fw-bold">Brand Aligned</span>
                      </div>
                    </motion.div>
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
                  <h2 className="mb-4">Ready to Customize Your AI Assistant?</h2>
                  <p className="lead mb-4">
                    Create a chatbot that perfectly aligns with your brand identity and enhances your customer experience.
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