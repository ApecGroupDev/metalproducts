'use client';
import React from 'react';
import Image from 'next/image';

const UndergroundTankAnimation: React.FC = () => {
  const staticImageSrc = '/images/backgrounds/resources/underground_tanks/Home_Dev_1098.png';

  return (
    <div className='absolute z-50 w-full flex justify-center 
      mt-48 
      scrn-500:mt-52  
      scrn-600:mt-56 
      scrn-700:mt-72
      scrn-800:mt-80
      scrn-900:mt-32
      scrn-1000:mt-36
      scrn-1050:mt-48
      scrn-1100:mt-52
      scrn-1200:mt-60
      scrn-1300:mt-64
      scrn-1500:mt-72
      scrn-1900:mt-40
      scrn-2000:mt-44 
      scrn-2200:mt-48'
    >
      <Image
        src={staticImageSrc}
        alt="Underground Tank"
        width={1920}
        height={300}
        className='scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3'
      />
    </div>
  );
};

export default UndergroundTankAnimation;
