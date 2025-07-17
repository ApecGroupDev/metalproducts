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
        {
          name: 'ELUTRON Warranty',
          file: 'Elutron_Warranty001.pdf',
          description: 'Warranty terms and coverage details for ELUTRON underground tanks.',
        },
        {
          name: 'Plasteel Composite Warranty',
          file: 'Warranty_PS.pdf',
          description: 'Official warranty document for Plasteel composite tanks.',
        },
        {
          name: 'ELUTRON Flyer',
          file: 'PlasteelBrochure04_07_2017.pdf',
          description: 'Product brochure highlighting the features of ELUTRON tanks.',
        },
        {
          name: 'Plasteel Composite Flyer',
          file: 'PS_DW_FLYER_022824.pdf',
          description: 'Marketing flyer showcasing the benefits of Plasteel composite tanks.',
        },
        {
          name: 'Florida EQ# 333',
          file: 'https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list',
          description: 'Link to the Florida Department of Environmental Protection storage tank equipment registration list, including EQ# 333.',
        },
      ],
    },
    {
      title: 'ABOVE GROUND\nTANKS',
      image: '/images/backgrounds/home/Above_Ground_Tank_Img.png',
      pdfs: [
        {
          name: 'UL 142 Installation',
          file: 'Installation_Instructions-R912.pdf',
          description: 'Step-by-step installation guide for UL 142 aboveground storage tanks.',
        },
        {
          name: 'Flameshield Installation',
          file: 'Installation_Instructions.pdf',
          description: 'Installation instructions for Flameshield protected aboveground storage tanks.',
        },
        {
          name: 'Fireguard Installation',
          file: 'Installation_Instructions.pdf',
          description: 'Detailed guide for installing Fireguard insulated aboveground storage tanks.',
        },
        {
          name: 'UL 142 Warranty',
          file: 'AST_STD_LIMITED_WARRANTY.pdf',
          description: 'Warranty terms and coverage details for UL 142 storage tanks.',
        },
        {
          name: 'Flameshield Warranty',
          file: 'Flameshield_Warranty_Dec_10.pdf',
          description: 'Limited warranty document for Flameshield aboveground storage tanks.',
        },
        {
          name: 'Fireguard Warranty',
          file: 'FG_warranty.pdf',
          description: 'Official warranty details for Fireguard insulated aboveground tanks.',
        },
        {
          name: 'UL 142 Double Wall Flyer',
          file: 'AST-UL142-101424.pdf',
          description: 'Marketing flyer highlighting features of UL 142 double-wall tanks.',
        },
        {
          name: 'Flameshield Flyer',
          file: 'Flameshield_Product_Sheet.pdf',
          description: 'Product sheet showcasing Flameshield tank features and benefits.',
        },
        {
          name: 'Fireguard Flyer',
          file: 'Fireguard_09_09.pdf',
          description: 'Flyer presenting Fireguard tank specifications and fire protection details.',
        },
        {
          name: 'Florida EQ# 342',
          file: 'https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list',
          description: 'Link to the Florida DEP storage tank equipment registration list, including EQ# 342.',
        },
      ]
    },
    {
      title: 'OIL / WATER\nSEPARATOR',
      image: '/images/backgrounds/home/Oil_Water_Separator.png',
      pdfs: [
        {
          name: 'OWS Installation',
          file: 'AquaClean_O&M_Generic.pdf',
          description: 'Operation and maintenance manual for AquaClean Oil Water Separators.',
        },
        {
          name: 'OWS Checklist',
          file: 'AquaClean_Checklist.pdf',
          description: 'Inspection and maintenance checklist for AquaClean Oil Water Separator systems.',
        },
        {
          name: 'Design Info',
          file: 'SEPARATORS_THAT_WORK-web.pdf',
          description: 'Detailed design information and technical guide for oil-water separators.',
        },
        {
          name: 'Low Flow (15PPM) Units',
          file: 'LF_15.pdf',
          description: 'Specifications and data sheet for low flow AquaClean units rated at 15 PPM.',
        },
        {
          name: 'Low Flow (10PPM) Units',
          file: 'lf_10.pdf',
          description: 'Specifications and technical details for low flow AquaClean units rated at 10 PPM.',
        },
        {
          name: 'High Flow (15PPM) Units',
          file: 'Hf_15.pdf',
          description: 'Product information for high flow AquaClean units with a 15 PPM discharge rating.',
        },
        {
          name: 'High Flow (10PPM) Units',
          file: 'Hf_10.pdf',
          description: 'Specifications for high flow AquaClean units rated at 10 PPM discharge.',
        },
        {
          name: 'AquaClean Brochure',
          file: 'AquaClean_Brochure_web.pdf',
          description: 'Marketing brochure highlighting AquaClean Oil Water Separator features and benefits.',
        },
        {
          name: 'Accessories',
          file: '64358249435378456110422c_900126_rev2002.pdf',
          description: 'Accessories guide and optional equipment list for AquaClean systems.',
        },
      ]
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
