// --- IMPORTS ---
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMoon, faSun, faTerminal } from "@fortawesome/free-solid-svg-icons";

// --- SIDEBAR COMPONENT WITH DYNAMIC BACKDROP & NAVIGATION LINKS ---
export const Sidebar = ({ isOpen, setIsOpen, menuItems, activeLink, setActiveLink, toggleTheme, theme }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* DYNAMIC BACKDROP WITH MESH GRADIENT */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xl z-[1000]"
                    >
                        {/* Background Decor - Optional: animated circuit lines can go here */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
                    </motion.div>

                    <motion.div
                        initial={{ x: "100%", skewX: 5 }}
                        animate={{ x: 0, skewX: 0 }}
                        exit={{ x: "100%", skewX: -5 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white/90 dark:bg-[#080808]/95 border-l border-neutral-200 dark:border-primary/20 z-[1001] flex flex-col backdrop-blur-3xl shadow-[-20px_0_80px_rgba(0,0,0,0.2)]"
                    >
                        {/* SIDEBAR HEADER - HUD STYLE */}
                        <div className="p-8 flex items-center justify-between border-b border-neutral-200 dark:border-white/5">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-mono text-primary tracking-widest uppercase">System Menu</span>
                                <span className="text-xs text-neutral-500 font-bold">v4.0.4 - Active</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-500 hover:text-primary hover:rotate-90 transition-all duration-300 border border-neutral-200 dark:border-white/10"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        {/* NAVIGATION LINKS - INTERACTIVE LIST */}
                        <nav className="flex-1 px-8 py-12 overflow-y-auto custom-scrollbar">
                            <ul className="space-y-2">
                                {menuItems.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            to={item.toLowerCase()}
                                            smooth={true}
                                            onClick={() => {
                                                setActiveLink(item.toLowerCase());
                                                setIsOpen(false);
                                            }}
                                            className="relative group flex items-center py-5 px-6 rounded-2xl transition-all duration-500 hover:bg-primary/5 border border-transparent hover:border-primary/20 overflow-hidden"
                                        >
                                            {/* Link Index */}
                                            <span className="text-sm font-mono text-primary/40 group-hover:text-primary transition-colors mr-6">
                                                {`// 0${i + 1}`}
                                            </span>

                                            {/* Link Text */}
                                            <span className={`text-3xl font-black uppercase tracking-tighter transition-all duration-300 flex-1 ${activeLink === item.toLowerCase()
                                                ? "text-neutral-900 dark:text-white"
                                                : "text-neutral-400 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white"
                                                }`}>
                                                {item}
                                            </span>

                                            {/* Active Indicator */}
                                            {activeLink === item.toLowerCase() && (
                                                <motion.div
                                                    className="ml-auto w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00eeff]"
                                                    animate={{
                                                        scale: [1, 1.3, 1],
                                                        opacity: [0.8, 1, 0.8]
                                                    }}
                                                    transition={{ duration: 1.2, repeat: Infinity }}
                                                />
                                            )}

                                            {/* Hover Indicator Line */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-[2px] bg-primary shadow-[0_0_10px_#00eeff]"
                                                initial={{ width: 0 }}
                                                whileHover={{ width: "100%" }}
                                            />

                                            {/* Subtle Right Arrow on Hover */}
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300 flex-shrink-0">
                                                <div className="w-8 h-[1px] bg-primary" />
                                            </div>
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>

                        {/* SIDEBAR FOOTER - HUD UTILITY MODULE */}
                        <div className="p-8 bg-neutral-50 dark:bg-[#0c0c0c] border-t border-neutral-200 dark:border-white/5 space-y-6">

                            <div className="relative group p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 overflow-hidden shadow-inner">
                                {/* Background Decorative Tech Lines */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full -mr-10 -mt-10 group-hover:bg-primary/20 transition-all duration-700" />

                                <div className="relative z-10 flex flex-col gap-4">
                                    {/* Top Row: Status & Clock */}
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <div className="relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                                </div>
                                                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-bold">System Online</span>
                                            </div>
                                            <p className="text-[9px] text-neutral-400 dark:text-neutral-500 font-mono uppercase tracking-widest">Global Access Node: 0x24</p>
                                        </div>

                                        {/* Dynamic Digital Clock */}
                                        <div className="text-right">
                                            <h4 className="text-sm font-black font-mono text-neutral-800 dark:text-white tabular-nums uppercase">
                                                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                                            </h4>
                                            <p className="text-[8px] text-primary/60 font-mono font-bold uppercase tracking-tighter">Sync: UTC+6</p>
                                        </div>
                                    </div>

                                    {/* Separator Line */}
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/10 to-transparent" />

                                    {/* Bottom Row: Metrics */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] text-neutral-400 uppercase font-mono">Uptime</span>
                                                <span className="text-[10px] font-bold text-neutral-700 dark:text-neutral-300 font-mono">99.9%</span>
                                            </div>
                                            <div className="flex flex-col border-l border-neutral-200 dark:border-white/10 pl-4">
                                                <span className="text-[8px] text-neutral-400 uppercase font-mono">Load</span>
                                                <span className="text-[10px] font-bold text-neutral-700 dark:text-neutral-300 font-mono">0.04ms</span>
                                            </div>
                                        </div>

                                        <div className="h-8 w-12 flex items-end gap-[2px]">
                                            {/* Visual Audio/Signal Bars Animation */}
                                            {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ height: [`${h * 100}%`, `${(h * 100) - 20}%`, `${h * 100}%`] }}
                                                    transition={{ duration: 1.5 + (i * 0.2), repeat: Infinity }}
                                                    className="w-full bg-primary/40 rounded-t-[1px]"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* THEME TOGGLE BUTTON - RE-STYLED */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={toggleTheme}
                                className="group relative w-full py-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black font-black text-[10px] tracking-[0.4em] uppercase flex items-center justify-center gap-3 shadow-2xl transition-all overflow-hidden"
                            >
                                {/* Animated Background Overlay */}
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />

                                <FontAwesomeIcon
                                    icon={theme === "dark" ? faSun : faMoon}
                                    className="text-primary dark:text-neutral-800 group-hover:rotate-180 transition-transform duration-500"
                                />
                                <span className="relative z-10">{theme === "dark" ? "Switch Light" : "Switch Dark"} Mode</span>
                            </motion.button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

