'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero_About: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      {/* Background Image - Workshop (Desktop + Mobile Unified) */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/about/Hero_About.webp"
          alt="Metal Fabrication Workshop"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlays for text contrast & brand tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent"></div>
        <div className="absolute inset-0 bg-[rgba(198,41,49,0.15)] mix-blend-multiply"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col scrn-1000:flex-row items-center justify-between px-6 scrn-800:px-12 pt-32 pb-20 scrn-1000:pt-48 scrn-1000:pb-32">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center scrn-1000:text-left max-w-4xl"
        >
          <h1 className="text-5xl scrn-500:text-6xl scrn-900:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            About Metal Products USA – Tank Manufacturers Since 1941
          </h1>
          <div className="mt-6 h-[4px] w-28 bg-[#c62931] mx-auto scrn-1000:mx-0 rounded-full"></div>

          <p className="mt-8 text-gray-200 text-lg scrn-700:text-xl font-light max-w-3xl mx-auto scrn-1000:mx-0 leading-relaxed">
            <span className='text-xl scrn-700:text-2xl font-semibold'>A Legacy of American Manufacturing</span><br />
            Since 1941, Metal Products Company has been Building Trust through durable,
            American-made tanks. Our roots began in wartime America, and over the decades,
            we’ve grown into one of the nation’s most respected tank manufacturers,
            serving industries from petroleum and energy to agriculture, government, and beyond.
          </p>

          <div className="mt-10 flex flex-col scrn-500:flex-row items-center scrn-1000:items-start gap-4 justify-center scrn-1000:justify-start">
            <button
              onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-8 py-3 bg-[#c62931] text-white font-semibold rounded-full shadow-md hover:bg-[#a91f27] transition-all duration-300"
            >
              Learn More
            </button>
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
          className="mt-16 scrn-1000:mt-0 scrn-1000:w-[55%] relative flex justify-center"
        >
          <div className="relative w-full scrn-600:w-4/5 scrn-1200:w-3/4">
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

export default Hero_About;
