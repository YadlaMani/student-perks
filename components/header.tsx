'use client';

import { GraduationCap, ExternalLink, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = resolvedTheme === 'dark';
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-9 h-9 border-2 border-border rounded-base shadow-shadow bg-background text-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {isDark ? (
        <Sun className="w-4 h-4" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
}

export function Header() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-background border-b-2 border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <a
            href="/"
            aria-label="Student Perks Home"
            className="flex items-center gap-2 font-heading text-lg sm:text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            <span
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-main rounded-base border-2 border-border shadow-shadow shrink-0"
              aria-hidden="true"
            >
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-main-foreground" />
            </span>
            <span className="text-foreground">Student</span>
            <span className="text-main">Perks</span>
          </a>

          {/* Right actions */}
          <nav aria-label="Site navigation" className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="border-2 border-border shadow-shadow font-bold bg-main text-main-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              <a
                href="https://github.com/YadlaMani/student-benefits"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contribute on GitHub (opens in new tab)"
              >
                <ExternalLink className="w-4 h-4 sm:mr-1.5" aria-hidden="true" />
                <span className="hidden sm:inline">Contribute</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
