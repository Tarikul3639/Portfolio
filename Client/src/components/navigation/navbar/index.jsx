import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import { Sidebar } from "./Sidebar";
import { Scrollbar } from "./Scrollbar";

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

            // Active link detection (optional)
            const sections = menuItems.map(item => item.toLowerCase());
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom >= 80) {
                        setActiveLink(section);
                        break;
                    }
                }
            }

        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuItems]);

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
                                                    // spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={300}
                                                    onClick={() => setActiveLink(item.toLowerCase())}
                                                    // onSetActive={() => setActiveLink(item.toLowerCase())} //Scroll spy version
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
                                                        transition={{ type: "spring", bounce: 0, duration: 0.5 }}
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