import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const socialLinks = [
  "https://twitter.com",
  "https://www.instagram.com",
  "https://www.facebook.com",
  "https://www.linkedin.com/company/metalproducts-company",
];

const FooterNew: React.FC = () => {
  return (
    <footer className="relative text-gray-300 font-inter bg-gradient-to-b from-[#111] via-[#161616] to-[#1A1A1A] border-t border-gray-800">
      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-[#c62931] via-red-700 to-[#c62931]" />

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 items-start text-center md:text-left">

        {/* Logo + About */}
        <div className="flex flex-col items-center md:items-start space-y-5">
          <Link href="/" className="w-fit">
            <Image
              src="/images/logos/Logo_MPC_NoColor.png"
              alt="Metal Products Company"
              width={1315}
              height={1206}
              className="w-auto h-12 md:h-14 lg:h-16 transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs md:max-w-[80%]">
            Over 30 years of experience delivering trusted petroleum and metal fabrication
            solutions across Georgia and the Southeast.
          </p>
        </div>

        {/* Contact + Social */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div>
            <h3 className="text-white font-semibold text-base lg:text-lg mb-2">
              Get In Touch
            </h3>
            <div className="text-sm lg:text-base text-gray-400 leading-relaxed space-y-1">
              <a href="tel:770-945-8383" className="hover:text-[#c62931] transition-colors block">
                770-945-8383
              </a>
              <a href="mailto:sales@metalproductsusa.com" className="hover:text-[#c62931] transition-colors block">
                sales@metalproductsusa.com
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-3 pt-1">
            {socialLinks.map((url, i) => (
              <SocialIcon
                key={i}
                url={url}
                target="_blank"
                bgColor="transparent"
                fgColor="#ffffff"
                style={{ height: 34, width: 34 }}
                className="opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center md:items-end text-sm text-gray-300 space-y-2">
          <h3 className="font-semibold text-white text-base lg:text-lg mb-1">
            Main Office
          </h3>
          <div className="text-gray-400 leading-relaxed">
            <p>725 Main Street</p>
            <p>Suwanee, GA 30024</p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-800/60" />

      {/* Bottom Bar */}
      <div className="bg-[#0E0E0E] py-5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-xs md:text-sm text-gray-500">
            © 2024–2025 <span className="text-white font-medium">Metal Products Company</span>. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xs md:text-sm text-gray-500 justify-center md:justify-end">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
