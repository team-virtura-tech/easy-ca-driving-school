import { LandingHero } from '@/components/custom/landingHero/landingHero';

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHero
        firstLine="PROVIDING SAFE"
        secondLine="& PROFESSIONAL DRIVING CLASSES"
        highlightWords={['SAFE', 'PROFESSIONAL']}
      />
      {/* Temporary content to enable scrolling and see parallax effect */}
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
