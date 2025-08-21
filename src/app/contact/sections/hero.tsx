import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className='relative z-20'>
      <div className='relative flex flex-col items-center justify-center scrn-900:justify-normal scrn-1000:justify-center bg-[#efefef] h-140 scrn-450:h-148 scrn-500:h-160 scrn-550:h-180 scrn-600:h-208 scrn-700:h-224 scrn-750:h-232 scrn-800:h-248 scrn-900:h-160 scrn-1000:h-180 scrn-1100:h-195 scrn-1300:h-224 scrn-1350:h-228 scrn-1400:h-232 scrn-1450:h-236 scrn-1500:h-260 scrn-1650:h-272 scrn-1750:h-312 scrn-2000:h-316 scrn-2100:h-320 scrn-2150:h-324 scrn-2200:h-339 scrn-2300:h-368 scrn-2400:h-384 scrn-2450:h-416'>
        {/* Hero BG */}
        <div className='absolute inset-0 z-10 hidden scrn-900:block scrn-900:-mt-[4.5rem] scrn-1200:-mt-24 scrn-1400:-mt-28 scrn-1600:-mt-32 scrn-1750:-mt-36 scrn-1900:-mt-40 scrn-2100:-mt-48'>
          <Image
            src="/images/backgrounds/home/Hero_Home.webp"
            alt="Background"
            style={{ objectFit: 'contain' }}
            width={2560}
            height={1718}
            priority
          />
        </div>

        {/* Mobile only hero image */}
        <div className='absolute inset-0 z-10 scrn-900:hidden'>
          <Image
            src="/images/backgrounds/home/Hero_Home_Mobile.webp"
            alt="Background"
            style={{ objectFit: 'contain' }}
            width={900}
            height={1718}
            priority
          />
        </div>

        {/* MAIN HERO TANK */}
        <div
          className='absolute z-50 w-full flex justify-center me-8 scrn-700:me-10 mt-72 scrn-450:mt-80 scrn-500:mt-112 scrn-550:mt-80 scrn-600:mt-112 scrn-650:mt-118 scrn-700:mt-128 scrn-800:mt-132 scrn-850:mt-136 scrn-900:mt-64 scrn-1000:mt-80 scrn-1050:mt-96 scrn-1300:mt-120 scrn-2000:mt-132 scrn-2200:mt-144'>
          <Image
            src='/images/backgrounds/resources/Landing-Page-Tank.webp'
            alt="Tank"
            width={1920}
            height={300}
            className='scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3'
          />
        </div>

        {/*  Text Section */}
        <div className='text-center z-40 mt-8 scrn-650:mt-20 scrn-900:mt-40 scrn-1000:mt-0 scrn-1050:mt-12 scrn-1100:mt-0 scrn-1300:mt-12 scrn-1500:-mt-16 scrn-1700:-mt-24 scrn-1900:-mt-40'>
          <p
            className='font-bold opacity-90 text-4xl scrn-400:text-6xl scrn-600:text-7xl scrn-700:text-8xl scrn-900:text-7xl scrn-1100:text-8xl scrn-1500:text-9xl scrn-1900:text-9xl scrn-2100:text-10xl'
            style={{
              color: 'rgba(255, 255, 255, 255)',
              textShadow: `
                -3px 2px 2px rgba(0, 0, 0, 0.4),
                -6px 4px 4px rgba(0, 0, 0, 0.3),
                -9px 6px 8px rgba(0, 0, 0, 0.2),
                -12px 8px 12px rgba(0, 0, 0, 0.1)`
            }}
          >
            CONNECT <br />
            WITH <br />
            US
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;