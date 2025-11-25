"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const history = [
  {
    period: "1941–1945",
    title: "Founding and Early Years",
    text: "Metal Products was founded in 1941 by Georgia Tech alumni C.E. Gammage and Robert Harris to fabricate ladders and doors for WWII Liberty Ships. These vessels, built at the rate of one per day, were vital in supplying England during the early war years.",
  },
  {
    period: "1950s–1960s",
    title: "Incorporation and Growth",
    text: "By the 1950s, the company transitioned into a corporation and began supplying tanks to leading petroleum brands such as Standard Oil, Sinclair, Shell, Texaco, Gulf, and Phillips Petroleum.",
  },
  {
    period: "1960s–1970s",
    title: "Infrastructure Boom",
    text: "As highways, airports, and shopping centers grew, so did our role—manufacturing 10,000-gallon skid tanks and 1,000-gallon wagon-mounted tanks with full pumping systems.",
  },
  {
    period: "1977–1979",
    title: "Relocation and Modernization",
    text: "With the original Atlanta plant aging, we built a new, rail-served facility in Suwanee, GA, opening in 1978. The Atlanta plant officially closed in 1979.",
  },
  {
    period: "1980s",
    title: "Technological Advancements",
    text: "By 1983, we were integrating advanced underground tank technologies. Our customers included major players like Amoco, QuikTrip, Racetrac, and Texaco (including Caribbean projects).",
  },
  {
    period: "1990s–2000s",
    title: "Ongoing Growth",
    text: "We expanded our product line to include aboveground tanks, oil/water separators, and enhanced underground systems. The Suwanee plant grew five times to meet demand.",
  },
  {
    period: "2021",
    title: "80 Years of Service",
    text: "We proudly celebrated our 80th anniversary, marking decades of innovation, regulatory compliance, and customer trust.",
  },
  {
    period: "2023–Today",
    title: "New Ownership",
    text: "In May 2023, after three generations of Gammage family ownership, Metal Products was acquired by Ali Husain. With new leadership came modernized protocols, expanded production efficiencies, and renewed enthusiasm. Today, our facilities are equipped with improved overhead cranes, highly trained staff, and streamlined production, enabling us to exceed customer expectations for quality and speed.",
  },
];

const Timeline_About: React.FC = () => {
  return (
    <section className="bg-[#f8f8f8] text-[#111] py-28">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our Journey Through the Decades
          </h2>
          <div className="h-[3px] w-24 bg-[#c62931] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-3 md:before:left-1/2 before:w-[2px] before:bg-[#e0e0e0]">
          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`relative lg:w-1/2 px-4 py-12 lg:py-6 ${i % 2 === 0
                ? "lg:pr-20 lg:text-right lg:left-0"
                : "lg:pl-20 lg:text-left lg:left-1/2"
                }`}
            >
              <div className="absolute left-0 md:left-[calc(50%-10px)] top-10 w-5 h-5 bg-[#c62931] rounded-full border-[3px] border-white shadow-md"></div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <h3 className="text-[#c62931] font-semibold text-3xl tracking-wide mb-1">
                  {item.period}
                </h3>
                <h4 className="text-xl md:text-2xl font-bold mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              The Team Behind the Legacy
            </h3>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
              Behind every decade of innovation is a team dedicated to craftsmanship,
              safety, and excellence. Our people have powered Metal Products’ success
              for over 80 years — and continue to drive our mission forward today.
            </p>
          </div>

          <div className="relative max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/images/about/Team_About.webp"
                  alt="Metal Products USA Team"
                  fill
                  sizes="(max-width: 750px) 100vw, 1440px"
                  className="object-cover hover:scale-[1.02] transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline_About;
