import Image from '../assets/image/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    const AboutMe = ["I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate."];
    const TextGradient = "bg-gradient-to-b from-rose-50 via-rose-200 to-neutral-500 bg-clip-text text-transparent";
    return (
        <section id='about' className="About flex w-screen flex-col items-center justify-center h-screen bg-white text-white">
            <div className="flex flex-col items-center justify-center w-full bg-[#007575]">
                <div className="relative flex flex-col items-center justify-center w-full bg-[#007575]">
                    <h1 className="text-5xl font-bold">About Me</h1>
                </div>
                <div className="flex flex-row items-center justify-center w-full bg-[#0c4653]">
                    <div className="relative flex flex-col items-center justify-center  h-full w-[40vw] before:h-full before:bg-white before:w-[2px] before:absolute before:top-0 before:bottom-0 before:right-0 ">
                        <div className=" flex flex-col items-center justify-center w-full space-y-6 bg-[#141C23] px-2 py-4">
                            <img
                                src={Image}
                                alt="Profile"
                                className="relative bg-transparent rounded-full w-[170px] h-[170px] border-2 border-dotted"
                            />
                            <p className={`text-lg jetbrains-mono font-[400] px-2 break-words hyphens-auto ${TextGradient} border-b-1 border-neutral-100 pb-6`}>{AboutMe}</p>
                            <p className={`relative text-lg jetbrains-mono ${TextGradient}`}><FontAwesomeIcon icon={faLocationDot} className={`mr-2 text-gray-400`}/>Gazipur,Dhaka,Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[60vw] bg-[#323946]">
                        <div className="flex flex-col items-center justify-center w-full bg-[#58576b]">
                            <h1 className="text-xl font-bold">Hello, I'm [Your Name]</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full bg-[#58576b]">
                            <h1 className="text-xl font-bold">Skills</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full bg-[#58576b]">
                            <h1 className="text-3xl font-bold">Projects</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full bg-[#58576b]">
                            experience
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;