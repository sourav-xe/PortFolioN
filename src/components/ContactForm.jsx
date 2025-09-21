"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Confetti from "react-confetti";
import Particles from "./ParticlesBg";

const SuccessNotification = ({ message, onClose }) => (
  <>
    <Confetti numberOfPieces={120} recycle={false} gravity={0.3} />
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: -50 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 bg-gradient-to-r from-purple-600 to-pink-500 text-white 
                 px-8 py-6 rounded-3xl shadow-2xl z-50 flex flex-col 
                 items-center justify-center text-center gap-4"
    >
      <span className="text-lg font-bold">{message}</span>
      <button
        onClick={onClose}
        className="bg-white text-purple-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Close
      </button>
    </motion.div>
  </>
);

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgvlblnv");
  const [showNotification, setShowNotification] = React.useState(false);

  React.useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="relative w-full z-10">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatePresence>
          {showNotification && (
            <SuccessNotification
              message="Message sent successfully 🎉"
              onClose={() => setShowNotification(false)}
            />
          )}
        </AnimatePresence>

        {/* Unified Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 md:p-12 bg-gradient-to-br from-gray-900/80 to-black/80 
                     backdrop-blur-lg rounded-3xl border border-purple-600/30 
                     shadow-2xl relative"
        >
          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-extrabold mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                Contact Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Let’s collaborate and create something impactful 🚀
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 text-white placeholder-gray-400 bg-gray-900/70 
                         border border-purple-600 rounded-xl focus:outline-none 
                         focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm" />

            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full p-4 text-white placeholder-gray-400 bg-gray-900/70 
                         border border-purple-600 rounded-xl focus:outline-none 
                         focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 text-white placeholder-gray-400 bg-gray-900/70 
                         border border-purple-600 rounded-xl focus:outline-none 
                         focus:ring-2 focus:ring-purple-500 transition resize-none"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm" />

            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-4 rounded-full font-bold text-white 
                         bg-gradient-to-r from-purple-500 to-pink-500 
                         shadow-lg hover:shadow-purple-700 transition-all 
                         flex justify-center items-center gap-2"
            >
              <FaPaperPlane className="text-lg" />
              {state.submitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />

          {/* Social + Resume */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Icons */}
            <div className="flex gap-6 text-3xl">
              <a href="https://github.com/sourav-xe" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition text-gray-300 hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sourav-kumar-a80020345/" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition text-blue-500">
                <FaLinkedin />
              </a>
              <a href="mailto:sourav20kumar02@gmail.com" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition text-red-500">
                <SiGmail />
              </a>
              <a href="https://wa.me/9311099671" target="_blank" rel="noopener noreferrer"
                 className="hover:scale-125 transition text-green-500">
                <FaWhatsapp />
              </a>
            </div>

            {/* Resume Buttons */}
            <div className="flex gap-4">
              <a href="https://drive.google.com/file/d/1QI1l6AsdIdtj8RPQ_jd6piYxnF8tanOQ/view?usp=sharing"
                 target="_blank"
                 className="px-6 py-3 rounded-xl font-semibold text-white 
                            bg-gradient-to-r from-purple-500 to-pink-500 
                            shadow-lg hover:scale-105 transition">
                View Resume
              </a>
              <a href="https://drive.google.com/uc?export=download&id=1QI1l6AsdIdtj8RPQ_jd6piYxnF8tanOQ"
                 className="px-6 py-3 rounded-xl font-semibold text-white 
                            bg-gradient-to-r from-cyan-500 to-blue-500 
                            shadow-lg hover:scale-105 transition">
                Download
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
