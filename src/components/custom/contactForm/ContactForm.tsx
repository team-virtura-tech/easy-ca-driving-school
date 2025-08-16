'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export type ContactFormProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

export const ContactForm = ({ id, className, children }: ContactFormProps) => {
  const componentName = 'ContactForm';
  const rootId = id ?? componentName;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={rootId}
      data-component={componentName}
      className={cn(
        'w-full max-w-screen-sm mx-auto flex flex-col items-center',
        className
      )}
    >
      <div className="relative w-full flex justify-center items-center mb-6 min-h-[300px] md:min-h-[350px] px-4">
        <motion.div
          initial={reduceMotion ? false : { x: '-120%', opacity: 0 }}
          whileInView={reduceMotion ? {} : { x: '0%', opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 35,
            damping: 25,
            duration: 2.2,
            delay: 0.3,
          }}
          className="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2 z-10"
        >
          <div
            className="rounded-2xl p-4 md:p-6 shadow-lg w-[180px] md:w-[220px]"
            style={{ backgroundColor: 'var(--primary-foreground)' }}
          >
            <div className="text-center space-y-2">
              <h3 className="text-sm md:text-base font-semibold text-primary">
                Ready to Start?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Book your first lesson today
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { x: '-100%' }}
          whileInView={reduceMotion ? {} : { x: '85%' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 20,
            duration: 2.0,
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-auto"
        >
          <Image
            src="/images/landing/white-suv.png"
            alt="Contact Car"
            width={280}
            height={110}
            className="object-contain rotate-90"
            priority
          />
        </motion.div>
      </div>
      {children}
    </section>
  );
};
