"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero_OTR: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .otr-h-display { font-family: 'Oswald', sans-serif; }
        .otr-h-serif   { font-family: 'Libre Baskerville', serif; }
        .otr-h-mono    { font-family: 'Space Mono', monospace; }

        .otr-hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes otr-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .otr-fade-up-1 { animation: otr-fade-up 0.8s ease 0.2s both; }
        .otr-fade-up-2 { animation: otr-fade-up 0.9s ease 0.45s both; }
        .otr-fade-up-3 { animation: otr-fade-up 0.8s ease 0.7s both; }
        .otr-fade-up-4 { animation: otr-fade-up 0.7s ease 0.9s both; }

        .otr-cta-primary {
          position: relative;
          overflow: hidden;
          background: #c62931;
          color: #fff;
          transition: background 0.3s;
        }
        .otr-cta-primary:hover { background: #a91f27; }

        .otr-cta-ghost {
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          transition: background 0.3s, border-color 0.3s;
        }
        .otr-cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
        }

        @keyframes otr-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .otr-line-grow {
          transform-origin: left;
          animation: otr-line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/tanks/Hero_Tanks.webp"
          alt="Metal Fabrication Workshop"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute left-[20%] top-[40%] w-[600px] h-[600px] bg-[#c62931]/20 blur-[120px] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-1 max-w-[1440px] mx-auto w-full px-6 md:px-16 flex flex-col justify-center">
        <div className="max-w-[100%]">
          <div className="otr-fade-up-1 flex items-center gap-3 mb-7 otr-hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="otr-h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Oilfield Tanks
            </span>
          </div>

          <div className="otr-fade-up-2 otr-hero-text-shadow">
            <h1 className="otr-h-display font-bold text-white uppercase leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              Storage &<br />
              <em className="not-italic text-[#c62931]">Safety</em>
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent otr-line-grow" />

          <div className="otr-fade-up-3 otr-hero-text-shadow">
            <p className="otr-h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              Durable. Reliable. Performance-Driven.
            </p>
            <p className="otr-h-mono text-white/70 text-lg leading-7 max-w-lg">
              Designed for durability and performance, our tanks ensure safe,
              efficient storage for every operation.
            </p>
          </div>

          <div className="otr-fade-up-3 flex gap-6 mt-8 mb-10 otr-hero-text-shadow">
            <div className="border-l-2 border-[#c62931] pl-3">
              <div className="otr-h-display text-white text-2xl font-semibold">
                80+
              </div>
              <div className="otr-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Yrs Experience
              </div>
            </div>
            <div className="border-l-2 border-white/30 pl-3">
              <div className="otr-h-display text-white text-2xl font-semibold">
                USA
              </div>
              <div className="otr-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Made
              </div>
            </div>
          </div>

          <div className="otr-fade-up-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
              className="otr-cta-primary otr-h-mono inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Learn More
            </button>
            <Link
              href="/contact"
              className="otr-cta-ghost otr-h-mono inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_OTR;
