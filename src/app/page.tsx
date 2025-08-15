'use client';

import { LandingHero } from '@/components/custom/landingHero/landingHero';
import { Pricing } from '@/components/custom/pricing';
import { TestimonialsCarousel } from '@/components/custom/testimonialsCarousel';

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
    <div className="min-h-screen">
      <LandingHero
        firstLine="PROVIDING SAFE"
        secondLine="& PROFESSIONAL DRIVING CLASSES"
        highlightWords={['SAFE', 'PROFESSIONAL']}
        onCardClick={handleStepClick}
      />

      <TestimonialsCarousel />

      <Pricing onPlanSelect={handlePlanSelect} />

      {/* Future content */}
      <div className="min-h-screen bg-muted/50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Future Content</h2>
          <p className="text-lg text-muted-foreground">
            This section allows you to scroll and see the parallax effect above.
          </p>
        </div>
      </div>
    </div>
  );
}
