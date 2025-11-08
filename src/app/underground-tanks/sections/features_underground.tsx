'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  "Reinforced steel construction with corrosion protection",
  "Engineered for pressure resistance and soil load",
  "Seam-welded joints for leak prevention",
  "Built-in monitoring ports for easy inspections",
  "Available in various capacities and custom configurations",
  "Ideal for both petroleum and industrial fluid storage",
];

const Features_Underground: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] py-24 text-[#111]">
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
            Features That Set Us Apart
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid scrn-750:grid-cols-2 scrn-1000:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#c62931]/30 transition-all duration-300"
            >
              {/* Accent Circle */}
              <div className="w-3 h-3 mt-2 rounded-full bg-[#c62931] flex-shrink-0"></div>

              {/* Text */}
              <p className="text-gray-800 leading-relaxed font-medium">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features_Underground;
