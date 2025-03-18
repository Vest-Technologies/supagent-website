'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, bounceVariant, staggerContainerVariant } from '@/lib/animation'
import { motion, useAnimate, useInView } from 'framer-motion'

export default function Hero() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true, margin: "-100px 0px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const animateElements = async () => {
        // Use querySelector to check if elements exist before animating
        const heroGradient1 = document.querySelector(".hero-gradient-1");
        const heroGradient2 = document.querySelector(".hero-gradient-2");
        const heroParticles = document.querySelector(".hero-particles");
        
        if (heroGradient1) {
          await animate(".hero-gradient-1", { opacity: [0, 0.7] }, { duration: 1.2, ease: "easeOut" });
        }
        
        if (heroGradient2) {
          await animate(".hero-gradient-2", { opacity: [0, 0.5] }, { duration: 0.8, ease: "easeOut" });
        }
        
        if (heroParticles) {
          animate(".hero-particles", { opacity: [0, 1] }, { duration: 2, ease: "easeOut" });
        }
      }
      
      // Use a small timeout to ensure DOM elements are ready
      setTimeout(() => {
        animateElements();
        setHasAnimated(true);
      }, 100);
    }
  }, [isInView, animate, hasAnimated])

  return (
    <section className="hero-section py-0" ref={scope}>
      {/* Background elements */}
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-particles"></div>
      </div>

      <div className="container py-5">
        <div className="row align-items-center min-vh-80">
          <div className="col-lg-5">
            <AnimatedSection variants={slideInLeftVariant}>
              <div className="hero-badge mb-3">
                <span className="badge rounded-pill">
                  <i className="bi bi-stars me-1"></i>
                  AI-Driven Support Solution
                </span>
              </div>
              
              <h1 className="hero-title display-4 fw-bold mb-4">
                Automate Your
                <div className="hero-highlight">Business Support</div>
                With AI Agents
              </h1>
              
              <p className="hero-description lead mb-4">
                Create custom AI agents with <motion.span
                  className="text-primary fw-bold"
                  style={{ 
                    background: 'linear-gradient(120deg, #1e95e0 0%, #084f7e 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  SupAgent
                </motion.span> for any business need - from customer support to sales, HR, and education. Our agents learn continuously, work 24/7, and reduce operational costs by up to 60%.
              </p>
              <div className="hero-actions d-flex flex-wrap gap-3">
                <motion.a 
                  href="/waitlist" 
                  className="btn btn-warning btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="bi bi-envelope-check me-2"></i>
                  Join the Waiting List
                </motion.a>
                <motion.div 
                  className="no-card-info d-flex align-items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <i className="bi bi-hourglass-split me-2 text-warning"></i>
                  <span>Coming Soon</span>
                </motion.div>
              </div>
              
              <div className="hero-stats d-flex flex-wrap gap-4 mt-4">
                <div className="hero-stat">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-value">60%</div>
                  <div className="stat-label">Cost Reduction</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Integrations</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="col-lg-7">
            <div className="hero-showcase">
              <AnimatedSection variants={fadeUpVariant} className="position-relative">
                <div className="assistant-background">
                  <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1.0}}
                    transition={{ duration: 0.5 }}
                  >
                    <Image 
                      src="/illustrations/blond-assistant-holding-laptop.png"
                      alt="AI Assistant"
                      width={600}
                      height={600}
                      className="assistant-image"
                    />
                  </motion.div>
                </div>
                
                <motion.div 
                  className="hero-screen-wrapper"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="screen-decoration top-left"></div>
                  <div className="screen-decoration top-right"></div>
                  <div className="screen-decoration bottom-left"></div>
                  <div className="screen-decoration bottom-right"></div>
                  
                  <div className="screen-frame">
                    <Image
                      src="/screenshots/Customization-en.png"
                      alt="SupAgent Customization Interface"
                      width={750}
                      height={500}
                      className="screen-image"
                      priority
                    />
                  </div>
                  
                  <motion.div 
                    className="screen-reflection"
                    animate={{ 
                      opacity: [0, 0.15, 0.1],
                      x: ["0%", "100%"],
                    }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "mirror",
                      repeatDelay: 1
                    }}
                  />
                </motion.div>
                
                <AnimatedItem variants={fadeUpVariant} delay={1} className="feature-floating-element feature-element-1">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon">
                      <i className="bi bi-palette-fill"></i>
                    </div>
                    <div className="feature-text">
                      <span>Customizable Appearance</span>
                    </div>
                  </div>
                </AnimatedItem>
                
                <AnimatedItem variants={fadeUpVariant} delay={1.5} className="feature-floating-element feature-element-2">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon">
                      <i className="bi bi-translate"></i>
                    </div>
                    <div className="feature-text">
                      <span>Multi-language Support</span>
                    </div>
                  </div>
                </AnimatedItem>
                
                <AnimatedItem variants={fadeUpVariant} delay={2} className="feature-floating-element feature-element-3">
                  <div className="d-flex align-items-center">
                    <div className="feature-icon">
                      <i className="bi bi-lightning-charge-fill"></i>
                    </div>
                    <div className="feature-text">
                      <span>Quick Integration</span>
                    </div>
                  </div>
                </AnimatedItem>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 