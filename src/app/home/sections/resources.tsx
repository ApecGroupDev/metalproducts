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
    <section className="relative py-28 border-b border-[#e3e3e3]">
      <div className="max-w-[1440px] mx-auto px-4 scrn-600:px-6 scrn-1000:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-gray-900 text-5xl scrn-600:text-6xl scrn-1000:text-7xl font-extrabold tracking-tight">
            OUR <span className="text-[#c62931]">RESOURCES</span>
          </h2>
          <div className="mt-5 w-24 h-[4px] bg-[#c62931] mx-auto rounded-full"></div>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 scrn-800:grid-cols-3 gap-8 w-full">
          {resources.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-80 scrn-800:h-96 overflow-hidden bg-gray-50">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="px-8 pt-10 pb-6">
                <p className="text-gray-900 font-semibold text-2xl scrn-600:text-3xl scrn-1200:text-4xl whitespace-pre-line leading-snug tracking-wide">
                  {item.title}
                </p>
              </div>

              {/* Divider */}
              <div className="w-12 h-[3px] bg-[#c62931] mb-6 transition-all duration-300 group-hover:w-20"></div>

              {/* Learn More Link */}
              <div className="pb-12">
                <Link
                  href={item.link}
                  className="inline-block text-[#c62931] font-semibold text-lg scrn-600:text-xl hover:text-black transition-colors duration-300"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
