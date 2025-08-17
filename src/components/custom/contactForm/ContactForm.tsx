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
      className={cn('w-full flex flex-col items-center pt-24', className)}
      style={{ backgroundColor: 'var(--primary-foreground)' }}
    >
      <div className="relative w-full flex justify-center items-center mb-6 min-h-[300px] md:min-h-[350px] px-4">
        <motion.div
          initial={reduceMotion ? false : { x: '0%' }}
          whileInView={reduceMotion ? {} : { x: '50%' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 20,
            duration: 2.0,
          }}
          className="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2"
        >
          <div className="rounded-2xl p-4 md:p-6 w-[180px] md:w-[220px]">
            <div className="text-center space-y-2">
              <h3 className="text-sm md:text-base font-semibold text-primary">
                Ready to Start?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Book your first lesson today
              </p>
              <form className="mt-4 flex flex-col gap-3 text-left">
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="flex-1 rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="flex-1 rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={3}
                  className="rounded-md border border-border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
                <button
                  type="submit"
                  className="mt-2 rounded-md bg-primary text-primary-foreground px-4 py-2 font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={reduceMotion ? false : { x: '-400%' }}
          whileInView={reduceMotion ? {} : { x: '85%' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 20,
            duration: 2.0,
          }}
          className="absolute right-85 top-1/2 -translate-y-1/2 w-auto z-10"
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
