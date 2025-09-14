"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientText from "./GradientText";
// import Aurora from "./AuroraBg";
import Particles from "./ParticlesBg";
import Background from "./Background";
       import { FaCertificate, FaAward } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";


// Education Data
const education = [
  {
    school: "Delhi University",
    degree: "Bachelor of Science",
    duration: "June 2022 – July 2025",
    location: "Delhi, India",
    grade: "CGPA: 7.5/9.5",
    logo: null,
  },
  {
    school: "IGNOU",
    degree: "Bachelor’s Degree of Computer Application",
    duration: "Jan 2023 – Jan 2026",
    location: "Delhi, India",
    grade: "Percentage: 72%",
    logo: null,
  },
];

// Certifications Data
const certifications = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    year: "2024",
    img: null,
  },
  {
    title: "React Advanced Concepts",
    issuer: "Coursera",
    year: "2024",
    img: null,
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coding Ninjas",
    year: "2023",
    img: null,
  },
];

export default function EducationCertifications() {
  return (
    <section className="relative w-full py-24 px-6 z-10 overflow-hidden">
      {/* Background Layer 1 - Global Background */}
      <div className="absolute inset-0 -z-20">
        <Background />
      </div>

   

      {/* Background Layer 3 - Particles */}
      <div className="absolute inset-0 -z-0">
        <Particles />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ================= Education Timeline ================= */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-purple-400">Education</span>
          </h1>

          <div className="relative border-l border-gray-700 ml-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 ml-12"
              >
                {/* Timeline Icon */}
                <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-black border border-purple-500 rounded-full shadow-lg overflow-hidden">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={edu.school}
                      className="w-10 h-10 object-contain hover:scale-110 transition-transform"
                    />
                  ) : (
                    <span className="text-purple-400 font-bold">🎓</span>
                  )}
                </span>

                {/* Card */}
                <div className="bg-gradient-to-r from-purple-900/40 to-black p-6 rounded-xl shadow-lg hover:shadow-purple-600/30 transition">
                  <h2 className="text-2xl font-bold text-purple-300">
                    {edu.school}
                  </h2>
                  <p className="text-lg font-semibold">{edu.degree}</p>
                  <p className="text-sm text-gray-400">
                    {edu.duration} • {edu.location}
                  </p>
                  <p className="text-sm text-gray-300 mt-2">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Certifications ================= */}

<div>
  <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
    My <span className="text-purple-400">Certifications</span>
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {certifications.map((cert, idx) => (
      <motion.div
        key={idx}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group relative bg-gradient-to-br from-purple-900/30 to-black/40 
                   backdrop-blur-xl border border-purple-500/30 
                   rounded-2xl p-6 shadow-lg 
                   hover:shadow-purple-500/40 hover:border-purple-400
                   transition transform hover:-translate-y-2"
      >
        {/* Certificate Icon (Fallback if no image) */}
        <div className="w-full h-40 bg-black/40 rounded-lg flex items-center justify-center 
                        overflow-hidden mb-6 border border-purple-400/20">
          {cert.img ? (
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <FaCertificate className="text-purple-300 text-6xl" />
          )}
        </div>

        {/* Details */}
        <h2 className="text-xl font-bold text-purple-300 group-hover:text-white transition">
          {cert.title}
        </h2>
        <p className="text-gray-300">{cert.issuer}</p>
        <p className="text-sm text-gray-400">{cert.year}</p>

        {/* Glow Overlay */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-gradient-to-tr from-purple-600/10 to-blue-600/10 
                        opacity-0 group-hover:opacity-100 
                        transition duration-500"></div>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
