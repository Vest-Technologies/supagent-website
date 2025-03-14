'use client';

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, scaleUpVariant, staggerContainerVariant } from '@/lib/animation'
import { motion } from 'framer-motion'

const solutions = [
  {
    title: 'Customer Support',
    icon: '/illustrations/customer-support.svg',
    description: 'Automated support for customer inquiries and requests',
    color: 'var(--primary)',
    delay: 0,
    link: '/solutions/customer-support'
  },
  {
    title: 'Sales Agent',
    icon: '/illustrations/sales-agent.svg',
    description: 'AI-powered sales support and lead management',
    color: 'var(--orange)',
    delay: 1,
    link: '/solutions/sales-agent'
  },
  {
    title: 'HR Support',
    icon: '/illustrations/hr-support.svg',
    description: 'Automated HR processes and employee support',
    color: 'var(--green)',
    delay: 2,
    link: '/solutions/hr-support'
  },
  {
    title: 'Onboarding Buddy',
    icon: '/illustrations/onboarding.svg',
    description: 'Streamlined onboarding and training support',
    color: 'var(--blue)',
    delay: 3,
    link: '/solutions/onboarding-buddy'
  },
  {
    title: 'Education',
    icon: '/illustrations/education.svg',
    description: 'AI-powered educational support and guidance',
    color: 'var(--secondary)',
    delay: 4,
    link: '/solutions/education'
  }
];

export default function Solutions() {
  return (
    <section className="solutions-section py-5">
      <div className="container">
        <AnimatedSection variants={fadeUpVariant} className="text-center mb-5">
          <h2 className="section-title">Solutions for Every Need</h2>
          <p className="section-subtitle">Our AI-driven agent solutions offers comprehensive support across various business needs</p>
        </AnimatedSection>
        
        <div className="row">
          <div className="col-12">
            <AnimatedSection variants={staggerContainerVariant} className="solutions-wrapper">
              {solutions.map((solution, index) => (
                <AnimatedItem variants={scaleUpVariant} delay={solution.delay} key={index}>
                  <motion.div 
                    className="solution-card"
                    style={{ 
                      borderTopColor: solution.color,
                    }}
                    whileHover={{ 
                      y: -10,
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="solution-icon" style={{ backgroundColor: `${solution.color}20` }}>
                      <Image src={solution.icon} alt={solution.title} width={60} height={60} />
                    </div>
                    <h5 className="solution-title" style={{ color: solution.color }}>{solution.title}</h5>
                    <p className="solution-desc">{solution.description}</p>
                    <Link href={solution.link}>
                      <motion.button 
                        className="solution-btn"
                        style={{ backgroundColor: `${solution.color}15`, color: solution.color }}
                        whileHover={{ 
                          backgroundColor: solution.color,
                          color: 'white',
                          transition: { duration: 0.3 }
                        }}
                      >
                        Learn more
                        <i className="bi bi-arrow-right ms-2"></i>
                      </motion.button>
                    </Link>
                  </motion.div>
                </AnimatedItem>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
} 