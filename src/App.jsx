// App.jsx
import React, { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Scanner from "./components/Scanner";
import Footer from "./components/Footer";
import Loading from "./components/Layout/Loading";
import SEOHead from "./components/SEO/SEOHead";
import GoogleAnalytics from "./components/SEO/GoogleAnalytics";
import SchemaMarkup from "./components/SEO/SchemaMarkup";

// Lazy load heavy components
const OtherTools = lazy(() => import("./components/OtherTools"));

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Set active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'how-it-works', 'about', 'scanner', 'othertools'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update URL hash for SEO when section changes
  useEffect(() => {
    if (activeSection !== 'home') {
      window.history.replaceState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Components */}
      <SEOHead activeSection={activeSection} />
      <GoogleAnalytics />
      <SchemaMarkup />
      
      <AnimatePresence mode="wait">{isLoading && <Loading />}</AnimatePresence>

      <div className={`${isLoading ? "hidden" : "block"}`}>
        <Navbar activeSection={activeSection} />
        <main id="home">
          <Hero />
        </main>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="scanner">
          <Scanner />
        </section>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center">Loading AI Tools...</div>}>
          <section id="othertools">
            <OtherTools />
          </section>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;