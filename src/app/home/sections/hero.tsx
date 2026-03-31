"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .h-display  { font-family: 'Oswald', sans-serif; }
        .h-serif    { font-family: 'Libre Baskerville', serif; }
        .h-mono     { font-family: 'Space Mono', monospace; }

        .hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .line-grow {
          transform-origin: left;
          animation: line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
        }

        @keyframes stamp-in {
          0%   { opacity: 0; transform: scale(1.4) rotate(8deg); }
          60%  { opacity: 1; transform: scale(0.95) rotate(-2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .stamp-in {
          animation: stamp-in 0.65s cubic-bezier(0.22,1,0.36,1) 1.6s both;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fade-up 0.8s ease 0.2s both; }
        .fade-up-2 { animation: fade-up 0.9s ease 0.45s both; }
        .fade-up-3 { animation: fade-up 0.8s ease 0.7s both; }
        .fade-up-4 { animation: fade-up 0.7s ease 0.9s both; }

        .cta-primary {
          position: relative;
          overflow: hidden;
          background: #c62931;
          color: #fff;
          transition: background 0.3s;
        }
        .cta-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .cta-primary:hover::after { transform: translateX(100%); }
        .cta-primary:hover { background: #a91f27; }

        .cta-ghost {
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          transition: background 0.3s, border-color 0.3s;
        }
        .cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
        }

        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ring-spin {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/home/Hero_Home_New.webp"
          alt="Metal Fabrication Workshop"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 🔥 Cinematic Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Red glow */}
        <div className="absolute left-[20%] top-[40%] w-[600px] h-[600px] bg-[#c62931]/20 blur-[120px] opacity-60" />
      </div>

      {/* EST badge */}
      <div className="absolute right-10 top-[18%] z-20 stamp-in">
        <div className="relative w-28 h-28 lg:w-36 lg:h-36">
          <svg
            viewBox="0 0 140 140"
            className="w-full h-full absolute inset-0 ring-spin"
          >
            <circle
              cx="70"
              cy="70"
              r="64"
              fill="none"
              stroke="rgba(198,41,49,0.35)"
              strokeWidth="1"
              strokeDasharray="3 5"
            />
          </svg>
          <svg viewBox="0 0 140 140" className="w-full h-full absolute inset-0">
            <circle
              cx="70"
              cy="70"
              r="52"
              fill="rgba(0,0,0,0.6)"
              stroke="rgba(198,41,49,0.25)"
              strokeWidth="1"
            />
            <text
              x="70"
              y="52"
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="10"
              fontFamily="'Space Mono', monospace"
              letterSpacing="4"
            >
              EST.
            </text>
            <text
              x="70"
              y="82"
              textAnchor="middle"
              fill="#fff"
              fontSize="30"
              fontFamily="'Oswald', sans-serif"
              fontWeight="700"
              letterSpacing="2"
            >
              1987
            </text>
            <text
              x="70"
              y="96"
              textAnchor="middle"
              fill="rgba(255,255,255,0.6)"
              fontSize="8"
              fontFamily="'Space Mono', monospace"
              letterSpacing="5"
            >
              USA
            </text>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-16 flex flex-col justify-center">
        <div className="max-w-[100%]">
          <div className="fade-up-1 flex items-center gap-3 mb-7 hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Top Tank Manufacturers
            </span>
          </div>

          <div className="fade-up-2 hero-text-shadow">
            <h1 className="h-display font-bold text-white uppercase leading-[0.9] text-[clamp(4rem,9vw,8rem)]">
              Made in
              <br />
              <em className="not-italic text-[#c62931]">the</em> USA
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent line-grow" />

          <div className="fade-up-3 hero-text-shadow">
            <p className="h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              Precision. Durability. Innovation.
            </p>
            <p className="h-mono text-white/70 text-lg leading-7 max-w-xs">
              Building the backbone of America’s fuel and industrial
              infrastructure.
            </p>
          </div>

          <div className="fade-up-3 flex gap-6 mt-8 mb-10 hero-text-shadow">
            <div className="border-l-2 border-[#c62931] pl-3">
              <div className="h-display text-white text-2xl font-semibold">
                80+
              </div>
              <div className="h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Yrs Experience
              </div>
            </div>
            <div className="border-l-2 border-white/30 pl-3">
              <div className="h-display text-white text-2xl font-semibold">
                100%
              </div>
              <div className="h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                American Made
              </div>
            </div>
          </div>

          <div className="fade-up-4 flex flex-col sm:flex-row gap-4">
            <Link
              href="/oilfield-tanks-resources"
              className="cta-primary h-mono inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="cta-ghost h-mono inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
        className="relative z-20 h-[2px] mt-auto bg-gradient-to-r from-[#c62931] via-[#c62931]/50 to-transparent"
      /> */}
    </section>
  );
};

export default Hero;
