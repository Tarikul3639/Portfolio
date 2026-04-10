import Hero from "@/components/hero";
import { About } from "@/components/about";
import Projects from "@/components/projects";
import { Contact } from "@/components/contact";
import Navbar from "@/components/navbar";
import DotScrollBar from "@/components/dotScrollBar/DotScrollBar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <Navbar />

      {/* Scroll Indicator */}
      <DotScrollBar sections={["Home", "About", "Projects", "Contact", "Footer"]} />

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