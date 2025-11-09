'use client';

import React from 'react';
import { motion } from 'framer-motion';

const trustPoints = [
  "A proven record Building Trust Since 1941",
  "UL-listed manufacturing standards",
  "Membership in the Petroleum Equipment Institute (PEI)",
  "A strong portfolio of commercial and government installations",
];

const Trust_Separator: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] text-[#111] py-24">
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
            Why Our Customers Trust Us
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Split Section */}
        <div className="flex flex-col scrn-900:flex-row gap-12 scrn-900:gap-20 items-start">
          {/* Left Side – Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-lg scrn-750:text-xl text-gray-800 leading-relaxed mb-8">
              For over 80 years, clients nationwide have turned to Metal Products 
              Company for fuel tanks and separators built to last. Our reputation is backed by:
            </p>

            <ul className="space-y-4">
              {trustPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 mt-2 bg-[#c62931] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium text-base scrn-750:text-lg leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side – Case Study Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-[#c62931] font-bold text-xl scrn-750:text-2xl mb-4">
              Case in Point:
            </h3>
            <p className="text-gray-800 text-base scrn-750:text-lg leading-relaxed">
              A regional trucking fleet in Texas recently installed our separator and passed stormwater 
              inspections with ease — thanks to our precise design and built-in reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust_Separator;
