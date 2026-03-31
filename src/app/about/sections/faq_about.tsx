"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question: "When was Metal Products founded?",
    answer:
      "We were founded in 1941 to fabricate WWII Liberty Ship components before expanding into petroleum storage tanks.",
  },
  {
    question: "Who were the founders?",
    answer:
      "Metal Products was founded by C.E. Gammage and Robert Harris, Georgia Tech alumni.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve petroleum, agriculture, energy, commercial, municipal, and government facilities across the U.S.",
  },
  {
    question: "Where are your facilities located?",
    answer:
      "Our primary plant is in Suwanee, GA, expanded multiple times since 1978. We also operated an additional facility in Alachua, FL.",
  },
  {
    question: "Who owns the company today?",
    answer:
      "Since 2023, Metal Products has been owned by Ali Husain, continuing the legacy with new innovations.",
  },
];

const FAQ_About: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .faq-about-serif { font-family: 'Libre Baskerville', serif; }

        .faq-about-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 faq-about-paper-grid pointer-events-none" />

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
        <p className="faq-about-serif italic text-[#888] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/30 pl-4 mb-10">
          "Questions about our history and operations? Find answers here."
        </p>

        <Accordion items={faqs} title="About Us FAQs" />
      </motion.div>
    </section>
  );
};

export default FAQ_About;
