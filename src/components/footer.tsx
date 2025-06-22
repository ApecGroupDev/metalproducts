import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import LocationIcon from './locationIcon';

const Footer: React.FC = () => {
  return (
    <footer className='relative bg-white font-inter items-end -mt-1 h-96 scrn-1000:h-80 scrn-1600:h-96 scrn-1900:h-120 scrn-2250:h-128'>
      <div className='grid grid-cols-1 scrn-600:grid-cols-2 gap-8 items-end z-30 h-full'>
        {/* Background image positioned absolutely */}
        <div className='absolute inset-0'>
          <Image
            src="/images/backgrounds/footer/Background_Footer.png"
            alt="Footer Background"
            fill
            priority
            className='object-cover w-full mt-2'
          />
        </div>
        {/* Column 1: Social Media Icons */}
        <div className='flex flex-row scrn-600:ms-4 scrn-1000:ms-8 scrn-1900:ms-24 scrn-1900:gap-x-20 px-4 scrn-400:px-14 pb-4 scrn-600:px-2 scrn-600:pb-2 scrn-700:px-4 scrn-1000:p-4 scrn-1900:p-8'>
          <div className='z-10 flex flex-col items-start space-y-2 scrn-750:space-y-1 scrn-1000:space-y-2'>
            <div className='text-2xs scrn-400:text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg whitespace-nowrap space-y-1'>
              <p>For More Information</p>
              <p>770.945.8383</p>
              <p>Sales@mtlprods.com</p>
            </div>
            <div className='hidden scrn-750:flex space-x-1 scale-110'>
              <SocialIcon
                url="https://twitter.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
              <SocialIcon
                url="https://www.instagram.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
              <SocialIcon
                url="https://www.facebook.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
              <SocialIcon
                url="https://www.linkedin.com"
                target="_blank"
                style={{ height: 40, width: 40 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
            </div>

            {/* Icons on mobile view */}
            <div className='flex scrn-750:hidden space-x-2 pb-0'>
              <SocialIcon
                url="https://twitter.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
              <SocialIcon
                url="https://www.instagram.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
              <SocialIcon
                url="https://www.facebook.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
              <SocialIcon
                url="https://www.linkedin.com"
                target="_blank"
                style={{ height: 28, width: 28, borderRadius: 8 }}
                bgColor="transparent"
                className='transition-transform transform hover:scale-125'
              />
            </div>
          </div>
          <div className='z-10 flex flex-col ms-auto scrn-600:ms-4'>
            <div className='text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg whitespace-nowrap space-y-1'>
              <LocationIcon text="Main Office:" size={24} />
              <p className='ms-7'>725 Main Street</p>
              <p className='ms-7'>Suwanee, GA 30024</p>
            </div>
          </div>
        </div>

        {/* Column 2: Logo */}
        <div className='hidden scrn-600:flex justify-end p-10 scrn-1000:p-12'>
          <Link href="/">
            <Image
              src="/images/logos/Logo_MPC_NoColor.png"
              alt="MPC logo"
              height={1206}
              width={1315}
              className='transition-transform duration-300 ease-in-out transform hover:scale-110 w-auto h-12 scrn-700:h-14 scrn-1000:h-20 scrn-1900:h-28' />
          </Link>
        </div>
      </div>
      {/* Copyright*/}
      <div className='py-2 px-2 bg-red-800 w-full z-50 relative'>
        <p className='text-xs scrn-1250:text-sm scrn-1500:text-base scrn-1700:text-lg scrn-1900:text-lg scrn-2500:text-xl text-center font-light'>
          Copyright 2024–2025 © Metal Products Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
