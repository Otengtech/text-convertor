// components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaAward, FaLightbulb, FaCheck, FaSync, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const stats = [
    { number: "10K+", label: "Documents Scanned", icon: FaRocket },
    { number: "99.9%", label: "Accuracy Rate", icon: FaAward },
    { number: "5K+", label: "Happy Users", icon: FaUsers },
    { number: "24/7", label: "Available", icon: FaLightbulb }
  ];

  const features = [
    { icon: FaCheck, text: "AI-powered text recognition", color: "text-green-500" },
    { icon: FaSync, text: "Real-time processing", color: "text-blue-500" },
    { icon: FaShieldAlt, text: "Secure encryption", color: "text-purple-500" },
    { icon: FaRocket, text: "Lightning fast results", color: "text-orange-500" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Content - Now on LEFT */}
          <motion.div
            className="relative order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-1 shadow-2xl">
              <div className="bg-gray-600 rounded-xl p-8">
                {/* Document Preview */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <FaRocket className="text-black text-lg" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-xl">Smart Document Processing</h3>
                      <p className="text-yellow-300 text-sm">AI-powered analysis</p>
                    </div>
                  </div>
                  
                  {/* Processing Animation */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg"
                      >
                        <motion.div
                          className="w-2 h-2 bg-yellow-400 rounded-full"
                        />
                        <div className="flex-1 space-y-2">
                          <motion.div 
                            className="h-2 bg-gray-200 rounded-full"
                          />
                          <motion.div 
                            className="h-2 bg-gray-200 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-black/40 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 bg-yellow-400 text-black p-4 rounded-full shadow-lg"
                >
                  <FaAward size={20} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-4 rounded-full shadow-lg"
                >
                  <FaRocket size={20} />
                </motion.div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-yellow-400/10 rounded-2xl blur-3xl -z-10 transform scale-110"></div>
          </motion.div>

          {/* Text Content - Now on RIGHT */}
          <motion.div
            className="order-1 lg:order-2"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-400/40 rounded-full px-4 py-2 mb-6"
            >
              <FaAward className="text-yellow-500 text-sm" />
              <span className="text-yellow-500 text-sm font-medium">Trusted by Thousands</span>
            </motion.div>

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Revolutionizing <span className="text-yellow-500">Document</span> Management
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our advanced document scanning technology combines cutting-edge OCR with intelligent 
              layout analysis to deliver perfect digital copies every time.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-gray-900 rounded-xl transition-all"
                >
                  <stat.icon className="text-yellow-500 text-2xl mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-300">{stat.number}</div>
                  <div className="text-gray-100 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;