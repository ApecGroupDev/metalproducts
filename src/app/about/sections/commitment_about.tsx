"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon as CheckCircle } from "lucide-react";

const Commitment_About: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .commit-display { font-family: 'Oswald', sans-serif; }
        .commit-serif   { font-family: 'Libre Baskerville', serif; }
        .commit-mono    { font-family: 'Space Mono', monospace; }

        .commit-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .commit-item {
          border-left: 2px solid rgba(198,41,49,0.3);
          padding-left: 16px;
          transition: border-color 0.25s, transform 0.25s;
        }
        .commit-item:hover {
          border-color: #c62931;
          transform: translateX(5px);
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 commit-paper-grid pointer-events-none" />

      {/* Red glow accent */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-[#c62931] opacity-[0.12] blur-[100px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-white/[0.08] pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="commit-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Today
              </span>
            </div>
            <h2 className="commit-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.6rem,5vw,4.2rem)]">
              Our Commitment
              <br />
              <span className="text-[#c62931]">Today</span>
            </h2>
          </div>

          {/* Pull quote */}
          <p className="commit-serif italic text-white/40 text-sm max-w-[220px] leading-7 border-l-2 border-[#c62931]/40 pl-4 self-end mb-1">
            "Every tank we produce is backed by heritage, engineering, and
            trust."
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="commit-mono text-white/50 text-sm leading-8 mb-10 max-w-sm">
              As of 2025, Metal Products continues to operate at full capacity,
              serving clients across the southeast and nationwide.
            </p>

            {/* List */}
            <div className="space-y-5 mb-10">
              {[
                "Underground and aboveground storage tanks",
                "Oil-water separators",
                "Specialty tanks using Elutron® technology",
              ].map((item, i) => (
                <div
                  key={i}
                  className="commit-item flex items-start gap-3 py-3"
                >
                  <CheckCircle className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="commit-mono text-white/80 text-sm leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="commit-mono text-white/50 text-sm leading-8">
              We are proud to participate in today's robust economy — helping
              businesses fuel their growth with tanks built to last.
            </p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="commit-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                By the Numbers
              </span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "80+", label: "Years Experience" },
                { val: "100%", label: "American Made" },
                { val: "1941", label: "Established" },
                { val: "∞", label: "Industries Served" },
              ].map(({ val, label }, i) => (
                <div key={i} className="border-t border-white/[0.08] pt-4">
                  <div className="commit-display text-white text-3xl font-semibold leading-none">
                    {val}
                  </div>
                  <div className="commit-mono text-white/40 text-xs tracking-widest uppercase mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment_About;
