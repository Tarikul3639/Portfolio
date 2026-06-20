// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import PageLoader from "@/components/ui/PageLoader";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://tarikul-islam.me";

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Base ──
  metadataBase: new URL(BASE_URL),
  manifest: "/manifest.json",
  applicationName: "Tarikul Islam Portfolio",
  generator: "Next.js",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },

  // ── Title ──
  title: {
    default: "Tarikul Islam | Full Stack Web Developer",
    template: "%s | Tarikul Islam",
  },

  // ── Description & Keywords ──
  description:
    "Full Stack Web Developer specializing in React, Next.js, NestJS, and TypeScript. Building scalable, high-performance web applications from Dhaka, Bangladesh.",

  keywords: [
    "Tarikul Islam",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
    "Dhaka Developer",
  ],

  // ── Author / Creator ──
  authors: [{ name: "Tarikul Islam", url: BASE_URL }],
  creator: "Tarikul Islam",
  publisher: "Tarikul Islam",

  // ── Canonical ──
  alternates: { canonical: BASE_URL },

  // ── Icons (matched to actual /public files) ──
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },   // scalable
      { url: "/icon1.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/apple-icon.png",                          // exists in public ✓
    other: [
      { rel: "mask-icon", url: "/icon0.svg", color: "#0a0a0a" },
    ],
  },

  // ── Open Graph ──
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Tarikul Islam Portfolio",
    title: "Tarikul Islam | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, NestJS, and TypeScript.",
    images: [
      {
        url: "/og",      // create this file: 1200×630px
        width: 1200,
        height: 630,
        alt: "Tarikul Islam – Full Stack Web Developer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X ──
  twitter: {
    card: "summary_large_image",
    title: "Tarikul Islam | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, NestJS, and TypeScript.",
    images: ["/og"],
    creator: "@tarikul3639",      // Twitter/X handle (without @) — optional but good for social proof
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── sameAs (Social Trust Signals) ──
  other: {
    sameAs: JSON.stringify([
      "https://github.com/tarikul3639",
      "https://www.linkedin.com/in/tarikul3639/",
    ]),
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tarikul Islam",
    url: BASE_URL,
    image: `${BASE_URL}/og`,
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, NestJS, and TypeScript — based in Dhaka, Bangladesh.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "NestJS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    sameAs: [
      "https://github.com/tarikul3639",
      "https://www.linkedin.com/in/tarikul3639/",
    ],
  };

  return (
    <html
      lang="en"
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        inter.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader>{children}</PageLoader>
        <Toaster />
      </body>
    </html>
  );
}