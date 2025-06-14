import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative z-20">
      <div className="relative flex flex-col-reverse scrn-600:flex-row scrn-600:ps-2 items-center justify-center bg-gray-300
      h-140
      scrn-400:h-140
      scrn-600:h-124
      scrn-750:h-120
      scrn-800:h-124
      scrn-900:h-136
      scrn-1000:h-160
      scrn-1100:h-168
      scrn-1150:h-168
      scrn-1200:h-176
      scrn-1300:h-188
      scrn-1400:h-198
      scrn-1500:h-216
      scrn-1600:h-228
      scrn-1700:h-248
      scrn-1800:h-260
      scrn-1900:h-screen
      scrn-2000:h-280
      scrn-2100:h-288
      scrn-2200:h-304
      scrn-2300:h-308
      scrn-2350:h-320
      scrn-2400:h-324
      scrn-2500:h-339"
      >
        <div className="absolute inset-0 z-10 -mt-48"
        >
          <Image
            src="/images/backgrounds/home/Hero_Homepage.png"
            alt="Background"
            style={{ objectFit: 'contain' }}
            width={2786}
            height={1718}
            priority
          />
        </div>
        {/*  Text Section */}
        <div className="text-center z-20"
        >
          <p className='text-9xl font-semibold'>
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