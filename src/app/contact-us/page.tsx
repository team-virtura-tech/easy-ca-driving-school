'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ContactForm } from './ContactForm';

export default function ContactUsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* max-w-screen-xl  p-6 */}
      <div className="mx-auto md:p-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-[#F7F5EE] shadow-2xl"
        >
          {/* Decorative corner tabs */}
          <div className="absolute left-6 top-0 h-12 w-1 bg-gradient-to-b from-purple-500 to-purple-600 opacity-60" />
          <div className="absolute right-6 top-0 h-12 w-1 bg-gradient-to-b from-purple-500 to-purple-600 opacity-60" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Column - Left Side */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="relative h-[40vh] overflow-hidden rounded-2xl lg:col-span-4 lg:h-auto lg:min-h-[600px]"
            >
              <Image
                src="/images/landing/student-driving.jpg"
                alt="Mother and child learning together at a computer, representing family-focused driving education"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </motion.div>

            {/* Form Column - Right Side (Wider) */}
            <div className="p-6 md:p-10 lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
