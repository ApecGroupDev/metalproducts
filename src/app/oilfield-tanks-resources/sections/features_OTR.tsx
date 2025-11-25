'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircleIcon as CheckCircle } from 'lucide-react';

const Features_OTR: React.FC = () => {
  const standoutFeatures = [
    "Heritage of reliability — Building Trust Since 1941",
    "Made in Suwanee, GA — proudly manufactured in the U.S.",
    "Built tough — engineered for gritty oilfield environments",
    "Safety-first design — meets spill containment and environmental standards",
    "Custom-capable — tailored to flow needs, chemical resistance, and site constraints",
    "Trusted by industry professionals — from operators to environmental engineers"
  ];

  const harshConditionFeatures = [
    "Heavy-duty steel construction with corrosion-resistant finishes",
    "Secure sealed manways and vents for pressure safety",
    "Reinforced shells for impact and weather durability",
    "Easy-access inspection points for safety checks",
    "Custom configurations for varied capacity and transport requirements",
    "Optional external coatings and insulation for extreme environments"
  ];

  return (
    <section className="relative bg-[#fafafa] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-start gap-16">

        {/* Left Column: Why Our Oilfield Tanks Stand Out */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="xl:w-1/2 space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111] leading-tight">
            Why Our Oilfield Tanks Stand Out
          </h2>
          <div className="h-[4px] w-24 bg-[#c62931] rounded-full"></div>

          <div className="space-y-4">
            {standoutFeatures.map((feature, i) => (
              <Feature key={i} text={feature} />
            ))}
          </div>
        </motion.div>

        {/* Right Column: Features Designed for Harsh Conditions */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="xl:w-1/2 space-y-8 relative"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111] leading-tight">
            Features Designed for Harsh Conditions
          </h2>
          <div className="h-[4px] w-24 bg-[#c62931] rounded-full"></div>

          <div className="space-y-4">
            {harshConditionFeatures.map((feature, i) => (
              <Feature key={i} text={feature} />
            ))}
          </div>

          {/* Optional Image overlay */}
          <div className="absolute top-0 right-0 -z-10 w-64 xl:w-80 opacity-20">
            <Image
              src="/images/backgrounds/resources/Oilfield-Tank.webp"
              alt="Oilfield Tank"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Feature component with icon
const Feature = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="text-[#c62931] w-6 h-6 flex-shrink-0" />
    <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
  </div>
);

export default Features_OTR;
