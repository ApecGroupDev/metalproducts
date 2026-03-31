"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Gas stations & convenience stores needing secure underground storage",
  "Industrial facilities managing hazardous or flammable liquids",
  "Municipal and government sites requiring reliable underground containment",
  "Fleet operators and service centers needing underground fuel systems",
  "Environmental compliance engineers seeking dependable infrastructure",
];

const Benefits_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .ugb-display { font-family: 'Oswald', sans-serif; }
        .ugb-mono    { font-family: 'Space Mono', monospace; }

        .ugb-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ugb-card {
          border-left: 2px solid rgba(198,41,49,0.3);
          transition: border-color 0.3s, transform 0.3s;
        }
        .ugb-card:hover {
          border-color: #c62931;
          transform: translateX(6px);
        }
      `}</style>

      <div className="absolute inset-0 ugb-paper-grid pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="ugb-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Industries Served
            </span>
          </div>
          <h2 className="ugb-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Who Benefits from
            <br />
            <span className="text-[#c62931]">Our Tanks</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="ugb-card pl-5 py-4"
            >
              <p className="ugb-mono text-[#555] text-sm leading-7">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits_Underground;
