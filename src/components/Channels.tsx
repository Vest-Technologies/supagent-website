'use client';

import Image from 'next/image'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, bounceVariant, staggerContainerVariant } from '@/lib/animation'
import { motion } from 'framer-motion'

export default function Channels() {
  return (
    <section className="demo-section">
      <div className="container text-center">
        <AnimatedSection variants={fadeUpVariant}>
          <h2 className="demo-title mb-5" style={{ color: 'var(--primary)' }}>Multi-Channel Deployment</h2>
        </AnimatedSection>
        
        <AnimatedSection variants={staggerContainerVariant} className="row g-4">
          <div className="col-md-4 col-lg-3">
            <AnimatedItem variants={bounceVariant} delay={0}>
              <div className="channel-card phone-agent">
                <div className="card-inner">
                  <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                    <Image src="/illustrations/web.svg" alt="Web Integration" width={150} height={300} className="img-fluid" />
                    <h5 className="mt-3"><i className="bi bi-globe"></i> Web</h5>
                  </motion.div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          <div className="col-md-4 col-lg-3">
            <AnimatedItem variants={bounceVariant} delay={1}>
              <div className="channel-card whatsapp-agent">
                <div className="card-inner">
                  <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                    <Image src="/illustrations/whatsapp.svg" alt="WhatsApp Integration" width={150} height={300} className="img-fluid" />
                    <h5 className="mt-3"><i className="bi bi-whatsapp"></i> WhatsApp</h5>
                  </motion.div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          <div className="col-md-4 col-lg-3">
            <AnimatedItem variants={bounceVariant} delay={2}>
              <div className="channel-card messenger-agent">
                <div className="card-inner">
                  <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                    <Image src="/illustrations/instagram.svg" alt="Instagram Integration" width={150} height={300} className="img-fluid" />
                    <h5 className="mt-3"><i className="bi bi-instagram"></i> Instagram</h5>
                  </motion.div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          <div className="col-md-4 col-lg-3">
            <AnimatedItem variants={bounceVariant} delay={3}>
              <div className="channel-card voice-agent">
                <div className="card-inner">
                  <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                    <Image src="/illustrations/messenger.svg" alt="Messenger Integration" width={150} height={300} className="img-fluid" />
                    <h5 className="mt-3"><i className="bi bi-messenger"></i> Messenger</h5>
                  </motion.div>
                </div>
              </div>
            </AnimatedItem>
          </div>
          <div className="col-md-4 col-lg-3">
            <AnimatedItem variants={bounceVariant} delay={4}>
              <div className="channel-card agent-app">
                <div className="card-inner">
                  <motion.div whileHover={{ y: -10, transition: { duration: 0.3 } }}>
                    <Image src="/illustrations/slack.svg" alt="Slack Integration" width={150} height={300} className="img-fluid" />
                    <h5 className="mt-3"><i className="bi bi-slack"></i> Slack</h5>
                  </motion.div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </AnimatedSection>
        
        <AnimatedSection variants={fadeUpVariant} delay={1} className="mt-5">
          <motion.a 
            href="#" 
            className="btn btn-primary btn-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Channels
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  )
} 