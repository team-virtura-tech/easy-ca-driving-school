'use client';

import { useEffect, useRef, useState } from 'react';

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import { cn } from '@/lib/utils';

export type AnimateNumberProps = {
  value: number;
  from?: number;
  direction?: 'up' | 'down' | 'auto';
  prefix?: string;
  suffix?: string;
  fractionDigits?: number;
  duration?: number;
  once?: boolean;
  className?: string;
};

export const AnimateNumber = ({
  value,
  from,
  direction = 'auto',
  prefix = '',
  suffix = '',
  fractionDigits = 0,
  duration = 1.4,
  once = true,
  className,
}: AnimateNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });
  const [displayValue, setDisplayValue] = useState(0);

  // Determine the starting value
  const getFromValue = () => {
    if (from !== undefined) return from;

    switch (direction) {
      case 'down':
        return Math.round(value * 1.25);
      case 'up':
        return 0;
      case 'auto':
      default:
        return value > 100 ? Math.round(value * 1.25) : 0;
    }
  };

  const startValue = getFromValue();

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [springValue]);

  useEffect(() => {
    if (isInView) {
      motionValue.set(startValue);
      animate(motionValue, value, {
        duration,
        ease: [0.22, 1, 0.36, 1], // Custom bezier curve
      });
    }
  }, [isInView, motionValue, value, startValue, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    });
  };

  return (
    <motion.span
      ref={ref}
      className={cn('tabular-nums', className)}
      data-component="AnimateNumber"
    >
      {prefix}
      {formatNumber(displayValue)}
      {suffix}
    </motion.span>
  );
};
