"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import WebRTC from '../assets/icons/webrtc-svgrepo-com.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { DiMongodb } from "react-icons/di";
import Rambo from '../assets/icons/Rambo.svg';
import FarmerMotion from '../assets/icons/Motion.svg';
import ChatFly from '../assets/image/ChatFly.png';
import Electrifiers from '../assets/image/Electrifiers.webp';
import Portfolio from '../assets/image/Portfolio.webp';
import tailwind from '../assets/icons/tailwind-css-icon.svg';
import socket from '../assets/icons/socket-io-icon.svg';
import Express from '../assets/icons/express-js.svg';
import SpotlightCard from '../components/ui/SpotlightCard.jsx';
import SplitText from "../components/ui/SplitText.jsx";

const Projects = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const timelineData = [
    {
      title: "ChatFly", // Added title property
      link: "https://github.com/Tarikul3639/ChatFly",
      name: "ChatFly",
      description:
        "ChatFly is a real-time web-based chat app with secure user login, file sharing, media (image, video, text) exchange, and voice messaging for smooth, interactive communication.",
      image: ChatFly,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
        { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB' },
        { icon: <img src={socket} className="text-[#3B82F6] h-4 " />, name: 'Socket.io' },
        { icon: <img src={WebRTC} alt="WebRTC" className="h-4" />, name: 'WebRTC' },
        { icon: <img src={Express} className="h-4" />, name: 'Express.js' },
      ]
    },
    {
      title: "Electrifiers", // Added title property
      link: "https://github.com/Tarikul3639/ELECTRIFIERS",
      name: "Electrifiers",
      description:
        "Electrifiers is a load-shedding notification system that provides real-time updates to residents based on location, along with energy-saving tips and emergency solutions.",
      image: Electrifiers,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
        { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB' },
        { icon: <img src={tailwind} className="h-4" />, name: 'Tailwind CSS' },
        { icon: <img src={socket} className=" h-4 " />, name: 'Socket.io' },
        { icon: <img src={Express} className="h-4" />, name: 'Express.js' },
      ]
    },
    {
      title: "Portfolio", // Added title property
      link: "https://github.com/Tarikul3639/Portfolio",
      name: "Portfolio",
      description:
        "This portfolio website showcases my development skills, projects, and technical stack using modern frontend technologies and animations.",
      image: Portfolio,
      tech: [
        { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
        { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
        { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
        { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
        { icon: <img src={tailwind} className="h-4" />, name: 'Tailwind CSS' },
        { icon: <img src={FarmerMotion} alt="Framer Motion" className="h-4" />, name: 'Framer Motion' },
        { icon: <img src={Rambo} alt="Custom Tech" className="h-4" />, name: 'Rambo' },
        { icon: <img src={Express} className="h-4" />, name: 'Express.js' },
      ]
    },
  ];


  // Define a single content rendering function
  const renderContent = (tech, image, description, name, link) => (
    <SpotlightCard className="custom-spotlight-card flex flex-col items-start gap-4 border border-primary-light/15 dark:border-primary-dark/15 p-4 bg-primary/5 dark:bg-primary/5 rounded-sm shadow-lg transition duration-100 ease-in-out">
      <div className="w-full hover:scale-101 overflow-hidden transition-transform duration-100 ease-in-out">
        <img
          src={image}
          alt={`${name} interface`}
          className="h-50 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-80 lg:h-80"
        />
      </div>
      <h2 className="w-full items-left text-2xl font-bold mb-2">{name}</h2>
      <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4 justify-start w-full">
        {tech.map((t, i) => (
          <span
            key={i}
            className={`inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs border border-primary-dark/40 intersect:motion-preset-slide-up hover:motion-preset-wiggle delay-5000 motion-duration-1000 text-primary-light dark:text-primary-dark motion-delay-${100 + i * 50}`}
          >
            {t.icon} {t.name}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-5">
        <span
          onClick={() => window.open(link, "_blank")}
          className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-neutral-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 intersect:motion-preset-slide-up cursor-pointer"
        >
          GitHub<FontAwesomeIcon icon={faGithub} />
        </span>
        <span className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-600 shadow-md hover:bg-blue-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5 intersect:motion-preset-slide-up cursor-pointer">
          Live Site<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </div>
    </SpotlightCard>
  );

  return (
    <section
      className="w-screen min-w-[345px] font-sans md:px-10 bg-background-light dark:bg-background-dark text-primary-light dark:text-primary-dark"
      ref={containerRef}
      id="projects"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto md:mt-30 px-2">
        <h1 className="mt-10 mt-20 mx-4">
          <SplitText
            text="Changelog from my journey"
            className="text-3xl font-[800] md:text-4xl text-black dark:text-white max-w-4xl"
            delay={10}
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
            delay={5}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

        </div>
      </div>
      {/* main content */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {timelineData.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            {/* Circle */}
            <div className="sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm lg:w-full">
              <div className="h-10 absolute left-0 md:left-3 w-10 rounded-full bg-background-light dark:bg-[#0A0A0A] shadow-4xl flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              {/* Project name */}
              <h3 className="hidden lg:block text-xl lg:pl-20 lg:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-20 pr-4 lg:pl-4 w-full">
              <h3 className="lg:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {/* Use the shared renderContent function instead of item.content */}
              {renderContent(item.tech, item.image, item.description, item.name, item.link)}
            </div>
          </div>
        ))}

        {/* Time line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-5 md:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
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

export default Projects;