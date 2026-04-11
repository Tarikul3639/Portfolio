import { motion } from "framer-motion";
import type { Project } from "@/data/projects.data";

type Props = { tech: Project["tech"]; isEven: boolean };

export const ProjectTechStack = ({ tech, isEven }: Props) => (
    <div
    className={`flex flex-wrap items-center gap-4 justify-center ${
        isEven ? "lg:justify-start" : "lg:justify-end"
    }`}
>
        {tech.map((t, i) => (
            <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: i * 0.05 }}
                className="text-2xl"
            >
                <motion.div
                    initial={{ width: 40 }}
                    whileHover={{ width: 150 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group inline-flex justify-center items-center bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors duration-300 rounded-xl px-5 py-2 origin-left overflow-hidden cursor-crosshair"
                >
                    <div className="flex items-center justify-center">{t.icon}</div>
                    <span className="hidden group-hover:block ml-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                        {t.name}
                    </span>
                </motion.div>
            </motion.div>
        ))}
    </div>
);