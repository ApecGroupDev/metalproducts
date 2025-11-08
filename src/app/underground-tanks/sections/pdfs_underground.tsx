'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const pdfIndex = [
  {
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

const PDFs_Underground: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fafafa] to-[#f3f3f3] text-gray-900 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 scrn-750:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl scrn-750:text-4xl font-extrabold text-[#c62931] mb-3">
            Downloadable Resources
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access our latest installation guides, warranties, and product literature for underground and composite tank systems.
          </p>
        </motion.div>

        {/* Resource Grid */}
        {pdfIndex.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-1 scrn-750:grid-cols-2 scrn-1000:grid-cols-3 gap-6 scrn-1000:gap-8">
              {item.pdfs.map((pdf, i) => {
                const isExternal = pdf.file.startsWith('http');
                const href = isExternal ? pdf.file : `/pdfs/${pdf.file}`;

                return (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-6 flex flex-col gap-3 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-[#c62931] group-hover:scale-110 transition-transform duration-200" />
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#c62931] transition-colors duration-200">
                        {pdf.name}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pdf.description}
                    </p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PDFs_Underground;
