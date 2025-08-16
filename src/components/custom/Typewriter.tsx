'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export type TypewriterProps = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
};

export const Typewriter = ({
  text,
  delay = 0,
  speed = 50,
  className,
  onComplete,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        },
        currentIndex === 0 ? delay : speed
      );

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, speed, onComplete]);

  return (
    <span className={cn('inline-block', className)}>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="inline-block"
      >
        |
      </motion.span>
    </span>
  );
};
