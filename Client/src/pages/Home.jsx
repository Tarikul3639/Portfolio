import React from 'react';

// Lazy load the SplashCursor for performance optimization
const SplashCursor = React.lazy(() => import('../components/ui/SplashCursor.jsx'));
const Spotlight = React.lazy(() => import('../components/ui/Spotlight.jsx'));

// Navigation components
import Navbar from '../components/navigation/Navbar.jsx';
import Footer from '../components/navigation/Footer.jsx';
import DotScrollBar from '../components/navigation/DotScrollBar.jsx';

// Page sections
import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Projects from '../components/sections/Projects.jsx';
import Contact from '../components/sections/Contact.jsx';

const Home = () => {
  return (
    <div className="relative w-screen overflow-hidden">

      {/* Navigation bar at the top */}
      <Navbar />

      {/* Main content sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Navigation dot scrollbar for page section tracking */}
      <DotScrollBar />

      {/* Footer at the bottom */}
      <Footer />

      {/* Suspense fallback for lazy-loaded */}
      <React.Suspense fallback={<div />}>
        <Spotlight />
      </React.Suspense>

      <React.Suspense fallback={<div />}>
        <SplashCursor />
      </React.Suspense>

    </div>
  );
};

export default Home;
