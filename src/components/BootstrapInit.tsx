'use client';

import { useEffect, useLayoutEffect } from 'react';

// Use a shim for useLayoutEffect in SSR environments
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function BootstrapInit() {
  useIsomorphicLayoutEffect(() => {
    // Function to initialize all the navbar functionality
    const initNavbar = () => {
      // Check if Bootstrap is available
      if (typeof window === 'undefined' || !window.bootstrap) {
        console.warn('Bootstrap not available yet');
        return;
      }

      // Clean up any existing Bootstrap instances
      const cleanupBootstrapInstances = () => {
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
          const instance = window.bootstrap.Dropdown.getInstance(toggle);
          if (instance) {
            instance.dispose();
          }
        });
      };

      // Clean up existing instances
      cleanupBootstrapInstances();

      // Initialize top-level dropdowns
      const initDropdowns = () => {
        const dropdownToggles = document.querySelectorAll('.nav-link.dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
          // Create new dropdown instance
          new window.bootstrap.Dropdown(toggle);
          
          // Add custom handler for mobile
          toggle.addEventListener('click', () => {
            if (window.innerWidth < 992) {
              // Get current dropdown
              const currentDropdown = toggle.parentElement;
              
              // Close other dropdowns
              document.querySelectorAll('.nav-item.dropdown').forEach(dropdown => {
                if (dropdown !== currentDropdown && dropdown.querySelector('.dropdown-menu.show')) {
                  const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                  if (dropdownToggle) {
                    const instance = window.bootstrap.Dropdown.getInstance(dropdownToggle);
                    if (instance) {
                      instance.hide();
                    }
                  }
                }
              });

              // Close any open submenus when opening a new top-level dropdown
              document.querySelectorAll('.submenu.show').forEach(submenu => {
                submenu.classList.remove('show');
                const parentToggle = submenu.closest('.dropdown-submenu');
                if (parentToggle) {
                  parentToggle.classList.remove('active');
                }
              });
            }
          });
        });
      };

      // Initialize Collapse for navbar toggler
      const initNavbarToggler = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
          navbarToggler.addEventListener('click', () => {
            // Close any open dropdowns when toggling the navbar
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
              const dropdownToggle = menu.previousElementSibling;
              if (dropdownToggle && dropdownToggle.classList.contains('dropdown-toggle')) {
                const instance = window.bootstrap.Dropdown.getInstance(dropdownToggle);
                if (instance) {
                  instance.hide();
                }
              }
            });
          });
        }
      };

      // Initialize everything
      initDropdowns();
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