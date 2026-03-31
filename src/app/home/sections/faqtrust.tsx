"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do you manufacture custom tanks?",
    a: "Yes — every tank is built to your site’s specific needs and regulatory requirements.",
  },
  {
    q: "Can I rely on the build quality?",
    a: "Absolutely — we’ve specialized in tough, long-lasting tanks since 1941.",
  },
  {
    q: "Are your tanks compliant with regulations?",
    a: "Yes — our tanks meet EPA, UL, NFPA, and other relevant industry codes.",
  },
  {
    q: "Is everything made in the U.S.?",
    a: "Yes — our manufacturing facilities in Suwanee, GA produce every tank you see.",
  },
];

const trustPoints = [
  {
    title: "Long-term Reliability",
    desc: "Building Trust Since 1941 — over eight decades of proven performance.",
  },
  {
    title: "Proven Quality",
    desc: "UL-listed processes and rigorous standards across every product line.",
  },
  {
    title: "Industry Affiliation",
    desc: "PEI member — staying ahead of evolving industry practice and compliance.",
  },
  {
    title: "Real-world Performance",
    desc: "Trusted by commercial, industrial, government, and agricultural operators.",
  },
];

const FAQTrust: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden border-t border-black/[0.07]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .faq-display { font-family: 'Oswald', sans-serif; }
        .faq-serif   { font-family: 'Libre Baskerville', serif; }
        .faq-mono    { font-family: 'Space Mono', monospace; }

        /* Linen paper grid */
        .faq-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        /* FAQ accordion item */
        .faq-item {
          border-top: 1px solid rgba(0,0,0,0.07);
          transition: border-color 0.25s;
          cursor: pointer;
        }
        .faq-item:hover,
        .faq-item.faq-open { border-color: rgba(198,41,49,0.4); }

        .faq-question {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 0;
        }

        /* Trust row */
        .trust-row {
          border-left: 2px solid rgba(198,41,49,0.25);
          padding: 0 0 0 16px;
          transition: border-color 0.25s, transform 0.25s;
        }
        .trust-row:hover {
          border-color: #c62931;
          transform: translateX(4px);
        }
      `}</style>

      {/* Paper grid */}
      <div className="absolute inset-0 faq-paper-grid pointer-events-none" />
      {/* Red glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c62931] opacity-[0.04] blur-[100px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-black/[0.07] pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="faq-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                FAQ &amp; Trust
              </span>
            </div>
            <h2 className="faq-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.6rem,4.5vw,4rem)]">
              Questions &amp;
              <br />
              <span className="text-[#c62931]">Why Choose Us.</span>
            </h2>
          </div>
          <p className="faq-serif italic text-[#999] text-sm max-w-[220px] leading-7 border-l-2 border-[#c62931]/30 pl-4 self-end mb-1">
            &quot;Eight decades of answers backed by results.&quot;
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="faq-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Common Questions
              </span>
            </div>

            <div>
              {faqs.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`faq-item${isOpen ? " faq-open" : ""}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="faq-question">
                      <div className="flex items-start gap-4">
                        <span className="faq-mono text-[#c62931] text-[10px] tracking-widest pt-1 flex-shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="faq-display font-semibold text-[#1a1a1a] uppercase text-base leading-snug">
                          {item.q}
                        </span>
                      </div>
                      <span className="faq-mono text-[#c62931] text-lg flex-shrink-0 leading-none mt-0.5">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <p className="faq-mono text-[#555] text-sm leading-7 pb-5 pl-9">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              {/* closing border */}
              <div className="border-t border-black/[0.07]" />
            </div>
          </motion.div>

          {/* Right — Why Trust Us */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="faq-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Why Customers Trust Us
              </span>
            </div>

            <p className="faq-mono text-[#555] text-sm leading-8 mb-10 max-w-sm">
              For over eight decades,{" "}
              <span className="text-[#c62931] font-bold">
                Metal Products USA
              </span>{" "}
              has delivered storage solutions better than most — because our
              tanks aren’t just built, they’re engineered.
            </p>

            <div className="space-y-6">
              {trustPoints.map((point, i) => (
                <div key={i} className="trust-row">
                  <div className="faq-display font-semibold text-[#1a1a1a] uppercase text-base leading-none mb-2">
                    {point.title}
                  </div>
                  <p className="faq-mono text-[#777] text-sm leading-7">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-12 pt-8 border-t border-black/[0.07]">
              <p className="faq-serif italic text-[#999] text-sm leading-7 border-l-2 border-[#c62931]/40 pl-4">
                &quot;A Midwest agricultural co-op upgraded to our Plasteel®
                Elutron® tanks for added corrosion resistance — and has seen
                performance that lasts for decades, just like our heritage
                promises.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQTrust;
