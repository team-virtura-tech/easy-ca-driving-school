'use client';

import { cn } from '@/lib/utils';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export type StaggerAnimationProps = {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  staggerDelay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

export const StaggerAnimation = ({
  children,
  className,
  direction = 'up',
  staggerDelay = 0.1,
  duration = 0.6,
  distance = 30,
  once = true,
}: StaggerAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, don't animate
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Define animation variants based on direction
  const getChildVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          ease: 'easeOut' as const,
        },
      },
    };

    switch (direction) {
      case 'up':
        return {
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'down':
        return {
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case 'left':
        return {
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case 'right':
        return {
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case 'scale':
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      case 'fade':
      default:
        return baseVariants;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      data-component="StaggerAnimation"
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={getChildVariants()}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={getChildVariants()}>{children}</motion.div>
      )}
    </motion.div>
  );
};
