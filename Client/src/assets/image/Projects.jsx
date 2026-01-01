import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Assets
import WebRTC from '../../assets/icons/webrtc-svgrepo-com.svg';
import Rambo from '../../assets/icons/Rambo.svg';
import FarmerMotion from '../../assets/icons/Motion.svg';
import tailwind from '../../assets/icons/tailwind-css-icon.svg';
import socket from '../../assets/icons/socket-io-icon.svg';
import Express from '../../assets/icons/express-js.svg';

import ChatFly from '../../assets/image/ChatFly.png';
import Electrifiers from '../../assets/image/Electrifiers.webp';
import Portfolio from '../../assets/image/Portfolio.webp';
import krishokPalli from '../../assets/image/krishok-palli.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faTerminal, faCodeBranch, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { DiMongodb } from "react-icons/di";

import SpotlightCard from '../ui/SpotlightCard.jsx';
import SplitText from "../ui/SplitText.jsx";

const Projects = () => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) setHeight(contentRef.current.scrollHeight);
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const springProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const heightTransform = useTransform(springProgress, [0, 1], [0, height]);

  const timelineData = [
    {
      title: "Krishok Palli",
      link: "https://github.com/Tarikul3639/Krishok-Palli",
      Live_link: "https://krishok-palli.netlify.app/",
      description: "An AI-ready agricultural dashboard designed to empower local farmers with real-time data sync and crop analysis.",
      image: krishokPalli,
      version: "v4.0.2",
      tech: [
        { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React' },
        { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
        { icon: <img src={tailwind} alt="t" className="h-3" />, name: 'Tailwind' },
      ]
    },
    {
      title: "ChatFly",
      link: "https://github.com/Tarikul3639/ChatFly",
      Live_link: "https://chatfly.vercel.app/",
      description: "Next-gen communication suite with WebRTC mesh networking and low-latency socket pipelines.",
      image: ChatFly,
      version: "v2.1.0",
      tech: [
        { icon: <img src={socket} alt="s" className="h-3" />, name: 'Socket' },
        { icon: <img src={WebRTC} alt="w" className="h-3" />, name: 'WebRTC' },
        { icon: <img src={Express} alt="e" className="h-3 dark:invert" />, name: 'Express' },
      ]
    },
    {
      title: "Electrifiers",
      link: "https://github.com/Tarikul3639/ELECTRIFIERS",
      Live_link: "https://electrifiers.netlify.app/",
      description: "Smart grid monitoring system utilizing geolocation APIs to predict and notify power load distributions.",
      image: Electrifiers,
      version: "v1.8.5",
      tech: [
        { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React' },
        { icon: <img src={socket} alt="s" className="h-3" />, name: 'Socket' },
        { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
      ]
    }
  ];

  return (
    <section id="projects" ref={containerRef} className="relative py-40 bg-[#020202] text-white selection:bg-primary selection:text-black">
      
      {/* Dynamic Background Noise & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='filter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/baseFilter%3E%3Crect width='100%25' height='100%25' filter='url(%23filter)'/%3E%3C/svg%3E")` }} />
      
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Header - Cinematic Style */}
        <div className="mb-40 space-y-4">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4">
            <span className="h-[1px] w-20 bg-primary/50" />
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.8em]">Core Portfolio</span>
          </motion.div>
          <SplitText
            text="ENGINEERED_SOLUTIONS"
            className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.85] italic opacity-90"
            delay={50}
          />
        </div>

        {/* Timeline Content */}
        <div ref={contentRef} className="relative">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-12 md:gap-32 mb-64 last:mb-0">
              
              {/* Vertical ID / Year */}
              <div className="md:sticky md:top-60 self-start">
                <div className="flex flex-col items-center">
                  <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center group overflow-hidden">
                    <span className="text-2xl font-black italic tracking-tighter group-hover:scale-125 transition-transform duration-500">0{index + 1}</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }} 
                    whileInView={{ scale: 1 }} 
                    className="mt-6 text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em] vertical-text"
                  >
                    Build_{item.version}
                  </motion.div>
                </div>
              </div>

              {/* High-End Card */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <SpotlightCard className="relative p-0 border border-white/10 bg-neutral-900/50 backdrop-blur-xl rounded-[4rem] group overflow-hidden shadow-[0_0_50px_-20px_rgba(0,0,0,1)]">
                    
                    <div className="flex flex-col xl:flex-row">
                      
                      {/* Image Frame with Scanning Effect */}
                      <div className="xl:w-[45%] relative overflow-hidden group/img aspect-square xl:aspect-auto">
                        <img 
                          src={item.image} 
                          className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                          alt={item.title} 
                        />
                        
                        {/* THE SCANNER LINE */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-transparent h-20 w-full -top-20 animate-scan pointer-events-none shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]" />
                        
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                        
                        {/* Overlay Metadata */}
                        <div className="absolute top-8 left-8">
                           <div className="px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[9px] font-bold tracking-widest flex items-center gap-2 uppercase">
                             <FontAwesomeIcon icon={faMicrochip} className="text-primary animate-pulse" /> System_Active
                           </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="flex-1 p-8 md:p-16 flex flex-col justify-between space-y-12">
                        
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-primary" />
                            <h3 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none group-hover:text-primary transition-colors">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                            {item.description}
                          </p>
                        </div>

                        {/* Modernized Tech Stack */}
                        <div className="flex flex-wrap gap-3">
                          {item.tech.map((t, i) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ y: -5 }}
                              className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 group/tech hover:bg-white/[0.08] hover:border-primary/30 transition-all cursor-default"
                            >
                              <span className="scale-125 grayscale group-hover/tech:grayscale-0 transition-all">{t.icon}</span>
                              <span className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-500 group-hover/tech:text-white transition-colors">{t.name}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Interactive Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-5">
                          <button 
                            onClick={() => window.open(item.Live_link, "_blank")}
                            className="relative h-16 px-10 rounded-[2rem] bg-primary text-black font-black text-xs uppercase tracking-[0.2em] overflow-hidden group/btn flex items-center justify-center gap-3"
                          >
                            <span className="relative z-10">Live_Console</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            <div className="absolute inset-0 bg-white translate-y-16 group-hover:translate-y-0 transition-transform duration-500" />
                          </button>

                          <button 
                            onClick={() => window.open(item.link, "_blank")}
                            className="h-16 px-10 rounded-[2rem] border border-white/10 hover:bg-white hover:text-black transition-all font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                          >
                            Source_Code <FontAwesomeIcon icon={faGithub} />
                          </button>
                        </div>

                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </div>
            </div>
          ))}

          {/* Liquid Timeline Line */}
          <div className="absolute left-10 md:left-[48px] top-0 w-[2px] h-full bg-white/[0.02] pointer-events-none">
            <motion.div
              style={{ height: heightTransform }}
              className="absolute top-0 w-full bg-gradient-to-b from-primary via-blue-500 to-transparent"
            />
            {/* Pulsing Light on line */}
            <motion.div
              style={{ top: heightTransform }}
              className="absolute -left-1 h-10 w-[10px] bg-primary blur-md rounded-full opacity-50"
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
        @keyframes scan {
          0% { top: -20%; }
          100% { top: 120%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}} />
    </section>
  );
};

export default React.memo(Projects);