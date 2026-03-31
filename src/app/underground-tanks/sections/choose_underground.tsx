"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Decades of expertise", text: "Building Trust Since 1941" },
  {
    title: "Made in the USA",
    text: "Manufactured at our Suwanee, GA facility",
  },
  {
    title: "EPA-compliant design",
    text: "Built to meet all federal and local requirements",
  },
  {
    title: "Heavy-duty performance",
    text: "Engineered for tough underground environments",
  },
  {
    title: "Custom sizing available",
    text: "Precisely built for your project's needs",
  },
  {
    title: "Trusted across industries",
    text: "Fuel retail, commercial, government, and industrial sectors",
  },
];

const Choose_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .ugc-display { font-family: 'Oswald', sans-serif; }
        .ugc-mono    { font-family: 'Space Mono', monospace; }

        .ugc-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ugc-card {
          border-top: 2px solid rgba(198,41,49,0.15);
          transition: border-color 0.3s;
        }
        .ugc-card:hover { border-color: rgba(198,41,49,0.5); }
      `}</style>

      <div className="absolute inset-0 ugc-paper-grid pointer-events-none" />
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
            <span className="ugc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="ugc-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Underground
            <br />
            <span className="text-[#c62931]">Tank Advantages</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
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
              className="ugc-card pt-5 pb-4"
            >
              <h3 className="ugc-display font-semibold text-[#1a1a1a] uppercase text-lg mb-2">
                {item.title}
              </h3>
              <p className="ugc-mono text-[#555] text-sm leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose_Underground;
