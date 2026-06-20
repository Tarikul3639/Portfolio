"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Watermark } from "./Watermark";

export const FooterBottom = () => {
    const currentYear = new Date().getFullYear();

    const handleScrollTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-10">

            {/* ── Copy ── */}
            <div className="flex flex-col gap-1 text-center md:text-left">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">
                    © {currentYear} TARIKUL ISLAM{" "}
                    <span className="text-primary/40">//</span> V4.0.0
                </p>

                <p className="text-[8px] text-muted-foreground/70 font-mono tracking-widest">
                    LATENCY: 14MS | ENCRYPTION: AES-256
                </p>
            </div>

            {/* ── Scroll-to-top ── */}
            <motion.button
                type="button"
                onClick={handleScrollTop}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,238,255,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-border/50 bg-card/70 hover:bg-primary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group/btn shadow-sm"
            >
                <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover/btn:text-primary cursor-pointer">
                    Ascend to Zenith
                    <ArrowUp
                        size={12}
                        className="group-hover/btn:-translate-y-0.5 transition-transform duration-300"
                    />
                </span>
            </motion.button>

            {/* WaterMark */}
            <Watermark />
        </div>
    );
};