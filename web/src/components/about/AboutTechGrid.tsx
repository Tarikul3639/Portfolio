"use client";

import { motion } from "framer-motion";
import {
    FramerIcon,
    NodeIcon,
    NestJsIcon,
    NextJsIcon,
    TailwindIcon,
    GitIcon,
    SocketIoIcon,
} from "@/data/tech.icons";
import { RestApiIcon } from "@/stack/RestApiIcon";
import { JSIcon } from "@/stack/JSIcon";
import { TypeScriptIcon } from "@/stack/TypeScriptIcon";
import { ReduxIcon } from "@/stack/ReduxIcon";
import { ReactIcon } from "@/stack/ReactIcon";
import { GitHubIcon } from "@/stack/GitHubIcon";
import { CPlusPlusIcon } from "@/stack/CPlusPlusIcon";
import { DockerIcon } from "@/stack/DockerIcon";
import { PythonIcon } from "@/stack/PythonIcon";
import { MySQLIcon } from "@/stack/MySQLIcon";
import { MongoDBIcon } from "@/stack/MongoDBIcon";

interface TechItem {
    label: string;
    icon: React.ReactNode;
    color: string; // accent color for icon
}
const ICON_CLASS = "w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11";

const TECH_STACK: TechItem[] = [
    {
        label: "NestJS",
        icon: <NestJsIcon className={ICON_CLASS} />,
        color: "#e0234e",
    },
    {
        label: "Next.js",
        icon: <NextJsIcon className={ICON_CLASS} />,
        color: "currentColor",
    },
    {
        label: "TypeScript",
        icon: <TypeScriptIcon className={ICON_CLASS} />,
        color: "#3178c6",
    },
    {
        label: "JavaScript",
        icon: <JSIcon className={ICON_CLASS} />,
        color: "#f7df1f",
    },
    {
        label: "Redux",
        icon: <ReduxIcon className={ICON_CLASS} />,
        color: "#764abc"
    },
    {
        label: "Docker",
        icon: <DockerIcon className={ICON_CLASS} />,
        color: "#2496ed",
    },
    {
        label: "Python",
        icon: <PythonIcon className={ICON_CLASS} />,
        color: "#3776ab",
    },
    {
        label: "MySQL",
        icon: <MySQLIcon className={ICON_CLASS} />,
        color: "#f29e3e",
    },
    {
        label: "Tailwind",
        icon: <TailwindIcon className={ICON_CLASS} />,
        color: "#38bdf8",
    },
    {
        label: "Framer",
        icon: <FramerIcon className={ICON_CLASS} />,
        color: "#ec4899",
    },
    {
        label: "Node.js",
        icon: <NodeIcon className={ICON_CLASS} />,
        color: "#339933",
    },
    {
        label: "MongoDB",
        icon: <MongoDBIcon className={ICON_CLASS} />,
        color: "#10b981",
    },
    {
        label: "Socket.IO",
        icon: <SocketIoIcon className={ICON_CLASS} />,
        color: "#fff",
    },
    {
        label: "C++",
        icon: <CPlusPlusIcon className={ICON_CLASS} />,
        color: "#00599c",
    },
    {
        label: "React",
        icon: <ReactIcon className={ICON_CLASS} />,
        color: "#61dafb"
    },
    {
        label: "Git",
        icon: <GitIcon className={ICON_CLASS} />,
        color: "#f05032",
    },
    {
        label: "GitHub",
        icon: <GitHubIcon className={ICON_CLASS} />,
        color: "#fff",
    },
    {
        label: "REST API",
        icon: <RestApiIcon className={ICON_CLASS} />,
        color: "#43A2D8",
    },
];

export const AboutTechGrid = () => (
    <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2.5 sm:gap-3 md:gap-4">
        {TECH_STACK.map(({ label, icon, color }, i) => (
            <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group/card flex flex-col items-center justify-center gap-3 rounded-2xl lg:rounded-3xl px-2 py-4 bg-card border border-border/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-crosshair select-none"
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
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-xl foreground group-hover/card:text-primary transition-colors duration-200">
                    {label}
                </span>
            </motion.div>
        ))}
    </div>
);
