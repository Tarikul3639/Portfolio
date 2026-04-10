"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";
import { SidebarStatusCard } from "./SidebarStatusCard";
import { SidebarThemeToggle } from "./SidebarThemeToggle";
import type { SidebarProps } from "./types";

export function Sidebar({
    isOpen,
    setIsOpen,
    menuItems,
    activeLink,
    setActiveLink,
    toggleTheme,
    theme,
}: SidebarProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-xl z-1000"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-sidebar-primary/10 via-transparent to-transparent opacity-50" />
                    </motion.div>

                    {/* Panel */}
                    <motion.div
                        initial={{ x: "100%", skewX: 5 }}
                        animate={{ x: 0, skewX: 0 }}
                        exit={{ x: "100%", skewX: -5 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-full sm:w-100 bg-sidebar border-l border-sidebar-border z-1001 flex flex-col shadow-[-20px_0_80px_rgba(0,0,0,0.4)]"
                    >
                        <SidebarHeader onClose={() => setIsOpen(false)} />

                        <SidebarNav
                            menuItems={menuItems}
                            activeLink={activeLink}
                            setActiveLink={setActiveLink}
                            onClose={() => setIsOpen(false)}
                        />

                        <div className="p-8 bg-sidebar border-t border-sidebar-border space-y-6">
                            <SidebarStatusCard />
                            <SidebarThemeToggle theme={theme} toggleTheme={toggleTheme} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
