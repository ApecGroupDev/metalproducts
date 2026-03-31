"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Reinforced steel construction with specialized anti-corrosion coatings",
  "Secure locking manways and fill ports to prevent unauthorized access",
  "Elevated bases for spill prevention and easy access",
  "Inspection-friendly design with access panels and sight gauges",
  "Custom capacities and configurations to match your site's needs",
];

const Features_AboveGround: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .agft-display { font-family: 'Oswald', sans-serif; }
        .agft-mono    { font-family: 'Space Mono', monospace; }

        .agft-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .agft-card {
          border-top: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s;
        }
        .agft-card:hover { border-color: rgba(198,41,49,0.4); }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 agft-paper-grid pointer-events-none" />

      {/* Red glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

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
            <span className="agft-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Key Features
            </span>
          </div>
          <h2 className="agft-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Designed for
            <br />
            <span className="text-[#c62931]">Durability</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
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
              className="agft-card pt-5 pb-4"
            >
              <div className="flex items-start gap-4">
                <span className="agft-mono text-[#c62931] text-xs tracking-widest pt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="agft-mono text-white/70 text-sm leading-7">
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

export default Features_AboveGround;
