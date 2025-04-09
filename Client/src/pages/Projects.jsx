import WebRTC from '../assets/icons/webrtc-svgrepo-com.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from "react-icons/di";
import { SiSocketdotio } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Rambo from '../assets/icons/Rambo.svg';
import FarmerMotion from '../assets/icons/Motion.svg';
import ChatFly from '../assets/image/ChatFly.png';
import Electrifiers from '../assets/image/Electrifiers.png';
import Portfolio from '../assets/image/Portfolio.png';

const Projects = () => {
    // Tech class for styling tech stack items
    const techClass =
        'inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm border border-neutral-600 intersect:motion-preset-slide-up hover:motion-preset-wiggle delay-5000 motion-duration-1000';

    // Text gradient classes
    const textGradient =
        "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";
    const TextGradient2 =
        "bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text";

    const projects = [
        {
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
                { icon: <SiSocketdotio className="text-[#3B82F6] text-sm" />, name: 'Socket' },
                { icon: <img src={WebRTC} alt="WebRTC" className="h-4" />, name: 'WebRTC' },
            ],
        },
        {
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
                { icon: <RiTailwindCssFill className="text-[#06b6d4]" />, name: 'Tailwind CSS' },
                { icon: <SiSocketdotio className="text-[#3B82F6] text-sm" />, name: 'Socket' },
            ],
        },
        {
            name: "Portfolio",
            description:
                "This portfolio website showcases my development skills, projects, and technical stack using modern frontend technologies and animations.",
            image: Portfolio,
            tech: [
                { icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />, name: 'CSS' },
                { icon: <FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />, name: 'JavaScript' },
                { icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />, name: 'ReactJS' },
                { icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />, name: 'NodeJS' },
                { icon: <RiTailwindCssFill className="text-[#06b6d4]" />, name: 'Tailwind CSS' },
                { icon: <img src={FarmerMotion} alt="Framer Motion" className="h-4" />, name: 'Framer Motion' },
                { icon: <img src={Rambo} alt="Custom Tech" className="h-4" />, name: '' },
            ],
        },
    ];

    return (
        <section
            id="projects"
            className="projects flex justify-center items-center w-screen min-w-[345px] pt-20 outfit text-[#e5e5e5]"
        >
            <div className="flex max-w-7xl flex-col items-center justify-center lg:h-full w-full px-4">
                {/* Header */}
                <div className="flex flex-col w-full items-center justify-center">
                    <p className={`${TextGradient2} text-[15px] text-center text-neutral-300 font-medium`}>
                        EXPLORE MY CREATION
                    </p>
                    <h1 className={`${textGradient} text-5xl font-bold pt-2 pb-1 mb-10`}>
                        PROJECTS
                    </h1>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-neutral- border border-white/20 rounded-lg shadow-4xl overflow-hidden flex flex-col justify-between"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 bg-black/30 backdrop-blur-md rounded border border-b border-white/7">
                                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                                <p className="text-zinc-400 mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4 justify-start w-full">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className={`${techClass} motion-delay-${100 + i * 50}`}
                                        >
                                            {t.icon} {t.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-black/30 flex items-center p-6 pt-0">
                                <button className="inline-flex items-center justify-center whitespace-nowrap w-full mt-auto bg-[#a7e136] hover:bg-lime-300 text-black text-sm text-center py-2 rounded-sm transition">
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
