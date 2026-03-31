"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  { title: "Heritage of quality", text: "building trust since 1941" },
  { title: "US-manufactured", text: "proudly built in Suwanee, GA" },
  {
    title: "EPA and local compliance-ready",
    text: "designed for SPCC and stormwater standards",
  },
  {
    title: "Heavy-duty, long-lasting build",
    text: "engineered for industrial strength",
  },
  {
    title: "Custom-fit designs",
    text: "tailored to your facility's flow and footprint",
  },
  {
    title: "Trusted by fueling stations",
    text: "municipalities, and contractors nationwide",
  },
];

const Choose_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .sepc-display { font-family: 'Oswald', sans-serif; }
        .sepc-mono    { font-family: 'Space Mono', monospace; }

        .sepc-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .sepc-card {
          border-top: 2px solid rgba(198,41,49,0.2);
          transition: border-color 0.3s, transform 0.3s;
        }
        .sepc-card:hover {
          border-color: #c62931;
          transform: translateY(-4px);
        }
      `}</style>

      <div className="absolute inset-0 sepc-paper-grid pointer-events-none" />
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
            <span className="sepc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="sepc-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Why Choose Our
            <br />
            <span className="text-[#c62931]">Oil-Water Separators?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="sepc-card pt-5"
            >
              <span className="sepc-mono text-[#c62931] text-xs tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="sepc-display font-semibold text-[#1a1a1a] uppercase text-lg mt-2 mb-2">
                {item.title}
              </h3>
              <p className="sepc-mono text-[#555] text-sm leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose_Separator;
