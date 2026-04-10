import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

interface Props {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

export function SidebarThemeToggle({ theme, toggleTheme }: Props) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={toggleTheme}
            className="group relative w-full py-4 rounded-xl bg-sidebar-foreground text-sidebar font-black text-[10px] tracking-[0.4em] uppercase flex items-center justify-center gap-3 shadow-2xl transition-all overflow-hidden"
        >
            <div className="absolute inset-0 bg-sidebar-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
            {theme === "dark"
                ? <Sun className="w-4 h-4 text-sidebar group-hover:rotate-180 transition-transform duration-500" />
                : <Moon className="w-4 h-4 text-sidebar group-hover:rotate-180 transition-transform duration-500" />
            }
            <span className="relative z-10">
                {theme === "dark" ? "Switch Light" : "Switch Dark"} Mode
            </span>
        </motion.button>
    );
}