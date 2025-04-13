import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../components/ui/Button.jsx';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  // State variables for form inputs
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };
    console.log("🔼 Submitting:", formData);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.log('❌ Server error:', result);
        toast.error(result.message || 'Failed to send message.', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
          transition: Bounce,
        });
        return;
      }

      // ✅ Success response
      console.log('✅ Success:', result);
      toast.success(result.message || 'Message sent successfully!', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        transition: Bounce,
      });

      // Clear input fields
      setName('');
      setEmail('');
      setMessage('');

    } catch (err) {
      console.error('❌ Network error:', err);
      toast.warning('Network error', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        transition: Bounce,
      });
    }
  };

  // Gradient text style
  const textGradient = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";

  return (
    <section
      id="contact"
      className="source-sans-3 pt-20 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 lg:h-screen bg-background"
    >
      {/* Section Header */}
      <div className={`relative flex flex-col items-center justify-center w-full pb-4 lg:pb-10 ${textGradient}`}>
        <p className="text-[15px] text-center text-neutral-300 font-medium">GET IN TOUCH</p>
        <h1 className="text-5xl font-bold pt-2 pb-1">CONTACT ME</h1>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-4 z-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col w-full lg:w-full p-6 text-[#e5e5e5] gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary/50 placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
            required
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary/50 placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
            required
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="peer w-full px-4 py-3 border border-primary/50 placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
            placeholder="Message"
            required
          />

          <Button
            text="Submit"
            onClick={() => { }} // Keep empty since form submit is handled by onSubmit
            variant="secondary"
            className="px-4 w-30 border-primary/50 hover:border-primary"
          />
        </form>

        {/* Contact Information */}
        <div className="flex flex-col w-full lg:w-1/2 p-6 gap-4 source-sans-3 text-sm text-white/60">
          {/* WhatsApp */}
          <ul className="flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
            <li className="flex items-center text-[#00c896] hover:text-[#16e4b1] px-2 py-1.5 bg-white/7 rounded-xs">
              <FaWhatsapp className="h-6 w-6" />
            </li>
            <li className="flex flex-col">
              <p className="text-gray-300">Phone</p>
              <p className="text-gray-200">01909290959</p>
            </li>
          </ul>

          {/* Gmail */}
          <ul className="flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
            <li className="flex items-center text-[#00c896] hover:text-[#16e4b1] px-2 py-1.5 bg-white/7 rounded-xs">
              <FaEnvelope className="h-6 w-6" />
            </li>
            <li className="flex flex-col">
              <p className="text-gray-300">Email</p>
              <p className="text-gray-200">tarikulislam3639@gmail.com</p>
            </li>
          </ul>

          {/* Address */}
          <ul className="flex flex-row items-center gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
            <li className="flex items-center text-[#00c896] hover:text-[#16e4b1] px-2 py-1.5 bg-white/7 rounded-xs">
              <FaMapMarkerAlt className="h-6 w-6" />
            </li>
            <li className="flex flex-col">
              <p className="text-gray-300">Address</p>
              <p className="text-gray-200">Mirpur-2, Rupnager, 15 Number Road</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Toast container for notifications */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
