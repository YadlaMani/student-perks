'use client';

import { useState, useMemo, useId } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { benefits, Category, CATEGORIES } from '@/lib/benefits-data';
import { Hero } from '@/components/hero';
import { BenefitCard } from '@/components/benefit-card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type SortKey = 'default' | 'discount' | 'free_first' | 'value';

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'default',    label: 'Featured first' },
  { value: 'discount',   label: 'Highest % off'  },
  { value: 'free_first', label: 'Free first'      },
  { value: 'value',      label: 'Best value'      },
];

export function BenefitsClient() {
  const [searchQuery, setSearchQuery]       = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [sortKey, setSortKey]               = useState<SortKey>('default');
  const sortId   = useId();
  const statusId = useId();
  const searchId = useId();

  // Category counts (respects search, ignores category filter)
  const categoryCounts = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const filtered = benefits.filter((b) => {
      if (!q) return true;
      return (
        b.company.toLowerCase().includes(q) ||
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.category.includes(q) ||
        b.tags.some((t) => t.includes(q)) ||
        b.discount.toLowerCase().includes(q)
      );
    });
    const counts: Record<string, number> = { all: filtered.length };
    for (const cat of CATEGORIES.slice(1)) {
      counts[cat.value] = filtered.filter((b) => b.category === cat.value).length;
    }
    return counts;
  }, [searchQuery]);

  // Filtered + sorted results
  const displayedBenefits = useMemo(() => {
    const q = searchQuery.toLowerCase();
    let result = benefits.filter((b) => {
      if (activeCategory !== 'all' && b.category !== activeCategory) return false;
      if (!q) return true;
      return (
        b.company.toLowerCase().includes(q) ||
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.category.includes(q) ||
        b.tags.some((t) => t.includes(q)) ||
        b.discount.toLowerCase().includes(q)
      );
    });

    switch (sortKey) {
      case 'discount':
        result = [...result].sort((a, b) => b.discountPercent - a.discountPercent);
        break;
      case 'free_first':
        result = [...result].sort((a, b) => {
          const aF = a.tags.includes('free') ? 1 : 0;
          const bF = b.tags.includes('free') ? 1 : 0;
          return bF - aF;
        });
        break;
      case 'value':
        result = [...result].sort((a, b) => {
          const aF = a.tags.includes('free') ? 1 : 0;
          const bF = b.tags.includes('free') ? 1 : 0;
          if (bF !== aF) return bF - aF;
          return b.discountPercent - a.discountPercent;
        });
        break;
      default:
        result = [...result].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }
    return result;
  }, [searchQuery, activeCategory, sortKey]);

  const hasResults = displayedBenefits.length > 0;

  return (
    <>
      <Hero />

      {/* ── Sticky combined toolbar: category chips + search + sort ── */}
      <div className="bg-background border-b-2 border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Row 1: search + sort */}
          <div className="flex items-center gap-3 pt-3 pb-2">
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <label htmlFor={searchId} className="sr-only">
                Search student benefits
              </label>
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id={searchId}
                type="search"
                placeholder="Search benefits…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-sm border-2 border-border rounded-base bg-background text-foreground placeholder:text-foreground/40 shadow-shadow focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1 transition-shadow"
                autoComplete="off"
                spellCheck="false"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Sort select — neobrutalist */}
            <div className="relative shrink-0">
              <select
                id={sortId}
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                aria-label="Sort benefits"
                className="appearance-none border-2 border-border bg-background font-bold text-sm rounded-base pl-3 pr-9 py-2 shadow-shadow cursor-pointer text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-1"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 border-l-2 border-border"
                aria-hidden="true"
              >
                <ChevronDown className="h-4 w-4 text-foreground" />
              </div>
            </div>
          </div>

          {/* Row 2: category chips */}
          <div
            className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Filter by category"
          >
            {CATEGORIES.map(({ value, label, Icon }) => {
              const count    = value === 'all' ? categoryCounts['all'] : (categoryCounts[value] ?? 0);
              const isActive = activeCategory === value;
              return (
                <button
                  key={value}
                  type="button"
                  aria-label={`Filter by ${label}${isActive ? ' (active)' : ''}`}
                  onClick={() => setActiveCategory(value)}
                  className={cn(
                    'flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-base border-2 border-border text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1',
                    isActive
                      ? 'bg-main text-main-foreground shadow-none translate-x-0.5 translate-y-0.5'
                      : 'bg-background text-foreground shadow-shadow hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_#000]'
                  )}
                >
                  <Icon
                    size={12}
                    className={isActive ? 'text-main-foreground' : 'text-foreground/60'}
                    aria-hidden={true}
                  />
                  <span>{label}</span>
                  {count > 0 && (
                    <span
                      className={cn(
                        'ml-0.5 text-[10px] px-1.5 py-0.5 rounded-full font-bold border',
                        isActive ? 'border-main-foreground/40' : 'border-border'
                      )}
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

      {/* ── Results ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Live count */}
        <p
          id={statusId}
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="text-sm text-foreground/60 mb-5"
        >
          {hasResults ? (
            <>
              Showing{' '}
              <strong className="text-foreground">{displayedBenefits.length}</strong>{' '}
              benefit{displayedBenefits.length !== 1 ? 's' : ''}
              {searchQuery && (
                <>
                  {' '}for &ldquo;
                  <span className="text-main font-bold">{searchQuery}</span>
                  &rdquo;
                </>
              )}
            </>
          ) : (
            'No benefits found'
          )}
        </p>

        {hasResults ? (
          <div
            id="benefits-grid"
            role="region"
            aria-label="Benefits list"
            aria-describedby={statusId}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayedBenefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        ) : (
          <div
            role="status"
            className="text-center py-20 border-2 border-dashed border-border rounded-base"
          >
            <h2 className="font-heading text-xl text-foreground mb-2">No benefits found</h2>
            <p className="text-foreground/60 text-sm max-w-xs mx-auto">
              Try a different search term or browse all categories.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-sm font-bold text-main underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        {hasResults && (
          <>
            <Separator className="my-10 bg-border" />
            <p className="text-center text-sm text-foreground/50 pb-8">
              Discounts may change. Always verify on the provider&apos;s website.{' '}
              <a
                href="https://github.com/YadlaMani/student-benefits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-main font-bold underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-sm"
              >
                Help us keep this updated
              </a>
            </p>
          </>
        )}
      </div>
    </>
  );
}
