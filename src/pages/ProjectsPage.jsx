import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Background from "../components/ParticlesBg";
import GradientText from "../components/GradientText.jsx";
import AnimatedButton from "../components/AnimatedButton.jsx";
import { motion } from "framer-motion";
import Particles from "../components/ParticlesBg";

export default function ProjectsPage() {
  const categories = ["Full Stack", "Frontend/UI", "Other"];
  const [activeCategory, setActiveCategory] = useState("Full Stack");

  const projects = {
    "Full Stack": [
      {
        title: "Restaurant Reservation App",
        img: null, // image will be uploaded later
        duration: "Jan 2023 – Jan 2026",
        location: "Delhi, India",
        tools: ["React", "Express.js", "MongoDB", "Node.js"],
        points: [
          "Built a full-stack reservation app with validation and toast alerts.",
          "Developed REST APIs to store booking data in MongoDB.",
          "Responsive design with countdown redirects.",
        ],
        github: "#",
        demo: "#",
      },
      {
        title: "Real-Time Rich Text Editor",
        img: null,
        duration: "May 2025",
        location: "Remote",
        tools: ["React", "TinyMCE", "Appwrite", "Tailwind CSS"],
        points: [
          "Built a collaborative editor with TinyMCE.",
          "Integrated Appwrite for auth & session management.",
          "Enabled image upload with preview and delete.",
        ],
        github: "#",
        demo: "#",
      },
    ],
    "Frontend/UI": [
      {
        title: "3D Sneaker E-commerce UI",
        img: null,
        duration: "June 2022 – July 2025",
        location: "Delhi, India",
        tools: ["Reactjs", "TailwindCSS", "React Three Fiber"],
        points: [
          "Interactive 3D sneaker showcase using React Three Fiber.",
          "Redux-based cart management with authentication.",
          "Dynamic sneaker cards rendered via API.",
        ],
        github: "#",
        demo: "#",
      },
      {
        title: "Modern UI Kit",
        img: null,
        duration: "2025",
        location: "Remote",
        tools: ["React", "TailwindCSS", "Framer Motion"],
        points: [
          "Created reusable UI components with animations.",
          "Built responsive landing page templates.",
          "Optimized for performance and accessibility.",
        ],
        github: "#",
        demo: "#",
      },
    ],
    Other: [],
  };

  return (
    <div className="relative w-full bg-black overflow-hidden text-white">
      <Background />
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex flex-col items-center justify-center text-center px-4 z-10">
        <GradientText
          colors={["#ffffff", "#a855f7", "#ffffff"]}
          animationSpeed={2}
          className="text-5xl md:text-7xl font-bold"
        >
          My Projects
        </GradientText>
        <p className="text-gray-400 mt-4 text-lg md:text-xl max-w-2xl">
          Explore my work — Full Stack, Frontend/UI, and other creative projects.
        </p>
      </section>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 mt-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-purple-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <section id="projects" className="relative w-full py-16 px-6">
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#ffffff", "#a855f7"]}
            particleCount={100}
            particleSpread={20}
            speed={0.15}
            particleBaseSize={60}
            moveParticlesOnHover={true}
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects[activeCategory].map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-black rounded-xl shadow-lg overflow-hidden hover:shadow-purple-600/40 transition flex flex-col"
            >
              {/* Thumbnail OR Skeleton */}
              <div className="w-full h-48 overflow-hidden relative">
                {proj.img ? (
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-[shimmer_2s_infinite]" />
                    <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-purple-300">{proj.title}</h2>
                <p className="text-sm text-gray-400">
                  {proj.duration} • {proj.location}
                </p>

                <p className="text-gray-400 mt-2">
                  <span className="font-semibold text-purple-400">Tools:</span>{" "}
                  {proj.tools.join(", ")}
                </p>

                <ul className="list-disc pl-5 mt-3 space-y-1 text-gray-300 flex-1">
                  {proj.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer">
                    <AnimatedButton>View Code</AnimatedButton>
                  </a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                    <AnimatedButton>Live Demo</AnimatedButton>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shimmer Keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-[shimmer_2s_infinite] {
          background-size: 200% 100%;
          background-image: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.1),
            transparent
          );
        }
      `}</style>
    </div>
  );
}
