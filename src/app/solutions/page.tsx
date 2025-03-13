'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col, Card, CardBody } from '@/components/BootstrapClient';
import { motion } from 'framer-motion';
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

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Customer Support',
      description: 'Automated support for customer inquiries and requests, reducing response time and improving satisfaction.',
      image: '/illustrations/customer-support.svg',
      link: '/solutions/customer-support',
      highlight: false
    },
    {
      title: 'Sales Agent',
      description: 'AI-powered sales support and lead management to boost conversion rates and streamline sales processes.',
      image: '/illustrations/sales-agent.svg',
      link: '/solutions/sales-agent',
      highlight: true
    },
    {
      title: 'HR Support',
      description: 'Automated HR processes and employee support for efficient workforce management and improved employee experience.',
      image: '/illustrations/hr-support.svg',
      link: '/solutions/hr-support',
      highlight: false
    },
    {
      title: 'Onboarding Buddy',
      description: 'Streamlined onboarding and training support to help new employees integrate quickly and effectively.',
      image: '/illustrations/onboarding.svg',
      link: '/solutions/onboarding-buddy',
      highlight: false
    },
    {
      title: 'Education',
      description: 'AI-powered educational support and guidance for enhanced learning experiences and knowledge retention.',
      image: '/illustrations/education.svg',
      link: '/solutions/education',
      highlight: false
    }
  ]

  return (
    <PageTransition>
      <main className="solutions-page">
        <section className="page-showcase-section py-5 bg-light">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <h1 className="section-title mb-4">Solutions for Every Business Need</h1>
                  <p className="section-subtitle mb-4">
                    Our AI-driven platform offers comprehensive support across various business functions, 
                    helping you automate processes and improve efficiency.
                  </p>
                  <div className="d-flex gap-3 flex-wrap">
                    <Link href="/waitlist" className="btn btn-primary btn-lg">
                      Get Started
                    </Link>
                    <Link href="#solutions" className="btn btn-outline-primary btn-lg">
                      Explore Solutions
                    </Link>
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
                    src="/illustrations/solutions.svg" 
                    alt="SupAgent Solutions" 
                    width={500} 
                    height={400} 
                    className="img-fluid hero-image" 
                  />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5" id="solutions">
          <Container>
            <motion.div
              className="text-center mb-5"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="section-title">Explore Our Solutions</h2>
              <p className="section-subtitle"><i className="bi bi-stars"></i> Find the perfect fit for your business needs</p>
            </motion.div>
            
            <motion.div
              className="row g-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {solutions.map((solution, index) => (
                <Col key={index} md={6} lg={4}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ y: -15, transition: { duration: 0.3 } }}
                    className="h-100"
                  >
                    <Card className={`h-100 shadow-sm border-0 hover-card ${solution.highlight ? 'border-top border-warning border-4' : ''}`}>
                      <CardBody className="text-center p-4">
                        <motion.div
                          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                          <Image 
                            src={solution.image} 
                            alt={solution.title} 
                            width={120} 
                            height={120} 
                            className="mb-3" 
                          />
                        </motion.div>
                        <h3 className={`h4 mb-3 ${solution.highlight ? 'text-warning' : ''}`}>{solution.title}</h3>
                        <p className="mb-4">{solution.description}</p>
                        <Link href={solution.link} className={`btn ${solution.highlight ? 'btn-warning' : 'btn-primary'}`}>
                          Learn More
                        </Link>
                      </CardBody>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Container>
        </section>

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
                <h2 className="h1 mb-3">Not Sure Which Solution Fits Your Needs?</h2>
                <p className="lead mb-4">Our team of experts is ready to help you find the perfect solution for your business.</p>
                <Link href="/support" className="btn btn-lg btn-warning">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
    </PageTransition>
  )
} 