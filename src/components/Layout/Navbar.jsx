// components/Layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home',
      id: 'home',
      ariaLabel: 'Go to homepage section'
    },
    { 
      name: 'About', 
      href: '#about',
      id: 'about',
      ariaLabel: 'Learn about DocScan features'
    },
    { 
      name: 'How It Works', 
      href: '#how-it-works',
      id: 'how-it-works',
      ariaLabel: 'See how to use DocScan step by step'
    },
    { 
      name: 'Scanner', 
      href: '#scanner',
      id: 'scanner',
      ariaLabel: 'Access the text extraction scanner tool'
    },
    { 
      name: 'Other Tools', 
      href: '#othertools',
      id: 'othertools',
      ariaLabel: 'Explore additional AI tools'
    },
  ];

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL for SEO
      window.history.pushState(null, '', href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg border-b border-gold/30 shadow-lg' 
          : 'bg-black/80 backdrop-blur-md border-b border-gold/20'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with SEO-friendly link */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home', 'home')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 rounded-lg p-1"
            aria-label="DocScan - Go to homepage"
          >
            <FaFileAlt className="text-gold text-2xl" aria-hidden="true" />
            <span className="text-white font-bold text-xl">
              DocScan<span className="text-gold text-sm ml-1">.online</span>
            </span>
          </motion.a>

          {/* Desktop Navigation - Semantic */}
          <nav className="hidden md:block" aria-label="Desktop navigation">
            <ul className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    aria-label={item.ariaLabel}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? 'text-gold bg-gold/10 ring-1 ring-gold/20'
                        : 'text-gray-300 hover:text-gold hover:bg-white/5'
                    } focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="block h-0.5 bg-gold mt-1 mx-auto w-6"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button with proper ARIA */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 p-2 rounded-lg"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <FaTimes size={24} aria-hidden="true" />
              ) : (
                <FaBars size={24} aria-hidden="true" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Semantic HTML */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-t border-gold/20"
            role="menu"
          >
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  role="none"
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    role="menuitem"
                    aria-label={item.ariaLabel}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    className={`block px-3 py-3 rounded-lg text-base font-medium ${
                      activeSection === item.id
                        ? 'text-gold bg-gold/10'
                        : 'text-gray-300 hover:text-gold hover:bg-white/5'
                    } focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50`}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;