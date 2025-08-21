import React from 'react';
import BorderButtonWithDesc from '@/components/borderButtonWithDesc';

const pdfIndex = [
  {
    title: 'UNDERGROUND\nTANKS',
    image: '/images/backgrounds/resources/underground_tanks/Home_Dev_1012.png',
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
    ],
  },
];

const PDFs: React.FC = () => {
  return (
    <div className='bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-16'>
      <div className='max-w-7xl mx-auto text-center text-gray-800'>
        <h2 className='text-3xl font-bold text-red-600 mb-8'>Downloadable Resources</h2>

        {pdfIndex.map((item, index) => (
          <div key={index}>
            <div className='flex flex-wrap justify-center gap-8'>
              {item.pdfs.map((pdf, pdfIndex) => {
                const isExternal = pdf.file.startsWith('http');
                const href = isExternal ? pdf.file : `/pdfs/${pdf.file}`;

                return (
                  <a
                    key={pdfIndex}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BorderButtonWithDesc
                      label={pdf.name}
                      description={pdf.description || ''}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFs;
