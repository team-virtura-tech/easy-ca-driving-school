'use client';

import { ContactForm } from '@/components/custom/contactForm';
import { LandingHero } from '@/components/custom/landingHero/landingHero';
import { ParallaxBackground } from '@/components/custom/parallaxBackground';
import { ParallaxSection } from '@/components/custom/parallaxSection';
import { PricingPreview } from '@/components/custom/pricingPreview';
import { ScrollAnimation } from '@/components/custom/scrollAnimation';
import { ScrollProgress } from '@/components/custom/scrollProgress';
import { StaggerAnimation } from '@/components/custom/staggerAnimation';
import { TestimonialsCarousel } from '@/components/custom/testimonialsCarousel';
import { WhyChooseUs } from '@/components/custom/whyChooseUs';

export default function Home() {
  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        {/* Hero Section - already has internal animations */}
        <ScrollAnimation direction="fade" duration={0.8}>
          <LandingHero />
        </ScrollAnimation>

        {/* Testimonials Section */}
        <ParallaxSection speed={0.3} direction="up">
          <ScrollAnimation direction="up" delay={0.2} duration={0.8}>
            <TestimonialsCarousel />
          </ScrollAnimation>
        </ParallaxSection>

        {/* Pricing Section */}
        <ParallaxSection speed={0.5} direction="down">
          <ScrollAnimation direction="scale" delay={0.1} duration={0.7}>
            <PricingPreview />
          </ScrollAnimation>
        </ParallaxSection>

        {/* Why Choose Us Section */}
        <ParallaxSection speed={0.4} direction="up">
          <StaggerAnimation direction="up" staggerDelay={0.15} duration={0.6}>
            <WhyChooseUs />
          </StaggerAnimation>
        </ParallaxSection>

        {/* Contact Form Section */}
        <ParallaxSection speed={0.2} direction="up">
          <ScrollAnimation direction="fade" delay={0.0} duration={0.7}>
            <ContactForm />
          </ScrollAnimation>
        </ParallaxSection>
      </div>
      <ScrollProgress />
    </ParallaxBackground>
  );
}
