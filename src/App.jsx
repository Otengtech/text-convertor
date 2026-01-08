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
import OtherTools from "./components/OtherTools";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>

      <div className={`${isLoading ? "hidden" : "block"}`}>
        <Navbar />
        <Hero />
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
