import Navbar from '../components/navigation/Navbar.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
const LandingPage = () => {
  return (
    <div className="flex flex-col xs:overflow-x-hidden items-center justify-center overflow-hidden">
      <Navbar />
      <Home/>
      <About/>
    </div>
  );
};
export default LandingPage;

