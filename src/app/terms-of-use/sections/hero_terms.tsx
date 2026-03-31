"use client";

import React from "react";
import Image from "next/image";

const TermsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .terms-h-display { font-family: 'Oswald', sans-serif; }
        .terms-h-serif   { font-family: 'Libre Baskerville', serif; }
        .terms-h-mono    { font-family: 'Space Mono', monospace; }

        .terms-hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes terms-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .terms-fade-up-1 { animation: terms-fade-up 0.8s ease 0.2s both; }
        .terms-fade-up-2 { animation: terms-fade-up 0.9s ease 0.45s both; }
        .terms-fade-up-3 { animation: terms-fade-up 0.8s ease 0.7s both; }

        @keyframes terms-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .terms-line-grow {
          transform-origin: left;
          animation: terms-line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/contact/Hero_Contact_New.webp"
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
          <div className="terms-fade-up-1 flex items-center gap-3 mb-7 terms-hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="terms-h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Legal
            </span>
          </div>

          <div className="terms-fade-up-2 terms-hero-text-shadow">
            <h1 className="terms-h-display font-bold text-white uppercase leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              Terms of
              <br />
              <span className="text-[#c62931]">Use</span>
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent terms-line-grow" />

          <div className="terms-fade-up-3 terms-hero-text-shadow">
            <p className="terms-h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              Know Your Rights.
            </p>
            <p className="terms-h-mono text-white/50 text-sm max-w-md">
              Effective Date: March 20, 2026 &nbsp;|&nbsp; Last Updated: March
              20, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsHero;
