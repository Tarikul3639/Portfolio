import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Components
import Button from '../common/Button.jsx';
import Loader from '../common/Loader.jsx';

// Lazy load components to improve performance
const TrueFocus = lazy(() => import('../ui/TrueFocus'));
const Orbital = lazy(() => import('../ui/Orbital'));

const Contact = () => {
  // State variables
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { name, email, message };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('❌ Server error:', result);
        toast.error(result.message || 'Failed to send message.');
      } else {
        console.log('✅ Success:', result);
        toast.success(result.message || 'Message sent successfully!');
        // Clear input fields
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (err) {
      console.error('❌ Network error:', err);
      toast.warning('Network error');
    } finally {
      setLoading(false);
    }
  };

  // Reusable animation settings
  const fadeInUp = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };
  const fadeInDown = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };
  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: false, amount: 0.2 },
    transition: { duration: 0.8 },
  };

  return (
    <section
      id="contact"
      className="source-sans-3 pt-20 flex min-w-[345px] w-full flex-col items-center justify-center p-4 bg-background-light dark:bg-background-dark"
    >
      {loading && <Loader loading={true} variant="full" />}

      {/* Header */}
      <motion.div {...fadeInDown}>
        <div className="relative text-primary-light/80 dark:text-primary-dark/80 flex flex-col items-center justify-center w-full py-20">
          <Suspense fallback={<Loader loading={true} variant="small" size={30} />}>
            <TrueFocus
              sentence="CONTACT ME"
              manualMode
              blurAmount={3}
              borderColor="#00C896"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </Suspense>
        </div>
      </motion.div>

      <div className="relative flex flex-col lg:flex-row justify-center w-full max-w-7xl gap-4 z-10">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col w-full lg:w-full text-primary-light dark:text-primary-dark gap-4"
        >
          <motion.div {...fadeInUp}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Name"
              className="peer w-full px-4 py-3 border border-primary-light/15 dark:border-primary-dark/15 placeholder:text-primary-light/70 dark:placeholder:text-primary-dark/70 bg-primary/1 focus:placeholder-transparent focus:outline-none"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="peer w-full px-4 py-3 border border-primary-light/15 dark:border-primary-dark/15 placeholder:text-primary-light/70 dark:placeholder:text-primary-dark/70 bg-primary/1 focus:placeholder-transparent focus:outline-none"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <textarea
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Message"
              className="peer w-full px-4 py-4 border border-primary-light/15 dark:border-primary-dark/15 placeholder:text-primary-light/70 dark:placeholder:text-primary-dark/70 bg-primary/1 focus:placeholder-transparent focus:outline-none"
            />
          </motion.div>

          <motion.div {...fadeInUp}>
            <Button
              text="Submit"
              variant="secondary"
              onClick={() => { }}
              className="px-4 w-30 bg-primary/2 dark:hover:text-primary-light border-primary-light/15 dark:border-primary-dark/15 hover:border-primary"
            />
          </motion.div>
        </form>

        {/* Contact Info Section */}
        <motion.div {...fadeInUp} className="w-full lg:w-1/2 h-full">
          <div className="relative flex flex-col w-full p-6 gap-4 text-sm text-primary-light dark:text-primary-dark/90 rounded-sm border border-primary-light/15 dark:border-primary-dark/15 bg-primary/1">
            <Suspense fallback={<Loader loading={true} variant="small" size={30} />}>
              <Orbital/>
            </Suspense>

            {/* WhatsApp Info */}
            <motion.div {...fadeInRight}>
              <a
                href="https://wa.me/8801909290959"
                target="_blank"
                rel="noopener noreferrer"
                className="flex group items-center gap-3 transition-transform duration-500 hover:scale-105"
              >
                <div className="flex items-center text-primary-light dark:text-primary bg-black/10 dark:bg-white/5 group-hover:text-green-500 px-3 py-2 rounded-md transition-colors duration-300">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                </div>
                <div>
                  <p>Phone</p>
                  <p className="text-primary-light/80 dark:text-primary-dark/70">01909290959</p>
                </div>
              </a>
            </motion.div>

            {/* Email Info */}
            <motion.div {...fadeInRight} transition={{ ...fadeInRight.transition, delay: 0.1 }}>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdkGRDNTpJTMcvDmBlqwxGvtVTbLStpshzQMDZsJdVhDQsqGMqLQGZCjhCcmgBmkctLKg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex group items-center gap-3 transition-transform duration-500 hover:scale-105"
              >
                <div className="flex items-center text-primary-light dark:text-primary bg-black/10 dark:bg-white/5 group-hover:text-blue-500 px-3 py-2 rounded-md transition-colors duration-300">
                  <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                </div>
                <div>
                  <p>Email</p>
                  <p className="text-primary-light/80 dark:text-primary-dark/70">tarikulislam3639@gmail.com</p>
                </div>
              </a>
            </motion.div>

            {/* Address Info */}
            <motion.div {...fadeInRight} transition={{ ...fadeInRight.transition, delay: 0.2 }}>
              <a
                href="https://maps.app.goo.gl/eAsPwkPz61eHwGND6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex group items-center gap-3 transition-transform duration-500 hover:scale-105"
              >
                <div className="flex items-center text-primary-light dark:text-primary bg-black/10 dark:bg-white/5 group-hover:text-yellow-400 px-3 py-2 rounded-md transition-colors duration-300">
                  <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
                </div>
                <div>
                  <p>Address</p>
                  <p className="text-primary-light/80 dark:text-primary-dark/70">Mirpur-2, Rupnagar, 15 Number Road</p>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Contact);
