'use client';

import Image from 'next/image'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, bounceVariant, staggerContainerVariant } from '@/lib/animation'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <AnimatedSection variants={slideInLeftVariant}>
              <span className="badge bg-light text-primary mb-3">AI-Driven Support Solution</span>
              <h1 className="display-4 fw-bold mb-4">
                Automated Support for Your Business
              </h1>
              <p className="lead mb-4">
                Reduce support burdens and optimize operations with our innovative AI agent-based solution. Perfect for companies and solo entrepreneurs facing increased support demands.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <motion.a 
                  href="#" 
                  className="btn btn-warning btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.a>
                <motion.a 
                  href="#" 
                  className="btn btn-outline-light btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
          <div className="col-lg-6">
            <AnimatedSection variants={staggerContainerVariant} className="hero-image position-relative">
              <AnimatedItem variants={bounceVariant}>
                <Image
                  src="/illustrations/ai-assistant.svg"
                  alt="AI Support Agent"
                  width={500}
                  height={500}
                  className="img-fluid"
                  priority
                />
              </AnimatedItem>
              <AnimatedItem variants={fadeUpVariant} delay={1}>
                <div className="chat-bubble chat-bubble-1">
                  <div className="chat-header d-flex align-items-center text-primary">
                    <i className="bi bi-robot fs-5 me-2 text-primary"></i>
                    <span>Automated First Response</span>
                  </div>
                  <p>Processing data from extensive knowledge base</p>
                </div>
              </AnimatedItem>
              <AnimatedItem variants={fadeUpVariant} delay={2}>
                <div className="chat-bubble chat-bubble-2">
                  <div className="chat-header d-flex align-items-center text-primary">
                    <i className="bi bi-gear fs-5 me-2 text-primary"></i>
                    <span>Workflow Automation</span>
                  </div>
                  <p>Automating repetitive tasks efficiently</p>
                </div>
              </AnimatedItem>
              <AnimatedItem variants={fadeUpVariant} delay={3}>
                <div className="chat-bubble chat-bubble-3">
                  <div className="chat-header d-flex align-items-center text-primary">
                    <i className="bi bi-diagram-3 fs-5 me-2 text-primary"></i>
                    <span>Dynamic Support</span>
                  </div>
                  <p>Seamless escalation to human agents when needed</p>
                </div>
              </AnimatedItem>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
} 