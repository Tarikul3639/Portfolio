import type { Metadata } from "next";

import Hero from "@/components/hero";
import { About } from "@/components/about";
import Projects from "@/components/projects";
import { Contact } from "@/components/contact";
import Navbar from "@/components/navbar";
import DotScrollBar from "@/components/dotScrollBar/DotScrollBar";
import { Footer } from "@/components/footer";
import { ProgressBar } from "@/components/ui/ProgressBar";

const BASE_URL = "https://tarikul-islam.me";

export const metadata: Metadata = {
  title: "Tarikul Islam | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specializing in React, Next.js, NestJS, TypeScript, Node.js, and scalable web applications.",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: "Tarikul Islam | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, NestJS, TypeScript, and scalable web applications.",
    url: BASE_URL,
    type: "website",
    siteName: "Tarikul Islam",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Tarikul Islam",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tarikul Islam | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, NestJS, TypeScript, and scalable web applications.",
    images: ["/og"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Progress Bar */}
      <ProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Scroll Indicator */}
      <DotScrollBar
        sections={["Home", "About", "Projects", "Contact", "Footer"]}
      />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}