'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { bounceVariant, fadeInVariant } from '@/lib/animation';
import AnimatedSection from './AnimatedSection';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // In a real application, you would send this data to your backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <AnimatedSection variants={fadeInVariant}>
      <div className="card border-0 shadow-lg waitlist-card">
        <div className="card-body p-4 p-lg-5">
          {!submitted ? (
            <>
              <h3 className="card-title mb-4">Reserve Your Spot</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address <span className="text-danger">*</span></label>
                  <input
                    type="email"
                    className={`form-control form-control-lg ${error ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="form-label">Company (Optional)</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="company"
                    placeholder="Enter your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-warning btn-lg w-100"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <span>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Submitting...
                    </span>
                  ) : (
                    <span>
                      <i className="bi bi-envelope-check me-2"></i>
                      Join the Waiting List
                    </span>
                  )}
                </motion.button>
              </form>
              
              <div className="mt-4 text-center text-muted small">
                <p>We respect your privacy and will never share your information.</p>
              </div>
            </>
          ) : (
            <motion.div 
              className="text-center py-4"
              variants={bounceVariant}
              initial="hidden"
              animate="visible"
            >
              <div className="checkmark-circle mb-4">
                <i className="bi bi-check-lg text-success"></i>
              </div>
              <h3 className="mb-3">Thank You for Joining!</h3>
              <p className="mb-0">
                We've added you to our waiting list. We'll notify you as soon as we launch!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
} 