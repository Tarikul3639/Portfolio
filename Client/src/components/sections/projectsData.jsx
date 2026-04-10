// Assets
import WebRTC from '../../assets/icons/webrtc-svgrepo-com.svg';
import tailwind from '../../assets/icons/tailwind-css-icon.svg';
import socket from '../../assets/icons/socket-io-icon.svg';
import Express from '../../assets/icons/express-js.svg';
import ChatFly from '../../assets/image/ChatFly.png';
import krishokPalli from '../../assets/image/krishok-palli.png';
import Nexion from '../../assets/image/Nexion_V4.png';
import Nexion_App from '../../assets/image/nexion_app.png';
import KrishokPalliAdmin from '../../assets/image/Krishok_Palli_Admin.png';
import { SiTypescript, SiFramer } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from "react-icons/di";

export const timelineData = [
  {
    title: "Krishok Palli",
    link: "https://github.com/Tarikul3639/Krishok-Palli",
    Live_link: "https://krishok-palli.netlify.app/",
    description: "A high-performance digital agricultural ecosystem bridging farmers with real-time data analytics and market intelligence.",
    image: krishokPalli,
    tag:  "Full-Stack Dev",
    bgText:  "AGRI",
    progress: 94,
    tech: [
      { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React' },
      { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
      { icon: <img src={tailwind} className="h-3" alt="" />, name: 'Tailwind' },
      { icon: <SiTypescript className="text-[#3178c6]" />, name: 'TypeScript' },
      { icon: <SiFramer className="text-[#0055ff]" />, name: 'Framer Motion' },
    ]
  },
  {
    title: "Krishok Palli Admin",
    link: "https://github.com/Tarikul3639/Krishok-Palli/tree/main/admin-pannel",
    Live_link:  "https://krishok-palli-admin.netlify.app/",
    description: "An intuitive admin dashboard for managing agricultural data, user roles, and real-time analytics to optimize farm operations.",
    image: KrishokPalliAdmin,
    tag: "Admin Panel",
    bgText: "ADMIN",
    progress: 99,
    tech: [
      { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React' },
      { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
      { icon: <img src={tailwind} className="h-3" alt="" />, name: 'Tailwind' },
      { icon: <SiFramer className="text-[#0055ff]" />, name:  'Framer Motion' },
    ]
  },
  {
    title: "Nexion",
    link: "https://github.com/Tarikul3639/Nexion",
    // Live_link: "https://nexion. vercel.app/",
    description: "A cutting-edge platform revolutionizing digital collaboration with seamless integration and real-time communication.",
    image: Nexion,
    tag: "Full-Stack Dev",
    bgText: "NEXION",
    progress: 90,
    tech: [
      { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React' },
      { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
      { icon: <img src={tailwind} className="h-3" alt="" />, name: 'Tailwind' },
      { icon: <SiTypescript className="text-[#3178c6]" />, name: 'TypeScript' },
      { icon: <SiFramer className="text-[#0055ff]" />, name: 'Framer Motion' },
      { icon: <img src={Express} className="h-3 dark:invert" alt="" />, name: 'Express' },
      { icon: <img src={socket} className="h-3" alt="" />, name: 'Socket' },
      { icon: <img src={WebRTC} className="h-3" alt="" />, name: 'WebRTC' },
    ]
  },
  {
    title: "Nexion Mobile App",
    link: "https://github.com/Tarikul3639/Nexion_App",
    // Live_link: "https://nexion-mobile-app.vercel.app/",
    description: "A mobile extension of the Nexion platform, offering seamless on-the-go collaboration and communication.",
    image: Nexion_App,
    tag: "Mobile App",
    bgText:  "APP",
    progress: 80,
    tech: [
      { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React Native' },
      { icon: <SiTypescript className="text-[#3178c6]" />, name: 'TypeScript' },
      { icon: <SiFramer className="text-[#0055ff]" />, name:  'Framer Motion' },
      { icon: <img src={Express} className="h-3 dark:invert" alt="" />, name: 'Express' },
      { icon: <img src={socket} className="h-3" alt="" />, name:  'Socket' },
      { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
    ]
  },
  {
    title: "ChatFly",
    link: "https://github.com/Tarikul3639/ChatFly",
    // Live_link: "https://chatfly.vercel.app/",
    description: "Hyper-fast communication engine utilizing WebRTC mesh networks and socket pipelines for encrypted data exchange.",
    image: ChatFly,
    tag: "Network Engineering",
    bgText: "CHAT",
    progress: 88,
    tech: [
      { icon: <img src={socket} className="h-3" alt="" />, name: 'Socket' },
      { icon: <img src={WebRTC} className="h-3" alt="" />, name: 'WebRTC' },
      { icon: <img src={Express} className="h-3 dark:invert" alt="" />, name: 'Express' },
      { icon: <DiMongodb className="text-[#47A248]" />, name: 'MongoDB' },
      { icon: <SiTypescript className="text-[#3178c6]" />, name: 'TypeScript' },
      { icon: <img src={tailwind} className="h-3" alt="" />, name: 'Tailwind' },
      { icon: <SiFramer className="text-[#0055ff]" />, name: 'Framer Motion' },
      { icon: <FontAwesomeIcon icon={faReact} className="text-[#61dafb]" />, name: 'React' },
    ]
  }
];