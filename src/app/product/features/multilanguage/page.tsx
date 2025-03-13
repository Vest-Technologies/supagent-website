'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../features.module.css';

// Custom styles for the language page
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
  languageTag: {
    display: 'inline-flex',
    padding: '6px 12px',
    borderRadius: '50px',
    margin: '4px',
    fontSize: '0.9rem',
    fontWeight: 500,
    backgroundColor: '#f0f9ff',
    color: '#1e95e0',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(30, 149, 224, 0.2)',
  },
  worldMap: {
    position: 'relative',
    width: '100%',
    height: '400px',
    background: 'url("/world-map-dots.png")',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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

  .language-pulse {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: #1e95e0;
    position: relative;
  }
  
  .language-pulse::after {
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

  .globe-rotate {
    animation: rotateGlobe 20s linear infinite;
  }

  @keyframes rotateGlobe {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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

const languageOptions = [
  { 
    id: 'realtime', 
    name: 'Real-time Translation', 
    icon: 'translate',
    description: 'Seamlessly communicate with customers in their preferred language',
    image: '/screenshots/Language/Language-en.png',
    features: [
      'Instant translation in over 90 languages',
      'Culturally appropriate responses',
      'Maintains context across languages'
    ]
  },
  { 
    id: 'detection', 
    name: 'Language Detection', 
    icon: 'eye',
    description: 'Automatically detect and respond in the user\'s language',
    image: '/screenshots/Language/Language-tr.png',
    features: [
      'Automatic language identification',
      'Seamless language switching',
      'Natural, conversational responses'
    ]
  },
  { 
    id: 'customization', 
    name: 'Language Customization', 
    icon: 'sliders',
    description: 'Customize terminology and phrases for your business',
    image: '/screenshots/Language/Language-gr.png',
    features: [
      'Industry-specific terminology',
      'Custom phrases and translations',
      'Brand voice consistency across languages'
    ]
  },
  { 
    id: 'multilingual', 
    name: 'Multilingual Knowledge', 
    icon: 'book',
    description: 'Train your AI with content in multiple languages',
    image: '/screenshots/Language/Language-fr.png',
    features: [
      'Multi-language knowledge base',
      'Import training data in any language',
      'Cross-language knowledge consistency'
    ]
  }
];

const popularLanguages = [
  { name: 'English', code: 'EN', flag: '🇬🇧' },
  { name: 'Turkish', code: 'TR', flag: '🇹🇷' },
  { name: 'Spanish', code: 'ES', flag: '🇪🇸' },
  { name: 'French', code: 'FR', flag: '🇫🇷' },
  { name: 'German', code: 'DE', flag: '🇩🇪' },
  { name: 'Chinese', code: 'ZH', flag: '🇨🇳' },
  { name: 'Arabic', code: 'AR', flag: '🇸🇦' },
  { name: 'Japanese', code: 'JA', flag: '🇯🇵' },
  { name: 'Portuguese', code: 'PT', flag: '🇵🇹' },
  { name: 'Russian', code: 'RU', flag: '🇷🇺' },
  { name: 'Hindi', code: 'HI', flag: '🇮🇳' },
  { name: 'Italian', code: 'IT', flag: '🇮🇹' }
];

// World regions with languages
const worldRegions = [
  { 
    region: 'Europe', 
    languages: ['English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Dutch', 'Polish', 'Swedish', 'Greek', 'Romanian']
  },
  { 
    region: 'Asia', 
    languages: ['Chinese', 'Japanese', 'Korean', 'Hindi', 'Bengali', 'Vietnamese', 'Thai', 'Indonesian', 'Malay', 'Filipino', 'Urdu', 'Turkish']
  },
  { 
    region: 'Americas', 
    languages: ['English', 'Spanish', 'Portuguese', 'French', 'Haitian Creole', 'Quechua', 'Guarani', 'Aymara']
  },
  { 
    region: 'Africa', 
    languages: ['Arabic', 'Swahili', 'Amharic', 'Yoruba', 'Igbo', 'Zulu', 'Xhosa', 'Hausa', 'Somali', 'Afrikaans']
  },
  { 
    region: 'Middle East', 
    languages: ['Arabic', 'Persian', 'Hebrew', 'Turkish', 'Kurdish', 'Urdu']
  },
  { 
    region: 'Oceania', 
    languages: ['English', 'Maori', 'Samoan', 'Fijian', 'Tongan', 'Hawaiian']
  }
];

// Core language benefits
const languageBenefits = [
  { title: 'Global Reach', icon: 'globe', description: 'Expand to international markets with confidence' },
  { title: 'Customer Satisfaction', icon: 'emoji-smile', description: 'Improve experience with native language support' },
  { title: 'Cost Efficiency', icon: 'cash-stack', description: 'Eliminate the need for multiple language-specific teams' },
  { title: '24/7 Availability', icon: 'clock-history', description: 'Provide round-the-clock support in all languages' }
];

export default function MultilanguagePage() {
  const [activeOption, setActiveOption] = useState('realtime');

  const getActiveOption = () => {
    return languageOptions.find(option => option.id === activeOption) || languageOptions[0];
  };

  return (
    <PageTransition>
      <style>{scrollbarStyles}</style>
      <div className="multilanguage-page">
        <section className="page-showcase-section py-5">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">Multilanguage Support</h1>
              <p className="section-subtitle text-muted">
                Break language barriers with support for over 90 languages, allowing your customers to communicate naturally
              </p>
            </motion.div>

            {/* Mobile Tabs - Horizontal scrolling buttons for small screens */}
            <div className="d-md-none page-tabs-mobile mb-4">
              <div style={customStyles.scrollContainer} className="hide-scrollbar">
                {languageOptions.map((option) => (
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
              <div className="col-lg-8 d-none d-md-block">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="nav flex-column feature-nav" role="tablist">
                    {languageOptions.map((option) => (
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
              
              <div className="col-lg-4">
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
                              priority={activeOption === 'realtime'}
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
                            <span>Language Support</span>
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
              <h2 className="h2 mb-3">Key Language Features</h2>
              <p className="lead text-muted">
                Provide exceptional support in any language without additional resources
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {languageOptions.map((option, index) => (
                  <Col key={option.id} md={6} lg={3}>
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
            <Row className="align-items-center mb-5">
              <Col lg={5} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="h2 mb-4">Popular Supported Languages</h2>
                  <p className="lead mb-4">
                    Our AI can communicate fluently in over 90 languages, including:
                  </p>
                  
                  <div className="language-grid mb-4">
                    <Row className="g-2">
                      {popularLanguages.map((lang, index) => (
                        <Col key={index} xs={6} md={4}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className={styles['language-item']}
                          >
                            <span className={styles['language-flag']}>{lang.flag}</span>
                            <span className={styles['language-name']}>{lang.name}</span>
                            <span className={styles['language-code']}>{lang.code}</span>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="language-pulse"></div>
                    <span className="text-muted">And 80+ more languages available</span>
                  </div>
                </motion.div>
              </Col>
              <Col lg={7}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="position-relative text-center">
                      <Image
                        src="/illustrations/education.svg"
                        alt="World Languages"
                        width={450}
                        height={350}
                        className="img-fluid"
                      />
                    
                    {/* Floating language bubbles */}
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '20%', left: '15%' }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div style={customStyles.languageTag}>English</div>
                    </motion.div>
                    
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '60%', left: '20%' }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      <div style={customStyles.languageTag}>Español</div>
                    </motion.div>
                    
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '30%', right: '15%' }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <div style={customStyles.languageTag}>Türkçe</div>
                    </motion.div>
                    
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '70%', right: '20%' }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                      <div style={customStyles.languageTag}>中文</div>
                    </motion.div>
                    
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '10%', right: '35%' }}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    >
                      <div style={customStyles.languageTag}>हिन्दी</div>
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
                  <h2 className="h2 mb-4">Language Support Benefits</h2>
                  <p className="lead mb-4">
                    Break down language barriers and connect with customers around the world.
                  </p>
                  
                  <Row className="g-4">
                    {languageBenefits.map((benefit, index) => (
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
                >
                  <div className="position-relative text-center">
                    <Image
                      src="/illustrations/customer-support.svg"
                      alt="Global Support"
                      width={450}
                      height={350}
                      className="img-fluid"
                    />
                    
                    {/* Animated chat bubbles */}
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '20%', right: '20%' }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="bg-primary text-white p-2 px-3 rounded-pill">
                        <small>¡Hola! ¿Cómo puedo ayudar?</small>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="position-absolute"
                      style={{ top: '40%', left: '10%' }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="bg-light p-2 px-3 rounded-pill border">
                        <small>Size nasıl yardımcı olabilirim?</small>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="position-absolute"
                      style={{ bottom: '25%', right: '15%' }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="bg-light p-2 px-3 rounded-pill border">
                        <small>Comment puis-je vous aider?</small>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
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
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-3">Languages by Region</h2>
              <p className="lead text-muted">
                Connect with customers in every corner of the world
              </p>
            </motion.div>

            <Row className="g-4">
              {worldRegions.map((region, index) => (
                <Col key={index} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-100 border-0 shadow-sm">
                      <CardBody>
                        <h4 className="h5 mb-3">{region.region}</h4>
                        <div className="d-flex flex-wrap mb-3">
                          {region.languages.slice(0, 6).map((lang, idx) => (
                            <span key={idx} style={customStyles.languageTag} className="me-2 mb-2">{lang}</span>
                          ))}
                          {region.languages.length > 6 && (
                            <span className="text-muted mt-2">+{region.languages.length - 6} more</span>
                          )}
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
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
                  <h2 className="mb-4">Ready to Support Customers in Any Language?</h2>
                  <p className="lead mb-4">
                    Break language barriers and expand your global reach with our multilingual AI support solution.
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