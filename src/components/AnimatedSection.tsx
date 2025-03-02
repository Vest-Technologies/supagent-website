'use client';

import { ReactNode } from 'react';
import { motion, Variants, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  variants,
  className = '',
  delay = 0,
  once = true,
  threshold = 0.1
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// For animating individual items in a staggered container
export function AnimatedItem({
  children,
  variants,
  className = '',
  delay = 0
}: Omit<AnimatedSectionProps, 'once' | 'threshold'>) {
  return (
    <motion.div
      variants={variants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
} 