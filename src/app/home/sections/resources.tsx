import React from 'react';
import Image from 'next/image';

const Resources: React.FC = () => {
  return (
    <div className="relative z-10 bg-[#e3e3e3] py-20 -mt-1 overflow-hidden border-b-8 border-b-[#e3e3e3]">
      <div className="absolute inset-0 z-20"
      >
        <Image
          src="/images/backgrounds/home/resources.jpg"
          alt="Background"
          style={{ objectFit: 'contain' }}
          width={2786}
          height={1718}
          priority
          className=''
        />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center text-center space-y-8 mt-20">
        {/* Title */}
        <div className="w-full justify-center">
          <p className='italic text-gray-800 text-5xl scrn-1000:text-4xl font-semibold'>OUR</p>
          <p className='text-red-700 text-6xl scrn-1000:text-7xl font-bold'>RESOURCES</p>
        </div>

        {/* Cards */}
        <div className='grid scrn-1000:grid-cols-3 gap-8 relative
        px-12
        scrn-1000:px-12
        scrn-1900:px-12'
        >
          {[
            { title: "UNDERGROUND\nTANKS", image: "/images/backgrounds/home/001.png" },
            { title: "ABOVE GROUND\nTANK", image: "/images/backgrounds/home/002.png" },
            { title: "OIL / WATER\nSEPARATOR", image: "/images/backgrounds/home/003.png" },
          ].map((item, index) => (
            <div key={index} className="relative mt-20 scrn-1000:mt-0">
              {/* Spotlight inside the card */}
              <div className="absolute inset-0 z-10 opacity-100 scale-125">
                <Image
                  src="/images/backgrounds/home/spotlight_wide.png"
                  alt="Spotlight"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="pointer-events-none"
                />
              </div>

              {/* Text and image content */}
              <p className="leading-relaxed font-semibold text-gray-800 whitespace-pre-line relative z-20
              text-xl
              scrn-1000:text-2xl
              scrn-1900:text-2xl"
              >
                {item.title}
              </p>
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={300}
                className="mx-auto mt-4 scrn-1000:mt-16 relative z-20"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="pt-16">
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
