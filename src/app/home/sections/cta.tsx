'use client';

import React from 'react';
import { Phone, Mail, MapPin, ArrowRightCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#111] via-[#161616] to-[#1A1A1A] text-white py-20 md:py-24 overflow-hidden">
      {/* Subtle Metal Texture */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/textures/metal-pattern.webp')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 text-center lg:text-left">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-[#c62931] mb-4 tracking-tight"
        >
          Let’s Talk — We’ve Been Building Trust Since 1941
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-gray-300 text-lg sm:text-xl max-w-2xl lg:max-w-3xl mb-8"
        >
          Looking for tank solutions that combine heritage, quality, and unmatched reliability?
        </motion.p>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8 mb-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <Phone className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base sm:text-lg font-semibold">770-945-8383</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <Mail className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base sm:text-lg font-semibold">sales@metalproductsusa.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center lg:items-start"
          >
            <MapPin className="w-7 h-7 text-[#c62931] mb-2" />
            <p className="text-base sm:text-lg font-semibold">
              725 Main Street, Suwanee, GA 30024
            </p>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4 mb-10">
          <Link
            href="/contact"
            className="group bg-[#c62931] hover:bg-[#a91f27] px-6 py-3 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 transition-all"
          >
            Contact Our Team <ArrowRightCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/oilfield-tanks-resources"
            className="group border border-[#c62931] text-[#c62931] hover:bg-[#c62931] hover:text-white px-6 py-3 rounded-full text-base sm:text-lg font-semibold flex items-center gap-2 transition-all"
          >
            Explore Resources
          </Link>
        </div>

        {/* Services List */}
        <div className="mt-6 text-gray-300 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:text-left">
          {[
            'Above Ground Gas Tanks',
            'Underground Storage Tanks',
            'Oil-Water Separators',
            'Oilfield Tanks',
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="font-medium text-base sm:text-lg hover:text-white transition-colors"
            >
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
