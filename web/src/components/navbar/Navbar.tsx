"use client";

import { useState } from "react";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenuButton } from "./MobileMenuButton";
import { ProgressBar } from "./ProgressBar";
import { Sidebar } from "../Sidebar";
import { Section } from "@/types/section";

import { useScrollProgress } from "@/hooks/useScrollProgress";
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

    const { progress, scrolled } = useScrollProgress();
    const activeLink = useActiveSection(sections);
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-999 transition-all duration-700 ${scrolled ? "py-4" : "py-6 md:py-8"
                    }`}
            >
                {/* FIX: scrollWidth → progress */}
                <ProgressBar scrollWidth={progress * 100} />

                <div
                    className={`mx-auto px-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
                        ? "max-w-5xl bg-background/60 backdrop-blur-2xl border border-border/30 rounded-full shadow-lg"
                        : "max-w-7xl bg-transparent"
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <NavLogo title={title} />

                        <div className="hidden md:flex items-center gap-10">
                            {/* FIX: setActiveLink removed */}
                            <NavLinks
                                menuItems={sections}
                                activeLink={activeLink}
                            />

                            <div className="h-6 w-px bg-border" />

                            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        </div>

                        <MobileMenuButton onClick={() => setIsOpen(true)} />
                    </div>
                </div>
            </nav>

            {/* FIX: Sidebar props cleaned */}
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