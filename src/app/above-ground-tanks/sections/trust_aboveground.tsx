"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "A heritage of trust—Building Trust Since 1941",
  "UL-listed manufacturing standards",
  "Active membership in the Petroleum Equipment Institute (PEI)",
  "A rich portfolio of installations across commercial and government sectors",
];

const Trust_AboveGround: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .agt-display { font-family: 'Oswald', sans-serif; }
        .agt-serif   { font-family: 'Libre Baskerville', serif; }
        .agt-mono    { font-family: 'Space Mono', monospace; }

        .agt-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 agt-paper-grid pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />
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
            <span className="agt-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our Reputation
            </span>
          </div>
          <h2 className="agt-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Why Clients
            <br />
            <span className="text-[#c62931]">Trust Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="agt-serif italic text-[#999] text-base border-l-2 border-[#c62931]/40 pl-4 mb-8 leading-relaxed">
              “For more than 80 years, Metal Products Company has been the go-to
              manufacturer for superior above-ground gas tanks.”
            </p>

            <div className="space-y-4">
              {trustPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-t border-black/[0.06] pt-4"
                >
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="agt-mono text-[#555] text-sm leading-7">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="border-t-2 border-[#c62931] bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="agt-mono text-[#c62931] text-[10px] tracking-[0.45em] uppercase">
                Case Study
              </span>
            </div>
            <h3 className="agt-display font-bold text-[#1a1a1a] uppercase text-xl mb-4">
              Recent Example
            </h3>
            <p className="agt-mono text-[#555] text-sm leading-7">
              A regional delivery company installed a fleet of our above ground
              tanks to support its operations. The tanks performed flawlessly,
              and maintenance crews appreciated how easy they were to
              service—earning praise during safety audits.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust_AboveGround;
