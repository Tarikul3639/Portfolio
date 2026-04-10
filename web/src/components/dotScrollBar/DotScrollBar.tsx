"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Section } from "@/types/section";


export default function DotScrollBar({ sections }: { sections: Section[] }) {
    const active = useActiveSection(sections);
    const { progress } = useScrollProgress();

    const scrollTo = (id: Section) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="fixed top-1/2 right-9 -translate-y-1/2 flex flex-col items-center z-9999">

            {/* Progress Line */}
            <div className="absolute h-full w-0.5 bg-border/40 rounded-full overflow-hidden">
                <motion.div
                    className="w-full bg-primary shadow-[0_0_15px_#00eeff]"
                    style={{ height: `${progress * 100}%` }}
                />
            </div>

            <div className="flex flex-col gap-8 relative">
                {sections.map((id, index) => {
                    const isActive = id.toLocaleLowerCase() === active.toLocaleLowerCase();

                    return (
                        <div
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="relative flex items-center justify-center group cursor-pointer"
                        >
                            {/* Tooltip */}
                            <div className="hidden md:flex absolute right-full mr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase bg-muted/80 px-3 py-1 border border-border backdrop-blur-sm rounded shadow-sm">
                                        {id}
                                    </span>
                                    <div className="w-4 h-px bg-primary/40" />
                                </div>
                            </div>

                            {/* Dot */}
                            <motion.div
                                animate={{ scale: isActive ? 1.5 : 1 }}
                                className={`w-2 h-2 rounded-full relative z-10 ${isActive
                                    ? "bg-primary"
                                    : "bg-muted-foreground/90"
                                    }`}
                            >
                                {isActive && (
                                    <>
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0.5 }}
                                            animate={{ scale: 2.5, opacity: 0 }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                            className="absolute inset-0 bg-primary rounded-full"
                                        />
                                        <div className="absolute inset-0 bg-primary blur-[6px] rounded-full opacity-80" />
                                    </>
                                )}
                            </motion.div>

                            {/* Index */}
                            <span
                                className={`absolute -right-6 text-[8px] font-bold ${isActive
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                    }`}
                            >
                                0{index + 1}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}