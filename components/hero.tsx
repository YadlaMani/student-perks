import { GraduationCap, Sparkles, Tag } from 'lucide-react';
import { STATS } from '@/lib/benefits-data';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-background border-b-2 border-border py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-discount border-2 border-border shadow-shadow px-3 py-1 rounded-base mb-5">
          <GraduationCap className="w-4 h-4 text-foreground shrink-0" aria-hidden="true" />
          <span className="text-sm font-bold text-foreground">
            {STATS.freeCount} completely free benefits inside
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-4"
        >
          Your Student ID is{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Worth Thousands.</span>
            <span
              className="absolute inset-x-0 bottom-0 h-4 bg-discount z-0"
              aria-hidden="true"
            />
          </span>
        </h1>

        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          Discover <strong>{STATS.totalBenefits}+ verified discounts</strong> across{' '}
          <strong>{STATS.totalCategories} categories</strong> — tech, streaming, travel, and more.
          Unlock over <strong>{STATS.estimatedValue}</strong> in value.
        </p>

        {/* Stats bar */}
        <dl className="grid grid-cols-3 gap-4 max-w-lg mx-auto" aria-label="Site statistics">
          {[
            { Icon: Tag,          value: `${STATS.totalBenefits}+`, label: 'Total Benefits' },
            { Icon: Sparkles,     value: `${STATS.freeCount}`,      label: 'Totally Free'   },
            { Icon: GraduationCap,value: STATS.estimatedValue,       label: 'Est. Value'     },
          ].map(({ Icon, value, label }) => (
            <div
              key={label}
              className="bg-secondary-background border-2 border-border shadow-shadow rounded-base p-3 flex flex-col items-center gap-1"
            >
              <Icon className="w-4 h-4 text-main" aria-hidden="true" />
              <dt className="text-[11px] text-foreground/50 uppercase tracking-wider order-last">
                {label}
              </dt>
              <dd className="text-2xl font-heading text-foreground">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
