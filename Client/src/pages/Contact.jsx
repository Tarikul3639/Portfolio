import React from 'react';
import whatsapp from '../assets/icons/whatsapp.svg';
import gmail from '../assets/icons/gmail.svg';
import googleMap from '../assets/icons/google-maps.svg';

const Contact = () => {
    const textGradient2 = "bg-gradient-to-r from-purple-500 via-teal-500 to-red-500 text-transparent bg-clip-text";
    return (
        <section id="contact" className="relative source-sans-3 pt-20 flex min-w-[345px] w-full flex-col items-center justify-center overflow-hidden p-4 lg:h-screen bg-background">
            {/* Section Heading */}
            <div className={`relative flex flex-col items-center justify-center w-full pb-4 lg:pb-10 ${textGradient2}`}>
                <p className={`${textGradient2} text-[15px] text-center text-neutral-300 font-medium`}>
                    GET IN TOUCH
                </p>
                <h1 className="text-5xl font-bold pt-2 pb-1">CONTACT ME</h1>
            </div>
            <div className="flex flex-col lg:flex-row  items-center justify-center w-full max-w-7xl gap-4">
                <form action="contact" className="flex flex-col w-full lg:w-1/3 p-6 text-[#e5e5e5] gap-4">
                    <input
                        type="text"
                        className="peer w-full px-4 py-3 border border-white/20 placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
                        required
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        className="peer w-full px-4 py-3 border border-white/20 placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
                        required
                        placeholder="Email"
                    />
                    <textarea
                        name="message"
                        id="message"
                         rows="10"
                        className="peer w-full px-4 py-3 border border-white/20 placeholder:text-[#c0c0c0] focus:placeholder-transparent focus:outline-none"
                        placeholder="Email"
                        required
                    />
                    <button className="border border-white/20 hover:bg-white/10 px-4 py-2 w-30 rounded-[2px]">
                        Submit
                    </button>
                </form>

                <div className="flex flex-col w-full p-6 gap-4 source-sans-3 text-sm text-white/60">
                    <ul class="flex flex-row items-center justify-left gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
                    <li className='flex flex-col justify-start text-[#25D366] px-2 py-1.5 bg-white/7 rounded-xs'>
                        <img src={whatsapp} alt="whatsapp" className='h-6'/>
                        </li>
                        <li className="flex flex-col justify-start">
                            <p className=' text-gray-300'>Phone</p>
                            <p className=' text-gray-200'>01909290959</p>
                        </li>
                    </ul>
                    <ul class="flex flex-row items-center justify-left gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
                        <li className='flex flex-col justify-start text-[#25D366] px-2 py-1.5 bg-white/7 rounded-xs'>
                        <img src={gmail} alt="gmail" className='h-6'/>
                        </li>
                        <li className="flex flex-col justify-start">
                            <p className='text-gray-300'>Email</p>
                            <p className=' text-gray-200'>tarikulislam3639@gmail.com</p>
                        </li>
                    </ul>
                    <ul class="flex flex-row items-center justify-left gap-3 cursor-pointer transition-transform duration-500 hover:scale-102">
                        <li className='flex flex-col justify-start text-3xl text-[#25D366] px-2 py-1.5 bg-white/7 rounded-xs'>
                            <img src={googleMap} alt="GoogleMap"  className='h-6'/>
                        </li>
                        <li className="flex flex-col justify-start">
                            <p className=' text-gray-300'>Address</p>
                            <p className=' text-gray-200'>Mirpur-2, Rupnager, 15 Number Road</p>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Contact;