"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon as CheckCircle } from "lucide-react";

const ContactInsights: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .ins-display { font-family: 'Oswald', sans-serif; }
        .ins-serif   { font-family: 'Libre Baskerville', serif; }
        .ins-mono    { font-family: 'Space Mono', monospace; }

        .ins-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ins-feature {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 14px;
          transition: border-color 0.25s;
        }
        .ins-feature:hover { border-color: rgba(198,41,49,0.35); }

        .ins-card {
          border-left: 2px solid rgba(198,41,49,0.3);
          padding-left: 16px;
          transition: border-color 0.25s, transform 0.25s;
        }
        .ins-card:hover {
          border-color: #c62931;
          transform: translateX(5px);
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 ins-paper-grid pointer-events-none" />

      {/* Red glow accent */}
      <div className="absolute top-0 left-0 w-[480px] h-[480px] bg-[#c62931] opacity-[0.08] blur-[100px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 space-y-24">
        {/* Row: What to Expect + Why Customers Trust Us */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Section 1: What to Expect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="ins-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                What to Expect
              </span>
            </div>
            <h2 className="ins-display font-bold text-white uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)] mb-8">
              When You
              <br />
              <span className="text-[#c62931]">Reach Out</span>
            </h2>
            <div className="space-y-0">
              {[
                "A fast, friendly response from a knowledgeable team member.",
                "Dialogue tailored to your needs — spec details, compliance, or design.",
                "Clear next steps for quotes, site visits, or engineered options.",
                "Ongoing support — from inquiry to manufacture and delivery.",
              ].map((point, i) => (
                <div
                  key={i}
                  className="ins-feature flex items-start gap-4 pb-4"
                >
                  <span className="ins-mono text-[#c62931] text-xs tracking-widest pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p className="ins-mono text-white/70 text-sm leading-7">
                      {point}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Section 2: Why Customers Trust Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="ins-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Trusted Since 1941
              </span>
            </div>
            <h2 className="ins-display font-bold text-white uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)] mb-8">
              Why Customers
              <br />
              <span className="text-[#c62931]">Trust Us</span>
            </h2>
            <div className="space-y-4">
              {[
                "Building Trust Since 1941 — a legacy of manufacturing excellence.",
                "Made in the USA — precision-built in Suwanee, GA.",
                "Industry-tested and regulation-ready — EPA, UL, NFPA standards.",
                "Responsive support with technical know-how and personal service.",
              ].map((point, i) => (
                <div key={i} className="ins-card py-3">
                  <p className="ins-mono text-white/70 text-sm leading-7">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 3: Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="mb-12 border-b border-white/[0.08] pb-10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="ins-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Client Feedback
              </span>
            </div>
            <h2 className="ins-display font-bold text-white uppercase leading-[0.9] text-[clamp(2rem,3.5vw,3rem)]">
              How We’ve
              <br />
              <span className="text-[#c62931]">Helped Others</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              '"Our technicians appreciated the clear specification guidance when we ordered a custom Fireguard® tank — it showed that Metal Products USA understood our facility\'s needs."',
              '"We needed a rush turn for underground tanks — Metal Products responded quickly and made it happen, keeping our project on schedule."',
            ].map((quote, i) => (
              <div key={i} className="border-t-2 border-[#c62931]/30 pt-6">
                <p className="ins-serif italic text-white/50 text-sm leading-7">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInsights;
