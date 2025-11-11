// App.jsx
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Scanner from "./components/Scanner";
import Footer from "./components/Footer";
import Loading from "./components/Layout/Loading";
import OtherTools from "./components//OtherTools";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const container = document.getElementById("ad-container-300x250");
    if (container) {
      container.innerHTML = "";

      const script = document.createElement("script");
      script.innerHTML = `
        atOptions = {
          'key' : '6676d68ba7d23941b9617404b8afd159',
          'format' : 'iframe',
          'height' : 250,
          'width' : 300,
          'params' : {}
        };
      `;
      container.appendChild(script);

      const script2 = document.createElement("script");
      script2.src =
        "//www.highperformanceformat.com/6676d68ba7d23941b9617404b8afd159/invoke.js";
      script2.async = true;
      container.appendChild(script2);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>

      <div className={`${isLoading ? "hidden" : "block"}`}>
        <Navbar />
        <Hero />
        <div className="py-6 bg-gradient-to-br from-gray-900 to-black flex justify-center">
          <div id="ad-container-300x250"></div>
        </div>
        <HowItWorks />
        <About />
        <Scanner />
        <OtherTools />
        <Footer />
      </div>
    </div>
  );
}

export default App;
