import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driving Lessons - Easy CA Driving School',
  description: 'Professional driving lessons for all skill levels.',
};

export default function DMVRoadTestsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">DMV Road Tests</h1>
      <p className="mt-4 text-muted-foreground">
        Learn to drive with confidence. Our professional instructors will help
        you master the road safely.
      </p>
    </div>
  );
}
