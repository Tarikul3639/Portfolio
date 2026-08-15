"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenuButton } from "./MobileMenuButton";
import { Sidebar } from "../Sidebar";

import { Section } from "@/types/section";
import { useNavbar } from "@/hooks/useNavbar";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";

interface Props {
    title?: string;
    sections?: Section[];
}

export default function Navbar({
    title = "Tarikul",
    sections = ["Home", "About", "Projects", "Contact"],
}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    const { scrolled, navbarY } = useNavbar();

    const activeLink = useActiveSection(sections);
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <motion.nav
                style={{ y: navbarY }}
                className="fixed top-0 z-50 w-full py-3 md:px-8 md:py-6"
            >
                <div
                    className={`mx-auto px-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
                            ? "max-w-5xl bg-background/60 backdrop-blur-2xl border border-border/30 rounded-full shadow-lg"
                            : "max-w-7xl bg-transparent"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <NavLogo title={title} />

                        <div className="hidden items-center gap-10 md:flex">
                            <NavLinks
                                menuItems={sections}
                                activeLink={activeLink}
                            />

                            <div className="h-6 w-px bg-border" />

                            <ThemeToggle
                                theme={theme}
                                toggleTheme={toggleTheme}
                            />
                        </div>

                        <MobileMenuButton
                            onClick={() => setIsOpen(true)}
                        />
                    </div>
                </div>
            </motion.nav>

            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                menuItems={sections}
                activeLink={activeLink}
                toggleTheme={toggleTheme}
                theme={theme}
            />
        </>
    );
}