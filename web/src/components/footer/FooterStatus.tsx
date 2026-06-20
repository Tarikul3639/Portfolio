"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export const FooterStatus = () => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-full p-px rounded-[2rem] bg-linear-to-br from-border/40 to-border/20 group/status hover:from-primary/30 hover:to-primary/20"
    >
        <div className="h-full w-full bg-card/70 rounded-[2rem] p-6 space-y-4 shadow-lg">

            <p className="text-[9px] text-primary uppercase font-black tracking-widest">
                System Status
            </p>

            <div className="space-y-1">
                <p className="text-[11px] font-bold text-foreground/80 italic flex items-center gap-2">
                    <Terminal size={12} className="text-primary" />
                    Mirpur, Dhaka
                </p>

                <p className="text-[10px] text-muted-foreground font-mono">
                    23.8103° N, 90.4125° E
                </p>
            </div>

            <div className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[9px] text-primary font-semibold uppercase tracking-tighter shadow-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                    Ready_to_Build
                </span>
            </div>

        </div>
    </motion.div>
);