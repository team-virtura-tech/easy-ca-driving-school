'use client';

import { Button } from '@/components/ui/button';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  Clock,
  GraduationCap,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function AboutUsPage() {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const carouselRef = useRef(null);
  const storyRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const carouselInView = useInView(carouselRef, {
    once: true,
    margin: '-100px',
  });
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });

  const trustFactors = [
    {
      icon: <Shield className="h-6 w-6" />,
      text: 'DMV-Approved Curriculum',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      text: 'Experienced Instructors',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      text: '24/7 Online Learning',
    },
    {
      icon: <Users className="h-6 w-6" />,
      text: 'Affordable Packages',
    },
    {
      icon: <Star className="h-6 w-6" />,
      text: '95% Success Rate',
    },
    {
      icon: <Award className="h-6 w-6" />,
      text: 'Certified Excellence',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Two Column Layout */}
      <section ref={heroRef} className="relative overflow-hidden">
        {/* <div className="container mx-auto px-4 py-16 md:py-24"> */}
        <div className="">
          {/* gap-12 */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ backgroundColor: 'var(--primary-foreground)' }}
          >
            {/* Left Column - Text */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="order-2 lg:order-1 space-y-6 justify-items-center pt-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Driving Made <span className="text-primary">Easy</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl px-12 pb-12">
                We&apos;re California&apos;s premier driving school, founded on
                the belief that learning to drive should be safe, enjoyable, and
                stress-free. Our expert instructors and proven methods have
                helped thousands of students become confident, responsible
                drivers.
              </p>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/landing/student-driving.jpg"
                  alt="Student learning to drive with professional instructor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Factors Carousel (Auto-scrolling trust strip) */}
      <section
        ref={carouselRef}
        className="relative text-white py-3 md:py-4 overflow-hidden"
        style={{ backgroundColor: 'var(--primary)' }}
        aria-label="Why trust us"
      >
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={carouselInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10"
            // style={{
            //   background:
            //     'linear-gradient(to right, var(--primary-foreground), transparent)',
            // }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10"
            // style={{
            //   background:
            //     'linear-gradient(to left, var(--primary-foreground), transparent)',
            // }}
            aria-hidden="true"
          />
          {/* gap-12 */}
          <motion.div
            className="flex items-center min-h-[36px] md:min-h-[40px] px-4"
            style={{ willChange: 'transform' }}
            role="list"
            aria-label="Trust factors carousel"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 22,
              ease: 'linear',
            }}
          >
            {/* Repeat trust factors twice for seamless loop */}
            {[...trustFactors, ...trustFactors].map((factor, idx) => (
              <div
                key={idx + '-' + factor.text}
                className="flex items-center gap-2 text-xs md:text-sm font-medium px-2"
                role="listitem"
                tabIndex={-1}
                aria-label={factor.text}
              >
                <span className="p-1 bg-white/10 rounded-md text-white flex items-center justify-center">
                  {factor.icon}
                </span>
                <span className="whitespace-nowrap">{factor.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section - Alternating Layout */}
      <section ref={storyRef} className="">
        {/* <div className="container mx-auto px-4"> */}
        <div className="">
          {/* gap-12 */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ backgroundColor: 'var(--primary-foreground)' }}
          >
            {/* Image */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, scale: 0.95 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/landing/student-driver.jpg"
                  alt="Happy student celebrating with driving license"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 40 }}
              animate={storyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="justify-items-center space-y-6 pt-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Flexible Schedules, Real Results
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed px-12">
                We understand that every student has unique needs and schedules.
                That&apos;s why we offer flexible lesson times, personalized
                instruction, and comprehensive support throughout your learning
                journey.
              </p>
              <div className="space-y-4 px-12 pb-12">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      95% first-time pass rate
                    </span>{' '}
                    - Our proven teaching methods ensure success
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Flexible scheduling
                    </span>{' '}
                    - Lessons available 7 days a week
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Personal attention
                    </span>{' '}
                    - Customized instruction for every learning style
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        {/* <div className="container mx-auto px-4"> */}
        <div className="">
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of successful students who chose Easy CA Driving
              School for their driver education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">Book Your First Lesson</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about-us/reviews">Read Our Reviews</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
