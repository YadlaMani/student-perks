import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Student Perks — Your Student ID is Worth Thousands",
    template: "%s | Student Perks",
  },
  description:
    "Discover 100+ verified student discounts across tech, software, streaming, travel, fashion, and more. Free and heavily discounted deals for college and university students.",
  keywords: [
    "student discounts",
    "student deals",
    "free software for students",
    "college discounts",
    "student id perks",
    "student benefits 2025",
    "university discounts",
  ],
  authors: [{ name: "Student Perks" }],
  creator: "Student Perks",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Student Perks — Your Student ID is Worth Thousands",
    description:
      "100+ verified student discounts and free benefits — tech, streaming, travel, fashion & more. All in one place.",
    type: "website",
    locale: "en_US",
    siteName: "Student Perks",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Perks — Your Student ID is Worth Thousands",
    description:
      "100+ verified student discounts and free benefits — tech, streaming, travel, fashion & more.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#141414" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
