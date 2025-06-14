import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import LocationIcon from './locationIcon';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-300 font-inter items-end
    scrn-1900:h-96">
      <div className="grid grid-cols-2 gap-8 items-end z-30 h-full">
        {/* Background image positioned absolutely */}
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/footer/Background_Footer.png"
            alt="Footer Background"
            fill
            priority
            className='object-cover w-full'
          />
        </div>
        {/* Column 1: Social Media Icons */}
        <div className='flex flex-row ms-24 gap-x-20 p-8'>
          <div className="z-10 flex flex-col items-start space-y-2 scrn-750:space-y-1 scrn-1000:space-y-2">
            <div className='text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg whitespace-nowrap space-y-1'>
              <p>For More Information</p>
              <p>770.945.8383</p>
              <p>Sales@mtlprods.com</p>
            </div>
            <div className="hidden scrn-750:flex space-x-1 scale-110">
              <SocialIcon
                url="https://twitter.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
              <SocialIcon
                url="https://www.instagram.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
              <SocialIcon
                url="https://www.facebook.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
              <SocialIcon
                url="https://www.linkedin.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
            </div>
            <div className="flex scrn-750:hidden space-x-4 pb-2 scrn-400:pb-0">
              <SocialIcon
                url="https://twitter.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
              <SocialIcon
                url="https://www.instagram.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
              <SocialIcon
                url="https://www.facebook.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
              <SocialIcon
                url="https://www.linkedin.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className="transition-transform transform hover:scale-125"
              />
            </div>
          </div>
          <div className="z-10 flex flex-col">
            <div className='text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg whitespace-nowrap space-y-1'>
              <LocationIcon text="Main Office:" size={24} />
              <p className='ms-7'>725 Main Street</p>
              <p className='ms-7'>Suwanee, GA 30024</p>
            </div>
          </div>
        </div>

        {/* Column 2: Logo */}
        <div className="hidden scrn-350:flex justify-end p-12">
          <Link href="/">
            <Image
              src="/images/logos/Logo_MPC_NoColor.png"
              alt="MPC logo"
              height={1206}
              width={1315}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-auto
              scrn-1900:h-28"
            />
          </Link>
        </div>
      </div>
      {/* Copyright*/}
      <div className="py-2 bg-red-800 w-full z-50 relative">
        <p className="text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl text-center font-light">
          Copyright 2024–2025 © Metal Products Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
