'use client';

import { StandardFaq, type FaqItem } from '@/components/custom/common';
import { Badge } from '@/components/ui/badge';
import { BRAND_INFO } from '@/constants/brandInfo';
import { motion, useReducedMotion } from 'framer-motion';
import { HelpCircle, MessageCircle, Phone } from 'lucide-react';

// Comprehensive FAQ data for the driving school
const generalFaqItems: FaqItem[] = [
  {
    id: 'how-to-get-started',
    question: 'How do I get started with driving lessons?',
    answer:
      "Getting started is easy! Simply contact us through our website or call us directly. We'll discuss your needs, schedule availability, and match you with one of our certified instructors. We serve students throughout the Bay Area including Milpitas, Fremont, San Jose, and Sunnyvale.",
  },
  {
    id: 'what-age-can-start',
    question: 'What age can I start driving lessons?',
    answer:
      "In California, you can start driver education at any age, but you must be at least 15½ years old to take the DMV permit test. We recommend starting lessons after you've obtained your learner's permit, which allows you to practice with our professional instructors.",
  },
  {
    id: 'do-you-provide-car',
    question: 'Do you provide a car for lessons and the driving test?',
    answer:
      'Yes! We provide safe, reliable, and fully insured vehicles for both driving lessons and DMV road tests. Our cars are equipped with dual controls for safety and are regularly maintained to ensure the best learning experience.',
  },
  {
    id: 'how-many-lessons-needed',
    question: 'How many driving lessons do I need?',
    answer:
      'The number of lessons varies by individual. Most students need 6-10 lessons to feel confident and ready for their driving test. Factors include prior experience, learning pace, and comfort level. We offer packages that can be customized to your needs.',
  },
  {
    id: 'lesson-duration-cost',
    question: 'How long are lessons and what do they cost?',
    answer:
      'Our standard lessons are 2 hours long, which provides the optimal learning time without fatigue. For current pricing and package deals, please visit our packages & pricing page or contact us directly for personalized quotes.',
  },
  {
    id: 'what-areas-do-you-serve',
    question: 'What areas do you serve?',
    answer:
      "We primarily serve the South Bay area including Milpitas, Fremont, San Jose, Sunnyvale, and surrounding communities. If you don't see your city listed, please contact us as we often accommodate nearby areas.",
  },
  {
    id: 'can-i-use-my-own-car',
    question: 'Can I use my own car for lessons?',
    answer:
      "Yes, you can use your own vehicle for lessons if it meets safety requirements and has valid registration and insurance. However, many students prefer using our cars as they're specifically equipped for instruction and you'll be familiar with the vehicle for your driving test.",
  },
  {
    id: 'what-to-bring-first-lesson',
    question: 'What should I bring to my first lesson?',
    answer:
      "Bring your valid learner's permit (required), comfortable closed-toe shoes (no flip-flops or high heels), and any glasses or contacts if you need them for driving. We'll provide everything else you need for the lesson.",
  },
  {
    id: 'cancellation-policy',
    question: 'What is your cancellation policy?',
    answer:
      'We require at least 24 hours notice for cancellations or rescheduling. This allows us to offer the time slot to other students. Cancellations made with less than 24 hours notice may be subject to a fee.',
  },
  {
    id: 'driving-test-preparation',
    question: 'Do you help prepare for the DMV driving test?',
    answer:
      "Absolutely! Our instructors are experts in DMV test requirements and will ensure you're fully prepared. We practice all test maneuvers, review common test routes, and can even provide our car for your actual DMV test.",
  },
  {
    id: 'nervous-about-driving',
    question: "What if I'm nervous about driving?",
    answer:
      "It's completely normal to feel nervous! Our patient, experienced instructors specialize in helping anxious drivers build confidence. We go at your pace, use positive reinforcement, and create a supportive learning environment.",
  },
  {
    id: 'adult-driving-lessons',
    question: 'Do you offer lessons for adult drivers?',
    answer:
      "Yes! We welcome adult learners of all ages. Whether you're learning to drive for the first time, returning after years away from driving, or want to improve your skills, our instructors will tailor lessons to your specific needs.",
  },
  {
    id: 'behind-wheel-hours-requirement',
    question: 'How many behind-the-wheel hours do I need?',
    answer:
      'California requires teens under 18 to complete 6 hours of professional behind-the-wheel training with a certified instructor, plus 50 hours of practice with a parent or guardian (10 hours must be at night). Adults are not required to take professional lessons but highly benefit from them.',
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, check, and all major credit cards (Visa, MasterCard, American Express, Discover). Payment is typically due at the time of service, though we can discuss payment plans for larger packages.',
  },
  {
    id: 'instructor-qualifications',
    question: 'Are your instructors certified?',
    answer:
      'Yes! All our instructors are DMV-certified, background-checked, and have years of experience. They undergo regular training to stay current with DMV requirements and teaching methods. We take pride in our professional, patient, and skilled instruction team.',
  },
];

export default function FaqsPage() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Hero Section */}
      <motion.section
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={reduce ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 md:py-24"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

        <div className="container relative mx-auto max-w-4xl px-4 md:px-6 text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-primary/10 text-primary border-primary/20"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Frequently Asked Questions
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-slate-900 mb-6">
            Get Your Questions <span className="text-primary">Answered</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Find answers to the most common questions about our driving lessons,
            DMV requirements, and getting your California driver&apos;s license.
            If you don&apos;t see your question here, feel free to contact us
            directly.
          </p>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={reduce ? {} : containerVariants}
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="py-16"
      >
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <StandardFaq
            faqItems={generalFaqItems}
            showCta={true}
            ctaTitle="Still Have Questions?"
            ctaDescription="Can't find the answer you're looking for? Our friendly team is here to help you with any questions about driving lessons, DMV requirements, or getting started."
            primaryCta={{
              text: `Call ${BRAND_INFO.phoneNumber}`,
              href: `tel:${BRAND_INFO.phoneNumberTel}`,
            }}
            secondaryCta={{
              text: 'Contact Us',
              href: '/contact-us',
            }}
          />
        </div>
      </motion.section>

      {/* Additional Help Section */}
      <motion.section
        variants={reduce ? {} : itemVariants}
        initial={reduce ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-lg text-slate-600">
              We&apos;re here to support you throughout your driving journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 border border-slate-200 rounded-lg bg-slate-50">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Call Us Directly
              </h3>
              <p className="text-slate-600 mb-4">
                Speak with our team for immediate assistance
              </p>
              <a
                href={`tel:${BRAND_INFO.phoneNumberTel}`}
                className="text-primary font-semibold hover:underline"
              >
                {BRAND_INFO.phoneNumber}
              </a>
            </div>

            <div className="text-center p-6 border border-slate-200 rounded-lg bg-slate-50">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-slate-600 mb-4">
                Get personalized answers to your specific questions
              </p>
              <a
                href="/contact-us"
                className="text-primary font-semibold hover:underline"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
