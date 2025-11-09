'use client';

import React from 'react';
import { motion } from 'framer-motion';

const trustPoints = [
  "A heritage of trust—Building Trust Since 1941",
  "UL-listed manufacturing standards",
  "Active membership in the Petroleum Equipment Institute (PEI)",
  "A rich portfolio of installations across commercial and government sectors",
];

const Trust_AboveGround: React.FC = () => {
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
            Why Clients Trust Us
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
              For more than 80 years, Metal Products Company has been the go-to manufacturer
              for superior above-ground gas tanks across the U.S. Our reputation is grounded in:
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
              Recent Example:
            </h3>
            <p className="text-gray-800 text-base scrn-750:text-lg leading-relaxed">
              A regional delivery company installed a fleet of our above ground tanks to support its operations. The tanks
              performed flawlessly, and maintenance crews appreciated how easy they were to service—earning praise during safety audits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust_AboveGround;
