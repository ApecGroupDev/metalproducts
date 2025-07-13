'use client';

import React, { useEffect, useState } from 'react';

const HeroTankAnimation: React.FC = () => {
  const [frame, setFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const totalFrames = 50;
  const frameRate = 24;

  const originalTotalFrames = 292;
  const sampleStep = Math.floor(originalTotalFrames / totalFrames); // e.g., 5

  const sampledFrames = Array.from({ length: totalFrames }, (_, i) => i * sampleStep);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < sampledFrames.length; i++) {
      const originalFrame = sampledFrames[i];
      const padded = originalFrame.toString().padStart(3, '0');
      const img = new Image();
      img.src = `/images/backgrounds/home/Tank/Main002${padded}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error(`Failed to load frame: Main002${padded}.png`);
      };
      images.push(img);
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % totalFrames);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const currentOriginalFrame = sampledFrames[frame];
  const paddedFrame = currentOriginalFrame.toString().padStart(3, '0');
  const src = `/images/backgrounds/home/Tank/Main002${paddedFrame}.png`;

  return (
    <div className='absolute z-50 w-full flex justify-center me-8 scrn-700:me-10
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
      scrn-2200:mt-144'>

      {imagesLoaded ? (
        <img
          src={src}
          alt={`Frame ${paddedFrame}`}
          width={1920}
          height={300}
          className='scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3'
        />
      ) : (
        <p className="text-white text-lg">Loading animation...</p>
      )}
    </div>
  );
};

export default HeroTankAnimation;
