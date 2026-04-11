import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Cpu } from "lucide-react";

type LoaderVariant = "full" | "inline";

interface LoaderProps {
  loading: boolean;
  variant?: LoaderVariant;
  size?: number;
}

const Loader = ({ loading, variant = "inline", size = 50 }: LoaderProps) => {
  if (!loading) return null;

  return (
    <AnimatePresence>
      {loading && (
        <div className="dark">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`z-9999 flex items-center justify-center ${variant === "full"
                ? "fixed inset-0 bg-white/90 dark:bg-[#050505] backdrop-blur-2xl"
                : "absolute inset-0 bg-transparent"
              }`}
          >
            <div className="relative flex flex-col items-center justify-center">

              {/* Background Aura */}
              <div className="absolute w-64 h-64 bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full animate-pulse" />

              {variant === "full" ? (
                <div className="flex flex-col items-center">
                  {/* Loader Icon */}
                  <div className="relative mb-8">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Cpu
                        style={{ width: size, height: size }}
                        className="text-primary drop-shadow-[0_0_12px_#00c896]"
                        strokeWidth={1.2}
                      />
                    </motion.div>
                  </div>

                  {/* Identity Name Section */}
                  <div className="relative flex flex-col items-center">
                    <motion.h2
                      initial={{ letterSpacing: "0.2em", opacity: 0 }}
                      animate={{ letterSpacing: "0.5em", opacity: 1 }}
                      className="text-neutral-900 dark:text-white font-black text-xl md:text-2xl tracking-[0.5em] uppercase relative z-10 drop-shadow-lg dark:drop-shadow-2xl"
                    >
                      TARIKUL ISLAM
                    </motion.h2>

                    {/* Digital Scanning Line */}
                    <motion.div
                      animate={{ top: ["0%", "100%", "0%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 w-full h-0.5 bg-primary/70 dark:bg-primary/50 shadow-[0_0_15px_#00eeff] z-20"
                    />

                    <motion.p
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="mt-4 text-primary/80 dark:text-primary/60 text-[9px] font-bold tracking-[0.8em] uppercase"
                    >
                      System Architecting...
                    </motion.p>
                  </div>
                </div>
              ) : (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                >
                  <Loader2
                    style={{ width: size / 5, height: size / 5 }}
                    className="text-primary"
                  />
                </motion.div>
              )}

              {/* Aesthetic Tech Frame */}
              {variant === "full" && (
                <div className="absolute -inset-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-8 h-0.5 bg-primary/40 dark:bg-primary/30" />
                  <div className="absolute top-0 left-0 w-0.5 h-8 bg-primary/40 dark:bg-primary/30" />
                  <div className="absolute bottom-0 right-0 w-8 h-0.5 bg-primary/40 dark:bg-primary/30" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-8 bg-primary/40 dark:bg-primary/30" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loader;