"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 z-1000 h-0.5 w-full origin-left bg-primary shadow-[0_0_8px_#00eeff] pointer-events-none"
            style={{ scaleX }}
        />
    );
}