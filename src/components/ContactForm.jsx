"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Confetti from "react-confetti";

// Central toast with confetti
const SuccessNotification = ({ message, onClose }) => (
  <>
    <Confetti
      numberOfPieces={150}
      recycle={false}
      gravity={0.3}
      initialVelocityX={{ min: -10, max: 10 }}
      initialVelocityY={{ min: -10, max: 10 }}
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.5, y: -50 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-5 rounded-3xl shadow-2xl z-50 flex flex-col items-center justify-center text-center gap-4"
    >
      <span className="text-lg font-bold">{message}</span>
      <button
        onClick={onClose}
        className="bg-white text-purple-600 px-4 py-1 rounded-full font-semibold hover:bg-gray-200 transition"
      >
        Close
      </button>
    </motion.div>
  </>
);

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mgvlblnv"); // Formspree ID
  const [showNotification, setShowNotification] = React.useState(false);

  React.useEffect(() => {
    if (state.succeeded) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <>
      <AnimatePresence>
        {showNotification && (
          <SuccessNotification
            message="Message sent successfully! 🎉"
            onClose={() => setShowNotification(false)}
          />
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl mx-auto p-10 md:p-12 bg-gradient-to-br from-gray-900/90 to-gray-950/80 backdrop-blur-lg rounded-3xl border border-purple-600/30 shadow-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Contact Me
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Let's build something amazing together.
          </p>
        </div>

        <div className="space-y-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-4 text-white placeholder-gray-400 bg-gray-900/70 border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full p-4 text-white placeholder-gray-400 bg-gray-900/70 border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 text-white placeholder-gray-400 bg-gray-900/70 border border-purple-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </motion.div>
        </div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-4 rounded-full font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:shadow-purple-700 transition-all flex justify-center items-center gap-2"
        >
          <FaPaperPlane className="text-lg" />
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </>
  );
}
