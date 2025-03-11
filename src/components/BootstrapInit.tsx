'use client';

import { useEffect } from 'react';

export default function BootstrapInit() {
  useEffect(() => {
    // Function to initialize navbar toggler
    const initNavbar = () => {
      // Check if Bootstrap is available
      if (typeof window === 'undefined' || !window.bootstrap) {
        console.warn('Bootstrap not available yet');
        return;
      }

      // Initialize Collapse for navbar toggler
      const initNavbarToggler = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
          // Initialize the collapse component
          new window.bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
        }
      };

      // Initialize navbar toggler
      initNavbarToggler();
    };

    // Run initialization with a delay to ensure Bootstrap is loaded
    let attempts = 0;
    const maxAttempts = 10;
    const checkBootstrapInterval = 300; // ms

    const bootstrapCheck = setInterval(() => {
      attempts++;
      
      if (typeof window !== 'undefined' && window.bootstrap) {
        clearInterval(bootstrapCheck);
        initNavbar();
      } else if (attempts >= maxAttempts) {
        clearInterval(bootstrapCheck);
        console.error('Bootstrap not available after multiple attempts');
      }
    }, checkBootstrapInterval);

    // Clean up interval on component unmount
    return () => {
      clearInterval(bootstrapCheck);
    };
  }, []);

  return null;
}

// Add this to TypeScript global scope
declare global {
  interface Window {
    bootstrap: any;
  }
} 