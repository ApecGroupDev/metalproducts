"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .tl-display { font-family: 'Oswald', sans-serif; }
        .tl-serif   { font-family: 'Libre Baskerville', serif; }
        .tl-mono    { font-family: 'Space Mono', monospace; }

        .tl-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .tl-card {
          border-top: 2px solid rgba(198,41,49,0.2);
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
        }
        .tl-card::before {
          content: '';
          position: absolute;
          top: -2px; left: 0;
          width: 0; height: 2px;
          background: #c62931;
          transition: width 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .tl-card:hover::before { width: 100%; }
        .tl-card:hover { transform: translateY(-4px); }
      `}</style>

      <div className="absolute inset-0 tl-paper-grid pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-black/[0.07] pb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="tl-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our History
            </span>
          </div>
          <h2 className="tl-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Our Journey Through
            <br />
            <span className="text-[#c62931]">the Decades</span>
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="tl-card pt-5"
            >
              <span className="tl-mono text-[#c62931] text-xs tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="tl-display font-bold text-[#c62931] text-2xl uppercase mt-2 mb-1">
                {item.period}
              </h3>
              <h4 className="tl-display font-semibold text-[#1a1a1a] uppercase text-lg mb-3 leading-tight">
                {item.title}
              </h4>
              <p className="tl-mono text-[#555] text-sm leading-7">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline_About;
