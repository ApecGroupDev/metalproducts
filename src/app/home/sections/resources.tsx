import React from 'react';
import Image from 'next/image';

const Resources: React.FC = () => {
  return (
    <div className="relative z-20 bg-white py-12">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        {/* Image on top */}
        <div className="w-full justify-center">
          <p className='italic text-gray-800 text-4xl font-semibold'>OUR</p>
          <p className='text-red-700 text-7xl font-bold'>RESOURCES</p>
        </div>

        <div className='grid grid-cols-3 max-w-8xl'>
          <div className="">
            <p className="text-2xl leading-relaxed font-semibold text-gray-800">
              UNDERGROUND<br />
              TANKS
            </p>
            <Image
              src="/images/backgrounds/home/001.png"
              alt="History Graphic"
              width={1920}
              height={300}
              className="w-2/3 mx-auto"
            />
          </div>
          <div className="">
            <p className="text-2xl leading-relaxed font-semibold text-gray-800">
              ABOVE GROUND<br />
              TANK
            </p>
            <Image
              src="/images/backgrounds/home/002.png"
              alt="History Graphic"
              width={1920}
              height={300}
              className="w-2/3 mx-auto"
            />
          </div>
          <div className="">
            <p className="text-2xl leading-relaxed font-semibold text-gray-800">
              OIL / WATER<br />
              SEPARATOR
            </p>
            <Image
              src="/images/backgrounds/home/003.png"
              alt="History Graphic"
              width={1920}
              height={300}
              className="w-2/3 mx-auto"
            />
          </div>

        </div>

        {/* Button with double border */}
        <div className="mt-4">
          <button className="relative text-lg font-semibold rounded-lg px-6 py-2 border-4 border-white bg-red-800 text-black">
            <span className="absolute inset-0 border-2 border-red-800 rounded-md -m-1"></span>
            <span className="relative z-10 px-8 text-white">Read More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
