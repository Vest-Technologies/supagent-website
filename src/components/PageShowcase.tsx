'use client';

import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection, { AnimatedItem } from './AnimatedSection';
import { fadeUpVariant, slideInLeftVariant, slideInRightVariant, scaleUpVariant, staggerContainerVariant } from '@/lib/animation';
import { motion, AnimatePresence } from 'framer-motion';

// Define the page options
const pageOptions = [
  { id: 'training', name: 'Training', image: '/screenshots/Training/WebsiteTraining-en.png' },
  { id: 'analytics', name: 'Analytics', image: '/screenshots/Analytics/Main-en.png' },
  { id: 'personality', name: 'Personality', image: '/screenshots/Personality-en.png' },
  { id: 'customization', name: 'Customization', image: '/screenshots/Customization/Template-en.png' },
  { id: 'chats', name: 'Chats', image: '/screenshots/Chats-en.png' }
];

export default function PageShowcase() {
  const [activeTab, setActiveTab] = useState('training');

  const getActivePage = () => {
    return pageOptions.find(page => page.id === activeTab) || pageOptions[0];
  };

  return (
    <section className="page-showcase-section py-5">
      <div className="container">
        <AnimatedSection variants={fadeUpVariant}>
          <h2 className="section-title text-center mb-5">Explore Our Features</h2>
          
          {/* Mobile Tabs - Horizontal scrolling buttons for small screens */}
          <div className="d-md-none page-tabs-mobile mb-4">
            <div className="scroll-container">
              {pageOptions.map((page) => (
                <motion.button
                  key={page.id}
                  className={`tab-button ${activeTab === page.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(page.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`bi bi-${getIconForPage(page.id)}`}></i>
                  <span>{page.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="row align-items-center">
          {/* Desktop sidebar - Hidden on mobile */}
          <div className="col-lg-4 d-none d-md-block">
            <AnimatedSection variants={slideInLeftVariant}>
              <p className="lead mb-4">
                Discover the powerful features that make SupAgent the perfect AI assistant for your business.
              </p>
              
              <div className="nav flex-column feature-nav" role="tablist">
                {pageOptions.map((page) => (
                  <motion.button
                    key={page.id}
                    className={`nav-link text-start my-2 ${activeTab === page.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(page.id)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="feature-icon me-3">
                        <i className={`bi bi-${getIconForPage(page.id)}`}></i>
                      </div>
                      <div>
                        <h5 className="mb-0">{page.name}</h5>
                        <small>{getDescriptionForPage(page.id)}</small>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          <div className="col-lg-8">
            <AnimatedSection variants={slideInRightVariant}>
              <div className="showcase-content">
                <div className="screenshot-container fixed-height-container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="screenshot-frame"
                    >
                      <div className="image-wrapper">
                        <Image
                          src={getActivePage().image}
                          alt={getActivePage().name}
                          fill
                          sizes="(max-width: 768px) 100vw, 800px"
                          className="feature-image"
                          priority={activeTab === 'training'}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <div className="screenshot-info">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-md-none">
                        <h4 className="mb-1">{getActivePage().name}</h4>
                        <p className="text-muted mb-0">{getDescriptionForPage(getActivePage().id)}</p>
                      </div>
                      <div className="screenshot-badge">
                        <span>{getActivePage().name}</span>
                      </div>
                    </div>
                    
                    <div className="feature-detail d-md-none mt-3">
                      <p className="feature-description">
                        {getFeatureDetailForPage(getActivePage().id)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper functions for UI elements
function getIconForPage(id: string): string {
  switch (id) {
    case 'training':
      return 'globe';
    case 'analytics':
      return 'graph-up';
    case 'personality':
      return 'person-bounding-box';
    case 'customization':
      return 'palette';
    case 'chats':
      return 'chat-dots';
    default:
      return 'gear';
  }
}

function getDescriptionForPage(id: string): string {
  switch (id) {
    case 'training':
      return 'Train your AI with your own content';
    case 'analytics':
      return 'Track performance and user engagement';
    case 'personality':
      return 'Customize AI personality for your brand';
    case 'customization':
      return 'Design the perfect look and feel';
    case 'chats':
      return 'Manage conversations and interactions';
    default:
      return '';
  }
}

function getFeatureDetailForPage(id: string): string {
  switch (id) {
    case 'training':
      return 'Easily train your AI by simply providing your own content. Our system will automatically extract and structure the content to create a knowledge base for your assistant.';
    case 'analytics':
      return 'Get detailed insights into your assistant\'s performance, user engagement metrics, and conversation quality to continually optimize your support experience.';
    case 'personality':
      return 'Choose from over 100 pre-defined personalities or create your own custom tone of voice to perfectly match your brand identity and communication style.';
    case 'customization':
      return 'Fully customize your chatbot\'s appearance with your brand colors, fonts, and styles to create a seamless experience for your customers.';
    case 'chats':
      return 'Manage all your conversations in one place, with easy access to history, user information, and the ability to take over conversations when needed.';
    default:
      return '';
  }
} 