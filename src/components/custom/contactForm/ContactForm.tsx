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
      <div className="hidden md:flex relative w-full justify-center items-center mb-6 min-h-[300px] md:min-h-[350px] px-4">
        <motion.div
          initial={reduceMotion ? false : { x: '-600px' }}
          whileInView={reduceMotion ? {} : { x: '20%' }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 20,
            duration: 2.0,
          }}
          className="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2"
        >
          <div className="rounded-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1">
                <div className="text-center md:text-left mb-4">
                  <h3 className="text-sm md:text-base font-semibold text-primary">
                    Ready to Start?
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Book your first lesson today
                  </p>
                </div>
                <form className="flex flex-col gap-3 text-left">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="flex-1 rounded-md border border-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="flex-1 rounded-md border border-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="rounded-md border border-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="rounded-md border border-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    className="rounded-md border border-primary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
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
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                    Let&apos;s Get You On The Road!
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Our certified instructors are ready to help you become a
                    safe and confident driver.
                  </p>
                </div>
              </div>
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
      {/* <div className="flex md:hidden">
        <motion.div
          initial={reduceMotion ? false : { y: 100, opacity: 0 }}
          whileInView={reduceMotion ? {} : { y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            type: 'spring',
            stiffness: 40,
            damping: 20,
            duration: 1.0,
          }}
          className="w-full"
        >
          <div className="rounded-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="flex-1 flex items-center justify-center pb-3">
                <div className="text-center">
                  <h4 className="text-lg md:text-xl font-semibold text-primary mb-2">
                    Let&apos;s Get You On The Road!
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Our certified instructors are ready to help you become a
                    safe and confident driver.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <form className="flex flex-col gap-3 text-left">
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
          </div>
        </motion.div>
      </div> */}
      {children}
    </section>
  );
};
