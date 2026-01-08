// components/HowItWorksAlt.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaMagic, FaFilePdf, FaDownload, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    icon: FaUpload,
    title: "Upload Document",
    description: "Drag and drop your document or click to browse. We support images, PDFs, and scans.",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400"
  },
  {
    icon: FaMagic,
    title: "AI Processing",
    description: "Our advanced AI extracts text, recognizes layout, and enhances document quality.",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: FaFilePdf,
    title: "PDF Generation",
    description: "Convert to searchable PDF with preserved formatting and optimal file size.",
    color: "from-red-500 to-orange-500",
    iconColor: "text-red-400"
  },
  {
    icon: FaDownload,
    title: "Download & Share",
    description: "Get your perfect PDF instantly. Share or save to your preferred cloud storage.",
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-400"
  }
];

const HowItWorksAlt = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff20_1px,transparent_0)] bg-[length:50px_50px]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-6 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-yellow-300 text-sm font-medium">Simple 4-Step Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="text-yellow-400">Works</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your documents in four simple steps with our AI-powered scanning technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                >
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10 shadow-lg"
                  >
                    <span className="text-black font-bold text-lg">{index + 1}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <step.icon className="text-white text-2xl" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Step Indicator Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-yellow-400/60"
                      >
                        <FaArrowRight />
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl blur-xl opacity-10 -z-10`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a href="#scanner"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 cursor-pointer shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUpload />
            <span>Start Scanning Now - It's Free!</span>
          </motion.a>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-gray-400 mt-4 text-sm"
          >
            No credit card required • Process up to 10 documents free
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksAlt;