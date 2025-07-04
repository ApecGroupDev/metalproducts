import React from 'react';
import BorderButton from '@/components/borderButton';

const pdfFiles = [
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
              : `/pdfs/above_ground_tanks/${pdf.file}`;

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
