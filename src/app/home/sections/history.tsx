import React from 'react';
import Image from 'next/image';

const History: React.FC = () => {
  return (
    <div className="relative z-20 bg-white py-12">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        {/* Image on top */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/backgrounds/home/HISTORY.png"
            alt="History Graphic"
            width={1920}
            height={300}
            className="w-2/5"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-4xl px-4">
          <p className="text-2xl leading-relaxed font-semibold text-gray-800">
            Metal Products Company was founded in 1941 as a proprietorship to <br />
            fabricate ladders and doors for Liberty Ships, which were being <br />
            built at the rate of one per day. These ships were used to support <br />
            supply for England in the early part of WWII.
          </p>
        </div>

        {/* Button with double border */}
        <div className="mt-4">
          <button className="relative text-lg font-semibold rounded-lg px-6 py-2 border-4 border-white bg-red-800 text-black">
            <span className="absolute inset-0 border-2 border-red-800 rounded-md -m-1"></span>
            <span className="relative z-10 px-8 text-white">Full Story</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;
