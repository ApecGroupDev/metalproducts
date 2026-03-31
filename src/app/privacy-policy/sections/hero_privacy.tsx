"use client";

import React from "react";
import Image from "next/image";

const PrivacyHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .priv-h-display { font-family: 'Oswald', sans-serif; }
        .priv-h-serif   { font-family: 'Libre Baskerville', serif; }
        .priv-h-mono    { font-family: 'Space Mono', monospace; }

        .priv-hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes priv-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .priv-fade-up-1 { animation: priv-fade-up 0.8s ease 0.2s both; }
        .priv-fade-up-2 { animation: priv-fade-up 0.9s ease 0.45s both; }
        .priv-fade-up-3 { animation: priv-fade-up 0.8s ease 0.7s both; }

        @keyframes priv-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .priv-line-grow {
          transform-origin: left;
          animation: priv-line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
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
          <div className="priv-fade-up-1 flex items-center gap-3 mb-7 priv-hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="priv-h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Legal
            </span>
          </div>

          <div className="priv-fade-up-2 priv-hero-text-shadow">
            <h1 className="priv-h-display font-bold text-white uppercase leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              Privacy
              <br />
              <span className="text-[#c62931]">Policy</span>
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent priv-line-grow" />

          <div className="priv-fade-up-3 priv-hero-text-shadow">
            <p className="priv-h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              Your Privacy Matters.
            </p>
            <p className="priv-h-mono text-white/50 text-sm max-w-md">
              Effective Date: March 20, 2026 &nbsp;|&nbsp; Last Updated: March
              20, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
