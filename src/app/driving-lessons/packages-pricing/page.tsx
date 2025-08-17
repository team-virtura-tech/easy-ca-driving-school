'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { motion, useReducedMotion } from 'framer-motion';

import { FAQ } from '@/components/custom/pricing/FAQ';
import { ModernCtaSection } from '@/components/custom/pricing/ModernCtaSection';
import { ModernPackageCard } from '@/components/custom/pricing/ModernPackageCard';
import { ModernPricingHero } from '@/components/custom/pricing/ModernPricingHero';
import { filterPackages, packages, type FilterState } from '@/lib/packages';

import { ModernFilters } from '@/components/custom/pricing/ModernFilters';
import { generateStructuredData } from './structured-data';

export default function PackagesPricingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reduce = useReducedMotion();

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
        {/* Modern Hero Section */}
        <ModernPricingHero />

        {/* Modern Filters */}
        <ModernFilters filters={filters} onFiltersChange={setFilters} />

        {/* Packages Grid Section */}
        <section className="py-12 lg:py-16">
          {/* Reduced padding from py-16 lg:py-20 to py-12 lg:py-16 */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {filteredPackages.length === 0 ? (
              <motion.div
                initial={reduce ? {} : { opacity: 0, y: 20 }}
                animate={reduce ? {} : { opacity: 1, y: 0 }}
                className="text-center"
              >
                <div className="mx-auto max-w-md">
                  <div className="mb-4 text-6xl">🔍</div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    No packages found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No packages match your current filters. Try adjusting your
                    search criteria or browse all available packages.
                  </p>
                </div>
              </motion.div>
            ) : (
              <>
                <motion.div
                  initial={reduce ? {} : { opacity: 0, y: 20 }}
                  animate={reduce ? {} : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 text-center"
                >
                  {/* Reduced margin from mb-12 to mb-8 */}
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                    Choose Your Perfect Package
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                    {filteredPackages.length} package
                    {filteredPackages.length !== 1 ? 's' : ''} available
                    {filters.zip && ` in ${filters.zip}`}. Each package includes
                    professional instruction and flexible scheduling.
                  </p>
                </motion.div>

                {/* Package Sections by Type (Like Competitor) */}
                <div className="space-y-12">
                  {/* Reduced spacing from space-y-16 to space-y-12 */}
                  {/* Single Lessons Section */}
                  {filteredPackages.filter((pkg) => pkg.lessons <= 2).length >
                    0 && (
                    <div>
                      <div className="mb-6 text-center">
                        {/* Reduced margin from mb-8 to mb-6 */}
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl transform scale-110"></div>
                          <div className="relative bg-white dark:bg-gray-900 border-2 border-primary/20 px-8 py-3 rounded-2xl shadow-sm">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <h2 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide">
                                SINGLE LESSON(S)
                              </h2>
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">
                          Purchase 1 or 2 lessons
                          <br />
                          Only enroll if you do not intend to take 3 lessons or
                          more.
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-8 w-full max-w-7xl">
                          {filteredPackages
                            .filter((pkg) => pkg.lessons <= 2)
                            .map((pkg, index) => (
                              <ModernPackageCard
                                key={pkg.id}
                                id={`package-${pkg.id}`}
                                pkg={pkg}
                                zip={filters.zip}
                                index={index}
                                className="w-full sm:w-80 max-w-sm flex-shrink-0"
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Package Lessons (3-Pack, 4-Pack, 6-Pack) */}
                  {filteredPackages.filter(
                    (pkg) =>
                      pkg.lessons >= 3 && pkg.lessons <= 6 && !pkg.carForTest
                  ).length > 0 && (
                    <div>
                      <div className="mb-6 text-center">
                        {/* Reduced margin from mb-8 to mb-6 */}
                        <div className="relative inline-block mb-4">
                          {/* Reduced margin from mb-6 to mb-4 */}
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl transform scale-110"></div>
                          <div className="relative bg-white dark:bg-gray-900 border-2 border-primary/20 px-8 py-3 rounded-2xl shadow-sm">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <h2 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide">
                                LESSON PACKAGES
                              </h2>
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center gap-3 flex-wrap mb-8">
                          {/* Get unique lesson counts to avoid duplicates */}
                          {Array.from(
                            new Set(
                              filteredPackages
                                .filter(
                                  (pkg) =>
                                    pkg.lessons >= 3 &&
                                    pkg.lessons <= 6 &&
                                    !pkg.carForTest
                                )
                                .map((pkg) => pkg.lessons)
                            )
                          ).map((lessonCount) => (
                            <div
                              key={lessonCount}
                              className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                            >
                              {lessonCount}-PACK
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-8 w-full max-w-7xl">
                          {filteredPackages
                            .filter(
                              (pkg) =>
                                pkg.lessons >= 3 &&
                                pkg.lessons <= 6 &&
                                !pkg.carForTest
                            )
                            .map((pkg, index) => (
                              <ModernPackageCard
                                key={pkg.id}
                                id={`package-${pkg.id}`}
                                pkg={pkg}
                                zip={filters.zip}
                                index={index}
                                className="w-full sm:w-80 max-w-sm flex-shrink-0"
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Complete Package (with DMV Test) */}
                  {filteredPackages.filter((pkg) => pkg.carForTest).length >
                    0 && (
                    <div>
                      <div className="mb-6 text-center">
                        {/* Reduced margin from mb-8 to mb-6 */}
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl transform scale-110"></div>
                          <div className="relative bg-white dark:bg-gray-900 border-2 border-primary/20 px-8 py-3 rounded-2xl shadow-sm">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <h2 className="text-lg font-semibold text-gray-900 dark:text-white tracking-wide">
                                COMPLETE PACKAGE
                              </h2>
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-semibold">
                          Plus we will take you to the DMV for your Road Test
                        </p>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center gap-8 sm:gap-8 w-full max-w-7xl">
                          {filteredPackages
                            .filter((pkg) => pkg.carForTest)
                            .map((pkg, index) => (
                              <ModernPackageCard
                                key={pkg.id}
                                id={`package-${pkg.id}`}
                                pkg={pkg}
                                zip={filters.zip}
                                index={index}
                                className="w-full sm:w-80 max-w-sm flex-shrink-0"
                              />
                            ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Package Benefits */}
                <motion.div
                  initial={reduce ? {} : { opacity: 0, y: 30 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-12 text-center"
                >
                  {/* Reduced margin from mt-16 to mt-12 */}
                  <div className="mx-auto max-w-6xl rounded-2xl border bg-gradient-to-br from-primary/5 via-white to-primary/10 p-4 sm:p-6 shadow-lg dark:from-primary/10 dark:via-gray-900 dark:to-primary/5 dark:border-gray-700">
                    {/* Responsive padding and increased max-width */}
                    <h3 className="mb-4 text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {/* Responsive text size */}
                      Every Package Includes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 text-sm">
                      {/* Mobile: grid layout, Desktop: flex layout */}
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 sm:p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="font-medium">Pickup & Drop-off</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 sm:p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="font-medium">
                          Licensed Instructors
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 sm:p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="font-medium">Progress Tracking</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 sm:p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="font-medium">Flexible Scheduling</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 sm:p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="font-medium">Safety Certified</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 p-3 sm:p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="h-3 w-3 rounded-full bg-green-500 flex-shrink-0"></div>
                        <span className="font-medium">24/7 Support</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Modern CTA Section */}
        <ModernCtaSection />

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-900">
          <FAQ />
        </div>

        {/* Footer Note */}
        <div className="border-t bg-gray-100 py-8 dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filters.zip
                ? `Prices shown are for ZIP code ${filters.zip}.`
                : 'Enter your ZIP code above for location-specific pricing.'}{' '}
              All prices exclude taxes and DMV fees. Flexible payment plans
              available at checkout.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
