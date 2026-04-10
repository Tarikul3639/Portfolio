"use client";

import Link from "next/link";
import { motion, LayoutGroup } from "framer-motion";

interface Props {
    menuItems: string[];
    activeLink: string;
}

export function NavLinks({ menuItems, activeLink }: Props) {
    return (
        <LayoutGroup>
            <ul className="flex items-center gap-2 py-1.5">
                {menuItems.map((section) => {
                    const isCurrent = activeLink === section;

                    return (
                        <li key={section} className="relative px-4 py-2">
                            <Link
                                href={`#${section}`}
                                className={`relative z-10 text-[11px] font-black tracking-[0.25em] uppercase cursor-pointer transition-colors duration-300 ${isCurrent
                                        ? "text-foreground"
                                        : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                {section}
                            </Link>

                            {isCurrent && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-primary/10 rounded-full border border-border shadow-sm z-0"
                                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                                >
                                    <div className="absolute -top-px left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary shadow-[0_0_10px_#00eeff]" />
                                </motion.div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </LayoutGroup>
    );
}