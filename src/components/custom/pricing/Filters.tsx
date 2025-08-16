'use client';

import { useCallback } from 'react';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { type FilterState } from '@/lib/packages';
import { cn } from '@/lib/utils';

export type FiltersProps = {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
};

export const Filters = ({
  filters,
  onFiltersChange,
  className,
}: FiltersProps) => {
  const updateFilter = useCallback(
    (key: keyof FilterState, value: FilterState[keyof FilterState]) => {
      onFiltersChange({ ...filters, [key]: value });
    },
    [filters, onFiltersChange]
  );

  const handleZipChange = (value: string) => {
    // Only allow numeric input, max 5 digits
    const numericValue = value.replace(/\D/g, '').slice(0, 5);
    updateFilter('zip', numericValue);
  };

  return (
    <div
      id="Filters"
      data-component="Filters"
      className={cn(
        'sticky top-0 z-20 border-b bg-white/95 py-4 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:items-center">
          {/* ZIP Code Input */}
          <div className="space-y-2">
            <label
              htmlFor="zip-input"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              ZIP Code
            </label>
            <Input
              id="zip-input"
              type="text"
              placeholder="Enter ZIP"
              value={filters.zip}
              onChange={(e) => handleZipChange(e.target.value)}
              className="w-full"
              maxLength={5}
            />
          </div>

          {/* Category Tabs */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
            <Tabs
              value={filters.category}
              onValueChange={(value) =>
                updateFilter('category', value as FilterState['category'])
              }
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="All" className="text-xs">
                  All
                </TabsTrigger>
                <TabsTrigger value="Teen" className="text-xs">
                  Teen
                </TabsTrigger>
                <TabsTrigger value="Adult" className="text-xs">
                  Adult
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Sort Select */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Sort By
            </label>
            <Select
              value={filters.sort}
              onValueChange={(value) =>
                updateFilter('sort', value as FilterState['sort'])
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="hours-desc">Most Hours</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Car for Test Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="car-for-test"
              checked={filters.includesCarForTest}
              onCheckedChange={(checked) =>
                updateFilter('includesCarForTest', !!checked)
              }
            />
            <label
              htmlFor="car-for-test"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Includes car for DMV test
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
