'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('ContactPageForm');
    if (target) {
      const yOffset = -200; // adjust this value for more or less offset
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#111] via-[#161616] to-[#1A1A1A] text-white py-20 scrn-800:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 scrn-800:px-10 text-center scrn-1000:text-left">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl scrn-700:text-5xl font-extrabold text-[#c62931] mb-4 tracking-tight"
        >
          Let’s Get Started
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-300 text-lg scrn-600:text-xl max-w-2xl scrn-1000:max-w-3xl mb-10"
        >
          Your project deserves tanks built with experience and engineered for performance.
          Let’s talk:
        </motion.p>

        {/* Contact Info Grid */}
        <div className="grid scrn-600:grid-cols-3 gap-6 scrn-800:gap-8 mb-12 text-center scrn-1000:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center scrn-1000:items-start"
          >
            <Phone className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base scrn-600:text-lg font-semibold">770-945-8383</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center scrn-1000:items-start"
          >
            <Mail className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base scrn-600:text-lg font-semibold">sales@metalproductsusa.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center scrn-1000:items-start"
          >
            <MapPin className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base scrn-600:text-lg font-semibold">
              725 Main Street, Suwanee, GA 30024, USA
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col scrn-600:flex-row items-center justify-center scrn-1000:justify-start gap-4"
        >
          <a
            href="#ContactPageForm"
            onClick={handleSmoothScroll}
            className="group bg-[#c62931] hover:bg-[#a91f27] px-6 py-3 rounded-full text-base scrn-600:text-lg font-semibold flex items-center gap-2 transition-all"
          >
            Fill Out Our Contact Form
            <MessageCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-gray-400 text-lg scrn-600:text-xl max-w-3xl mx-auto scrn-1000:mx-0 italic"
        >
          Thank you for considering{' '}
          <span className="text-white font-semibold">Metal Products USA</span> — where expertise
          meets reliability, and your tank project is our priority.
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
