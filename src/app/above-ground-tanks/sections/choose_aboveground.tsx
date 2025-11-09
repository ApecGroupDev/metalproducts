'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Decades of expertise",
    text: "Building Trust Since 1941",
  },
  {
    title: "USA-manufactured",
    text: "made in Suwanee, GA",
  },
  {
    title: "Heavy-duty build",
    text: "designed for industrial environments",
  },
  {
    title: "Corrosion-resistant",
    text: "protected against weather and elements",
  },
  {
    title: "Secure and easy to service",
    text: "optimized for safe operations and low maintenance",
  },
  {
    title: "Industry-trusted",
    text: "used by gas stations, fleets, and commercial operations nationwide",
  },
];

const Choose_AboveGround: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 scrn-750:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl scrn-750:text-4xl font-extrabold text-[#111] mb-4">
            Why Choose Our Above Ground Tanks?
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid scrn-750:grid-cols-2 scrn-1000:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-[#f9f9f9] rounded-2xl border border-gray-100 hover:border-[#c62931]/40 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-[#c62931] font-semibold text-xl mb-2 group-hover:translate-x-1 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose_AboveGround;
