"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import photo from "@/assets/tarikul-hero.webp";

export function HeroVisual() {
    return (
        <div className="flex flex-1 items-center justify-center">
            <div className="relative group w-72 h-72 md:w-112.5 md:h-112">

                {/* Glow Background Layers */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary to-blue-400 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-bl from-primary to-cyan-400 rounded-[2rem] -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-500" />

                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border border-border/40 shadow-2xl">
                    <Image
                        src={photo}
                        alt="Tarikul Islam – Profile"
                        fill
                        priority
                        className="w-full h-full object-cover scale-150 object-[50%_20%] transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Experience Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute -bottom-4 -right-4 z-20 animate-float"
                >
                    <div className="relative group">
                        {/* Glow */}
                        <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />

                        {/* Card */}
                        <div className="relative flex items-center gap-2.5 bg-background/80 backdrop-blur-md p-2.5 px-3.5 rounded-xl border border-border/60 shadow-lg">

                            {/* Icon */}
                            <div className="shrink-0 w-8 h-8 rounded-lg bg-linear-to-br from-primary to-blue-600 flex items-center justify-center shadow-sm">
                                <span className="text-white font-bold text-sm">2+</span>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col">
                                <span className="text-[9px] font-black text-primary uppercase tracking-[0.15em]">
                                    Experience
                                </span>
                                <span className="text-[10px] font-bold text-foreground uppercase leading-tight">
                                    Years of <br /> Mastery
                                </span>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}