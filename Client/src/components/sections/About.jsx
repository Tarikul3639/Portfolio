import React from 'react';
import SpotlightCard from '../ui/SpotlightCard.jsx';
import Image from '../../assets/image/Tarikul Islam.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Rambo from '../../assets/icons/Rambo.svg';
import FarmerMotion from '../../assets/icons/Motion.svg';
import WebRTC from '../../assets/icons/webrtc-svgrepo-com.svg';
import C_Plus from '../../assets/icons/c-plus-plus.svg';
import C_programming from '../../assets/icons/C_Programming_Language.svg';
import tailwind from '../../assets/icons/tailwind-css-icon.svg';
import socket from '../../assets/icons/socket-io-icon.svg';
import Express from '../../assets/icons/express-js.svg';
import SplitText from "../../components/ui/SplitText.jsx";

// About Me description
const AboutMe = [
  `I specialize in frontend development, creating dynamic, visually engaging, and highly responsive websites that provide seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I focus on building modern web interfaces that are not only aesthetically appealing but also optimized for performance and accessibility. I have extensive experience with frameworks like React and Tailwind CSS, enabling me to create interactive, scalable, and efficient applications. Whether designing sleek UI components, implementing smooth animations, or enhancing user interactions, my goal is to develop web solutions that are both functional and innovative.`
];

const About = () => {
  // Tech class for styling tech stack items
  const TechClass =
    'inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs border border-primary-light/50      dark:border-primary-dark/30 hover:motion-preset-wiggle motion-duration-1000';
  const CardBackground = 'bg-primary/2 dark:bg-primary/2';

  const techStack = [
    { label: 'HTML', icon: <FontAwesomeIcon icon={faHtml5} style={{ color: '#e34c26' }} />, delay: 0.05 },
    { label: 'CSS', icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, delay: 0.1 },
    { label: 'JavaScript', icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, delay: 0.15 },
    { label: 'ReactJS', icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, delay: 0.2 },
    { label: 'Tailwind CSS', icon: <img src={tailwind} alt="Tailwind CSS" className="h-4" />, delay: 0.25 },
    { label: 'Framer Motion', icon: <img src={FarmerMotion} alt="Framer Motion" className="h-4" />, delay: 0.3 },
    { label: 'NodeJS', icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, delay: 0.35 },
    { label: 'ExpressJS', icon: <img src={Express} alt="Express JS" className="h-4" />, delay: 0.4 },
    { label: 'MongoDB', icon: <DiMongodb className="text-green-600 text-lg" />, delay: 0.45 },
    { label: 'Socket.io', icon: <img src={socket} alt="Socket.io" className="h-4" />, delay: 0.5 },
    { label: 'WebRTC', icon: <img src={WebRTC} alt="WebRTC" className="h-4" />, delay: 0.55 },
    { label: 'C', icon: <img src={C_programming} alt="C Programming" className="h-4" />, delay: 0.6 },
    { label: 'C++', icon: <img src={C_Plus} alt="C++" className="h-4" />, delay: 0.65 },
    { label: 'VS Code', icon: <VscVscode className="text-blue-500" />, delay: 0.7 },
    { label: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} style={{ color: 'gray' }} />, delay: 0.75 },
    { label: '', icon: <img src={Rambo} alt="Rambo" className="h-4" />, delay: 0.8 },
  ];


  // Animation variants for cards
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.5 },
  };

  return (
    <section id='about' className="relative About f-full flex w-screen flex-col items-center justify-center pt-20 mb-5 source-sans-3 text-base text-primary-light dark:text-primary-dark bg-background-light dark:bg-background-dark">
      <div className="flex flex-col justify-center max-w-7xl p-4">
        {/* Header */}
        <div className="my-15 md:my-30 px-2">
          <SplitText
            text="Let Me Introduce Myself"
            className="text-3xl font-[800] md:text-4xl mb-4 text-black dark:text-white max-w-4xl"
            delay={5}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="mt-5 max-w-sm mx-1">
            <SplitText
              text="Focused on innovation and solving problems, I'm passionate about building solutions that make a difference."
              className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base"
              delay={2}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="HELLO flex flex-col lg:flex-row justify-center space-x-4 space-y-4 w-full">
          {/* Profile Section */}
          <motion.div {...fadeInUp} className="w-full lg:w-1/3">
            <SpotlightCard className={`relative flex flex-col items-center justify-center h-full w-full lg:border border-primary-light/50 dark:border-primary-dark/15 rounded-sm ${CardBackground}`}>
              {/* Profile Image and Description */}
              <div className="flex flex-col items-center justify-center w-full space-y-6">
                {/* Profile Image */}
                <svg className='w-[250px] h-[250px] intersect:motion-opacity-in-0 motion-duration-[5s] max-lg:mb-6' viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" aria-label="Profile Image" role="img">
                  {/* Define mask shape */}
                  <mask id="maskPath" mask-type="alpha">
                    <path
                      d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                      fill="background-color"
                    />
                  </mask>

                  {/* Fill shape with base color */}
                  <path
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                    fill="background-color"
                  />

                  {/* Image clipped inside the path shape */}
                  <image
                    href={Image}
                    alt="Tarikul Islam"
                    x="-5"
                    y="0"
                    width="108%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    mask="url(#maskPath)"
                  />
                </svg>

                {/* About Me Description */}
                <h2 className="text-2xl font-bold mb-4">HI THERE, I'M TARIKUL</h2>

                <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 text-justify">
                  {AboutMe[0]}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Education Skills and Experience Section */}
          <div className="flex flex-col items-center justify-center space-y-4 h-full w-full lg:w-2/3">
            {/* Education */}
            <motion.div {...fadeInUp} className="w-full">
              <SpotlightCard className={`flex flex-col items-center justify-center w-full p-4 text-[15px] text-primary-light/90 dark:text-primary-dark/85 border-primary-light/50 dark:border-primary-dark/15 rounded-sm ${CardBackground}`}>
                <h1 className="outfit text-lg font-bold text-left w-full mb-2 text-primary-light dark:text-primary-dark">Education</h1>
                <a href="https://www.bubt.edu.bd/" target="_blank" rel="noopener noreferrer" className='inline-flex flex-row items-center justify-between w-full text-left'>
                  <p className="text-primary-light dark:text-primary-dark">Bangladesh University of Business and Technology</p>
                  <p className='text-end text-primary-light dark:text-primary-dark'>2022 - 2026</p>
                </a>
                <div className='flex flex-row items-center justify-between w-full'>
                  <p className="text-primary-light dark:text-primary-dark">Computer Science and Engineering</p>
                  <p className="text-primary-light dark:text-primary-dark">Current CGPA: 3.56</p>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Experience */}
            <motion.div {...fadeInUp} className="w-full">
              <SpotlightCard className={`Experience relative flex flex-col items-center justify-center w-full text-base p-4 border-primary-light/50 dark:border-primary-dark/15 rounded-sm text-primary-light dark:text-primary-dark ${CardBackground}`}>
                <h1 className="outfit text-lg font-bold text-left w-full mb-2">Experience</h1>
                <div className='flex flex-row items-center justify-between w-full text-sm'>
                  <p>Full Stack Developer</p>
                  <p>Feb 2024 - Present</p>
                </div>
                <div className='flex flex-row items-center justify-between w-full mb-2'>
                  <p>Self-initiated</p>
                  <p>Remote</p>
                </div>
                <div className='flex flex-col items-start w-full border-l border-primary-light/50 dark:border-primary-dark/50 px-6 text-primary-light/80 dark:text-primary-dark/80 text-sm font-normal'>
                  <p className='text-sm py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary-light/50 dark:before:bg-primary-dark/50'>
                    Developed a messaging web application, focusing on real-time communication features like messaging and calling.
                  </p>
                  <p className='text-sm py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary-light/50 dark:before:bg-primary-dark/50'>
                    Implemented a Load Shedding Notification System.
                  </p>
                  <p className='text-sm py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary-light/50 dark:before:bg-primary-dark/50'>
                    Worked on multiple personal projects.
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
            {/* Skills Section */}
            <motion.div {...fadeInUp}>
              <SpotlightCard className={`Skills relative flex flex-col items-start w-full p-4 outfit border-primary-light/50 dark:border-primary-dark/15 rounded-sm ${CardBackground}`}>
                <h1 className='text-lg font-semibold text-left w-full mb-4'>Tech Stack</h1>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(({ label, icon, delay }, index) => (
                    <motion.span
                      key={index}
                      className={TechClass}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ delay, duration: 0.5 }}
                    >
                      {icon}
                      {label && <span>{label}</span>}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(About);