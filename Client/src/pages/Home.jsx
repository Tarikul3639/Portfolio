import photo from "../assets/image/Profile.png";
import Button from "../components/ui/Button";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const words = ["Tarikul Islam", 1000, "Web Developer", 1000, "Programmer", 1000];
    const description = [`Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems. Let's build the future together!`];

    const textGradient = "bg-gradient-to-l from-blue-500 via-teal-500 to-green-500 text-transparent bg-clip-text";
    const textGradient2 = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";
    const textGradient3 = "bg-gradient-to-b from-rose-50 via-rose-200 to-neutral-500 bg-clip-text text-transparent";
    const ButtonBgGradient = "bg-[#4ce0af]";
    
    const SocialMediaIcon = "m-2 flex cursor-pointer items-center justify-center rounded-full border-[3px] border-[#00c896] p-2 text-lg text-[#00c896] shadow-[0px_0px_5px_1px_rgba(0,_255,_255,_0.7)] transition-all duration-300 hover:scale-110 motion-preset-bounce motion-preset-confetti -motion-translate-y-in-150";

    const BorderAnimation = `relative overflow-hidden shadow-[0px_0px_20px_1px_rgba(0,_255,_255,_0.2)] before:content-[''] before:absolute before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[100%] before:h-[100vw] before:rounded-none before:bg-[conic-gradient(transparent,transparent,transparent,#00c896)] before:animate-[spin_3s_linear_infinite] before:z-0`;
  

    const gradientStartColor = '#3B82F6';
    const gradientMiddleColor = '#14B8A6';
    const gradientEndColor = '#10B981';

    return (
        <div id="home" className="mt-3 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 md:h-screen">
            <div className="flex w-full flex-col-reverse items-center justify-center md:h-full md:flex-row">
                <div className="flex w-full items-center justify-center md:h-full md:w-[50vw]">
                    <div className="mt-10 flex w-full flex-col justify-center py-10 pr-4 max-xs:items-center sm:pl-10 md:h-full md:items-start md:pl-0 lg:pl-0">
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
                        <h1 className={`max-xs:text-[2.5rem] text-[3.5rem] text-start font-[700] ${textGradient} motion-duration-2000 motion-preset-slide-left`}>
                            Web Developer.
                        </h1>
                        <div className={`my-3 inline-block w-[97%] text-center text-md text-lg ${textGradient3} jetbrains-mono xs:text-start xs:font-normal motion-duration-2000 motion-preset-slide-right`}>
                            {description}
                        </div>

                        <div className="flex w-full py-4 max-md:h-[10rem] justify-start flex-col-reverse max-md:justify-between md:flex-row">
                            <div className={`group relative md:m-2 min-w-[150px] rounded-lg p-[2px] ${textGradient} ${BorderAnimation} xl:w-1/3 motion-duration-2000 motion-preset-slide-up border-snack`}>
                                <Button
                                    text="CV Download"
                                    onClick={() => { }}
                                    variant="primary"
                                    icon={<FaCloudDownloadAlt className="z-10 text-[#00c896] transition-colors duration-2000 group-hover:text-black" />}
                                    className="peer relative z-10 m-0 w-full rounded-lg bg-[#141C23] px-4 py-3 text-md font-extrabold text-[#00c896] jetbrains-mono transition-colors duration-2000 hover:bg-transparent hover:text-black"
                                />
                                <span className={`absolute inset-0 z-0 w-0  rounded-sm bg-[#00c896] ${ButtonBgGradient} transition-all duration-[1000ms] peer-hover:w-full`} />
                            </div>
                            <div className="flex items-center justify-evenly md:justify-center max-md:mx-10 md:ml-2">
                                <FontAwesomeIcon icon={faFacebook} className={`${SocialMediaIcon} motion-duration-2200`} />
                                <FontAwesomeIcon icon={faTwitter} className={`${SocialMediaIcon} motion-duration-4000`} />
                                <FontAwesomeIcon icon={faGithub} className={`${SocialMediaIcon} motion-duration-3400`} />
                                <FontAwesomeIcon icon={faLinkedin} className={`${SocialMediaIcon} motion-duration-2800`} />
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
