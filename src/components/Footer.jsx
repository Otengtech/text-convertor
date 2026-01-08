// components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data for social links
  const socialLinks = [
    { Icon: FaYoutube, href: "www.youtube.com/@oteng_dev", label: "Youtube" },
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaFacebook, href: "#", label: "Facebook" },
  ];

  // Data for quick links
  const quickLinks = ["Home", "About", "Scanner", "OtherTools"];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black/90 border-t border-gold/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <FaFileAlt className="text-gold text-2xl" />
              <span className="text-white font-bold text-xl">DocScan Pro</span>
            </div>

            <p className="text-gray-200 mb-6 leading-relaxed">
              Advanced document scanning and text extraction powered by AI
              technology.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-200 hover:text-gold transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-200 hover:text-gold transition-colors duration-200 block py-1 hover:translate-x-1 transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section - Commented out but structured for easy enablement */}

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>

            <ul className="space-y-3 text-gray-200">
              <li className="flex items-center space-x-2">
                <span>otengebenezer326@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>(+233) 593-957-373</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Accra, Ghana</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-200 text-center md:text-left">
            © {currentYear} DocScan Pro. All rights reserved.
          </p>

          <p className="text-gray-300 text-center md:text-right">
            Free forever for personal use
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
