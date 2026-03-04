'use client';

import { useState, useMemo, useId, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Search, X, Check, SlidersHorizontal } from 'lucide-react';
import { benefits, Category, CATEGORIES } from '@/lib/benefits-data';
import { Hero } from '@/components/hero';
import { BenefitCard } from '@/components/benefit-card';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
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
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const statusId  = useId();
  const searchId  = useId();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Update scroll arrow visibility
  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener('scroll', updateScroll, { passive: true });
    const ro = new ResizeObserver(updateScroll);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateScroll);
      ro.disconnect();
    };
  }, [updateScroll]);

  const scrollChips = (dir: 'left' | 'right') =>
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' });

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

  const hasResults      = displayedBenefits.length > 0;
  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sortKey)?.label ?? 'Sort';

  return (
    <>
      <Hero />

      {/* ── Sticky toolbar ── */}
      <div className="bg-background border-b-2 border-border sticky top-14 sm:top-16 z-40">
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
                className="w-full pl-9 pr-8 py-2 text-sm border-2 border-border rounded-base bg-background text-foreground placeholder:text-foreground/40 shadow-shadow focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 transition-shadow"
                autoComplete="off"
                spellCheck="false"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Sort — neobrutalist DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-2 border-2 border-border bg-background font-bold text-sm rounded-base pl-3 pr-3 py-2 shadow-shadow cursor-pointer text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all shrink-0"
                  aria-label={`Sort: ${activeSortLabel}`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">{activeSortLabel}</span>
                  <ChevronDown className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="min-w-40 border-2 border-border rounded-base shadow-shadow bg-background p-1"
              >
                {SORT_OPTIONS.map((opt) => (
                  <DropdownMenuItem
                    key={opt.value}
                    onSelect={() => setSortKey(opt.value)}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 text-sm font-bold rounded-sm cursor-pointer focus:bg-secondary-background focus:outline-none transition-colors',
                      sortKey === opt.value
                        ? 'bg-main text-main-foreground'
                        : 'text-foreground hover:bg-secondary-background'
                    )}
                  >
                    <Check
                      className={cn('w-3.5 h-3.5 shrink-0', sortKey === opt.value ? 'opacity-100' : 'opacity-0')}
                      aria-hidden="true"
                    />
                    {opt.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Row 2: category chips with scroll arrows */}
          <div className="relative pb-3">

            {/* Left arrow — desktop only */}
            <div
              className={cn(
                'absolute left-0 top-0 bottom-0 z-10 hidden md:flex items-center transition-opacity duration-150',
                canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
              )}
            >
              <div className="absolute inset-y-0 left-7 w-8 bg-linear-to-r from-background to-transparent" aria-hidden="true" />
              <button
                type="button"
                onClick={() => scrollChips('left')}
                aria-label="Scroll categories left"
                className="relative z-10 flex items-center justify-center w-7 h-7 border-2 border-border rounded-base bg-background text-foreground shadow-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Chips */}
            <div
              ref={scrollRef}
              role="group"
              aria-label="Filter by category"
              className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-9"
            >
              {CATEGORIES.map(({ value, label, Icon }) => {
                const count    = value === 'all' ? categoryCounts['all'] : (categoryCounts[value] ?? 0);
                const isActive = activeCategory === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${label}${isActive ? ' (active)' : ''}, ${count} result${count !== 1 ? 's' : ''}`}
                    onClick={() => setActiveCategory(value)}
                    className={cn(
                      'flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-base border-2 border-border text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                      isActive
                        ? 'bg-main text-main-foreground shadow-none translate-x-0.5 translate-y-0.5'
                        : 'bg-background text-foreground shadow-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none'
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
                          isActive
                            ? 'bg-main-foreground/10 border-main-foreground/30 text-main-foreground'
                            : 'border-border bg-secondary-background text-foreground/70'
                        )}
                      >
                        {count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right arrow — desktop only */}
            <div
              className={cn(
                'absolute right-0 top-0 bottom-0 z-10 hidden md:flex items-center transition-opacity duration-150',
                canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
              )}
            >
              <div className="absolute inset-y-0 right-7 w-8 bg-linear-to-l from-background to-transparent" aria-hidden="true" />
              <button
                type="button"
                onClick={() => scrollChips('right')}
                aria-label="Scroll categories right"
                className="relative z-10 flex items-center justify-center w-7 h-7 border-2 border-border rounded-base bg-background text-foreground shadow-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
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
              className="mt-4 text-sm font-bold text-foreground underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
                className="text-foreground font-bold underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
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
