'use client';

import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'Are your oilfield tanks safe for pressure use?',
    answer:
      'Yes — pressure-safe features like sealed vents and reinforced construction are built into the design for harsh environments.',
  },
  {
    question: 'Can these tanks withstand rough handling and transport?',
    answer:
      'Absolutely. They’re engineered with reinforced hulls and impact-resistant coatings for on-site mobility.',
  },
  {
    question: 'Are they compliant with environmental safety standards?',
    answer:
      'Yes — designed for spill containment and built to meet environmental protection standards in oilfield settings.',
  },
  {
    question: 'Can the tanks be customized for specific fluids or sizes?',
    answer:
      'Yes. We manufacture custom configurations that fit capacity, chemical compatibility, and operational requirements.',
  },
  {
    question: 'What materials are used?',
    answer:
      'Heavy-duty steel with corrosion-resistant finishes, along with optional coatings or insulation for extreme conditions.',
  },
  {
    question: 'Is there a nationwide delivery?',
    answer:
      'Yes — all tanks are built in Georgia and distributed across the U.S., wherever your operation is located.',
  },
];

const FAQ_OTR: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQ_OTR;
