"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question: "Are your oilfield tanks safe for pressure use?",
    answer:
      "Yes — pressure-safe features like sealed vents and reinforced construction are built into the design for harsh environments.",
  },
  {
    question: "Can these tanks withstand rough handling and transport?",
    answer:
      "Absolutely. They're engineered with reinforced hulls and impact-resistant coatings for on-site mobility.",
  },
  {
    question: "Are they compliant with environmental safety standards?",
    answer:
      "Yes — designed for spill containment and built to meet environmental protection standards in oilfield settings.",
  },
  {
    question: "Can the tanks be customized for specific fluids or sizes?",
    answer:
      "Yes. We manufacture custom configurations that fit capacity, chemical compatibility, and operational requirements.",
  },
  {
    question: "What materials are used?",
    answer:
      "Heavy-duty steel with corrosion-resistant finishes, along with optional coatings or insulation for extreme conditions.",
  },
  {
    question: "Is there a nationwide delivery?",
    answer:
      "Yes — all tanks are built in Georgia and distributed across the U.S., wherever your operation is located.",
  },
];

const FAQ_OTR: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        .otrfaq-serif { font-family: 'Libre Baskerville', serif; }

        .otrfaq-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 otrfaq-paper-grid pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16"
      >
        <p className="otrfaq-serif italic text-[#888] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/30 pl-4 mb-10">
          &quot;Common questions about our oilfield tanks.&quot;
        </p>

        <Accordion items={faqs} title="Oilfield Tank FAQs" />
      </motion.div>
    </section>
  );
};

export default FAQ_OTR;
