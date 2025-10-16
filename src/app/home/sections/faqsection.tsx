'use client';

import React, { useState } from 'react';
import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'What types of tanks do you produce?',
    answer:
      'We offer aboveground, underground, oilfield, oil-water separators, and specialty tank systems like Fireguard® and Flameshield®.',
  },
  {
    question: 'Can I get help selecting the right tank?',
    answer:
      'Yes—we provide engineering support and custom proposals based on your operational needs.',
  },
  {
    question: 'Do you support nationwide shipping and delivery?',
    answer:
      'Certainly—we build in Georgia and ship across all U.S. states, regardless of your location.',
  },
  {
    question: 'How long does a custom tank order take?',
    answer:
      'Typical turnaround ranges from 6–12 weeks, depending on specifications and compliance requirements.',
  },
  {
    question: 'Do you provide warranties or support post-sale?',
    answer:
      'Yes—our products come with quality trust and often include performance-based assurances.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        <div className="w-32 h-[4px] bg-[#c62931] mx-auto mt-20 rounded-full"></div>
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQSection;
