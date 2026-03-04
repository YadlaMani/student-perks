'use client';

import { CATEGORIES, Category } from '@/lib/benefits-data';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
  counts,
}: CategoryFilterProps) {
  return (
    <div
      className="bg-background border-b-2 border-border sticky top-16 z-40"
      role="navigation"
      aria-label="Filter by category"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Benefit categories"
        >
          {CATEGORIES.map(({ value, label, Icon }) => {
            const count = value === 'all' ? counts['all'] : (counts[value] ?? 0);
            const isActive = activeCategory === value;

            return (
              <button
                key={value}
                type="button"
                aria-label={`Filter by ${label}${isActive ? ' (active)' : ''}`}
                id={`tab-${value}`}
                onClick={() => onCategoryChange(value)}
                className={cn(
                  'flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-base border-2 border-border text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1',
                  isActive
                    ? 'bg-main text-main-foreground shadow-none translate-x-0.5 translate-y-0.5'
                    : 'bg-background text-foreground shadow-shadow hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#000]'
                )}
              >
                <Icon
                  size={14}
                  className={isActive ? 'text-main-foreground' : 'text-foreground/70'}
                  aria-hidden={true}
                />
                <span>{label}</span>
                {count > 0 && (
                  <span
                    className={cn(
                      'ml-0.5 text-xs px-1.5 py-0.5 rounded-full font-bold border',
                      isActive ? 'border-main-foreground/40' : 'border-border'
                    )}
                    aria-label={`${count} benefits`}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
