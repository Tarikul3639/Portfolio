import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard.jsx';
import Image from '../../assets/image/Tarikul Islam.webp';
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
    <section id='about' className="relative py-24 bg-background-light dark:bg-[#050505] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-16 text-center lg:text-left">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-primary font-black text-[10px] tracking-[0.4em] uppercase">
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

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: 3D IMAGE CARD (Spans 5 columns) */}
          <motion.div 
            className="lg:col-span-5 perspective-[1500px] h-full"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative group h-full p-2 bg-white/5 border border-white/10 rounded-[3.5rem] backdrop-blur-3xl shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              
              <div className="relative h-full overflow-hidden rounded-[3rem] bg-[#0a0a0a] ring-1 ring-white/10">
                {/* HUD Elements */}
                <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl z-30" />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-xl z-30" />
                
                <motion.div style={{ translateZ: 50 }} className="h-full">
                  <motion.img 
                    src={Image} 
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                </motion.div>

                {/* Info Overlay */}
                <div className="absolute bottom-10 left-10 right-10 z-30">
                  <motion.div style={{ translateZ: 100 }} className="flex items-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">Tarikul_Islam.sys</span>
                  </motion.div>
                  <motion.h3 style={{ translateZ: 130 }} className="text-3xl font-black text-white italic uppercase leading-none">
                    Full Stack <span className="text-primary block text-xl not-italic mt-1">Developer</span>
                  </motion.h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: TECH STACK GRID (Spans 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 h-full">
              {techStack.map((tech, i) => (
                <SpotlightCard key={i} className="flex flex-col items-center justify-center p-6 bg-white/5 border-white/5 rounded-[2.5rem]">
                  <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }} className="text-4xl mb-3">
                    {tech.icon}
                  </motion.div>
                  <span className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">{tech.label}</span>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* FULL WIDTH BOTTOM: EDUCATION CARD */}
          <div className="lg:col-span-12 mt-4">
            <motion.div whileHover={{ y: -5 }} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[3rem] blur opacity-25 group-hover:opacity-75 transition duration-700" />
              
              <SpotlightCard className="relative overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[3rem] p-8 md:p-12">
                <div className="absolute -bottom-6 -right-6 text-[12rem] font-black text-white/[0.02] italic pointer-events-none group-hover:text-primary/[0.04] transition-all duration-700">
                  BUBT
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
                  <div className="text-center lg:text-left space-y-4">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-black uppercase">
                      Academic Background
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-tight group-hover:text-primary transition-colors">
                      BANGLADESH UNIVERSITY OF <br className="hidden md:block" /> BUSINESS & TECHNOLOGY
                    </h2>
                    <p className="text-neutral-500 font-bold text-sm uppercase tracking-[0.3em] flex justify-center lg:justify-start items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Computer Science and Engineering
                    </p>
                  </div>

                  {/* CGPA Circle */}
                  <div className="relative shrink-0">
                    <div className="relative h-44 w-44 rounded-full border-2 border-dashed border-neutral-800 flex flex-col items-center justify-center transition-all duration-700 group-hover:border-primary/50">
                      <div className="text-center">
                        <span className="text-[10px] font-black text-neutral-500 uppercase block">Current</span>
                        <div className="text-6xl font-black text-white italic">3.56</div>
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
                        <defs>
                          <linearGradient id="gradAbout" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00eeff" />
                            <stop offset="100%" stopColor="var(--primary-color)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Skills Row */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-8">
                  {['Algorithms', 'System Design', 'Software Engineering', 'Mathematics'].map((skill, i) => (
                    <div key={i} className="text-center md:text-left">
                      <span className="text-[8px] font-black text-neutral-600 uppercase block mb-1">Focus {i+1}</span>
                      <span className="text-xs font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-widest">{skill}</span>
                    </div>
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