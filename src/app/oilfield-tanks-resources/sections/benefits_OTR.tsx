"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  "On-site drilling and production operations needing rugged storage",
  "Oil patch service providers delivering fluids and fuels",
  "Temporary storage setups (e.g., well servicing, frac tanks)",
  "Environmental service contractors needing compliant spill storage",
  "Field maintenance teams demanding durable, easy-to-service tanks",
];

const concerns = [
  {
    question: "Will this tank handle rough terrain?",
    answer:
      "Yes — our tanks are built with reinforced construction suitable for transport and rough site conditions.",
  },
  {
    question: "Is it safe under pressure or extreme heat?",
    answer:
      "Absolutely — sealed vents, robust shells, and optional insulation enhance safety and performance.",
  },
  {
    question: "Can it handle environmental regulations?",
    answer:
      "Yes — our designs meet or exceed spill containment and environmental protection standards.",
  },
];

const Benefits_OTR: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .otrb-display { font-family: 'Oswald', sans-serif; }
        .otrb-serif   { font-family: 'Libre Baskerville', serif; }
        .otrb-mono    { font-family: 'Space Mono', monospace; }

        .otrb-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .otrb-card {
          border-left: 2px solid rgba(198,41,49,0.3);
          transition: border-color 0.3s, transform 0.3s;
        }
        .otrb-card:hover {
          border-color: #c62931;
          transform: translateX(6px);
        }
      `}</style>

      <div className="absolute inset-0 otrb-paper-grid pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="otrb-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Industries
              </span>
            </div>
            <h2 className="otrb-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)] mb-10">
              Who Benefits from
              <br />
              <span className="text-[#c62931]">Our Tanks</span>
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="otrb-card pl-5 py-3">
                  <p className="otrb-mono text-[#555] text-sm leading-7">
                    {benefit}
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
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="otrb-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Common Questions
              </span>
            </div>
            <h2 className="otrb-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)] mb-10">
              Addressing
              <br />
              <span className="text-[#c62931]">Concerns</span>
            </h2>
            <div className="space-y-6">
              {concerns.map((item, i) => (
                <div key={i} className="border-t-2 border-[#c62931]/20 pt-5">
                  <p className="otrb-serif italic text-[#333] text-base mb-2">
                    &ldquo;{item.question}&rdquo;
                  </p>
                  <p className="otrb-mono text-[#555] text-sm leading-7">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits_OTR;
