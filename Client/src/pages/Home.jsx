import React, { useState } from "react";
import photo from "../assets/image/Profile.webp";
import Button from "../components/ui/Button";
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { cn } from "../components/lib/utils.jsx";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FaceBook from "../assets/image/FaceBook.webp";
import Tweeter from "../assets/image/Tweeter.webp";
import Linkedin from "../assets/image/Linkedin.webp";
import GitHub from "../assets/image/GitHub.webp";

// Import components directly
import Spotlight from "../components/ui/Spotlight.jsx";
import LinkPreview from "../components/ui/link-preview.jsx";
import SplitText from "../components/ui/SplitText.jsx";

const WORDS = ["Tarikul Islam", 1000, "Web Developer", 1000, "Programmer", 1000];
const DESCRIPTION = [`Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems. Let's build the future together!`];

const Home = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    console.log("Download button clicked: ", import.meta.env.VITE_API_URL);
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cv`, {
        method: "GET",
      });

      const contentType = response.headers.get("Content-Type");

      if (!response.ok) {
        setLoading(false);

        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          toast.error(result.message || 'Server error.');
        } else {
          toast.error('Server error. File may be missing.');
        }

        return;
      }

      // If success
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "TarikulIslam_CV_Resume_2025.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setLoading(false);
      toast.success('Downloaded successfully!');

    } catch (error) {
      console.error("Error downloading CV:", error);
      setLoading(false);
      toast.warning('Network error');
    }
  };

  // Styles for social media icons
  const SocialMediaIcon = "m-2 flex cursor-pointer items-center justify-center rounded-full border-[3px] border-primary-light dark:border-primary p-2 text-lg text-primary-light dark:text-primary shadow-[0px_0px_5px_1px_var(--color-primary-light)] dark:shadow-[0px_0px_5px_1px_var(--color-primary)] transition-all duration-300 hover:scale-110 intersect:motion-preset-bounce motion-preset-confetti intersect:-motion-translate-y-in-150";

  return (
    <section id="home" className="relative pt-20 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 lg:h-screen bg-background-light dark:bg-background-dark">
      {/* Use the component directly without Suspense */}
      <Spotlight
        className="absolute top-0 left-0 right-0 z-1"
        fill="white"
      />

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,transparent_0%)]",
          "[-webkit-mask-image:linear-gradient(to_bottom,white_10%,transparent_60%)]",
          "[mask-size:cover]",
          "[mask-repeat:no-repeat]",
        )}
      />

      {/* Main content area */}
      <div className="flex max-w-7xl flex-col-reverse items-center justify-center lg:h-full lg:flex-row">
        {/* Left side section (text and button) */}
        <div className="flex w-full items-center justify-center lg:h-full lg:w-1/2">
          <div className="mt-10 flex w-full flex-col justify-center py-10 pr-4 max-xs:items-center sm:pl-10 lg:h-full lg:items-start lg:pl-0">
            <p className="hidden text-xs border border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center gap-2 fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shine overflow-hidden z-50 w-max">
              Available for new projects
            </p>

            {/* Intro text with type animation */}
            <p className="text-start text-xl font-[Poppins,sans-serif] text-primary-light dark:text-primary-dark xs:text-[1.5rem]">
              Hi!, I Am <span className={`relative bg-gradient-to-r from-primary-light dark:from-primary dark:via-teal-500 to-primary-light/50 dark:to-secondary text-transparent bg-clip-text`}>
                <TypeAnimation
                  sequence={WORDS}
                  wrapper="span"
                  speed={0}
                  repeat={Infinity}
                />
              </span>
            </p>

            {/* Role text */}
            <h1 className={`max-xs:text-[2.5rem] text-[3.5rem] text-start font-[700] bg-primary-light text-transparent bg-clip-text dark:bg-gradient-to-r dark:from-secondary dark:via-primary dark:to-primary-light intersect:motion-translate-x-in-[10%] intersect:motion-duration-1000`}>
              Web Developer.
            </h1>

            {/* Description text - use directly without Suspense */}
            <div className={`text-primary-light/80 dark:text-primary-dark/70 font-[500] my-3 inline-block w-[97%] text-base source-sans-3 xs:text-start intersect:motion-translate-x-in-[-10%] motion-duration-1000 poppins-regular`}>
              <SplitText
                text={`${DESCRIPTION}`}
                delay={20}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,0,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

            {/* Buttons and social media icons */}
            <div className="flex items-start md:items-center w-full py-4 max-md:h-[10rem] justify-start flex-col-reverse max-md:justify-between md:flex-row">
              {/* CV Download Button with animation */}
              <Button
                text="CV Download"
                onClick={() => handleClick()}
                variant="primary"
                icon={<FontAwesomeIcon icon={faCloudArrowDown} className="z-10 text-primary-dark group-hover:text-primary group-active:text-black group-focus:text-black dark:text-primary-light" />}
                className="peer max-lg:w-1/2 z-10 bg-primary-light hover:bg-primary-light/80 dark:bg-primary dark:hover:bg-primary/80 /text-primary-dark hover:text-primary-dark dark:text-primary-light dark:hover:text-primary-light border-none"
              />

              {/* Social Media Icons - use directly without Suspense */}
              <div className="flex max-md:w-full items-center md:justify-center md:ml-2">
                <LinkPreview
                  imageSrc={FaceBook}
                  isStatic={true}
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    onClick={() => window.open("https://www.facebook.com/tarikulislam3639/", "_blank")}
                    className={`${SocialMediaIcon} intersect:motion-duration-2200`}
                  />
                </LinkPreview>

                <LinkPreview
                  imageSrc={Tweeter}
                  isStatic={true}
                >
                  <FontAwesomeIcon
                    onClick={() => window.open("https://x.com/Tarikul3639", "_blank")}
                    icon={faTwitter}
                    className={`${SocialMediaIcon} intersect:motion-duration-4000`}
                  />
                </LinkPreview>

                <LinkPreview
                  imageSrc={GitHub}
                  isStatic={true}
                >
                  <FontAwesomeIcon
                    onClick={() => window.open("https://github.com/Tarikul3639", "_blank")}
                    icon={faGithub}
                    className={`${SocialMediaIcon} intersect:motion-duration-3400`}
                  />
                </LinkPreview>

                <LinkPreview
                  imageSrc={Linkedin}
                  isStatic={true}
                >
                  <FontAwesomeIcon
                    onClick={() => window.open("https://www.linkedin.com/in/Tarikul3639", "_blank")}
                    icon={faLinkedin}
                    className={`${SocialMediaIcon} intersect:motion-duration-2800`}
                  />
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>

        {/* Right side section (profile image) */}
        <div className="flex items-center justify-center lg:h-full lg:w-1/2">
          <div className="relative mt-14 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full lg:mt-0 lg:h-110 lg:w-110">
            <img src={photo} loading="lazy" alt="Tarikul Islam" className="h-full w-full p-1.5 object-cover" />
            <svg width="100%" height="100%" viewBox="0 0 506 506" className="absolute">
              <defs>
                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary)" />
                  <stop offset="50%" stopColor="var(--color-primary)" />
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
    </section>
  );
};

export default Home;
