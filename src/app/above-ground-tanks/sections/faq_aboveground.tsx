'use client';

import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'What makes above ground tanks different from underground ones?',
    answer:
      'Above ground tanks are easier to access for inspection and service, and don’t require excavation—perfect for tight sites or temporary setups.',
  },
  {
    question: 'Are your tanks corrosion-resistant?',
    answer:
      'Yes—each tank features durable anti-corrosion coatings designed to withstand weather, UV exposure, and industrial environments.',
  },
  {
    question: 'Can these tanks be customized?',
    answer:
      'Absolutely. We manufacture to match your site’s capacity, footprint, and usage requirements.',
  },
  {
    question: 'Are they secure and tamper-resistant?',
    answer:
      'Yes—locking fill ports and secure manways are part of our standard design to protect your investment.',
  },
  {
    question: 'How easy is maintenance?',
    answer:
      'Very easy—clear access panels, inspection ports, and gauges make routine checks fast and safe.',
  },
  {
    question: 'Do you ship across the U.S.?',
    answer:
      'Yes—we build in Georgia and deliver Across the United States, just like all our tanks.',
  },
];

const FAQ_AboveGround: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQ_AboveGround;
