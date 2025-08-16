'use client';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Check, Clock, Users } from 'lucide-react';

import { AnimateNumber } from '@/components/custom/AnimateNumber';
import { type Pkg } from '@/lib/packages';
import { cn } from '@/lib/utils';

export type PackageCardProps = {
  pkg: Pkg;
  zip: string;
  className?: string;
  index?: number;
};

export const PackageCard = ({
  pkg,
  zip,
  className,
  index = 0,
}: PackageCardProps) => {
  const savings = pkg.originalPrice ? pkg.originalPrice - pkg.price : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn('h-full', className)}
      data-component="PackageCard"
    >
      <Card className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
        {/* Badge */}
        {pkg.badge && (
          <div className="absolute right-4 top-4 z-10">
            <Badge
              variant={
                pkg.badge === 'Most Popular'
                  ? 'default'
                  : pkg.badge === 'Best Value'
                    ? 'secondary'
                    : 'outline'
              }
              className="whitespace-nowrap"
            >
              {pkg.badge}
            </Badge>
          </div>
        )}

        <CardHeader className="pb-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {pkg.title}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              {pkg.bestFor}
            </p>
          </div>

          {/* Price Section */}
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <AnimateNumber
                value={pkg.price}
                prefix="$"
                direction="down"
                from={
                  pkg.originalPrice
                    ? Math.max(pkg.originalPrice + 25, pkg.price + 50)
                    : Math.round(pkg.price * 1.25)
                }
                duration={1.4}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              />
              {pkg.originalPrice && (
                <span className="text-lg text-gray-500 line-through dark:text-gray-400">
                  ${pkg.originalPrice}
                </span>
              )}
            </div>
            {savings > 0 && (
              <div className="text-sm font-medium text-green-600">
                Save ${savings}
              </div>
            )}
          </div>

          {/* Hours and Lessons Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{pkg.hours} hours</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{pkg.lessons} lessons</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Features List */}
          <div className="space-y-2">
            {pkg.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-start space-x-2 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <Separator />

          {/* DMV Test Car Info */}
          <div className="text-center">
            {pkg.carForTest ? (
              <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                <p className="text-sm font-medium text-green-700 dark:text-green-300">
                  🚗 Car provided for DMV test
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                DMV test car not included
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-3 pt-6">
          {/* CTA Buttons */}
          <div className="flex w-full space-x-2">
            <Button asChild className="flex-1">
              <Link href={`/book?pkg=${pkg.id}&zip=${zip}`}>Book Now</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href={`/packages/${pkg.id}`}>Details</Link>
            </Button>
          </div>

          {/* Installments Note */}
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            Pay in installments available at checkout
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
