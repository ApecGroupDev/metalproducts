"use client";

import React from "react";
import { motion } from "framer-motion";

const concerns = [
  {
    question: "Does this meet environmental regulations?",
    answer:
      "Yes — our separators are manufactured to meet EPA SPCC, stormwater, and relevant local environmental codes.",
  },
  {
    question: "What separator size do I need?",
    answer:
      "We'll collaborate with you to determine the right size based on your flow rate and operational needs.",
  },
  {
    question: "How easy is maintenance?",
    answer:
      "Designed with practical access, our units are straightforward to inspect and maintain.",
  },
];

const Concerns_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .sepcon-display { font-family: 'Oswald', sans-serif; }
        .sepcon-serif   { font-family: 'Libre Baskerville', serif; }
        .sepcon-mono    { font-family: 'Space Mono', monospace; }

        .sepcon-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .sepcon-card {
          border-left: 2px solid rgba(198,41,49,0.3);
          transition: border-color 0.3s, transform 0.3s;
        }
        .sepcon-card:hover {
          border-color: #c62931;
          transform: translateX(6px);
        }
      `}</style>

      <div className="absolute inset-0 sepcon-paper-grid pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="sepcon-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Common Questions
            </span>
          </div>
          <h2 className="sepcon-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Addressing Your
            <br />
            <span className="text-[#c62931]">Concerns</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {concerns.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="sepcon-card pl-5 py-4"
            >
              <p className="sepcon-serif italic text-white/90 text-base mb-3">
                "{item.question}"
              </p>
              <p className="sepcon-mono text-white/60 text-sm leading-7">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerns_Separator;
