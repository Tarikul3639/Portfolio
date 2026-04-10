"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface Props {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

export function ThemeToggle({ theme, toggleTheme }: Props) {
    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-xl backdrop-blur-xs flex items-center justify-center text-muted-foreground border border-border/60 hover:border-primary/50 transition-colors shadow-sm"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.25 }}
                >
                    {theme === "dark" ? (
                        <Sun className="w-4 h-4 text-primary" />
                    ) : (
                        <Moon className="w-4 h-4" />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.button>
    );
}