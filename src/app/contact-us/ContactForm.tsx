'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useReducedMotion } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { TopicChip } from './TopicChip';

const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(30, 'First name must be less than 30 characters'),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(30, 'Last name must be less than 30 characters'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s()+.-]+$/.test(val),
      'Please enter a valid phone number'
    ),
  email: z.string().email('Please enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  topics: z.array(z.string()).max(6, 'Please select up to 6 topics').optional(),
  company: z.string().optional(), // honeypot
});

type ContactFormData = z.infer<typeof contactSchema>;

const topicOptions = [
  'Packages & Pricing',
  'Schedule / Reschedule',
  'Behind-the-Wheel Lessons',
  'DMV Test Prep (Permit/Road)',
  'Online Driver’s Ed / Traffic School',
  'Car for Road Test',
  'Other (tell us more)',
];

export type ContactFormProps = {
  id?: string;
  className?: string;
};

export const ContactForm = ({ id, className }: ContactFormProps) => {
  const reduceMotion = useReducedMotion();
  const componentName = 'ContactForm';
  const rootId = id ?? componentName;

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { executeRecaptcha, isReady } = useRecaptcha();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      topics: [],
    },
  });

  const handleTopicToggle = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];

    setSelectedTopics(newTopics);
    setValue('topics', newTopics);
  };

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.company) {
      return; // Silently reject bot submissions
    }

    setIsSubmitting(true);

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form_submit');
      if (!recaptchaToken) {
        throw new Error('reCAPTCHA verification failed. Please try again.');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          name: `${data.firstName} ${data.lastName}`, // Combine first and last name
          topics: selectedTopics,
          recaptchaToken, // Include reCAPTCHA token
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      // Success
      toast.success("Thanks! We'll reply within 1 business day.");

      // Reset form
      reset();
      setSelectedTopics([]);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to send message'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      id={rootId}
      data-component={componentName}
      onSubmit={handleSubmit(onSubmit)}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={cn('space-y-6', className)}
    >
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Get in touch with us
        </h1>
        <p className="text-lg text-muted-foreground">
          We&apos;re here to answer your doubts and questions
        </p>
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        {...register('company')}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] opacity-0"
        aria-hidden="true"
      />

      {/* Name Fields - First and Last Name in a row */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-base font-medium">
            First name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="John"
            autoComplete="given-name"
            data-form-type="contact"
            className={cn(
              'py-3 text-base',
              errors.firstName &&
                'border-destructive focus-visible:ring-destructive'
            )}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            {...register('firstName')}
          />
          {errors.firstName && (
            <p
              id="firstName-error"
              role="alert"
              className="text-sm text-destructive"
            >
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-base font-medium">
            Last name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="Doe"
            autoComplete="family-name"
            className={cn(
              'py-3 text-base',
              errors.lastName &&
                'border-destructive focus-visible:ring-destructive'
            )}
            aria-invalid={errors.lastName ? 'true' : 'false'}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            {...register('lastName')}
          />
          {errors.lastName && (
            <p
              id="lastName-error"
              role="alert"
              className="text-sm text-destructive"
            >
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-base font-medium">
          Phone number
          <span className="ml-1 text-sm text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          inputMode="tel"
          placeholder="555-000-0000"
          autoComplete="tel"
          className={cn(
            'py-3 text-base',
            errors.phone && 'border-destructive focus-visible:ring-destructive'
          )}
          aria-invalid={errors.phone ? 'true' : 'false'}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          {...register('phone')}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="text-sm text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base font-medium">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@gmail.com"
          autoComplete="email"
          className={cn(
            'py-3 text-base',
            errors.email && 'border-destructive focus-visible:ring-destructive'
          )}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          {...register('email')}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-base font-medium">
          How can we help?
        </Label>
        <Textarea
          id="message"
          placeholder="Write here..."
          rows={5}
          className={cn(
            'resize-y py-3 text-base',
            errors.message &&
              'border-destructive focus-visible:ring-destructive'
          )}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-sm text-destructive"
          >
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Topic Chips */}
      <div className="space-y-3">
        <Label className="text-base font-medium">
          Topics you&apos;re interested in
          <span className="ml-1 text-sm text-muted-foreground">(optional)</span>
        </Label>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {topicOptions.map((topic, index) => (
            <motion.div
              key={topic}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.6 + index * 0.1,
                ease: 'easeOut',
              }}
            >
              <TopicChip
                topic={topic}
                isSelected={selectedTopics.includes(topic)}
                onToggle={handleTopicToggle}
              />
            </motion.div>
          ))}
        </motion.div>
        {errors.topics && (
          <p role="alert" className="text-sm text-destructive">
            {errors.topics.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="space-y-3 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting || !isReady}
          className="w-full rounded-xl bg-foreground py-3.5 font-medium text-background hover:bg-foreground/90 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit
            </>
          )}
        </Button>

        {/* reCAPTCHA Notice */}
        <div className="text-center text-xs text-muted-foreground">
          This site is protected by reCAPTCHA and the Google{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Terms of Service
          </a>{' '}
          apply.
        </div>

        {/* Privacy Note */}
        <p className="text-center text-sm text-muted-foreground">
          We&apos;ll never share your info.
        </p>
      </div>
    </motion.form>
  );
};
