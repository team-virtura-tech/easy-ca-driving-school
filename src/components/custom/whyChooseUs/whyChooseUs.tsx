'use client';

import { StaggerAnimation } from '@/components/custom/staggerAnimation';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, Car, Clock, GraduationCap, Shield, Users } from 'lucide-react';

export type Benefit = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Default benefits data
const defaultBenefits: Benefit[] = [
  {
    id: 'certified-instructors',
    title: 'Certified Instructors',
    description:
      'Learn from experienced, licensed professionals with years of teaching expertise and proven track records',
    icon: GraduationCap,
  },
  {
    id: 'flexible-scheduling',
    title: 'Flexible Scheduling',
    description:
      'Choose lesson times that work with your busy schedule - evenings, weekends, and holidays available',
    icon: Clock,
  },
  {
    id: 'modern-vehicles',
    title: 'Modern Vehicles',
    description:
      'Practice in well-maintained, modern cars equipped with the latest safety features and technology',
    icon: Car,
  },
  {
    id: 'safety-first',
    title: 'Safety First Approach',
    description:
      'Our comprehensive safety training ensures you develop defensive driving skills for life-long safe driving',
    icon: Shield,
  },
  {
    id: 'personalized-training',
    title: 'Personalized Training',
    description:
      'Customized lessons tailored to your learning pace and specific areas that need improvement',
    icon: Users,
  },
  {
    id: 'proven-results',
    title: 'Proven Results',
    description:
      'High pass rates and thousands of satisfied students who successfully obtained their driving licenses',
    icon: Award,
  },
];

export type WhyChooseUsProps = {
  benefits?: Benefit[];
  className?: string;
};

export const WhyChooseUs = ({
  benefits = defaultBenefits,
  className,
}: WhyChooseUsProps) => {
  const reduce = useReducedMotion();
  const componentName = 'WhyChooseUs';

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
            Key benefits that set us apart
          </motion.h2>
          <motion.h3
            className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mt-2"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            from other driving schools
          </motion.h3>
        </div>

        {/* Benefits Grid */}
        <StaggerAnimation
          direction="up"
          staggerDelay={0.2}
          duration={0.6}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div key={benefit.id} className="text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </StaggerAnimation>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7 + 6 * 0.2, // 6 benefits * 0.2 stagger delay
            ease: 'easeOut',
          }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your driving journey with the best?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Your First Lesson
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
