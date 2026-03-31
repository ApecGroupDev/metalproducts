"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const standoutFeatures = [
  "Heritage of reliability — Building Trust Since 1941",
  "Made in Suwanee, GA — proudly manufactured in the U.S.",
  "Built tough — engineered for gritty oilfield environments",
  "Safety-first design — meets spill containment and environmental standards",
  "Custom-capable — tailored to flow needs, chemical resistance, and site constraints",
  "Trusted by industry professionals — from operators to environmental engineers",
];

const harshConditionFeatures = [
  "Heavy-duty steel construction with corrosion-resistant finishes",
  "Secure sealed manways and vents for pressure safety",
  "Reinforced shells for impact and weather durability",
  "Easy-access inspection points for safety checks",
  "Custom configurations for varied capacity and transport requirements",
  "Optional external coatings and insulation for extreme environments",
];

const Features_OTR: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .otrf-display { font-family: 'Oswald', sans-serif; }
        .otrf-mono    { font-family: 'Space Mono', monospace; }

        .otrf-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 otrf-paper-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="otrf-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Why Us
              </span>
            </div>
            <h2 className="otrf-display font-bold text-white uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)] mb-10">
              Why Our Tanks
              <br />
              <span className="text-[#c62931]">Stand Out</span>
            </h2>
            <div className="space-y-4">
              {standoutFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-white/10 pl-4 py-2 hover:border-[#c62931]/50 transition-colors"
                >
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="otrf-mono text-white/70 text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="otrf-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Durability
              </span>
            </div>
            <h2 className="otrf-display font-bold text-white uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)] mb-10">
              Features for
              <br />
              <span className="text-[#c62931]">Harsh Conditions</span>
            </h2>
            <div className="space-y-4">
              {harshConditionFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-l-2 border-white/10 pl-4 py-2 hover:border-[#c62931]/50 transition-colors"
                >
                  <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="otrf-mono text-white/70 text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features_OTR;
