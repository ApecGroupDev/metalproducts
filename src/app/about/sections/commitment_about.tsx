"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Commitment_About: React.FC = () => {
  return (
    <section className="bg-white text-[#111] py-28">
      <div className="max-w-[1440px] mx-auto px-6 scrn-750:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl scrn-750:text-4xl font-extrabold mb-4">
            Our Commitment Today
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 text-lg scrn-750:text-xl leading-relaxed mb-10">
            As of 2025, Metal Products continues to operate at full capacity, manufacturing:
          </p>

          {/* List */}
          <div className="space-y-5 mb-10">
            {[
              "Underground and aboveground storage tanks",
              "Oil-water separators",
              "Specialty tanks using Elutron® technology",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3">
                <Check className="text-[#c62931] w-6 h-6 flex-shrink-0" />
                <p className="text-gray-800 text-lg scrn-750:text-xl">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg scrn-750:text-xl leading-relaxed mb-4">
            Every tank we produce is backed by heritage, engineering, and trust —
            serving clients across the southeast and nationwide.
          </p>

          <p className="text-gray-700 text-lg scrn-750:text-xl leading-relaxed font-medium">
            We are proud to participate in today’s robust economy — helping businesses fuel their
            growth with tanks built to last.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Commitment_About;
