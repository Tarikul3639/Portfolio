"use client";

import { motion, MotionValue } from "framer-motion";

interface FooterGlowProps {
    mouseX: MotionValue<number>;
}

export const FooterGlow = ({ mouseX }: FooterGlowProps) => (
    <>
        {/* Dynamic beam */}
        <motion.div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-50 bg-primary/50 blur-[150px] rounded-full pointer-events-none"
            style={{ left: mouseX, x: "-0%" }}
        />

        {/* Gradient line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-60" />
    </>
);