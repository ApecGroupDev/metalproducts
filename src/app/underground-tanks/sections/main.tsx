import React from 'react';

const Main: React.FC = () => {
  return (
    <div className='bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-32'>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-justify'>
            Discover top-tier <span className='text-red-600'>Underground Storage Tanks</span> from <span className='text-red-600'>Metal Products Company</span>, a pioneer in petroleum
            tank manufacturing since 1941. Our Plasteel COMPOSIT and ELUTRON tanks, introduced in 1983, offer unmatched durability and safety for
            fuel storage, featuring advanced corrosion resistance and leak detection systems. Crafted with cutting-edge 3D design technology at our
            state-of-the-art facilities in Suwanee, Georgia, and Alachua, Florida, these tanks provide space-efficient, reliable solutions for
            service stations, airports, and industrial sites. Trusted by global leaders like Shell, Texaco, and QuikTrip, our tanks meet UL
            certifications, ensuring compliance and long-term performance.
          </p>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-justify'>
            As a third-generation, family-owned business with over eight decades of expertise, we tailor <span className='text-red-600'>Underground
              Storage Tanks</span> to meet your specific needs, supporting critical infrastructure such as highways, airports, and large-scale
            industrial projects. Our global reputation is built on delivering innovative, sustainable solutions that prioritize safety, efficiency,
            and environmental responsibility. With custom designs incorporating advanced materials and precision engineering, we address diverse
            challenges, from urban space constraints to remote site demands, ensuring optimal functionality for every application.
          </p>
          <p className='text-lg/7 scrn-600:text-xl/8 font-medium text-center'>
            Ready to upgrade your storage solutions with a trusted partner? <br />
            Explore our expertise and get started today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
