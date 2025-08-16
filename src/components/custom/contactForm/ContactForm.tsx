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
      <div className="relative w-full flex justify-center items-center mb-6 min-h-[200px]">
        <motion.div
          initial={reduceMotion ? false : { x: '-100%' }}
          whileInView={reduceMotion ? {} : { x: '50%' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 20,
            duration: 2.0,
          }}
          className="relative w-full flex justify-center"
        >
          <Image
            src="/images/landing/white-suv.png"
            alt="Contact Car"
            width={300}
            height={120}
            className="object-contain rotate-90"
            priority
          />
        </motion.div>
      </div>
      {children}
    </section>
  );
};
