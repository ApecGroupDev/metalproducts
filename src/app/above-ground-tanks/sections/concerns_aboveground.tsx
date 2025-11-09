'use client';

import React from 'react';
import { motion } from 'framer-motion';

const concerns = [
  {
    question: "“Will the tank resist corrosion?”",
    answer:
      "Absolutely—our tanks are built with advanced corrosion-resistant coatings to withstand harsh conditions.",
  },
  {
    question: "“Is it secure and compliant?”",
    answer:
      "Yes—security features like locking ports help deter tampering, and our tanks are built for compliance with regulations in industrial settings.",
  },
  {
    question: "“How is maintenance handled?”",
    answer:
      "Designed for practicality—our inspection ports, sight gauges, and service-friendly layout keep maintenance hassle-free.",
  },
];

const Concerns_AboveGround: React.FC = () => {
  return (
    <section className="bg-white text-[#111] py-24">
      <div className="max-w-[1440px] mx-auto px-6 scrn-750:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl scrn-750:text-4xl font-extrabold mb-4">
            Addressing Your Common Questions
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid scrn-750:grid-cols-2 scrn-1000:grid-cols-3 gap-10">
          {concerns.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#f8f8f8] rounded-2xl p-8 border border-red-600 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-[#c62931] text-lg scrn-750:text-xl font-semibold mb-3 italic">
                {item.question}
              </p>
              <p className="text-gray-800 text-base scrn-750:text-lg leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerns_AboveGround;
