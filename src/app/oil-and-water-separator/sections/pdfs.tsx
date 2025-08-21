import React from 'react';
import BorderButtonWithDesc from '@/components/borderButtonWithDesc';

const pdfIndex = [
  {
    title: 'UNDERGROUND\nTANKS',
    image: '/images/backgrounds/resources/underground_tanks/Home_Dev_1012.png',
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
