
// Normal/Eager Imports (Directly Loaded)
import Navbar from '../components/navigation/navbar/index.jsx';
import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Projects from '../components/sections/Projects.jsx';
import Contact from '../components/sections/Contact.jsx';
import Footer from '../components/navigation/Footer.jsx';
import Spotlight from '../components/ui/Spotlight.jsx';
import DotScrollBar from '../components/navigation/DotScrollBar.jsx';

const Home = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#050505]">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections - Loaded Sequentially */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* UI Elements and Footer */}
      <DotScrollBar />
      <Footer />
      
      {/* Mouse Effect Overlay */}
      <Spotlight />
    </div>
  );
};

export default Home;