"use client";

import React from "react";
import { motion } from "framer-motion";

const Intro_AboveGround: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .agi-display { font-family: 'Oswald', sans-serif; }
        .agi-serif   { font-family: 'Libre Baskerville', serif; }
        .agi-mono    { font-family: 'Space Mono', monospace; }

        .agi-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 agi-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="agi-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our Legacy
            </span>
          </div>

          {/* Headline */}
          <h2 className="agi-display font-bold text-[#1a1a1a] uppercase leading-[0.92] text-[clamp(2.4rem,4.5vw,4rem)] mb-6">
            Built Tough &<br />
            <span className="text-[#c62931]">Trusted Since 1941</span>
          </h2>

          {/* Italic serif pull quote */}
          <p className="agi-serif italic text-[#999] text-base border-l-2 border-[#c62931]/40 pl-4 mb-10 max-w-lg leading-relaxed">
            “When your operations demand rugged, dependable fuel storage.”
          </p>

          {/* Body copy */}
          <div className="agi-mono text-[#555] text-sm leading-8 space-y-5 max-w-3xl">
            <p>
              When your operations demand rugged, dependable fuel storage, you
              need a tank that can keep up—not just today, but for decades. At{" "}
              <span className="text-[#c62931] font-bold">
                Metal Products Company
              </span>
              , we’ve been{" "}
              <span className="text-[#c62931] font-bold">
                Building Trust Since 1941
              </span>{" "}
              by crafting heavy-duty above ground tanks that stand the test of
              time.
            </p>
            <p>
              Designed and built in the U.S., our tanks bring together
              durability, corrosion resistance, and ease of maintenance—so you
              can focus on what you do best, knowing your fuel storage is solid.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_AboveGround;
