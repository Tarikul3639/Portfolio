import photo from "../assets/image/Profile.png";
import Button from "../components/ui/Button";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const words = ["Tarikul Islam", 1000, "Web Developer", 1000, "Programmer", 1000];
    const description = [` I am a passionate web developer with a focus on creating dynamic and responsive web applications. I love to explore new technologies and continuously improve my skills.
    I am proficient in HTML, CSS, JavaScript, and various frameworks like React and Node.js. My goal is to build user-friendly and efficient web solutions that meet the needs of clients and users alike.`];
    
    const textGradient = "bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text";
    const textGradient2 = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";
    const textGradient3 = "bg-gradient-to-b from-rose-50 via-rose-200 to-neutral-500 bg-clip-text text-transparent";
    const bgGradient = "bg-gradient-to-r from-emerald-300 via-teal-200 to-teal-500";
    const socialIcon = "m-2 flex cursor-pointer items-center justify-center rounded-full border-[3px] border-[#00c896] p-2 text-lg text-[#00c896] shadow-[0px_0px_5px_1px_rgba(0,_255,_255,_0.7)] transition-all duration-300 hover:scale-110 motion-preset-confetti motion-preset-bounce -motion-translate-y-in-150";

    const gradientStartColor = '#3B82F6';
    const gradientMiddleColor = '#14B8A6';
    const gradientEndColor = '#10B981';

    return (
        <div id="home" className="flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 mt-3 md:h-screen">
            <div className="flex w-full flex-col-reverse items-center justify-center md:h-full md:flex-row">
                <div className="flex w-full items-center justify-center md:h-full md:w-[50vw]">
                    <div className="mt-10 flex w-full flex-col justify-center py-10 pr-4 max-xs:items-center md:h-full md:items-start sm:pl-10 md:pl-0 lg:pl-0">
                        <p className="text-start text-xl font-[Poppins,sans-serif] text-white xs:text-[1.5rem]">
                            Hi!, I Am <span className={`relative ${textGradient2}`}>
                                <TypeAnimation
                                    sequence={words}
                                    wrapper="span"
                                    speed={0}
                                    repeat={Infinity}
                                />
                            </span>
                        </p>
                        <h1 className={`text-[3.5rem] text-start font-[700] ${textGradient} max-xs:text-[2.5rem] motion-duration-2000 motion-preset-slide-left`}>
                            Web Developer.
                        </h1>
                        <div className={`my-3 inline-block w-[97%] text-center text-md ${textGradient3} max-xs:font-[500] xs:text-start xs:font-semibold lg:text-lg motion-duration-2000 motion-preset-slide-right`}>
                            <ShowMoreText
                                lines={3}
                                more={<span className="cursor-pointer font-[400] text-gray-400">See more</span>}
                                less={<span className="cursor-pointer font-[400] text-gray-400">Less more</span>}
                                className="content-css"
                                anchorClass="show-more-less-clickable"
                                expanded={false}
                            >
                                {description}
                            </ShowMoreText>
                        </div>

                        <div className="max-xs:flex-col-reverse max-xs:h-50 max-xs:justify-center flex w-full items-center py-4 text-black md:justify-start">
                            <div className={`group relative m-0 min-w-[150px] rounded-lg border-[3px] border-teal-400 ${textGradient} px-6 md:px-2 lg:px-6 xl:w-1/3 max-xs:my-4 motion-duration-2000 motion-preset-slide-up`}>
                                <Button
                                    text="CV Download"
                                    onClick={() => { }}
                                    variant="primary"
                                    icon={<FaCloudDownloadAlt className="z-10 text-[#00c896] transition-colors duration-2000 group-hover:text-[#1d1d35]" />}
                                    className="peer relative z-10 m-0 w-full rounded-none bg-transparent px-0 py-3 text-md font-[700] text-[#00c896] transition-colors duration-2000 hover:bg-transparent hover:text-[#1d1d35]"
                                />
                                <span className={`absolute inset-0 z-0 w-0 rounded-sm bg-[#00c896] ${bgGradient} transition-all duration-[1000ms] peer-hover:w-full`} />
                            </div>
                            <div className="flex items-center justify-center xs:ml-2">
                                <FontAwesomeIcon icon={faFacebook} className={`${socialIcon} motion-duration-2200 hover:motion-preset-shake`} />
                                <FontAwesomeIcon icon={faTwitter} className={`${socialIcon} motion-duration-4000 hover:motion-preset-shake`} />
                                <FontAwesomeIcon icon={faGithub} className={`${socialIcon} motion-duration-3400 hover:motion-preset-shake`} />
                                <FontAwesomeIcon icon={faLinkedin} className={`${socialIcon} motion-duration-2800 hover:motion-preset-shake`} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center md:h-full">
                    <div className="relative mt-14 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full md:mt-0 lg:h-110 lg:w-110">
                        <img src={photo} alt="Tarikul Islam" className="h-full w-full object-cover" />
                        <svg width="100%" height="100%" viewBox="0 0 506 506" className="absolute">
                            <defs>
                                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor={gradientStartColor} />
                                    <stop offset="50%" stopColor={gradientMiddleColor} />
                                    <stop offset="100%" stopColor={gradientEndColor} />
                                </linearGradient>
                            </defs>
                            <circle
                                className="animate-strokeAnimation fill-none stroke-[5]"
                                cx="253" cy="253" r="250"
                                stroke="url(#gradientStroke)"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes strokeAnimation {
                    25% { stroke-dasharray: 15 120 25 25; }
                    50% { stroke-dasharray: 16 25 92 72; }
                    75% { stroke-dasharray: 4 250 22 22; }
                    100% { transform: rotate(120deg, 360deg); }
                }
                .animate-strokeAnimation {
                    animation: strokeAnimation 20s infinite reverse;
                    stroke-dasharray: 24 10 0 0;
                }
            `}</style>
        </div>
    );
};

export default Home;
