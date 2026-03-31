"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Reinforced steel construction with corrosion protection",
  "Engineered for pressure resistance and soil load",
  "Seam-welded joints for leak prevention",
  "Built-in monitoring ports for easy inspections",
  "Available in various capacities and custom configurations",
  "Ideal for both petroleum and industrial fluid storage",
];

const Features_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .ugft-display { font-family: 'Oswald', sans-serif; }
        .ugft-mono    { font-family: 'Space Mono', monospace; }

        .ugft-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ugft-card {
          border-top: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s;
        }
        .ugft-card:hover { border-color: rgba(198,41,49,0.4); }
      `}</style>

      <div className="absolute inset-0 ugft-paper-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

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
            <span className="ugft-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Key Features
            </span>
          </div>
          <h2 className="ugft-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Features That
            <br />
            <span className="text-[#c62931]">Set Us Apart</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="ugft-card pt-5 pb-4"
            >
              <div className="flex items-start gap-4">
                <span className="ugft-mono text-[#c62931] text-xs tracking-widest pt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="ugft-mono text-white/70 text-sm leading-7">
                    {feature}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features_Underground;
