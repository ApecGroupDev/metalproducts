import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className='bg-white py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-32'>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Founding and Early Years <br /> <span className='text-red-600 italic font-thin'>(1941–1945)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            Metal Products Company was founded in 1941 as a proprietorship to fabricate ladders and doors for Liberty Ships, which were being built at the rate of one per day. These ships were crucial in supplying England during the early part of World War II.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            The company was started by C.E. Gammage and Robert Harris, friends and Georgia Tech alumni from the class of 1927.
          </p>
          {/* Background Year (left-aligned) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-left-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              1941
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
