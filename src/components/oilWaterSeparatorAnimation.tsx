'use client';

import React, { useEffect, useState } from 'react';

const OilWaterSeparatorAnimation: React.FC = () => {
  const [frame, setFrame] = useState(0);
  const totalFrames = 183;
  const frameRate = 24;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % totalFrames); // loop 0 -> 149
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  const paddedFrame = frame.toString().padStart(3, '0'); // Main000.png
  const src = `/images/backgrounds/resources/oil_and_water_separator/OilSeprator${paddedFrame}.png`;

  return (
    <div className='absolute z-50 w-full flex justify-center me-4 scrn-1900:me-12 scrn-2100:me-20
    mt-64
    scrn-400:mt-72
    scrn-450:mt-80
    scrn-500:mt-96
    scrn-650:mt-120
    scrn-700:mt-128
    scrn-800:mt-140
    scrn-850:mt-152
    scrn-900:mt-72
    scrn-1000:mt-80
    scrn-1050:mt-116
    scrn-1100:mt-120
    scrn-1200:mt-128
    scrn-1300:mt-132
    scrn-1500:mt-160
    scrn-1700:mt-172
    scrn-1900:mt-152
    scrn-2000:mt-172
    scrn-2100:mt-180
    scrn-2150:mt-192
    scrn-2500:mt-208
    '>
      <img
        src={src}
        alt={`Frame ${paddedFrame}`}
        width={1920}
        height={300}
        className='scrn-900:w-4/6 scrn-1000:w-6/7 scrn-1900:w-5/7 scale-90'
      />
    </div>
  );
};

export default OilWaterSeparatorAnimation;
