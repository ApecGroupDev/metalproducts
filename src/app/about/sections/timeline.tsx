'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Timeline: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Close modal on scroll
  useEffect(() => {
    if (!showModal) return;

    const handleScroll = () => {
      setShowModal(false);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup when modal is closed
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showModal]);

  return (
    <div className='bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-32'>

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

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Incorporation and Growth <br /> <span className='text-red-600 italic font-thin'>(1950s–1960s)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            During the 1950s, the company transitioned from a proprietorship to a corporation.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            In this era, Metal Products Company began furnishing tanks to major petroleum companies such as:
          </p>
          <ul className='text-lg scrn-600:text-xl space-y-2 font-bold text-red-700 italic'>
            <li>Standard Oil Company</li>
            <li>Sinclair Refining Company</li>
            <li>Shell</li>
            <li>Texaco</li>
            <li>Gulf</li>
            <li>Phillips Petroleum</li>
          </ul>
          {/* Background Year (right-aligned) */}
          <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-right-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              1950
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Infrastructure Boom and Custom Tank Production <br /> <span className='text-red-600 italic font-thin'>(1960s–1970s)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            With the construction of the interstate highway system, large shopping centers, and airports, the company produced:
          </p>
          <ul className='text-lg scrn-600:text-xl space-y-2 font-bold text-red-700 italic'>
            <li>10,000-gallon skid tanks</li>
            <li>1,000-gallon wagon-mounted tanks with pumping systems and filters</li>
          </ul>
          {/* Background Year (left-aligned) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-left-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              1960
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Relocation and Modernization <br /> <span className='text-red-600 italic font-thin'>(1977–1979)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            As the original Atlanta facility aged, the company sought a new site with rail access.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            A new plant was constructed in Suwanee, Georgia, about 20 miles northeast of Atlanta, and opened in late 1978.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            The old Atlanta plant officially closed on January 1, 1979.
          </p>
          {/* Background Year (right-aligned) */}
          <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-right-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              1977
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Technological Advancements <br /> <span className='text-red-600 italic font-thin'>(1980s)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            By 1983, Metal Products Company became involved in advanced underground tank technologies, integrating systems from California, Illinois, and Pennsylvania.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            Notable customers during this period included:
          </p>
          <ul className='text-lg scrn-600:text-xl space-y-2 font-bold text-red-700 italic'>
            <li>Amoco</li>
            <li>QuikTrip</li>
            <li>Racetrac</li>
            <li>Starvin Marvin</li>
            <li>Esso, Shell, and Texaco (in the Caribbean)</li>
          </ul>
          {/* Background Year (left-aligned) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-left-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              1983
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Ongoing Growth and Innovation <br /> <span className='text-red-600 italic font-thin'>(1990s–2000s)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            Throughout the 1990s, the company:
          </p>
          <ul className='text-lg scrn-600:text-xl space-y-2 font-bold text-red-700 italic'>
            <li>Enhanced underground tank technology</li>
            <li>Introduced new aboveground tank products</li>
            <li>Added oil/water separators for both aboveground and underground use
              The Suwanee plant site has been expanded five times since 1978 to meet growing demand.</li>
          </ul>
          {/* Background Year (right-aligned) */}
          <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-right-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              1990
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Celebrating 80 Years <br /> <span className='text-red-600 italic font-thin'>(2021)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            In 2021, Metal Products Company proudly celebrated its 80th anniversary.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            With a long-standing commitment to quality and service, the company continues to meet the demands of the environment, the petroleum industry, and safety regulations.
          </p>
          {/* Background Year (left-aligned) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-left-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              2021
            </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Acquired by Ali Husain <br /> <span className='text-red-600 italic font-thin'>(2023)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            In May of 2023, after three generations of ownership by Gammage family, Metal Products Company (formerly owned by GA Tanks) sold its assets to Ali Husain.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            New management brought new enthusiasm to the work force, protocols and production efficiencies.

            Today, the company continues to operate at full capacity producing quality underground and above ground storage tanks using Elutron technology to a variety to customers throughout southeast and other parts of the country.
          </p>
          {/* Background Year (right-aligned) */}
          <div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-right-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              2023
            </p>
          </div>
          {/* Team Photo with basic modal */}
          <div className="pt-6">
            <div
              onClick={() => setShowModal(true)}
              className="relative mx-auto w-full max-w-4xl h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg cursor-zoom-in"
            >
              <Image
                src="/images/about/Team.jpg"
                alt="Metal Products Company Team - 2023"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-sm text-gray-600 italic text-center">
              Click to enlarge – Metal Products Company team – 2023
            </p>
          </div>

          {/* Modal for enlarged image */}
          {showModal && (
            <div
              className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
              onClick={() => setShowModal(false)} // click anywhere to close
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/about/Team.jpg"
                  alt="Metal Products Company Team - Fullscreen"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='max-w-7xl mx-auto pb-60'>
        {/* Main Content */}
        <div className='relative z-0 mx-auto text-center text-gray-800 space-y-4 max-w-80 scrn-500:max-w-96 scrn-600:max-w-full scrn-600:px-12 scrn-1200:px-20'>
          <h2 className='text-xl font-semibold scrn-600:font-bold scrn-600:text-2xl'>Celebrating 80 Years <br /> <span className='text-red-600 italic font-thin'>(2025)</span></h2>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            As of 2025 the production is now in full swing with increased efficiency of production of tanks based on customer's needs. All lines of production with improved overhead cranes are preparing tanks exceeding customer's expectations. Additional staff is now well trained ready to take on orders from customers as they continue to pour in.
          </p>
          <p className='text-lg scrn-600:text-xl font-medium text-justify'>
            We are delighted to participate in this robust economy producing products for customers to begin their fueling using our tanks. We appreciate our customers to have their trust in us and we are committed to providing the best service at the speed they expect from us.
          </p>
          {/* Background Year (left-aligned) */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none scrn-750:-left-4 scrn-750:translate-x-0'>
            <p className='text-red-200 text-10xl scrn-450:text-11xl scrn-750:text-13xl scrn-1000:text-[18rem] opacity-50 select-none leading-none mb-12'>
              2025
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Timeline;
