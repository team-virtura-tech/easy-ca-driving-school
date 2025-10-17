'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Phone } from 'lucide-react';

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type StandardFaqProps = {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  faqItems: FaqItem[];
  showCta?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  primaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
};

export const StandardFaq = ({
  id,
  className,
  title = 'Frequently Asked Questions',
  subtitle = 'Get answers to the most common questions.',
  faqItems,
  showCta = true,
  ctaTitle = 'Still Have Questions?',
  ctaDescription = 'Our friendly customer support team is here to help you. Contact us for personalized assistance.',
  primaryCta = {
    text: 'Call (888) 299-8911',
    href: 'tel:888-299-8911',
  },
  secondaryCta = {
    text: 'Contact Us',
    href: '/contact-us',
  },
}: StandardFaqProps) => {
  const reduce = useReducedMotion();
  const componentName = 'StandardFaq';

  return (
    <section
      id={id ?? componentName}
      data-component={componentName}
      className={cn('bg-muted/30 py-20 md:py-32', className)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {title.includes('Questions') ? (
                <>
                  {title.split('Questions')[0]}
                  <span className="bg-gradient-to-r from-primary to-[var(--brand-orange)] bg-clip-text text-transparent">
                    Questions
                  </span>
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              {subtitle}
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={showCta ? 'mb-16' : ''}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Section */}
          {showCta && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="rounded-2xl border bg-card p-8 shadow-lg md:p-12">
                <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                  {ctaTitle}
                </h3>
                <p className="mb-6 text-muted-foreground md:text-lg">
                  {ctaDescription}
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {primaryCta && (
                    <Button
                      size="lg"
                      className="h-12 bg-[var(--brand-orange)] px-8 text-white hover:bg-[var(--brand-orange)]/90"
                      asChild
                    >
                      <a
                        href={primaryCta.href}
                        {...(primaryCta.external && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                        className="inline-flex items-center gap-2"
                      >
                        {primaryCta.href.startsWith('tel:') && (
                          <Phone className="h-4 w-4" />
                        )}
                        {primaryCta.text}
                        {primaryCta.external && (
                          <ExternalLink className="h-4 w-4" />
                        )}
                      </a>
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 px-8"
                      asChild
                    >
                      <a href={secondaryCta.href}>{secondaryCta.text}</a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
