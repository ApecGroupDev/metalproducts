import React from 'react';
import BorderButton from '@/components/borderButton';

const pdfFiles = [
  { name: 'ELUTRON Installation', file: 'Elutron_Install_Instructions.pdf' },
  { name: 'Plasteel Composite Installation', file: 'Plasteel_Installation_Instrs.pdf' },
  { name: 'ELUTRON Warranty', file: 'Elutron_Warranty001.pdf' },
  { name: 'Plasteel Composite Warranty', file: 'Warranty_PS.pdf' },
  { name: 'ELUTRON Flyer', file: 'file5.pdf' },
  { name: 'Plasteel Composite Flyer', file: 'PS_DW_FLYER_022824.pdf' },
  {
    name: 'Florida EQ# 333',
    file: 'https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list',
  },
];

const PDFs: React.FC = () => {
  return (
    <div className="bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-16">
      <div className="max-w-7xl mx-auto text-center text-gray-800">
        <h2 className="text-3xl font-bold text-red-600 mb-8">Downloadable Resources</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pdfFiles.map((pdf, index) => {
            const isExternal = pdf.file.startsWith('http');
            const href = isExternal
              ? pdf.file
              : `/pdfs/underground_tanks/${pdf.file}`;

            return (
              <a
                key={index}
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
  );
};

export default PDFs;
