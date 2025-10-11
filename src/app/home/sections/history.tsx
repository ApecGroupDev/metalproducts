'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const History: React.FC = () => {
  return (
    <section className="relative bg-[#f8f8f8] py-20 scrn-1000:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col scrn-1000:flex-row items-center gap-16 px-4 scrn-600:px-6 scrn-1000:px-8">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center scrn-1000:justify-start w-full scrn-1000:w-1/2"
        >
          <div className="relative w-full scrn-600:w-4/5 scrn-1000:w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/backgrounds/home/HISTORY.webp"
              alt="Historical Metal Products"
              width={800}
              height={500}
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center scrn-1000:text-left w-full scrn-1000:w-1/2"
        >
          <h2 className="text-3xl scrn-600:text-4xl scrn-1000:text-5xl font-extrabold text-[#c62931] mb-6">
            Our History
          </h2>

          <p className="text-gray-700 text-lg scrn-600:text-xl leading-relaxed mb-10 max-w-2xl mx-auto scrn-1000:mx-0">
            Metal Products Company was founded in <span className="font-semibold text-gray-900">1941</span> as a proprietorship to fabricate
            ladders and doors for Liberty Ships, which were being built at the rate of one per day. These ships were used to support supply
            for England in the early part of WWII.
          </p>

          <div>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-[#c62931] text-white font-semibold rounded-full shadow-md hover:bg-[#a91f27] transition-all duration-300"
            >
              Full Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
