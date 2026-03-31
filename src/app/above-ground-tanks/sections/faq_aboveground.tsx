"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question: "What makes above ground tanks different from underground ones?",
    answer:
      "Above ground tanks are easier to access for inspection and service, and don't require excavation—perfect for tight sites or temporary setups.",
  },
  {
    question: "Are your tanks corrosion-resistant?",
    answer:
      "Yes—each tank features durable anti-corrosion coatings designed to withstand weather, UV exposure, and industrial environments.",
  },
  {
    question: "Can these tanks be customized?",
    answer:
      "Absolutely. We manufacture to match your site's capacity, footprint, and usage requirements.",
  },
  {
    question: "Are they secure and tamper-resistant?",
    answer:
      "Yes—locking fill ports and secure manways are part of our standard design to protect your investment.",
  },
  {
    question: "How easy is maintenance?",
    answer:
      "Very easy—clear access panels, inspection ports, and gauges make routine checks fast and safe.",
  },
  {
    question: "Do you ship across the U.S.?",
    answer:
      "Yes—we build in Georgia and deliver Across the United States, just like all our tanks.",
  },
];

const FAQ_AboveGround: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .agf-serif { font-family: 'Libre Baskerville', serif; }
        .agf-mono  { font-family: 'Space Mono', monospace; }

        .agf-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 agf-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16"
      >
        {/* Pull quote */}
        <p className="agf-serif italic text-[#999] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/40 pl-4 mb-10">
          “Common questions about above ground tanks.”
        </p>

        <Accordion items={faqs} title="Above Ground Tank FAQs" />
      </motion.div>
    </section>
  );
};

export default FAQ_AboveGround;
