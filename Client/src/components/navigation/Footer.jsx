import { Link } from "react-scroll";
import { motion, useMotionValue } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub, faLinkedin, faTwitter, faFacebook, faInstagram, faDribbble
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faSatellite, faMicrochip, faTerminal } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Mouse movement for the top glow effect
    const mouseX = useMotionValue(0);
    const handleMouseMove = ({ clientX, currentTarget }) => {
        const { left } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
    };

    const ItemClass = "block cursor-pointer text-neutral-600 dark:text-neutral-500 hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group/link";

    const socialLinks = [
        { icon: faGithub, url: "https://github.com/Tarikul3639" },
        { icon: faLinkedin, url: "https://www.linkedin.com/in/Tarikul3639" },
        { icon: faTwitter, url: "https://x.com/Tarikul3639" },
        { icon: faFacebook, url: "https://www.facebook.com/tarikulislam3639/" },
        { icon: faInstagram, url: "https://www.instagram.com/tarikul3639/" },
        { icon: faDribbble, url: "https://dribbble.com/tarikul3639" },
    ];

    return (
        <footer
            id="footer"
            onMouseMove={handleMouseMove}
            className="relative w-full bg-white dark:bg-[#020202] pt-32 pb-12 px-6 overflow-hidden border-t border-neutral-200 dark:border-white/5 group/footer"
        >
            {/* --- TOP DYNAMIC GLOW BEAM --- */}
            <motion.div
                className="absolute top-0 h-[2px] w-40 bg-primary blur-[4px] z-20 pointer-events-none"
                style={{ left: mouseX, x: "-50%" }}
            />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 dark:via-primary/20 to-transparent opacity-60 dark:opacity-50" />

            {/* --- AMBIENT BACKGROUND ELEMENTS --- */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    {/* BRANDING SECTION */}
                    <div className="lg:col-span-5 space-y-10">
                        <div className="relative inline-block">
                            <Link to="home" className="inline-block cursor-pointer group">
                                <motion.h1
                                    className="text-4xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white"
                                    whileHover={{ skewX: -10 }}
                                >
                                    TARIKUL<span className="text-primary drop-shadow-[0_0_8px_#00eeff]">.</span>
                                </motion.h1>
                            </Link>
                            <motion.div
                                className="absolute -bottom-2 left-0 h-[2px] bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1 }}
                            />
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm leading-relaxed font-medium italic border-l-2 border-primary/30 dark:border-primary/20 pl-4">
                            {"\"Engineering the void between imagination and digital reality. Operating on "}
                            <span className="text-primary/90 dark:text-primary/80 font-bold uppercase tracking-widest text-[10px]">
                                Nexion OS v4.0
                            </span>
                            {"\"."}
                        </p>

                        {/* SOCIALS WITH NEON HOVER */}
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 0 20px rgba(0, 238, 255, 0.3)",
                                        borderColor: "rgba(0, 238, 255, 0.5)"
                                    }}
                                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-100/60 dark:bg-white/[0.02] border border-neutral-200/40 dark:border-white/10 text-neutral-600 dark:text-neutral-500 hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/10"
                                >
                                    <FontAwesomeIcon icon={social.icon} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* LINKS GRID */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-8">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/70 dark:text-primary/60 flex items-center gap-2">
                                <FontAwesomeIcon icon={faSatellite} className="animate-pulse" /> Navigation
                            </h5>
                            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
                                <li><Link to="home" className={ItemClass}>Root_Dir</Link></li>
                                <li><Link to="about" className={ItemClass}>Protocol_Intel</Link></li>
                                <li><Link to="projects" className={ItemClass}>Deploy_Logs</Link></li>
                                <li><Link to="contact" className={ItemClass}>Comm_Link</Link></li>
                            </ul>
                        </div>

                        <div className="space-y-8">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/70 dark:text-primary/60 flex items-center gap-2">
                                <FontAwesomeIcon icon={faMicrochip} /> Infrastructure
                            </h5>
                            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-widest">
                                <li><a href="#" className={ItemClass}>Open_Src</a></li>
                                <li><a href="#" className={ItemClass}>Security</a></li>
                                <li><a href="#" className={ItemClass}>Terminal_FAQ</a></li>
                            </ul>
                        </div>

                        {/* INTERACTIVE STATUS BOX */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="col-span-2 md:col-span-1 p-[1px] rounded-[2rem] bg-gradient-to-br from-neutral-200/30 to-neutral-100/50 dark:from-white/10 dark:to-transparent group/status hover:from-primary/30 hover:to-primary/20 dark:hover:from-primary/40"
                        >
                            <div className="h-full w-full bg-white/70 dark:bg-[#050505] rounded-[2rem] p-6 space-y-4 shadow-lg dark:shadow-xl">
                                <p className="text-[9px] text-primary uppercase font-black tracking-widest">System Status</p>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-bold text-neutral-900 dark:text-white/80 italic flex items-center gap-2">
                                        <FontAwesomeIcon icon={faTerminal} className="text-[8px] text-primary" /> Mirpur, Dhaka
                                    </p>
                                    <p className="text-[10px] text-neutral-600 dark:text-neutral-600 font-mono">23.8103° N, 90.4125° E</p>
                                </div>
                                <div className="pt-2">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/5 border border-primary/30 dark:border-primary/20 text-[9px] text-primary font-black uppercase tracking-tighter shadow-sm">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                                        Ready_to_Build
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* --- BOTTOM SECTION --- */}
                <div className="pt-12 border-t border-neutral-200/50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col gap-1 text-center md:text-left">
                        <p className="text-[10px] font-black text-neutral-600 dark:text-neutral-500 uppercase tracking-[0.4em]">
                            © {currentYear} TARIKUL ISLAM <span className="text-primary/40 dark:text-primary/30">//</span> V2.0.0
                        </p>
                        <p className="text-[8px] text-neutral-500 dark:text-neutral-700 font-mono tracking-widest">
                            LATENCY: 14MS | ENCRYPTION: AES-256
                        </p>
                    </div>

                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,238,255,0.15)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-xl border border-neutral-200/40 dark:border-white/5 bg-neutral-100/70 dark:bg-white/[0.01] hover:bg-primary/5 dark:hover:bg-primary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group/btn shadow-sm"
                    >
                        <span className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-700 dark:text-neutral-500 group-hover/btn:text-primary">
                            Ascend to Zenith <FontAwesomeIcon icon={faArrowUp} className="group-hover/btn:-translate-y-1 transition-transform" />
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* WATERMARK WITH HOVER GLOW */}
            <motion.div
                initial={{ opacity: 0.03 }}
                whileHover={{ opacity: 0.08, letterSpacing: "0.2em" }}
                className="absolute -bottom-16 -right-10 text-[14rem] font-black text-neutral-200 dark:text-white select-none pointer-events-none uppercase italic tracking-tighter transition-all duration-1000"
            >
                TARIKUL
            </motion.div>
        </footer>
    );
};

export default Footer;
