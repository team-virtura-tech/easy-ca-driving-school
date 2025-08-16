'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Gift, MessageCircle } from 'lucide-react';

import { FAQ } from '@/components/custom/pricing/FAQ';
import { Filters } from '@/components/custom/pricing/Filters';
import { PackageCard } from '@/components/custom/pricing/PackageCard';
import { ParallaxHero } from '@/components/custom/pricing/ParallaxHero';
import { filterPackages, packages, type FilterState } from '@/lib/packages';

import { generateStructuredData } from './structured-data';

export default function PackagesPricingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterState>({
    zip: searchParams.get('zip') || '',
    category: 'All',
    sort: 'popular',
    includesCarForTest: false,
  });

  const filteredPackages = filterPackages(packages, filters);

  // Update URL when ZIP changes
  useEffect(() => {
    if (filters.zip) {
      const params = new URLSearchParams(searchParams.toString());
      params.set('zip', filters.zip);
      router.replace(`?${params.toString()}`, { scroll: false });
    }
  }, [filters.zip, router, searchParams]);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateStructuredData(filteredPackages, filters.zip)
          ),
        }}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Parallax Hero */}
        <ParallaxHero />

        {/* Filters */}
        <Filters filters={filters} onFiltersChange={setFilters} />

        {/* Packages Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {filteredPackages.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  No packages match your current filters. Please adjust your
                  criteria and try again.
                </p>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 text-center"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                    Choose Your Perfect Package
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {filteredPackages.length} package
                    {filteredPackages.length !== 1 ? 's' : ''} available
                    {filters.zip && ` for ZIP code ${filters.zip}`}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPackages.map((pkg, index) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      zip={filters.zip}
                      index={index}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Promo Band */}
        <section className="border-y bg-blue-50 py-12 dark:border-gray-700 dark:bg-blue-900/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Need a Custom Plan?
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We offer personalized packages to fit your specific needs and
                schedule.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="min-w-40">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="min-w-40">
                  <Gift className="mr-2 h-5 w-5" />
                  Gift Cards
                </Button>
              </div>

              {/* CA Teen Requirement Note */}
              <div className="mx-auto mt-8 max-w-2xl rounded-lg border bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/20">
                <Badge variant="outline" className="mb-2">
                  California Requirement
                </Badge>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  California teens (ages 15½-17½) must complete a minimum of 6
                  hours of professional driving instruction before taking the
                  DMV road test. All our teen packages meet this requirement.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Footer Note */}
        <div className="border-t bg-gray-100 py-6 dark:border-gray-700 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filters.zip
                ? `Prices shown are for ZIP code ${filters.zip}.`
                : 'Enter your ZIP code above for accurate pricing.'}{' '}
              Taxes & DMV fees not included. All packages include pickup and
              drop-off service.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
