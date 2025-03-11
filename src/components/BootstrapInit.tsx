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

      // First, clean up any existing event listeners
      const cleanupListeners = () => {
        document.querySelectorAll('.navbar-toggler, .dropdown-toggle, .dropdown-item').forEach(
          (element) => {
            const clone = element.cloneNode(true);
            if (element.parentNode) {
              element.parentNode.replaceChild(clone, element);
            }
          }
        );
      };

      // Clean up existing listeners
      cleanupListeners();

      // Handle navigation of actual links (not dropdown toggles)
      const handleNavigation = () => {
        // Select ALL actual links within the navbar, including those inside dropdowns
        const navLinks = document.querySelectorAll('#navbarNav a.nav-link:not(.dropdown-toggle), #navbarNav a.dropdown-item');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            // Only close navbar for actual navigation links (not toggle buttons)
            if (window.innerWidth < 992 && navbarCollapse && navbarCollapse.classList.contains('show')) {
              // Close navbar when clicking on a link
              const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
              bsCollapse.hide();
            }
          });
        });
      };

      // Handle submenus
      const handleSubmenus = () => {
        document.querySelectorAll('.dropdown-item.dropdown-submenu').forEach(submenuToggle => {
          submenuToggle.addEventListener('click', (e) => {
            if (window.innerWidth < 992) {
              // Only prevent default for the button itself, not its children
              const target = e.target as Element; // Type assertion for TypeScript
              if (target === submenuToggle || target.tagName === 'SPAN') {
                e.preventDefault();
                e.stopPropagation();
                
                const submenu = submenuToggle.querySelector('.submenu');
                if (submenu) {
                  // Close all other submenus and remove active class
                  document.querySelectorAll('.submenu.show').forEach(menu => {
                    if (menu !== submenu) {
                      menu.classList.remove('show');
                      const parentToggle = menu.closest('.dropdown-submenu');
                      if (parentToggle) {
                        parentToggle.classList.remove('active');
                      }
                    }
                  });
                  
                  // Toggle this submenu and active class
                  submenu.classList.toggle('show');
                  submenuToggle.classList.toggle('active');
                }
              }
            }
          });

          // Add direct click handlers to the links inside submenu to ensure they work
          const submenuLinks = submenuToggle.querySelectorAll('.submenu .dropdown-item');
          submenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
              // Don't stop propagation, allow the link to work naturally
              if (window.innerWidth < 992) {
                // Close navbar when clicking on a link
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                  const bsCollapse = new window.bootstrap.Collapse(navbarCollapse);
                  bsCollapse.hide();
                }
              }
            });
          });
        });
      };

      // Handle top-level dropdowns
      const handleDropdowns = () => {
        const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
          // Remove existing instances if any
          const instance = window.bootstrap.Dropdown.getInstance(toggle);
          if (instance) {
            instance.dispose();
          }
          
          // Create new instance
          new window.bootstrap.Dropdown(toggle);
          
          // Add custom handler for mobile
          toggle.addEventListener('click', (e) => {
            if (window.innerWidth < 992) {
              // Get current dropdown
              const currentDropdown = toggle.parentElement;
              
              // Close other dropdowns
              document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
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
            }
          });
        });
      };

      // Initialize everything
      handleNavigation();
      handleSubmenus();
      handleDropdowns();
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