"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question: "What does an oil-water separator do?",
    answer:
      "It removes oil, fuel, and hydrocarbons from wastewater or stormwater before discharge — protecting the environment and helping you stay compliant.",
  },
  {
    question: "Are your separators EPA-compliant?",
    answer:
      "Absolutely. They're engineered to align with EPA SPCC regulations, local guidelines, and environmental best practices.",
  },
  {
    question: "Can you build a custom separator?",
    answer:
      "Yes — we manufacture custom models to match your specific site requirements and flow rates.",
  },
  {
    question: "What materials are used in construction?",
    answer:
      "High-quality steel with specialized corrosion-resistant coatings ensures long-term durability.",
  },
  {
    question: "Do you ship nationwide?",
    answer:
      "Yes — manufactured in Georgia and shipped across the U.S., including Texas, Florida, and all major fueling regions.",
  },
  {
    question: "How often should it be maintained?",
    answer:
      "Routine inspections are recommended at least quarterly. Actual cleaning intervals depend on usage and water quality.",
  },
];

const FAQ_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .sepf-serif { font-family: 'Libre Baskerville', serif; }
        .sepf-mono  { font-family: 'Space Mono', monospace; }

        .sepf-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 sepf-paper-grid pointer-events-none" />
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
        <p className="sepf-serif italic text-[#999] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/40 pl-4 mb-10">
          “Common questions about oil-water separators.”
        </p>

        <Accordion items={faqs} title="Oil-Water Separator FAQs" />
      </motion.div>
    </section>
  );
};

export default FAQ_Separator;
