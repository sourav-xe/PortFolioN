"use client";

// ================== IMPORTS ==================
import React, { useState, Suspense } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import GradientText from "../components/GradientText.jsx";
import GalaxyButton from "../components/galaxyButton";
import TiltCard from "../components/TiltCard.jsx";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import Particles from "../components/ParticlesBg";
import Aurora from "../components/AuroraBg";

// Logos
import gfgLogo from "../assets/gfglogos.png";
import aapOrigoLogo from "../assets/AppOrigoLogo.jpg";
import Traincape from "../assets/ttt.png";

// Project images
import Shoes3d from "../assets/3dShoes.png";
import voiceBot from "../assets/voiceBot.png";
import NikeShoes from "../assets/NikeShoes.png";
import Foodin from "../assets/Foodin.png";
import Netflix from "../assets/Netflix.png";
import ToDo from "../assets/ToDo.png";
import Weather from "../assets/Weather.png";
import Github from "../assets/Github.png";
import chatBot from "../assets/chatBot.png";

// ================== LAZY LOAD HEAVY COMPONENTS ==================
const EducationCertifications = React.lazy(() =>
  import("../components/EducationCertifications")
);
const SkillsSection = React.lazy(() => import("../components/SkillsSection"));
const ContactForm = React.lazy(() => import("../components/ContactForm"));

// ================== COMPONENT ==================
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Full Stack");

  // ===== Experiences =====
  const experiences = [
    {
      company: "Traincape",
      role: "Full Stack Developer",
      duration: "Aug 2025 – Current",
      location: "Delhi, India",
      logo: Traincape,
      points: [
        "Revamped and optimized CRM layout for responsiveness and UX.",
        "Implemented WhatsApp chat integration with MongoDB storage.",
        "Developed a Course Page with Cisco/IBM-based research.",
        "Enhanced Admin Panel with voucher system & RBAC.",
      ],
    },
    {
      company: "AapOrigo",
      role: "Full Stack Developer",
      duration: "June 2025 – Aug 2025",
      location: "Jaipur, India",
      logo: aapOrigoLogo,
      points: [
        "Built a real-time chatbot using Turbo4 (UI + UX).",
        "Integrated Razorpay for secure payments.",
        "Developed invoice system with PDFKit + Twilio/Email.",
      ],
    },
    {
      company: "GeeksforGeeks",
      role: "Full Stack Developer",
      duration: "Dec 2024 – April 2025",
      location: "Noida, India",
      logo: gfgLogo,
      points: [
        "Built 3D sneaker commerce site (React Three Fiber).",
        "Restaurant Reservation App with MERN + TinyMCE.",
        "Integrated Appwrite auth & session mgmt.",
        "Developed Weather Forecast App with API.",
      ],
    },
  ];

  // ===== Projects =====
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
          "Modern e-commerce UI with responsive design.",
          "Shopping cart & catalog functionality.",
          "Optimized for mobile-first experience.",
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
          "Voice-enabled chatbot with real-time responses.",
          "Modular backend & frontend integration.",
          "Supports voice commands & playback.",
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
          "Responsive landing site with menu sections.",
          "Styled UI components for clean design.",
          "Fast-loading & user-friendly.",
        ],
        github:
          "https://github.com/sourav-xe/All-Projects/tree/main/Restraunt%20site",
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
          "Product showcase UI for sneakers.",
          "3D hero section for immersive experience.",
          "Reusable styled components.",
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
          "Fetch GitHub user details via API.",
          "Dynamic profile rendering with stats.",
          "Responsive design for all devices.",
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
          "To-do list with local storage persistence.",
          "Add, delete, and mark completed tasks.",
          "Real-time updates with clean JS logic.",
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
          "Netflix front-end clone with responsive layout.",
          "Media queries for adaptive screens.",
          "Dynamic trending & recommended sections.",
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
          "Live weather app using free API.",
          "Real-time city search with conditions.",
          "Responsive UI for mobile & desktop.",
        ],
        github:
          "https://github.com/sourav-xe/Clone-and-Projects/tree/main/weather%20app",
        demo: "#",
      },
    ],
    AI: [
      {
        title: "ChatBot (Tata Motors Task)",
        img: chatBot,
        duration: "2025",
        location: "Remote",
        tools: ["ChatGPT Turbo API", "JavaScript", "Node.js"],
        points: [
          "Chatbot using OpenAI Turbo API.",
          "Contextual real-time replies.",
          "Designed for Tata Motors assignment.",
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
          "Voice-enabled bot using Gemini API.",
          "Speech recognition for natural UX.",
          "Tata Motors assignment project.",
        ],
        github: "#",
        demo: "#",
      },
    ],
  };

  // ================== RETURN JSX ==================
  return (
    <div className="relative w-full bg-black overflow-hidden text-white">
    
      <Background />
      <Navbar />

      {/* HERO SECTION */}
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
            loop={false}
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

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <a href="#projects">
            <GalaxyButton className="text-purple-400">View My Work</GalaxyButton>
          </a>
          <a href="mailto:sourav20kumar02@gmail.com">
            <GalaxyButton>Let’s Connect</GalaxyButton>
          </a>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative w-full py-20 px-6 z-10">
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
                    loading="lazy"
                    className="w-10 h-10 object-contain"
                  />
                </span>

                <div className="bg-gradient-to-r from-purple-900/40 to-black p-6 rounded-xl shadow-lg">
                  <h2 className="text-2xl font-bold text-purple-300">{exp.company}</h2>
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

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative w-full py-24 px-6 z-10">
        <div className="absolute inset-0 -z-10">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.6}
            amplitude={1.2}
            speed={0.7}
          />
        </div>

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

        {/* Category Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects[activeCategory].map((proj, idx) => (
            <TiltCard key={idx} proj={proj} idx={idx} />
          ))}
        </div>
      </section>

      {/* ================= Lazy Sections ================= */}
      <Suspense fallback={<div className="text-center py-10">Loading Education...</div>}>
        <section id="education" className="relative w-full py-24 px-6 z-10">
          <EducationCertifications />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading Skills...</div>}>
        <section id="skill" className="relative w-full py-24 px-6 z-10">
          <SkillsSection />
        </section>
      </Suspense>

      <Suspense fallback={<div className="text-center py-10">Loading Contact Form...</div>}>
        <section id="contact" className="relative w-full py-24 px-6 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ContactForm />
          </div>
        </section>
      </Suspense>
    </div>
  );
}
