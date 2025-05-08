import React from 'react';

// Lazy load the SplashCursor for performance optimization
const SplashCursor = React.lazy(() => import('../components/ui/SplashCursor.jsx'));

// Navigation components
import Navbar from '../components/navigation/Navbar.jsx';
import Footer from '../components/navigation/Footer.jsx';
import DotScrollBar from '../components/navigation/DotScrollBar.jsx';

// Page sections
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark items-center justify-center overflow-clip">

      {/* Navigation bar at the top */}
      <Navbar />

      {/* Main content sections */}
      <Home />
      <About />
      <Projects />
      <Contact />

      {/* Navigation dot scrollbar for page section tracking */}
      <DotScrollBar />

      {/* Footer at the bottom */}
      <Footer />

      {/* Suspense fallback for lazy-loaded SplashCursor */}
      <React.Suspense fallback={<div />}>
        <SplashCursor />
      </React.Suspense>

    </div>
  );
};

export default LandingPage;
