"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question:
      "What makes underground storage tanks different from aboveground ones?",
    answer:
      "Underground tanks are engineered to endure soil pressure, shifting, and moisture exposure—built thicker and with protective coatings.",
  },
  {
    question: "Are your tanks compliant with EPA regulations?",
    answer:
      "Yes. Our tanks are manufactured to meet EPA requirements and local underground storage regulations.",
  },
  {
    question: "Can I get a custom-sized underground tank?",
    answer:
      "Yes. We offer custom engineering to match your site's capacity, layout, and regulatory needs.",
  },
  {
    question: "What materials are they made from?",
    answer:
      "High-strength steel with advanced corrosion-resistant coatings to ensure durability underground.",
  },
  {
    question: "How do I inspect or monitor the tank after installation?",
    answer:
      "We build in accessibility via inspection ports, making monitoring efficient and less invasive.",
  },
  {
    question: "Do you ship nationwide?",
    answer:
      "Yes—manufactured in Georgia and delivered to facilities across the United States.",
  },
];

const FAQ_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .ugf-serif { font-family: 'Libre Baskerville', serif; }
        .ugf-mono  { font-family: 'Space Mono', monospace; }

        .ugf-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 ugf-paper-grid pointer-events-none" />
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
        <p className="ugf-serif italic text-[#999] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/40 pl-4 mb-10">
          "Common questions about underground tanks."
        </p>

        <Accordion items={faqs} title="Underground Tank FAQs" />
      </motion.div>
    </section>
  );
};

export default FAQ_Underground;
