'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Intro_AboveGround: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] text-[#111] py-24">
      <div className="max-w-[1440px] mx-auto px-6 scrn-750:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl scrn-750:text-4xl font-extrabold mb-4">
            Built Tough & Trusted Since 1941
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center scrn-750:text-left max-w-5xl mx-auto text-gray-700 text-lg scrn-750:text-xl leading-relaxed space-y-6"
        >
          <p>
            When your operations demand rugged, dependable fuel storage, you need a tank that can keep up—not just today, 
            but for decades. At <span className="font-semibold">Metal Products Company</span>, we’re proud to say we’ve 
            been <span className="font-semibold">Building Trust Since 1941 </span> 
            by crafting <span className="font-semibold">heavy-duty above ground tanks</span> that stand the test of time.
          </p>
          <p>
            Designed and built in the U.S., our tanks bring together durability, corrosion resistance, 
            and ease of maintenance—so you can focus on what you do best, knowing your fuel storage is solid.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_AboveGround;
