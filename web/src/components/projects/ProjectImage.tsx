import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/data/projects.data";

export const ProjectImage = ({ item }: { item: Project }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={[
            "relative rounded-2xl overflow-hidden w-full max-w-[600px]",
            // Aspect ratio for small screens
            "aspect-video",
            // Aspect ratio for medium screens
            "md:w-[400px] md:aspect-[4/3]",
            // Aspect ratio for large screens
            "lg:w-[600px] lg:aspect-[16/9]",
        ].join(" ")}
    >
        {/* <div className="absolute -inset-5 bg-card/80 backdrop-blur-sm opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-99" /> */}
        <Image
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full grayscale-30 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700 ease-out"
        />
    </motion.div>
);