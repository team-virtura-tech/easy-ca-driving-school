import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews - Easy CA Driving School',
  description: 'Read reviews from our satisfied students and parents.',
};

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Student Reviews</h1>
      <p className="mt-4 text-muted-foreground">
        Read what our students and their families have to say about their
        experience with Easy CA Driving School.
      </p>
    </div>
  );
}
