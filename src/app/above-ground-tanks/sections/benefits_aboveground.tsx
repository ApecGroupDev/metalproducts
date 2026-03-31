"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "Gas stations & convenience stores needing robust fuel storage",
  "Industrial facilities requiring resilient above-ground containment",
  "Commercial fleets seeking secure and serviceable storage options",
  "Construction sites needing mobile, durable fuel storage",
  "Environmental managers and project engineers prioritizing safety and reliability",
];

const Benefits_AboveGround: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .agb-display { font-family: 'Oswald', sans-serif; }
        .agb-mono    { font-family: 'Space Mono', monospace; }

        .agb-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .agb-card {
          border-left: 2px solid rgba(198,41,49,0.3);
          transition: border-color 0.3s, transform 0.3s;
        }
        .agb-card:hover {
          border-color: #c62931;
          transform: translateX(6px);
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 agb-paper-grid pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="agb-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Industries Served
            </span>
          </div>
          <h2 className="agb-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Who Benefits from
            <br />
            <span className="text-[#c62931]">Our Tanks</span>
          </h2>
        </motion.div>

        {/* Benefit Cards */}
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
              className="agb-card pl-5 py-4"
            >
              <p className="agb-mono text-[#555] text-sm leading-7">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits_AboveGround;
