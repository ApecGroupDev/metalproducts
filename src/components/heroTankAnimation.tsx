'use client';
import React from 'react';
import Image from 'next/image';

const HeroTankAnimation: React.FC = () => {
  const staticImageSrc = '/images/backgrounds/home/Tank/Main000.png';

  return (
    <div
      className='absolute z-50 w-full flex justify-center me-8 scrn-700:me-10
      mt-72 
      scrn-450:mt-80 
      scrn-500:mt-112 
      scrn-550:mt-80 
      scrn-600:mt-112 
      scrn-650:mt-118 
      scrn-700:mt-128 
      scrn-750:mt-128 
      scrn-800:mt-132
      scrn-850:mt-136
      scrn-900:mt-64
      scrn-1000:mt-80 
      scrn-1050:mt-96
      scrn-1300:mt-120
      scrn-1500:mt-120
      scrn-1900:mt-120 
      scrn-2000:mt-132 
      scrn-2200:mt-144'
    >
      <Image
        src={staticImageSrc}
        alt="Tank"
        width={1920}
        height={300}
        className='scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3'
      />
    </div>
  );
};

export default HeroTankAnimation;

