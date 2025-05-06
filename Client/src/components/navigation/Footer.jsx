import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="w-full dark:bg-background-dark border-t-1 border-primary-light/10 px-8 py-20 dark:border-primary-dark/10 bg-background-light mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between p-3">
                {/* Left side */}
                <div className="mb-8 md:mb-0">
                    <div className="flex items-center">
                        {/* Business Logo and Name */}
                        <div className="flex items-center space-x-4">
                            <Link
                                className="text-primary-light dark:text-primary-dark z-10 cursor-pointer overflow-hidden"
                                to="home"
                                smooth={true}
                                duration={500}
                            >
                                <h1 className="text-xl font-[title] pb-2 uppercase">
                                    <span className="inline-block first-letter:text-primary">Tarikul</span>
                                    <span className="text-primary text-4xl font-[square]">.</span>
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className="pl-1 text-sm text-primary-light/70 dark:text-primary-dark/70 space-y-2">
                        <p>
                            A product by{" "}
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                Tarikul Islam
                            </a>
                        </p>
                        <p>
                            Building in public at{" "}
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                @tarikul3639
                            </a>
                        </p>
                    </div>
                </div>

                {/* Right side - Navigation */}
                <div className="grid grid-cols-3 md:grid-cols-3 gap-x-12 gap-y-4 font-normal text-[15px] max-lg:mt-10">
                    <div className="space-y-4">
                        <a href="https://github.com/Tarikul3639" target="_blank" rel="noopener noreferrer" className="block text-gray-400 black:black:hover:text-white hover:text-black/80 hover:text-black/80 transition">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/Tarikul3639" target="_blank" rel="noopener noreferrer" className="block text-gray-400 black:hover:text-white hover:text-black/80 transition">
                            Linkedin
                        </a>
                        <a href="https://x.com/Tarikul3639" target="_blank" rel="noopener noreferrer" className="block text-gray-400 black:hover:text-white hover:text-black/80 transition">
                            Twitter
                        </a>
                        <a href="https://www.facebook.com/tarikulislam3639/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 black:hover:text-white hover:text-black/80 transition">
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/tarikul3639/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 black:hover:text-white hover:text-black/80 transition">
                            Instagram
                        </a>
                        <a href="https://dribbble.com/tarikul3639" target="_blank" rel="noopener noreferrer" className="block text-gray-400 black:hover:text-white hover:text-black/80 transition">
                            Dribbble
                        </a>
                    </div>
                    <div className="space-y-4 font-light font-normal text-[15px]">
                        <Link to="home" smooth={true} duration={500} className="block text-gray-400 black:hover:text-white hover:text-black/80 cursor-pointer transition">
                            Home
                        </Link>
                        <Link to="about" smooth={true} duration={500} className="block text-gray-400 black:hover:text-white hover:text-black/80 cursor-pointer transition">
                            About
                        </Link>
                        <Link to="projects" smooth={true} duration={500} className="block text-gray-400 black:hover:text-white hover:text-black/80 cursor-pointer transition">
                            Projects
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="block text-gray-400 black:hover:text-white hover:text-black/80 cursor-pointer transition">
                            Contact
                        </Link>
                    </div>
                    <div className="space-y-4 col-span-1 md:mt-0 font-normal text-[15px]">
                        <Link to="contact" smooth={true} duration={500} className="block text-gray-400 black:hover:text-white hover:text-black/80 cursor-pointer transition">
                            Service
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className="block text-gray-400 black:hover:text-white hover:text-black/80 cursor-pointer transition">
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
