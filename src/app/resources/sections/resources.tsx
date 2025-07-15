'use client';

import React from 'react';
import Image from 'next/image';
import BorderButton from '@/components/borderButton';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'UNDERGROUND\nTANKS',
      image: '/images/backgrounds/resources/underground_tanks/Home_Dev_1012.png',
      pdfs: [
        { name: 'Installation Guide', file: 'AquaClean_O&M_Generic.pdf' },
        { name: 'Checklist', file: 'AquaClean_Checklist.pdf' },
      ],
    },
    {
      title: 'ABOVE GROUND\nTANKS',
      image: '/images/backgrounds/home/Above_Ground_Tank_Img.png',
      pdfs: [
        { name: 'Design Info', file: 'SEPARATORS_THAT_WORK-web.pdf' },
        { name: 'Brochure', file: 'AquaClean_Brochure_web.pdf' },
      ],
    },
    {
      title: 'OIL / WATER\nSEPARATOR',
      image: '/images/backgrounds/home/Oil_Water_Separator.png',
      pdfs: [
        { name: 'Low Flow (15PPM)', file: 'LF_15.pdf' },
        { name: 'Low Flow (10PPM)', file: 'lf_10.pdf' },
        { name: 'High Flow (15PPM)', file: 'Hf_15.pdf' },
        { name: 'High Flow (10PPM)', file: 'Hf_10.pdf' },
        { name: 'Accessories', file: '64358249435378456110422c_900126_rev2002.pdf' },
      ],
    },
  ];

  return (
    <div className='relative z-10 bg-[#e3e3e3] py-20 overflow-hidden border-b-8 border-b-[#e3e3e3]'>
      <div className='relative z-30 flex flex-col items-center justify-center text-center space-y-8'>
        {/* Cards */}
        <div className='grid scrn-1000:grid-cols-3 gap-8 relative px-12 scrn-1000:px-12 scrn-1900:px-12 scrn-2000:px-24 scrn-2200:px-32 scrn-2400:px-40 scrn-2500:px-60'>
          {resources.map((item, index) => (
            <div key={index} className='relative mt-20 scrn-1000:mt-0 flex flex-col items-center'>

              {/* Text and image content */}
              <p className='leading-relaxed font-semibold text-gray-800 whitespace-pre-line relative z-20 text-xl scrn-1000:text-2xl scrn-1900:text-2xl'>
                {item.title}
                <br />
                <span className='text-red-600 italic'>RESOURCES</span>
              </p>
              <Image
                src={item.image}
                alt={item.title}
                width={1920}
                height={300}
                className='mx-auto -mt-24 relative z-20'
              />
              <div>
                {/* PDF Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {item.pdfs.map((pdf, pdfIndex) => {
                    const isExternal = pdf.file.startsWith('http');
                    const href = isExternal
                      ? pdf.file
                      : `/pdfs/oil_and_water_separator/${pdf.file}`;

                    return (
                      <a
                        className='mt-auto'
                        key={pdfIndex}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BorderButton label={pdf.name} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
