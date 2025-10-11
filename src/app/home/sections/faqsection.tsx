'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1200px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        {/* Title */}
        <h2 className="text-center text-4xl scrn-800:text-5xl font-extrabold text-[#c62931] tracking-tight mb-12">
          FAQs
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5 scrn-600:px-8 scrn-600:py-6 focus:outline-none"
                >
                  <h3 className="text-lg scrn-600:text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#c62931] transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Smooth content reveal */}
                <div
                  className={`transition-all duration-500 ease-in-out ${isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  <div className="px-6 scrn-600:px-8 pb-6 text-gray-700 bg-gray-50 border-t border-gray-200">
                    <p className="text-base scrn-600:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <div className="w-32 h-[4px] bg-[#c62931] mx-auto mt-20 rounded-full"></div>
      </div>
    </section>
  );
};

export default FAQSection;
