'use client';

import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'What does an oil-water separator do?',
    answer:
      'It removes oil, fuel, and hydrocarbons from wastewater or stormwater before discharge — protecting the environment and helping you stay compliant.',
  },
  {
    question: 'Are your separators EPA-compliant?',
    answer:
      'Absolutely. They’re engineered to align with EPA SPCC regulations, local guidelines, and environmental best practices.',
  },
  {
    question: 'Can you build a custom separator?',
    answer:
      'Yes — we manufacture custom models to match your specific site requirements and flow rates.',
  },
  {
    question: 'What materials are used in construction?',
    answer:
      'High-quality steel with specialized corrosion-resistant coatings ensures long-term durability.',
  },
  {
    question: 'Do you ship nationwide?',
    answer:
      'Yes — manufactured in Georgia and shipped across the U.S., including Texas, Florida, and all major fueling regions.',
  },
  {
    question: 'How often should it be maintained?',
    answer:
      'Routine inspections are recommended at least quarterly. Actual cleaning intervals depend on usage and water quality.',
  },
];

const FAQ_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQ_Separator;
