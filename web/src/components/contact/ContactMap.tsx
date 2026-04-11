"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import worldMap from "@/assets/world.svg";

const PIN_X = 66.8;
const PIN_Y = 40.5;

export const ContactMap = () => (
    <div className="relative mt-12 min-h-60 w-full aspect-video ">

        {/* ── World map ── */}
        <Image
            src={worldMap}
            alt="World map"
            fill
            className="object-contain select-none pointer-events-none opacity-[0.2] -translate-x-10 grayscale"
            priority={false}
        />

        {/* ── SVG Decorations ── */}
        <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden
        >
            {/* Crosshairs (Dashed lines) */}
            <line
                x1="0" y1={400 * PIN_Y / 100} x2="800" y2={400 * PIN_Y / 100}
                stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 7"
                className="text-primary/20"
            />
            <line
                x1={800 * PIN_X / 100} y1="0" x2={800 * PIN_X / 100} y2="400"
                stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 7"
                className="text-primary/20"
            />

            {/* --- Advanced Ping Rings using Framer Motion --- */}
            {[1, 2].map((i) => (
                <motion.circle
                    key={i}
                    cx={800 * PIN_X / 100}
                    cy={400 * PIN_Y / 100}
                    initial={{ r: 0, opacity: 0.5 }}
                    animate={{
                        r: [0, 40],
                        opacity: [0.5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeOut",
                    }}
                    className="stroke-primary/40 fill-none"
                    strokeWidth="1"
                />
            ))}

            {/* Solid Center Dot with Pulse */}
            <motion.circle
                cx={800 * PIN_X / 100}
                cy={400 * PIN_Y / 100}
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                r="4"
                className="fill-primary shadow-[0_0_12px_#00eeff]"
            />
        </svg>

        {/* ── Floating Pin Label ── */}
        <div
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${PIN_X}%`, top: `${PIN_Y}%` }}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                    opacity: 1, 
                    y: [0, -6, 0] // Floating effect
                }}
                transition={{ 
                    opacity: { duration: 0.5 },
                    y: { 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }
                }}
                className="flex flex-col items-center pb-2"
            >
                {/* Tooltip Card */}
                <div className="inline-flex items-center min-w-24 gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/20">
                    <MapPin size={10} className="text-primary fill-primary/20" />
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-foreground">
                        I am here
                    </span>
                </div>
                
                {/* Vertical Laser Line */}
                <div className="w-[1.5px] h-10 bg-linear-to-t from-primary via-primary/40 to-transparent" />
            </motion.div>
        </div>
    </div>
);