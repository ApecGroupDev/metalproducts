"use client";

import React from "react";
import { motion } from "framer-motion";

const Intro_OTR: React.FC = () => {
  return (
    <section className="relative py-24 scrn-1000:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8 text-center scrn-1000:text-left">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl scrn-600:text-5xl font-extrabold text-[#c62931] leading-tight"
        >
          Built for Oilfield Toughness Since 1941
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="h-[4px] w-24 bg-[#c62931] mx-auto scrn-1000:mx-0 mt-5 rounded-full"
        ></motion.div>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-gray-800 text-lg scrn-600:text-xl leading-relaxed mx-auto scrn-1000:mx-0"
        >
          When the job demands rugged, dependable storage in harsh oilfield environments, you need a tank that’s up to the task. At
          <span className="font-semibold text-[#c62931]"> Metal Products Company</span>, we’ve been
          <span className="font-semibold text-[#c62931]"> Building Trust Since 1941</span>,
          delivering oilfield tanks engineered for safety, durability, and environmental protection.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 text-gray-800 text-lg scrn-600:text-xl leading-relaxed mx-auto scrn-1000:mx-0"
        >
          Made in the USA, our tanks are built to handle the toughest conditions—whether you’re storing drilling fluids,
          crude oil, or delivery supplies. With decades of experience, we're the partner you can count on to keep operations
          running smoothly, safely, and responsibly.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro_OTR;
