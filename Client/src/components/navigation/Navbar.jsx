import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = ({ title = "Tarikul", menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [scrollWidth, setScrollWidth] = useState("0%");
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

    return (
        <nav className="w-full min-w-[250px] bg-transparent backdrop-blur-lg text-white px-4 py-0 shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link className="text-[#cbcbcb] z-10 cursor-pointer overflow-hidden" to="home" smooth={true} duration={500}>
                    <h1 className="text-xl font-[title] pb-2 uppercase" >
                        <span className="inline-block first-letter:text-[#00c896]">{title}</span>
                        <span className="text-[#00c896] text-4xl font-[square]">.</span>
                    </h1>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-bold text-white cursor-pointer transition-all duration-500 ease-in-out focus:outline-none z-10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <IoCloseSharp size={40} color="#00c896" /> : <HiOutlineMenuAlt3 size={40} color="#cbcbcb" />}
                </button>

                {/* Navigation Menu with Slide Animation */}
                <ul className={`Menu flex flex-col items-center text-left md:flex-row md:space-x-10 space-y-2 md:space-y-1 pb-6 md:p-0 absolute md:static bg-[#141C23] md:bg-transparent left-0 w-full md:w-auto transition-all duration-500 ease-in-out
                    ${isOpen ? "top-12 opacity-100 shadow-lg md:shadow-none" : "-top-50 opacity-100 h-auto"}`}>
                    {/* Menu Items */}
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative py-2 md:py-1 text-center md:text-left group">
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                spy={true}
                                onSetActive={() => setActiveLink(item.toLowerCase())}
                                className={`poppins-medium text-[#cbcbcb] hover:text-[#00c896] hover:text-shadow-[1px_1px_1px_rgba(0,_200,_150,_0.2)] cursor-pointer transition-all duration-300 block
                                    ${activeLink === item.toLowerCase() ? "text-[#00c896]" : ""}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                            <span className={`absolute bottom-0 left-0 h-[1.6px] bg-[#00c896] transition-all duration-500
                        ${activeLink === item.toLowerCase() ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Scroll Progress Bar */}
            <span
                className="absolute top-0 left-0 h-[2px] bg-[#00c896] rounded transition-all duration-0 ease-in-out"
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
