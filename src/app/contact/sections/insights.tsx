'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const ContactInsights: React.FC = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="relative py-12 text-gray-800 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Row: What to Expect + Why Customers Trust Us */}
        <div className="grid lg:grid-cols-2 gap-20 items-start border-b border-gray-200 pb-12">
          {/* Section 1: What to Expect */}
          <motion.div {...fadeUp(0)} className="text-center lg:text-left relative">
            <div className="absolute -left-6 top-2 hidden lg:block w-[4px] h-24 bg-[#c62931] rounded-full"></div>
            <h2 className="text-4xl font-extrabold text-[#222] mb-8 tracking-tight">
              What to Expect When You Reach Out
            </h2>
            <div className="space-y-5 max-w-xl mx-auto lg:mx-0">
              {[
                'A fast, friendly response from a knowledgeable team member.',
                'Dialogue tailored to your needs — whether spec details, compliance questions, or design insights.',
                'Clear next steps for quotes, site visits, or engineered options.',
                'Ongoing support — from initial inquiry to manufacture, delivery, and beyond.',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c62931] flex-shrink-0 mt-1" />
                  <p className="text-lg sm:text-xl leading-relaxed text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Why Customers Trust Us */}
          <motion.div {...fadeUp(0.15)} className="text-center lg:text-left">
            <div className="inline-block mb-4 px-3 py-1 bg-[#c62931]/10 text-[#c62931] text-sm font-semibold rounded-full uppercase tracking-wide">
              Trusted Since 1941
            </div>
            <h2 className="text-4xl font-extrabold text-[#222] mb-8 tracking-tight">
              Why Customers Trust Us
            </h2>
            <div className="space-y-5 max-w-xl mx-auto lg:mx-0">
              {[
                'Building Trust Since 1941 — a legacy of manufacturing excellence.',
                'Made in the USA — precision-built in Suwanee, GA.',
                'Industry-tested and regulation-ready — meeting EPA, UL, and NFPA standards.',
                'Responsive support that pairs technical know-how with personal service.',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                  className="relative border border-gray-300 rounded-xl p-6 bg-white hover:shadow-md transition-all"
                >
                  <div className="absolute left-0 top-0 w-1.5 h-full bg-[#c62931]/80 rounded-l-xl"></div>
                  <p className="pl-4 text-gray-700">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 3: Testimonials */}
        <motion.div {...fadeUp(0.3)} className="text-center lg:text-left">
          <div className="inline-block mb-5 px-3 py-1 bg-[#c62931]/10 text-[#c62931] text-sm font-semibold rounded-full uppercase tracking-wide">
            Client Feedback
          </div>
          <h2 className="text-4xl font-extrabold text-[#222] mb-12 tracking-tight">
            Still Unsure? Here’s How We’ve Helped Others
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              '“Our technicians appreciated the clear specification guidance when we ordered a custom Fireguard® tank — it showed that Metal Products USA understood our facility’s needs.”',
              '“We needed a rush turn for underground tanks — Metal Products responded quickly and made it happen, keeping our project on schedule.”',
            ].map((quote, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                className="relative border border-gray-300 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
              >
                <Quote className="w-6 h-6 text-[#c62931] absolute -top-3 -left-3 bg-white p-1 rounded-full shadow-sm" />
                <p className="italic text-gray-700 leading-relaxed">{quote}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInsights;
