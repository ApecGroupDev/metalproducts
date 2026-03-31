"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const History: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-24 lg:py-36 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .hist-display { font-family: 'Oswald', sans-serif; }
        .hist-serif   { font-family: 'Libre Baskerville', serif; }
        .hist-mono    { font-family: 'Space Mono', monospace; }

        /* Large watermark year */
        .watermark-year {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(8rem, 20vw, 18rem);
          font-weight: 700;
          color: rgba(0,0,0,0.04);
          letter-spacing: -0.02em;
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        /* Linen paper grid */
        .hist-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        /* Image: cut-corner style */
        .hist-image-clip {
          clip-path: polygon(0 0, 100% 0, 100% 90%, 92% 100%, 0 100%);
        }

        /* CTA button */
        .hist-btn {
          position: relative;
          background: transparent;
          border: 1px solid rgba(198,41,49,0.6);
          color: #c62931;
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          padding: 14px 36px;
          transition: background 0.3s, color 0.3s, border-color 0.3s;
          overflow: hidden;
        }
        .hist-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #c62931;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.77,0,0.18,1);
          z-index: 0;
        }
        .hist-btn:hover::before { transform: translateX(0); }
        .hist-btn:hover { color: #fff; border-color: #c62931; }
        .hist-btn span { position: relative; z-index: 1; }

        /* Timeline line */
        .timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #c62931, rgba(198,41,49,0.1));
        }

        /* Horizontal rule anim */
        @keyframes h-rule {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .h-rule-anim {
          transform-origin: left;
          animation: h-rule 1s cubic-bezier(0.77,0,0.18,1) 0.3s both;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 hist-paper-grid pointer-events-none" />

      {/* Watermark year — huge behind everything */}
      <div className="absolute bottom-0 right-0 overflow-hidden select-none pointer-events-none">
        <div className="watermark-year translate-y-8 translate-x-8">1941</div>
      </div>

      {/* Top border rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c62931]/50 via-black/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* ── Left: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 flex-shrink-0"
        >
          <div className="relative">
            {/* Offset red frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#c62931]/20 pointer-events-none" />

            <div className="hist-image-clip overflow-hidden relative">
              <Image
                src="/images/backgrounds/home/HISTORY.webp"
                alt="Historical Metal Products"
                width={800}
                height={520}
                className="object-cover w-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Year pill overlaid on image */}
            <div className="absolute bottom-6 left-6 bg-white/90 border border-[#c62931]/35 px-5 py-3 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-[#c62931]" />
              <div>
                <div className="hist-display text-[#1a1a1a] text-2xl font-bold leading-none">
                  1941
                </div>
                <div className="hist-mono text-[#888] text-xs tracking-[0.5em] uppercase mt-0.5">
                  Founded
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 relative pl-8"
        >
          {/* Vertical timeline line */}
          <div className="timeline-line" />

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="hist-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our History
            </span>
          </div>

          {/* Headline */}
          <h2 className="hist-display font-bold text-[#1a1a1a] uppercase leading-[0.92] text-[clamp(2.6rem,4.5vw,4rem)] mb-6">
            Built for
            <br />
            <span className="text-[#c62931]">America</span>
          </h2>

          {/* Rule */}
          <div className="h-px w-40 bg-gradient-to-r from-[#c62931] to-transparent h-rule-anim mb-8" />

          {/* Body — timeline node */}
          <div className="relative">
            {/* Timeline dot */}
            {/* <div className="absolute -left-11 top-1 w-4 h-4 rounded-full border-2 border-[#c62931] bg-[#f7f4f0]" /> */}
            <div className="hist-mono text-xs text-[#c62931] tracking-[0.3em] uppercase mb-3">
              1941 — Founding
            </div>
            <p className="hist-serif text-[#555] text-base leading-8">
              Metal Products Company was founded in{" "}
              <span className="text-[#1a1a1a] font-bold">1941</span> as a
              proprietorship to fabricate ladders and doors for Liberty Ships,
              which were being built at the rate of one per day. These ships
              were used to support supply for England in the early part of WWII.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link href="/about" className="hist-btn inline-block">
              <span>Full Story</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom border rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-[#c62931]/40" />
    </section>
  );
};

export default History;
