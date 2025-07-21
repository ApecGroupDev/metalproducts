import React from 'react';
import BorderButtonWithDesc from '@/components/borderButtonWithDesc';

const pdfIndex = [
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
];

const PDFs: React.FC = () => {
  return (
    <div className="bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-16">
      <div className="max-w-7xl mx-auto text-center text-gray-800">
        <h2 className="text-3xl font-bold text-red-600 mb-8">Downloadable Resources</h2>

        {pdfIndex.map((item, index) => (
          <div key={index}>
            <div className="flex flex-wrap justify-center gap-8">
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
