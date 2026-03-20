'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyHero: React.FC = () => {
  return (
    <section className="relative bg-[#111] text-white py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/backgrounds/textures/metal-pattern.webp')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#c62931] uppercase tracking-widest font-semibold text-sm mb-4"
        >
          Legal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Privacy Policy
        </motion.h1>
        <div className="mt-5 w-24 h-[4px] bg-[#c62931] mx-auto rounded-full" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto"
        >
          Effective Date: March 20, 2026 &nbsp;|&nbsp; Last Updated: March 20, 2026
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyHero;