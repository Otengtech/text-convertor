// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 border-t border-gold/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12">
        <div className="flex md:flex-col items-center justify-between space-x-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaFileAlt className="text-gold text-2xl" />
              <span className="text-white font-bold text-xl">DocScan Pro</span>
            </div>
            <p className="text-gray-200 mb-4">
              Advanced document scanning and text extraction powered by AI technology.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaGithub, FaLinkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-200 hover:text-gold transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Features', 'Scanner'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-200 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Documentation', 'API', 'Support', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* Contact */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>hello@docscanpro.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </motion.div> */}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-100 flex items-center">
            © {currentYear} DocScan Pro.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0">
            Free forever for personal use
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;