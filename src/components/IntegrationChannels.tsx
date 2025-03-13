'use client';

import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection, { AnimatedItem } from './AnimatedSection'
import { fadeUpVariant, bounceVariant, staggerContainerVariant, slideInLeftVariant, slideInRightVariant } from '@/lib/animation'
import { motion } from 'framer-motion'
import ComingSoonBadge from './ComingSoonBadge'

const integrations = [
  { name: 'Zapier', icon: 'bi-lightning', color: '#FF4A00', link: '/product/channels/web#integrations' },
  { name: 'Make.com', icon: 'bi-gear-wide-connected', color: '#5A4CEE', link: '/product/channels/web#integrations' },
  { name: 'Shopify', icon: 'bi-bag', color: '#7AB55C', link: '/product/channels/web#integrations' },
  { name: 'WordPress', icon: 'bi-wordpress', color: '#21759B', link: '/product/channels/web#integrations' },
  { name: 'WooCommerce', icon: 'bi-cart3', color: '#96588A', link: '/product/channels/web#integrations' },
  { name: 'Trendyol', icon: 'bi-shop', color: '#FF6000', link: '/product/channels/web#integrations' }
];

const channels = [
  { name: 'Website', icon: 'bi-globe', color: '#1e95e0', available: true, link: '/product/channels/web' },
  { name: 'WhatsApp', icon: 'bi-whatsapp', color: '#25D366', available: false, link: '/product/channels/whatsapp' },
  { name: 'Messenger', icon: 'bi-messenger', color: '#0084FF', available: false, link: '/product/channels/messenger' },
  { name: 'Instagram', icon: 'bi-instagram', color: '#E1306C', available: false, link: '/product/channels/instagram' },
  { name: 'Telegram', icon: 'bi-telegram', color: '#0088cc', available: false, link: '/product/channels/web#telegram' },
  { name: 'Email', icon: 'bi-envelope', color: '#EA4335', available: false, link: '/product/channels/web#email' }
];

export default function IntegrationChannels() {
  return (
    <section className="integration-channels-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <AnimatedSection variants={fadeUpVariant}>
              <h2 className="section-title">Connect Everywhere That Matters</h2>
              <p className="section-subtitle mx-auto">Deploy your AI assistant across multiple platforms and integrate with your favorite tools</p>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-7">
            <AnimatedSection variants={slideInLeftVariant}>
              <div className="channels-panel mb-4">
                <div className="panel-header d-flex align-items-center mb-3">
                  <div className="panel-icon me-3">
                    <i className="bi bi-chat-dots-fill"></i>
                  </div>
                  <h3 className="panel-title mb-0">Communication Channels</h3>
                </div>
                
                <div className="logo-grid">
                  {channels.map((channel, index) => (
                    <div key={index} className="logo-item position-relative">
                      {channel.available ? (
                        <Link href={channel.link} className="text-decoration-none">
                          <div 
                            className="integration-icon" 
                            style={{ backgroundColor: 'white', color: channel.color }}
                          >
                            <i className={channel.icon}></i>
                          </div>
                          <span className="logo-name">{channel.name}</span>
                        </Link>
                      ) : (
                        <>
                          <div 
                            className="integration-icon" 
                            style={{ backgroundColor: 'white', color: channel.color }}
                          >
                            <i className={channel.icon}></i>
                          </div>
                          <ComingSoonBadge 
                            position="top-right" 
                            size="small" 
                            color="#FF3D57" 
                            rotate={-15} 
                          />
                          <span className="logo-name">{channel.name}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="integrations-panel">
                <div className="panel-header d-flex align-items-center mb-3">
                  <div className="panel-icon me-3">
                    <i className="bi bi-puzzle-fill"></i>
                  </div>
                  <h3 className="panel-title mb-0">Platform Integrations</h3>
                </div>
                
                <div className="logo-grid">
                  {integrations.map((integration, index) => (
                    <div key={index} className="logo-item position-relative">
                      <div 
                        className="integration-icon" 
                        style={{ backgroundColor: 'white', color: integration.color }}
                      >
                        <i className={integration.icon}></i>
                      </div>
                      <ComingSoonBadge 
                        position="top-right" 
                        size="small" 
                        color="#FF3D57" 
                        rotate={-15} 
                      />
                      <span className="logo-name">{integration.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="col-lg-5">
            <AnimatedSection variants={slideInRightVariant}>
              <div className="chatbot-preview-wrapper d-flex justify-content-center">
                <div className="chatbot-preview enlarged-preview">
                  <Image
                    src="/screenshots/Language/Language-en.png"
                    alt="SupAgent Chatbot"
                    width={400}
                    height={600}
                    className="chatbot-screenshot"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
} 