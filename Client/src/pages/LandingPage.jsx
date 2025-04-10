import Navbar from '../components/navigation/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Footer from '../components/navigation/Footer.jsx';
const LandingPage = () => {
  return (
    <div className="flex flex-col bg-[#030712], opacity 2.83e+3%] xs:overflow-x-hidden items-center justify-center overflow-hidden">
      <Navbar />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};
export default LandingPage;

