'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const FAQTrust: React.FC = () => {
  return (
    <section className="relative bg-[#f8f8f8] py-24 scrn-1000:py-32 border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 scrn-800:px-12">

        {/* Top Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl scrn-600:text-4xl scrn-1000:text-5xl font-extrabold text-[#c62931] tracking-tight mb-16"
        >
          Common Questions Answered
        </motion.h2>

        {/* FAQ GRID */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid scrn-1000:grid-cols-2 gap-12 scrn-1000:gap-20 max-w-5xl mx-auto"
        >
          {[
            {
              q: 'Do you manufacture custom tanks?',
              a: 'Yes—every tank is built to your site’s specific needs and regulatory requirements.',
            },
            {
              q: 'Can I rely on the build quality?',
              a: 'Absolutely—we’ve specialized in tough, long-lasting tanks since 1941.',
            },
            {
              q: 'Are your tanks compliant with regulations?',
              a: 'Yes—our tanks meet EPA, UL, NFPA, and other relevant industry codes.',
            },
            {
              q: 'Is everything made in the U.S.?',
              a: 'Yes—our manufacturing facilities in Suwanee, GA produce every tank you see.',
            },
          ].map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg scrn-600:text-xl font-semibold text-gray-900">
                “{item.q}”
              </h3>
              <p className="text-gray-700 text-base scrn-600:text-lg leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-[3px] bg-[#c62931] mx-auto my-24"></div>

        {/* Why Customers Trust Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center scrn-1000:text-left"
        >
          <h2 className="text-3xl scrn-600:text-4xl scrn-1000:text-5xl font-extrabold text-[#c62931] mb-10 text-center scrn-1000:text-left">
            Why Customers Trust Us
          </h2>

          <p className="text-gray-700 text-lg scrn-600:text-xl leading-relaxed mb-12 max-w-3xl mx-auto scrn-1000:mx-0">
            For over eight decades, <span className="font-semibold text-gray-900">Metal Products USA</span> has been delivering storage better than most—because our tanks are not just built, they’re engineered.
          </p>

          <ul className="grid scrn-600:grid-cols-2 gap-6 text-gray-800 text-base scrn-600:text-lg max-w-5xl mx-auto scrn-1000:mx-0">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#c62931] w-6 h-6 mt-1 flex-shrink-0" />
              <span><strong>Long-term reliability</strong> — Building Trust Since 1941</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#c62931] w-6 h-6 mt-1 flex-shrink-0" />
              <span><strong>Proven quality</strong> — UL-listed processes and rigorous standards</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#c62931] w-6 h-6 mt-1 flex-shrink-0" />
              <span><strong>Affiliation with PEI</strong> — staying ahead in industry practice</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-[#c62931] w-6 h-6 mt-1 flex-shrink-0" />
              <span><strong>Real-world performance</strong> — trusted by commercial, industrial, and government users</span>
            </li>
          </ul>

          <p className="mt-12 text-gray-700 text-lg scrn-600:text-xl italic max-w-3xl mx-auto scrn-1000:mx-0 border-l-4 border-[#c62931] pl-6">
            For example: A Midwest agricultural co-op upgraded to our Plasteel® Elutron® tanks for added corrosion resistance—
            and has seen performance that lasts for decades, just like our heritage promises.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQTrust;
