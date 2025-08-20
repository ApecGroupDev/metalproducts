'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'UNDERGROUND\nTANKS',
      image: '/images/backgrounds/home/resources/Resources-Underground-Tanks.webp',
      link: '/underground-tanks',
    },
    {
      title: 'ABOVE GROUND\nTANKS',
      image: '/images/backgrounds/home/resources/Resources-Above-Ground-Tank.webp',
      link: '/above-ground-tank',
    },
    {
      title: 'OIL / WATER\nSEPARATOR',
      image: '/images/backgrounds/home/resources/Resources-Oil-and-Water-Separator.webp',
      link: '/oil-and-water-separator',
    },
  ];

  return (
    <div className='relative z-10 bg-[#e3e3e3] py-20 -mt-1 overflow-hidden border-b-8 border-b-[#e3e3e3]'>
      <div className='absolute inset-0 z-20'>
        <Image
          src="/images/backgrounds/home/resources_new.png"
          alt="Background"
          style={{ objectFit: 'contain' }}
          width={2786}
          height={1718}
          priority
        />
      </div>

      <div className='relative z-30 flex flex-col items-center justify-center text-center space-y-8 scrn-400:mt-20'>
        {/* Title */}
        <div className='w-full justify-center'>
          <p className='italic text-gray-800 text-4xl scrn-400:text-5xl scrn-1000:text-4xl font-semibold'>OUR</p>
          <p className='text-red-700 text-5xl scrn-400:text-6xl scrn-1000:text-7xl font-bold'>RESOURCES</p>
        </div>

        {/* Cards */}
        <div className='grid scrn-1000:grid-cols-3 gap-8 relative px-12 scrn-1000:px-12 scrn-1900:px-12 scrn-2000:px-24 scrn-2200:px-32 scrn-2400:px-40 scrn-2500:px-60'>
          {resources.map((item, index) => (
            <div key={index} className='relative mt-20 scrn-1000:mt-0 flex flex-col items-center'>
              {/* Spotlight inside the card */}
              <div className='absolute inset-0 z-10 opacity-100 scale-125'>
                <Image
                  src="/images/backgrounds/home/spotlight_wide.png"
                  alt="Spotlight"
                  fill
                  style={{ objectFit: 'contain' }}
                  className='pointer-events-none'
                />
              </div>

              {/* Text and image content */}
              <p className='leading-relaxed font-semibold text-gray-800 whitespace-pre-line relative z-20 text-xl scrn-1000:text-2xl scrn-1900:text-2xl'>
                {item.title}
              </p>
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={300}
                className='mx-auto -mt-8 relative z-20'
              />

              {/* Individual Button */}
              <Link href={item.link} className="relative z-20 mt-auto pt-8">
                <span className="relative z-10 px-8 text-red-600 text-lg font-medium text-center block leading-snug">
                  Learn more about {item.title}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
