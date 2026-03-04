import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'StudentPerks — Your Student ID is Worth Thousands',
  description:
    'Discover 100+ verified student discounts and free benefits — tech, software, streaming, travel, fashion, and more. All in one place.',
  keywords: [
    'student discounts', 'student benefits', 'student deals',
    'free student software', 'student id benefits', 'college discounts',
  ],
  openGraph: {
    title: 'StudentPerks — Your Student ID is Worth Thousands',
    description: 'Discover 100+ verified student discounts and free benefits.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0057FF',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
