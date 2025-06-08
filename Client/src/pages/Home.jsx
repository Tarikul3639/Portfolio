import React, { Suspense, lazy } from 'react';

// Eager load Hero only
import Hero from '../components/sections/Hero.jsx';

// Lazy‐load everything else
const About         = lazy(() => import('../components/sections/About.jsx'));
const Projects      = lazy(() => import('../components/sections/Projects.jsx'));
const Contact       = lazy(() => import('../components/sections/Contact.jsx'));
const Spotlight     = lazy(() => import('../components/ui/Spotlight.jsx'));
const DotScrollBar  = lazy(() => import('../components/navigation/DotScrollBar.jsx'));

// Navigation components
import Navbar    from '../components/navigation/Navbar.jsx';
import Footer    from '../components/navigation/Footer.jsx';
import Loader    from '../components/common/Loader.jsx';

// LoadingFallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#111111] overflow-hidden">
    <Loader loading={true} variant="small" size={50} />
  </div>
);

const Home = () => {
  return (
    <div className="relative w-screen overflow-hidden">
      <Navbar />

      {/* Hero eagerly */}
      <Hero />

      {/* The rest lazy‐loaded when first rendered */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Projects />
        <Contact />
        <DotScrollBar />
      </Suspense>

      <Footer />

      {/* Spotlight cursor overlay, also lazy */}
      <Suspense fallback={<LoadingFallback />}>
        <Spotlight />
      </Suspense>
    </div>
  );
};

export default Home;
