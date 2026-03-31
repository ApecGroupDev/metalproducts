"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question: "What types of tanks do you produce?",
    answer:
      "We offer aboveground, underground, oilfield, oil-water separators, and specialty tank systems like Fireguard® and Flameshield®.",
  },
  {
    question: "Can I get help selecting the right tank?",
    answer:
      "Yes—we provide engineering support and custom proposals based on your operational needs.",
  },
  {
    question: "Do you support nationwide shipping and delivery?",
    answer:
      "Certainly—we build in Georgia and ship across all U.S. states, regardless of your location.",
  },
  {
    question: "How long does a custom tank order take?",
    answer:
      "Typical turnaround ranges from 6–12 weeks, depending on specifications and compliance requirements.",
  },
  {
    question: "Do you provide warranties or support post-sale?",
    answer:
      "Yes—our products come with quality trust and often include performance-based assurances.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .faq-section-serif { font-family: 'Libre Baskerville', serif; }

        .faq-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 faq-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

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
        <p className="faq-section-serif italic text-[#888] text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/30 pl-4 mb-10">
          &quot;Have questions? We’ve got answers backed by 80+ years of
          expertise.&quot;
        </p>

        <Accordion items={faqs} title="Frequently Asked Questions" />
      </motion.div>
    </section>
  );
};

export default FAQSection;
