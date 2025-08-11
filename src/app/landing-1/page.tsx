import { LandingHero } from '@/components/custom/landingHero/landingHero';

export default function Landing1() {
  return (
    <div className="min-h-screen">
      <LandingHero
        firstLine="PROVIDING SAFE"
        secondLine="& PROFESSIONAL DRIVING CLASSES"
      />
      {/* Future sections can be added here */}
    </div>
  );
}
