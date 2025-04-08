import WebRTC from '../assets/icons/webrtc-svgrepo-com.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCss3Alt,
    faJs,
    faReact,
    faNodeJs,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from "react-icons/di";
import { SiSocketdotio, SiExpress } from "react-icons/si";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import ChatFly from '../assets/image/ChatFly.png';
const Projects = () => {
    // Tech class for styling tech stack items
    const techClass = 'inline-flex justify-center items-center gap-2 px-3 py-1 rounded-full text-xs md:text-sm border border-neutral-600 intersect:motion-preset-slide-up hover:motion-preset-wiggle motion-duration-1000';

    // Text gradient classes
    const textGradient = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";
    const TextGradient2 = "bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text";
    return (
        <section id="projects" className="projects flex justify-center items-center w-screen min-w-[345px] pt-20 text-rose-50 outfit text-md font-normal" >
            <div className="flex max-w-7xl flex-col items-center justify-center lg:h-full w-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <p className={`${TextGradient2} text-[15px] text-center text-neutral-300 font-medium`}>EXPLORE MY CREATION</p>
                    <h1 className={`${textGradient} text-5xl font-bold pt-2 pb-1 mb-10`}>Projects</h1>
                </div>
                <div className="flex flex-col items-center justify-center gap-16 h-full w-full px-4 lg:px-0">
                    {/* ChatFlay */}
                    <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 rounded-2xl overflow-hidden py-4 px-6 border-b border border-neutral-600">
                        <div className="flex flex-col items-center justify-left w-full lg:w-2/3 h-full">
                            <h1 className="text-3xl border-b border-neutral-600 w-full pb-2 font-semibold text-left">ChatFly</h1>
                            <h2 className="w-full text-base/6 mt-2 text-left">
                                ChatFly is a web-based chat application and real-time chat application.
                            </h2>
                            <div className="flex flex-col items-start justify-start w-full mt-2 space-y-2 pl-6 text-[15px]/5 border-l border-neutral-600">
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">
                                    Secure user authentication for personalized access
                                </p>
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">
                                    File sharing to send and receive files during conversations
                                </p>
                                <p className="relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">Image, video, and text message sharing</p>
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">Voice sharing for interactive communication</p>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-4 justify-start w-full">
                                <span className={`${techClass} motion-delay-100`}><FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />CSS</span>
                                <span className={`${techClass} motion-delay-150`}><FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />JavaScript</span>
                                <span className={`${techClass} motion-delay-200`}><FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />ReactJS</span>
                                <span className={`${techClass} motion-delay-350`}><FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />NodeJS</span>
                                <span className={`${techClass} motion-delay-450`}><DiMongodb className="text-[#47A248] text-sm" />MongoDB</span>
                                <span className={`${techClass} motion-delay-700`}><SiSocketdotio className="text-[#3B82F6] text-sm" />Socket</span>
                                <span className={`${techClass} motion-delay-750`}><img src={WebRTC} alt="WebRTC" className='h-4' />WebRTC</span>
                            </div>
                            <div className='flex gap-4 mt-5 justify-left w-full'>
                                <span className={`{techClass} inline-flex justify-center items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-sm border border-neutral-600 intersect:motion-preset-slide-up motion-delay-800 cursor-pointer hover:scale-[1.02] hover:bg-neutral-900 duration-300`}>GitHub<FontAwesomeIcon icon={faGithub} /></span>

                                <span className={`{techClass} inline-flex justify-center items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-sm border border-neutral-600 intersect:motion-preset-slide-up motion-delay-850 cursor-pointer hover:scale-[1.02] hover:bg-neutral-900 duration-300`}>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                            </div>
                        </div>
                        <div className="lg:relative flex items-center justify-end h-full lg:w-1/3 overflow-visible">
                            <img
                                src={ChatFly}
                                alt="ChatFly"
                                className="lg:absolute lg:top-1/2 lg:left-0 lg:transition-all lg:duration-300 lg:hover:h-[21rem] lg:hover:w-[45rem] lg:hover:translate-x-[-50%] lg:hover:translate-y-[-50%] lg:object-cover lg:border lg:border-neutral-600 rounded-xl"
                            />
                        </div>
                    </div>





                    {/* Electrifiers */}
                    <div className="hidden flex flex-row items-center justify-center w-full gap-4 rounded-2xl overflow-hidden border-b lg:border border-neutral-600">
                        <div className="flex flex-col items-center justify-left w-2/3 h-full p-6">
                            <h1 className="text-3xl border-b border-neutral-600 w-full pb-2 font-semibold text-left">ChatFly</h1>
                            <h2 className="w-full text-base/6 mt-2 text-left">
                                ChatFly is a web-based chat application and real-time chat application.
                            </h2>
                            <div className="flex flex-col items-start justify-start w-full mt-2 space-y-2 pl-6 text-[15px]/5 border-l border-neutral-600">
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">
                                    Secure user authentication for personalized access
                                </p>
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">
                                    File sharing to send and receive files during conversations
                                </p>
                                <p className="relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">Image, video, and text message sharing</p>
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">Voice sharing for interactive communication</p>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-4 justify-start w-full">
                                <span className={`${techClass} motion-delay-100`}><FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />CSS</span>
                                <span className={`${techClass} motion-delay-150`}><FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />JavaScript</span>
                                <span className={`${techClass} motion-delay-200`}><FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />ReactJS</span>
                                <span className={`${techClass} motion-delay-350`}><FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />NodeJS</span>
                                <span className={`${techClass} motion-delay-450`}><DiMongodb className="text-[#47A248] text-sm" />MongoDB</span>
                                <span className={`${techClass} motion-delay-700`}><SiSocketdotio className="text-[#3B82F6] text-sm" />Socket</span>
                                <span className={`${techClass} motion-delay-750`}><img src={WebRTC} alt="WebRTC" className='h-4' />WebRTC</span>
                            </div>
                            <div className='flex gap-4 mt-5 justify-left w-full'>
                                <span className={`{techClass} inline-flex justify-center items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-sm border border-neutral-600 intersect:motion-preset-slide-up motion-delay-800 cursor-pointer hover:scale-[1.02] hover:bg-neutral-900 duration-300`}>GitHub<FontAwesomeIcon icon={faGithub} /></span>

                                <span className={`{techClass} inline-flex justify-center items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-sm border border-neutral-600 intersect:motion-preset-slide-up motion-delay-850 cursor-pointer hover:scale-[1.02] hover:bg-neutral-900 duration-300`}>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-end h-full w-1/3 pt-16 overflow-visible">
                            <div className="absolute -top-17 left-0 h-[30rem] w-[40rem] pointer-events-none">
                                <img
                                    src={ChatFly}
                                    alt="ChatFly"
                                    className="h-full w-full object-cover border border-neutral-600 rounded-xl transition-transform duration-300 hover:scale-105 z-10"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Portfolio */}
                    <div className="hidden flex flex-row items-center justify-center w-full gap-4 rounded-2xl overflow-hidden border-b lg:border border-neutral-600">
                        <div className="flex flex-col items-center justify-left w-2/3 h-full p-6">
                            <h1 className="text-3xl border-b border-neutral-600 w-full pb-2 font-semibold text-left">ChatFly</h1>
                            <h2 className="w-full text-base/6 mt-2 text-left">
                                ChatFly is a web-based chat application and real-time chat application.
                            </h2>
                            <div className="flex flex-col items-start justify-start w-full mt-2 space-y-2 pl-6 text-[15px]/5 border-l border-neutral-600">
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">
                                    Secure user authentication for personalized access
                                </p>
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">
                                    File sharing to send and receive files during conversations
                                </p>
                                <p className="relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">Image, video, and text message sharing</p>
                                <p className=" relative before:absolute before:h-[.01cm] before:w-5 before:left-0 before:-ml-6 before:top-[50%] before:bg-neutral-600">Voice sharing for interactive communication</p>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-4 justify-start w-full">
                                <span className={`${techClass} motion-delay-100`}><FontAwesomeIcon icon={faCss3Alt} style={{ color: '#264de4' }} />CSS</span>
                                <span className={`${techClass} motion-delay-150`}><FontAwesomeIcon icon={faJs} style={{ color: '#f7df1e' }} />JavaScript</span>
                                <span className={`${techClass} motion-delay-200`}><FontAwesomeIcon icon={faReact} style={{ color: '#61dafb' }} />ReactJS</span>
                                <span className={`${techClass} motion-delay-350`}><FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />NodeJS</span>
                                <span className={`${techClass} motion-delay-450`}><DiMongodb className="text-[#47A248] text-sm" />MongoDB</span>
                                <span className={`${techClass} motion-delay-700`}><SiSocketdotio className="text-[#3B82F6] text-sm" />Socket</span>
                                <span className={`${techClass} motion-delay-750`}><img src={WebRTC} alt="WebRTC" className='h-4' />WebRTC</span>
                            </div>
                            <div className='flex gap-4 mt-5 justify-left w-full'>
                                <span className={`{techClass} inline-flex justify-center items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-sm border border-neutral-600 intersect:motion-preset-slide-up motion-delay-800 cursor-pointer hover:scale-[1.02] hover:bg-neutral-900 duration-300`}>GitHub<FontAwesomeIcon icon={faGithub} /></span>

                                <span className={`{techClass} inline-flex justify-center items-center gap-2 px-5 py-2 rounded-xl text-sm md:text-sm border border-neutral-600 intersect:motion-preset-slide-up motion-delay-850 cursor-pointer hover:scale-[1.02] hover:bg-neutral-900 duration-300`}>Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                            </div>
                        </div>
                        <div className="relative flex items-center justify-end h-full w-1/3 overflow-visible">
                            <div className="absolute -top-18 left-0 h-[30rem] w-[40rem] pointer-events-none">
                                <img
                                    src={ChatFly}
                                    alt="ChatFly"
                                    className="h-full w-full object-cover border border-neutral-600 rounded-xl transition-transform duration-300 hover:scale-105 z-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Projects;







