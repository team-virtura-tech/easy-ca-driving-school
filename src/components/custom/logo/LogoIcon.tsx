'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { LogoColorScheme } from './types';

export type LogoIconProps = {
  size?: number;
  colorScheme: LogoColorScheme;
  animated?: boolean;
  className?: string;
  id?: string;
};

export const LogoIcon = ({
  size = 48,
  colorScheme,
  animated = false,
  className,
  id,
}: LogoIconProps) => {
  // Create a stable gradient ID based on component props or provided id
  const gradientId = useMemo(() => {
    if (id) return `gradient-${id}`;
    // Create a deterministic ID based on size and colorScheme
    const hash =
      `${size}-${colorScheme.primary}-${colorScheme.secondary}`.replace(
        /[^a-zA-Z0-9]/g,
        ''
      );
    return `gradient-logo-${hash}`;
  }, [id, size, colorScheme]);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Graduation Cap */}
      <motion.g
        initial={animated ? { rotate: -10, scale: 0.8 } : {}}
        animate={animated ? { rotate: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Cap Base */}
        <path
          d="M20 35 L50 25 L80 35 L75 40 L50 32 L25 40 Z"
          fill={`url(#${gradientId}-cap)`}
        />

        {/* Cap Top */}
        <path
          d="M22 35 L50 27 L78 35 L78 42 L50 34 L22 42 Z"
          fill={`url(#${gradientId}-capTop)`}
          opacity="0.9"
        />

        {/* Tassel */}
        <circle cx="75" cy="42" r="2" fill={colorScheme.accent} />
        <line
          x1="75"
          y1="44"
          x2="75"
          y2="50"
          stroke={colorScheme.accent}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>

      {/* Steering Wheel */}
      <motion.g
        initial={animated ? { scale: 0.6, opacity: 0 } : {}}
        animate={animated ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Outer Ring */}
        <circle
          cx="50"
          cy="65"
          r="25"
          fill="none"
          stroke={`url(#${gradientId}-wheel)`}
          strokeWidth="4"
        />

        {/* Inner Ring */}
        <circle
          cx="50"
          cy="65"
          r="18"
          fill="none"
          stroke={colorScheme.secondary}
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Center Hub */}
        <circle cx="50" cy="65" r="6" fill={`url(#${gradientId}-hub)`} />

        {/* Spokes */}
        <g stroke={colorScheme.secondary} strokeWidth="3" strokeLinecap="round">
          <line x1="50" y1="47" x2="50" y2="59" />
          <line x1="35.5" y1="57.5" x2="44.5" y2="61.5" />
          <line x1="64.5" y1="57.5" x2="55.5" y2="61.5" />
        </g>
      </motion.g>

      {/* Gradient Definitions */}
      <defs>
        <linearGradient
          id={`${gradientId}-cap`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={colorScheme.primary} />
          <stop offset="100%" stopColor={colorScheme.secondary} />
        </linearGradient>

        <linearGradient
          id={`${gradientId}-capTop`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={colorScheme.secondary} />
          <stop offset="100%" stopColor={colorScheme.accent} />
        </linearGradient>

        <linearGradient
          id={`${gradientId}-wheel`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={colorScheme.primary} />
          <stop offset="50%" stopColor={colorScheme.secondary} />
          <stop offset="100%" stopColor={colorScheme.accent} />
        </linearGradient>

        <linearGradient
          id={`${gradientId}-hub`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={colorScheme.secondary} />
          <stop offset="100%" stopColor={colorScheme.primary} />
        </linearGradient>
      </defs>
    </svg>
  );
};
