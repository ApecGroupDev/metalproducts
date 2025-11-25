'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      {/* Background Image - Workshop (Desktop + Mobile Unified) */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/home/Hero_Home_New.webp"
          alt="Metal Fabrication Workshop"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlays for text contrast & brand tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-transparent"></div>
        <div className="absolute inset-0 bg-[rgba(198,41,49,0.15)] mix-blend-multiply"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 pt-32 pb-20 lg:pt-48 lg:pb-32">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Top Tank Manufacturers – Made in the USA
          </h1>
          <div className="mt-6 h-[4px] w-28 bg-[#c62931] mx-auto lg:mx-0 rounded-full"></div>

          <p className="mt-8 text-gray-200 text-lg md:text-xl font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
            Precision. Durability. Innovation.
            Building the backbone of America’s fuel and industrial infrastructure.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 justify-center lg:justify-start">
            <Link
              href="/oilfield-tanks-resources"
              className="px-8 py-3 bg-[#c62931] text-white font-semibold rounded-full shadow-md hover:bg-[#a91f27] transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Hero Tank Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-16 lg:mt-0 lg:w-[55%] relative flex justify-center"
        >
          <div className="relative w-full sm:w-4/5 xl:w-3/4">
            <Image
              src="/images/backgrounds/resources/Landing-Page-Tank.webp"
              alt="Metal Tank"
              width={1200}
              height={600}
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
