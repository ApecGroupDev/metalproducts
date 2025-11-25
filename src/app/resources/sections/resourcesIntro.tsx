"use client";

import React from "react";
import { motion } from "framer-motion";

const ResourcesIntro: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold text-[#c62931] leading-tight"
        >
          Your Source for Product Information & Support
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-[4px] w-24 bg-[#c62931] mx-auto lg:mx-0 mt-5 rounded-full"
        ></motion.div>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-gray-800 text-lg sm:text-xl leading-relaxed mx-auto lg:mx-0"
        >
          Explore our collection of downloadable resources designed to help you get the most out of your 
          <span className="font-semibold text-[#c62931]"> Metal Products Company </span>
          solutions. From tank specifications and installation guides to safety sheets and certifications, everything you need is right here.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 text-gray-800 text-lg sm:text-xl leading-relaxed mx-auto lg:mx-0"
        >
          Whether you’re a contractor, engineer, or operator, our resource library provides quick access to the technical documents
          and reference materials you need to plan, build, and maintain your tank systems with confidence.
        </motion.p>
      </div>
    </section>
  );
};

export default ResourcesIntro;
