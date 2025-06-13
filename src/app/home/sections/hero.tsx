import React from 'react';
// import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative z-20">
      <div className="relative flex flex-col-reverse scrn-600:flex-row scrn-600:ps-2 items-center justify-between bg-gray-300
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
      scrn-1900:h-272
      scrn-2000:h-280
      scrn-2100:h-288
      scrn-2200:h-304
      scrn-2300:h-308
      scrn-2350:h-320
      scrn-2400:h-324
      scrn-2500:h-339"
      >
        {/* Left Text Section */}
        <div className="scrn-1500:ms-4 scrn-2300:ms-8 -space-y-1.5 text-center mb-6 scrn-400:mb-0 scrn-600:text-left scrn-1000:pb-5 z-20 hidden scrn-600:block me-60
        scrn-600:pt-20
        scrn-750:pt-12
        scrn-1000:pt-20
        scrn-1300:pt-24
        scrn-1800:pt-32"
        >
          <p className="text-xl scrn-700:text-2xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-bold whitespace-nowrap">
            METAL PRODUCTS
          </p>
          <p className="text-2xl scrn-700:text-3xl scrn-900:text-4xl scrn-1000:text-4xl scrn-1200:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1800:text-7xl scrn-2300:text-8xl font-regular italic text-[#c62931] tracking-wider whitespace-nowrap">
            WEBSITE
          </p>
          <p className="text-xl scrn-700:text-2xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-regular">
            COMING SOON
          </p>
        </div>

        {/* Right Text Section */}
        <div className="scrn-1500:ms-4 scrn-2300:ms-8 -space-y-1.5 text-center mb-6 scrn-400:mb-0 scrn-600:text-left scrn-1000:pb-5 z-20 hidden scrn-600:block me-auto
        scrn-600:pt-20
        scrn-750:pt-12
        scrn-1000:pt-20
        scrn-1300:pt-24
        scrn-1800:pt-32"
        >
          <p className="text-xl scrn-700:text-2xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-bold whitespace-nowrap">
            METAL PRODUCTS
          </p>
          <p className="text-2xl scrn-700:text-3xl scrn-900:text-4xl scrn-1000:text-4xl scrn-1200:text-5xl scrn-1500:text-6xl scrn-1700:text-6xl scrn-1800:text-8xl scrn-2300:text-8xl font-regular italic text-[#c62931] tracking-wider whitespace-nowrap">
            HERO PAGE
          </p>
          <p className="text-xl scrn-700:text-2xl scrn-900:text-2xl scrn-1000:text-2xl scrn-1200:text-3xl scrn-1500:text-4xl scrn-1700:text-4xl scrn-1800:text-5xl scrn-2300:text-6xl font-regular">
            COMING SOON
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;