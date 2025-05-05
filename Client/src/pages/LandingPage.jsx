import Navbar from '../components/navigation/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from '../components/navigation/Footer.jsx';
import Threads from '../components/ui/Threads.jsx';
const LandingPage = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark items-center justify-center overflow-clip">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <div className="relative max-w-7xl w-full h-60 min-w-[345px] bg-background-light dark:bg-background-dark">
        <Threads
          amplitude={3}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};
export default LandingPage;
