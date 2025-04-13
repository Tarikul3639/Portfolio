import Navbar from '../components/navigation/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from '../components/navigation/Footer.jsx';
const LandingPage = () => {
  return (
    <div className="flex flex-col bg-black opacity-90 items-center justify-center overflow-clip">
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
