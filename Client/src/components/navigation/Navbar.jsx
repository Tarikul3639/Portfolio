import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMoon, faSun, faTerminal } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ title = "Tarikul", menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    // --- THEME LOGIC ---
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

    // --- SCROLL EFFECT & PROGRESS BAR LOGIC ---
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
        <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
            scrolled ? "py-3" : "py-6"
        }`}>

            {/* FLOATING GLASS NAVBAR CONTAINER */}
            <div className={`mx-auto px-6 transition-all duration-700 ease-in-out ${
                scrolled 
                ? "max-w-4xl bg-black/60 dark:bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                : "max-w-7xl bg-transparent"
            }`}>
                <div className="flex items-center justify-between h-14">
                    
                    {/* LOGO SECTION */}
                    <Link to="home" smooth={true} className="cursor-pointer group flex items-center gap-2">
                        <motion.div 
                            animate={{ rotate: [3, 12, 3] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-[0_0_20px_#00eeff]"
                        >
                           <FontAwesomeIcon icon={faTerminal} className="text-black text-xs" />
                        </motion.div>
                        <h1 className="text-xl font-black tracking-tighter uppercase text-white dark:text-white">
                            {title}<span className="text-primary group-hover:animate-pulse">.</span>
                        </h1>
                    </Link>

                    {/* DESKTOP NAVIGATION MENU */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-6">
                            {menuItems.map((item) => (
                                <li key={item} className="relative">
                                    <Link
                                        to={item.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        onSetActive={() => setActiveLink(item.toLowerCase())}
                                        className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-300 cursor-pointer px-2 py-1 ${
                                            activeLink === item.toLowerCase()
                                                ? "text-primary"
                                                : "text-neutral-400 hover:text-white"
                                        }`}
                                    >
                                        {item}
                                    </Link>

                                    {/* ACTIVE LINK UNDERLINE */}
                                    {activeLink === item.toLowerCase() && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_#00eeff]"
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* THEME TOGGLE BUTTON */}
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme} 
                            className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-primary"
                                >
                                    <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button className="md:hidden text-primary p-2" onClick={() => setIsOpen(true)}>
                        <HiOutlineMenuAlt3 size={28} />
                    </button>
                </div>
            </div>

            {/* SCROLL PROGRESS BAR CONTAINER */}
            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-white/5 overflow-visible">
                <motion.div className="h-full relative overflow-visible" style={{ width: `${scrollWidth}%` }}>

                    {/* MAIN LASER BAR */}
                    <div className="absolute inset-0 bg-primary shadow-[0_0_15px_#00eeff,0_0_30px_rgba(0,238,255,0.4)] rounded-r-full" />

                    {/* FLOATING ENERGY NODE AT BAR END */}
                    <div className="absolute right-[-8px] top-[-10px] z-20">

                        {/* OUTER GLOW EFFECT */}
                        <motion.div 
                            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-[-12px] bg-primary/40 blur-xl rounded-full"
                        />

                        {/* CORE ENERGY ORB */}
                        <motion.div 
                            animate={{ y: [0, -2, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="relative w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-primary shadow-[0_0_20px_#fff,0_0_40px_#00eeff]"
                        >
                            {/* INNER PULSE */}
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                        </motion.div>
                    </div>

                    {/* MOVING ENERGY TRACE */}
                    <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full"
                    />

                    {/* BOTTOM GLOW SHADOW */}
                    <div className="absolute top-4 left-0 w-full h-4 bg-primary/10 blur-xl rounded-full" />
                </motion.div>
            </div>

            {/* MOBILE SIDEBAR MENU */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* BACKDROP OVERLAY */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[1000]"
                        />

                        {/* SLIDE-IN MENU PANEL */}
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[300px] bg-[#050505] border-l border-primary/20 z-[1001] p-10 flex flex-col shadow-[-20px_0_60px_rgba(0,238,255,0.1)]"
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end text-primary mb-12 hover:rotate-90 transition-transform duration-300"
                            >
                                <FontAwesomeIcon icon={faXmark} size="2x" />
                            </button>

                            {/* MOBILE NAV LINKS */}
                            <ul className="space-y-6">
                                {menuItems.map((item, i) => (
                                    <motion.li 
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        key={item}
                                    >
                                        <Link
                                            to={item.toLowerCase()}
                                            smooth={true}
                                            onClick={() => setIsOpen(false)}
                                            className="text-3xl font-black uppercase tracking-tighter text-neutral-600 hover:text-primary transition-all flex items-center gap-4 group"
                                        >
                                            <span className="text-xs font-mono text-primary/30 group-hover:text-primary">
                                                0{i + 1} //
                                            </span>
                                            {item}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* MOBILE THEME SWITCH */}
                            <div className="mt-auto pt-10 border-t border-white/5">
                                <motion.button 
                                    onClick={toggleTheme}
                                    className="w-full py-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center gap-3 text-primary font-bold uppercase text-xs tracking-widest"
                                >
                                    <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
                                    Mode: {theme.toUpperCase()}
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
