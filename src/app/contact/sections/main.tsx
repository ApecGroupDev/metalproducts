"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactPageForm from "@/components/contactForm";

const MainContact: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .mc-display { font-family: 'Oswald', sans-serif; }
        .mc-serif   { font-family: 'Libre Baskerville', serif; }
        .mc-mono    { font-family: 'Space Mono', monospace; }

        .mc-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 mc-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col xl:flex-row items-start gap-20">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full xl:w-[48%] flex-shrink-0"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="mc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Contact Form
            </span>
          </div>

          {/* Headline */}
          <h2 className="mc-display font-bold text-[#1a1a1a] uppercase leading-[0.92] text-[clamp(2.4rem,4.5vw,4rem)] mb-6">
            Let’s Talk
            <br />
            <span className="text-[#c62931]">Since 1941</span>
          </h2>

          {/* Italic serif pull quote */}
          <p className="mc-serif italic text-[#999] text-base border-l-2 border-[#c62931]/40 pl-4 mb-8 leading-relaxed">
            &quot;Building trust through quality craftsmanship.&quot;
          </p>

          {/* Body copy */}
          <p className="mc-mono text-[#555] text-sm leading-8 mb-5">
            Working on a fueling project — a new station, an upgrade, or
            ensuring environmental compliance? You’ve come to the right
            place.
          </p>
          <p className="mc-mono text-[#555] text-sm leading-8">
            For over <span className="text-[#c62931] font-bold">80 years</span>,
            we’ve built tanks and separators trusted by everyone from small
            contractors to major brands like{" "}
            <span className="text-[#c62931] font-bold">Shell</span>,{" "}
            <span className="text-[#c62931] font-bold">Texaco</span>,{" "}
            <span className="text-[#c62931] font-bold">Amoco</span>, and{" "}
            <span className="text-[#c62931] font-bold">QuikTrip</span>.
          </p>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              /* eslint-disable @typescript-eslint/no-unused-vars */
              { val: "80+", label: "Years" },
              { val: "100%", label: "US Made" },
              { val: "∞", label: "Industries" },
            ].map(({ val, label }) => (
              <div key={label} className="border-t border-black/[0.08] pt-4">
                <div className="mc-display text-[#1a1a1a] text-3xl font-semibold leading-none">
                  {val}
                </div>
                <div className="mc-mono text-[#888] text-xs tracking-widest uppercase mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="w-full xl:w-[52%]"
        >
          <div
            id="ContactPageForm"
            className="relative bg-white rounded-sm shadow-lg p-8 md:p-10 lg:p-12 scroll-mt-24 border-t-2 border-[#c62931]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="mc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Get in Touch
              </span>
            </div>
            <h3 className="mc-display font-bold text-[#1a1a1a] uppercase text-2xl mb-6">
              For More Information
            </h3>
            <ContactPageForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainContact;
