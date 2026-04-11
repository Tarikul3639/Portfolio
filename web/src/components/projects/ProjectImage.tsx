import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects.data";

export const ProjectImage = ({ item }: { item: Project }) => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-100 sm:max-w-120 md:max-w-150 aspect-video rounded-2xl overflow-hidden"
    >
        <div className="absolute inset-0 bg-card/80 backdrop-blur-sm border border-border rounded-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
        <Image
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full grayscale-30 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700 ease-out"
        />
    </motion.div>
);