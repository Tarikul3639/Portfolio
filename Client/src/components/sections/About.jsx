import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard.jsx';
import Image from '../../assets/image/Tarikul.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiMongodb } from "react-icons/di";
import { SiTypescript, SiFramer } from "react-icons/si";
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import Express from '../../assets/icons/express-js.svg';
import SplitText from "../../components/ui/SplitText.jsx";

const About = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const techStack = [
    { label: 'TypeScript', icon: <SiTypescript className="text-[#3178c6]" /> },
    { label: 'React', icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" /> },
    { label: 'Framer', icon: <SiFramer className="text-pink-500" /> },
    { label: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} className="text-[#339933]" /> },
    { label: 'Express', icon: <img src={Express} className="h-4 dark:invert" /> },
    { label: 'MongoDB', icon: <DiMongodb className="text-emerald-500" /> },
  ];

  return (
    <section id='about' className="relative py-24 bg-slate-50 dark:bg-[#050505] overflow-hidden transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="text-primary font-black text-[10px] tracking-[0.4em] uppercase"
          >
            The Architect
          </motion.span>
          <div className="mt-4">
            <SplitText
              text="Driven By Innovation"
              className="text-5xl md:text-7xl font-black text-neutral-900 dark:text-white tracking-tighter italic"
              delay={30}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: 3D IMAGE CARD - Optimized for Light Mode */}
          <motion.div 
            className="lg:col-span-5 perspective-[2000px] min-h-[550px] relative group"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Container: Light mode uses a subtle gray/white while dark uses deep black */}
            <div className="relative h-full w-full overflow-hidden rounded-[3.8rem] bg-neutral-200 dark:bg-[#050505] border border-white dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-colors duration-500">
              
              <motion.div style={{ translateZ: 60 }} className="absolute inset-0 h-full w-full">
                <motion.img 
                  src={Image} 
                  className="w-full h-full object-cover scale-110 grayscale-[30%] dark:grayscale-[50%] group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000 ease-out"
                  style={{ filter: "brightness(0.8) contrast(1.1)" }}
                />
                {/* Gradient Overlay: Light mode is more transparent */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 dark:via-black/60 to-transparent opacity-95" />
              </motion.div>

              {/* HUD Elements: Primary color used for both modes */}
              <div className="absolute inset-0 p-10 z-20 pointer-events-none">
                <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-primary rounded-tl-3xl group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-primary rounded-br-3xl group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-10 right-10 text-right font-mono text-[8px] text-primary font-bold leading-tight uppercase tracking-widest drop-shadow-md">
                    Core_Pulse: Active <br /> Neural_Link: 98%
                </div>
              </div>

              {/* INFO OVERLAY */}
              <div className="absolute bottom-12 left-12 right-12 z-30">
                <motion.div 
                    style={{ translateZ: 120 }} 
                    className="inline-flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full bg-white/20 dark:bg-black/80 border border-white/30 dark:border-primary/40 backdrop-blur-md transition-colors"
                >
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#00eeff] animate-pulse" />
                  <span className="text-[9px] font-black text-white uppercase tracking-[0.4em]">Auth: Tarikul_Islam</span>
                </motion.div>

                <motion.div style={{ translateZ: 160 }}>
                  <h3 className="text-4xl font-black text-white italic uppercase leading-[0.85] drop-shadow-lg">
                    Full Stack <br />
                    <span className="text-primary not-italic text-5xl inline-block mt-2 relative drop-shadow-[0_0_15px_rgba(0,238,255,0.3)]">
                        DEVELOPER
                        <span className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-primary" />
                    </span>
                  </h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: TECH STACK GRID */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
              {techStack.map((tech, i) => (
                <SpotlightCard 
                  key={i} 
                  className="group/card flex flex-col items-center justify-center p-6 bg-white dark:bg-white/5 border-none shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2"
                >
                  <motion.div whileHover={{ rotate: 15, scale: 1.1 }} className="text-4xl mb-3 relative">
                    <div className="absolute inset-0 blur-2xl bg-primary/20 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="relative z-10">{tech.icon}</div>
                  </motion.div>
                  <span className="text-[10px] font-black uppercase text-neutral-800 dark:text-neutral-500 tracking-[0.2em] group-hover/card:text-primary transition-colors">
                    {tech.label}
                  </span>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* FULL WIDTH BOTTOM: EDUCATION CARD */}
          <div className="lg:col-span-12 mt-4">
            <motion.div whileHover={{ y: -5 }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[3rem] blur opacity-25 group-hover:opacity-75 transition duration-700" />
              <SpotlightCard className="relative overflow-hidden border-none bg-white dark:bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-none">
                <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-neutral-200/40 dark:text-white/[0.02] italic pointer-events-none group-hover:text-primary/[0.04] transition-all duration-700">
                  BUBT
                </div>
                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
                  <div className="text-center lg:text-left space-y-4">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase">
                      Academic Background
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white italic tracking-tighter leading-tight group-hover:text-primary transition-colors">
                      BANGLADESH UNIVERSITY OF <br className="hidden md:block" /> BUSINESS & TECHNOLOGY
                    </h2>
                    <p className="text-neutral-700 dark:text-neutral-500 font-bold text-sm uppercase tracking-[0.3em] flex justify-center lg:justify-start items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Computer Science and Engineering
                    </p>
                  </div>

                  <div className="relative shrink-0">
                    <div className="relative h-44 w-44 rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-800 flex flex-col items-center justify-center group-hover:border-primary/50 transition-all duration-700">
                      <div className="text-center">
                        <span className="text-[10px] font-black text-neutral-500 uppercase block">Current</span>
                        <div className="text-6xl font-black text-neutral-900 dark:text-white italic">3.56</div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">2022-2026</span>
                      </div>
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <motion.circle
                          cx="50%" cy="50%" r="48%" fill="none" stroke="url(#gradAbout)"
                          strokeWidth="4" strokeDasharray="100"
                          initial={{ strokeDashoffset: 100 }}
                          whileInView={{ strokeDashoffset: 11 }}
                          transition={{ duration: 2 }}
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-neutral-200 dark:border-white/5 pt-8">
                  {['Algorithms', 'System Design', 'Software Engineering', 'Mathematics'].map((skill, i) => (
                    <div key={i} className="text-center md:text-left">
                      <span className="text-[8px] font-black text-neutral-500 dark:text-neutral-600 uppercase block mb-1">Focus {i+1}</span>
                      <span className="text-xs font-black text-neutral-900 dark:text-white/70 group-hover:text-primary transition-colors uppercase tracking-[0.15em]">{skill}</span>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* SVG Gradient Defs */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="gradAbout" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00eeff" /><stop offset="100%" stopColor="#0066ff" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}

export default About;