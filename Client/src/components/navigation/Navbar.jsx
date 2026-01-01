import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMoon, faSun, faTerminal } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, setIsOpen, menuItems, activeLink, setActiveLink, toggleTheme, theme }) => {
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
                                <span className="text-xs text-neutral-500 font-bold">v2.0.4 - Active</span>
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

// --- NAVBAR COMPONENT WITH SCROLL PROGRESS BAR & THEME TOGGLE ---
const Scrollbar = ({ scrollWidth }) => {
    return (
        <div className="absolute bottom-0 left-0 h-[4px] w-full bg-neutral-200/30 dark:bg-white/5 overflow-visible">
            <motion.div className="h-full relative overflow-visible" style={{ width: `${scrollWidth}%` }}>

                {/* MAIN LASER BAR */}
                <div className="absolute inset-0 bg-primary shadow-[0_0_15px_#00eeff,0_0_30px_rgba(0,238,255,0.4)] rounded-r-full" />

                {/* FLOATING ENERGY NODE AT BAR END */}
                <div className="absolute right-[-8px] top-[-10px] z-20">

                    {/* OUTER GLOW EFFECT */}
                    <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-[-12px] bg-primary/30 blur-xl rounded-full"
                    />

                    {/* CORE ENERGY ORB */}
                    <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="relative w-6 h-6 bg-white/80 dark:bg-white rounded-full flex items-center justify-center border-2 border-primary shadow-[0_0_20px_#fff,0_0_40px_#00eeff]"
                    >
                        {/* INNER PULSE */}
                        <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                    </motion.div>
                </div>

                {/* MOVING ENERGY TRACE */}
                <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/50 to-transparent w-full h-full"
                />

                {/* BOTTOM GLOW SHADOW */}
                <div className="absolute top-4 left-0 w-full h-4 bg-primary/10 blur-xl rounded-full" />
            </motion.div>
        </div>
    );
}

const Navbar = ({ title = "Tarikul", menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollWidth((scrollTop / docHeight) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-700 ${scrolled ? "py-4" : "py-6 md:py-8"}`}>
                {/* PROGRESS BAR - Ultra Thin Laser Style */}
                <Scrollbar scrollWidth={scrollWidth} />

                {/* NAVBAR CONTAINER */}
                <div className={`mx-auto px-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
                    ? "max-w-5xl bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-neutral-200/50 dark:border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    : "max-w-7xl bg-transparent"
                    }`}>
                    <div className="flex items-center justify-between">
                        {/* LOGO WITH GLITCH HOVER */}
                        <Link to="home" className="cursor-pointer group flex items-center gap-3">
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                    className="w-9 h-9 border border-primary/30 rounded-lg flex items-center justify-center"
                                />
                                <FontAwesomeIcon icon={faTerminal} className="absolute inset-0 m-auto text-primary text-sm" />
                            </div>
                            <h1 className="text-2xl font-black tracking-tighter uppercase text-neutral-900 dark:text-white transition-colors">
                                {title}<span className="text-primary group-hover:drop-shadow-[0_0_5px_#00eeff]">.</span>
                            </h1>
                        </Link>

                        {/* DESKTOP NAVIGATION - UNIQUE ACTIVE STATE */}
                        <div className="hidden md:flex items-center gap-10">
                            <LayoutGroup>
                                <ul className="flex items-center gap-2 py-1.5">
                                    {menuItems.map((item) => {
                                        const isCurrent = activeLink === item.toLowerCase();
                                        return (
                                            <li key={item} className="relative px-4 py-2">
                                                <Link
                                                    to={item.toLowerCase()}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    onSetActive={() => setActiveLink(item.toLowerCase())}
                                                    className={`relative z-10 text-[11px] font-black tracking-[0.25em] uppercase transition-all duration-500 cursor-pointer ${isCurrent
                                                        ? "text-neutral-900 dark:text-white"
                                                        : "text-neutral-500 dark:text-neutral-500 hover:text-primary dark:hover:text-primary"
                                                        }`}
                                                >
                                                    {item}
                                                </Link>

                                                {/* INNOVATIVE PILL INDICATOR */}
                                                {isCurrent && (
                                                    <motion.div
                                                        layoutId="nav-pill"
                                                        className="absolute inset-0 bg-primary/10 rounded-full z-0 border border-neutral-200 dark:border-white/10 shadow-sm"
                                                        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                                                    >
                                                        {/* TOP LASER DOT */}
                                                        <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary shadow-[0_0_10px_#00eeff]" />
                                                    </motion.div>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </LayoutGroup>

                            <div className="h-6 w-[1px] bg-neutral-200 dark:bg-white/10 mx-2" />

                            {/* MINIMALIST THEME TOGGLE */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center text-neutral-600 dark:text-primary border border-neutral-200 dark:border-white/10 hover:border-primary/50 transition-colors shadow-sm"
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={theme}
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>

                        {/* MOBILE MENU BUTTON - QUANTUM CORE VERSION */}
                        <button
                            className="md:hidden relative w-16 h-16 flex items-center justify-center group"
                            onClick={() => setIsOpen(true)}
                        >
                            {/* Layer 1: Outer Rotating Tech Ring (Dashed) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full scale-90 group-hover:scale-100 group-hover:border-primary/60 transition-all duration-500"
                            />

                            {/* Layer 2: Middle Hex-Frame (Rotating Counter-Clockwise) */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute w-10 h-10 border border-primary/40 rounded-sm group-hover:border-primary transition-colors"
                                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                            />

                            {/* Layer 3: The Core (Pulsing Energy) */}
                            <div className="relative flex items-center justify-center">
                                {/* Glow Aura */}
                                <div className="absolute w-6 h-6 bg-primary/40 blur-md rounded-full animate-pulse" />

                                {/* Main Icon - 4 Moving Dots (Grid Transformation) */}
                                <div className="grid grid-cols-2 gap-1 relative z-10">
                                    {[1, 2, 3, 4].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                borderRadius: ["20%", "50%", "20%"]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 0.2
                                            }}
                                            className="w-1.5 h-1.5 bg-primary shadow-[0_0_8px_#00eeff]"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* HUD Elements: Scanning Brackets (Vertical Only) */}
                            <div className="absolute inset-y-0 -left-1 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                            <div className="absolute inset-y-0 -right-1 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />

                            {/* Micro Text Labels */}
                            <div className="absolute -right-6 top-1/2 -translate-y-1/2 rotate-90 overflow-hidden h-3">
                                <motion.p
                                    initial={{ y: 10 }}
                                    whileHover={{ y: 0 }}
                                    className="text-[6px] font-mono text-primary uppercase tracking-[0.3em] font-black"
                                >
                                    Access
                                </motion.p>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* SIDEBAR - MODERNIZED WITH GLASSMORPHISM */}
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                menuItems={menuItems}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                toggleTheme={toggleTheme}
                theme={theme}
            />
        </>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
