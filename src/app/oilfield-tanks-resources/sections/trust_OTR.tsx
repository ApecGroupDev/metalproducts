"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "Trust informed by history — since 1941",
  "UL-listed manufacturing standards",
  "PEI memberships and industry partnerships",
  "Proven success in both commercial and government operations",
];

const Trust_OTR: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .otrt-display { font-family: 'Oswald', sans-serif; }
        .otrt-serif   { font-family: 'Libre Baskerville', serif; }
        .otrt-mono    { font-family: 'Space Mono', monospace; }

        .otrt-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 otrt-paper-grid pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-white/[0.08] pb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="otrt-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Trust
            </span>
          </div>
          <h2 className="otrt-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Why Clients
            <br />
            <span className="text-[#c62931]">Trust Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="otrt-mono text-white/50 text-sm leading-8 mb-10 max-w-md">
              Over more than eight decades, Metal Products Company has earned
              its reputation across every U.S. oil patch.
            </p>
            <div className="space-y-4">
              {trustPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-white/10 pl-4 py-2 hover:border-[#c62931]/50 transition-colors"
                >
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="otrt-mono text-white/70 text-sm leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="border-t border-white/[0.08] pt-6"
          >
            <span className="otrt-mono text-[#c62931] text-xs tracking-widest">
              CASE STUDY
            </span>
            <h3 className="otrt-display font-bold text-white uppercase text-xl mt-2 mb-4">
              Texas Oilfield Operator
            </h3>
            <p className="otrt-serif italic text-white/60 text-sm leading-7 border-l-2 border-[#c62931]/30 pl-4 mb-6">
              &quot;These tanks withstood harsh conditions and made regulatory
              inspections seamless.&quot;
            </p>
            <p className="otrt-mono text-white/50 text-sm leading-7">
              A Texas oilfield operator recently installed our tanks near
              drilling sites, earning praise from onsite crews for reliability
              and long-term performance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust_OTR;
