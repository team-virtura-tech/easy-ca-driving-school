'use client';

import { cn } from '@/lib/utils';
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import Image from 'next/image';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export type ContactFormProps = {
  id?: string;
  className?: string;
  children?: React.ReactNode;
};

// NOTE: Do not change the component name per user request
export const ContactForm = ({ id, className, children }: ContactFormProps) => {
  const componentName = 'ContactForm';
  const rootId = id ?? componentName;
  const reduceMotion = useReducedMotion();

  const rootRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const carRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { amount: 0.2, once: true });

  const controls = useAnimation();
  const [formVisible, setFormVisible] = useState(false);
  const [isNarrow, setIsNarrow] = useState(true);

  // Metrics for robust positioning
  const [metrics, setMetrics] = useState({ carW: 0, viewW: 0 });
  const [carSize, setCarSize] = useState(340); // default car width, will update on resize
  const gap = 16; // right padding so the car never kisses the edge

  const measure = useCallback(() => {
    const vw = typeof window !== 'undefined' ? window.innerWidth : 0;

    // Set isNarrow based on 1150px breakpoint
    setIsNarrow(vw <= 1150);

    // Dynamically adjust car size depending on viewport width
    let newCarSize = 280;
    if (vw < 640) newCarSize = 220;
    else if (vw < 768) newCarSize = 260;
    else if (vw < 980) newCarSize = 260;
    else if (vw < 1024) newCarSize = 300;
    else if (vw < 1070) newCarSize = 250;
    else if (vw < 1200) newCarSize = 300;
    else newCarSize = 360;
    setCarSize(newCarSize);

    const cw = newCarSize;
    setMetrics({ carW: cw, viewW: vw });
  }, []);

  // Keep metrics updated (layout + resize)
  useLayoutEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  // Compute where to start and end so the car never gets cut off, across FULL viewport width
  const computePositions = useCallback(() => {
    const { carW, viewW } = metrics;
    if (!carW || !viewW) return { fromX: 0, toX: 0 };
    const fromX = -(carW + 40); // fully off-screen to the left
    const toX = Math.max(0, viewW - carW - gap); // stop fully inside on right
    return { fromX, toX };
  }, [metrics]);

  // Kick off the sequence when in view & metrics ready
  useEffect(() => {
    if (!inView) return;
    const { fromX, toX } = computePositions();
    if (!Number.isFinite(fromX) || !Number.isFinite(toX)) return;

    const run = async () => {
      if (reduceMotion) {
        await controls.set({ x: toX, opacity: 1 });
        setFormVisible(true);
        return;
      }

      await controls.set({ x: fromX, opacity: 1 });
      await controls.start({
        x: toX,
        transition: {
          type: 'spring',
          stiffness: 60,
          damping: 16,
          duration: 1.4,
        },
      });
      setFormVisible(true);
    };

    run();
  }, [computePositions, controls, inView, reduceMotion]);

  return (
    <section
      id={rootId}
      ref={rootRef}
      data-component={componentName}
      className={cn(
        'w-full flex flex-col items-center pt-20 lg:pt-24',
        className
      )}
      style={{ backgroundColor: 'var(--primary-foreground)' }}
    >
      {/* FULL-BLEED LAYER: road + car animate across the entire viewport width */}
      <div
        ref={trackRef}
        className="relative w-screen min-h-[260px] md:min-h-[320px] lg:min-h-[360px]"
      >
        {/* Road background (stretches full width) */}
        <div className="absolute inset-0 bg-gradient-to-r from-background to-muted/40 border-y border-primary/20" />

        {/* Car (floats above form; allowed to overlap) */}
        <motion.div
          ref={carRef}
          animate={controls}
          initial={{ x: 0, opacity: 0 }}
          className={cn(
            'pointer-events-none select-none flex justify-center',
            isNarrow
              ? 'hidden -translate-x-1/1 relative mb-4' // ≤1150px: centered above form
              : 'absolute -top-1/6 z-10 -translate-x-1/2' // >1150px: let animation handle x positioning
          )}
          style={{ width: `${carSize}px` }} // Use dynamic width to match animation
        >
          <Image
            src="/images/landing/white-suv.png"
            alt="Animated car"
            width={carSize}
            height={carSize}
            className="w-full h-auto object-contain rotate-90"
            priority
          />
        </motion.div>

        {/* CONTENT LAYER: on mobile form goes below car */}
        <div className="relative z-0 w-full">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6">
            <div
              className={cn(
                'items-start gap-6 py-4 md:py-6',
                isNarrow
                  ? 'flex flex-col' // Full width on narrow screens
                  : 'flex flex-col lg:grid lg:grid-cols-[minmax(360px,520px)_1fr]' // Grid layout on wide screens
              )}
            >
              <motion.div
                aria-live="polite"
                initial={
                  reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                }
                animate={formVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={cn(
                  'bg-background rounded-2xl border border-primary/30 shadow-sm p-5 md:p-6',
                  isNarrow
                    ? 'w-full' // Full width when narrow
                    : 'order-2 lg:order-1' // Grid positioning when wide
                )}
              >
                <div className="mb-4 text-left">
                  <h3 className="text-base md:text-lg font-semibold text-primary">
                    Ready to Start?
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
              </motion.div>

              {/* Spacer column for car on desktop */}
              {!isNarrow && (
                <div
                  className="hidden lg:block order-1 lg:order-2"
                  aria-hidden
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
};
