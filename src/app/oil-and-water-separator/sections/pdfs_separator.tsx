"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

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

const PDFs_Separator: React.FC = () => {
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

export default PDFs_Separator;
