"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const trustPoints = [
  "A proven record Building Trust Since 1941",
  "UL-listed manufacturing standards",
  "Membership in the Petroleum Equipment Institute (PEI)",
  "A strong portfolio of commercial and government installations",
];

const Trust_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .sept-display { font-family: 'Oswald', sans-serif; }
        .sept-serif   { font-family: 'Libre Baskerville', serif; }
        .sept-mono    { font-family: 'Space Mono', monospace; }

        .sept-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 sept-paper-grid pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-black/[0.07] pb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="sept-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Trust
            </span>
          </div>
          <h2 className="sept-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Why Customers
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
            <p className="sept-mono text-[#555] text-sm leading-8 mb-10 max-w-md">
              For over 80 years, clients nationwide have turned to Metal
              Products Company for fuel tanks and separators built to last.
            </p>
            <div className="space-y-4">
              {trustPoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-[#c62931]/30 pl-4 py-2 hover:border-[#c62931] transition-colors"
                >
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="sept-mono text-[#333] text-sm leading-relaxed">
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
            className="border-t-2 border-[#c62931]/20 pt-6"
          >
            <span className="sept-mono text-[#c62931] text-xs tracking-widest">
              CASE STUDY
            </span>
            <h3 className="sept-display font-bold text-[#1a1a1a] uppercase text-xl mt-2 mb-4">
              Case in Point
            </h3>
            <p className="sept-serif italic text-[#888] text-sm leading-7 border-l-2 border-[#c62931]/30 pl-4 mb-6">
              “A regional trucking fleet in Texas recently installed our
              separator and passed stormwater inspections with ease.”
            </p>
            <p className="sept-mono text-[#555] text-sm leading-7">
              Thanks to our precise design and built-in reliability, clients
              consistently meet compliance requirements on the first inspection.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust_Separator;
