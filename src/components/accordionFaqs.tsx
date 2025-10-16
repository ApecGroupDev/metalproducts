'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: FAQItem[];
  title?: string;
};

const Accordion: React.FC<AccordionProps> = ({ items, title }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300 overflow-hidden">
      {/* Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[4px] bg-[#c62931] rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8 relative z-10">
        {/* Title */}
        {title && (
          <h2 className="text-center text-4xl scrn-800:text-5xl font-extrabold text-[#c62931] tracking-tight mb-12">
            {title}
          </h2>
        )}

        {/* Accordion List */}
        <div className="space-y-4">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`group transition-all duration-500 rounded-xl border overflow-hidden ${isActive
                    ? 'bg-gradient-to-r from-white via-[#fff8f8] to-white border-[#c62931]/40 shadow-md'
                    : 'bg-white border-gray-200 hover:border-[#c62931]/40 hover:shadow-md'
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5 scrn-600:px-8 scrn-600:py-6 focus:outline-none transition-all duration-300"
                >
                  <h3
                    className={`text-lg scrn-600:text-xl font-semibold transition-colors ${isActive ? 'text-[#c62931]' : 'text-gray-900 group-hover:text-[#c62931]'
                      }`}
                  >
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${isActive
                        ? 'text-[#c62931] rotate-180'
                        : 'text-gray-500 group-hover:text-[#c62931]'
                      }`}
                  />
                </button>

                {/* Smooth content reveal */}
                <div
                  className={`transition-all duration-500 ease-in-out ${isActive ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                  <div className="px-6 scrn-600:px-8 pb-6 text-gray-700 bg-gray-50 border-t border-gray-100">
                    <p className="text-base scrn-600:text-lg leading-relaxed">
                      {item.answer}
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

export default Accordion;
