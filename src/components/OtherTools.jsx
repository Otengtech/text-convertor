// components/OtherTools.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaTools, FaMagic, FaRocket, FaStar } from 'react-icons/fa';

const OtherTools = () => {
  const tools = [
    {
      id: 1,
      name: "Background Remover",
      description: "Remove backgrounds from images instantly with AI-powered precision",
      link: "https://removerio.bond",
      status: "live",
      icon: FaMagic,
      color: "from-purple-500 to-pink-500",
      badge: "Popular"
    },
    {
      id: 2,
      name: "PDF Master",
      description: "Merge, split, and compress PDF files with ease",
      link: "#",
      status: "coming-soon",
      icon: FaTools,
      color: "from-blue-500 to-cyan-500",
      badge: "Soon"
    },
    {
      id: 3,
      name: "Code Formatter",
      description: "Automatically format and beautify your code in multiple languages",
      link: "#",
      status: "coming-soon",
      icon: FaRocket,
      color: "from-green-500 to-emerald-500",
      badge: "Soon"
    },
    {
      id: 4,
      name: "Image Optimizer",
      description: "Compress and optimize images without losing quality",
      link: "#",
      status: "coming-soon",
      icon: FaStar,
      color: "from-orange-500 to-red-500",
      badge: "Soon"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -5, 0],
      scale: 1.1,
      transition: {
        duration: 0.5
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden"
    id="othertools">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Other Tools</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover more powerful tools designed to streamline your workflow and boost productivity
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            const isLive = tool.status === "live";
            
            return (
              <motion.div
                key={tool.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 group-hover:border-gray-500/50 transition-all duration-300 h-full flex flex-col ${
                  isLive ? 'cursor-pointer' : 'cursor-not-allowed'
                }`}>
                  
                  {/* Status Badge */}
                  <div className="absolute -top-2 -right-2">
                    <motion.span
                      variants={isLive ? pulseVariants : {}}
                      animate={isLive ? "animate" : ""}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        isLive 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                          : 'bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300'
                      }`}
                    >
                      {tool.badge}
                    </motion.span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${tool.color} mb-4`}
                  >
                    <IconComponent className="text-white text-xl" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 flex-grow">
                    {tool.description}
                  </p>

                  {/* Action Button */}
                  <motion.a
                    href={isLive ? tool.link : "#"}
                    target={isLive ? "_blank" : "_self"}
                    rel={isLive ? "noopener noreferrer" : ""}
                    whileHover={{ scale: isLive ? 1.05 : 1 }}
                    whileTap={{ scale: isLive ? 0.95 : 1 }}
                    className={`inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                      isLive
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <span>
                      {isLive ? 'Visit Tool' : 'Coming Soon'}
                    </span>
                    {isLive && (
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </motion.div>
                    )}
                  </motion.a>

                  {/* Continuous shimmer effect for live tools */}
                  {isLive && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                  )}
                </div>

                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            More amazing tools are in development. Stay tuned! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherTools;