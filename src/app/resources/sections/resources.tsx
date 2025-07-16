'use client';

import React from 'react';
import Image from 'next/image';
import BorderButtonWithDesc from '@/components/borderButtonWithDesc';

const Resources: React.FC = () => {
  const resources = [
    {
      title: 'UNDERGROUND\nTANKS',
      image: '/images/backgrounds/resources/underground_tanks/Home_Dev_1012.png',
      pdfs: [
        {
          name: 'ELUTRON Installation',
          file: 'Elutron_Install_Instructions.pdf',
          description: 'Detailed instructions for installing ELUTRON underground tanks.',
        },
        {
          name: 'Plasteel Composite Installation',
          file: 'Plasteel_Installation_Instrs.pdf',
          description: 'Guide for installing Plasteel composite underground tanks.',
        },
        { name: 'ELUTRON Warranty', file: 'Elutron_Warranty001.pdf' },
        { name: 'Plasteel Composite Warranty', file: 'Warranty_PS.pdf' },
        { name: 'ELUTRON Flyer', file: 'PlasteelBrochure04_07_2017.pdf' },
        { name: 'Plasteel Composite Flyer', file: 'PS_DW_FLYER_022824.pdf' },
        {
          name: 'Florida EQ# 333',
          file: 'https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list',
        },
      ],
    },
    {
      title: 'ABOVE GROUND\nTANKS',
      image: '/images/backgrounds/home/Above_Ground_Tank_Img.png',
      pdfs: [
        { name: 'UL 142 Installation', file: 'Installation_Instructions-R912.pdf' },
        { name: 'Flameshield Installation', file: 'Installation_Instructions.pdf' },
        { name: 'Fireguard Installation', file: 'Installation_Instructions.pdf' },
        { name: 'UL 142 Warranty', file: 'AST_STD_LIMITED_WARRANTY.pdf' },
        { name: 'Flameshield Warranty', file: 'Flameshield_Warranty_Dec_10.pdf' },
        { name: 'Fireguard Warranty', file: 'FG_warranty.pdf' },
        { name: 'UL 142 Double wall flyer', file: 'AST-UL142-101424.pdf' },
        { name: 'Flameshield Flyer', file: 'Flameshield_Product_Sheet.pdf' },
        { name: 'Fireguard flyer', file: 'Fireguard_09_09.pdf' },
        {
          name: 'Florida EQ# 342',
          file: 'https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list',
        },
      ],
    },
    {
      title: 'OIL / WATER\nSEPARATOR',
      image: '/images/backgrounds/home/Oil_Water_Separator.png',
      pdfs: [
        { name: 'OWS Installation', file: 'AquaClean_O&M_Generic.pdf' },
        { name: 'OWS Checklist', file: 'AquaClean_Checklist.pdf' },
        { name: 'Design Info', file: 'SEPARATORS_THAT_WORK-web.pdf' },
        { name: 'Low Flow (15PPM) units', file: 'LF_15.pdf' },
        { name: 'Low Flow (10PPM) units', file: 'lf_10.pdf' },
        { name: 'High Flow (15PPM) units', file: 'Hf_15.pdf' },
        { name: 'High Flow (10PPM) units', file: 'Hf_10.pdf' },
        { name: 'AquaClean Brochure', file: 'AquaClean_Brochure_web.pdf' },
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
                className='mx-auto 
                -mt-16 
                scrn-450:-mt-24 
                scrn-500:-mt-32 
                scrn-600:-mt-36 
                scrn-700:-mt-44 
                scrn-800:-mt-48 
                scrn-900:-mt-56 
                scrn-1000:-mt-20 
                scrn-1300:-mt-28
                scrn-1600:-mt-36

                relative z-20 

                scrn-1000:h-52
                scrn-1100:h-56
                scrn-1200:h-60
                scrn-1300:h-72
                scrn-1400:h-80
                scrn-1600:h-96
                scrn-1650:h-96
                scrn-1700:h-116
                scrn-1900:h-118'
              />
              <div>
                {/* PDF Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                  {item.pdfs.map((pdf, pdfIndex) => {
                    const isExternal = pdf.file.startsWith('http');
                    const href = isExternal ? pdf.file : `/pdfs/${pdf.file}`;

                    return (
                      <a
                        className="mt-auto"
                        key={pdfIndex}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BorderButtonWithDesc
                          label={pdf.name}
                          description={pdf.description || ''} // Pass description here
                        />
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
