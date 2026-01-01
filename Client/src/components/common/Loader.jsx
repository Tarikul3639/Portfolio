import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HashLoader, PulseLoader } from "react-spinners";

const Loader = ({ loading, variant, size = 50 }) => {
  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`z-[9999] flex items-center justify-center ${
            variant === "full" 
              ? "fixed inset-0 bg-[#050505] backdrop-blur-xl" 
              : "absolute inset-0 bg-transparent"
          }`}
        >
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Background Aura */}
            <div className="absolute w-64 h-64 bg-primary/10 blur-[100px] rounded-full animate-pulse" />

            {variant === "full" ? (
              <div className="flex flex-col items-center">
                {/* Loader Icon */}
                <div className="relative mb-8">
                   <HashLoader color="#00eeff" size={size} speedMultiplier={1.2} />
                </div>

                {/* Identity Name Section */}
                <div className="relative flex flex-col items-center">
                  <motion.h2 
                    initial={{ letterSpacing: "0.2em", opacity: 0 }}
                    animate={{ letterSpacing: "0.5em", opacity: 1 }}
                    className="text-white font-black text-xl md:text-2xl tracking-[0.5em] uppercase relative z-10"
                  >
                    TARIKUL ISLAM
                  </motion.h2>
                  
                  {/* Digital Scanning Line */}
                  <motion.div 
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_15px_#00eeff] z-20"
                  />

                  <motion.p
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-4 text-primary/60 text-[9px] font-bold tracking-[0.8em] uppercase"
                  >
                    System Architecting...
                  </motion.p>
                </div>
              </div>
            ) : (
              <PulseLoader color="#00eeff" size={size / 5} speedMultiplier={0.8} />
            )}

            {/* Aesthetic Tech Frame */}
            {variant === "full" && (
              <div className="absolute inset-[-40px] pointer-events-none">
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-primary/30" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-primary/30" />
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-primary/30" />
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-primary/30" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;