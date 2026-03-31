"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactIntro: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .ci-display { font-family: 'Oswald', sans-serif; }
        .ci-serif   { font-family: 'Libre Baskerville', serif; }
        .ci-mono    { font-family: 'Space Mono', monospace; }

        .ci-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 ci-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-12 border-b border-black/[0.07] pb-10"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="ci-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              How We Help
            </span>
          </div>

          {/* Heading */}
          <h2 className="ci-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4.5vw,4rem)]">
            Need a Tank
            <br />
            <span className="text-[#c62931]">Built to Spec?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left column */}
          <div>
            <p className="ci-serif italic text-[#888] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/30 pl-4 mb-8">
              &quot;With a legacy of reliability since 1941, our team brings
              decades of manufacturing expertise to every conversation.&quot;
            </p>

            <p className="ci-mono text-[#555] text-sm leading-8">
              Whether you’re designing a new aboveground, underground, oil-water
              separator, or oilfield tank—or need expert guidance on tank
              specification—{" "}
              <span className="text-[#c62931] font-bold">
                Metal Products USA
              </span>{" "}
              is ready to assist.
            </p>
          </div>

          {/* Right column */}
          <div>
            <p className="ci-mono text-[#555] text-sm leading-8">
              From quick quotes to custom engineering support, you’ll find
              clarity, responsiveness, and solutions that align with your
              operational needs.
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { val: "80+", label: "Years" },
                { val: "100%", label: "US Made" },
                { val: "24hr", label: "Response" },
              ].map(({ val, label }) => (
                <div key={label} className="border-t border-black/[0.08] pt-4">
                  <div className="ci-display text-[#1a1a1a] text-2xl font-semibold leading-none">
                    {val}
                  </div>
                  <div className="ci-mono text-[#888] text-xs tracking-widest uppercase mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactIntro;
