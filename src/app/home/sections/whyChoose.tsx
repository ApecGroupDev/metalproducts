"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon as CheckCircle } from "lucide-react";

const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-[#fafafa] text-[#111] py-28">
      <div className="max-w-[1440px] mx-auto px-6 scrn-800:px-12 space-y-24">

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl scrn-600:text-5xl font-extrabold text-center">
            Why Choose Metal Products USA for Your Tank Needs?
          </h2>
          <div className="h-[4px] w-24 bg-[#c62931] mx-auto rounded-full"></div>

          <div className="grid scrn-1000:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Feature text="Heritage of excellence — Building Trust Since 1941" />
              <Feature text="Made in the USA — manufactured in Suwanee, GA" />
              <Feature text="Wide-reaching expertise — energy, agricultural, fuel, and commercial sectors" />
            </div>
            <div className="space-y-4">
              <Feature text="Diverse tank offerings — aboveground, underground, oilfield, and more" />
              <Feature text="Custom manufacturing — built to your specs, no compromises" />
              <Feature text="Regulation-ready — built to meet EPA, UL, and industry standards" />
            </div>
          </div>
        </motion.div>

        {/* CORE SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl scrn-600:text-5xl font-extrabold text-center">
            Our Core Tank Manufacturing Services
          </h2>
          <div className="h-[4px] w-24 bg-[#c62931] mx-auto rounded-full"></div>

          <div className="grid scrn-600:grid-cols-2 scrn-1000:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Above Ground Gas Tanks", desc: "Corrosion-resistant, secure, industry-grade" },
              { title: "Underground Storage Tanks", desc: "EPA-compliant and engineered for underground conditions" },
              { title: "Oil-Water Separators", desc: "Designed for environmental safety and efficient water treatment" },
              { title: "Oilfield Tanks", desc: "Rugged tanks made for demanding oil extraction environments" },
              { title: "Specialty Storage Tanks", desc: "Including Plasteel®, Elutron®, Flameshield®, and Fireguard®" },
            ].map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        </motion.div>

        {/* INDUSTRIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl scrn-600:text-5xl font-extrabold text-center">
            Industries We Serve
          </h2>
          <div className="h-[4px] w-24 bg-[#c62931] mx-auto rounded-full"></div>

          <div className="grid scrn-600:grid-cols-2 scrn-1000:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Energy & Petroleum", desc: "Fueling stations, refineries, and service depots" },
              { title: "Agriculture", desc: "Fuel, chemical, and grain storage solutions" },
              { title: "Commercial & Industrial", desc: "Fleets, contractors, and heavy-equipment operations" },
              { title: "Government & Municipal", desc: "Reliable storage systems for public facilities" },
              { title: "Environmental & Infrastructure", desc: "Separators and containment systems for safe compliance" },
            ].map((industry, i) => (
              <IndustryCard key={i} {...industry} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Reusable small components
const Feature = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="text-[#c62931] w-6 h-6 flex-shrink-0" />
    <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
  </div>
);

const ServiceCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300">
    <h3 className="font-bold text-xl mb-2 text-[#111]">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const IndustryCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-[#f5f5f5] p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300">
    <h3 className="font-bold text-xl mb-2 text-[#111]">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export default WhyChooseSection;
