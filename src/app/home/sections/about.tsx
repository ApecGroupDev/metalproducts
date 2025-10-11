"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="relative bg-[#fafafa] py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8 flex flex-col-reverse scrn-1200:flex-row items-center gap-16">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center scrn-1000:text-left"
        >
          <h2 className="text-4xl scrn-500:text-5xl font-extrabold text-[#111] leading-tight">
            Quality Tank Manufacturing <br /> Since 1941
          </h2>

          <div className="mt-4 h-[4px] w-24 bg-[#c62931] mx-auto scrn-1000:mx-0 rounded-full"></div>

          <p className="mt-8 text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-semibold text-[#c62931]">Metal Products USA</span>,
            where craftsmanship meets reliability. Since 1941, we’ve specialized in manufacturing
            robust, American-made storage tanks designed for the toughest industrial conditions.
            From energy and fuel facilities to agriculture and commercial operations, our work is
            built around your needs and elevated by over 80 years of trusted performance.
          </p>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Whether you operate a gas station, power plant, farm, or government facility—if you need
            a storage solution you can count on—we have you covered.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full scrn-1200:w-[50%] flex justify-center"
        >
          <div className="relative w-full scrn-600:w-4/5 scrn-1200:w-[85%]">
            <Image
              src="/images/backgrounds/home/About_Tank.webp"
              alt="Industrial Metal Tanks"
              width={1000}
              height={600}
              className="object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </motion.div>
      </div>

      {/* Optional subtle background accent */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/images/patterns/metal-texture-light.webp')] opacity-[0.04]"></div>
    </section>
  );
};

export default AboutSection;
