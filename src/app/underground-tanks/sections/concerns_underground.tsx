'use client';

import React from 'react';
import { motion } from 'framer-motion';

const concerns = [
  {
    question: "“Are these tanks EPA-compliant?”",
    answer:
      "Absolutely — they’re manufactured to satisfy EPA storage requirements and local codes.",
  },
  {
    question: "“Can these tanks withstand soil pressure?”",
    answer:
      "Yes — designed with reinforced wall construction and tested to endure tough underground conditions.",
  },
  {
    question: "“How easy is it to monitor or inspect?”",
    answer:
      "Easy — our tanks include access ports for inspection and monitoring without disruptive excavation.",
  },
];

const Concerns_Underground: React.FC = () => {
  return (
    <section className="bg-white text-[#111] py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Addressing Your Top Concerns
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {concerns.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-[#f8f8f8] rounded-2xl p-8 border border-red-600 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <p className="text-[#c62931] text-lg md:text-xl font-semibold mb-3 italic">
                {item.question}
              </p>
              <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerns_Underground;
