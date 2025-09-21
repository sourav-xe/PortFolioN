import React, { useState,useRef} from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import GradientText from "../components/GradientText.jsx";
import AnimatedButton from "../components/AnimatedButton.jsx";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../components/ParticlesBg";
import Aurora from '../components/AuroraBg';
import GalaxyButton from '../components/galaxyButton'
import TiltCard from "../components/TiltCard.jsx"
import { motion, useMotionValue, useTransform } from "framer-motion";
import EducationCertifications from "../components/EducationCertifications";
import ContactForm from "../components/ContactForm"; // make sure the path is correct
import SkillsSection from "../components/SkillsSection";






// Logos
import gfgLogo from "../assets/gfglogos.png";
import aapOrigoLogo from "../assets/AppOrigoLogo.jpg";
import Traincape from "../assets/ttt.png";

// --project image----

 import Shoes3d from "../assets/3dShoes.png";
 import voiceBot from "../assets/voiceBot.png"
 import NikeShoes from "../assets/NikeShoes.png"
 import Foodin from "../assets/Foodin.png"
 import Netflix from "../assets/Netflix.png"
 import ToDo from "../assets/ToDo.png"
import Weather from "../assets/Weather.png"
import Github from "../assets/Github.png"
import VoiceBot from "../assets/voiceBot.png"
import chatBot from "../assets/chatBot.png"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Full Stack");

  const experiences = [
    {
      company: "Traincape",
      role: "Full Stack Developer",
      duration: "Aug 2025 – Current",
      location: "Delhi, India",
      logo: Traincape,
      points: [
        "Revamped and optimized the CRM layout, making key production-level pages responsive, user-friendly, and visually attractive.",
        "Implemented WhatsApp chat integration by fetching conversations and storing them in MongoDB for admin accessibility and tracking.",
        "Developed a comprehensive Course Page by researching content from platforms like Cisco, IBM, etc., and building both frontend and backend functionality.",
        "Enhanced the Admin Panel with new features including voucher management and role-based access control to streamline operations.",
      ],
    },
    {
      company: "AapOrigo",
      role: "Full Stack Developer",
      duration: "June 2025 – Aug 2025",
      location: "Jaipur, India",
      logo: aapOrigoLogo,
      points: [
        "Developed a real-time chatbot using Turbo4 (fast & cost-effective), handling both UI and UX for seamless user interaction.",
        "Integrated Razorpay for secure payment processing with full transaction workflow using .env for API credentials.",
        "Built an invoice and billing system allowing users to generate invoices, download them as PDFs (PDFKit), and share via WhatsApp (Twilio) and email.",
      ],
    },
    {
      company: "GeeksforGeeks",
      role: "Full Stack Developer",
      duration: "Dec 2024 – April 2025",
      location: "Noida, India",
      logo: gfgLogo,
      points: [
        "Developed a 3D sneaker commerce website using React.js, TailwindCSS, React Three Fiber, and GLTF models.",
        "Built a Restaurant Reservation App using MERN stack (React, Express.js, MongoDB, Node.js) with Rich Text Editor (TinyMCE).",
        "Integrated secure login/logout and session management via Appwrite.",
        "Developed a weather forecast application using free weather APIs.",
      ],
    },
  ];

  // ===== Projects Data =====
  const categories = ["Full Stack", "Frontend/UI", "AI"];
const projects = {
  "Full Stack": [
          {
      title: "3D Shoes Website",
      img: Shoes3d,
      duration: "2024",
      location: "Remote",
      tools: ["React", "Tailwind CSS", "Node.js"],
      points: [
        "Built a modern e-commerce UI with responsive design.",
        "Implemented product catalog and shopping cart features.",
        "Optimized design for mobile-first experience.",
      ],
      github: "https://github.com/sourav-xe/Shoes-3D",
      demo: "https://3-d-ecom-y838.vercel.app/",
    },
    {
      title: "VoiceChat ChatBot",
      img: voiceBot,
      duration: "Aug 2025 – Sep 2025",
      location: "Remote",
      tools: ["React", "Node.js", "Express.js", "Web Speech API"],
      points: [
        "Developed a voice-enabled chatbot with real-time responses.",
        "Integrated backend and frontend as submodules for modularity.",
        "Enabled voice commands and playback functionality.",
      ],
      github: "https://github.com/sourav-xe/VoiceChat-ChatBot",
      demo: "https://3-d-ecom-y838.vercel.app/",
    },
   
    
    {
      title: "Restaurant Site",
      img: Foodin,
      duration: "2024",
      location: "Remote",
      tools: ["React", "Tailwind CSS"],
      points: [
        "Developed a responsive restaurant landing site.",
        "Included menu sections with styled UI components.",
        "Optimized for fast loading and user experience.",
      ],
      github: "https://github.com/sourav-xe/All-Projects/tree/main/Restraunt%20site",
      demo: "#",
    },
  ],

  "Frontend/UI": [

       {
      title: "Shoes E-commerce UI",
      img: NikeShoes,
      duration: "2024",
      location: "Remote",
      tools: ["React", "Tailwind CSS"],
      points: [
        "Designed product showcase UI for sneakers.",
        "Integrated 3D hero section for immersive experience.",
        "Built reusable styled components for scalability.",
      ],
      github: "https://github.com/sourav-xe/Clone-and-Projects",
      demo: "https://sourav-xe.github.io/NikeShoes/",
    },
       {
      title: "GitHub User Detailer",
      img: Github,
      duration: "2024",
      location: "Remote",
      tools: ["HTML5", "CSS", "JavaScript"],
      points: [
        "Built a tool to fetch and display GitHub user details using API.",
        "Implemented dynamic profile rendering with followers/repos count.",
        "Responsive UI styled with CSS for better user experience.",
      ],
      github: "#",
      demo: "#",
    },
  
    {
      title: "To-Do List App",
      img: ToDo,
      duration: "2024",
      location: "Remote",
      tools: ["HTML5", "CSS", "JavaScript"],
      points: [
        "Developed a to-do list with local storage for persistence.",
        "Users can add, delete, and mark tasks as completed.",
        "Implemented real-time state updates with clean JavaScript logic.",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Netflix UI Clone",
      img: Netflix,
      duration: "2024",
      location: "Remote",
      tools: ["React", "CSS", "API Integration"],
      points: [
        "Cloned Netflix front-end with responsive layout.",
        "Implemented media queries for adaptive screens.",
        "Dynamic sections for trending and recommended content.",
      ],
      github: "https://github.com/sourav-xe/Clone-and-Projects",
      demo: "#",
    },
    {
  title: "Weather Forecast App",
  img: Weather,
  duration: "2024",
  location: "Remote",
  tools: ["HTML", "CSS", "JavaScript", "Weather API"],
  points: [
    "Built a live weather forecast app using free weather API.",
    "Implemented real-time city search with temperature, humidity, and conditions.",
    "Styled with responsive CSS for both desktop and mobile devices.",
  ],
  github: "https://github.com/sourav-xe/Clone-and-Projects/tree/main/weather%20app",
  demo: "#",
},



 
 
 
    {
      title: "React Rich Text Editor",
      img: null,
      duration: "2024",
      location: "Remote",
      tools: ["React", "Appwrite", "Tailwind CSS"],
      points: [
        "Created a collaborative rich text editor.",
        "Integrated Appwrite for authentication and storage.",
        "Enabled media upload and live preview.",
      ],
      github: "https://github.com/sourav-xe/Clone-and-Projects",
      demo: "#",
    },
 

  ],

  "AI": [
    {
      title: "ChatBot (Tata Motors Task)",
      img: chatBot,
      duration: "2025",
      location: "Remote",
      tools: ["ChatGPT Turbo API", "JavaScript", "Node.js"],
      points: [
        "Built a chatbot using OpenAI ChatGPT Turbo API.",
        "Handled real-time user queries with contextual replies.",
        "Designed as part of Tata Motors assignment.",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "VoiceBot (Tata Motors Task)",
      img: voiceBot,
      duration: "2025",
      location: "Remote",
      tools: ["Gemini API", "JavaScript", "Speech Recognition"],
      points: [
        "Developed a voice-enabled bot using Gemini API.",
        "Implemented speech recognition for seamless interaction.",
        "Delivered as part of Tata Motors task assignment.",
      ],
      github: "#",
      demo: "#",
    },
  ],

  Other: [
    {
      title: "Weather App",
      img: null,
      duration: "2024",
      location: "Remote",
      tools: ["React", "API Integration", "CSS"],
      points: [
        "Built a weather forecast app with live API data.",
        "Implemented city search with dynamic results.",
        "Styled responsive UI with media queries.",
      ],
      github: "https://github.com/sourav-xe/Clone-and-Projects",
      demo: "#",
    },
    {
      title: "Catalog App",
      img: null,
      duration: "2024",
      location: "Remote",
      tools: ["React", "Tailwind CSS"],
      points: [
        "Developed a simple catalog display system.",
        "Implemented clean and reusable components.",
        "Optimized layout for desktop and mobile views.",
      ],
      github: "https://github.com/sourav-xe/Clone-and-Projects",
      demo: "#",
    },
  ],
};



  return (
    <div className="relative w-full bg-black overflow-hidden text-white">
      {/* Background across whole page */}
      <Background />
          <div className="absolute inset-0 -z-0">
        <Particles />
      </div>

      {/* Navbar */}
      <Navbar />
      
{/* ======================================================================================================================================== */}
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 z-10">
        <GradientText
          colors={["#ffffff", "#d9d9d9", "#ffffff"]}
          animationSpeed={2}
          showBorder={false}
          className="text-5xl md:text-7xl font-bold tracking-wide"
        >
          Hey, I’m Sourav Kumar
        </GradientText>

        <h2 className="text-xl md:text-2xl text-gray-300">
          <Typewriter
            words={[
              "I am a Fullstack Developer",
              "I am a Software Engineer",
              "I am a UI/UX Designer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
          Crafting interactive, animated, and visually striking digital
          experiences. 🚀
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6">
       <a href="#projects">
  <GalaxyButton className="text-purple-400">View My Work</GalaxyButton>
</a>

<a href="mailto:sourav20kumar02@gmail.com">
  <GalaxyButton>Let’s Connect</GalaxyButton>
</a>

        </div>
<div className="flex gap-10 mt-auto text-3xl text-white pb-10">
<a
  href="https://github.com/sourav-xe"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithub className="hover:scale-125 hover:text-gray-800 transition" />
</a>

<a
  href="https://www.linkedin.com/in/sourav-kumar-a80020345/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin className="hover:scale-125 hover:text-blue-600 transition" />
</a>

<a
  href="mailto:sourav20kumar02@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <SiGmail className="hover:scale-125 hover:text-red-500 transition" />
</a>

<a
  href="https://twitter.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaTwitter className="hover:scale-125 hover:text-sky-400 transition" />
</a>

</div>


      </section>

      {/* ================= Experience Section ================================================================================ */}
      <section id="experience" className="relative w-full py-20 px-6 z-10">
        <div className="absolute left-1/2 top-1/2 w-full h-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <Particles />
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-purple-400">Experience</span>
          </h1>

          <div className="relative border-l border-gray-700 ml-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 ml-12"
              >
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-black border border-purple-500 rounded-full shadow-lg overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                  />
                </span>

                <div className="bg-gradient-to-r from-purple-900/40 to-black p-6 rounded-xl shadow-lg hover:shadow-purple-600/30 transition">
                  <h2 className="text-2xl font-bold text-purple-300">
                    {exp.company}
                  </h2>
                  <p className="text-lg font-semibold">{exp.role}</p>
                  <p className="text-sm text-gray-400">
                    {exp.duration} • {exp.location}
                  </p>

                  <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





{/* ================= Projects Section ========================================================================== */}
<motion.div
  initial={{ y: 0 }}
  whileInView={{ y: [0, -5, 0] }}
  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
  viewport={{ once: true }}
>
  <section id="projects" className="relative w-full py-24 px-6 z-10">
    {/* Aurora Background */}
    <div className="absolute inset-0 -z-10">
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.6}
        amplitude={1.2}
        speed={0.7}
      />
    </div>

    {/* Title */}
    <div className="text-center mb-16">
      <GradientText
        colors={["#ffffff", "#a855f7", "#ff33cc"]}
        animationSpeed={3}
        className="text-5xl md:text-7xl font-extrabold tracking-wide"
      >
        ✨ My Projects ✨
      </GradientText>
      <p className="text-gray-400 mt-4 text-lg">
        A showcase of what I’ve been building recently 🚀
      </p>
    </div>

    {/* Tabs */}
    <div className="flex justify-center gap-6 mb-12">
      {categories.map((cat) => (
        <motion.button
          key={cat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveCategory(cat)}
          className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeCategory === cat
              ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
              : "bg-gray-800/60 backdrop-blur-md text-gray-300 hover:bg-gray-700/80"
          }`}
        >
          {cat}
          {activeCategory === cat && (
            <motion.div
              layoutId="underline"
              className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
            />
          )}
        </motion.button>
      ))}
    </div>

    {/* Cards */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects[activeCategory].map((proj, idx) => (
        <TiltCard key={idx} proj={proj} idx={idx} />
      ))}
    </div>
  </section>
</motion.div>

{/* ================= Education & Certifications ========================================================================== */}
<section id="education" className="relative w-full py-24 px-6 z-10">
  <EducationCertifications />
</section>




{/* ================= Skills Section ========================================================================== */}

<section id="skill" className="relative w-full py-24 px-6 z-10">
  <SkillsSection />
</section>



{/* ================= Contact Section ========================================================================== */}
<section id="contact" className="relative w-full py-24 px-6 z-10">
  

  <div className="max-w-4xl mx-auto text-center">

 <Particles/>


    {/* Contact Form */}
    <ContactForm />
    
 
   
  </div>
</section>


    </div>
  );
}
