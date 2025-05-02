import Image from '../assets/image/Profile Image.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { DiMongodb } from "react-icons/di";
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
import tailwind from '../assets/icons/tailwind-css-icon.svg';
import socket from '../assets/icons/socket-io-icon.svg';
import Express from '../assets/icons/express-js.svg';

const About = () => {
    // About Me description
    const AboutMe = [
        "I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate."
    ];

    // Tech class for styling tech stack items
    const techClass = 'inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm border border-primary-light/50 dark:border-primary/50 intersect:motion-preset-slide-up hover:motion-preset-wiggle motion-duration-1000';

    return (
        <section id='about' className="relative About f-full flex w-screen flex-col items-center justify-center pt-20 source-sans-3 text-base text-primary-light dark:text-primary-dark bg-background-light dark:bg-background-dark">

            <div className="flex flex-col items-center justify-center max-w-7xl">
                {/* Section Heading */}
                <div className={`relative flex flex-col items-center justify-center w-full pb-4 lg:pb-10`}>
                    <p className="text-xs text-primary-light dark:text-background-light border border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center -translate-y-1/2 shine overflow-hidden z-50">
                        GET TO KNOW ME
                    </p>
                    <h1 className="text-5xl font-bold pt-2 pb-1 bg-primary-light bg-gradient-to-r dark:from-primary dark:via-teal-400 dark:to-secondary text-transparent bg-clip-text">ABOUT ME</h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full px-4">
                    {/* Profile Section */}
                    <div className="relative flex flex-col items-center justify-center h-full w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-primary-light/50 dark:border-primary/50">
                        <div className="flex flex-col items-center justify-center w-full space-y-6 p-6">
                            {/* Profile Image */}
                            <svg className='w-[250px] h-[250px] intersect:motion-opacity-in-0 motion-duration-[5s] max-lg:mb-6' viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
                                {/* Define mask shape */}
                                <mask id="maskPath" mask-type="alpha">
                                    <path
                                        d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                                        fill="background-color"
                                    />
                                </mask>

                                {/* Fill shape with base color */}
                                <path
                                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                                    fill="background-color"
                                />

                                {/* Image clipped inside the path shape */}
                                <image
                                    href={Image} // <-- make sure `Image` is imported or a valid URL
                                    x="-5"
                                    y="0"
                                    width="108%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid slice"
                                    mask="url(#maskPath)"
                                />
                            </svg>


                            {/* About Me Description */}
                            <p className={`text-lg break-words hyphens-auto border-b border-primary-light/50 dark:border-primary/50 pb-6 intersect:motion-translate-x-in-[-10%]`}>
                                {AboutMe}
                            </p>
                            {/* Location */}
                            <p className={`relative intersect:motion-translate-y-in-100 text-primary-light/80 dark:text-primary-dark/80 intersect:motion-duration-1000`}>
                                <FontAwesomeIcon icon={faLocationDot} className={`mr-2`} />
                                Gazipur, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* Education and Experience Section */}
                    <div className="flex flex-col items-center justify-center p-6 h-full w-full lg:w-2/3">
                        {/* Education */}
                        <div className="flex flex-col items-center justify-center w-full py-3 border-b text-base border-primary-light/50 dark:border-primary/50 intersect:motion-preset-slide-up">
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
                        <div className="Experience flex flex-col items-center justify-center w-full text-base py-3 border-b border-primary-light/50 dark:border-primary/50 intersect:motion-translate-x-in-[10%] motion-duration-1000">
                            <h1 className="outfit text-lg font-bold text-left w-full mb-2">Experience</h1>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p>Full Stack Developer</p>
                                <p>Feb 2024 - Present</p>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full mb-2'>
                                <p>Self-initiated</p>
                                <p>Remote</p>
                            </div>
                            <div className='flex flex-col items-start w-full border-l border-primary-light/50 dark:border-primary/50 px-6 text-primary-light/80 dark:text-primary-dark/80 text-sm font-normal'>
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
                                <span className={`${techClass} motion-delay-250`}>
                                    <img src={tailwind} className="h-4" />Tailwind CSS</span>
                                <span className={`${techClass} motion-delay-300`}><img src={FarmerMotion} alt="Framer Motion" className="h-4" />Framer Motion</span>
                                <span className={`${techClass} motion-delay-350`}><FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />NodeJS</span>
                                <span className={`${techClass} motion-delay-400`}><img src={Express} className="h-4" />ExpressJS</span>
                                <span className={`${techClass} motion-delay-450`}><DiMongodb className="text-[#47A248] text-sm" />MongoDB</span>
                                <span className={`${techClass} motion-delay-500`}><FontAwesomeIcon icon={faGithub} />GitHub</span>
                                <span className={`${techClass} motion-delay-550`}><img src={C_Plus} alt="C++" className="h-4" />C++</span>
                                <span className={`${techClass} motion-delay-600`}><img src={C_programming} alt="C" className="h-4" />C</span>
                                <span className={`${techClass} motion-delay-650`}><img src={Rambo} alt="Custom Tech" className='h-4' /></span>
                                <span className={`${techClass} motion-delay-700`}>
                                    <img src={socket} className="h-4 " />Socket</span>
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
