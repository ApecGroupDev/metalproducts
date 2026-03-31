"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .about-display { font-family: 'Oswald', sans-serif; }
        .about-serif   { font-family: 'Libre Baskerville', serif; }
        .about-mono    { font-family: 'Space Mono', monospace; }

        /* Linen paper grid */
        .paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .about-image-wrap {
          position: relative;
        }
        .about-image-wrap::before {
          content: '';
          position: absolute;
          inset: -12px -12px 12px 12px;
          border: 1px solid rgba(198,41,49,0.2);
          z-index: 0;
        }
        .about-image-wrap::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 120px;
          height: 120px;
          background: #c62931;
          opacity: 0.07;
          z-index: 0;
        }

        .stat-item {
          border-top: 1px solid rgba(0,0,0,0.08);
          padding-top: 1rem;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col xl:flex-row items-center gap-20">
        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full xl:w-[48%] flex-shrink-0"
        >
          <div className="about-image-wrap rounded-none overflow-visible">
            <div className="relative z-10 rounded-sm overflow-hidden">
              <Image
                src="/images/backgrounds/home/About_Tank.webp"
                alt="Industrial Metal Tanks"
                width={1000}
                height={660}
                className="object-cover w-full"
              />
              {/* Dark vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Corner label */}
              <div className="absolute bottom-5 left-5 bg-[#c62931] px-3 py-1">
                <span className="about-mono text-white text-xs tracking-[0.4em] uppercase">
                  Metal Products USA
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full xl:w-[52%]"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="about-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              About Us
            </span>
          </div>

          {/* Headline — Oswald condensed */}
          <h2 className="about-display font-bold text-[#1a1a1a] uppercase leading-[0.92] text-[clamp(2.8rem,5vw,4.5rem)] mb-6">
            Quality Tank
            <br />
            Manufacturing
            <br />
            <span className="text-[#c62931]">Since 1941</span>
          </h2>

          {/* Italic serif pull quote */}
          <p className="about-serif italic text-[#999] text-base border-l-2 border-[#c62931]/40 pl-4 mb-8 leading-relaxed">
            &quot;Craftsmanship meets reliability.&quot;
          </p>

          {/* Body copy */}
          <p className="about-mono text-[#555] text-sm leading-8 mb-5">
            Welcome to{" "}
            <span className="text-[#c62931] font-bold">Metal Products USA</span>
            , where craftsmanship meets reliability. Since 1941, we’ve
            specialized in manufacturing robust, American-made storage tanks
            designed for the toughest industrial conditions. From energy and
            fuel facilities to agriculture and commercial operations, our work
            is built around your needs and elevated by over 80 years of trusted
            performance.
          </p>
          <p className="about-mono text-[#555] text-sm leading-8">
            Whether you operate a gas station, power plant, farm, or government
            facility—if you need a storage solution you can count on—we have you
            covered.
          </p>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { val: "80+", label: "Years" },
              { val: "100%", label: "US Made" },
              { val: "∞", label: "Industries" },
            ].map(({ val, label }) => (
              <div key={label} className="stat-item">
                <div className="about-display text-[#1a1a1a] text-3xl font-semibold leading-none">
                  {val}
                </div>
                <div className="about-mono text-[#888] text-xs tracking-widest uppercase mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
