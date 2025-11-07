"use client";

import React from "react";
import { motion } from "framer-motion";
import ContactPageForm from "@/components/contactForm";

const MainContact: React.FC = () => {
  return (
    <section className="relative py-24 scrn-1000:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8 flex flex-col scrn-1200:flex-row items-center gap-16 scrn-1200:gap-24">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-center scrn-1000:text-left"
        >
          <h2 className="text-4xl scrn-600:text-5xl font-extrabold text-[#c62931] leading-tight">
            Let’s Talk — We’ve Been Building Trust Since 1941
          </h2>
          <div className="mt-4 h-[4px] w-24 bg-[#c62931] mx-auto scrn-1000:mx-0 rounded-full"></div>

          <p className="mt-8 text-gray-800 text-lg leading-relaxed">
            Working on a fueling project — a new station, an upgrade, or ensuring environmental compliance?
            You’ve come to the right place.
          </p>

          <p className="mt-6 text-gray-800 text-lg leading-relaxed">
            For over <span className="font-semibold text-[#c62931]">80 years</span>, we’ve built tanks and separators trusted by everyone from
            small contractors to major brands like{" "}
            <span className="font-semibold text-[#c62931]">Shell</span>,{" "}
            <span className="font-semibold text-[#c62931]">Texaco</span>,{" "}
            <span className="font-semibold text-[#c62931]">Amoco</span>, and{" "}
            <span className="font-semibold text-[#c62931]">QuikTrip</span>.
          </p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full scrn-1200:w-[50%]"
        >
          <div id="ContactPageForm" className="relative bg-white rounded-2xl shadow-xl p-8 scrn-800:p-10 scrn-1000:p-12 scroll-mt-24">
            <h3 className="text-2xl scrn-600:text-3xl font-extrabold text-[#c62931] mb-6">
              For More Information
            </h3>
            <ContactPageForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainContact;
