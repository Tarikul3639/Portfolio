"use client";

import { motion } from "framer-motion";
import type { SocialLink } from "./hero.data";

interface Props {
    links: SocialLink[];
}

export function HeroSocialLinks({ links }: Props) {
    return (
        <div className="flex items-center gap-5">
            {links.map(({ icon, href, label, external }) => (
                <motion.a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-md p-2 text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                    {icon}
                    <motion.div className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                </motion.a>
            ))}
        </div>
    );
}