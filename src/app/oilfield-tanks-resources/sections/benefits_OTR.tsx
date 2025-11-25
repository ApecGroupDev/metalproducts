"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Droplets,
  Truck,
  ShieldCheck,
  Wrench,
  AlertCircle,
  Thermometer,
  Leaf,
  LucideIcon,
} from "lucide-react";

const Benefits_OTR: React.FC = () => {
  return (
    <section className="bg-[#fafafa] text-[#111] py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* LEFT COLUMN — Who Benefits */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Who Benefits from Our Oilfield Tanks
            </h2>
            <div className="h-[4px] w-20 bg-[#c62931] rounded-full mb-10"></div>

            <div className="space-y-6">
              <Benefit icon={Factory} text="On-site drilling and production operations needing rugged storage" />
              <Benefit icon={Droplets} text="Oil patch service providers delivering fluids and fuels" />
              <Benefit icon={Truck} text="Temporary storage setups (e.g., well servicing, frac tanks)" />
              <Benefit icon={ShieldCheck} text="Environmental service contractors needing compliant spill storage" />
              <Benefit icon={Wrench} text="Field maintenance teams demanding durable, easy-to-service tanks" />
            </div>
          </div>

          {/* RIGHT COLUMN — Addressing Common Concerns */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Addressing Common Concerns
            </h2>
            <div className="h-[4px] w-20 bg-[#c62931] rounded-full mb-10"></div>

            <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
              <Concern
                icon={AlertCircle}
                question="“Will this tank handle rough terrain?”"
                answer="Yes — our tanks are built with reinforced construction suitable for transport and rough site conditions."
              />
              <Concern
                icon={Thermometer}
                question="“Is it safe under pressure or extreme heat?”"
                answer="Absolutely — sealed vents, robust shells, and optional insulation enhance safety and performance."
              />
              <Concern
                icon={Leaf}
                question="“Can it handle environmental regulations?”"
                answer="Yes — our designs meet or exceed spill containment and environmental protection standards."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ========== SMALL COMPONENTS ==========

const Benefit = ({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="flex items-start gap-4"
  >
    <div className="text-[#c62931] bg-[#c62931]/10 p-3 rounded-full flex-shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
  </motion.div>
);

const Concern = ({
  icon: Icon,
  question,
  answer,
}: {
  icon: LucideIcon;
  question: string;
  answer: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="flex items-start gap-4"
  >
    <div className="text-[#c62931] bg-[#c62931]/10 p-3 rounded-full flex-shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="font-semibold text-[#111] mb-2">{question}</p>
      <p>{answer}</p>
    </div>
  </motion.div>
);

export default Benefits_OTR;
