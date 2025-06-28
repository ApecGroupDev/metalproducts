'use client';

import React, { useEffect, useState } from 'react';

const UndergroundTankAnimation: React.FC = () => {
  const [frame, setFrame] = useState(0);
  const totalFrames = 231;
  const frameRate = 24;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % totalFrames); // loop 0 -> 149
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  const paddedFrame = frame.toString().padStart(3, '0'); // Main000.png
  const src = `/images/backgrounds/resources/underground_tanks/Home_Dev_1${paddedFrame}.png`;

  return (
    <div className='absolute z-50 w-full flex justify-center 
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
    scrn-1900:mt-24
    scrn-2000:mt-132 
    scrn-2200:mt-144'>
      <img
        src={src}
        alt={`Frame ${paddedFrame}`}
        width={1920}
        height={300}
        className='scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3'
      />
    </div>
  );
};

export default UndergroundTankAnimation;
