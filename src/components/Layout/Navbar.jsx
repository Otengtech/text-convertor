import React, { useState } from 'react';
import { FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Scanner', href: '#scanner' },
    { name: 'Other Tools', href: '#othertools' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-lg border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center space-x-2"
          >
            <FaFileAlt className="text-gold text-2xl" />
            <span className="text-white font-bold text-xl">
              DocScan<span className="text-gold text-sm ml-1">.online</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-gold hover:bg-white/5 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-gold hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;