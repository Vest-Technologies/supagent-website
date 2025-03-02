// Animation variants for Framer Motion
import { Variants } from 'framer-motion';

// Fade up animation - elements appear from below with a fade
export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: custom * 0.1 
    }
  })
};

// Fade in animation - simple fade in effect
export const fadeInVariant: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: (custom = 0) => ({ 
    opacity: 1,
    transition: { 
      duration: 0.5,
      delay: custom * 0.1 
    }
  })
};

// Scale up animation - elements grow from smaller size
export const scaleUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: custom * 0.1 
    }
  })
};

// Stagger children animation - for parent containers
export const staggerContainerVariant: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Slide in from left
export const slideInLeftVariant: Variants = {
  hidden: { 
    opacity: 0, 
    x: -50 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: custom * 0.1 
    }
  })
};

// Slide in from right
export const slideInRightVariant: Variants = {
  hidden: { 
    opacity: 0, 
    x: 50 
  },
  visible: (custom = 0) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
      delay: custom * 0.1 
    }
  })
};

// Bounce animation
export const bounceVariant: Variants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (custom = 0) => ({ 
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay: custom * 0.1
    }
  })
}; 