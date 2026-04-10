import { motion } from "framer-motion";
import type { Project } from "@/data/projects.data";
import { ProjectTechStack } from "./ProjectTechStack";
import { ProjectButtons } from "./ProjectButtons";

type Props = { item: Project; isEven: boolean };

export const ProjectContent = ({ item, isEven }: Props) => (
    <div
        className={`relative flex-1 z-10 p-6 md:p-10 lg:p-14 flex flex-col gap-6 ${isEven ? "text-center lg:text-left" : "text-center lg:text-right"
            }`}
    >
        {/* Tag */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className={`flex items-center gap-3 ${isEven ? "justify-center lg:justify-start" : "justify-center lg:justify-end"
                }`}
        >
            <span className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-black">
                {item.tag}
            </span>
            <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="h-px bg-primary/50"
            />
        </motion.div>

        {/* Title */}
        <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.05 }}
            className="text-2xl md:text-4xl font-black tracking-tight uppercase text-foreground"
        >
            {item.title}
        </motion.h2>

        {/* Description */}
        <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed font-serif"
        >
            {item.description}
        </motion.p>

        <ProjectTechStack tech={item.tech} isEven={isEven} />
        <ProjectButtons item={item} isEven={isEven} />
    </div>
);