'use client';

import Image from 'next/image'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, scaleUpVariant, staggerContainerVariant } from '@/lib/animation'
import { motion } from 'framer-motion'

export default function Solutions() {
  return (
    <section className="templates-section">
      <div className="container text-center">
        <AnimatedSection variants={fadeUpVariant}>
          <h2 className="display-6 fw-bold mb-4">Solutions for Every Need</h2>
          <p className="lead mb-5">Our AI-driven solution offers comprehensive support across various business needs</p>
        </AnimatedSection>
        
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <AnimatedSection variants={staggerContainerVariant} className="row g-4">
              <div className="col-md-6 col-lg-3">
                <AnimatedItem variants={scaleUpVariant} delay={0}>
                  <motion.div 
                    className="template-card"
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image src="/illustrations/customer-support.svg" alt="Customer Support" width={120} height={120} className="rounded-circle mb-3" />
                    <h5>Customer Support</h5>
                    <p>Automated support for customer inquiries and requests</p>
                  </motion.div>
                </AnimatedItem>
              </div>
              <div className="col-md-6 col-lg-3">
                <AnimatedItem variants={scaleUpVariant} delay={1}>
                  <motion.div 
                    className="template-card" 
                    style={{ borderTop: '4px solid var(--orange)' }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image src="/illustrations/sales-agent.svg" alt="Sales Agent" width={120} height={120} className="rounded-circle mb-3" />
                    <h5 className="text-warning">Sales Agent</h5>
                    <p>AI-powered sales support and lead management</p>
                  </motion.div>
                </AnimatedItem>
              </div>
              <div className="col-md-6 col-lg-3">
                <AnimatedItem variants={scaleUpVariant} delay={2}>
                  <motion.div 
                    className="template-card"
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image src="/illustrations/hr-support.svg" alt="HR Support" width={120} height={120} className="rounded-circle mb-3" />
                    <h5>HR Support</h5>
                    <p>Automated HR processes and employee support</p>
                  </motion.div>
                </AnimatedItem>
              </div>
              <div className="col-md-6 col-lg-3">
                <AnimatedItem variants={scaleUpVariant} delay={3}>
                  <motion.div 
                    className="template-card"
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image src="/illustrations/onboarding.svg" alt="Onboarding Buddy" width={120} height={120} className="rounded-circle mb-3" />
                    <h5>Onboarding Buddy</h5>
                    <p>Streamlined onboarding and training support</p>
                  </motion.div>
                </AnimatedItem>
              </div>
              <div className="col-md-6 col-lg-3">
                <AnimatedItem variants={scaleUpVariant} delay={4}>
                  <motion.div 
                    className="template-card"
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image src="/illustrations/education.svg" alt="Education" width={120} height={120} className="rounded-circle mb-3" />
                    <h5>Education</h5>
                    <p>AI-powered educational support and guidance</p>
                  </motion.div>
                </AnimatedItem>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
} 