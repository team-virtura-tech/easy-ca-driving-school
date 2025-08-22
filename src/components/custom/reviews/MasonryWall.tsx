'use client';

import type { Testimonial } from '@/app/about-us/reviews/page.tsx';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${i < rating ? 'text-yellow-500' : 'text-muted-foreground/40'}`}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

export const MasonryWall = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  return (
    <div className="[column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-4">
      {testimonials.map((t, idx) => (
        <motion.article
          key={t.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: (idx % 6) * 0.03 }}
          className="mb-4 break-inside-avoid rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Header */}
          <div className="flex items-start gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border bg-muted">
              <Image
                src={t.avatar}
                alt={`${t.name} avatar`}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="font-semibold leading-tight">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}
                    {t.city ? ` • ${t.city}` : ''}
                  </p>
                </div>
                <Stars rating={t.rating} />
              </div>
              {/* Tags */}
              {t.tags?.length ? (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          {/* Body with native expand for a11y */}
          {t.content.length > 220 ? (
            <details className="mt-3 group">
              <summary className="cursor-pointer text-sm text-muted-foreground/90 [&::-webkit-details-marker]:hidden">
                <Quote className="mr-2 inline size-4 text-muted-foreground/60" />
                {t.content.slice(0, 220)}…{' '}
                <span className="text-primary">Read more</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">
                <Quote className="mr-2 inline size-4 text-muted-foreground/60" />
                {t.content}
              </p>
            </details>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              <Quote className="mr-2 inline size-4 text-muted-foreground/60" />
              {t.content}
            </p>
          )}

          {/* Date (optional) */}
          {t.date ? (
            <p className="mt-3 text-[11px] text-muted-foreground/70">
              Reviewed on {new Date(t.date).toLocaleDateString()}
            </p>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
};
