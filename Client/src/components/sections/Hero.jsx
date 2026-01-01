import React, { useState } from "react";
import photo from "../../assets/image/Tarikul.jpg";
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

// Asset Imports
import FaceBook from "../../assets/image/FaceBook.webp";
import Tweeter from "../../assets/image/Tweeter.webp";
import Linkedin from "../../assets/image/Linkedin.webp";
import GitHub from "../../assets/image/GitHub.webp";

// UI Components
import LinkPreview from "../ui/link-preview.jsx";
import SplitText from "../ui/SplitText.jsx";

const WORDS = ["Tarikul Islam", 1000, "Web Developer", 1000, "Full Stack Engineer", 1000];
const DESCRIPTION = "Passionate coder aspiring to architect software solutions that seamlessly blend functionality and solve problems. Let's build the future together!";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cv`);
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Tarikul_Islam_CV.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success('Downloaded successfully!');
    } catch (error) {
      toast.error('Download failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const socialIcons = [
    { icon: faFacebook, link: "https://facebook.com/...", img: FaceBook },
    { icon: faTwitter, link: "https://x.com/...", img: Tweeter },
    { icon: faGithub, link: "https://github.com/...", img: GitHub },
    { icon: faLinkedin, link: "https://linkedin.com/...", img: Linkedin },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background-light dark:bg-[#050505] px-6 py-20">

      {/* Modern Background Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl">

        {/* Content Side */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium animate-bounce">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>

          <h2 className="text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-300">
            {`Hi, I'm `}<span className="text-primary font-bold">
              <TypeAnimation sequence={WORDS} repeat={Infinity} />
            </span>
          </h2>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            Building Digital <br />
            <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Experiences.</span>
          </h1>

          <div className="max-w-xl mx-auto lg:mx-0 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            <SplitText text={DESCRIPTION} delay={15} />
          </div>

          {/* Actions & Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-10 pt-10 justify-center lg:justify-start">

            {/* --- 1. MINIMALIST NEON BUTTON --- */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadCV}
              className="relative group h-14 px-10 flex items-center gap-3 bg-transparent overflow-hidden"
            >
              {/* Button Border */}
              <div className="absolute inset-0 border border-primary/30 dark:border-primary/50 rounded-full group-hover:border-primary transition-colors duration-500" />

              {/* Inner Glow */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 dark:group-hover:bg-primary/10 transition-colors duration-500 rounded-full" />

              {/* Text & Icon */}
              <span className="relative z-10 text-primary font-bold tracking-[0.2em] uppercase text-xs">
                {loading ? "System Syncing..." : "Download CV"}
              </span>
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="relative z-10 text-primary text-sm group-hover:translate-y-[-2px] transition-transform duration-300"
              />

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </motion.button>

            {/* --- 2. FLOATING SOCIAL DOCK --- */}
            <div className="flex items-center gap-6 relative">
              {/* Divider Line */}
              <div className="hidden sm:block w-[1px] h-8 bg-neutral-200 dark:bg-neutral-800" />

              <div className="flex items-center gap-5">
                {socialIcons.map((soc, i) => (
                  <LinkPreview key={i} imageSrc={soc.img} isStatic={true}>
                    <motion.button
                      whileHover={{ y: -4 }}
                      onClick={() => window.open(soc.link, "_blank")}
                      className="relative group p-2"
                    >
                      {/* Minimalist Icon */}
                      <FontAwesomeIcon
                        icon={soc.icon}
                        className="text-xl text-neutral-500 dark:text-neutral-400 group-hover:text-primary transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,238,255,0)] group-hover:drop-shadow-[0_0_8px_rgba(0,238,255,0.5)]"
                      />

                      {/* Underline Animation */}
                      <motion.div
                        className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500"
                      />
                    </motion.button>
                  </LinkPreview>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Side - Modern Image Box */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Animated Ring Backdrops */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-bl from-primary to-cyan-400 rounded-[2rem] -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-500" />

            {/* Main Image Container */}
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border-2 border-white/20 dark:border-white/10 shadow-2xl dark:shadow-neutral-900/50">
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover scale-150 object-[50%_20%] transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

{/* Floating Badges - Minimalist & Compact */}
<motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1, duration: 0.5 }}
  className="absolute -bottom-4 -right-4 z-20 animate-float"
>
  <div className="relative group">
    {/* Subtle Glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
    
    {/* Compact Glass Container */}
    <div className="relative flex items-center gap-2.5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md p-2.5 px-3.5 rounded-xl border border-neutral-200/50 dark:border-white/10 shadow-lg">
      
      {/* Small Gradient Circle */}
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-sm">
        <span className="text-white font-bold text-sm tracking-tighter">2+</span>
      </div>

      {/* Tiny Refined Text */}
      <div className="flex flex-col justify-center">
        <span className="text-[9px] font-black text-primary uppercase tracking-[0.15em] leading-none mb-0.5">
          Experience
        </span>
        <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wide leading-tight">
          Years of<br />Mastery
        </span>
      </div>
      
    </div>
  </div>
</motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;