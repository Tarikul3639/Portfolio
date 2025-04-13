import Image from '../assets/image/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiSocketdotio, SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
    faHtml5,
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Rambo from '../assets/icons/Rambo.svg';
import FarmerMotion from '../assets/icons/Motion.svg';
import WebRTC from '../assets/icons/webrtc-svgrepo-com.svg';
import C_Plus from '../assets/icons/c-plus-plus.svg';
import C_programming from '../assets/icons/C_Programming_Language.svg';

import Stars from "../components/ui/Stars.jsx";

const About = () => {
    // About Me description
    const AboutMe = [
        "I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate."
    ];

    // Text gradient classes
    const TextGradient = "bg-gradient-to-b from-rose-50 via-rose-200 to-neutral-500 bg-clip-text text-transparent";
    const textGradient2 = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";

    // Tech class for styling tech stack items
    const techClass = 'inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm border border-primary/50 intersect:motion-preset-slide-up hover:motion-preset-wiggle motion-duration-1000';

    return (
        <section id='about' className="relative About f-full flex w-screen flex-col items-center justify-center pt-20 source-sans-3 text-base text-primary-light-text bg-background">
            {/* <Stars/> */}
            <div className="flex flex-col items-center justify-center max-w-7xl">
                {/* Section Heading */}
                <div className={`relative flex flex-col items-center justify-center w-full pb-4 lg:pb-10 ${textGradient2}`}>
                    <p className={`${textGradient2} text-[15px] text-center text-neutral-300 font-medium`}>
                        GET TO KNOW ME
                    </p>
                    <h1 className="text-5xl font-bold pt-2 pb-1">ABOUT ME</h1>
                </div>
                
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full px-4">
                    {/* Profile Section */}
                    <div className="relative flex flex-col items-center justify-center h-full w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-primary/50">
                        <div className="flex flex-col items-center justify-center w-full space-y-6 p-6">
                            {/* Profile Image */}
                            <img
                                src={Image}
                                alt="Profile"
                                className="bg-transparent rounded-full w-[200px] h-[200px] border-2 border-dotted border-primary/50 intersect:motion-opacity-in-0 motion-duration-[5s] max-lg:mb-6"
                            />
                            {/* About Me Description */}
                            <p className={`text-lg break-words hyphens-auto border-b border-primary/50 pb-6 intersect:motion-translate-x-in-[-10%]`}>
                                {AboutMe}
                            </p>
                            {/* Location */}
                            <p className={`relative intersect:motion-translate-y-in-100 text-secondary-text intersect:motion-duration-1000`}>
                                <FontAwesomeIcon icon={faLocationDot} className={`mr-2`} />
                                Gazipur, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Education and Experience Section */}
                    <div className="flex flex-col items-center justify-center p-6 h-full w-full lg:w-2/3">
                        {/* Education */}
                        <div className="flex flex-col items-center justify-center w-full py-3 border-b text-base border-primary/50 intersect:motion-preset-slide-up">
                            <h1 className="outfit text-lg font-bold text-left w-full mb-2">Education</h1>
                            <a href="https://www.bubt.edu.bd/" target="_blank" rel="noopener noreferrer" className='inline-flex flex-row items-center justify-between w-full text-left'>
                                <p>Bangladesh University of Business and Technology</p>
                                <p className='text-end'>2022 - 2026</p>
                            </a>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p>Computer Science and Engineering</p>
                                <p>Current CGPA: 3.56</p>
                            </div>
                        </div>

                        {/* Experience */}
                        <div className="Experience flex flex-col items-center justify-center w-full text-base py-3 border-b border-primary/50 intersect:motion-translate-x-in-[10%] motion-duration-1000">
                            <h1 className="outfit text-lg font-bold text-left w-full mb-2">Experience</h1>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p>Full Stack Developer</p>
                                <p>Feb 2024 - Present</p>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full mb-2'>
                                <p>Self-initiated</p>
                                <p>Remote</p>
                            </div>
                            <div className='flex flex-col items-start w-full border-l border-primary/50 px-6 text-secondary-text text-sm font-normal'>
                                <p className='text-base/5 py-1  relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary/50'>
                                    Developed a messaging web application, focusing on real-time communication features like messaging and calling.
                                </p>
                                <p className='text-base/5 py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary/50'>
                                    Implemented a Load Shedding Notification System.
                                </p>
                                <p className='text-base/5 py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary/50'>
                                    Worked on multiple personal projects.
                                </p>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="Skills flex flex-col items-start w-full py-3 outfit">
                            <h1 className='text-lg font-semibold text-left w-full mb-2'>Tech Stack</h1>
                            <div className='flex gap-1.5 md:gap-2 flex-wrap'>
                                {/* Tech Icons */}
                                <span className={`${techClass} motion-delay-50`}><FontAwesomeIcon icon={faHtml5} style={{ color: '#e34c26' }} />HTML</span>
                                <span className={`${techClass} motion-delay-100`}><FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />CSS</span>
                                <span className={`${techClass} motion-delay-150`}><FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />JavaScript</span>
                                <span className={`${techClass} motion-delay-200`}><FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />ReactJS</span>
                                <span className={`${techClass} motion-delay-250`}><RiTailwindCssFill className="text-[#06b6d4]" />Tailwind CSS</span>
                                <span className={`${techClass} motion-delay-300`}><img src={FarmerMotion} alt="Framer Motion" className="h-4" />Framer Motion</span>
                                <span className={`${techClass} motion-delay-350`}><FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />NodeJS</span>
                                <span className={`${techClass} motion-delay-400`}><SiExpress className="text-[#e34c26] text-sm font-bold" />ExpressJS</span>
                                <span className={`${techClass} motion-delay-450`}><DiMongodb className="text-[#47A248] text-sm" />MongoDB</span>
                                <span className={`${techClass} motion-delay-500`}><FontAwesomeIcon icon={faGithub} />GitHub</span>
                                <span className={`${techClass} motion-delay-550`}><img src={C_Plus} alt="C++" className="h-4" />C++</span>
                                <span className={`${techClass} motion-delay-600`}><img src={C_programming} alt="C" className="h-4" />C</span>
                                <span className={`${techClass} motion-delay-650`}><img src={Rambo} alt="Custom Tech" className='h-4' /></span>
                                <span className={`${techClass} motion-delay-700`}><SiSocketdotio className="text-[#3B82F6] text-sm" />Socket</span>
                                <span className={`${techClass} motion-delay-750`}><img src={WebRTC} alt="WebRTC" className='h-4' />WebRTC</span>
                                <span className={`${techClass} motion-delay-800`}><VscVscode style={{ color: '#007ACC' }} />VS Code</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
