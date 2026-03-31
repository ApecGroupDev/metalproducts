"use client";

import React from "react";
import { motion } from "framer-motion";
import Accordion from "@/components/accordionFaqs";

const faqs = [
  {
    question: "What can I expect when I request a quote?",
    answer:
      "You'll receive a prompt, customized response outlining specifications, timelines, and cost estimates.",
  },
  {
    question: "Can you help with technical details or compliance requirements?",
    answer:
      "Yes—from SPCC and EPA guidelines to UL standards, our team provides technical guidance every step of the way.",
  },
  {
    question: "Do you accommodate custom tank designs?",
    answer:
      "Absolutely—most of our work is custom-engineered to match client needs and operational constraints.",
  },
  {
    question: "How soon will I get a response?",
    answer:
      "Typically, a team member will reach out within 1 business day—faster if it's urgent.",
  },
  {
    question: "Can I visit your facility?",
    answer:
      "Yes! We welcome appointments at our Suwanee, GA plant for consultations or tours—reach out to schedule.",
  },
];

const FAQSectionContact: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .faq-c-serif { font-family: 'Libre Baskerville', serif; }
        .faq-c-mono  { font-family: 'Space Mono', monospace; }

        .faq-c-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 faq-c-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.08] blur-[80px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16"
      >
        {/* Pull quote */}
        <p className="faq-c-serif italic text-white/40 text-sm max-w-[280px] leading-7 border-l-2 border-[#c62931]/40 pl-4 mb-10">
          &quot;Questions about contacting us? Find answers here.&quot;
        </p>

        <Accordion items={faqs} title="Contact FAQs" variant="dark" />
      </motion.div>
    </section>
  );
};

export default FAQSectionContact;
