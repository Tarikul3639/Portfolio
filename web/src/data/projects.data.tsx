import krishokPalli from "@/assets/Profile.jpg";
import {
    ReactIcon, MongoDBIcon, TailwindIcon,
    TypeScriptIcon, FramerIcon,
} from "@/data/tech.icons";

export const PROJECTS = [
    {
        title: "Krishok Palli",
        link: "https://github.com/Tarikul3639/Krishok-Palli",
        liveLink: "https://krishok-palli.netlify.app/",
        description: "A high-performance digital agricultural ecosystem bridging farmers with real-time data analytics and market intelligence.",
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
        ],
    },
    {
        title: "Krishok Palli Admin",
        link: "https://github.com/Tarikul3639/Krishok-Palli/tree/main/admin-pannel",
        liveLink: "https://krishok-palli-admin.netlify.app/",
        description: "An intuitive admin dashboard for managing agricultural data, user roles, and real-time analytics to optimize farm operations.",
        image: krishokPalli,
        tag: "Admin Panel",
        bgText: "ADMIN",
        progress: 99,
        tech: [
            { icon: <ReactIcon className="w-4 h-4" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
            { icon: <TypeScriptIcon className="w-4 h-4" />, name: "TypeScript" },
            { icon: <FramerIcon className="w-4 h-4" />, name: "Framer Motion" },
        ],
    },
    {
        title: "Krishok Palli",
        link: "https://github.com/Tarikul3639/Krishok-Palli",
        liveLink: "https://krishok-palli.netlify.app/",
        description: "A high-performance digital agricultural ecosystem bridging farmers with real-time data analytics and market intelligence. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: krishokPalli,
        tag: "Full-Stack Dev",
        bgText: "AGRI",
        progress: 94,
        tech: [
            { icon: <ReactIcon className="w-4 h-4" />, name: "React" },
            { icon: <MongoDBIcon className="w-4 h-4" />, name: "MongoDB" },
            { icon: <TailwindIcon className="w-4 h-4" />, name: "Tailwind" },
        ],
    },
];

export type Project = (typeof PROJECTS)[0];