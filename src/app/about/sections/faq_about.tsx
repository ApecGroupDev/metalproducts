'use client';

import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'When was Metal Products founded?',
    answer:
      'We were founded in 1941 to fabricate WWII Liberty Ship components before expanding into petroleum storage tanks.',
  },
  {
    question: 'Who were the founders?',
    answer:
      'Metal Products was founded by C.E. Gammage and Robert Harris, Georgia Tech alumni.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve petroleum, agriculture, energy, commercial, municipal, and government facilities across the U.S.',
  },
  {
    question: 'Where are your facilities located?',
    answer:
      'Our primary plant is in Suwanee, GA, expanded multiple times since 1978. We also operated an additional facility in Alachua, FL.',
  },
  {
    question: 'Who owns the company today?',
    answer:
      'Since 2023, Metal Products has been owned by Ali Husain, continuing the legacy with new innovations.',
  },
];

const FAQ_About: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQ_About;
