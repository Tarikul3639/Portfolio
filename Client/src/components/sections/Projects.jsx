import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode, faMicrochip } from '@fortawesome/free-solid-svg-icons';

import SpotlightCard from '../ui/SpotlightCard.jsx';
import { timelineData } from './projectsData.jsx';

const Projects = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

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

  return (
    <section id="projects" ref={containerRef} className="relative py-32 bg-white dark:bg-[#020202] text-neutral-900 dark:text-white overflow-hidden">

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        <div ref={contentRef} className="relative pl-12 md:pl-24 space-y-40">

          {/* Main Timeline Line */}
          <div className="absolute left-0 top-0 w-[1px] h-full bg-neutral-200 dark:bg-white/5">
            <motion.div
              style={{ height: heightTransform }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-blue-400 to-transparent shadow-[0_0_15px_#00eeff]"
            />
          </div>

          {timelineData.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
              >

                {/* Timeline Connector Node */}
                <div className="absolute -left-[54px] md:-left-[101px] top-1/2 -translate-y-1/2 z-20">
                  <motion.div
                    whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
                    className="h-3 w-3 rounded-full bg-neutral-200 dark:bg-black border border-primary shadow-[0_0_15px_#00eeff]"
                  />
                </div>

                {/* --- GROWING GLASSY CARD --- */}
                <motion.div
                  whileHover={{ scale: 1.01, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <SpotlightCard className="p-8 md:p-14 border border-neutral-200 dark:border-white/10 bg-white hover:bg-primary/5 dark:bg-[#080808]/60 backdrop-blur-3xl rounded-[3rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_rgba(0,238,255,0.1)] hover:dark:shadow-[0_30px_60px_rgba(0,238,255,0.2)]">

                    {/* Watermark Text */}
                    <div className={`absolute -bottom-10 ${isEven ? '-left-10' : '-right-10'} text-[12rem] md:text-[15rem] font-black text-neutral-200 dark:text-white/[0.02] italic pointer-events-none select-none uppercase transition-opacity group-hover:opacity-5`}>
                      {item.bgText}
                    </div>

                    <div className={`relative z-10 flex flex-col ${isEven ? 'xl:flex-row-reverse' : 'xl:flex-row'} items-center gap-12 xl:gap-16`}>

                      {/* VISUAL MODULE */}
                      <div className="w-full xl:w-[45%] relative group/imgContainer">

                        {/* --- DYNAMIC GLASSY PROGRESS MODULE --- */}
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4 bg-black/2 dark:bg-white/5 backdrop-blur-2xl border border-neutral-200/30 dark:border-white/20 p-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-102 group-hover:border-primary/50">
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-[7px] font-black text-primary uppercase tracking-[0.2em]">Efficiency</span>
                            <div className="h-32 w-2 bg-neutral-200/50 dark:bg-black/40 rounded-full overflow-hidden relative border border-neutral-200/20 dark:border-white/5">
                              {/* Glass Filling Animation */}
                              <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${item.progress}%` }}
                                transition={{ duration: 2, ease: "circOut" }}
                                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-600 via-primary to-cyan-300 shadow-[0_0_15px_rgba(0,238,255,0.8)]"
                              >
                                {/* Shining Effect on bar */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-t from-transparent to-white/30" />
                              </motion.div>
                            </div>
                          </div>
                          <div className="text-sm font-black text-white dark:text-white drop-shadow-[0_0_10px_rgba(0,238,255,0.5)]">{item.progress}%</div>
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                            <FontAwesomeIcon icon={faMicrochip} className="text-xs text-primary" />
                          </motion.div>
                        </div>

                        {/* Image Frame with Glass Reflection */}
                        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-neutral-200/20 dark:border-white/10 shadow-2xl">
                          <img
                            src={item.image}
                            className="w-full h-full object-cover grayscale-[0.5] group-hover/imgContainer:grayscale-0 group-hover/imgContainer:scale-110 transition-all duration-[1.5s] ease-in-out"
                            alt={item.title}
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/80 dark:from-black/80 via-transparent to-neutral-100/10 dark:to-white/5 opacity-60" />
                        </div>
                      </div>

                      {/* CONTENT MODULE */}
                      <div className={`flex-1 space-y-8 ${isEven ? 'text-center xl:text-right' : 'text-center xl:text-left'}`}>
                        <div className="space-y-4">
                          <div className={`flex items-center gap-3 ${isEven ? 'justify-center xl:justify-end' : 'justify-center xl:justify-start'}`}>
                            <motion.span whileInView={{ width: [0, 40] }} className="h-px bg-primary/40" />
                            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-black">{item.tag}</span>
                          </div>
                          <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-[0.85] text-neutral-900 dark:text-white transition-colors duration-500 group-hover:text-primary">
                            {item.title}
                          </h3>
                          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto xl:mx-0">
                            {item.description}
                          </p>
                        </div>

                        {/* Tech Stack - Glassy Pills */}
                        <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-center xl:justify-end' : 'justify-center xl:justify-start'}`}>
                          {item.tech.map((t, i) => (
                            <div key={i} className="px-4 py-2 rounded-xl bg-neutral-100/80 dark:bg-white/[0.03] border border-neutral-200/30 dark:border-white/5 flex items-center gap-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-neutral-200/90 dark:hover:bg-white/[0.08] hover:-translate-y-1">
                              <span className="text-xs grayscale group-hover:grayscale-0 transition-all">{t.icon}</span>
                              <span className="text-[10px] font-bold uppercase tracking-tight text-neutral-700 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{t.name}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className={`flex flex-wrap gap-4 pt-4 ${isEven ? 'justify-center xl:justify-end' : 'justify-center xl:justify-start'}`}>
                          <button
                            onClick={() => item.Live_link && window.open(item.Live_link, "_blank")}
                            className={`
    relative h-14 px-8 overflow-hidden rounded-2xl
    font-black text-[11px] uppercase tracking-[0.15em]
    flex items-center gap-3 transition-all
    ${item.Live_link
                                ? "bg-primary text-black hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(0,238,255,0.6)] cursor-pointer"
                                : "bg-neutral-500/50 text-neutral-500 opacity-60"}
  `}
                          >
                            Launch Project
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          </button>

                          <button onClick={() => window.open(item.link, "_blank")} disabled={!item.link} className="h-14 px-8 rounded-2xl border border-neutral-200/30 dark:border-white/10 bg-neutral-100/80 dark:bg-white/5 text-neutral-900 dark:text-white font-black text-[11px] uppercase tracking-[0.15em] flex items-center gap-3 transition-all hover:bg-neutral-200 hover:scale-105 active:scale-95 dark:hover:bg-white/10">
                            <FontAwesomeIcon icon={faCode} /> GitHub
                          </button>
                        </div>
                      </div>

                    </div>
                  </SpotlightCard>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;