"use client";

import React from "react";
import { motion } from "framer-motion";

const concerns = [
  {
    question: "Are these tanks EPA-compliant?",
    answer:
      "Absolutely — they're manufactured to satisfy EPA storage requirements and local codes.",
  },
  {
    question: "Can these tanks withstand soil pressure?",
    answer:
      "Yes — designed with reinforced wall construction and tested to endure tough underground conditions.",
  },
  {
    question: "How easy is it to monitor or inspect?",
    answer:
      "Easy — our tanks include access ports for inspection and monitoring without disruptive excavation.",
  },
];

const Concerns_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .ugcn-display { font-family: 'Oswald', sans-serif; }
        .ugcn-serif   { font-family: 'Libre Baskerville', serif; }
        .ugcn-mono    { font-family: 'Space Mono', monospace; }

        .ugcn-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ugcn-card {
          border-top: 2px solid rgba(198,41,49,0.3);
          transition: border-color 0.3s;
        }
        .ugcn-card:hover { border-color: #c62931; }
      `}</style>

      <div className="absolute inset-0 ugcn-paper-grid pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.08] blur-[80px] pointer-events-none" />
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
            <span className="ugcn-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Common Concerns
            </span>
          </div>
          <h2 className="ugcn-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Addressing Your
            <br />
            <span className="text-[#c62931]">Top Concerns</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {concerns.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="ugcn-card pt-6"
            >
              <p className="ugcn-serif italic text-[#c62931] text-base mb-4">
                &ldquo;{item.question}&rdquo;
              </p>
              <p className="ugcn-mono text-white/60 text-sm leading-7">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concerns_Underground;
