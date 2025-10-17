import { AnimateNumber } from '@/components/custom/AnimateNumber';
import { TestimonialsCarousel } from '@/components/custom/testimonialsCarousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Target,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title:
    'DMV Road Tests - Professional Test Preparation | Easy CA Driving School',
  description:
    'Pass your DMV road test on the first try! Our professional instructors provide pickup, preparation, and support. 96% first-time pass rate.',
};

// Custom data for DMV Road Test process
const dmvTestSteps = [
  {
    id: 'schedule' as const,
    title: 'You Schedule Your DMV Test',
    description:
      'Book your DMV road test appointment online or by phone at your preferred DMV location.',
    icon: Calendar,
  },
  {
    id: 'pickup' as const,
    title: 'We Pick You Up',
    description:
      'Our instructor arrives 1 hour before your test to pick you up from your location.',
    icon: Car,
  },
  {
    id: 'preparation' as const,
    title: 'Pre-Test Coaching',
    description:
      'Get familiar with traffic conditions, speed limits, and essential skills on the way to DMV.',
    icon: Target,
  },
  {
    id: 'support' as const,
    title: 'Test Day Support',
    description:
      'We escort you through check-in and wait with you until your test begins.',
    icon: Shield,
  },
];

const benefits = [
  {
    id: 'high-pass-rate',
    title: '96% First-Time Pass Rate',
    description:
      'Our proven preparation method helps students pass their road test on the first attempt.',
    icon: Award,
  },
  {
    id: 'experienced-instructors',
    title: 'Professional Instructors',
    description:
      'Learn from certified instructors with years of experience preparing students for success.',
    icon: Users,
  },
  {
    id: 'convenient-pickup',
    title: 'Door-to-Door Service',
    description:
      'We pick you up and drop you off, making your test day stress-free and convenient.',
    icon: Car,
  },
  {
    id: 'modern-vehicles',
    title: 'Well-Maintained Vehicles',
    description:
      'Take your test in our modern, reliable vehicles equipped with dual controls for safety.',
    icon: Shield,
  },
  {
    id: 'flexible-timing',
    title: 'Flexible Scheduling',
    description:
      'Available for morning, afternoon, and weekend DMV appointments across California.',
    icon: Clock,
  },
  {
    id: 'comprehensive-prep',
    title: 'Complete Test Preparation',
    description:
      'Route familiarization, parallel parking practice, and confidence-building coaching.',
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'I was so nervous about my road test, but the instructor made me feel confident and prepared. Passed on my first try! The pickup service was incredibly convenient.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'New Driver',
    avatar: '/images/landing/student-driving.jpg',
    content:
      'The pre-test coaching was invaluable. My instructor helped me understand exactly what the DMV examiner was looking for. Highly recommend their road test service!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Student',
    avatar: '/images/landing/student-driver.jpg',
    content:
      'Professional, punctual, and effective. The instructor waited for me during the entire test and drove me home afterwards. Worth every penny!',
    rating: 5,
  },
];
export default function DMVRoadTestsPage() {
  return (
    <div data-component="DMVRoadTestsPage" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16 lg:grid-cols-2 lg:items-center">
            {/* Content */}
            <div className="max-w-xl lg:max-w-none">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                96% First-Time Pass Rate
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Pass Your DMV Road Test with{' '}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Professional instructors provide convenient pickup, expert
                preparation, and complete support on your DMV road test day.
                Join thousands of successful drivers who passed on their first
                try.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    <AnimateNumber value={96} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground">Pass Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    <AnimateNumber value={15000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Students Certified
                  </p>
                </div>
                <div className="text-center md:col-span-1 col-span-2">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    <AnimateNumber value={25} suffix=" Years" />
                  </div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="text-base" asChild>
                  <a href="tel:+18889450644">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (888) 945-0644
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base"
                  asChild
                >
                  <Link href="/contact-us">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/dmvRoadTests/dmv-road-tests.jpg"
                    alt="Professional DMV Road Test"
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
                <p className="text-muted-foreground absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/70 px-2 py-1 rounded text-xs">
                  Professional DMV Road Test Image
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              How Our DMV Road Test Service Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We make your DMV road test day stress-free with professional
              pickup, preparation, and support.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {dmvTestSteps.map((step, index) => {
              const stepNumber = String(index + 1).padStart(2, '0');
              const isEven = index % 2 === 1;

              return (
                <div key={step.id} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-5 md:gap-8 md:items-center md:min-h-[280px]">
                    {/* Left Side (2 columns) */}
                    <div className="col-span-2">
                      {!isEven ? (
                        // Odd steps (1, 3): Content on left
                        <div className="space-y-4 text-right">
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        // Even steps (2, 4): Image on left
                        <div className="ml-auto rounded-2xl bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center overflow-hidden">
                          {step.id === 'schedule' ? (
                            <div className="relative aspect-square w-full h-auto">
                              <Image
                                src="/images/dmvRoadTests/scheduling.jpg"
                                alt="Scheduling DMV Test"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                              />
                            </div>
                          ) : step.id === 'pickup' ? (
                            <div className="relative aspect-square w-full h-auto">
                              <Image
                                src="/images/dmvRoadTests/pickup.jpg"
                                alt="Instructor Pickup for DMV Test"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                              />
                            </div>
                          ) : (
                            <div className="relative aspect-square w-full h-auto">
                              <Image
                                src="/images/dmvRoadTests/test-day-support.jpg"
                                alt="Instructor Pickup for DMV Test"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Center Step Number & Line (1 column) */}
                    <div className="col-span-1 flex flex-col items-center justify-start min-h-[280px]">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold z-10 relative mt-4">
                        {stepNumber}
                      </div>
                      {index < dmvTestSteps.length - 1 && (
                        <div className="w-px bg-primary mt-4 flex-1" />
                      )}
                    </div>

                    {/* Right Side (2 columns) */}
                    <div className="col-span-2">
                      {!isEven ? (
                        // Odd steps (1, 3): Image on right
                        <div className="rounded-2xl bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center overflow-hidden">
                          {step.id === 'schedule' ? (
                            <div className="relative aspect-square w-full h-auto">
                              <Image
                                src="/images/dmvRoadTests/scheduling.jpg"
                                alt="Scheduling DMV Test"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                              />
                            </div>
                          ) : step.id === 'pickup' ? (
                            <div className="relative aspect-square w-full h-auto">
                              <Image
                                src="/images/dmvRoadTests/pickup.jpg"
                                alt="Instructor Pickup for DMV Test"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                              />
                            </div>
                          ) : (
                            <div className="relative aspect-square w-full h-auto">
                              <Image
                                src="/images/dmvRoadTests/pre-test-coaching.jpg"
                                alt="Pre-Test Coaching"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                              />
                            </div>
                          )}
                        </div>
                      ) : (
                        // Even steps (2, 4): Content on right
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex gap-4 pb-8">
                      {/* Step Number & Line */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                          {stepNumber}
                        </div>
                        {index < dmvTestSteps.length - 1 && (
                          <div className="w-px h-full bg-primary mt-2 flex-1 min-h-[120px]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        {/* Image */}
                        <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-primary/8 to-primary/3 flex items-center justify-center">
                          <div className="text-center">
                            <step.icon className="mx-auto h-8 w-8 text-primary/40 mb-2" />
                            <p className="text-xs text-muted-foreground/60">
                              Step {stepNumber}
                            </p>
                          </div>
                        </div>

                        {/* Text */}
                        <div className="space-y-3">
                          <h3 className="text-lg font-bold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Why Choose Our DMV Road Test Service?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional preparation and support that gives you the confidence
              to pass your test.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card
                key={benefit.id}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Success Stories from Our Students
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from students who passed their DMV road test with our help.
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-900 dark:to-primary/10 py-16 md:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_60%)]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Ready to Pass Your{' '}
              <span className="bg-gradient-to-r from-primary to-orange-700 bg-clip-text text-transparent">
                DMV Road Test?
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Join the 96% of our students who pass their road test on the first
              try. Professional instruction, convenient pickup, and complete
              test day support.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="text-base bg-gradient-to-r from-primary to-orange-700 hover:from-orange-700 hover:to-orange-800 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="tel:+18889450644">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (888) 945-0644
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                asChild
              >
                <Link href="/contact-us">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>

            {/* Service Areas */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  Serving San Jose, Santa Clara County, Contra Costa County &
                  Surrounding Areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
