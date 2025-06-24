import React from 'react';
import Image from 'next/image';
import HeroTankAnimation from '@/components/heroTankAnimation';

const Hero: React.FC = () => {
  return (
    <div className="relative z-20">
      <div className="relative flex flex-col items-center justify-center scrn-900:justify-normal scrn-1000:justify-center bg-white border border-dashed border-b-green-600 h-140 scrn-450:h-148 scrn-500:h-160 scrn-550:h-168 scrn-600:h-208 scrn-700:h-224 scrn-800:h-240 scrn-900:h-148 scrn-1000:h-180 scrn-1150:h-188 scrn-1300:h-195 scrn-1350:h-208 scrn-1400:h-216 scrn-1450:h-228 scrn-1500:h-240 scrn-1650:h-272 scrn-1750:h-296 scrn-2000:h-312 scrn-2150:h-324 scrn-2350:h-360 scrn-2500:h-384">
        {/* Hero BG */}
        <div className="absolute inset-0 z-10 hidden scrn-900:block scrn-900:-mt-[4.5rem] scrn-1200:-mt-24 scrn-1400:-mt-28 scrn-1600:-mt-32 scrn-1750:-mt-36 scrn-1900:-mt-40 scrn-2100:-mt-48">
          <Image
            src="/images/backgrounds/home/Home_Dev_1.png"
            alt="Background"
            style={{ objectFit: 'contain' }}
            width={2786}
            height={1718}
            priority
          />
        </div>

        {/* Mobile only hero image */}
        <div className="absolute inset-0 z-10 scrn-900:hidden">
          <Image
            src="/images/backgrounds/home/Hero_Homepage_Mobile.png"
            alt="Background"
            style={{ objectFit: 'contain' }}
            width={2786}
            height={1718}
            priority
          />
        </div>

        {/* MAIN HERO TANK */}
        <HeroTankAnimation />

        {/* PLACEHOLDER TANK CODE */}
        {/* <div className="absolute z-50 w-full flex justify-center mt-72 scrn-450:mt-80 scrn-500:mt-112 scrn-550:mt-118 scrn-600:mt-112 scrn-650:mt-118 scrn-700:mt-128 scrn-750:mt-136 scrn-800:mt-144 scrn-850:mt-164 scrn-900:mt-80 scrn-1000:mt-80 scrn-1050:mt-96 scrn-1100:mt-120 scrn-1150:mt-128 scrn-1500:mt-160 scrn-1900:mt-164 scrn-2050:mt-180 scrn-2150:mt-208">
          <Image
            src="/images/backgrounds/home/Hero_Tank.png"
            alt="Bottom Graphic"
            width={1920}
            height={300}
            className="scrn-900:w-4/6 scrn-1000:w-3/5 scrn-1900:w-2/3"/>
        </div> */}

        {/*  Text Section */}
        <div className="text-center z-40 mt-8 scrn-650:mt-20 scrn-900:mt-40 scrn-1000:mt-0 scrn-1050:mt-12 scrn-1100:mt-10 scrn-1150:mt-24 scrn-1300:mt-16 scrn-1500:mt-24 scrn-1700:mt-16 scrn-1900:mt-8 scrn-2000:mt-0 scrn-2100:-mt-8 scrn-2150:mt-12">
          <p
            className="font-bold opacity-90 text-4xl scrn-400:text-6xl scrn-600:text-7xl scrn-700:text-8xl scrn-900:text-7xl scrn-1100:text-8xl scrn-1500:text-9xl scrn-1900:text-9xl scrn-2100:text-10xl"
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