'use client';

import { useState, CSSProperties } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Card, CardBody, CardText } from '@/components/BootstrapClient';
import PageTransition from '@/components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../features.module.css';

// Custom styles for the AI Technology page
const customStyles: Record<string, CSSProperties> = {
  modelCard: {
    minHeight: '220px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: '1px solid #e9ecef',
    borderRadius: '12px',
    overflow: 'hidden'
  },
  modelCardActive: {
    border: '2px solid #1e95e0',
    boxShadow: '0 8px 16px rgba(30,149,224,0.15)'
  },
  temperatureSlider: {
    width: '100%',
    height: '8px',
    borderRadius: '4px',
    backgroundColor: '#e9ecef',
    position: 'relative',
    marginTop: '30px',
    marginBottom: '40px'
  },
  sliderTrack: {
    position: 'absolute',
    height: '100%',
    borderRadius: '4px',
    background: 'linear-gradient(to right, #5eadf7, #1e95e0, #ff8e03)'
  },
  sliderThumb: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: 'white',
    border: '2px solid #1e95e0',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
  },
  sliderMarker: {
    position: 'absolute',
    top: '20px',
    transform: 'translateX(-50%)',
    fontSize: '0.75rem',
    color: '#495057',
    whiteSpace: 'nowrap'
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

// AI Models available in the platform
const aiModels = [
  {
    id: 'gpt-4',
    name: 'GPT-4O',
    description: 'Most powerful model with advanced reasoning and knowledge',
    provider: 'OpenAI',
    icon: 'openai',
    capabilities: ['Superior reasoning', 'Complex tasks', 'Wide knowledge base'],
    tier: 'standard'
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4O Mini',
    description: 'Fast and cost-effective for most common tasks',
    provider: 'OpenAI',
    icon: 'openai',
    capabilities: ['Quick responses', 'General knowledge', 'Cost-efficient'],
    tier: 'standard'
  },
  {
    id: 'gpt-o3-mini',
    name: 'GPT-O3 Mini',
    description: 'Fast and cost-effective for most common tasks',
    provider: 'OpenAI',
    icon: 'openai',
    capabilities: ['Quick responses', 'General knowledge', 'Cost-efficient'],
    tier: 'standard'
  },
  {
    id: 'claude-3.5-sonnet',
    name: 'Claude 3.5 Sonnet',
    description: 'Excels at nuanced conversations and content creation',
    provider: 'Anthropic',
    icon: 'anthropic',
    capabilities: ['Thoughtful answers', 'Content creation', 'Safety features'],
    tier: 'standard'
  },
  {
    id: 'claude-3.7-sonnet',
    name: 'Claude 3.7 Sonnet',
    description: 'High-performance model with strong reasoning and knowledge',
    provider: 'Anthropic',
    icon: 'anthropic',
    capabilities: ['Superior reasoning', 'Complex tasks', 'Wide knowledge base'],
    tier: 'standard'
  },
  {
    id: 'gemini-1.5-pro',
    name: 'Gemini 1.5 Pro',
    description: 'High-performance model with strong reasoning and knowledge',
    provider: 'Google',
    icon: 'google',
    capabilities: ['Superior reasoning', 'Complex tasks', 'Wide knowledge base'],
    tier: 'standard'
  },
  {
    id: 'gemini-1.5-flash',
    name: 'Gemini 1.5 Flash',
    description: 'Fast and cost-effective for most common tasks',
    provider: 'Google',
    icon: 'google',
    capabilities: ['Quick responses', 'General knowledge', 'Cost-efficient'],
    tier: 'standard'
  },
  {
    id: 'gemini-2.0-flash',
    name: 'Gemini 2.0 Flash',
    description: 'High-performance model with strong reasoning and knowledge',
    provider: 'Google',
    icon: 'google',
    capabilities: ['Superior reasoning', 'Complex tasks', 'Wide knowledge base'],
    tier: 'standard'
  }
];

// Technology features
const technologyFeatures = [
  {
    title: 'Multiple AI Models',
    description: 'Choose from leading providers like OpenAI, Anthropic, Meta, and more to find the perfect model for your use case.',
    icon: 'cpu',
    illustration: '/illustrations/workflow.svg'
  },
  {
    title: 'Temperature Control',
    description: 'Fine-tune how creative or deterministic your AI agent\'s responses should be with precise temperature settings.',
    icon: 'thermometer-half',
    illustration: '/illustrations/interactive-content.svg'
  },
  {
    title: 'Adaptive System Messages',
    description: 'Customize system instructions to guide the AI behavior, tone, and persona to match your brand.',
    icon: 'chat-square-text',
    illustration: '/illustrations/knowledge-base.svg'
  },
  {
    title: 'Context Management',
    description: 'Configure context window size and retention policies to optimize for performance or accuracy.',
    icon: 'box-arrow-in-up-right',
    illustration: '/illustrations/sales-analytics.svg'
  }
];

export default function AITechnologyPage() {
  const [activeModel, setActiveModel] = useState('gpt-4');
  const [temperatureValue, setTemperatureValue] = useState(0.7);
  
  const getActiveModel = () => {
    return aiModels.find(model => model.id === activeModel) || aiModels[0];
  };
  
  const temperatureLabels = [
    { value: 0, label: 'Deterministic', position: '0%' },
    { value: 0.5, label: 'Balanced', position: '50%' },
    { value: 1, label: 'Creative', position: '100%' }
  ];

  return (
    <PageTransition>
      <div className="ai-technology-page">
        <section className="page-showcase-section py-5">
          <div className="container">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-5"
            >
              <h1 className="section-title mb-3">AI Technology</h1>
              <p className="section-subtitle text-muted">
                Configure advanced AI capabilities for your agent with enterprise-grade models and fine-tuned settings
              </p>
            </motion.div>

            <div className="row align-items-center">
              <div className="col-lg-5 d-none d-lg-block">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h2 className="h3 mb-4">Powerful AI Models</h2>
                  <p className="lead mb-4">
                    Choose from the most advanced AI models from leading providers to power your agent with the capabilities that match your exact needs.
                  </p>
                  
                  <div className="bg-light p-4 rounded-3 border border-1 mb-4">
                    <h4 className="h5 mb-3">Why Model Selection Matters</h4>
                    <ul className="list-unstyled mb-0">
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Different models excel at different types of tasks</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Balance performance and cost for your specific needs</span>
                      </li>
                      <li className="mb-2 d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Match model capabilities to your industry requirements</span>
                      </li>
                      <li className="d-flex align-items-baseline">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>Easily swap models as technology evolves</span>
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
                          src="/screenshots/AiSettings/AiSettings-en.png"
                          alt="AI Technology Settings"
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
                            <h4 className="mb-1 d-lg-none">AI Model Configuration</h4>
                            <p className="text-muted mb-0 small">Configure model settings for optimal performance</p>
                          </div>
                          <div className="screenshot-badge" style={customStyles.screenshotBadge}>
                            <span>AI Settings</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Mobile-only content */}
                  <div className="d-block d-lg-none mt-4">
                    <h2 className="h3 mb-3">Powerful AI Models</h2>
                    <p className="mb-3">
                      Choose from the most advanced AI models from leading providers to power your agent with the capabilities that match your exact needs.
                    </p>
                    
                    <div className="bg-light p-3 rounded-3 border border-1">
                      <h4 className="h5 mb-2">Why Model Selection Matters</h4>
                      <ul className="list-unstyled mb-0">
                        <li className="mb-2 d-flex align-items-baseline">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="small">Different models excel at different types of tasks</span>
                        </li>
                        <li className="mb-2 d-flex align-items-baseline">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <span className="small">Balance performance and cost for your specific needs</span>
                        </li>
                      </ul>
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
              <h3 className="h4 text-center mb-4">Available AI Models</h3>
              <Row className="g-4">
                {aiModels.map((model, index) => (
                  <Col key={model.id} md={6} lg={4}>
                    <motion.div
                      whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                      whileTap={{ y: 0, boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
                      onClick={() => setActiveModel(model.id)}
                      style={{
                        ...customStyles.modelCard,
                        ...(activeModel === model.id ? customStyles.modelCardActive : {})
                      }}
                    >
                      <Card className="h-100 border-0">
                        <CardBody>
                          <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                              <span className="d-block fw-bold fs-5">{model.name}</span>
                              <span className="text-muted small">{model.provider}</span>
                            </div>
                            <div className={`${model.tier === 'premium' ? 'bg-warning' : 'bg-success'} text-white px-2 py-1 rounded-pill small`}>
                              {model.tier === 'premium' ? 'Premium' : 'Standard'}
                            </div>
                          </div>
                          <p className="text-muted small mb-3">{model.description}</p>
                          <div className="d-flex flex-column gap-1">
                            {model.capabilities.map((capability, i) => (
                              <div key={i} className="d-flex align-items-center">
                                <i className="bi bi-check-circle-fill text-success me-2 small"></i>
                                <span className="small">{capability}</span>
                              </div>
                            ))}
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
        
        <section className="py-5">
          <Container>
            <motion.div 
              className="mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Row>
                <Col md={8} className="mx-auto text-center">
                  <h2 className="h2 mb-3">Temperature Control</h2>
                  <p className="lead text-muted">
                    Fine-tune your AI's creativity and response style with precise temperature settings
                  </p>
                </Col>
              </Row>
            </motion.div>
            
            <Row className="align-items-center mb-5">
              <Col lg={6} className="mb-4 mb-lg-0">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="h4 mb-4">What is Temperature?</h3>
                  <p className="mb-4">
                    Temperature controls how creative or deterministic your AI agent's responses will be. Lower values produce more consistent and predictable responses, while higher values introduce more variety and creativity.
                  </p>
                  
                  <div style={customStyles.temperatureSlider}>
                    <div 
                      style={{
                        ...customStyles.sliderTrack,
                        width: `${temperatureValue * 100}%`
                      }}
                    />
                    <div 
                      style={{
                        ...customStyles.sliderThumb,
                        left: `${temperatureValue * 100}%`
                      }}
                    />
                    {temperatureLabels.map((marker) => (
                      <div 
                        key={marker.value} 
                        style={{
                          ...customStyles.sliderMarker,
                          left: marker.position
                        }}
                      >
                        {marker.label}
                      </div>
                    ))}
                  </div>
                  
                  <div className="d-flex justify-content-between mt-5">
                    <div className="text-center p-3 bg-white rounded-3 shadow-sm" style={{ width: '30%' }}>
                      <div className="mb-2">
                        <i className="bi bi-calculator fs-3 text-primary"></i>
                      </div>
                      <h5 className="mb-0 h6">Low (0.1-0.3)</h5>
                      <p className="small text-muted mb-0">Precise, deterministic</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-3 shadow-sm" style={{ width: '30%' }}>
                      <div className="mb-2">
                        <i className="bi bi-arrow-left-right fs-3 text-primary"></i>
                      </div>
                      <h5 className="mb-0 h6">Medium (0.4-0.7)</h5>
                      <p className="small text-muted mb-0">Balanced responses</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-3 shadow-sm" style={{ width: '30%' }}>
                      <div className="mb-2">
                        <i className="bi bi-lightning-charge fs-3 text-primary"></i>
                      </div>
                      <h5 className="mb-0 h6">High (0.8-1.0)</h5>
                      <p className="small text-muted mb-0">Creative, varied</p>
                    </div>
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
                  <div className="bg-white p-4 rounded-3 shadow">
                    <h4 className="h5 mb-4">When to Use Different Temperature Settings</h4>
                    <div className="mb-4">
                      <h5 className="h6 d-flex align-items-center">
                        <i className="bi bi-thermometer-low fs-5 text-primary me-2"></i>
                        Low Temperature (0.1-0.3)
                      </h5>
                      <ul className="list-unstyled ps-4 mb-0">
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Customer support with factual information</li>
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Technical documentation and instructions</li>
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Order processing and status updates</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <h5 className="h6 d-flex align-items-center">
                        <i className="bi bi-thermometer-half fs-5 text-primary me-2"></i>
                        Medium Temperature (0.4-0.7)
                      </h5>
                      <ul className="list-unstyled ps-4 mb-0">
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>General customer conversations</li>
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Product recommendations</li>
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Educational content and explanations</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="h6 d-flex align-items-center">
                        <i className="bi bi-thermometer-high fs-5 text-primary me-2"></i>
                        High Temperature (0.8-1.0)
                      </h5>
                      <ul className="list-unstyled ps-4 mb-0">
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Creative marketing content</li>
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Brainstorming sessions</li>
                        <li className="mb-2"><i className="bi bi-check-circle text-success me-2"></i>Engaging social media responses</li>
                      </ul>
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
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="h2 mb-3">Key Technology Features</h2>
              <p className="lead text-muted">
                SupAgent provides advanced AI configuration options to optimize performance for your specific use case
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Row className="g-4">
                {technologyFeatures.map((feature, index) => (
                  <Col key={index} md={6}>
                    <motion.div
                      variants={fadeUp}
                      className="h-100"
                      custom={index}
                    >
                      <Card className="h-100 border-0 shadow-sm hover-lift">
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
                  <h2 className="mb-4">Ready to Configure Your AI Assistant?</h2>
                  <p className="lead mb-4">
                    Start building a smart AI agent with enterprise-grade technology that can be tailored to your exact business needs.
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