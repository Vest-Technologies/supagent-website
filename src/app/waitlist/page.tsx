'use client';

import PageTransition from '@/components/PageTransition'
import WaitlistForm from '../../components/WaitlistForm'
import Image from 'next/image'

export default function WaitlistPage() {
  return (
    <PageTransition>
      <section className="waitlist-section py-5">
        {/* Background elements */}
        <div className="position-absolute top-0 left-0 w-100 h-100">
          <div className="waitlist-gradient-1"></div>
          <div className="waitlist-gradient-2"></div>
          <div className="waitlist-particles"></div>
        </div>
        
        <div className="position-absolute top-0 end-0 mt-5 me-5 d-none d-lg-block">
          <Image 
            src="/illustrations/education.svg" 
            alt="Education Illustration" 
            width={200} 
            height={200}
            className="floating-image"
          />
        </div>
        
        <div className="position-absolute bottom-0 start-0 mb-5 ms-5 d-none d-lg-block">
          <Image 
            src="/illustrations/onboarding.svg" 
            alt="Onboarding Illustration" 
            width={180} 
            height={180}
            className="floating-image-reverse"
          />
        </div>
        
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-5">
              <h1 className="waitlist-title display-4 fw-bold mb-4">
                Join the <span className="text-primary">SupAgent</span> Waiting List
              </h1>
              <p className="waitlist-subtitle lead mb-0">
                Be among the first to experience our revolutionary AI support solution. We'll notify you as soon as we launch!
              </p>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <WaitlistForm />
            </div>
          </div>
          
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center">
              <div className="waiting-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <div className="feature-text">Early Access</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-gift-fill"></i>
                  </div>
                  <div className="feature-text">Exclusive Offers</div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="bi bi-headset"></i>
                  </div>
                  <div className="feature-text">Priority Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
} 