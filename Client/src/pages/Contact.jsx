import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/ui/Button.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/ui/Loader.jsx';

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
      className="source-sans-3 pt-20 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 lg:h-screen bg-background-light dark:bg-background-dark"
    >
      {/* Loader component to show loading state */}
      {loading && <Loader loading={true} />}

      {/* Section Header */}
      <div className={`relative flex flex-col items-center justify-center w-full pb-4 lg:pb-10`}>
        <p className="text-xs text-primary-light dark:text-background-light border border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center -translate-y-1/2 shine overflow-hidden z-50">
          GET IN TOUCH
        </p>
        <h1 className="text-5xl font-bold pt-2 pb-1 bg-primary-light bg-gradient-to-r dark:from-secondary dark:via-teal-500 dark:to-primary text-transparent bg-clip-text">CONTACT ME</h1>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-4 z-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col w-full lg:w-full p-6 text-primary-light dark:text-primary-dark gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary-light dark:border-primary/50 placeholder:text-primary-dark/5 dark:placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
            required
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary-light dark:border-primary/50 placeholder:text-primary-dark/5 dark:placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
            required
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary-light dark:border-primary/50 placeholder:text-primary-dark/5 dark:placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
            placeholder="Message"
            required
          />

          <Button
            text="Submit"
            onClick={() => { }} // Keep empty since form submit is handled by onSubmit
            variant="secondary"
            className="px-4 w-30 border-primary-light dark:border-primary/50 hover:border-primary"
          />
        </form>

        {/* Contact Information */}
        <div className="flex flex-col w-full lg:w-1/2 p-6 gap-4 source-sans-3 text-sm text-primary-light dark:text-primary-dark/90">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8801909290959"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
            <li className="flex items-center dark:text-primary dark:hover:text-primary/80 px-2 py-1.5 bg-white/7 rounded-xs">
              <FontAwesomeIcon icon={faWhatsapp} className="text-3xl h-7 w-7" />
            </li>
            <li className="flex flex-col">
              <p >Phone</p>
              <p >01909290959</p>
            </li>
          </a>

          {/* Gmail */}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdkGRDNTpJTMcvDmBlqwxGvtVTbLStpshzQMDZsJdVhDQsqGMqLQGZCjhCcmgBmkctLKg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-102"
          >
            <li className="flex items-center dark:text-primary dark:hover:text-primary/80 px-2 py-1.5 bg-white/7 rounded-xs">
              <FontAwesomeIcon icon={faEnvelope} className='text-3xl h-7 w-7' />
            </li>
            <li className="flex flex-col">
              <p >Email</p>
              <p >tarikulislam3639@gmail.com</p>
            </li>
          </a>


          {/* Address */}
          <a
            href="https://maps.app.goo.gl/eAsPwkPz61eHwGND6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
            <li className="flex items-center dark:text-primary dark:hover:text-primary/80 px-2 py-1.5 bg-white/7 rounded-xs">
              <FontAwesomeIcon icon={faLocationDot} className='text-3xl h-7 w-7' />
            </li>
            <li className="flex flex-col">
              <p >Address</p>
              <p >Mirpur-2, Rupnager, 15 Number Road</p>
            </li>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
