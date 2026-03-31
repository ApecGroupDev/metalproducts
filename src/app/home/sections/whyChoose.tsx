"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon as CheckCircle } from "lucide-react";

const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .wc-display { font-family: 'Oswald', sans-serif; }
        .wc-serif   { font-family: 'Libre Baskerville', serif; }
        .wc-mono    { font-family: 'Space Mono', monospace; }

        /* Fine linen-paper grid */
        .paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        /* Sweep animation for the rule */
        @keyframes rule-sweep {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .rule-sweep { transform-origin: left; }

        /* Feature row */
        .feature-row {
          border-top: 1px solid rgba(0,0,0,0.07);
          padding-top: 14px;
          transition: border-color 0.25s;
        }
        .feature-row:hover { border-color: rgba(198,41,49,0.35); }

        /* Service card — architectural top-border style */
        .svc-card {
          border-top: 2px solid rgba(198,41,49,0.25);
          padding-top: 20px;
          transition: border-color 0.3s, transform 0.3s;
          position: relative;
        }
        .svc-card::before {
          content: '';
          position: absolute;
          top: -2px; left: 0;
          width: 0; height: 2px;
          background: #c62931;
          transition: width 0.4s cubic-bezier(0.77,0,0.18,1);
        }
        .svc-card:hover::before { width: 100%; }
        .svc-card:hover { transform: translateY(-5px); }

        /* Industry card — left-border slash */
        .ind-card {
          border-left: 2px solid rgba(198,41,49,0.3);
          padding: 16px 0 16px 16px;
          transition: border-color 0.25s, transform 0.25s;
          position: relative;
        }
        .ind-card:hover {
          border-color: #c62931;
          transform: translateX(5px);
        }

        /* Number counter badge */
        .num-badge {
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: rgba(198,41,49,0.4);
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        /* Industry letter icon */
        .ind-icon {
          width: 32px; height: 32px;
          border: 1px solid rgba(198,41,49,0.25);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 700;
          color: #c62931;
          margin-bottom: 10px;
          flex-shrink: 0;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 paper-grid pointer-events-none" />

      {/* Top-right warm glow accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c62931] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Vertical edge lines — architectural detail */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 space-y-32">
        {/* ── WHY CHOOSE US ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Section header — left-aligned editorial */}
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-black/[0.07] pb-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-px bg-[#c62931]" />
                <span className="wc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="wc-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.6rem,4.5vw,4rem)]">
                Built on Trust.
                <br />
                <span className="text-[#c62931]">Driven by Precision.</span>
              </h2>
            </div>
            {/* Pull quote to the right */}
            <p className="wc-serif italic text-[#888] text-sm max-w-[220px] leading-7 border-l-2 border-[#c62931]/30 pl-4 self-end mb-1">
              &quot;Over 80 years of trusted American manufacturing.&quot;
            </p>
          </div>

          {/* Feature grid — two columns */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            <div className="space-y-0">
              <Feature
                num="01"
                text="Heritage of excellence — Building Trust Since 1941"
              />
              <Feature
                num="02"
                text="Made in the USA — manufactured in Suwanee, GA"
              />
              <Feature
                num="03"
                text="Wide-reaching expertise — energy, agriculture, and industry"
              />
            </div>
            <div className="space-y-0">
              <Feature
                num="04"
                text="Diverse tank solutions — aboveground, underground, oilfield"
              />
              <Feature
                num="05"
                text="Custom-built manufacturing — engineered to your specs"
              />
              <Feature
                num="06"
                text="Regulation-ready — compliant with EPA & UL standards"
              />
            </div>
          </div>
        </motion.div>

        {/* ── CORE MANUFACTURING ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="mb-12 border-b border-black/[0.07] pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="wc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Services
              </span>
            </div>
            <h2 className="wc-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
              Core Manufacturing
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {services.map((s, i) => (
              <div key={i} className="svc-card">
                <div className="num-badge">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="wc-display font-semibold text-[#1a1a1a] uppercase text-xl mb-3 leading-none">
                  {s.title}
                </h3>
                <p className="wc-mono text-[#777] text-sm leading-7">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── WHO WE SERVE ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="mb-12 border-b border-black/[0.07] pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="wc-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Industries
              </span>
            </div>
            <h2 className="wc-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
              Who We Serve
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
            {industries.map((ind, i) => (
              <div key={i} className="ind-card">
                <div className="ind-icon">{ind.title[0]}</div>
                <h3 className="wc-display font-semibold text-[#1a1a1a] uppercase text-lg leading-none mb-2">
                  {ind.title}
                </h3>
                <p className="wc-mono text-[#777] text-sm leading-7">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Feature = ({ num, text }: { num: string; text: string }) => (
  <div className="feature-row flex items-start gap-4 pb-5">
    <span className="wc-mono text-[#c62931] text-xs tracking-widest pt-1 flex-shrink-0">
      {num}
    </span>
    <div className="flex items-start gap-3">
      <CheckCircle className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
      <p className="wc-mono text-[#555] text-sm leading-7">{text}</p>
    </div>
  </div>
);

const services = [
  {
    title: "Above Ground Tanks",
    desc: "Corrosion-resistant, secure, industry-grade storage.",
  },
  {
    title: "Underground Tanks",
    desc: "EPA-compliant and engineered for underground durability.",
  },
  {
    title: "Oil-Water Separators",
    desc: "Efficient solutions for environmental protection.",
  },
  {
    title: "Oilfield Tanks",
    desc: "Built for extreme oil extraction environments.",
  },
  {
    title: "Specialty Tanks",
    desc: "Plasteel®, Elutron®, Flameshield®, Fireguard®.",
  },
];

const industries = [
  {
    title: "Energy & Petroleum",
    desc: "Fuel stations, refineries, and depots.",
  },
  { title: "Agriculture", desc: "Fuel and chemical storage systems." },
  { title: "Commercial", desc: "Fleets, contractors, heavy equipment." },
  { title: "Government", desc: "Public infrastructure and facilities." },
  { title: "Environmental", desc: "Containment and compliance systems." },
];

export default WhyChooseSection;
