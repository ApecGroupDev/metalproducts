'use client';

import React, { useEffect, useState, useRef } from 'react';

const HeroTankAnimation: React.FC = () => {
  const totalFrames = 292;
  const frameRate = 24;
  const [frame, setFrame] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const firstFrameSrc = '/images/backgrounds/home/Tank/Main002000.png';

  // Preload images once
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < totalFrames; i++) {
      const paddedFrame = i.toString().padStart(3, '0');
      const img = new Image();
      img.src = `/images/backgrounds/home/Tank/Main002${paddedFrame}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Play animation once images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setFrame(prev => (prev + 1) % totalFrames);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const currentSrc = imagesLoaded
    ? imagesRef.current[frame].src
    : firstFrameSrc;

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
      <img
        src={currentSrc}
        alt={`Frame ${frame}`}
        width={1920}
        height={300}
        className='scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3'
      />
    </div>
  );
};

export default HeroTankAnimation;
