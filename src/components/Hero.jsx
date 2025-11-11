// components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaDownload,
  FaUpload,
  FaShieldAlt,
  FaMagic,
} from "react-icons/fa";

const Hero = () => {
  // Typewriter animation setup
  const phrases = ["Document to Text", "Text Extraction", "PDF Conversion"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[index];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[length:60px_60px]" />
      </div>

      {/* Floating glow orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 w-52 h-52 bg-yellow-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight h-[4.5rem] sm:h-[5rem] flex items-center"
          >
            <span className="inline-flex items-center flex-wrap">
              <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1 text-yellow-400"
              >
                |
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-200 text-base md:text-lg leading-relaxed"
          >
            Transform your documents with AI precision. Extract text, create
            searchable PDFs, and secure your files — all in seconds.
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3 mb-6"
          >
            {[
              {
                icon: FaMagic,
                text: "AI-powered text recognition",
                color: "text-yellow-400",
              },
              {
                icon: FaShieldAlt,
                text: "Bank-level document security",
                color: "text-yellow-400",
              },
              {
                icon: FaDownload,
                text: "Instant PDF download",
                color: "text-yellow-300",
              },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                  <item.icon className="text-base" />
                </div>
                <span className="text-gray-300 text-base md:text-lg">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating dots */}
          <div className="flex items-center mt-4 md:mt-8 space-x-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${
                  i % 2 === 0 ? "bg-yellow-500" : "bg-white"
                } animate-bounce`}
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — AI Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Main Card Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-gradient-to-br w-full from-gray-800/50 to-gray-900/30 border border-yellow-400/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl"
            >
              {/* Document Preview */}
              <div className="bg-black/40 rounded-xl p-5 border border-yellow-400/10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaFilePdf className="text-yellow-400 text-xl" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-base">
                      document.pdf
                    </h3>
                    <p className="text-yellow-300 text-xs">
                      AI Processed • Ready to download
                    </p>
                  </div>
                </motion.div>

                {/* Document Content Lines */}
                <div className="space-y-2 bg-white/5 rounded-lg p-3">
                  {[1, 2, 3, 4].map((line) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.8 + line * 0.15,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="flex gap-2 items-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.9 + line * 0.15,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="w-2.5 h-2.5 bg-yellow-400 rounded-full flex-shrink-0"
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: line % 2 === 0 ? "75%" : "100%" }}
                        transition={{
                          delay: 1 + line * 0.15,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        className="h-2 bg-gradient-to-r from-yellow-400/60 to-yellow-300/40 rounded-full"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Processing Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    delay: 1.4,
                    duration: 1.2,
                    ease: "easeInOut",
                  }}
                  className="relative h-1 rounded-full mt-4 bg-gray-700 overflow-hidden"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 0.5,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                  />
                </motion.div>
              </div>

              {/* Floating Icons */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.2 },
                }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black p-3 rounded-full shadow-lg"
              >
                <FaMagic className="text-sm" />
              </motion.div>

              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 150,
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: -10,
                  transition: { duration: 0.2 },
                }}
                className="absolute -bottom-3 -left-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black p-3 rounded-full shadow-lg"
              >
                <FaShieldAlt className="text-sm" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-3 pt-6 w-full"
          >
            <motion.button
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px -8px rgba(255, 215, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                hover: { duration: 0.2 },
              }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-base px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
            >
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaUpload />
              </motion.span>
              Start Scanning
            </motion.button>

            <motion.button
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 30px -8px rgba(255, 215, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                hover: { duration: 0.2 },
              }}
              className="border border-yellow-400/50 text-yellow-300 bg-yellow-400/10 px-6 py-3 rounded-full font-semibold text-base backdrop-blur-sm transition-all duration-300 shadow-lg hover:bg-yellow-400/20"
            >
              View Demo
            </motion.button>
          </motion.div>

          {/* Background Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 rounded-2xl blur-xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
