"use client";

import { motion } from "framer-motion";

export const ProjectsHeader = () => (
    <div className="max-md:mb-16 text-center md:text-left">
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 justify-center md:justify-start"
        >
            <span className="h-px w-6 bg-primary" />
            <span className="text-primary font-black text-[10px] tracking-[0.4em] uppercase">
                Selected Builds
            </span>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase leading-tight">
                <span className="block text-muted-foreground">What I&apos;ve</span>
                <span className="md:ml-20 block text-foreground">Been Building</span>
            </h1>
        </motion.div>
    </div>
);

export default ProjectsHeader;