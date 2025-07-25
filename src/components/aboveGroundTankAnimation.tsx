// 'use client';

// import React, { useEffect, useState, useRef } from 'react';

// const AboveGroundTankAnimation: React.FC = () => {
//   const totalFrames = 228;
//   const frameRate = 24;
//   const [frame, setFrame] = useState(0);
//   const [imagesLoaded, setImagesLoaded] = useState(false);
//   const imagesRef = useRef<HTMLImageElement[]>([]);

//   const firstFrameSrc = '/images/backgrounds/resources/above_ground_tanks/Home_Dev_1000.png';

//   // Preload images
//   useEffect(() => {
//     let loadedCount = 0;
//     const images: HTMLImageElement[] = [];

//     for (let i = 0; i < totalFrames; i++) {
//       const paddedFrame = i.toString().padStart(3, '0');
//       const img = new Image();
//       img.src = `/images/backgrounds/resources/above_ground_tanks/Home_Dev_1${paddedFrame}.png`;
//       img.onload = () => {
//         loadedCount++;
//         if (loadedCount === totalFrames) {
//           setImagesLoaded(true);
//         }
//       };
//       images.push(img);
//     }

//     imagesRef.current = images;
//   }, []);

//   // Play animation after preload
//   useEffect(() => {
//     if (!imagesLoaded) return;

//     const interval = setInterval(() => {
//       setFrame(prev => (prev + 1) % totalFrames);
//     }, 1000 / frameRate);

//     return () => clearInterval(interval);
//   }, [imagesLoaded]);

//   const currentSrc = imagesLoaded
//     ? imagesRef.current[frame].src
//     : firstFrameSrc;

//   return (
//     <div className='absolute z-50 w-full flex justify-center 
//     mt-48 
//     scrn-500:mt-52  
//     scrn-600:mt-56 
//     scrn-700:mt-72
//     scrn-800:mt-80
//     scrn-900:mt-32
//     scrn-1000:mt-36
//     scrn-1050:mt-48
//     scrn-1100:mt-52
//     scrn-1200:mt-60
//     scrn-1300:mt-64
//     scrn-1500:mt-72
//     scrn-1900:mt-40
//     scrn-2000:mt-60
//     scrn-2300:mt-72'
//     >
//       <img
//         src={currentSrc}
//         alt={`Frame ${frame}`}
//         width={1920}
//         height={300}
//         className='scrn-900:w-4/6 scrn-1000:w-6/7 scrn-1900:w-6/7'
//       />
//     </div>
//   );
// };

// export default AboveGroundTankAnimation;

'use client';

import React from 'react';

const AboveGroundTankAnimation: React.FC = () => {
  const staticImageSrc = '/images/backgrounds/resources/above_ground_tanks/Home_Dev_1000.png'; // Use any frame you'd like here

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
      scrn-2000:mt-60
      scrn-2300:mt-72'
    >
      <img
        src={staticImageSrc}
        alt="Above Ground Tank"
        width={1920}
        height={300}
        className='scrn-900:w-4/6 scrn-1000:w-6/7 scrn-1900:w-6/7'
      />
    </div>
  );
};

export default AboveGroundTankAnimation;
