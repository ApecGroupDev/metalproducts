"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const contactItems = [
  { label: "Phone", value: "770-945-8383", href: "tel:7709458383" },
  {
    label: "Email",
    value: "sales@metalproductsusa.com",
    href: "mailto:sales@metalproductsusa.com",
  },
  { label: "Address", value: "725 Main Street, Suwanee, GA 30024", href: null },
];

const services = [
  "Above Ground Gas Tanks",
  "Underground Storage Tanks",
  "Oil-Water Separators",
  "Oilfield Tanks",
];

const ContactCTA: React.FC = () => {
  return (
    <section className="relative bg-[#111] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .cta-display { font-family: 'Oswald', sans-serif; }
        .cta-serif   { font-family: 'Libre Baskerville', serif; }
        .cta-mono    { font-family: 'Space Mono', monospace; }

        /* Dark grid */
        .cta-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        /* Contact item */
        .cta-contact-item {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 14px;
          padding-bottom: 14px;
          transition: border-color 0.25s;
        }
        .cta-contact-item:hover { border-color: rgba(198,41,49,0.5); }

        /* Primary button */
        .cta-btn-primary {
          background: #c62931;
          color: #fff;
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          padding: 16px 40px;
          transition: background 0.3s;
          display: inline-block;
        }
        .cta-btn-primary:hover { background: #a91f27; }

        /* Ghost button */
        .cta-btn-ghost {
          border: 1px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.7);
          font-family: 'Space Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          padding: 15px 40px;
          transition: background 0.3s, border-color 0.3s, color 0.3s;
          display: inline-block;
        }
        .cta-btn-ghost:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.5);
          color: #fff;
        }

        /* Service tag */
        .cta-service-tag {
          border-left: 2px solid rgba(198,41,49,0.3);
          padding-left: 12px;
          transition: border-color 0.25s, transform 0.25s;
        }
        .cta-service-tag:hover {
          border-color: #c62931;
          transform: translateX(4px);
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 cta-paper-grid pointer-events-none" />

      {/* Red glow accent — bottom right */}
      <div className="absolute bottom-0 right-0 w-[480px] h-[480px] bg-[#c62931] opacity-[0.12] blur-[100px] pointer-events-none" />

      {/* Vertical edge line */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-white/[0.08] pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="cta-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="cta-display font-bold text-white uppercase leading-[0.9] text-[clamp(2.6rem,5vw,4.2rem)]">
              Let’s Build
              <br />
              <span className="text-[#c62931]">Something Lasting.</span>
            </h2>
          </div>

          {/* Pull quote */}
          <p className="cta-serif italic text-white/40 text-sm max-w-[220px] leading-7 border-l-2 border-[#c62931]/40 pl-4 self-end mb-1">
            &quot;Trusted by industry leaders for over 80 years.&quot;
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — contact details + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <p className="cta-mono text-white/50 text-sm leading-8 mb-10 max-w-sm">
              Looking for tank solutions that combine heritage, quality, and
              unmatched reliability? Our team is ready to help.
            </p>

            {/* Contact rows */}
            <div className="mb-10">
              {contactItems.map(({ label, value, href }) => (
                <div
                  key={label}
                  className="cta-contact-item flex items-start gap-6"
                >
                  <span className="cta-mono text-[#c62931] text-[10px] tracking-widest uppercase w-16 flex-shrink-0 pt-0.5">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="cta-mono text-white/80 text-sm hover:text-[#c62931] transition-colors leading-relaxed"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="cta-mono text-white/80 text-sm leading-relaxed">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="cta-btn-primary">
                Contact Our Team
              </Link>
              <Link href="/oilfield-tanks-resources" className="cta-btn-ghost">
                Explore Resources
              </Link>
            </div>
          </motion.div>

          {/* Right — services list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-px bg-[#c62931]" />
              <span className="cta-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
                What We Offer
              </span>
            </div>

            <div className="space-y-5">
              {services.map((service, i) => (
                <div key={i} className="cta-service-tag">
                  <div className="flex items-center gap-4">
                    <span className="cta-mono text-[#c62931] text-[10px] tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="cta-display font-semibold text-white uppercase text-lg leading-none">
                      {service}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom stat strip */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6">
              {[
                { val: "80+", label: "Yrs Experience" },
                { val: "100%", label: "American Made" },
                { val: "1941", label: "Est." },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div className="cta-display text-white text-2xl font-semibold leading-none">
                    {val}
                  </div>
                  <div className="cta-mono text-white/40 text-xs tracking-widest uppercase mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
