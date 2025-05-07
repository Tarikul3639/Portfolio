import SpotlightCard from '../components/ui/SpotlightCard.jsx';
import Image from '../assets/image/Profile Image.webp';
import Noise from '../components/ui/Noise.jsx';
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
import SplitText from "../components/ui/SplitText.jsx";
import Particles from '../components/ui/Particles.jsx';

const About = () => {
    // About Me description
    const aboutMeText = [
        `I specialize in frontend development, creating dynamic, visually engaging, and highly responsive websites that provide seamless user experiences. With a strong foundation in HTML, CSS, and JavaScript, I focus on building modern web interfaces that are not only aesthetically appealing but also optimized for performance and accessibility. I have extensive experience with frameworks like React and Tailwind CSS, enabling me to create interactive, scalable, and efficient applications. Whether designing sleek UI components, implementing smooth animations, or enhancing user interactions, my goal is to develop web solutions that are both functional and innovative.`
    ];

    // Tech class for styling tech stack items
    const techClass = 'inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs border border-primary-light/50 dark:border-primary-dark/30 intersect:motion-preset-slide-up hover:motion-preset-wiggle motion-duration-1000';

    return (
        <section id='about' className="relative About f-full flex w-screen flex-col items-center justify-center pt-20 mb-5 source-sans-3 text-base text-primary-light dark:text-primary-dark bg-background-light dark:bg-background-dark">
            <div className="flex flex-col justify-center max-w-7xl px-2">
                {/* Header */}
                <div className="my-15 md:my-30 px-2">
                    <SplitText
                        text="Let Me Introduce Myself"
                        className="text-3xl font-[800] md:text-4xl mb-4 text-black dark:text-white max-w-4xl"
                        delay={10}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                    <div className="mt-5 max-w-sm">
                        <SplitText
                            text="Focused on innovation and solving problems, I’m passionate about building solutions that make a difference."
                            className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base"
                            delay={5}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                        />

                    </div>
                </div>
                {/* Main Content */}
                <div className="HELLO flex flex-col lg:flex-row justify-center space-x-4 space-y-4 w-full">
                    {/* Profile Section */}
                    <SpotlightCard className="relative flex flex-col items-center justify-center h-full w-full lg:w-1/3 lg:border border-primary-light/50 dark:border-primary-dark/15 rounded-sm">
                        <Noise
                            patternSize={250}
                            patternScaleX={1}
                            patternScaleY={1}
                            patternAlpha={10}
                        />
                        <div className="flex flex-col items-center justify-center w-full space-y-6">
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
                                    href={Image}
                                    x="-5"
                                    y="0"
                                    width="108%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid slice"
                                    mask="url(#maskPath)"
                                />
                            </svg>

                            {/* About Me Description */}
                            <h2 className="text-2xl font-bold mb-4">HI THERE, I'M MILAD</h2>

                            <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 text-justify">
                                {aboutMeText[0]}
                            </p>
                        </div>
                    </SpotlightCard>

                    {/* Education Skills and Experience Section */}
                    <div className="flex flex-col items-center justify-center space-y-4 h-full w-full lg:w-2/3">
                        {/* Education */}
                        <SpotlightCard className="flex flex-col items-center justify-center w-full p-4 text-[15px] text-primary-light/90 dark:text-primary-dark/85 intersect:motion-preset-slide-up border-primary-light/50 dark:border-primary-dark/15 rounded-sm">
                            <Noise
                                patternSize={250}
                                patternScaleX={1}
                                patternScaleY={1}
                                patternAlpha={10}
                            />
                            <h1 className="outfit text-lg font-bold text-left w-full mb-2 text-primary-light dark:text-primary-dark">Education</h1>
                            <a href="https://www.bubt.edu.bd/" target="_blank" rel="noopener noreferrer" className='inline-flex flex-row items-center justify-between w-full text-left'>
                                <p className="text-primary-light dark:text-primary-dark">Bangladesh University of Business and Technology</p>
                                <p className='text-end text-primary-light dark:text-primary-dark'>2022 - 2026</p>
                            </a>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <p className="text-primary-light dark:text-primary-dark">Computer Science and Engineering</p>
                                <p className="text-primary-light dark:text-primary-dark">Current CGPA: 3.56</p>
                            </div>
                        </SpotlightCard>

                        {/* Experience */}
                        <SpotlightCard className="Experience relative flex flex-col items-center justify-center w-full text-base p-4 intersect:motion-translate-x-in-[10%] motion-duration-1000 border-primary-light/50 dark:border-primary-dark/15 rounded-sm text-primary-light dark:text-primary-dark">
                            <Noise
                                patternSize={250}
                                patternScaleX={1}
                                patternScaleY={1}
                                patternAlpha={10}
                            />
                            <h1 className="outfit text-lg font-bold text-left w-full mb-2">Experience</h1>
                            <div className='flex flex-row items-center justify-between w-full text-sm'>
                                <p>Full Stack Developer</p>
                                <p>Feb 2024 - Present</p>
                            </div>
                            <div className='flex flex-row items-center justify-between w-full mb-2'>
                                <p>Self-initiated</p>
                                <p>Remote</p>
                            </div>
                            <div className='flex flex-col items-start w-full border-l border-primary-light/50 dark:border-primary-dark/50 px-6 text-primary-light/80 dark:text-primary-dark/80 text-sm font-normal'>
                                <p className='text-sm py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary-light/50 dark:before:bg-primary-dark/50'>
                                    Developed a messaging web application, focusing on real-time communication features like messaging and calling.
                                </p>
                                <p className='text-sm py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary-light/50 dark:before:bg-primary-dark/50'>
                                    Implemented a Load Shedding Notification System.
                                </p>
                                <p className='text-sm py-1 relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-primary-light/50 dark:before:bg-primary-dark/50'>
                                    Worked on multiple personal projects.
                                </p>
                            </div>
                        </SpotlightCard>

                        {/* Skills Section */}
                        <SpotlightCard className="Skills relative flex flex-col items-start w-full p-4 outfit border-primary-light/50 dark:border-primary-dark/15 rounded-sm">
                            <Noise
                                patternSize={250}
                                patternScaleX={1}
                                patternScaleY={1}
                                patternAlpha={10}
                            />
                            <h1 className='text-lg font-semibold text-left w-full mb-4'>Tech Stack</h1>
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
                                    <img src={socket} className="h-4" />Socket</span>
                                <span className={`${techClass} motion-delay-750`}><img src={WebRTC} alt="WebRTC" className='h-4' />WebRTC</span>
                                <span className={`${techClass} motion-delay-800`}><VscVscode style={{ color: '#007ACC' }} />VS Code</span>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;