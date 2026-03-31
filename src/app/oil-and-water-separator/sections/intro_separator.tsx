"use client";

import React from "react";
import { motion } from "framer-motion";

const Intro_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .sepi-display { font-family: 'Oswald', sans-serif; }
        .sepi-serif   { font-family: 'Libre Baskerville', serif; }
        .sepi-mono    { font-family: 'Space Mono', monospace; }

        .sepi-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 sepi-paper-grid pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />
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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="sepi-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our Legacy
            </span>
          </div>

          <h2 className="sepi-display font-bold text-[#1a1a1a] uppercase leading-[0.92] text-[clamp(2.4rem,4.5vw,4rem)] mb-6">
            Trusted Oil-Water
            <br />
            <span className="text-[#c62931]">Separation Since 1941</span>
          </h2>

          <p className="sepi-serif italic text-[#999] text-base border-l-2 border-[#c62931]/40 pl-4 mb-10 max-w-lg leading-relaxed">
            “Decades of expertise paired with precision engineering.”
          </p>

          <div className="sepi-mono text-[#555] text-sm leading-8 space-y-5 max-w-3xl">
            <p>
              When it comes to managing{" "}
              <span className="text-[#c62931] font-bold">oily wastewater</span>{" "}
              and
              <span className="text-[#c62931] font-bold">
                {" "}
                stormwater runoff
              </span>
              , nothing beats decades of expertise paired with precision
              engineering. At Metal Products Company, we’ve been building
              dependable, USA-made oil-water separators since 1941.
            </p>
            <p>
              Our separators are expertly crafted to remove oils, fuels, and
              hydrocarbons from water streams — helping you meet environmental
              standards and avoid costly fines. Built in Suwanee, GA and shipped
              nationwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Separator;
