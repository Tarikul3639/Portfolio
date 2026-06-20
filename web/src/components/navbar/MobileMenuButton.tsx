import { motion } from "framer-motion";

interface Props { onClick: () => void }

export function MobileMenuButton({ onClick }: Props) {
    return (
        <button
            aria-label="Open menu"
            onClick={onClick}
            className="md:hidden relative w-16 h-16 flex items-center justify-center group cursor-crosshair"
        >
            {/* Outer rotating ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full scale-90 group-hover:scale-100 group-hover:border-primary/60 transition-all duration-500"
            />

            {/* Counter-rotating hex */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-10 h-10 border border-primary/40 rounded-sm group-hover:border-primary transition-colors"
                style={{ clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)" }}
            />

            {/* Pulsing core dots */}
            <div className="relative flex items-center justify-center">
                <div className="absolute w-6 h-6 bg-primary/40 blur-md rounded-full animate-pulse" />
                <div className="grid grid-cols-2 gap-1 relative z-10">
                    {[0, 1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ scale: [1, 1.5, 1], borderRadius: ["20%", "50%", "20%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-1.5 h-1.5 bg-primary shadow-[0_0_8px_#00eeff]"
                        />
                    ))}
                </div>
            </div>
        </button>
    );
}