'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export type EasyDriversEdLogoProps = {
  id?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'icon';
  animated?: boolean;
};

export const EasyDriversEdLogo = ({
  id,
  className,
  size = 'md',
  variant = 'full',
  animated = false,
}: EasyDriversEdLogoProps) => {
  const componentName = 'EasyDriversEdLogo';
  const rootId = id ?? componentName;

  const sizeConfig = {
    xs: {
      iconSize: 28,
      textSize: 'text-sm',
      subTextSize: 'text-xs',
      spacing: 'space-x-2',
    },
    sm: {
      iconSize: 36,
      textSize: 'text-base',
      subTextSize: 'text-xs',
      spacing: 'space-x-3',
    },
    md: {
      iconSize: 48,
      textSize: 'text-xl',
      subTextSize: 'text-sm',
      spacing: 'space-x-4',
    },
    lg: {
      iconSize: 64,
      textSize: 'text-2xl',
      subTextSize: 'text-base',
      spacing: 'space-x-4',
    },
    xl: {
      iconSize: 80,
      textSize: 'text-3xl',
      subTextSize: 'text-lg',
      spacing: 'space-x-5',
    },
  };

  const config = sizeConfig[size];

  const LogoIcon = () => {
    // Create unique IDs for gradients to avoid conflicts when multiple logos are rendered
    const gradientId1 = `primaryGradient-${rootId}`;
    const gradientId2 = `accentGradient-${rootId}`;
    const filterId = `glow-${rootId}`;

    return (
      <motion.div
        initial={animated ? { scale: 0.8, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative flex-shrink-0"
      >
        <svg
          width={config.iconSize}
          height={config.iconSize}
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient
              id={gradientId1}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient
              id={gradientId2}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Circle - Modern Container */}
          <circle
            cx="40"
            cy="40"
            r="36"
            fill={`url(#${gradientId1})`}
            stroke="#e5e5e5"
            strokeWidth="0.5"
            filter={`url(#${filterId})`}
          />

          {/* Inner Circle - Background for content */}
          <circle cx="40" cy="40" r="28" fill="#ffffff" opacity="0.95" />

          {/* Steering Wheel - Modern Design */}
          <g transform="translate(40, 40)">
            {/* Outer rim */}
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="none"
              stroke={`url(#${gradientId2})`}
              strokeWidth="2.5"
            />

            {/* Inner hub */}
            <circle cx="0" cy="0" r="5" fill={`url(#${gradientId1})`} />

            {/* Spokes - Modern minimalist style */}
            <line
              x1="-10"
              y1="0"
              x2="10"
              y2="0"
              stroke="#ea580c"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="-10"
              x2="0"
              y2="10"
              stroke="#ea580c"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Direction indicator - subtle arrow */}
            <polygon points="0,-3 2,-1 0,1 -2,-1" fill="#ffffff" />
          </g>

          {/* Speed/Progress indicator - Modern accent */}
          <path
            d="M 20 60 Q 40 66 60 60"
            fill="none"
            stroke={`url(#${gradientId2})`}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Small indicator dots */}
          <circle cx="25" cy="62" r="1.5" fill="#ea580c" />
          <circle cx="40" cy="64" r="1.5" fill="#ea580c" />
          <circle cx="55" cy="62" r="1.5" fill="#ea580c" />
        </svg>
      </motion.div>
    );
  };

  const CompanyText = () => (
    <motion.div
      initial={animated ? { opacity: 0, x: -20 } : false}
      animate={animated ? { opacity: 1, x: 0 } : false}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
      className="flex flex-col justify-center"
    >
      <div
        className={cn(
          'font-bold leading-tight tracking-tight',
          config.textSize
        )}
      >
        <span className="text-primary">Easy</span>
        <span className="text-foreground ml-1">California</span>
      </div>
      <div
        className={cn(
          'font-bold leading-tight tracking-tight',
          config.textSize
        )}
      >
        <span className="text-foreground">Drivers</span>
        <span className="text-primary ml-1">Ed</span>
      </div>
      <div
        className={cn(
          'font-medium text-muted-foreground uppercase tracking-wider mt-0.5',
          config.subTextSize
        )}
      >
        Professional • Safe • Easy
      </div>
    </motion.div>
  );

  const CompactText = () => (
    <motion.div
      initial={animated ? { opacity: 0, x: -10 } : false}
      animate={animated ? { opacity: 1, x: 0 } : false}
      transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
      className="flex items-center"
    >
      <span className={cn('font-bold text-foreground', config.textSize)}>
        Easy CA <span className="text-primary">Drivers Ed</span>
      </span>
    </motion.div>
  );

  if (variant === 'icon') {
    return (
      <div
        id={rootId}
        data-component={componentName}
        className={cn('inline-flex', className)}
      >
        <LogoIcon />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        id={rootId}
        data-component={componentName}
        className={cn('inline-flex items-center', config.spacing, className)}
      >
        <LogoIcon />
        <CompactText />
      </div>
    );
  }

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn('inline-flex items-center', config.spacing, className)}
    >
      <LogoIcon />
      <CompanyText />
    </div>
  );
};
