'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export type ModernDriversEdLogoProps = {
  id?: string;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'compact' | 'icon';
  animated?: boolean;
  colorScheme?: 'black' | 'orange' | 'gradient';
};

export const ModernDriversEdLogo = ({
  id,
  className,
  size = 'md',
  variant = 'full',
  animated = false,
  colorScheme = 'black',
}: ModernDriversEdLogoProps) => {
  const componentName = 'ModernDriversEdLogo';
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

  const colors = {
    black: {
      primary: '#1f2937', // Gray-800 (near black)
      secondary: '#f97316', // Orange-500
      accent: '#fb923c', // Orange-400
      text: '#111827', // Gray-900
    },
    orange: {
      primary: '#ea580c', // Orange-600
      secondary: '#1f2937', // Gray-800
      accent: '#fed7aa', // Orange-200
      text: '#1f2937', // Gray-800
    },
    gradient: {
      primary: '#1f2937', // Gray-800
      secondary: '#f97316', // Orange-500
      accent: '#fb923c', // Orange-400
      text: '#111827', // Gray-900
    },
  };

  const currentColors = colors[colorScheme] || colors.black;

  const LogoIcon = ({ size }: { size: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
          fill={
            colorScheme === 'gradient'
              ? 'url(#capGradient)'
              : currentColors.primary
          }
        />

        {/* Cap Top */}
        <path
          d="M22 35 L50 27 L78 35 L78 42 L50 34 L22 42 Z"
          fill={
            colorScheme === 'gradient'
              ? 'url(#capTopGradient)'
              : currentColors.secondary
          }
          opacity="0.9"
        />

        {/* Tassel */}
        <circle cx="75" cy="42" r="2" fill={currentColors.accent} />
        <line
          x1="75"
          y1="44"
          x2="75"
          y2="50"
          stroke={currentColors.accent}
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
          stroke={
            colorScheme === 'gradient'
              ? 'url(#wheelGradient)'
              : currentColors.primary
          }
          strokeWidth="4"
        />

        {/* Inner Ring */}
        <circle
          cx="50"
          cy="65"
          r="18"
          fill="none"
          stroke={currentColors.secondary}
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Center Hub */}
        <circle
          cx="50"
          cy="65"
          r="6"
          fill={
            colorScheme === 'gradient'
              ? 'url(#hubGradient)'
              : currentColors.primary
          }
        />

        {/* Spokes */}
        <g
          stroke={currentColors.secondary}
          strokeWidth="3"
          strokeLinecap="round"
        >
          <line x1="50" y1="47" x2="50" y2="59" />
          <line x1="35.5" y1="57.5" x2="44.5" y2="61.5" />
          <line x1="64.5" y1="57.5" x2="55.5" y2="61.5" />
        </g>
      </motion.g>

      {/* Gradients */}
      <defs>
        <linearGradient id="capGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={currentColors.primary} />
          <stop offset="100%" stopColor={currentColors.secondary} />
        </linearGradient>
        <linearGradient id="capTopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={currentColors.secondary} />
          <stop offset="100%" stopColor={currentColors.accent} />
        </linearGradient>
        <linearGradient id="wheelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={currentColors.primary} />
          <stop offset="50%" stopColor={currentColors.secondary} />
          <stop offset="100%" stopColor={currentColors.accent} />
        </linearGradient>
        <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={currentColors.secondary} />
          <stop offset="100%" stopColor={currentColors.primary} />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <motion.div
      id={rootId}
      className={cn('flex items-center', sizeConfig[size].spacing, className)}
      initial={animated ? { scale: 0, rotate: -180 } : {}}
      animate={animated ? { scale: 1, rotate: 0 } : {}}
      transition={
        animated
          ? {
              type: 'spring',
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }
          : {}
      }
    >
      {/* Icon */}
      <motion.div
        className="flex-shrink-0"
        initial={animated ? { scale: 0, rotate: -180 } : {}}
        animate={animated ? { scale: 1, rotate: 0 } : {}}
        transition={
          animated
            ? {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }
            : {}
        }
      >
        <LogoIcon size={sizeConfig[size].iconSize} />
      </motion.div>

      {/* Text */}
      {variant !== 'icon' && (
        <motion.div
          className="flex flex-col"
          initial={animated ? { opacity: 0, x: -20 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={
            animated
              ? {
                  duration: 0.6,
                  delay: 0.3,
                  ease: 'easeOut',
                }
              : {}
          }
        >
          <div
            className={cn('font-bold leading-tight', sizeConfig[size].textSize)}
            style={{ color: currentColors.text }}
          >
            {variant === 'compact' ? (
              'Easy CA Drivers Ed'
            ) : (
              <>
                Easy{' '}
                <span style={{ color: currentColors.primary }}>California</span>
                <br />
                <span style={{ color: currentColors.secondary }}>
                  Drivers Education
                </span>
              </>
            )}
          </div>
          {variant === 'full' && (
            <div
              className={cn(
                'font-medium opacity-75 mt-1',
                sizeConfig[size].subTextSize
              )}
              style={{ color: currentColors.secondary }}
            >
              Learn • Practice • Pass
            </div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};
