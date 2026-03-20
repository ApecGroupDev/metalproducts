'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Ban, Globe, RefreshCw, Scale, Mail, ShieldAlert, Tag } from 'lucide-react';

const sections = [
  {
    icon: <Globe className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '1. Website Use',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          You agree to use this website only for lawful purposes. You must <strong>NOT</strong>:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg">
          {[
            'Use the site for illegal activities',
            'Attempt to hack, damage, or disrupt the website',
            'Upload harmful code or malware',
            'Misuse contact forms or spam',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: <FileText className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '2. Information Disclaimer',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          All content on this website is provided for general informational purposes only.
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg">
          {[
            'Product details, timelines, and specifications may change',
            'We do not guarantee completeness or accuracy at all times',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: <Tag className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '3. Quotes & Services',
    content: (
      <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg">
        {[
          'Any quote provided is non-binding until confirmed in writing',
          'Final pricing, timelines, and specifications are agreed separately',
          'Custom tank manufacturing depends on project requirements',
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '4. Intellectual Property',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          All content on this website (text, images, logos, design) is owned by{' '}
          <span className="font-semibold text-gray-900">Metal Products USA</span>. You may{' '}
          <strong>NOT</strong>:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg">
          {[
            'Copy or reuse content',
            'Reproduce or distribute materials',
            'Use our brand or logo without permission',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: <Ban className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '5. Limitation of Liability',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          We are not liable for:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg mb-4">
          {[
            'Any damages from using this website',
            'Loss of data or business interruption',
            'Errors or omissions in content',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base sm:text-lg font-medium">
          Use of this website is at your own risk.
        </p>
      </>
    ),
  },
  {
    icon: <Globe className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '6. Third-Party Links',
    content: (
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We may link to external websites. We are not responsible for their content or policies.
      </p>
    ),
  },
  {
    icon: <Scale className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '7. Governing Law',
    content: (
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        These Terms are governed by the laws of the{' '}
        <strong>State of Georgia, USA</strong>.
      </p>
    ),
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '8. Changes to Terms',
    content: (
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We may update these Terms at any time. Continued use of the website means you accept
        the updated Terms.
      </p>
    ),
  },
  {
    icon: <Mail className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '9. Contact Information',
    content: (
      <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2">
        <p className="font-semibold text-gray-900">Metal Products USA</p>
        <p>725 Main Street, Suwanee, GA 30024, USA</p>
        <p>
          Phone:{' '}
          <a href="tel:7709458383" className="text-[#c62931] hover:underline">
            770-945-8383
          </a>
        </p>
        <p>
          Email:{' '}
          <a href="mailto:sales@metalproductsusa.com" className="text-[#c62931] hover:underline">
            sales@metalproductsusa.com
          </a>
        </p>
      </div>
    ),
  },
];

const TermsContent: React.FC = () => {
  return (
    <section className="bg-[#fafafa] py-24">
      <div className="max-w-[860px] mx-auto px-6 md:px-10 space-y-14">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
        >
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            By accessing or using this website, you agree to these Terms of Use. If you do not
            agree, please do not use the site.
          </p>
        </motion.div>

        {/* Sections */}
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 * i }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-5">
              {section.icon}
              <h2 className="text-xl sm:text-2xl font-bold text-[#111]">{section.title}</h2>
            </div>
            <div className="pl-10">{section.content}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TermsContent;