"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Team_About: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .tm-display { font-family: 'Oswald', sans-serif; }
        .tm-serif   { font-family: 'Libre Baskerville', serif; }
        .tm-mono    { font-family: 'Space Mono', monospace; }

        .tm-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 tm-paper-grid pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="mb-10 border-b border-black/[0.07] pb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="tm-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Our Team
              </span>
            </div>
            <h3 className="tm-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)]">
              The Team Behind
              <br />
              <span className="text-[#c62931]">the Legacy</span>
            </h3>
            <p className="tm-serif italic text-[#888] text-sm max-w-[320px] leading-7 border-l-2 border-[#c62931]/30 pl-4 mt-6">
              &quot;Behind every decade of innovation is a team dedicated to
              craftsmanship, safety, and excellence.&quot;
            </p>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-sm">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/images/about/Team_About.webp"
                alt="Metal Products USA Team"
                fill
                sizes="(max-width: 750px) 100vw, 1440px"
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 bg-[#c62931] px-3 py-1">
                <span className="tm-mono text-white text-xs tracking-[0.4em] uppercase">
                  Metal Products USA
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team_About;
