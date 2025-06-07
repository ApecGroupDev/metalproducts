import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="text-black font-inter scrn-750:px-8 scrn-450:pt-24 scrn-600:pt-20 scrn-750:pt-8 scrn-800:pt-12 scrn-1250:pt-24 scrn-1500:pt-28 scrn-1700:pt-36 scrn-1700:px-20 scrn-1900:pt-48 scrn-1900:px-24 scrn-2500:px-32">
      <div className="grid grid-cols-3 gap-8 items-center text-gray-300">
        {/* Column 1: Social Media Icons */}
        <div className="flex flex-col ms-2 scrn-600:ms-4 scrn-600:mt-8 scrn-750:mt-0 scrn-750:ms-0 items-start space-y-2 scrn-750:space-y-1 scrn-1000:space-y-2">
          <span className="text-xs scrn-750:pt-6 scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg footer-text-dark whitespace-nowrap">For More Information</span>
          <span className='text-xs scrn-750:ps-0 scrn-1000:ps-6 scrn-125:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg whitespace-nowrap footer-text-dark'>855-444-APEC | Sales@TheAPECgroup.com</span>
          <div className="hidden scrn-750:flex space-x-4 scrn-750:ps-0 scrn-1000:ps-12">
            <SocialIcon
              url="https://twitter.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.instagram.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.facebook.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              target="_blank"
              style={{ height: 36, width: 36, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
          </div>
          <div className="flex scrn-750:hidden space-x-4 pb-2 scrn-400:pb-0">
            <SocialIcon
              url="https://twitter.com"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.instagram.com"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.facebook.com"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
            <SocialIcon
              url="https://www.linkedin.com"
              target="_blank"
              style={{ height: 28, width: 28, borderRadius: 8 }}
              bgColor="#c62931"
              className="transition-transform transform hover:scale-125"
            />
          </div>
        </div>

        {/* Column 2: Addresses and Contact Information */}
        <div className="flex flex-col space-y-4 pb-4 items-center scrn-750:pt-2">
          <p className="hidden scrn-750:block scrn-750:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl leading-relaxed footer-text-dark">
            Main Office: Atlanta, Georgia<br />
            4732-E North Royal Atlanta<br />
            Drive Tucker, GA 30084
          </p>
          <p className="hidden scrn-750:block scrn-750:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl leading-relaxed footer-text-dark">
            Branch Office: Houston, Texas<br />
            505 Garden Oaks Boulevard<br />
            Houston, TX 77018
          </p>
          <p className="hidden scrn-750:hidden scrn-1000:block scrn-750:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl leading-relaxed footer-text-dark">
            For More Info: 855-444-APEC<br />
            <a
              href="mailto:Service@TheAPECgroup.com"
              className="text-[#c62931] hover:text-red-500 transition-colors"
            >
              Service@TheAPECgroup.com
            </a>
            <br />
            <a
              href="mailto:Sales@TheAPECgroup.com"
              className="text-[#c62931] hover:text-red-500 transition-colors"
            >
              Sales@TheAPECgroup.com
            </a>
          </p>
        </div>

        {/* Column 3: Logo */}
        <div className="hidden scrn-350:flex justify-center scrn-750:justify-end">
          <Link href="/">
            <Image
              src="/logos/APEC.png"
              alt="APEC Since 1989"
              height={1206}
              width={1315}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 scrn-450:h-24 scrn-600:h-32 scrn-750:h-28 scrn-1000:h-40 scrn-1250:h-52 scrn-1500:h-60 scrn-1700:h-72 scrn-1900:h-72 scrn-2500:h-80 w-auto"
            />
          </Link>
        </div>
      </div>

      <hr className="h-px bg-gray-600 border-0"></hr>

      {/* Copyright*/}
      <div className="w-full py-4">
        <p className="text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl text-center text-gray-300 font-light">
          Copyright 2024–2025 © The APEC Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
