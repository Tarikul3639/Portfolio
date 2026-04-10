"use client";

import { motion } from "framer-motion";

export const AboutHeader = () => (
    <div className="mb-16 text-center lg:text-left">
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black text-[10px] tracking-[0.4em] uppercase"
        >
            The Architect
        </motion.span>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-4"
        >
            <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tighter uppercase">
                Driven By{" "}
                <span className="text-muted-foreground">Innovation</span>
            </h1>
        </motion.div>
    </div>
);