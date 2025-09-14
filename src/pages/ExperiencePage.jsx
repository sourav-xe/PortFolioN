// import React from "react";
// import Navbar from "../components/Navbar";
// import { motion } from "framer-motion";

// // Company Logos
// import gfgLogo from "../assets/gfg.png"; // 👈 Add GeeksforGeeks logo in assets
// import aapOrigoLogo from "../assets/aaporigo.png"; // 👈 Add AapOrigo logo in assets

// export default function ExperiencePage() {
//   const experiences = [
//     {
//       company: "AapOrigo",
//       role: "Full Stack Developer",
//       duration: "June 2025 – Current",
//       location: "Jaipur, India",
//       logo: aapOrigoLogo,
//       points: [
//         "Developed a real-time chatbot using Turbo4 (fast & cost-effective), handling both UI and UX for seamless user interaction.",
//         "Integrated Razorpay for secure payment processing with full transaction workflow using .env for API credentials.",
//         "Built an invoice and billing system allowing users to generate invoices, download them as PDFs (PDFKit), and share via WhatsApp (Twilio) and email.",
//       ],
//     },
//     {
//       company: "GeeksforGeeks",
//       role: "Full Stack Developer",
//       duration: "Dec 2024 – April 2025",
//       location: "Noida, India",
//       logo: gfgLogo,
//       points: [
//         "Developed a 3D sneaker commerce website using React.js, TailwindCSS, React Three Fiber, and GLTF models.",
//         "Built a Restaurant Reservation App using MERN stack (React, Express.js, MongoDB, Node.js) with Rich Text Editor (TinyMCE).",
//         "Integrated secure login/logout and session management via Appwrite.",
//         "Developed a weather forecast application using free weather APIs.",
//       ],
//     },
//   ];

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <Navbar />

//       <div className="max-w-5xl mx-auto px-6 py-20">
//         {/* Page Title */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
//           My <span className="text-purple-400">Experience</span>
//         </h1>

//         {/* Timeline */}
//         <div className="relative border-l border-gray-700 ml-6">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="mb-12 ml-6"
//             >
//               {/* Logo Dot */}
//               <span className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-black border border-purple-500 rounded-full shadow-lg overflow-hidden">
//                 <img
//                   src={exp.logo}
//                   alt={exp.company}
//                   className="w-10 h-10 object-contain hover:scale-110 transition-transform"
//                 />
//               </span>

//               {/* Card */}
//               <div className="bg-gradient-to-r from-purple-900/40 to-black p-6 rounded-xl shadow-lg hover:shadow-purple-600/30 transition">
//                 <h2 className="text-2xl font-bold text-purple-300">
//                   {exp.company}
//                 </h2>
//                 <p className="text-lg font-semibold">{exp.role}</p>
//                 <p className="text-sm text-gray-400">
//                   {exp.duration} • {exp.location}
//                 </p>

//                 <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-300">
//                   {exp.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
