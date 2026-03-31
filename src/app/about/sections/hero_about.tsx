"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero_About: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-40 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .about-h-display { font-family: 'Oswald', sans-serif; }
        .about-h-serif   { font-family: 'Libre Baskerville', serif; }
        .about-h-mono    { font-family: 'Space Mono', monospace; }

        .about-hero-text-shadow {
          text-shadow:
            0 2px 6px rgba(0,0,0,0.5),
            0 4px 16px rgba(0,0,0,0.3);
        }

        @keyframes about-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-fade-up-1 { animation: about-fade-up 0.8s ease 0.2s both; }
        .about-fade-up-2 { animation: about-fade-up 0.9s ease 0.45s both; }
        .about-fade-up-3 { animation: about-fade-up 0.8s ease 0.7s both; }
        .about-fade-up-4 { animation: about-fade-up 0.7s ease 0.9s both; }

        .about-cta-primary {
          position: relative;
          overflow: hidden;
          background: #c62931;
          color: #fff;
          transition: background 0.3s;
        }
        .about-cta-primary:hover { background: #a91f27; }

        .about-cta-ghost {
          border: 1px solid rgba(255,255,255,0.4);
          color: #fff;
          transition: background 0.3s, border-color 0.3s;
        }
        .about-cta-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.7);
        }

        @keyframes about-line-grow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .about-line-grow {
          transform-origin: left;
          animation: about-line-grow 1.2s cubic-bezier(0.77,0,0.18,1) 0.8s both;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/about/Hero_About.webp"
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
          <div className="about-fade-up-1 flex items-center gap-3 mb-7 about-hero-text-shadow">
            <div className="w-6 h-px bg-[#c62931]" />
            <span className="about-h-mono text-[#c62931] text-lg font-semibold tracking-[0.45em] uppercase">
              Our Story
            </span>
          </div>

          <div className="about-fade-up-2 about-hero-text-shadow">
            <h1 className="about-h-display font-bold text-white uppercase leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              Building Trust
              <br />
              <em className="not-italic text-[#c62931]">Since</em> 1941
            </h1>
          </div>

          <div className="mt-7 mb-7 h-[2px] w-52 bg-gradient-to-r from-[#c62931] to-transparent about-line-grow" />

          <div className="about-fade-up-3 about-hero-text-shadow">
            <p className="about-h-serif italic text-white/70 text-2xl mb-4 tracking-wide">
              A Legacy of American Manufacturing
            </p>
            <p className="about-h-mono text-white/70 text-lg leading-7 max-w-lg">
              Our roots began in wartime America, and over the decades,
              we&apos;ve grown into one of the nation&apos;s most respected tank
              manufacturers.
            </p>
          </div>

          <div className="about-fade-up-3 flex gap-6 mt-8 mb-10 about-hero-text-shadow">
            <div className="border-l-2 border-[#c62931] pl-3">
              <div className="about-h-display text-white text-2xl font-semibold">
                80+
              </div>
              <div className="about-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Yrs Experience
              </div>
            </div>
            <div className="border-l-2 border-white/30 pl-3">
              <div className="about-h-display text-white text-2xl font-semibold">
                1941
              </div>
              <div className="about-h-mono text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Established
              </div>
            </div>
          </div>

          <div className="about-fade-up-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() =>
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }
              className="about-cta-primary about-h-mono inline-flex items-center justify-center gap-3 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Learn More
            </button>
            <Link
              href="/contact"
              className="about-cta-ghost about-h-mono inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-widest uppercase"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_About;
