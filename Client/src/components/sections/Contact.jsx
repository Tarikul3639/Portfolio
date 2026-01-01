import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faIdBadge, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';

// Custom Components
import Loader from '../common/Loader.jsx';
import SpotlightCard from '../ui/SpotlightCard.jsx';

const TrueFocus = lazy(() => import('../ui/TrueFocus'));
const Orbital = lazy(() => import('../ui/Orbital'));

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ... logic same ...
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-32 bg-white dark:bg-[#020202] text-neutral-900 dark:text-white overflow-hidden">
      {loading && <Loader loading={true} variant="full" />}

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* --- HEADER --- */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="flex flex-col items-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            <FontAwesomeIcon icon={faIdBadge} className="animate-pulse" /> Connection Portal
          </div>
          <Suspense fallback={null}><TrueFocus sentence="CONTACT ME" manualMode blurAmount={5} borderColor="#00eeff" /></Suspense>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* --- LEFT SIDE: FORM CARD (Balanced) --- */}
          <motion.div
            whileHover={{ scale: 1.001, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex"
          >
            <SpotlightCard className="p-8 md:p-14 border border-neutral-200 dark:border-white/10 bg-white hover:bg-primary/5 dark:bg-[#080808]/60 backdrop-blur-3xl rounded-[3rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_rgba(0,238,255,0.1)] hover:dark:shadow-[0_30px_60px_rgba(0,238,255,0.2)]">

              {/* Unique Text Effect Area for Balance */}
              <div className="mb-10 space-y-2">
                <div className="flex items-center gap-2 text-primary/50 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <FontAwesomeIcon icon={faCircleDot} className="text-[6px] animate-ping" /> System Status: Ready
                </div>
                <h4 className="text-4xl font-black italic tracking-tighter leading-none">
                  SEND A <span className="text-primary text-glow">TRANSMISSION</span>
                </h4>
                <p className="text-neutral-600 dark:text-neutral-500 text-xs font-medium tracking-wide">Ready to turn your vision into digital reality.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group relative">
                    <input
                      type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your Identity"
                      className="w-full px-5 py-4 bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/10 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/5 focus:outline-none transition-all duration-300 text-sm text-neutral-900 dark:placeholder:text-neutral-400"
                    />
                  </div>
                  <div className="group relative">
                    <input
                      type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Return Address"
                      className="w-full px-5 py-4 bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/10 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/5 focus:outline-none transition-all duration-300 text-sm text-neutral-900 dark:placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                <div className="group relative">
                  <textarea
                    rows="6" value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Describe your objective..."
                    className="w-full px-5 py-4 bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/10 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/5 focus:outline-none transition-all duration-300 text-sm resize-none text-neutral-900 dark:placeholder:text-neutral-400"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,238,255,0.4)" }}
                  className="w-full py-5 rounded-2xl bg-primary text-black font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3"
                >
                  BROADCAST SIGNAL <FontAwesomeIcon icon={faPaperPlane} className="text-[10px]" />
                </motion.button>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* --- RIGHT SIDE: GROWING INFO CARD --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.001, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group"
          >
            <SpotlightCard className="p-8 md:p-14 border border-neutral-200 dark:border-white/10 bg-white hover:bg-primary/5 dark:bg-[#080808]/60 backdrop-blur-3xl rounded-[3rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_rgba(0,238,255,0.1)] hover:dark:shadow-[0_30px_60px_rgba(0,238,255,0.2)]">

              <div className="relative z-10 space-y-10">
                <div className="flex flex-col items-center justify-center min-h-[220px]">
                  <Suspense fallback={<Loader loading={true} variant="small" size={30} />}>
                    <Orbital />
                  </Suspense>
                </div>

                <div className="grid gap-4">
                  {/* WhatsApp */}
                  <a href="https://wa.me/8801909290959" target="_blank" rel="noopener noreferrer" className="group/item flex items-center gap-5 p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/20 dark:border-white/5 hover:border-green-500/40 hover:bg-green-500/10 dark:hover:bg-green-500/[0.05] transition-all duration-500">
                    <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
                      <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-neutral-600 dark:text-neutral-500 uppercase tracking-widest">WhatsApp Line</p>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white/90">+880 1909-290959</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:tarikulislam3639@gmail.com" className="group/item flex items-center gap-5 p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/20 dark:border-white/5 hover:border-primary/40 hover:bg-primary/10 dark:hover:bg-primary/[0.05] transition-all duration-500">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(0,238,255,0.3)] transition-all">
                      <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-neutral-600 dark:text-neutral-500 uppercase tracking-widest">Encrypted Email</p>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white/90">tarikulislam3639@gmail.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="group/item flex items-center gap-5 p-5 rounded-2xl bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/20 dark:border-white/5 hover:border-yellow-500/40 hover:bg-yellow-500/10 dark:hover:bg-yellow-500/[0.05] transition-all duration-500">
                    <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all">
                      <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-neutral-600 dark:text-neutral-500 uppercase tracking-widest">Station Location</p>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white/90">Mirpur-2, Dhaka, BD</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Watermark */}
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-neutral-200 dark:text-white/[0.015] italic select-none pointer-events-none uppercase transition-opacity group-hover:opacity-5">
                COMM
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>

      <style jsx>{`.text-glow { text-shadow: 0 0 20px rgba(0, 238, 255, 0.5); }`}</style>
    </section>
  );
};

export default Contact;
