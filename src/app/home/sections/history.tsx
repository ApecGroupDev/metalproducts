import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const History: React.FC = () => {
  return (
    <div className='relative z-20 bg-[#efefef] py-14 scrn-400:py-20 mb-16 scrn-1000:py-32'>
      <div className='flex flex-col items-center justify-center text-center space-y-16'>
        {/* Image on top */}
        <div className='w-full flex justify-center'>
          <Image
            src="/images/backgrounds/home/HISTORY.png"
            alt="History Graphic"
            width={1920}
            height={300}
            className='w-4/5 scrn-900:w-3/5 scrn-1000:w-2/5'
          />
        </div>

        {/* Text Section */}
        <div className='scrn-500:max-w-md scrn-600:max-w-lg scrn-1000:max-w-4xl px-4'>
          <p className='leading-relaxed text-center font-medium scrn-1000:font-semibold text-gray-800 text-base scrn-1000:text-xl scrn-1900:text-2xl'>
            Metal Products Company was founded in 1941 as a proprietorship to
            fabricate ladders and doors for Liberty Ships, which were being
            built at the rate of one per day. These ships were used to support
            supply for England in the early part of WWII.
          </p>
        </div>

        {/* Button with double border */}
        <div className='mt-4'>
          <Link href="/about">
            <button className='relative text-lg font-semibold rounded-lg px-6 py-2 border-4 border-white bg-[#ec1c24] text-black hover:bg-red-600'>
              <span className='absolute inset-0 border-2 border-[#ec1c24] hover:border-red-600 rounded-md -m-1'></span>
              <span className='relative z-10 px-8 text-white'>Full Story</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default History;
