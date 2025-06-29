import React from 'react';

const Main: React.FC = () => {
  return (
    <div className='bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-32'>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-justify'>
            Dive into advanced <span className='text-red-600'>oil/water separators</span> from Metal Products Company, a trusted name since 1941. Our AquaClean separators, engineered with precision at our Suwanee, Georgia, and Alachua, Florida facilities, efficiently separate oil from water, ensuring environmental compliance for industrial, commercial, and municipal applications. Utilizing state-of-the-art 3D design technology, these solutions are perfect for service stations, manufacturing sites, and wastewater management, meeting rigorous safety and environmental standards with a focus on reliability and ease of maintenance.
          </p>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-justify'>
            As a third-generation, family-owned company, we offer custom <span className='text-red-600'>oil/water separators</span> designed to address your specific environmental challenges. With a legacy of serving global brands like Shell and QuikTrip, we deliver innovative storage solutions that protect the environment while supporting your operational needs. Our separators are built to handle diverse conditions, offering long-term value, regulatory compliance, and reduced operational costs through efficient design and durable materials tailored to your site’s unique requirements.

          </p>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-center'>
            Contact us to explore how we can tailor a solution for your needs and ensure sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
