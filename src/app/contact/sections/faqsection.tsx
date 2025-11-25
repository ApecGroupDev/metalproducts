'use client';

import Accordion from '@/components/accordionFaqs';

const faqs = [
  {
    question: 'What can I expect when I request a quote?',
    answer:
      'You’ll receive a prompt, customized response outlining specifications, timelines, and cost estimates.',
  },
  {
    question: 'Can you help with technical details or compliance requirements?',
    answer:
      'Yes—from SPCC and EPA guidelines to UL standards, our team provides technical guidance every step of the way.',
  },
  {
    question: 'Do you accommodate custom tank designs?',
    answer:
      'Absolutely—most of our work is custom-engineered to match client needs and operational constraints.',
  },
  {
    question: 'How soon will I get a response?',
    answer:
      'Typically, a team member will reach out within 1 business day—faster if it’s urgent.',
  },
  {
    question: 'Can I visit your facility?',
    answer:
      'Yes! We welcome appointments at our Suwanee, GA plant for consultations or tours—reach out to schedule.',
  },
];

const FAQSectionContact: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] py-24 border-gray-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Accordion items={faqs} title="FAQs" />
      </div>
    </section>
  );
};

export default FAQSectionContact;
