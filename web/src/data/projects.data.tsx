import krishokPalli from "@/assets/projects/Krishok_Palli.png";
import krishokPalliAdmin from "@/assets/projects/Krishok_Palli_Admin.png";
import Nexion_v4 from "@/assets/projects/Nexion_V4.png";
import RamadanOrbit from "@/assets/projects/Ramadan_Orbit.png";
import Electrifiers from "@/assets/projects/Electrifiers.webp";
import ClassFlow_Prime from "@/assets/projects/ClassFlow_Prime.png";

import {
    TypeScriptIcon,
    ReactIcon,
    TailwindIcon,
    MongoDBIcon,
    FramerIcon,
    NodeIcon,
    ExpressIcon,
    NestJsIcon,
    NextJsIcon,
    ReduxIcon,
    GitIcon,
    GitHubIcon,
    SocketIoIcon,
    CPlusPlusIcon,
} from "@/data/tech.icons";

export const PROJECTS = [
    {
        title: "Krishok Palli",
        link: "https://github.com/Tarikul3639/Krishok-Palli",
        liveLink: "https://krishok-palli.netlify.app/",
        description:
            "A high-performance digital agricultural ecosystem bridging farmers with real-time data analytics and market intelligence.",
        image: krishokPalli,
        tag: "Full-Stack Dev",
        bgText: "AGRI",
        progress: 94,
        tech: [
            { icon: <ReactIcon className="w-5 h-5" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <FramerIcon className="w-4 h-4" />, name: "Framer Motion" },
            { icon: <NodeIcon className="w-4 h-4" />, name: "Node.js" },
            { icon: <ExpressIcon className="w-4 h-4" />, name: "Express.js" },
            { icon: <GitIcon className="w-4 h-4" />, name: "Git" },
            { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub" },
        ],
    },
    {
        title: "Krishok Palli Admin",
        link: "https://github.com/Tarikul3639/Krishok-Palli/tree/main/admin-pannel",
        liveLink: "https://krishok-palli-admin.netlify.app/",
        description:
            "An intuitive admin dashboard for managing agricultural data, user roles, and real-time analytics to optimize farm operations.",
        image: krishokPalliAdmin,
        tag: "Admin Panel",
        bgText: "ADMIN",
        progress: 99,
        tech: [
            { icon: <ReactIcon className="w-5 h-5" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <FramerIcon className="w-4 h-4" />, name: "Framer Motion" },
            { icon: <NodeIcon className="w-4 h-4" />, name: "Node.js" },
            { icon: <ExpressIcon className="w-4 h-4" />, name: "Express.js" },
            { icon: <GitIcon className="w-4 h-4" />, name: "Git" },
            { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub" },
        ],
    },
    {
        title: "ClassFlow Prime",
        link: "https://github.com/Tarikul3639/ClassFlow-Prime",
        liveLink: "https://classflow-prime.vercel.app",
        description:
            "A high-performance digital agricultural ecosystem bridging farmers with real-time data analytics and market intelligence. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: ClassFlow_Prime,
        tag: "Full-Stack Dev",
        bgText: "AGRI",
        progress: 94,
        tech: [
            { icon: <ReactIcon className="w-4 h-4" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <NestJsIcon className="w-4 h-4" />, name: "NestJS" },
            { icon: <NextJsIcon className="w-4 h-4" />, name: "Next.js" },
            { icon: <ReduxIcon className="w-4 h-4" />, name: "Redux" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <FramerIcon className="w-4 h-4" />, name: "Framer Motion" },
            { icon: <NodeIcon className="w-4 h-4" />, name: "Node.js" },
            { icon: <ExpressIcon className="w-4 h-4" />, name: "Express.js" },
            { icon: <GitIcon className="w-4 h-4" />, name: "Git" },
            { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub" },
        ],
    },

    {
        title: "Nexion V4",
        link: "https://github.com/Nexion-V2/Nexion-web",
        liveLink: "",
        description: "Nexion is a web platform combining classroom, messaging, and AI chatbot to enable smooth learning, communication, and academic management.",
        image: Nexion_v4,
        tag: "Full-Stack Dev",
        bgText: "NEXION",
        progress: 90,
        tech: [
            { icon: <ReactIcon className="w-4 h-4" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <SocketIoIcon className="w-4 h-4" />, name: "Socket.IO" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <ReduxIcon className="w-4 h-4" />, name: "Redux" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <FramerIcon className="w-4 h-4" />, name: "Framer Motion" },
            { icon: <NodeIcon className="w-4 h-4" />, name: "Node.js" },
            { icon: <ExpressIcon className="w-4 h-4" />, name: "Express.js" },
            { icon: <GitIcon className="w-4 h-4" />, name: "Git" },
            { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub" },
        ],
    },

    {
        title: "Ramadan Orbit",
        link: "https://github.com/Tarikul3639/Ramadan-Orbit",
        liveLink: "https://ramadan-orbit.vercel.app",
        description: "Ramadan Orbit is a web app that provides Sehri, Iftar, and Fajr timings for all districts of Bangladesh. It auto-detects location and shows a localized Ramadan calendar based on Islamic Foundation guidelines.",
        image: RamadanOrbit,
        tag: "Front-End Dev",
        bgText: "RAMADAN",
        progress: 100,
        tech: [
            { icon: <ReactIcon className="w-4 h-4" />, name: "React" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <FramerIcon className="w-4 h-4" />, name: "Framer Motion" },
            { icon: <GitIcon className="w-4 h-4" />, name: "Git" },
            { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub" },
        ],
    },

    {
        title: "Electrifiers",
        link: "https://github.com/Tarikul3639/ELECTRIFIERS",
        liveLink: "https://electrifiers.netlify.app",
        description: "Electrifiers is a real-time system that provides scheduled load shedding updates, showing affected areas, timings, and electricity restoration time.",
        image: Electrifiers,
        tag: "Full-Stack Dev",
        bgText: "ELECTRIFIERS",
        progress: 100,
        tech: [
            { icon: <ReactIcon className="w-4 h-4" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <NodeIcon className="w-4 h-4" />, name: "Node.js" },
            { icon: <ExpressIcon className="w-4 h-4" />, name: "Express.js" },
            { icon: <GitIcon className="w-4 h-4" />, name: "Git" },
            { icon: <GitHubIcon className="w-4 h-4" />, name: "GitHub" },
        ],
    }
];

export type Project = (typeof PROJECTS)[0];
