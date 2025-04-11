import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="w-screen flex-col items-center justify-center p-8 source-sans-3 text-base bg-background-light text-primary-text-light">

            <div className="container w-full mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 max-md:mb-4 md:space-y-0 max-w-7xl">
                {/* Business Logo and Name */}
                <div className="flex items-center space-x-4">
                    <Link
                        className="text-[#cbcbcb] z-10 cursor-pointer overflow-hidden"
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

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        activeClass="active"
                        to="home"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="hover:text-primary transition duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="hover:text-primary transition duration-300"
                    >
                        About
                    </Link>
                    <Link
                        to="projects"
                        className="hover:text-primary transition duration-300"
                    >
                        Project
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={0}
                        duration={500}
                        className="hover:text-primary transition duration-300"
                    >
                        Contact
                    </Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6">
                    <FontAwesomeIcon
                        icon={faFacebookSquare}
                        className="text-2xl hover:text-primary hover:cursor-pointer"
                    />
                    <FontAwesomeIcon
                        icon={faTwitterSquare}
                        className="text-2xl hover:text-primary hover:cursor-pointer"
                    />
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-2xl hover:text-primary hover:cursor-pointer"
                    />
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-2 pt-4 text-center text-sm w-full flex justify-center relative overflow-hidden before:content-[''] before:absolute before:h-[1.5px] before:w-full before:bg-gradient-to-r before:from-transparent before:via-primary/50 before:to-transparent before:z-10 before:top-0 before:left-0 ">
                <p>
                    &copy; 2025 <strong>Tarikul Islam</strong> || Made with ❤️
                </p>
            </div>
        </footer>
    );
};

export default Footer;
