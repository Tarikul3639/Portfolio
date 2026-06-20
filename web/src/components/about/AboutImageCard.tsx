"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import ProfileImg from "@/assets/Profile.jpg";

export const AboutImageCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            // Height reduced (h-80, md:h-96, lg:h-[28rem])
            className="relative h-80 md:h-96 lg:h-112"
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1200px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                // Border radius proportionally reduced
                className="relative h-full w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[2.5rem] bg-muted border border-border/20 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
                <motion.div
                    style={{ translateZ: 60 }}
                    className="absolute inset-0 h-full w-full"
                >
                    <Image
                        src={ProfileImg}
                        alt="Tarikul Islam"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover scale-110 object-[50%_5%] grayscale-30 group-hover:grayscale-0 group-hover:scale-125 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black to-transparent" />
                </motion.div>

                {/* HUD corners - Padding and size reduced */}
                <div className="absolute inset-0 p-6 z-20 pointer-events-none">
                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-2xl group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-2xl group-hover:scale-110 transition-transform duration-500" />
                    <p className="absolute top-6 right-6 text-right font-mono text-[7px] text-primary font-bold leading-tight uppercase tracking-widest drop-shadow-md">
                        Core_Pulse: Active <br /> Neural_Link: 98%
                    </p>
                </div>

                {/* Name / role overlay - Position and text size reduced */}
                <div className="absolute bottom-6 left-5 md:left-8 right-8 z-30">
                    <motion.div
                        style={{ translateZ: 120 }}
                        className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-lg bg-white/5 border border-primary/40 backdrop-blur-md"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] animate-pulse" />
                        <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">
                            Auth: Tarikul_Islam
                        </span>
                    </motion.div>

                    <motion.div style={{ translateZ: 160 }}>
                        <h3 className="text-xl md:text-3xl font-black text-white italic uppercase leading-[0.85] drop-shadow-lg">
                            Full Stack <br />
                            <span className="text-primary not-italic text-3xl md:text-4xl inline-block mt-1 relative drop-shadow-[0_0_15px_rgba(0,200,150,0.3)]">
                                DEVELOPER
                                <span className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-primary" />
                            </span>
                        </h3>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};