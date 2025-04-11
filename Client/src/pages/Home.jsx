import photo from "../assets/image/Profile.png";
import Button from "../components/ui/Button";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import ShowMoreText from "react-show-more-text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Spotlight } from "../components/ui/Spotlight.jsx";
import { cn } from "../components/lib/utils.jsx";

const Home = () => {

  // Animation words and description for type animation
  const words = ["Tarikul Islam", 1000, "Web Developer", 1000, "Programmer", 1000];
  const description = [`Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems. Let's build the future together!`];

  // Gradient styles for text
  const textGradient = "bg-gradient-to-r from-secondary via-primary to-primary-light text-transparent bg-clip-text";
  const textGradient2 = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text"; 
  // const textGradient3 = "bg-gradient-to-b from-rose-50 via-rose-200 to-neutral-500 bg-clip-text text-transparent";
  const ButtonBgGradient = "bg-[#4ce0af]";

  // Styles for social media icons
  const SocialMediaIcon = "m-2 flex cursor-pointer items-center justify-center rounded-full border-[3px] border-primary p-2 text-lg text-primary shadow-[0px_0px_5px_1px_var(--color-primary)] transition-all duration-300 hover:scale-110 intersect:motion-preset-bounce motion-preset-confetti intersect:-motion-translate-y-in-150";

  // Border animation for button
  const BorderAnimation = `relative overflow-hidden shadow-[0px_0px_20px_1px_rgba(0,_255,_255,_0.2)] before:group before:content-[''] before:absolute before:inset-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[100%] before:h-[100vw] before:rounded-none before:bg-[conic-gradient(transparent,transparent,transparent,#00c896)] before:animate-[spin_3s_linear_infinite] before:z-0`;

  return (
    <section id="home" className="relative pt-20 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 lg:h-screen  bg-background">
      <Spotlight
        className=" absolute top-0 left-0 right-0"
        fill="white"
      />
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Main content area */}
      <div className="flex max-w-7xl flex-col-reverse items-center justify-center lg:h-full lg:flex-row">
        {/* Left side section (text and button) */}
        <div className="flex w-full items-center justify-center lg:h-full lg:w-1/2">
          <div className="mt-10 flex w-full flex-col justify-center py-10 pr-4 max-xs:items-center sm:pl-10 lg:h-full lg:items-start lg:pl-0 lg:pl-0">
            <p className="hidden text-xs border border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center gap-2 fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shine overflow-hidden z-50 w-max">
              Available for new projects
            </p>

            {/* Intro text with type animation */}
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

            {/* Role text */}
            <h1 className={`max-xs:text-[2.5rem] text-[3.5rem] text-start font-[700] ${textGradient} intersect:motion-translate-x-in-[10%] intersect:motion-duration-1000`}>
              Web Developer.
            </h1>

            {/* Description text */}
            <div className={`my-3 inline-block w-[97%] text-center break-word text-lg {textGradient3} source-sans-3 text-base/7 tracking-wider xs:text-start xs:font-normal intersect:motion-translate-x-in-[-10%] motion-duration-1000 poppins-regular text-primary-text-light`}>
              {description}
            </div>
            {/* Buttons and social media icons */}
            <div className="flex items-center justify-center w-full py-4 max-md:h-[10rem] justify-start flex-col-reverse max-md:justify-between md:flex-row">
              {/* CV Download Button with animation */}
              <Button
                text="CV Download"
                onClick={() => { }}
                variant="moving"
                icon={<FaCloudDownloadAlt className="z-10 text-primary-foreground transition-colors duration-1000 group-hover:text-black group-active:text-black group-focus:text-black" />}
                className="peer z-10 max-md:w-full"
              />

              {/* Social Media Icons */}
              <div className="flex max-md:w-full items-center justify-evenly md:justify-center max-md:mx-10 md:ml-2">
                <FontAwesomeIcon icon={faFacebook} className={`${SocialMediaIcon} intersect:motion-duration-2200`} />
                <FontAwesomeIcon icon={faTwitter} className={`${SocialMediaIcon} intersect:motion-duration-4000`} />
                <FontAwesomeIcon icon={faGithub} className={`${SocialMediaIcon} intersect:motion-duration-3400`} />
                <FontAwesomeIcon icon={faLinkedin} className={`${SocialMediaIcon} intersect:motion-duration-2800`} />
              </div>
            </div>
          </div>
        </div>

        {/* Right side section (profile image) */}
        <div className="flex items-center justify-center lg:h-full">
          <div className="relative mt-14 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full lg:mt-0 lg:h-110 lg:w-110 z-99">
            <img src={photo} alt="Tarikul Islam" className="h-full w-full object-cover intersect:motion-opacity-in-0 motion-duration-[10s]" />
            <svg width="100%" height="100%" viewBox="0 0 506 506" className="absolute">
              <defs>
                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="50%" stopColor="var(--color-primary-light)" />
                  <stop offset="100%" stopColor="var(--color-primary)" />
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

      {/* Circle animation keyframe */}
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
    </section>
  );
};

export default Home;
