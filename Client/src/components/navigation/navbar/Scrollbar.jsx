
import { motion } from "framer-motion";

// --- NAVBAR COMPONENT WITH SCROLL PROGRESS BAR & THEME TOGGLE ---
export const Scrollbar = ({ scrollWidth }) => {
    return (
        <div className="absolute bottom-0 left-0 h-[4px] w-full bg-neutral-200/30 dark:bg-white/5 overflow-visible">
            <motion.div className="h-full relative overflow-visible" style={{ width: `${scrollWidth}%` }}>

                {/* MAIN LASER BAR */}
                <div className="absolute inset-0 bg-primary shadow-[0_0_15px_#00eeff,0_0_30px_rgba(0,238,255,0.4)] rounded-r-full" />

                {/* FLOATING ENERGY NODE AT BAR END */}
                <div className="absolute right-[-8px] top-[-10px] z-20">

                    {/* OUTER GLOW EFFECT */}
                    <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-[-12px] bg-primary/30 blur-xl rounded-full"
                    />

                    {/* CORE ENERGY ORB */}
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="relative w-6 h-6 bg-white/80 dark:bg-white rounded-full flex items-center justify-center border-2 border-primary shadow-[0_0_20px_#fff,0_0_40px_#00eeff]"
                    >
                        {/* INNER PULSE */}
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                    </motion.div>
                </div>

                {/* MOVING ENERGY TRACE */}
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/50 to-transparent w-full h-full"
                />

                {/* BOTTOM GLOW SHADOW */}
                <div className="absolute top-4 left-0 w-full h-4 bg-primary/10 blur-xl rounded-full" />
            </motion.div>
        </div>
    );
}