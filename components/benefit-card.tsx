'use client';

import { useState } from 'react';
import { Benefit, BenefitTag } from '@/lib/benefits-data';
import { BrandIcon } from '@/components/brand-icon';
import { Button } from '@/components/ui/button';
import { ChevronDown, ExternalLink, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const TAG_CONFIG: Record<BenefitTag, { label: string; className: string }> = {
  free:     { label: 'FREE',     className: 'bg-verified text-white border-verified'                       },
  hot:      { label: 'HOT',      className: 'bg-main text-main-foreground border-main'                     },
  popular:  { label: 'POPULAR',  className: 'bg-discount text-discount-foreground border-border'           },
  limited:  { label: 'LIMITED',  className: 'bg-limited text-white border-limited'                         },
  verified: { label: 'VERIFIED', className: 'bg-secondary-background text-foreground border-border'        },
};

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isFree = benefit.tags.includes('free');

  return (
    <article
      aria-labelledby={`benefit-${benefit.id}-title`}
      className="group bg-background rounded-base border-2 border-border shadow-shadow flex flex-col transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
    >
      {/* Card body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">

        {/* Company row */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-base border-2 border-border bg-secondary-background shrink-0">
            <BrandIcon
              iconKey={benefit.iconKey}
              category={benefit.category}
              size={20}
              className="text-foreground"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold text-foreground/50 uppercase tracking-widest leading-none mb-0.5 truncate">
              {benefit.company}
            </p>
            <h3
              id={`benefit-${benefit.id}-title`}
              className="font-heading text-foreground text-sm leading-snug"
            >
              {benefit.title}
            </h3>
          </div>
        </div>

        {/* Discount badge */}
        <div
          className={cn(
            'self-start flex items-center px-3 py-1.5 rounded-base border-2 border-border',
            isFree ? 'bg-verified' : 'bg-discount'
          )}
          aria-label={`Discount: ${benefit.discount}`}
        >
          <span
            className={cn(
              'text-base font-heading leading-none',
              isFree ? 'text-white' : 'text-discount-foreground'
            )}
          >
            {benefit.discount}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm font-base text-foreground/75 leading-relaxed">
          {benefit.description}
        </p>

        {/* Tags */}
        {benefit.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-label="Tags">
            {benefit.tags.slice(0, 3).map((tag) => {
              const { label, className } = TAG_CONFIG[tag];
              return (
                <span
                  key={tag}
                  className={cn(
                    'text-[10px] font-bold px-2 py-0.5 rounded-sm border tracking-wider',
                    className
                  )}
                >
                  {label}
                </span>
              );
            })}
          </div>
        )}

        {/* Verification */}
        <div className="flex flex-wrap gap-1.5 mt-auto" aria-label="Verification methods">
          {benefit.verification.map((method) => (
            <span
              key={method}
              className="inline-flex items-center gap-1 text-xs font-base bg-secondary-background border border-border rounded-sm px-2 py-0.5 text-foreground/70"
            >
              <CheckCircle className="w-3 h-3 text-verified shrink-0" aria-hidden="true" />
              {method}
            </span>
          ))}
        </div>
      </div>

      {/* How to claim — expandable */}
      <div className="border-t-2 border-border">
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label={isExpanded ? 'Collapse how to claim' : 'Expand how to claim'}
          className="w-full flex items-center justify-between px-4 sm:px-5 py-3 text-xs font-bold uppercase tracking-wider text-foreground/60 hover:text-foreground hover:bg-secondary-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
        >
          <span aria-hidden="true">How to claim</span>
          <ChevronDown
            className={cn('w-4 h-4 transition-transform duration-200', isExpanded && 'rotate-180')}
            aria-hidden="true"
          />
        </button>

        {isExpanded && (
          <div
            id={`how-to-${benefit.id}`}
            className="px-4 sm:px-5 pb-4 pt-3 text-sm font-base text-foreground/80 bg-secondary-background border-t border-border/40 leading-relaxed"
          >
            {benefit.howToClaim}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3">
        <Button
          asChild
          className="w-full border-2 border-border shadow-shadow font-bold bg-main text-main-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all focus-visible:ring-2 focus-visible:ring-ring"
        >
          <a
            href={benefit.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Claim ${benefit.title} from ${benefit.company} (opens in new tab)`}
          >
            Claim Deal
            <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </article>
  );
}
