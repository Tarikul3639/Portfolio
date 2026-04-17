import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Loader and Toaster for better UX during page transitions and notifications
import PageLoader from "@/components/ui/PageLoader";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport settings for responsive design and mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// SEO META (IMPORTANT)
export const metadata: Metadata = {
  // Manifest and base URL for SEO and PWA support
  manifest: "/manifest.json",
  metadataBase: new URL("https://tarikul-islam.me"),

  title: {
    default: "Tarikul Islam | Full Stack Web Developer",
    template: "%s | Tarikul Islam",
  },

  alternates: {
    canonical: "https://tarikul-islam.me",
  },

  description:
    "Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web applications. Passionate about building scalable and user-friendly digital experiences.",

  keywords: [
    "Tarikul Islam",
    "Full Stack Developer",
    "React Developer",
    "Nest.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Bangladesh",
  ],

  authors: [{ name: "Tarikul Islam" }],

  creator: "Tarikul Islam",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    apple: "/icon512_rounded.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarikul-islam.me",
    title: "Tarikul Islam | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js and modern web applications.",
    siteName: "Tarikul Islam Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tarikul Islam | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, Node.js and modern web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },

  // Developer Social Links (IMPORTANT for SEO trust)
  other: {
    sameAs: JSON.stringify([
      "https://github.com/tarikul3639",
      "https://www.linkedin.com/in/tarikul3639/"
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tarikul Islam",
    url: "https://tarikul-islam.me",
    jobTitle: "Full Stack Web Developer",
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
        "font-sans",
        inter.variable
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