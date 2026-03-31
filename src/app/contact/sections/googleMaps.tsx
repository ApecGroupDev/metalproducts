"use client";

import React from "react";
import { motion } from "framer-motion";

const GoogleMaps: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .gm-display { font-family: 'Oswald', sans-serif; }
        .gm-serif   { font-family: 'Libre Baskerville', serif; }
        .gm-mono    { font-family: 'Space Mono', monospace; }

        .gm-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 gm-paper-grid pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-12 border-b border-black/[0.07] pb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="gm-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Our Location
            </span>
          </div>
          <h2 className="gm-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Find Us on
            <br />
            <span className="text-[#c62931]">Google Maps</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-sm overflow-hidden shadow-lg w-full border-t-2 border-[#c62931]">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8249.398695663318!2d-84.07398252633338!3d34.05086149163947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f597a14f929c43%3A0x571bf2f1a4b46a31!2sMetal%20Products%20Inc!5e1!3m2!1sen!2sph!4v1752131936533!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address label */}
          <div className="mt-6 flex items-center gap-3">
            <span className="gm-mono text-[#c62931] text-[10px] tracking-widest uppercase">
              Address
            </span>
            <span className="gm-mono text-[#555] text-sm">
              725 Main Street, Suwanee, GA 30024, USA
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleMaps;
