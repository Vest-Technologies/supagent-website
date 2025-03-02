'use client';

import Image from 'next/image'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, scaleUpVariant, staggerContainerVariant } from '@/lib/animation'

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <AnimatedSection variants={slideInLeftVariant}>
              <h2 className="display-6 fw-bold mb-4">Powerful Features for AI Support</h2>
              <p className="lead mb-4">
                Our solution integrates both internal and outsourced support functionalities to streamline operations and optimize resource allocation.
              </p>
              <a href="#" className="btn btn-primary btn-lg">Explore Features</a>
            </AnimatedSection>
          </div>
          <div className="col-lg-6">
            <AnimatedSection variants={staggerContainerVariant} className="row g-4">
              <div className="col-md-6">
                <AnimatedItem variants={scaleUpVariant} delay={0}>
                  <div className="feature-card">
                    <div className="icon-wrapper" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                      <i className="bi bi-book"></i>
                    </div>
                    <h5>Training</h5>
                    <p>Extensive and continuously updated knowledge base</p>
                  </div>
                </AnimatedItem>
              </div>
              <div className="col-md-6">
                <AnimatedItem variants={scaleUpVariant} delay={1}>
                  <div className="feature-card">
                    <div className="icon-wrapper">
                      <i className="bi bi-sliders"></i>
                    </div>
                    <h5>Customization</h5>
                    <p>Tailor agents to match your specific requirements</p>
                  </div>
                </AnimatedItem>
              </div>
              <div className="col-md-6">
                <AnimatedItem variants={scaleUpVariant} delay={2}>
                  <div className="feature-card">
                    <div className="icon-wrapper">
                      <i className="bi bi-translate"></i>
                    </div>
                    <h5>Multilanguage</h5>
                    <p>Support for multiple languages including Turkish</p>
                  </div>
                </AnimatedItem>
              </div>
              <div className="col-md-6">
                <AnimatedItem variants={scaleUpVariant} delay={3}>
                  <div className="feature-card">
                    <div className="icon-wrapper" style={{ backgroundColor: 'var(--secondary)', color: 'white' }}>
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <h5>Analytics</h5>
                    <p>Track and optimize support performance</p>
                  </div>
                </AnimatedItem>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
} 