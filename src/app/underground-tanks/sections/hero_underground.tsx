'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero_Underground: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden">
      {/* Background Image - Workshop (Desktop + Mobile Unified) */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/tanks/Hero_Underground.webp"
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
            Underground Storage Tanks Built for Industry
          </h1>
          <div className="mt-6 h-[4px] w-28 bg-[#c62931] mx-auto scrn-1000:mx-0 rounded-full"></div>

          <p className="mt-8 text-gray-200 text-lg scrn-700:text-xl font-light max-w-3xl mx-auto scrn-1000:mx-0 leading-relaxed">
            <span className='text-xl scrn-700:text-2xl font-semibold'>Trusted Underground Storage Solutions Since 1941</span><br /><br />
            When it comes to protecting underground assets and ensuring regulatory compliance, nothing beats decades of manufacturing mastery.
            At <span className="font-semibold">Metal Products Company</span>, we’ve been <span className="font-semibold">building and delivering
              robust underground storage tanks</span> since <span className="font-semibold">1941</span> — a legacy of performance you can count on.
            Engineered for resilience and crafted in the U.S., our tanks stand up to harsh environmental conditions while keeping safety top of mind.
          </p>
          <p className="mt-8 text-gray-200 text-lg scrn-700:text-xl font-light max-w-3xl mx-auto scrn-1000:mx-0 leading-relaxed">
            Whether you're installing at gas stations, industrial sites, or government facilities, our tanks are designed to meet
            <span className="font-semibold"> EPA standards</span> and deliver long-lasting performance.
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
      </div>
    </section>
  );
};

export default Hero_Underground;
