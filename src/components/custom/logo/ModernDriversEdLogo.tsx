'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LogoIcon } from './LogoIcon';
import {
  COLOR_SCHEMES,
  SIZE_CONFIGS,
  type LogoColorSchemeName,
  type LogoSize,
  type LogoVariant,
} from './types';

export type ModernDriversEdLogoProps = {
  id?: string;
  className?: string;
  size?: LogoSize;
  variant?: LogoVariant;
  animated?: boolean;
  colorScheme?: LogoColorSchemeName;
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

  const sizeConfig = SIZE_CONFIGS[size];
  const currentColors = COLOR_SCHEMES[colorScheme];

  const renderMainContent = () => {
    if (variant === 'icon') {
      return (
        <LogoIcon
          size={sizeConfig.iconSize}
          colorScheme={currentColors}
          animated={animated}
        />
      );
    }

    return (
      <div className="flex items-center gap-0">
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
          <LogoIcon
            size={sizeConfig.iconSize * 1.15} // Slightly reduce the multiplier
            colorScheme={currentColors}
            animated={animated}
          />
        </motion.div>

        {/* Main Text */}
        <motion.div
          className="flex flex-col justify-center ml-1"
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
            className={cn('font-bold leading-tight', sizeConfig.textSize)}
            style={{ color: currentColors.text }}
          >
            {variant === 'compact' ? (
              'Easy CA Drivers Ed'
            ) : (
              <>
                <span style={{ color: currentColors.secondary }}>Easy </span>
                California
                <br />
                Drivers{' '}
                <span style={{ color: currentColors.secondary }}>Ed</span>
              </>
            )}
          </div>
        </motion.div>
      </div>
    );
  };

  const renderTagline = () => {
    if (variant !== 'full') return null;

    return (
      <motion.div
        className="text-center mt-1"
        initial={animated ? { opacity: 0, y: 10 } : {}}
        animate={animated ? { opacity: 1, y: 0 } : {}}
        transition={
          animated
            ? {
                duration: 0.6,
                delay: 0.5,
                ease: 'easeOut',
              }
            : {}
        }
      >
        <div
          className={cn(
            'font-medium text-muted-foreground uppercase -tracking-normal mt-0.5',
            sizeConfig.subTextSize
          )}
          // className={cn('font-medium opacity-75', sizeConfig.subTextSize)}
          style={{ color: currentColors.secondary }}
        >
          Learn • Practice • Pass
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      id={rootId}
      data-component={componentName}
      className={cn('flex flex-col items-center justify-center', className)}
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
      {/* Main Content: Icon + Text centered */}
      {renderMainContent()}

      {/* Tagline at bottom */}
      {renderTagline()}
    </motion.div>
  );
};
