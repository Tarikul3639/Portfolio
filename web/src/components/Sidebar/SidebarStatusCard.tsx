"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function SidebarStatusCard() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () =>
            setTime(new Date().toLocaleTimeString([], {
                hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true,
            }));
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative group p-5 rounded-2xl bg-sidebar-accent-foreground border border-sidebar-border overflow-hidden shadow-inner">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sidebar-primary/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-sidebar-primary/20 transition-all duration-700" />

            <div className="relative z-10 flex flex-col gap-4">
                {/* Top row */}
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sidebar-primary opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-sidebar-primary" />
                            </div>
                            <span className="text-[10px] font-mono text-sidebar-primary uppercase tracking-[0.2em] font-bold">
                                System Online
                            </span>
                        </div>
                        <p className="text-[9px] text-sidebar-accent font-mono uppercase tracking-widest">
                            Global Access Node: 0x24
                        </p>
                    </div>

                    {/* Live Clock */}
                    <div className="text-right">
                        <h4 className="text-sm font-black font-mono text-sidebar-foreground tabular-nums uppercase">
                            {time}
                        </h4>
                        <p className="text-[8px] text-sidebar-primary/60 font-mono font-bold uppercase tracking-tighter">
                            Sync: UTC+6
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-sidebar-border to-transparent" />

                {/* Bottom row */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <span className="text-[8px] text-sidebar-accent uppercase font-mono">Uptime</span>
                            <span className="text-[10px] font-bold text-sidebar-foreground font-mono">99.9%</span>
                        </div>
                        <div className="flex flex-col border-l border-sidebar-border pl-4">
                            <span className="text-[8px] text-sidebar-accent uppercase font-mono">Load</span>
                            <span className="text-[10px] font-bold text-sidebar-foreground font-mono">0.04ms</span>
                        </div>
                    </div>

                    {/* Signal bars */}
                    <div className="h-8 w-12 flex items-end gap-0.5">
                        {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                            <motion.div
                                key={i}
                                animate={{ height: [`${h * 100}%`, `${h * 100 - 20}%`, `${h * 100}%`] }}
                                transition={{ duration: 1.5 + i * 0.2, repeat: Infinity }}
                                className="w-full bg-sidebar-primary/40 rounded-t-[1px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}