import React, { useState } from "react";
import photo from "../../assets/image/Tarikul.jpg";
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faCloudArrowDown,
  faSpinner,
  faCheckCircle,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

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
  const [status, setStatus] = useState('idle');

  const handleDownloadCV = async () => {
    try {
      setStatus('loading');

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cv`);
      const result = await response.json(); // Read as JSON first

      // Check if the backend returned success: false
      if (!result.success) {
        throw new Error(result.message || "File not found");
      }

      // 1. Convert Base64 string from JSON to a Blob
      const byteCharacters = atob(result.fileData);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      // 2. Create the download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", result.fileName || "Tarikul_Islam_CV.pdf");
      document.body.appendChild(link);

      // 3. Trigger download and cleanup
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url); // Free up memory

      setStatus('success');

      setTimeout(() => setStatus('idle'), 3000);

    } catch (error) {
      console.error("Download Error:", error);
      setStatus('error');

      setTimeout(() => setStatus('idle'), 3000);
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

      <div className="max-lg:mt-18 container relative z-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl">

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

            <SmartDownloadButton status={status} onClick={handleDownloadCV} />

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


const SmartDownloadButton = ({ status, onClick }) => {
  // status: 'idle' | 'loading' | 'success' | 'error'

  // status = 'error';
  // Colors extracted from the Nexion UI reference
  const primaryColor = "#00eeff"; // Cyan glow
  const secondaryColor = "#00c896"; // Teal accent

  const getStatusColor = () => {
    switch (status) {
      case 'error': return 'bg-red-500 shadow-[0_0_10px_#ef4444]';
      case 'success': return 'bg-green-500 shadow-[0_0_10px_#22c55e]';
      case 'loading': return 'bg-[#00c896] shadow-[0_0_10px_#00c896]';
      default: return 'bg-primary/60 shadow-[0_0_10px_rgba(0,238,255,0.5)]';
    }
  };

  return (
    <div className="inline-block">
      <motion.button
        disabled={status !== 'idle'}
        whileHover={status === 'idle' ? { scale: 1.02 } : {}}
        whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        onClick={onClick}
        className={`relative group h-16 w-auto min-w-[220px] px-8 flex items-center justify-center overflow-hidden rounded-xl transition-all duration-500
          ${status === 'loading' ? "cursor-wait" : ""}
          ${status === 'idle' ? "cursor-crosshair" : "bg-transparent"}
          ${status === 'error' ? "cursor-not-allowed" : ""}
        `}
      >
        {/* Dynamic corner accents that change color based on status */}
        <div className={`absolute top-1.5 left-1.5 w-3 h-[1px] transition-colors duration-500 ${getStatusColor()}`} />
        <div className={`absolute top-1.5 left-1.5 w-[1px] h-3 transition-colors duration-500 ${getStatusColor()}`} />
        <div className={`absolute bottom-1.5 right-1.5 w-3 h-[1px] transition-colors duration-500 ${getStatusColor()}`} />
        <div className={`absolute bottom-1.5 right-1.5 w-[1px] h-3 transition-colors duration-500 ${getStatusColor()}`} />

        <AnimatePresence mode="wait">
          {/* Loading State: System Initiation Style */}
          {status === 'loading' && (
            <motion.div key="loading" initial={{ opacity: 0, letterSpacing: "0.1em" }} animate={{ opacity: 1, letterSpacing: "0.3em" }} exit={{ opacity: 0 }} className="relative z-10 flex flex-col items-center justify-center text-primary">
              <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] mb-1">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin text-lg" style={{ color: secondaryColor }} />
                <span className="drop-shadow-[0_0_10px_rgba(0,238,255,0.8)]">Initiating...</span>
              </div>
              <span className="text-[8px] font-bold tracking-[0.5em] opacity-70 text-primary/80">
                ACCESSING DATABASE
              </span>
            </motion.div>
          )}

          {/* Success State: Authorized Access Style */}
          {status === 'success' && (
            <motion.div key="success" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-10 flex items-center gap-3 text-green-400 text-xs font-black uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
              <FontAwesomeIcon icon={faCheckCircle} className="text-lg" />
              <span>Authorized</span>
            </motion.div>
          )}

          {/* Error State: Security Breach Style */}
          {status === 'error' && (
            <motion.div key="error" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="relative z-10 flex items-center gap-3 text-red-400 text-xs font-black uppercase tracking-[0.3em] drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-lg" />
              <span>Breach Detected</span>
            </motion.div>
          )}

          {/* Idle State: Standard UI with Sparkles & Pulse */}
          {status === 'idle' && (
            <>
              {/* Background FX: Twinkling particles and center glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="absolute w-12 h-12 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                      x: Math.random() * 200 - 100,
                      y: Math.random() * 60 - 30
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 5
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white] z-0"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Foreground UI: Labels and Interactive Icon */}
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 flex items-center justify-between w-full gap-4"
              >
                <div className="flex flex-col items-start text-left">
                  <span className="text-[9px] text-primary/80 font-bold uppercase tracking-[0.4em] leading-tight group-hover:text-primary transition-colors">
                    System File
                  </span>
                  <span className="text-sm text-gray-950 dark:text-gray-200 font-black uppercase tracking-[0.25em] drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    Download CV
                  </span>
                </div>

                <div className="relative flex items-center justify-center">
                  <motion.div
                    className="relative z-20 flex items-center justify-center text-gray-950 dark:text-gray-200 group-hover:text-primary transition-all duration-500"
                    whileHover={{
                      scale: [1, 1.25, 1],
                      transition: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <div className="transform transition-transform duration-500 group-hover:translate-y-1.5">
                      <FontAwesomeIcon
                        icon={faCloudArrowDown}
                        className="text-xl drop-shadow-[0_0_12px_rgba(0,238,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,238,255,0.8)]"
                      />
                    </div>
                  </motion.div>
                  {/* Circular ping effect on hover */}
                  <div className="absolute w-8 h-8 rounded-full border border-primary/30 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_1.5s_infinite] transition-all duration-500" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Loading Overlay: Digital Scanning Line effect */}
        {status === 'loading' && (
          <motion.div
            animate={{ top: ["-100%", "200%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_20px_#00eeff] z-20"
            style={{ backgroundColor: secondaryColor }}
          />
        )}
      </motion.button>
    </div>
  );
};
export default Hero;