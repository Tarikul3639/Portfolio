"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const FOCUS_AREAS = [
    "Algorithms",
    "Backend Development",
    "Software Engineering",
    "Deep Learning",
];

export const AboutEducation = () => (
    <div className="lg:col-span-12 mt-4">
        <motion.div whileHover={{ y: -3 }} className="relative group">

            {/* Glow */}
            {/* <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500 pointer-events-none" /> */}

            <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 bg-card border border-border/20 shadow-sm">

                {/* Watermark (smaller) */}
                <div className="absolute -bottom-4 -right-4 text-[6rem] font-black italic pointer-events-none select-none text-foreground/5">
                    BUBT
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* LEFT */}
                    <div className="text-center lg:text-left space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest">
                            <GraduationCap size={10} />
                            Academic
                        </div>

                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground italic leading-snug">
                            Bangladesh University of Business & Technology
                        </h2>

                        <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            CSE: Computer Science & Engineering
                        </p>
                    </div>

                    {/* RIGHT (smaller circle) */}
                    <div className="relative shrink-0">
                        <div className="h-32 w-32 rounded-full border border-border/30 flex items-center justify-center">

                            <div className="text-center">
                                <div className="text-3xl font-black text-foreground">3.56</div>
                                <span className="text-[9px] text-muted-foreground">2022–26</span>
                            </div>

                            <svg className="absolute inset-0 w-full h-full -rotate-45">
                                <motion.circle
                                    cx="50%" cy="50%" r="50%"
                                    fill="none"
                                    stroke="var(--color-primary)"
                                    strokeWidth="4"
                                    strokeDasharray="25"
                                    initial={{ strokeDashoffset: 100 }}
                                    whileInView={{ strokeDashoffset: 25 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Focus */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border/50 pt-6">
                    {FOCUS_AREAS.map((skill, i) => (
                        <div key={skill} className="text-center md:text-left">
                            <span className="text-[8px] text-muted-foreground uppercase block mb-1">
                                Focus {i + 1}
                            </span>
                            <span className="text-xs font-semibold text-foreground/70 group-hover:text-primary transition">
                                {skill}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </motion.div>
    </div>
);