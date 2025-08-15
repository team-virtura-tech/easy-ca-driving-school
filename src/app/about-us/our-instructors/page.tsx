import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews - Easy CA Driving School',
  description: 'Read reviews from our satisfied students and parents.',
};

export default function OurInstructorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Our Instructors</h1>
      <p className="mt-4 text-muted-foreground">
        Meet our team of experienced driving instructors.
      </p>
    </div>
  );
}
