"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Handshake, Building2, MapPin } from "lucide-react";

const Trust_OTR: React.FC = () => {
  return (
    <section className="bg-white text-[#111] py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Why Clients Trust Us
          </h2>
          <div className="h-[4px] w-20 bg-[#c62931] mx-auto rounded-full mb-10"></div>

          {/* Intro Paragraph */}
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
            Over more than eight decades,{" "}
            <span className="font-semibold text-[#c62931]">Metal Products Company</span> 
            has earned its reputation across every U.S. oil patch, manufacturing tanks that deliver 
            durability, safety, and compliance. Our legacy is built on:
          </p>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mb-16">
            <TrustPoint icon={ShieldCheck} text="Trust informed by history — since 1941" />
            <TrustPoint icon={Award} text="UL-listed manufacturing standards" />
            <TrustPoint icon={Handshake} text="PEI memberships and industry partnerships" />
            <TrustPoint icon={Building2} text="Proven success in both commercial and government operations" />
          </div>

          {/* Case Study Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f5] rounded-2xl p-8 md:p-10 shadow-sm border border-gray-200 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="text-[#c62931] bg-[#c62931]/10 p-3 rounded-full">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                For instance, a Texas oilfield operator recently installed our tanks near drilling sites. 
                These tanks withstood harsh conditions and made regulatory inspections seamless — earning 
                praise from onsite crews for reliability and long-term performance.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustPoint = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="flex items-start gap-4"
  >
    <div className="text-[#c62931] bg-[#c62931]/10 p-3 rounded-full flex-shrink-0">
      <Icon className="w-5 h-5" />
    </div>
    <p className="text-gray-700 text-base leading-relaxed">{text}</p>
  </motion.div>
);

export default Trust_OTR;
