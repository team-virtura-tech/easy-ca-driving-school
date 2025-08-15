'use client';

import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
};

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'New Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'The instructors were incredibly patient and professional. I passed my test on the first try thanks to their excellent guidance and teaching methods.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mike Chen',
    role: 'Student',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'Amazing experience! The flexible scheduling and modern teaching techniques made learning to drive stress-free and enjoyable.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Professional Driver',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'I needed to refresh my driving skills and this school exceeded my expectations. Highly recommend their professional courses.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Kumar',
    role: 'New Driver',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'The best driving school in the area! Their safety-first approach and comprehensive curriculum gave me confidence on the road.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Professional, reliable, and effective. The instructors truly care about your success and safety. Passed my test with flying colors!',
    rating: 5,
  },
];

export type TestimonialsCarouselProps = {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
};

export const TestimonialsCarousel = ({
  testimonials = defaultTestimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: TestimonialsCarouselProps) => {
  const reduce = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  const componentName = 'TestimonialsCarousel';

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(nextTestimonial, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextTestimonial]);

  // Function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase();
  };

  // Avatar component with fallback to initials
  const Avatar = ({
    src,
    alt,
    name,
    size = 'md',
  }: {
    src: string;
    alt: string;
    name: string;
    size?: 'sm' | 'md' | 'lg';
  }) => {
    const [imageError, setImageError] = useState(false);
    const sizeClasses = {
      sm: 'h-8 w-8 text-xs',
      md: 'h-12 w-12 text-sm',
      lg: 'h-16 w-16 text-lg',
    };

    if (imageError) {
      return (
        <div
          className={cn(
            'flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold',
            sizeClasses[size]
          )}
        >
          {getInitials(name)}
        </div>
      );
    }

    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
          sizeClasses[size]
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={size === 'sm' ? '32px' : size === 'md' ? '48px' : '64px'}
          onError={() => setImageError(true)}
        />
      </div>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          'h-4 w-4',
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        )}
      />
    ));
  };

  return (
    <motion.section
      id={componentName}
      data-component={componentName}
      className={cn(
        'relative bg-gray-50 dark:bg-gray-900/50 py-16 md:py-20',
        className
      )}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Real stories from drivers who learned with us
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            className="mx-auto max-w-4xl"
            initial={reduce ? false : { opacity: 0, x: 20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl bg-white dark:bg-gray-800 p-8 md:p-12 shadow-lg">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="pt-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    name={testimonials[currentIndex].name}
                    size="md"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:-translate-x-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:translate-x-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                index === currentIndex
                  ? 'bg-blue-600 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Small Preview Cards for Desktop */}
        <div className="hidden lg:block mt-12">
          <div className="flex justify-center gap-4 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => {
              if (index === currentIndex) return null;

              const isAdjacent =
                index ===
                  (currentIndex - 1 + testimonials.length) %
                    testimonials.length ||
                index === (currentIndex + 1) % testimonials.length;

              if (!isAdjacent) return null;

              return (
                <motion.button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className="flex-1 max-w-sm rounded-xl bg-white/50 dark:bg-gray-800/50 p-4 text-left transition-all hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  animate={reduce ? {} : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      name={testimonial.name}
                      size="sm"
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
