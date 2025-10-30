'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { motion, useReducedMotion } from 'framer-motion';
import { Filter, MapPin, SortAsc, Users } from 'lucide-react';

import { type FilterState } from '@/lib/packages';
import { cn } from '@/lib/utils';

export type ModernFiltersProps = {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
  id?: string;
};

export const ModernFilters = ({
  filters,
  onFiltersChange,
  className,
  id,
}: ModernFiltersProps) => {
  const reduce = useReducedMotion();
  const componentName = 'ModernFilters';

  return (
    <motion.section
      id={id ?? componentName}
      data-component={componentName}
      initial={reduce ? {} : { opacity: 0, y: -20 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        'border-b bg-white dark:bg-gray-900',
        'shadow-sm',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Find Your Perfect Package
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* ZIP Code Input */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <MapPin className="h-4 w-4 text-primary" />
              ZIP Code
            </label>
            <Input
              type="text"
              placeholder="Enter your ZIP"
              value={filters.zip}
              onChange={(e) =>
                onFiltersChange({ ...filters, zip: e.target.value })
              }
              className="h-11 border-2 border-gray-200 bg-white transition-all duration-200 focus:border-primary dark:border-gray-700 dark:bg-gray-800"
              maxLength={5}
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <Users className="h-4 w-4 text-primary" />
              Category
            </label>
            <Select
              value={filters.category}
              onValueChange={(value: 'Teen' | 'Adult' | 'Test Day' | 'All') =>
                onFiltersChange({ ...filters, category: value })
              }
            >
              <SelectTrigger className="h-11 border-2 border-gray-200 bg-white transition-all duration-200 focus:border-primary dark:border-gray-700 dark:bg-gray-800">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Teen">Teen (15½-17½)</SelectItem>
                <SelectItem value="Adult">Adult (18+)</SelectItem>
                <SelectItem value="Test Day">DMV Test Day</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* Sort Filter */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2"
          >
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <SortAsc className="h-4 w-4 text-primary" />
              Sort By
            </label>
            <Select
              value={filters.sort}
              onValueChange={(
                value: 'popular' | 'price-asc' | 'price-desc' | 'hours-desc'
              ) => onFiltersChange({ ...filters, sort: value })}
            >
              <SelectTrigger className="h-11 border-2 border-gray-200 bg-white transition-all duration-200 focus:border-primary dark:border-gray-700 dark:bg-gray-800">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="hours-desc">Most Training Hours</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>

          {/* DMV Test Car Filter */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -20 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex h-11 items-center space-y-2"
          >
            <div className="flex w-full items-center justify-between rounded-lg border-2 border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Includes DMV Test Car
              </label>
              <Switch
                checked={filters.includesCarForTest}
                onCheckedChange={(checked) =>
                  onFiltersChange({ ...filters, includesCarForTest: checked })
                }
                className="data-[state=checked]:bg-primary"
              />
            </div>
          </motion.div>
        </div>

        {/* Active Filters Summary */}
        {(filters.zip ||
          filters.category !== 'All' ||
          filters.includesCarForTest) && (
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 10 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Active filters:
            </span>
            {filters.zip && (
              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                ZIP: {filters.zip}
              </span>
            )}
            {filters.category !== 'All' && (
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                {filters.category}
              </span>
            )}
            {filters.includesCarForTest && (
              <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                DMV Test Car
              </span>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};
