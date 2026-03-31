"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero_Underground: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .ugt-h-display { font-family: 'Oswald', sans-serif; }
        .ugt-h-serif   { font-family: 'Libre Baskerville', serif; }
        .ugt-h-mono    { font-family: 'Space Mono', monospace; }

        .ugt-hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes ugt-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ugt-fade-up-1 { animation: ugt-fade-up 0.8s ease 0.2s both; }
        .ugt-fade-up-2 { animation: ugt-fade-up 0.9s ease 0.45s both; }
        .ugt-fade-up-3 { animation: ugt-fade-up 0.8s ease 0.7s both; }
        .ugt-fade-up-4 { animation: ugt-fade-up 0.7s ease 0.9s both; }

        .ugt-cta-primary {
          position: relative;
          overflow: hidden;
          background: #c62931;
          color: #fff;
          transition: background 0.3s;
        }
        .ugt-cta-primary:hover { background: #a91f27; }

        .ugt-cta-ghost {
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          transition: background 0.3s, border-color 0.3s;
        }
        .ugt-cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
        }

        @keyframes ugt-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .ugt-line-grow {
          transform-origin: left;
          animation: ugt-line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/tanks/Hero_Underground.webp"
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
          <div className="ugt-fade-up-1 flex items-center gap-3 mb-7 ugt-hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="ugt-h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Underground Tanks
            </span>
          </div>

          <div className="ugt-fade-up-2 ugt-hero-text-shadow">
            <h1 className="ugt-h-display font-bold text-white uppercase leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              Built for
              <br />
              <em className="not-italic text-[#c62931]">Industry</em>
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent ugt-line-grow" />

          <div className="ugt-fade-up-3 ugt-hero-text-shadow">
            <p className="ugt-h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              Trusted. EPA-Compliant. Resilient.
            </p>
            <p className="ugt-h-mono text-white/70 text-lg leading-7 max-w-lg">
              Engineered for resilience and crafted in the U.S., our underground
              tanks meet EPA standards.
            </p>
          </div>

          <div className="ugt-fade-up-3 flex gap-6 mt-8 mb-10 ugt-hero-text-shadow">
            <div className="border-l-2 border-[#c62931] pl-3">
              <div className="ugt-h-display text-white text-2xl font-semibold">
                80+
              </div>
              <div className="ugt-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Yrs Experience
              </div>
            </div>
            <div className="border-l-2 border-white/30 pl-3">
              <div className="ugt-h-display text-white text-2xl font-semibold">
                EPA
              </div>
              <div className="ugt-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Compliant
              </div>
            </div>
          </div>

          <div className="ugt-fade-up-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
              className="ugt-cta-primary ugt-h-mono inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Learn More
            </button>
            <Link
              href="/contact"
              className="ugt-cta-ghost ugt-h-mono inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Underground;
