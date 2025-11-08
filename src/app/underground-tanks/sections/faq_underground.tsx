'use client';

import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'What makes underground storage tanks different from aboveground ones?',
    answer:
      'Underground tanks are engineered to endure soil pressure, shifting, and moisture exposure—built thicker and with protective coatings.',
  },
  {
    question: 'Are your tanks compliant with EPA regulations?',
    answer:
      'Yes. Our tanks are manufactured to meet EPA requirements and local underground storage regulations.',
  },
  {
    question: 'Can I get a custom-sized underground tank?',
    answer:
      'Yes. We offer custom engineering to match your site’s capacity, layout, and regulatory needs.',
  },
  {
    question: 'What materials are they made from?',
    answer:
      'High-strength steel with advanced corrosion-resistant coatings to ensure durability underground.',
  },
  {
    question: 'How do I inspect or monitor the tank after installation?',
    answer:
      'We build in accessibility via inspection ports, making monitoring efficient and less invasive.',
  },
  {
    question: 'Do you ship nationwide?',
    answer:
      'Yes—manufactured in Georgia and delivered to facilities across the United States.',
  },
];

const FAQ_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQ_Underground;
