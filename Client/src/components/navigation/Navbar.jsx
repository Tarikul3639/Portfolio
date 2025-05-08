import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = ({ title = "Tarikul", menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrollWidth, setScrollWidth] = useState("0%");
    const [theme, setTheme] = useState(() =>
        // window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        "dark"
    );

    // Scroll event listener to update width
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = (scrollTop / docHeight) * 100;
            setScrollWidth(`${scrollProgress}%`);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle dark/light mode
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
            root.style.setProperty("--background", "var(--color-background-dark)");
        } else {
            root.classList.remove("dark");
            root.style.setProperty("--background", "var(--color-background-light)");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <nav className={`${isOpen ? "bg-background-light/95 dark:bg-background-dark/95" : " "} w-full min-w-[250px] text-white px-4 py-0 shadow-xl fixed top-0 left-0 z-999`}>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link className="text-primary-light dark:text-primary-dark z-10 cursor-pointer overflow-hidden" to="home" smooth={true} duration={500}>
                    <h1 className="text-xl font-[title] pb-2 uppercase" >
                        <span className={`inline-block first-letter:text-primary`}>{title}</span>
                        <span className="text-primary text-4xl font-[square]">.</span>
                    </h1>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-bold text-white cursor-pointer transition-all duration-500 ease-in-out focus:outline-none z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FontAwesomeIcon icon={faXmark} className="text-3xl text-primary-light opacity-80 dark:text-primary-dark" /> : <span className="text-primary-light opacity-80 dark:text-primary-dark">
                        <HiOutlineMenuAlt3 size={35} />
                    </span>
                    }
                </button>
                {/* Navigation Menu with Slide Animation */}
                <ul className={`Menu flex flex-col items-center text-left md:flex-row md:space-x-10 space-y-2 md:space-y-1 pb-6 md:p-0 absolute md:static md:bg-transparent left-0 w-full md:w-auto transition-all duration-100 ease-in-out 
                    ${isOpen ? "top-12 opacity-100 bg-background-light/95 dark:bg-background-dark/95 shadow-lg md:shadow-none" : "-top-60 opacity-100 h-auto"}`}>

                    {/* Theme Toggle */}
                    <button onClick={toggleTheme} className="flex item-center text-xl text-primary-light dark:text-primary/60 hover:text-primary-light/60 dark:hover:text-primary/90 transition py-2 px-3 transition-all duration-300 cursor-pointer rounded-lg">
                        {theme === "dark" ? (
                            <i className="bi bi-brightness-high"></i>
                        ) : (
                            <i className="bi bi-moon"></i>
                        )}
                    </button>

                    {/* Menu Items */}
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative py-2 md:py-1 text-center md:text-left group">
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                spy={true}
                                onSetActive={() => setActiveLink(item.toLowerCase())}
                                className={`poppins-medium text-primary-light dark:text-primary-dark/80 hover:text-primary hover:text-shadow-[1px_1px_1px_rgba(0,_200,_150,_0.2)] cursor-pointer transition-all duration-300 block
                                    ${activeLink === item.toLowerCase() ? "text-primary" : ""}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                            <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500  bg-primary ${activeLink === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Scroll Progress Bar */}
            <span
                className={`absolute top-0 left-0 h-[3px] transition-all duration-0 ease-in-out bg-primary`}
                style={{ width: scrollWidth }}
            ></span>
        </nav>
    );
};

// Prop Types for Type Checking
Navbar.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
