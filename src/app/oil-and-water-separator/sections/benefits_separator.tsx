'use client';

import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  "Gas stations & fueling facilities managing petroleum runoff",
  "Industrial sites with oily wastewater discharge",
  "Municipalities focused on stormwater compliance",
  "Commercial operations like fleet and auto service centers",
  "Environmental engineers & contractors sourcing reliable solutions",
];

const Benefits_Separator: React.FC = () => {
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
            Who Benefits from Our Separators
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid scrn-750:grid-cols-2 scrn-1000:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#f8f8f8] p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#c62931]/40 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                {/* Accent Line */}
                <div className="w-[5px] h-10 bg-[#c62931] rounded-full mt-1 group-hover:h-12 transition-all duration-300"></div>

                {/* Text */}
                <p className="text-gray-800 leading-relaxed font-medium">
                  {benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits_Separator;
