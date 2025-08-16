'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export type FAQProps = {
  className?: string;
};

const faqs = [
  {
    question: 'Do you provide pickup and drop-off service?',
    answer:
      'Yes! All our packages include free pickup and drop-off service within our service area. Our instructors will pick you up from your home, school, or work and return you to the same location after your lesson.',
  },
  {
    question: 'How do I schedule my driving lessons?',
    answer:
      'After booking a package, you can schedule lessons through our online portal or by calling our office. We offer flexible scheduling including evenings and weekends to accommodate your busy schedule.',
  },
  {
    question: 'What happens on DMV test day?',
    answer:
      'For packages that include the DMV road test, we provide the car and an instructor will accompany you to the DMV. We typically schedule a practice lesson right before your test to help you feel confident and prepared.',
  },
  {
    question: 'Can I reschedule or cancel a lesson?',
    answer:
      'Yes, you can reschedule or cancel lessons with at least 24 hours notice without any fees. Same-day cancellations may incur a small fee, except in cases of illness or emergency.',
  },
  {
    question: 'What are the California requirements for teen drivers?',
    answer:
      'California requires teens (ages 15½-17½) to complete at least 6 hours of professional driving instruction and 50 hours of supervised practice (10 hours at night) before taking the DMV road test. Our teen packages meet and exceed these requirements.',
  },
];

export const FAQ = ({ className }: FAQProps) => {
  return (
    <section
      id="FAQ"
      data-component="FAQ"
      className={cn('py-16 md:py-24', className)}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Have questions? We have answers. Find everything you need to know
            about our driving lessons and packages.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border px-6 py-2 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800/50"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-2 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
