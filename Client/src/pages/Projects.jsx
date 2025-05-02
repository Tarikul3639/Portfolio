import WebRTC from '../assets/icons/webrtc-svgrepo-com.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from "react-icons/di";
import Rambo from '../assets/icons/Rambo.svg';
import FarmerMotion from '../assets/icons/Motion.svg';
import ChatFly from '../assets/image/ChatFly.png';
import Electrifiers from '../assets/image/Electrifiers.webp';
import Portfolio from '../assets/image/Portfolio.webp';
import Button from '../components/ui/Button.jsx';
import tailwind from '../assets/icons/tailwind-css-icon.svg';
import socket from '../assets/icons/socket-io-icon.svg';
import Express from '../assets/icons/express-js.svg';
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision.jsx";

const Projects = () => {
    // Gradient text styles for headings
    const textGradient =
        "bg-primary-light bg-gradient-to-r dark:from-secondary dark:via-teal-500 dark:to-primary text-transparent bg-clip-text";

    // Array of project data
    const projects = [
        {
            link: "https://github.com/Tarikul3639/ChatFly",
            name: "ChatFly",
            description:
                "ChatFly is a real-time web-based chat app with secure user login, file sharing, media (image, video, text) exchange, and voice messaging for smooth, interactive communication.",
            image: ChatFly,
            tech: [
                { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
                { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
                { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
                { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
                { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB' },
                { icon: <img src={socket} className="text-[#3B82F6] h-4 " />, name: 'Socket.io' },
                { icon: <img src={WebRTC} alt="WebRTC" className="h-4" />, name: 'WebRTC' },
                { icon: <img src={Express} className="h-4" />, name: 'Express.js' },
            ],
        },
        {
            link: "https://github.com/Tarikul3639/ELECTRIFIERS",
            name: "Electrifiers",
            description:
                "Electrifiers is a load-shedding notification system that provides real-time updates to residents based on location, along with energy-saving tips and emergency solutions.",
            image: Electrifiers,
            tech: [
                { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
                { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
                { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
                { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
                { icon: <DiMongodb className="text-[#47A248] text-sm" />, name: 'MongoDB' },
                { icon: <img src={tailwind} className="h-4" />, name: 'Tailwind CSS' },
                { icon: <img src={socket} className=" h-4 " />, name: 'Socket.io' },
                { icon: <img src={Express} className="h-4" />, name: 'Express.js' },
            ],
        },
        {
            link: 'https://github.com/Tarikul3639/Portfolio',
            name: "Portfolio",
            description:
                "This portfolio website showcases my development skills, projects, and technical stack using modern frontend technologies and animations.",
            image: Portfolio,
            tech: [
                { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
                { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
                { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
                { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
                { icon: <img src={tailwind} className="h-4" />, name: 'Tailwind CSS' },
                { icon: <img src={FarmerMotion} alt="Framer Motion" className="h-4" />, name: 'Framer Motion' },
                { icon: <img src={Rambo} alt="Custom Tech" className="h-4" />, name: '' },
                { icon: <img src={Express} className="h-4" />, name: 'Express.js' },
            ],
        },
    ];

    return (
        <section
            id="projects"
            className="relative projects flex flex-col justify-center items-center w-screen min-w-[345px] pt-20 outfit text-primary-light dark:text-primary-dark bg-background bg-background-light dark:bg-background-dark"
        >
            <div className="flex max-w-7xl flex-col items-center justify-center lg:h-full w-full px-4">
                {/* Section Header */}
                <div className="flex flex-col w-full items-center justify-center">
                    <p className="text-xs text-primary-light dark:text-background-light border border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center -translate-y-1/2 shine overflow-hidden z-50">
                        EXPLORE MY CREATION
                    </p>
                    <h1 className={`${textGradient} text-5xl font-bold pt-2 pb-1 mb-10`}>
                        PROJECTS
                    </h1>
                </div>

                {/* Project Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-2 mb-5">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="border border-primary/20 rounded-lg shadow-4xl overflow-hidden flex flex-col justify-between hover:shadow-4xl hover:scale-101 transition-transform duration-300 ease-in-out intersect:motion-preset-slide-right intersect:motion-duration-2000 shadow-xs hover:shadow-sm"
                        >
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.name}
                                loading="lazy"
                                className="w-full h-48 object-cover"
                            />

                            {/* Project Details */}
                            <BackgroundBeamsWithCollision className="flex flex-col bg-background-light dark:bg-primary-dark/50 p-4 rounded border border-b border-primary/5 before:hidden h-full">
                                <h2 className="w-full items-left text-2xl font-bold mb-2">{project.name}</h2>
                                <p className="text-primary-light/80 dark:text-primary-dark dark:opacity-80 font-[400] mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>
                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4 justify-start w-full">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className={`inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs border border-primary/5 intersect:motion-preset-slide-up hover:motion-preset-wiggle delay-5000 motion-duration-1000 text-primary-light dark:text-primary-dark motion-delay-${100 + i * 50}`}
                                        >
                                            {t.icon} {t.name}
                                        </span>
                                    ))}
                                </div>
                            </BackgroundBeamsWithCollision>

                            {/* View Button */}
                            <div className="bg-background-light dark:bg-background-dark flex items-center p-6 pt-0">
                                <Button
                                    text="View Project"
                                    onClick={() => window.open(project.link, "_blank")}
                                    variant="primary"
                                    className="w-full bg-primary-light hover:bg-primary-light/90 dark:bg-primary dark:hover:bg-primary/90 text-white hover:text-white dark:text-primary-light dark:hover:text-primary-light border-none"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
