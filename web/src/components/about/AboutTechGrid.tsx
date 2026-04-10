"use client";

import { motion } from "framer-motion";
import {
    TypeScriptIcon,
    ReactIcon,
    FramerIcon,
    NodeIcon,
    ExpressIcon,
    MongoDBIcon,
    NestJsIcon,
    NextJsIcon,
    TailwindIcon,
    ReduxIcon,
    GitIcon,
    GitHubIcon,
    SocketIoIcon,
    CPlusPlusIcon,
} from "@/data/tech.icons";

interface TechItem {
    label: string;
    icon: React.ReactNode;
    color: string; // accent color for icon
}

const TECH_STACK: TechItem[] = [
    {
        label: "NestJS",
        icon: <NestJsIcon className="w-9 h-9" />,
        color: "#e0234e",
    },
    {
        label: "Next.js",
        icon: <NextJsIcon className="w-9 h-9" />,
        color: "currentColor",
    },
    {
        label: "TypeScript",
        icon: <TypeScriptIcon className="w-9 h-9" />,
        color: "#3178c6",
    },
    { label: "Redux", icon: <ReduxIcon className="w-9 h-9" />, color: "#764abc" },
    { label: "React", icon: <ReactIcon className="w-9 h-9" />, color: "#61dafb" },
    {
        label: "Tailwind",
        icon: <TailwindIcon className="w-9 h-9" />,
        color: "#38bdf8",
    },
    {
        label: "Framer",
        icon: <FramerIcon className="w-9 h-9" />,
        color: "#ec4899",
    },
    {
        label: "Node.js",
        icon: <NodeIcon className="w-9 h-9" />,
        color: "#339933",
    },
    {
        label: "Express",
        icon: <ExpressIcon className="w-9 h-9" />,
        color: "currentColor",
    },
    {
        label: "MongoDB",
        icon: <MongoDBIcon className="w-9 h-9" />,
        color: "#10b981",
    },
    {
        label: "Socket.IO",
        icon: <SocketIoIcon className="w-9 h-9" />,
        color: "#010101",
    },
    {
        label: "C++",
        icon: <CPlusPlusIcon className="w-9 h-9" />,
        color: "#00599c",
    },
    {
        label: "Git",
        icon: <GitIcon className="w-9 h-9" />,
        color: "#f05032",
    },
    {
        label: "GitHub",
        icon: <GitHubIcon className="w-9 h-9" />,
        color: "#181717",
    },
];

export const AboutTechGrid = () => (
    <div className="lg:col-span-6 grid grid-cols-3 xs:grid-cols-3 gap-3 sm:gap-4">
        {TECH_STACK.map(({ label, icon, color }, i) => (
            <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group/card flex flex-col items-center justify-center gap-3 rounded-2xl lg:rounded-[2.5rem] p-4 md:p-5 lg:p-6 bg-card border border-border/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
            >
                {/* Icon with color + glow */}
                <div className="relative text-4xl" style={{ color }}>
                    <div
                        className="absolute inset-0 blur-2xl opacity-0 group-hover/card:opacity-30 transition-opacity"
                        style={{ backgroundColor: color }}
                    />
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="relative z-10"
                    >
                        {icon}
                    </motion.div>
                </div>

                {/* Label */}
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover/card:text-primary transition-colors duration-200">
                    {label}
                </span>
            </motion.div>
        ))}
    </div>
);
