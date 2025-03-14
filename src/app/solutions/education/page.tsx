'use client';

import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

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

export default function EducationPage() {
  const benefits = [
    {
      title: 'Personalized Learning',
      description: 'Deliver tailored educational content based on individual learning styles and progress',
      icon: 'person-check'
    },
    {
      title: '24/7 Learning Support',
      description: 'Provide round-the-clock assistance to students whenever they need help',
      icon: 'clock'
    },
    {
      title: 'Reduced Educator Workload',
      description: 'Free up educators to focus on high-value interactions and complex teaching moments',
      icon: 'briefcase'
    },
    {
      title: 'Improved Learning Outcomes',
      description: 'Enhance student comprehension and retention through interactive, adaptive learning',
      icon: 'graph-up'
    },
    {
      title: 'Scalable Education',
      description: 'Deliver high-quality education to more students without proportional resource increases',
      icon: 'people'
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain valuable insights into student performance and learning patterns',
      icon: 'bar-chart'
    }
  ]

  const features = [
    {
      title: 'Intelligent Tutoring',
      description: "Provide personalized guidance and explanations tailored to each student's needs",
      image: '/illustrations/tutoring.svg'
    },
    {
      title: 'Adaptive Learning Paths',
      description: 'Create customized learning journeys that adapt based on student progress and performance',
      image: '/illustrations/learning-path.svg'
    },
    {
      title: 'Personalized Content',
      description: 'Engage students with personalized learning materials and assessments',
      image: '/illustrations/interactive-content.svg'
    },
    {
      title: 'Learning Analytics',
      description: 'Track and analyze student performance with detailed dashboards and reports',
      image: '/illustrations/learning-analytics.svg'
    }
  ]

  const applications = [
    {
      title: 'K-12 Education',
      description: 'Support classroom learning with personalized tutoring and homework help',
      icon: 'book'
    },
    {
      title: 'Higher Education',
      description: 'Enhance university courses with AI-powered teaching assistants and study aids',
      icon: 'mortarboard'
    },
    {
      title: 'Corporate Training',
      description: 'Streamline employee training with adaptive learning programs and on-demand support',
      icon: 'briefcase'
    },
    {
      title: 'Language Learning',
      description: 'Facilitate language acquisition with conversational practice and personalized feedback',
      icon: 'translate'
    },
    {
      title: 'Test Preparation',
      description: 'Help students prepare for standardized tests with targeted practice and guidance',
      icon: 'pencil-square'
    },
    {
      title: 'Special Education',
      description: 'Provide additional support for students with diverse learning needs',
      icon: 'puzzle'
    }
  ]
  
  // New section for learning tools
  const learningTools = [
    {
      title: 'AI Study Buddy',
      description: 'An intelligent companion that helps students work through complex concepts and problems',
      icon: 'chat-dots'
    },
    {
      title: 'Automated Feedback',
      description: 'Provide instant, constructive feedback on assignments and practice exercises',
      icon: 'check2-circle'
    },
    {
      title: 'Adaptive Quizzing',
      description: 'Generate personalized quizzes that adapt to student knowledge gaps',
      icon: 'question-circle'
    }
  ];

  // Hover states for cards
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <PageTransition>
      <main className="education-page">
        {/* Hero Section */}
        <section className="page-showcase-section py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="badge bg-warning text-white mb-3">Learning Innovation</span>
                  <div className="d-flex"></div>
                  <h1 className="section-title mb-4">Education Solution</h1>
                  <p className="section-subtitle mb-4">
                    Transform educational experiences with our AI-powered education solution. Personalize learning, 
                    reduce educator workload, and improve outcomes for students of all ages and abilities.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link href="/waitlist" className="btn btn-primary btn-lg">
                      Join Waitlist
                    </Link>
                    {/* <Link href="/pricing" className="btn btn-outline-primary btn-lg">
                      View Pricing
                    </Link> */}
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                >
                  <Image 
                    src="/illustrations/education.svg" 
                    alt="Education Solution" 
                    width={500} 
                    height={400} 
                    className="img-fluid hero-image" 
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-5">
          <Container>
            <div className="text-center mb-5">
              <h2 className="section-title">Benefits of AI-Powered Education</h2>
              <p className="section-subtitle"><i className="bi bi-stars"></i> Revolutionize the learning experience</p>
            </div>
            
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <Col key={index} md={6} lg={4}>
                  <div className="h-100">
                    <Card className="border-0 shadow-sm h-100">
                      <CardBody className="p-4">
                        <div className="d-flex align-items-center mb-3">
                          <div className="feature-icon me-3">
                            <i className={`bi bi-${benefit.icon} fs-2 text-primary`}></i>
                          </div>
                          <h3 className="h5 mb-0">{benefit.title}</h3>
                        </div>
                        <p className="mb-0">{benefit.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
              ))}
            </div>
          </Container>
        </section>

        {/* Applications Section */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Applications Across Education</h2>
              <p className="section-subtitle">Versatile AI solutions for every educational context</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {applications.map((application, index) => (
                <Col key={index} md={6} lg={4}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="h-100"
                  >
                    <Card className="h-100 border-0 shadow-sm">
                      <CardBody className="p-4 text-center">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                          <i className={`bi bi-${application.icon} fs-3`}></i>
                        </div>
                        <h3 className="h5 mb-3">{application.title}</h3>
                        <p className="mb-0">{application.description}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle">A simple four-step process to transform education</p>
            </motion.div>
            
            <Row className="justify-content-center">
              <Col lg={10}>
                <motion.div
                  className="row g-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-1-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Assessment</h3>
                      <p>Evaluate student knowledge, learning style, and needs</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-2-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Personalization</h3>
                      <p>Create customized learning paths and content</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-3-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Engagement</h3>
                      <p>Deliver interactive content and provide real-time support</p>
                    </motion.div>
                  </Col>
                  <Col md={3} className="text-center">
                    <motion.div variants={fadeUp}>
                      <div className="rounded-circle bg-warning text-dark d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                        <i className="bi bi-4-circle-fill fs-2"></i>
                      </div>
                      <h3 className="h5">Analysis</h3>
                      <p>Track progress and continuously adapt the learning experience</p>
                    </motion.div>
                  </Col>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Key Features</h2>
              <p className="section-subtitle">Powerful tools to transform the educational experience</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <Col key={index} md={6}>
                  <motion.div 
                    variants={fadeUp}
                    className="h-100"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                      <CardBody className="p-4">
                        <Row className="align-items-center">
                          <Col md={5} className="text-center mb-3 mb-md-0">
                            <motion.div
                              animate={{ 
                                scale: hoveredCard === index ? 1.05 : 1,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <Image 
                                src={feature.image} 
                                alt={feature.title} 
                                width={140} 
                                height={140} 
                                className="img-fluid" 
                              />
                            </motion.div>
                          </Col>
                          <Col md={7}>
                            <h3 className="h5 mb-3">{feature.title}</h3>
                            <p className="mb-0">{feature.description}</p>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Customizable Templates Section - NEW */}
        <section className="py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Customizable Learning Templates</h2>
              <p className="section-subtitle">Tailor your educational AI to your curriculum and teaching philosophy</p>
            </motion.div>
            
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    <h3 className="h4 mb-3">Subject-Specific Templates</h3>
                    <p>
                      Get started quickly with templates designed for specific subjects like mathematics, 
                      science, language arts, history, and more. Each template is designed with best 
                      practices for teaching that particular subject area.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="h4 mb-3">Customizable Prompts & Responses</h3>
                    <p>
                      Fine-tune how your AI educator responds to different types of student questions and 
                      interactions. Align the teaching approach with your institution's pedagogical 
                      philosophy and educational goals.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="h4 mb-3">Adaptive Teaching Strategies</h3>
                    <p>
                      Create custom templates that adapt teaching strategies based on individual student 
                      learning styles, progress, and areas needing improvement.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col lg={6}>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Image 
                    src="/illustrations/knowledge-access.svg" 
                    alt="Customizable Templates" 
                    width={400} 
                    height={300} 
                    className="img-fluid" 
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* AI Learning Tools Section - NEW (replacing integrations) */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Innovative Learning Tools</h2>
              <p className="section-subtitle">Next-generation tools to enhance student engagement and comprehension</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {learningTools.map((tool, index) => (
                <Col key={index} md={6} lg={4}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="h-100"
                  >
                    <Card className="border-0 shadow-sm h-100 text-center">
                      <CardBody className="p-4">
                        <div className="mb-3">
                          <div className="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                            <i className={`bi bi-${tool.icon} fs-1 text-primary`}></i>
                          </div>
                          <h3 className="h5 mb-3">{tool.title}</h3>
                          <p className="mb-0">{tool.description}</p>
                        </div>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>
        {/* Call to Action */}
        <section className="py-5 bg-light">
          <Container>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="py-5 px-4 bg-primary text-white rounded-4">
                <h2 className="h1 mb-3">Ready to Transform Education?</h2>
                <p className="lead mb-4">Get started with our AI-powered Education Solution today.</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link href="/waitlist" className="btn btn-warning btn-lg">
                    <i className="bi bi-envelope-check me-2"></i>
                    Join the Waiting List
                  </Link>
                  <Link href="/support" className="btn btn-light btn-lg">
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
    </PageTransition>
  )
} 