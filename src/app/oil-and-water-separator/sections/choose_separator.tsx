'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Heritage of quality",
    text: "building trust since 1941",
  },
  {
    title: "US-manufactured",
    text: "proudly built in Suwanee, GA",
  },
  {
    title: "EPA and local compliance-ready",
    text: "designed for SPCC and stormwater standards",
  },
  {
    title: "Heavy-duty, long-lasting build",
    text: "engineered for industrial strength",
  },
  {
    title: "Custom-fit designs",
    text: "tailored to your facility’s flow and footprint",
  },
  {
    title: "Trusted by fueling stations",
    text: "municipalities, and contractors nationwide",
  },
];

const Choose_Separator: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
            Why Choose Our Oil-Water Separators?
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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

export default Choose_Separator;
