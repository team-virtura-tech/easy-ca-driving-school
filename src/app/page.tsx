'use client';

import { LandingHero } from '@/components/custom/landingHero/landingHero';
import { ParallaxBackground } from '@/components/custom/parallaxBackground';
import { ParallaxSection } from '@/components/custom/parallaxSection';
import { Pricing } from '@/components/custom/pricing';
import { ScrollAnimation } from '@/components/custom/scrollAnimation';
import { ScrollProgress } from '@/components/custom/scrollProgress';
import { StaggerAnimation } from '@/components/custom/staggerAnimation';
import { TestimonialsCarousel } from '@/components/custom/testimonialsCarousel';
import { WhyChooseUs } from '@/components/custom/whyChooseUs';

export default function Home() {
  const handleStepClick = (stepId: string) => {
    console.log('Step clicked:', stepId);
    // Add your navigation or action logic here
  };

  const handlePlanSelect = (planId: string) => {
    console.log('Plan selected:', planId);
    // Add your plan selection logic here
  };

  return (
    <ParallaxBackground>
      <div className="min-h-screen">
        {/* Hero Section - already has internal animations */}
        <ScrollAnimation direction="fade" duration={0.8}>
          <LandingHero
            firstLine="PROVIDING SAFE"
            secondLine="& PROFESSIONAL DRIVING CLASSES"
            highlightWords={['SAFE', 'PROFESSIONAL']}
            onCardClick={handleStepClick}
          />
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
            <Pricing onPlanSelect={handlePlanSelect} />
          </ScrollAnimation>
        </ParallaxSection>

        {/* Why Choose Us Section */}
        <ParallaxSection speed={0.4} direction="up">
          <StaggerAnimation direction="up" staggerDelay={0.15} duration={0.6}>
            <WhyChooseUs />
          </StaggerAnimation>
        </ParallaxSection>
      </div>
      <ScrollProgress />
    </ParallaxBackground>
  );
}
