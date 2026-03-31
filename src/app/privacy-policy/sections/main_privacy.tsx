"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Eye,
  Lock,
  UserCheck,
  RefreshCw,
  Mail,
  Globe,
  Share2,
  Cookie,
  Check,
} from "lucide-react";

const sections = [
  {
    icon: <Eye className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Information We Collect",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="priv-display font-semibold text-[#1a1a1a] uppercase text-base mb-3">
            a) Information You Provide
          </h3>
          <p className="priv-mono text-[#555] text-sm leading-7 mb-3">
            When you contact us, request a quote, or fill out a form, we may
            collect:
          </p>
          <div className="space-y-2">
            {[
              "Name",
              "Email address",
              "Phone number",
              "Company name",
              "Project details",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
              >
                <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="priv-mono text-[#555] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="priv-display font-semibold text-[#1a1a1a] uppercase text-base mb-3">
            b) Automatically Collected Data
          </h3>
          <p className="priv-mono text-[#555] text-sm leading-7 mb-3">
            When you browse our website, we may collect:
          </p>
          <div className="space-y-2">
            {[
              "IP address",
              "Browser type",
              "Pages visited",
              "Device information",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
              >
                <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="priv-mono text-[#555] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="priv-mono text-[#555] text-sm leading-7 mt-4">
            This data helps us improve site performance and user experience.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "How We Use Your Information",
    content: (
      <>
        <p className="priv-mono text-[#555] text-sm leading-7 mb-4">
          We use your information to:
        </p>
        <div className="space-y-2 mb-6">
          {[
            "Respond to inquiries and provide quotes",
            "Communicate about your project",
            "Improve our website and services",
            "Maintain security and prevent misuse",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="priv-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="priv-mono text-[#c62931] text-sm font-bold">
          We do not sell your personal information.
        </p>
      </>
    ),
  },
  {
    icon: <Share2 className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Sharing of Information",
    content: (
      <>
        <p className="priv-mono text-[#555] text-sm leading-7 mb-4">
          We may share your data only with:
        </p>
        <div className="space-y-2 mb-6">
          {[
            "Service providers (hosting, email tools, etc.)",
            "Legal authorities if required",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="priv-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="priv-mono text-[#555] text-sm leading-7">
          All third parties are required to keep your data secure.
        </p>
      </>
    ),
  },
  {
    icon: <Cookie className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Cookies",
    content: (
      <>
        <p className="priv-mono text-[#555] text-sm leading-7 mb-4">
          Our website may use cookies to:
        </p>
        <div className="space-y-2 mb-6">
          {[
            "Improve functionality",
            "Track usage behavior",
            "Enhance user experience",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
            >
              <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="priv-mono text-[#555] text-sm">{item}</span>
            </div>
          ))}
        </div>
        <p className="priv-mono text-[#555] text-sm leading-7">
          You can disable cookies in your browser settings.
        </p>
      </>
    ),
  },
  {
    icon: <Lock className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Data Security",
    content: (
      <p className="priv-mono text-[#555] text-sm leading-7">
        We use reasonable technical and administrative measures to protect your
        information. However, no online system is 100% secure.
      </p>
    ),
  },
  {
    icon: <Globe className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Third-Party Links",
    content: (
      <p className="priv-mono text-[#555] text-sm leading-7">
        Our website may link to external websites. We are not responsible for
        their privacy practices.
      </p>
    ),
  },
  {
    icon: <UserCheck className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Your Rights",
    content: (
      <>
        <p className="priv-mono text-[#555] text-sm leading-7 mb-4">
          You may request to:
        </p>
        <div className="space-y-2 mb-6">
          {["Access your data", "Correct your data", "Delete your data"].map(
            (item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 border-t border-black/[0.06] pt-3"
              >
                <Check className="text-[#c62931] w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="priv-mono text-[#555] text-sm">{item}</span>
              </div>
            ),
          )}
        </div>
        <p className="priv-mono text-[#555] text-sm leading-7">
          To do so, contact us using the details below.
        </p>
      </>
    ),
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Changes to This Policy",
    content: (
      <p className="priv-mono text-[#555] text-sm leading-7">
        We may update this Privacy Policy at any time. Updates will be posted on
        this page.
      </p>
    ),
  },
  {
    icon: <Mail className="w-5 h-5 text-[#c62931] flex-shrink-0" />,
    title: "Contact Us",
    content: (
      <div className="priv-mono text-[#555] text-sm leading-7 space-y-2">
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

const PrivacyContent: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap');

        .priv-display { font-family: 'Oswald', sans-serif; }
        .priv-serif   { font-family: 'Libre Baskerville', serif; }
        .priv-mono    { font-family: 'Space Mono', monospace; }

        .priv-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      {/* Linen paper grid bg */}
      <div className="absolute inset-0 priv-paper-grid pointer-events-none" />

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
            <span className="priv-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Privacy Policy
            </span>
          </div>
          <h2 className="priv-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4.5vw,4rem)] mb-6">
            How We Protect
            <br />
            <span className="text-[#c62931]">Your Information</span>
          </h2>
          <p className="priv-serif italic text-[#888] text-sm max-w-[400px] leading-7 border-l-2 border-[#c62931]/30 pl-4">
            "Metal Products USA respects your privacy and is committed to
            protecting any information you share with us."
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
          <p className="priv-mono text-[#555] text-sm leading-8">
            <span className="text-[#c62931] font-bold">Metal Products USA</span>{" "}
            (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
            privacy and is committed to protecting any information you share
            with us through our website. This Privacy Policy explains how we
            collect, use, and protect your information when you visit{" "}
            <a
              href="https://www.metalproductsusa.com"
              className="text-[#c62931] hover:underline"
            >
              https://www.metalproductsusa.com
            </a>
            .
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
                <h3 className="priv-display font-bold text-[#1a1a1a] uppercase text-lg">
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

export default PrivacyContent;
