'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

export type HeroProps = {
  id?: string;
  className?: string;
  firstLine?: string;
  secondLine?: string;
};

export const Hero2 = ({
  id,
  className,
  firstLine = 'PROVIDING SAFE',
  secondLine = '& PROFESSIONAL DRIVING CLASSES',
}: HeroProps) => {
  const reduce = useReducedMotion();
  const componentName = 'Hero';
  const rootId = id ?? componentName;

  return (
    <motion.section
      id={rootId}
      data-component={componentName}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'relative w-full h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <AspectRatio ratio={16 / 9}>
          <Image
            // src="/images/landing/student-driver.jpg"
            // src="/images/landing/istockphoto-183682750-2048x2048.jpg"
            // src="/images/landing/istockphoto-537273937-2048x2048.jpg"
            src="/images/landing/istockphoto-1271357293-2048x2048.jpg"
            alt="Student learning to drive with professional instructor"
            fill
            priority
            // className="object-cover object-center"
            className="rounded-md object-cover"
            // sizes="(max-width: 768px) 100vw,
            //      (max-width: 1280px) 100vw,
            //      100vw"
          />
        </AspectRatio>
        {/* <Image
          // src="/images/landing/student-driver.jpg"
          // src="/images/landing/istockphoto-183682750-2048x2048.jpg"
          // src="/images/landing/istockphoto-537273937-2048x2048.jpg"
          src="/images/landing/istockphoto-1271357293-2048x2048.jpg"
          alt="Student learning to drive with professional instructor"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1280px) 100vw,
                 100vw"
        /> */}
      </div>
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="space-y-2 sm:space-y-4"
        >
          {/* First Line */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
            {firstLine}
          </div>

          {/* Second Line */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#ff6900] drop-shadow-lg">
            {secondLine}
          </div>
        </motion.h1>

        {/* Optional Subtitle */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Learn to drive with confidence from experienced, certified
            instructors
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

<section className="relative h-screen flex items-center justify-center text-center">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/california-drive.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
  <div className="relative z-10 px-6">
    <h1 className="text-5xl md:text-7xl font-bold text-white">
      Drive Confidently, Drive California
    </h1>
    <p className="mt-4 text-xl text-amber-200">
      Expert instructors, flexible lessons, guaranteed results.
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold">
        Start Learning
      </button>
      <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
        Learn More
      </button>
    </div>
  </div>
</section>;
