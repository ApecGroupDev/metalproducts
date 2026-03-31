import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const socialLinks = [
  "https://twitter.com",
  "https://www.instagram.com",
  "https://www.facebook.com",
  "https://www.linkedin.com/company/metalproducts-company",
];

const FooterNew: React.FC = () => {
  return (
    <footer className="relative text-gray-300 bg-[#111] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .ft-display { font-family: 'Oswald', sans-serif; }
        .ft-mono    { font-family: 'Space Mono', monospace; }

        .ft-paper-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .ft-link {
          transition: color 0.25s, transform 0.25s;
        }
        .ft-link:hover {
          color: #c62931;
          transform: translateX(3px);
        }
      `}</style>

      {/* Paper grid bg */}
      <div className="absolute inset-0 ft-paper-grid pointer-events-none" />

      {/* Top Accent Line */}
      <div className="h-[2px] bg-gradient-to-r from-[#c62931] via-[#c62931]/50 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start text-center md:text-left">
        {/* Logo + About */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="w-fit mb-6">
            <Image
              src="/images/logos/Logo_MPC_NoColor.png"
              alt="Metal Products Company"
              width={1315}
              height={1206}
              className="w-auto h-12 md:h-14 lg:h-16 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <p className="ft-mono text-white/50 text-xs leading-7 max-w-xs">
            Over 80 years of experience delivering trusted petroleum and metal
            fabrication solutions across Georgia and the Southeast.
          </p>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="ft-mono text-[#c62931] text-[10px] tracking-[0.45em] uppercase">
              Contact
            </span>
          </div>
          <div className="space-y-3 mb-6">
            <a
              href="tel:770-945-8383"
              className="ft-mono ft-link text-white/70 text-sm block"
            >
              770-945-8383
            </a>
            <a
              href="mailto:sales@metalproductsusa.com"
              className="ft-mono ft-link text-white/70 text-sm block"
            >
              sales@metalproductsusa.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3">
            {socialLinks.map((url, i) => (
              <SocialIcon
                key={i}
                url={url}
                target="_blank"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 32, width: 32 }}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="ft-mono text-[#c62931] text-[10px] tracking-[0.45em] uppercase">
              Location
            </span>
          </div>
          <div className="ft-mono text-white/70 text-sm leading-7 text-center md:text-right">
            <p>725 Main Street</p>
            <p>Suwanee, GA 30024</p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/[0.06]" />

      {/* Bottom Bar */}
      <div className="relative z-10 bg-[#0a0a0a] py-6">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Left — Copyright */}
          <p className="ft-mono text-white/40 text-xs tracking-wide">
            © {new Date().getFullYear() - 1}–{new Date().getFullYear()}{" "}
            <span className="text-white/70">Metal Products Company</span>. All
            rights reserved.
          </p>

          {/* Center — Legal Links */}
          <div className="flex space-x-6 ft-mono text-xs text-white/40 tracking-wide">
            <Link
              href="/privacy-policy"
              className="hover:text-[#c62931] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-[#c62931] transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          {/* Right — OrangeLabs credit */}
          <p className="ft-mono text-xs tracking-wide">
            Powered by{" "}
            <a
              href="https://orangelabs-neon.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-opacity hover:opacity-80"
            >
              <span style={{ color: "#FF6A00" }}>Orange</span>
              <span className="text-white/40">Labs Dev.</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
