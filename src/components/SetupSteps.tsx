'use client';

import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection, { AnimatedItem } from './AnimatedSection';
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, staggerContainerVariant } from '@/lib/animation';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Train Your Agent",
    description: "Quickly train your agent using your website, documents, or custom content. Our intelligent system automatically extracts and structures information.",
    image: "/screenshots/Training/WebsiteTraining-en.png",
    icon: "bi-mortarboard-fill",
    color: "var(--primary)",
    buttonText: "Learn About Training",
    link: "/product/features/training"
  },
  {
    number: 2,
    title: "Customize Appearance",
    description: "Design your chatbot to match your brand with customizable colors, fonts, and styles. Create a seamless experience for your customers.",
    image: "/screenshots/Customization-en.png",
    icon: "bi-palette-fill",
    color: "var(--orange)",
    buttonText: "Explore Customization",
    link: "/product/features/customization"
  },
  {
    number: 3,
    title: "Deploy and Integrate",
    description: "Go live across multiple platforms including your website, WhatsApp, Instagram, and more. Track performance with built-in analytics.",
    image: "/screenshots/Integration-en.png",
    icon: "bi-rocket-takeoff-fill",
    color: "var(--green)",
    buttonText: "Start Integration",
    link: "/product/channels"
  }
];

export default function SetupSteps() {
  return (
    <section className="setup-steps-section">
      <div className="steps-bg-elements">
        <div className="steps-bg-gradient-1"></div>
        <div className="steps-bg-gradient-2"></div>
        <div className="steps-dots"></div>
      </div>
      
      <div className="container">
        <AnimatedSection variants={fadeUpVariant} className="text-center mb-5">
          <h2 className="section-title">Get Started in 3 Simple Steps</h2>
          <p className="section-subtitle">Setting up your AI support agent has never been easier</p>
        </AnimatedSection>

        <div className="steps-timeline">
          <div className="timeline-line"></div>
          
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              variants={fadeUpVariant} 
              delay={index * 0.2} 
              className="step-container"
            >
              <div className={`step-card ${index % 2 === 1 ? 'step-card-alt' : ''}`}>
                <div className="step-content-wrapper">
                  <div className="step-number" style={{ backgroundColor: step.color }}>
                    <span>{step.number}</span>
                  </div>
                  
                  <div className="step-content">
                    <div className="step-icon" style={{ color: step.color }}>
                      <i className={`bi ${step.icon}`}></i>
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                    <Link href={step.link}>
                      <motion.button 
                        className="step-button"
                        style={{ 
                          backgroundColor: `${step.color}15`, 
                          color: step.color, 
                          borderColor: `${step.color}30` 
                        }}
                        whileHover={{ 
                          backgroundColor: step.color,
                          color: 'white',
                          scale: 1.03
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        {step.buttonText}
                        <i className="bi bi-arrow-right ms-2"></i>
                      </motion.button>
                    </Link>
                  </div>
                </div>
                
                <motion.div 
                  className="step-image-wrapper"
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="image-decoration" style={{ backgroundColor: `${step.color}15` }}></div>
                  <div className="image-container">
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      width={600}
                      height={350}
                      className="step-image"
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection variants={fadeUpVariant} delay={1.5} className="text-center mt-5">
          <div className="action-card">
            <div className="action-content">
              <h3 className="action-title">Ready to transform your customer support?</h3>
              <p className="action-text">Be among the first businesses to use SupAgent</p>
            </div>
            
            <Link href="/waitlist">
              <motion.button 
                className="action-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Join the Waiting List</span>
                <i className="bi bi-envelope-check ms-2"></i>
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
} 