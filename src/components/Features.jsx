// components/Features.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMagic, FaLock, FaBolt, FaMobile } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaMagic,
      title: "AI-Powered OCR",
      description:
        "Advanced optical character recognition with 99.9% accuracy for perfect text extraction.",
      image:
        "https://media.istockphoto.com/id/2170889984/photo/digital-abstract-cpu-ai-artificial-intelligence-and-machine-learning-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=zGSV2_Jth30uGNDD7g-XV-nJTxRL2HH2O3qJH7T3AV4=",
      color: "text-purple-400",
    },
    {
      icon: FaBolt,
      title: "Lightning Fast",
      description:
        "Process documents in seconds with our optimized scanning algorithms.",
      image:
        "https://plus.unsplash.com/premium_photo-1681488162344-542e0b7c3378?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlnaHRuaW5nJTIwRmFzdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      color: "text-yellow-400",
    },
    {
      icon: FaLock,
      title: "Bank-Level Security",
      description:
        "Your documents are encrypted and automatically deleted after processing.",
      image:
        "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      color: "text-green-400",
    },
    {
      icon: FaMobile,
      title: "Fully Responsive",
      description:
        "Works perfectly on all devices - desktop, tablet, and mobile.",
      image:
        "https://plus.unsplash.com/premium_photo-1681487899272-f0e55f4fb7e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzcG9uc2l2ZSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-28 lg:px-28">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-yellow-500">Features</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Everything you need for professional document scanning and
            management
          </p>
        </motion.div>

        {/* Features Grid - split into left & right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-900 rounded-xl transition-all duration-300"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-52 h-48 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className={`${feature.color} text-2xl`} />
                      <h3 className="text-white font-bold text-lg">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-900 rounded-xl transition-all duration-300"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-52 h-48 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <feature.icon className={`${feature.color} text-2xl`} />
                      <h3 className="text-white font-bold text-lg">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
