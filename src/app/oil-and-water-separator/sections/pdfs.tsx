import React from 'react';
import BorderButton from '@/components/borderButton';

const pdfFiles = [
  { name: 'OWS Installation', file: 'AquaClean_O&M_Generic.pdf' },
  { name: 'OWS Checklist', file: 'AquaClean_Checklist.pdf' },
  { name: 'Design Info', file: 'SEPARATORS_THAT_WORK-web.pdf' },
  { name: 'Low Flow (15PPM) units', file: 'LF_15.pdf' },
  { name: 'Low Flow (10PPM) units', file: 'lf_10.pdf' },
  { name: 'High Flow (15PPM) units', file: 'Hf_15.pdf' },
  { name: 'High Flow (10PPM) units', file: 'Hf_10.pdf' },
  { name: 'AquaClean Brochure', file: 'AquaClean_Brochure_web.pdf' },
  { name: 'Accessories', file: '64358249435378456110422c_900126_rev2002.pdf' },
];

const PDFs: React.FC = () => {
  return (
    <div className="bg-[#efefef] py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden justify-center items-center space-y-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-8">Downloadable Resources</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pdfFiles.map((pdf, index) => {
            const isExternal = pdf.file.startsWith('http');
            const href = isExternal
              ? pdf.file
              : `/pdfs/oil_and_water_separator/${pdf.file}`;
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
