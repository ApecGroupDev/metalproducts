"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Underground\nTanks",
    label: "01",
    image:
      "/images/backgrounds/home/resources/Resources-Underground-Tanks.webp",
    link: "/underground-tanks",
  },
  {
    title: "Above Ground\nTanks",
    label: "02",
    image:
      "/images/backgrounds/home/resources/Resources-Above-Ground-Tank.webp",
    link: "/above-ground-tanks",
  },
  {
    title: "Oil / Water\nSeparator",
    label: "03",
    image:
      "/images/backgrounds/home/resources/Resources-Oil-and-Water-Separator.webp",
    link: "/oil-and-water-separator",
  },
];

const Resources: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden border-b border-black/[0.07]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .res-display { font-family: 'Oswald', sans-serif; }
        .res-mono    { font-family: 'Space Mono', monospace; }

        /* Paper grid */
        .res-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        /* Card */
        .res-card {
          position: relative;
          overflow: hidden;
          background: #e8e4df;
          aspect-ratio: 3 / 4;
          cursor: pointer;
        }

        /* Image zoom on hover */
        .res-card-img {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .res-card:hover .res-card-img {
          transform: scale(1.06);
        }

        /* Bottom overlay — light gradient only for text readability */
        .res-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.65) 0%,
            rgba(0,0,0,0.2) 35%,
            transparent 60%
          );
        }

        /* Red top accent strip */
        .res-card-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #c62931;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);
          z-index: 10;
        }
        .res-card:hover .res-card-top { transform: scaleX(1); }

        /* Counter badge */
        .res-card-num {
          position: absolute;
          top: 20px; left: 20px;
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.2em;
          z-index: 10;
          transition: color 0.3s;
        }
        .res-card:hover .res-card-num { color: rgba(198,41,49,0.7); }

        /* Card body content */
        .res-card-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 28px 24px 32px;
          z-index: 10;
        }

        /* Title */
        .res-card-title {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          line-height: 0.95;
          margin-bottom: 16px;
          white-space: pre-line;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .res-card:hover .res-card-title { transform: translateY(-4px); }

        /* Red rule under title */
        .res-card-rule {
          height: 2px;
          width: 36px;
          background: #c62931;
          margin-bottom: 14px;
          transition: width 0.4s cubic-bezier(0.77, 0, 0.18, 1);
        }
        .res-card:hover .res-card-rule { width: 64px; }

        /* CTA link */
        .res-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s, color 0.25s;
        }
        .res-card:hover .res-card-link {
          opacity: 1;
          transform: translateY(0);
        }
        .res-card-link:hover { color: #fff; }
        .res-card-link svg {
          transition: transform 0.25s;
        }
        .res-card-link:hover svg { transform: translateX(3px); }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 res-paper-grid pointer-events-none" />
      {/* Subtle top-right glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c62931] opacity-[0.04] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* ── Section header ── */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-black/[0.07] pb-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="res-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Product Lines
              </span>
            </div>
            <h2 className="res-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.6rem,5vw,4.2rem)]">
              Our <span className="text-[#c62931]">Resources</span>
            </h2>
          </div>
          <p className="res-mono text-[#888] text-sm max-w-xs leading-7">
            Explore our full range of American-made storage and separation
            solutions.
          </p>
        </div>

        {/* ── Resource cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((item, i) => (
            <Link key={i} href={item.link} className="block res-card">
              {/* Red top sweep */}
              <div className="res-card-top" />

              {/* Counter */}
              <div className="res-card-num">{item.label}</div>

              {/* Background image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="res-card-img object-cover object-center"
              />

              {/* Dark gradient overlay */}
              <div className="res-card-overlay" />

              {/* Content */}
              <div className="res-card-body">
                <div className="res-card-rule" />
                <div className="res-card-title">{item.title}</div>
                <span className="res-card-link">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
