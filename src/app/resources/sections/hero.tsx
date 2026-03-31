"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .res-h-display { font-family: 'Oswald', sans-serif; }
        .res-h-serif   { font-family: 'Libre Baskerville', serif; }
        .res-h-mono    { font-family: 'Space Mono', monospace; }

        .res-hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes res-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .res-fade-up-1 { animation: res-fade-up 0.8s ease 0.2s both; }
        .res-fade-up-2 { animation: res-fade-up 0.9s ease 0.45s both; }
        .res-fade-up-3 { animation: res-fade-up 0.8s ease 0.7s both; }
        .res-fade-up-4 { animation: res-fade-up 0.7s ease 0.9s both; }

        .res-cta-primary {
          position: relative;
          overflow: hidden;
          background: #c62931;
          color: #fff;
          transition: background 0.3s;
        }
        .res-cta-primary:hover { background: #a91f27; }

        .res-cta-ghost {
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          transition: background 0.3s, border-color 0.3s;
        }
        .res-cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
        }

        @keyframes res-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .res-line-grow {
          transform-origin: left;
          animation: res-line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/resources/Hero_Resources.webp"
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
          <div className="res-fade-up-1 flex items-center gap-3 mb-7 res-hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="res-h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Resources
            </span>
          </div>

          <div className="res-fade-up-2 res-hero-text-shadow">
            <h1 className="res-h-display font-bold text-white uppercase leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              Technical
              <br />
              <em className="not-italic text-[#c62931]">Documentation</em>
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent res-line-grow" />

          <div className="res-fade-up-3 res-hero-text-shadow">
            <p className="res-h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              Guides. Manuals. Warranties.
            </p>
            <p className="res-h-mono text-white/70 text-lg leading-7 max-w-lg">
              Access installation guides, manuals, warranties, and technical
              documents for underground and aboveground storage tanks.
            </p>
          </div>

          <div className="res-fade-up-3 flex gap-6 mt-8 mb-10 res-hero-text-shadow">
            <div className="border-l-2 border-[#c62931] pl-3">
              <div className="res-h-display text-white text-2xl font-semibold">
                80+
              </div>
              <div className="res-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Yrs Experience
              </div>
            </div>
            <div className="border-l-2 border-white/30 pl-3">
              <div className="res-h-display text-white text-2xl font-semibold">
                100%
              </div>
              <div className="res-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                American Made
              </div>
            </div>
          </div>

          <div className="res-fade-up-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
              className="res-cta-primary res-h-mono inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Browse Resources
            </button>
            <Link
              href="/contact"
              className="res-cta-ghost res-h-mono inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
