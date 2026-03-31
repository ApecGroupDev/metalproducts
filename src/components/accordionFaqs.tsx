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
  variant?: 'light' | 'dark';
};

const Accordion: React.FC<AccordionProps> = ({ items, title, variant = 'light' }) => {
  const isDark = variant === 'dark';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .faq-display { font-family: 'Oswald', sans-serif; }
        .faq-serif   { font-family: 'Libre Baskerville', serif; }
        .faq-mono    { font-family: 'Space Mono', monospace; }

        .faq-item-light {
          border-top: 2px solid rgba(198,41,49,0.15);
          transition: border-color 0.3s;
          position: relative;
        }
        .faq-item-light::before {
          content: '';
          position: absolute;
          top: -2px; left: 0;
          width: 0; height: 2px;
          background: #c62931;
          transition: width 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .faq-item-light:hover::before { width: 100%; }
        .faq-item-light:hover { border-color: rgba(198,41,49,0.3); }

        .faq-item-dark {
          border-top: 2px solid rgba(255,255,255,0.08);
          transition: border-color 0.3s;
          position: relative;
        }
        .faq-item-dark::before {
          content: '';
          position: absolute;
          top: -2px; left: 0;
          width: 0; height: 2px;
          background: #c62931;
          transition: width 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .faq-item-dark:hover::before { width: 100%; }
        .faq-item-dark:hover { border-color: rgba(198,41,49,0.4); }
      `}</style>

      {/* Title */}
      {title && (
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="faq-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Common Questions
            </span>
          </div>
          <h2 className={`faq-display font-bold uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)] ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
            {title}
          </h2>
        </div>
      )}

      {/* Accordion List */}
      <div className="space-y-0">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`${isDark ? 'faq-item-dark' : 'faq-item-light'} py-6`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-start text-left focus:outline-none transition-all duration-300 gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="faq-mono text-[#c62931] text-xs tracking-widest pt-1 flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={`faq-display font-semibold uppercase text-lg sm:text-xl leading-tight transition-colors ${
                      isActive ? 'text-[#c62931]' : isDark ? 'text-white' : 'text-[#1a1a1a]'
                    }`}
                  >
                    {item.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-300 ${
                    isActive
                      ? 'text-[#c62931] rotate-180'
                      : 'text-[#888]'
                  }`}
                />
              </button>

              {/* Smooth content reveal */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isActive ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pt-4 pl-12">
                  <p className={`faq-mono text-sm leading-7 max-w-2xl ${isDark ? 'text-white/60' : 'text-[#555]'}`}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
