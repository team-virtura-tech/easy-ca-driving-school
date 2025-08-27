'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export type CaliforniaLogoProps = {
  id?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'compact';
};

export const CaliforniaLogo = ({
  id,
  className,
  size = 'md',
  variant = 'full',
}: CaliforniaLogoProps) => {
  const componentName = 'CaliforniaLogo';
  const rootId = id ?? componentName;

  const sizeClasses = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  const iconSizes = {
    sm: 40,
    md: 64,
    lg: 80,
  };

  return (
    <div
      id={rootId}
      data-component={componentName}
      className={cn('flex items-center', className)}
    >
      {/* Driving Icon */}
      <div className="relative">
        <Image
          src="/assets/driving-icon-colored.svg"
          alt="Driving School Icon"
          width={iconSizes[size]}
          height={iconSizes[size]}
          className="object-contain"
          priority
        />
      </div>

      {variant === 'full' && (
        <div className="flex flex-col">
          <div className={cn('font-logo leading-tight', sizeClasses[size])}>
            <span className="text-primary text-2xl">Easy</span>
            <span className="text-foreground text-2xl">California</span>
            <span className="text-foreground text-2xl">Drivers</span>
            <span className="text-primary text-2xl">Ed</span>
            {/* <span className="text-foreground text-2xl">.com</span> */}
          </div>
          <div
            className={cn(
              'text-sm font-medium text-muted-foreground uppercase tracking-wider text-right',
              size === 'lg' && 'text-base',
              size === 'sm' && 'text-xs'
            )}
          >
            CA DMV Approved Drivers Ed!
          </div>
        </div>
      )}

      {variant === 'compact' && (
        <span
          className={cn('font-semibold text-foreground', sizeClasses[size])}
        >
          Easy CA Driving School
        </span>
      )}
    </div>
  );
};
