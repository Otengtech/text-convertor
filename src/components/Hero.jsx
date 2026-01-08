// components/Hero.jsx
import React, { useState, useEffect } from "react";
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
  const [cursorVisible, setCursorVisible] = useState(true);

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

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff10_1px,transparent_0)] bg-[length:60px_60px]" />
      </div>

      {/* Floating glow orbs - CSS animations */}
      <div className="absolute top-1/3 left-1/4 w-52 h-52 bg-yellow-400/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float-slower" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 max-w-xl mx-auto lg:mx-0 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight h-[4.5rem] sm:h-[5rem] flex items-center">
            <span className="inline-flex items-center flex-wrap">
              <span className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className={`ml-1 text-yellow-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                |
              </span>
            </span>
          </h1>

          <p className="text-gray-200 text-base md:text-lg leading-relaxed animate-fade-in-delay">
            Transform your documents with AI precision. Extract text, create
            searchable PDFs, and secure your files — all in seconds.
          </p>

          {/* Feature highlights */}
          <div className="space-y-3 mb-6">
            {[
              {
                icon: FaMagic,
                text: "AI-powered text recognition",
                color: "text-yellow-400",
                delay: "delay-100"
              },
              {
                icon: FaShieldAlt,
                text: "Bank-level document security",
                color: "text-yellow-400",
                delay: "delay-200"
              },
              {
                icon: FaDownload,
                text: "Instant PDF download",
                color: "text-yellow-300",
                delay: "delay-300"
              },
            ].map((item, index) => (
              <div 
                key={item.text} 
                className={`flex items-center gap-3 animate-slide-in-left ${item.delay}`}
              >
                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                  <item.icon className="text-base" />
                </div>
                <span className="text-gray-300 text-base md:text-lg">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Floating dots */}
          <div className="flex items-center mt-4 md:mt-8 space-x-3">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-10 h-10 rounded-full ${
                  i % 2 === 0 ? "bg-yellow-500" : "bg-white"
                } bounce-dot`}
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — AI Card */}
        <div className="relative flex flex-col items-center justify-center animate-scale-in">
          {/* Main Card Container */}
          <div className="relative w-full hover:translate-y-[-5px] transition-transform duration-300">
            <div className="bg-gradient-to-br w-full from-gray-800/50 to-gray-900/30 border border-yellow-400/20 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              {/* Document Preview */}
              <div className="bg-black/40 rounded-xl p-5 border border-yellow-400/10">
                <div className="flex items-center gap-3 mb-4 animate-fade-in">
                  <div className="animate-gentle-rotate">
                    <FaFilePdf className="text-yellow-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">
                      document.pdf
                    </h3>
                    <p className="text-yellow-300 text-xs">
                      AI Processed • Ready to download
                    </p>
                  </div>
                </div>

                {/* Document Content Lines */}
                <div className="space-y-2 bg-white/5 rounded-lg p-3">
                  {[1, 2, 3, 4].map((line) => (
                    <div 
                      key={line} 
                      className={`flex gap-2 items-center animate-slide-in-left delay-${line * 150}`}
                      style={{ animationDelay: `${0.8 + line * 0.15}s` }}
                    >
                      <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full flex-shrink-0 animate-pop-in" />
                      <div 
                        className={`h-2 bg-gradient-to-r from-yellow-400/60 to-yellow-300/40 rounded-full animate-expand-width ${line % 2 === 0 ? 'w-3/4' : 'w-full'}`}
                        style={{ animationDelay: `${1 + line * 0.15}s` }}
                      />
                    </div>
                  ))}
                </div>

                {/* Processing Bar */}
                <div className="relative h-1 rounded-full mt-4 bg-gray-700 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 animate-scanning-bar"></div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black p-3 rounded-full shadow-lg animate-pop-in hover:scale-110 hover:rotate-12 transition-all duration-200">
                <FaMagic className="text-sm" />
              </div>

              <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black p-3 rounded-full shadow-lg animate-pop-in-delay hover:scale-110 hover:-rotate-12 transition-all duration-200">
                <FaShieldAlt className="text-sm" />
              </div>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 w-full animate-fade-in-up">
            <a href="#scanner" className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold text-base px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-yellow-400/40 hover:-translate-y-0.5 active:scale-95">
              <span className="animate-gentle-shake">
                <FaUpload />
              </span>
              Start Scanning
            </a>

            <a href="#othertools" className="border border-yellow-400/50 text-yellow-300 bg-yellow-400/10 px-6 py-3 rounded-full font-semibold text-base backdrop-blur-sm transition-all duration-300 shadow-lg hover:bg-yellow-400/20 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
              Other Tools
            </a>
          </div>

          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 rounded-2xl blur-xl -z-10 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;