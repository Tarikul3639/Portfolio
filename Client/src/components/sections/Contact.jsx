'use client';

import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faIdBadge, faCircleDot, faCheckCircle, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';

import SpotlightCard from '../ui/SpotlightCard.jsx';

const TrueFocus = lazy(() => import('../ui/TrueFocus'));
const Orbital = lazy(() => import('../ui/Orbital'));
import Loader from '../ui/Loader.jsx';
import Watermark from '../ui/Watermark.jsx';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Destructure form data for easier access
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
        return;
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
        return;
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-white dark:bg-[#020202] text-neutral-900 dark:text-white overflow-hidden">

      <div className="container relative z-10 mx-auto px-2 lg:px-6 max-w-7xl">

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
            className="flex max-lg:flex-col group"
          >
            <SpotlightCard className="p-5 pb-8 md:pb-0 md:p-14 border border-neutral-200 dark:border-white/10 bg-white hover:bg-primary/5 dark:bg-[#080808]/60 backdrop-blur-3xl rounded-2xl lg:rounded-[2rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_rgba(0,238,255,0.1)] hover:dark:shadow-[0_30px_60px_rgba(0,238,255,0.2)]">

              <div className="mb-10 space-y-2">
                <div className="flex items-center gap-2 text-primary/50 text-[10px] font-bold tracking-[0.2em] uppercase">
                  <FontAwesomeIcon icon={faCircleDot} className={`text-[6px] ${status === 'loading' ? 'animate-pulse text-yellow-500' : 'animate-ping'}`} />
                  System: {status === 'loading' ? 'Transmitting...' : 'Stable'}
                </div>
                <h4 className="text-2xl lg:text-4xl font-black italic tracking-tighter leading-none">
                  SEND A <span className="text-primary drop-shadow-[0_0_20px_rgba(0,238,255,0.5)]">TRANSMISSION</span>
                </h4>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="group relative">
                    <input
                      name="name"
                      type="text" value={formData.name} onChange={handleChange} required placeholder="Your Identity"
                      className="w-full px-5 py-4 bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/10 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/5 focus:outline-none transition-all duration-300 text-sm text-neutral-900 dark:placeholder:text-neutral-400 dark:text-neutral-200"
                    />
                  </div>
                  <div className="group relative">
                    <input
                      name="email"
                      type="email" value={formData.email} onChange={handleChange} required placeholder="Return Address"
                      className="w-full px-5 py-4 bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/10 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/5 focus:outline-none transition-all duration-300 text-sm text-neutral-900 dark:placeholder:text-neutral-400 dark:text-neutral-200"
                    />
                  </div>
                </div>

                <div className="group relative">
                  <textarea
                    rows="6" name="message" value={formData.message} onChange={handleChange} required placeholder="Describe your objective..."
                    className="w-full px-5 py-4 bg-neutral-100/80 dark:bg-white/[0.02] border border-neutral-200/30 dark:border-white/10 rounded-2xl focus:border-primary focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/5 focus:outline-none transition-all duration-300 text-sm resize-none text-neutral-900 dark:placeholder:text-neutral-400 dark:text-neutral-200"
                  />
                </div>

                {/* --- SMART ACTION BUTTON --- */}
                <motion.button
                  disabled={status === 'loading' || status !== 'idle'}
                  whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                  className={`relative w-full py-4 lg:py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 overflow-hidden ${status === 'loading' ? 'bg-neutral-800 text-yellow-500 cursor-wait' :
                    status === 'success' ? 'bg-green-600 text-white' :
                      status === 'error' ? 'bg-red-600 text-white' :
                        'bg-primary text-black hover:shadow-[0_0_30px_rgba(0,238,255,0.4)]'
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {status === 'idle' && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                        BROADCAST SIGNAL <FontAwesomeIcon icon={faPaperPlane} />
                      </motion.div>
                    )}
                    {status === 'loading' && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> ENCRYPTING...
                      </motion.div>
                    )}
                    {status === 'success' && (
                      <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} /> RECEIVED
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div key="error" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faExclamationTriangle} /> FAILED
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Button Background Scanline Effect during loading */}
                  {status === 'loading' && (
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    />
                  )}
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
            <SpotlightCard className="p-5 pb-8 md:pb-0 md:p-14 border border-neutral-200 dark:border-white/10 bg-white hover:bg-primary/5 dark:bg-[#080808]/60 backdrop-blur-3xl lg:rounded-[2rem] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-500 hover:border-primary/50 hover:shadow-[0_30px_60px_rgba(0,238,255,0.1)] hover:dark:shadow-[0_30px_60px_rgba(0,238,255,0.2)]">

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

              {/* WATERMARK WITH HOVER GLOW */}
              <Watermark text="COM" />
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
