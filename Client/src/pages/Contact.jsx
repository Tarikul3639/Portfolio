import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/ui/Button.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/ui/Loader.jsx';
import SpotlightCard from '../components/ui/SpotlightCard.jsx';
// import Globe from 'react-globe.gl';
import GradientText from '../components/ui/GradientText.jsx';
import SplitText from "../components/ui/SplitText.jsx";
import Particles from '../components/ui/Particles.jsx';
import TrueFocus from '../components/ui/TrueFocus.jsx';

const Contact = () => {
  // State variable to manage loading state
  const [loading, setLoading] = useState(false);
  // State variables for form inputs
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting
    const formData = { name, email, message };
    console.log("🔼 Submitting:", formData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log('❌ Server error:', result);
        setLoading(false); // Set loading state to false on error
        toast.error(result.message || 'Failed to send message.', {

        });
        return;
      }

      // ✅ Success response
      console.log('✅ Success:', result);
      setLoading(false); // Set loading state to false on error
      toast.success(result.message || 'Message sent successfully!', {

      });

      // Clear input fields
      setName('');
      setEmail('');
      setMessage('');

    } catch (err) {
      console.error('❌ Network error:', err);
      setLoading(false); // Set loading state to false on error
      toast.warning('Network error', {

      });
    }
  };

  return (
    <section
      id="contact"
      className="source-sans-3 pt-20 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 bg-background-light dark:bg-background-dark"
    >
      {/* Loader component to show loading state */}
      {loading && <Loader loading={true} />}

      {/* Section Header */}
      <div className={`relative text-primary-light/80 dark:text-primary-dark/80 flex flex-col items-center justify-center w-full py-20`}>
        <TrueFocus
          sentence="CONTACT ME"
          manualMode={true}
          blurAmount={3}
          borderColor="#00C896"
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
      </div>

      <div className="relative flex flex-col lg:flex-row justify-center w-full max-w-7xl gap-4 z-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col w-full lg:w-full text-primary-light dark:text-primary-dark gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary-light/15 dark:border-primary-dark/15 placeholder:text-primary-light/70
 dark:placeholder:text-primary-dark/70 focus:placeholder-transparent focus:outline-none"
            required
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary-light/15 dark:border-primary-dark/15 placeholder:text-primary-light/70
 dark:placeholder:text-primary-dark/70 focus:placeholder-transparent focus:outline-none"
            required
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            rows="9"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer w-full px-4 py-4 border border-primary-light/15 dark:border-primary-dark/15 placeholder:text-primary-light/70
 dark:placeholder:text-primary-dark/70 focus:placeholder-transparent focus:outline-none"
            placeholder="Message"
            required
          />

          <Button
            text="Submit"
            onClick={() => { }} // Keep empty since form submit is handled by onSubmit
            variant="secondary"
            className="px-4 w-30 dark:hover:text-primary-light border-primary-light/15 dark:border-primary-dark/15 hover:border-primary"
          />
        </form>

        {/* Contact Information */}
        <SpotlightCard className="flex flex-col w-full lg:w-1/2 h-full p-6 gap-4 source-sans-3 text-sm text-primary-light dark:text-primary-dark/90 rounded-sm border border-primary-light/15 dark:border-primary-dark/15">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801909290959"
            target="_blank"
            rel="noopener noreferrer"
            className="flex group flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-105"
          >
            <div className="flex items-center text-primary-light dark:text-primary bg-black/10 dark:bg-white/5 group-hover:text-green-500 px-3 py-2 rounded-md transition-colors duration-300">
              <FontAwesomeIcon icon={faWhatsapp} className="text-2xl h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <p className="text-primary-light dark:text-primary-dark/90">Phone</p>
              <p className="text-primary-light/80 dark:text-primary-dark/70">01909290959</p>
            </div>
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdkGRDNTpJTMcvDmBlqwxGvtVTbLStpshzQMDZsJdVhDQsqGMqLQGZCjhCcmgBmkctLKg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex group flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-105"
          >
            <div className="flex items-center text-primary-light dark:text-primary bg-black/10 dark:bg-white/5 group-hover:text-blue-500 px-3 py-2 rounded-md transition-colors duration-300">
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <p className="text-primary-light dark:text-primary-dark/90">Email</p>
              <p className="text-primary-light/80 dark:text-primary-dark/70">tarikulislam3639@gmail.com</p>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://maps.app.goo.gl/eAsPwkPz61eHwGND6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex group flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-105"
          >
            <div className="flex items-center text-primary-light dark:text-primary bg-black/10 dark:bg-white/5 group-hover:text-yellow-400 px-3 py-2 rounded-md transition-colors duration-300">
              <FontAwesomeIcon icon={faLocationDot} className="text-2xl h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <p className="text-primary-light dark:text-primary-dark/90">Address</p>
              <p className="text-primary-light/80 dark:text-primary-dark/70">Mirpur-2, Rupnagar, 15 Number Road</p>
            </div>
          </a>

        </SpotlightCard>

      </div>
      <div className='hidden flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-4 z-10 my-20'>
        <SpotlightCard className="flex flex-col items-center justify-center group w-full h-70">
          <div className="p-2 rounded-full bg-transparent">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-3xl text-gray-500 group-hover:text-primary transition-colors duration-200"
            />
          </div>
          <h3 className="mt-1 text-xl lg:text-xl font-medium">Email</h3>
          <p className="text-center text-gray-400 text-sm mt-1">tarikulislam3639@gmail.com</p>
        </SpotlightCard>

        <div className="border-t border-gray-800 my-2 w-70"></div>

        <SpotlightCard className="flex flex-col items-center justify-center group w-full h-70">
          <div className="p-2 rounded-full bg-transparent">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-3xl text-gray-500 group-hover:text-primary transition-colors duration-200"
            />
          </div>
          <h3 className="mt-1 text-xl font-medium">Address</h3>
          <p className="text-center text-gray-400 text-sm mt-1">Mirpur-2, Rupnagar, 15 Number Road</p>
        </SpotlightCard>

        <div className="border-t border-gray-800 my-2 w-70"></div>

        <SpotlightCard className="flex flex-col items-center justify-center group w-full h-70">
          <div className="p-2 rounded-full bg-transparent">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-3xl text-gray-500 group-hover:text-primary transition-colors duration-200"
            />
          </div>
          <h3 className="mt-1 text-xl font-medium">Phone</h3>
          <p className="text-center text-gray-400 text-sm mt-1">Reach out for any official communication.</p>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default Contact;
