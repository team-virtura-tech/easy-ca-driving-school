import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Driver's Education - Easy CA Driving School",
  description: 'Complete drivers education courses to get your license.',
};

export default function LearnersPermitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Driver&apos;s Education</h1>
      <p className="mt-4 text-muted-foreground">Learner Permit</p>
    </div>
  );
}
