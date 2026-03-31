"use client";

import React from "react";
import { motion } from "framer-motion";

const Intro_OTR: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .otri-display { font-family: 'Oswald', sans-serif; }
        .otri-serif   { font-family: 'Libre Baskerville', serif; }
        .otri-mono    { font-family: 'Space Mono', monospace; }

        .otri-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 otri-paper-grid pointer-events-none" />
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
            <span className="otri-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our Legacy
            </span>
          </div>

          <h2 className="otri-display font-bold text-[#1a1a1a] uppercase leading-[0.92] text-[clamp(2.4rem,4.5vw,4rem)] mb-6">
            Built for Oilfield
            <br />
            <span className="text-[#c62931]">Toughness Since 1941</span>
          </h2>

          <p className="otri-serif italic text-[#999] text-base border-l-2 border-[#c62931]/40 pl-4 mb-10 max-w-lg leading-relaxed">
            &quot;When the job demands rugged, dependable storage in harsh oilfield
            environments.&quot;
          </p>

          <div className="otri-mono text-[#555] text-sm leading-8 space-y-5 max-w-3xl">
            <p>
              At{" "}
              <span className="text-[#c62931] font-bold">
                Metal Products Company
              </span>
              , we’ve been
              <span className="text-[#c62931] font-bold">
                {" "}
                Building Trust Since 1941
              </span>
              , delivering oilfield tanks engineered for safety, durability, and
              environmental protection.
            </p>
            <p>
              Made in the USA, our tanks are built to handle the toughest
              conditions—whether you’re storing drilling fluids, crude oil, or
              delivery supplies. With decades of experience, we’re the partner
              you can count on.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_OTR;
