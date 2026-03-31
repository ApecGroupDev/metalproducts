"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Ban,
  Globe,
  RefreshCw,
  Scale,
  Mail,
  ShieldAlert,
  Tag,
  Check,
} from "lucide-react";

const sections = [
  {
    icon: <Globe className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Website Use",
    content: (
      <>
        <p className="terms-mono text-[#555] text-sm leading-7 mb-3">
          You agree to use this website only for lawful purposes. You must{" "}
          <strong className="text-[#1a1a1a]">NOT</strong>:
        </p>
        <div className="space-y-2">
          {[
            "Use the site for illegal activities",
            "Attempt to hack, damage, or disrupt the website",
            "Upload harmful code or malware",
            "Misuse contact forms or spam",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="terms-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: <FileText className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Information Disclaimer",
    content: (
      <>
        <p className="terms-mono text-[#555] text-sm leading-7 mb-3">
          All content on this website is provided for general informational
          purposes only.
        </p>
        <div className="space-y-2">
          {[
            "Product details, timelines, and specifications may change",
            "We do not guarantee completeness or accuracy at all times",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="terms-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: <Tag className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Quotes & Services",
    content: (
      <div className="space-y-2">
        {[
          "Any quote provided is non-binding until confirmed in writing",
          "Final pricing, timelines, and specifications are agreed separately",
          "Custom tank manufacturing depends on project requirements",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
          >
            <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
            <span className="terms-mono text-[#555] text-sm">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Intellectual Property",
    content: (
      <>
        <p className="terms-mono text-[#555] text-sm leading-7 mb-3">
          All content on this website (text, images, logos, design) is owned by{" "}
          <span className="font-bold text-[#1a1a1a]">Metal Products USA</span>.
          You may <strong className="text-[#1a1a1a]">NOT</strong>:
        </p>
        <div className="space-y-2">
          {[
            "Copy or reuse content",
            "Reproduce or distribute materials",
            "Use our brand or logo without permission",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="terms-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    icon: <Ban className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Limitation of Liability",
    content: (
      <>
        <p className="terms-mono text-[#555] text-sm leading-7 mb-3">
          We are not liable for:
        </p>
        <div className="space-y-2 mb-4">
          {[
            "Any damages from using this website",
            "Loss of data or business interruption",
            "Errors or omissions in content",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="terms-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="terms-mono text-[#c62931] text-sm font-bold">
          Use of this website is at your own risk.
        </p>
      </>
    ),
  },
  {
    icon: <Globe className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Third-Party Links",
    content: (
      <p className="terms-mono text-[#555] text-sm leading-7">
        We may link to external websites. We are not responsible for their
        content or policies.
      </p>
    ),
  },
  {
    icon: <Scale className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Governing Law",
    content: (
      <p className="terms-mono text-[#555] text-sm leading-7">
        These Terms are governed by the laws of the{" "}
        <strong className="text-[#1a1a1a]">State of Georgia, USA</strong>.
      </p>
    ),
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Changes to Terms",
    content: (
      <p className="terms-mono text-[#555] text-sm leading-7">
        We may update these Terms at any time. Continued use of the website
        means you accept the updated Terms.
      </p>
    ),
  },
  {
    icon: <Mail className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Contact Information",
    content: (
      <div className="terms-mono text-[#555] text-sm leading-7 space-y-2">
        <p className="font-bold text-[#1a1a1a]">Metal Products Company, Inc.</p>
        <p>725 Main Street, Suwanee, GA 30024</p>
        <p>
          Phone:{" "}
          <a href="tel:7709458383" className="text-[#c62931] hover:underline">
            770-945-8383
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:sales@metalproductsusa.com"
            className="text-[#c62931] hover:underline"
          >
            sales@metalproductsusa.com
          </a>
        </p>
      </div>
    ),
  },
];

const TermsContent: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .terms-display { font-family: 'Oswald', sans-serif; }
        .terms-serif   { font-family: 'Libre Baskerville', serif; }
        .terms-mono    { font-family: 'Space Mono', monospace; }

        .terms-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 terms-paper-grid pointer-events-none" />

      {/* Red glow blob */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c62931] opacity-[0.05] blur-[80px] pointer-events-none" />

      {/* Vertical edge lines */}
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 border-b border-black/[0.07] pb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="terms-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Terms of Use
            </span>
          </div>
          <h2 className="terms-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4.5vw,4rem)] mb-6">
            Website Terms
            <br />
            <span className="text-[#c62931]">& Conditions</span>
          </h2>
          <p className="terms-serif italic text-[#888] text-sm max-w-[400px] leading-7 border-l-2 border-[#c62931]/30 pl-4">
            &quot;By using this website, you agree to comply with and be bound
            by the following terms and conditions.&quot;
          </p>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="border-t-2 border-[#c62931] bg-white p-8 shadow-sm mb-12"
        >
          <p className="terms-mono text-[#555] text-sm leading-8">
            By accessing or using this website, you agree to these Terms of Use.
            If you do not agree, please do not use the site.
          </p>
        </motion.div>

        {/* Sections Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t-2 border-[#c62931] bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h3 className="terms-display font-bold text-[#1a1a1a] uppercase text-lg">
                  {section.title}
                </h3>
              </div>
              <div>{section.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
