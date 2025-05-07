import Navbar from '../components/navigation/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from '../components/navigation/Footer.jsx';
import SplashCursor from '../components/ui/SplashCursor.jsx';
import DotScrollBar from '../components/navigation/DotScrollBar.jsx';

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark items-center justify-center overflow-clip">
      <SplashCursor />
      <DotScrollBar />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default LandingPage;
