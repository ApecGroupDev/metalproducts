import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative z-20">
      <div className="relative flex flex-col items-center justify-center bg-white
      h-140
      scrn-400:h-140
      scrn-600:h-124
      scrn-750:h-120
      scrn-800:h-124
      scrn-900:h-136
      scrn-1000:h-160
      scrn-1100:min-h-screen
      scrn-1150:h-168
      scrn-1200:h-176
      scrn-1300:h-188
      scrn-1400:h-198
      scrn-1500:h-216
      scrn-1600:h-228
      scrn-1700:h-248
      scrn-1800:h-260
      scrn-1900:min-h-screen
      scrn-2000:h-280
      scrn-2100:h-288
      scrn-2200:h-304
      scrn-2300:h-308
      scrn-2350:h-320
      scrn-2400:h-324
      scrn-2500:h-339"
      >
        <div className="absolute inset-0 z-10 
        scrn-1000:-mt-[4.5rem]
        scrn-1900:-mt-40"
        >
          <Image
            src="/images/backgrounds/home/Home_Dev_1.png"
            alt="Background"
            style={{ objectFit: 'contain' }}
            width={2786}
            height={1718}
            priority
          />
        </div>

        <div className="absolute z-50 w-full flex justify-center 
        scrn-1000:mt-110
        scrn-1900:mt-164"
        >
          <Image
            src="/images/backgrounds/home/Hero_Tank.png"
            alt="Bottom Graphic"
            width={1920}
            height={300}
            className="
            scrn-1000:w-3/5
            scrn-1900:w-2/3"
          />
        </div>

        {/*  Text Section */}
        <div className="text-center z-40 mt-8">
          <p
            className="font-bold opacity-90
            scrn-1000:text-7xl
            scrn-1900:text-9xl"
            style={{
              color: 'rgba(255, 255, 255, 255)',
              textShadow: `
                -3px 2px 2px rgba(0, 0, 0, 0.4),
                -6px 4px 4px rgba(0, 0, 0, 0.3),
                -9px 6px 8px rgba(0, 0, 0, 0.2),
                -12px 8px 12px rgba(0, 0, 0, 0.1)`
            }}
          >
            METAL <br />
            PRODUCTS <br />
            COMPANY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;