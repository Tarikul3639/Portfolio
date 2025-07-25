//------ Client\src\pages\Projects.jsx-----//

// Animation and React imports
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// SVG and icon imports
import WebRTC from '../../assets/icons/webrtc-svgrepo-com.svg';
import Rambo from '../../assets/icons/Rambo.svg';
import FarmerMotion from '../../assets/icons/Motion.svg';
import tailwind from '../../assets/icons/tailwind-css-icon.svg';
import socket from '../../assets/icons/socket-io-icon.svg';
import Express from '../../assets/icons/express-js.svg';
const cloudinary = './icon/Cloudinary.svg';
const resend = './icon/resend.svg';

// Project images
const ChatFly = './image/ChatFly.png';
const Electrifiers = './image/Electrifiers.webp';
const Portfolio = './image/Portfolio.webp';
const krishokPalli = './image/krishok-palli.png';

// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Other libraries and components
import { DiMongodb } from "react-icons/di";
import SpotlightCard from '../ui/SpotlightCard.jsx';
import SplitText from "../ui/SplitText.jsx";

/**
 * Projects Component
 * Displays a timeline of projects with animations
 */

const Projects = () => {
  // --- Refs and State ---
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Calculate height for timeline animation
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }

    // Function to recalculate on resize
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  // Set up scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Transform values for animation effects
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // --- Project Data ---
  const timelineData = [
    {
      title: "Krishok Palli",
      link: "https://github.com/Tarikul3639/Krishok-Palli",
      Live_link: "https://krishok-palli.netlify.app/",
      name: "Krishok Palli",
      description: "Krishok Palli is a comprehensive platform for farmers, offering features like crop management, weather updates, and a marketplace for agricultural products.",
      image: krishokPalli,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS', delay: 50 },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript', delay: 100 },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS', delay: 150 },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS', delay: 200 },
        { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB', delay: 250 },
        { icon: <img loading="lazy" alt="Tailwind" src={tailwind} className="h-4" />, name: 'Tailwind CSS', delay: 300 },
        { icon: <img loading="lazy" alt="Express" src={Express} className="h-4" />, name: 'Express.js', delay: 350 },
        { icon: <img loading="lazy" alt="Cloudinary" src={cloudinary} className="h-4" />, name: null, delay: 400 },
        { icon: <img loading="lazy" alt="Resend" src={resend} className="h-4" />, name: 'Resend', delay: 450 },
      ]
    },
    {
      title: "ChatFly",
      link: "https://github.com/Tarikul3639/ChatFly",
      Live_link: "https://chatfly.netlify.app/",
      name: "ChatFly",
      description:
        "ChatFly is a real-time web-based chat app with secure user login, file sharing, media (image, video, text) exchange, and voice messaging for smooth, interactive communication.",
      image: ChatFly,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS', delay: 50 },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript', delay: 100 },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS', delay: 150 },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS', delay: 200 },
        { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB', delay: 250 },
        { icon: <img loading="lazy" alt="Socket" src={socket} className="text-[#3B82F6] h-4 " />, name: 'Socket.io', delay: 300 },
        { icon: <img loading="lazy" src={WebRTC} alt="WebRTC" className="h-4" />, name: 'WebRTC', delay: 350 },
        { icon: <img loading="lazy" alt="Express" src={Express} className="h-4" />, name: 'Express.js', delay: 400 },
      ]
    },
    {
      title: "Electrifiers",
      link: "https://github.com/Tarikul3639/ELECTRIFIERS",
      Live_link: "https://electrifiers.netlify.app/",
      name: "Electrifiers",
      description:
        "Electrifiers is a load-shedding notification system that provides real-time updates to residents based on location, along with energy-saving tips and emergency solutions.",
      image: Electrifiers,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS', delay: 50 },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript', delay: 100 },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS', delay: 150 },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS', delay: 200 },
        { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB', delay: 250 },
        { icon: <img loading="lazy" alt="Tailwind" src={tailwind} className="h-4" />, name: 'Tailwind CSS', delay: 350 },
        { icon: <img loading="lazy" alt="Socket" src={socket} className=" h-4 " />, name: 'Socket.io', delay: 400 },
        { icon: <img loading="lazy" alt="Express" src={Express} className="h-4" />, name: 'Express.js', delay: 450 },
      ]
    },
    {
      title: "Portfolio",
      link: "https://github.com/Tarikul3639/Portfolio",
      Live_link: "https://tarikul-islam.netlify.app/",
      name: "Portfolio",
      description:
        "This portfolio website showcases my development skills, projects, and technical stack using modern frontend technologies and animations.",
      image: Portfolio,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS', delay: 50 },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript', delay: 100 },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS', delay: 150 },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS', delay: 200 },
        { icon: <img loading="lazy" alt="Tailwind" src={tailwind} className="h-4" />, name: 'Tailwind CSS', delay: 250 },
        { icon: <img loading="lazy" src={FarmerMotion} alt="Framer Motion" className="h-4" />, name: 'Framer Motion', delay: 300 },
        { icon: <img loading="lazy" src={Rambo} alt="Custom Tech" className="h-4" />, name: 'Rambo', delay: 350 },
        { icon: <img loading="lazy" alt="Express" src={Express} className="h-4" />, name: 'Express.js', delay: 400 },
      ]
    },
  ];


  /**
   * Renders content for a project card
   * @param {Array} tech - Array of technology objects
   * @param {string} image - Project image
   * @param {string} description - Project description
   * @param {string} name - Project name
   * @param {string} link - GitHub link
   */
  const renderContent = (tech, image, description, name, link, Live_link, index) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      custom={1}
      className="w-full relative"
    >
      <SpotlightCard className="custom-spotlight-card flex flex-col items-start gap-4 border border-primary-light/15 dark:border-primary-dark/15 p-4 bg-primary/2 dark:bg-primary/2 rounded-sm shadow-lg transition duration-100 ease-in-out">
        {/* Project image */}        <div className="w-full hover:scale-101 overflow-hidden transition-transform duration-100 ease-in-out">
          <img
            src={image}
            loading="lazy"
            width="800"
            height="450"
            fetchpriority={index === 0 ? "high" : "auto"}
            decoding="async"
            alt={`${name} interface`}
            className="h-50 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-80 lg:h-80"
          />
        </div>

        {/* Project details */}
        <h2 className="w-full items-left text-2xl font-bold mb-2">{name}</h2>
        <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          {description}
        </p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-4 justify-start w-full">
          {tech.map((t, i) => (
            <span
              key={i}
              className={`inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs border border-primary-dark/40 intersect:motion-preset-slide-up hover:motion-preset-wiggle delay-5000 motion-duration-1000 text-primary-light dark:text-primary-dark`}
              style={{ animationDelay: `${t.delay || 0}ms` }}
            >
              {t.icon} {t.name}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-5">
          <span
            onClick={() => window.open(link, "_blank")}
            className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-neutral-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 intersect:motion-preset-slide-up cursor-pointer z-50"
          >
            GitHub<FontAwesomeIcon icon={faGithub} />
          </span>
          <span
            onClick={() => window.open(Live_link, "_blank")}
            className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-blue-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 intersect:motion-preset-slide-up cursor-pointer z-50">
            Live Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </div>
      </SpotlightCard>
    </motion.div>
  );

  // --- Component Render ---
  return (
    <section
      id="projects"
      ref={containerRef}
      style={{ position: 'relative' }}
      className="relative w-screen min-w-[345px] font-sans md:px-10 bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto md:mt-30 px-2">
        <h1 className="mt-10 mt-20 mx-4">
          <SplitText
            text="Changelog from my journey"
            className="text-3xl font-[800] md:text-4xl text-black dark:text-white max-w-4xl"
            delay={5}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </h1>
        <div className="mt-5 max-w-sm mx-5">
          <SplitText
            text="I've been working on various projects. Here's a timeline of my journey."
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

      {/* Timeline Content */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">        {/* Map through project data and render each project */}
        {timelineData.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            {/* Timeline Circle and Title */}
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-0 md:left-3 w-10 rounded-full bg-background-light dark:bg-[#0A0A0A] shadow-4xl flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Desktop project title */}
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            {/* Project Content */}
            <div className="relative pl-12 sm:pl-20 pr-4 lg:pl-4 w-full">
              {/* Mobile project title */}
              <h3 className="lg:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {/* Render project card */}
              {renderContent(item.tech, item.image, item.description, item.name, item.link, item.Live_link, index)}
            </div>
          </div>
        ))}

        {/* Animated Timeline Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-5 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* Animated progress indicator */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);