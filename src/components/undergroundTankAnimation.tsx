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
    scrn-2200:mt-48'>
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
