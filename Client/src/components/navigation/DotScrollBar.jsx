import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['home', 'about', 'projects', 'contact', 'footer'];

function DotScrollBar() {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Overall scroll progress for the whole page
      const overallProgress = scrollY / fullHeight;
      setProgress(overallProgress);

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActive(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-1/2 right-4 lg:right-8 transform -translate-y-1/2 flex flex-col items-center z-[9999]">
      
      {/* --- PROGRESS LINE (Vertical Rail) --- */}
      <div className="absolute h-full w-[2px] bg-neutral-200/30 dark:bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          className="w-full bg-primary shadow-[0_0_15px_#00eeff]"
          style={{ height: `${progress * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      </div>

      <div className="flex flex-col gap-8 relative">
        {sections.map((id, index) => {
          const isActive = id === active;

          return (
            <div
              key={id}
              onClick={() => scrollTo(id)}
              className="relative flex items-center justify-center group cursor-pointer"
            >
              {/* --- SECTION NAME (Tooltip) --- */}
              <div className="hidden md:flex absolute right-full mr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase bg-neutral-100/80 dark:bg-primary/5 px-3 py-1 border border-neutral-200/50 dark:border-primary/20 backdrop-blur-sm rounded-sm shadow-sm">
                    {id}
                  </span>
                  <div className="w-4 h-[1px] bg-primary/40 dark:bg-primary/30" />
                </div>
              </div>

              {/* --- THE DOT --- */}
              <motion.div
                animate={{
                  scale: isActive ? 1.5 : 1,
                  backgroundColor: isActive ? "#00eeff" : "rgba(255,255,255,0.3)",
                }}
                className="w-2 h-2 rounded-full relative z-10 shadow-sm dark:shadow-md"
              >
                {isActive && (
                  <>
                    {/* Ring Effect */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.5 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute inset-0 bg-primary rounded-full"
                    />
                    {/* Core Glow */}
                    <div className="absolute inset-0 bg-primary blur-[6px] rounded-full opacity-80" />
                  </>
                )}
              </motion.div>

              {/* --- INDEX NUMBER --- */}
              <span className={`absolute -right-6 text-[8px] font-bold transition-colors duration-500 ${isActive ? 'text-primary' : 'text-neutral-600 dark:text-neutral-700'}`}>
                0{index + 1}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DotScrollBar;
