import { motion } from "framer-motion";
import { Terminal, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects.data";

type Props = { item: Project; isEven: boolean };

export const ProjectButtons = ({ item, isEven }: Props) => (
    <div
        className={`flex items-center mt-2 gap-4 justify-center ${isEven ? "md:justify-start" : "md:justify-end"
            }`}
    >
        {/* View Code */}
        <motion.a
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            href={item.link}
            target="_blank"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent bg-background text-xs font-normal hover:bg-accent shadow-sm transition-all"
        >
            <Terminal className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            View Code
        </motion.a>

        {/* View Live */}
        {item.liveLink && (
            <motion.a
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                href={item.liveLink}
                target="_blank"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-xs font-medium shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
            >
                View Live
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.a>
        )}
    </div>
);