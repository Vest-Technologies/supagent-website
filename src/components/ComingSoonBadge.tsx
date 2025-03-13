'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ComingSoonBadgeProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  rotate?: number;
}

export default function ComingSoonBadge({
  position = 'top-right',
  size = 'medium',
  color = '#ff8e03',
  rotate = -15,
}: ComingSoonBadgeProps) {
  // Determine size classes
  const sizeClass = {
    small: 'text-xs py-1 px-2',
    medium: 'text-sm py-1 px-3',
    large: 'text-base py-2 px-4'
  }[size];
  
  // Determine position styles
  const positionStyles = {
    'top-right': { top: '0.5rem', right: '0.5rem' },
    'top-left': { top: '0.5rem', left: '0.5rem' },
    'bottom-right': { bottom: '0.5rem', right: '0.5rem' },
    'bottom-left': { bottom: '0.5rem', left: '0.5rem' }
  }[position];
  
  return (
    <motion.div
      className="coming-soon-badge"
      style={{
        position: 'absolute',
        zIndex: 10,
        ...positionStyles,
        transform: `rotate(${rotate}deg)`
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ 
        type: 'spring',
        stiffness: 500,
        damping: 20
      }}
    >
      <div 
        className={`font-bold ${sizeClass} rounded-lg shadow-md`}
        style={{ 
          backgroundColor: color,
          color: 'white'
        }}
      >
        COMING SOON
      </div>
    </motion.div>
  );
} 