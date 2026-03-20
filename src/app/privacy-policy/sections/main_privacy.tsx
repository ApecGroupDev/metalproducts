'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Lock, UserCheck, RefreshCw, Mail, Globe, Share2, Cookie } from 'lucide-react';

const sections = [
  {
    icon: <Eye className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '1. Information We Collect',
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-3">a) Information You Provide</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
            When you contact us, request a quote, or fill out a form, we may collect:
          </p>
          <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg">
            {['Name', 'Email address', 'Phone number', 'Company name', 'Project details'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-3">b) Automatically Collected Data</h3>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
            When you browse our website, we may collect:
          </p>
          <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg">
            {['IP address', 'Browser type', 'Pages visited', 'Device information'].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            This data helps us improve site performance and user experience.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '2. How We Use Your Information',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          We use your information to:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg mb-4">
          {[
            'Respond to inquiries and provide quotes',
            'Communicate about your project',
            'Improve our website and services',
            'Maintain security and prevent misuse',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base sm:text-lg font-medium">
          We do not sell your personal information.
        </p>
      </>
    ),
  },
  {
    icon: <Share2 className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '3. Sharing of Information',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          We may share your data only with:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg mb-4">
          {[
            'Service providers (hosting, email tools, etc.)',
            'Legal authorities if required',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          All third parties are required to keep your data secure.
        </p>
      </>
    ),
  },
  {
    icon: <Cookie className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '4. Cookies',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          Our website may use cookies to:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg mb-4">
          {[
            'Improve functionality',
            'Track usage behavior',
            'Enhance user experience',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          You can disable cookies in your browser settings.
        </p>
      </>
    ),
  },
  {
    icon: <Lock className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '5. Data Security',
    content: (
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We use reasonable technical and administrative measures to protect your information.
        However, no online system is 100% secure.
      </p>
    ),
  },
  {
    icon: <Globe className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '6. Third-Party Links',
    content: (
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Our website may link to external websites. We are not responsible for their privacy
        practices.
      </p>
    ),
  },
  {
    icon: <UserCheck className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '7. Your Rights',
    content: (
      <>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3">
          You may request to:
        </p>
        <ul className="list-none space-y-2 text-gray-700 text-base sm:text-lg mb-4">
          {['Access your data', 'Correct your data', 'Delete your data'].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-[#c62931] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          To do so, contact us using the details below.
        </p>
      </>
    ),
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '8. Changes to This Policy',
    content: (
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        We may update this Privacy Policy at any time. Updates will be posted on this page.
      </p>
    ),
  },
  {
    icon: <Mail className="w-6 h-6 text-[#c62931] flex-shrink-0 mt-1" />,
    title: '9. Contact Us',
    content: (
      <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-2">
        <p className="font-semibold text-gray-900">Metal Products Company, Inc.</p>
        <p>725 Main Street, Suwanee, GA 30024</p>
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

const PrivacyContent: React.FC = () => {
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
            <span className="font-semibold text-gray-900">Metal Products USA</span> (&quot;we,&quot; &quot;our,&quot;
            or &quot;us&quot;) respects your privacy and is committed to protecting any information you share
            with us through our website. This Privacy Policy explains how we collect, use, and
            protect your information when you visit{' '}
            <a href="https://www.metalproductsusa.com" className="text-[#c62931] hover:underline">
              https://www.metalproductsusa.com
            </a>
            .
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

export default PrivacyContent;