import React from 'react';

const Main: React.FC = () => {
  return (
    <div className='bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-32 border-b-2'>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-justify'>
            Uncover reliable <span className='text-red-600'>aboveground storage tanks</span>from Metal Products Company, an industry leader since 1941. Our UL 142, Flameshield, and Fireguard tanks meet stringent safety standards, delivering exceptional durability and accessibility for bulk plants, service stations, and industrial applications. Designed with advanced 3D technology at our modern facilities in Suwanee, Georgia, and Alachua, Florida, these tanks are engineered to withstand harsh environmental conditions while ensuring full compliance with industry regulations. Trusted by brands like Amoco, Esso, and Phillips Petroleum, our solutions have a proven track record worldwide.
          </p>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-justify'>
            Our <span className='text-red-600'>aboveground storage tanks</span>combine innovation with custom design, allowing us to meet your unique storage needs with precision and flexibility. As a third-generation, family-owned business, we prioritize quality, client satisfaction, and sustainable practices, serving clients globally with tailored solutions. These tanks are ideal for fuel retail, large-scale industrial use, or emergency storage, offering robust construction, advanced safety features, and ease of maintenance to enhance your operations effectively.

          </p>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-center'>
            Enhance your storage capabilities with our decades of expertise and commitment to excellence. <br />
            Take the next step today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
