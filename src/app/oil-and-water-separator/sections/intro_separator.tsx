'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Intro_Separator: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] text-[#111] py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Trusted Oil-Water Separation Since 1941
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center md:text-left max-w-5xl mx-auto text-gray-700 text-lg md:text-xl leading-relaxed space-y-6"
        >
          <p>
            When it comes to managing <span className="font-semibold text-[#c62931]">oily wastewater</span> and 
            <span className="font-semibold text-[#c62931]"> stormwater runoff</span>, nothing beats decades of expertise 
            paired with precision engineering. At <span className="font-semibold">Metal Products Company</span>, 
            we’ve been building dependable, <span className="font-semibold">USA-made oil-water separators</span> since 1941. 
            That legacy of reliability ensures your facility gets a system engineered for both 
            <span className="font-semibold"> compliance and durability</span>.
          </p>

          <p>
            Our separators are expertly crafted to remove oils, fuels, and hydrocarbons from water streams — 
            helping you meet environmental standards and avoid costly fines. Built in 
            <span className="font-semibold"> Suwanee, GA</span> and shipped nationwide, these separators 
            stand up to tough industrial conditions with ease.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Separator;
