"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const pdfIndex = [
  {
    pdfs: [
      {
        name: "OWS Installation",
        file: "AquaClean_O&M_Generic.pdf",
        description:
          "Operation and maintenance manual for AquaClean Oil Water Separators.",
      },
      {
        name: "OWS Checklist",
        file: "AquaClean_Checklist.pdf",
        description:
          "Inspection and maintenance checklist for AquaClean Oil Water Separator systems.",
      },
      {
        name: "Design Info",
        file: "SEPARATORS_THAT_WORK-web.pdf",
        description:
          "Detailed design information and technical guide for oil-water separators.",
      },
      {
        name: "Low Flow (15PPM) Units",
        file: "LF_15.pdf",
        description:
          "Specifications and data sheet for low flow AquaClean units rated at 15 PPM.",
      },
      {
        name: "Low Flow (10PPM) Units",
        file: "lf_10.pdf",
        description:
          "Specifications and technical details for low flow AquaClean units rated at 10 PPM.",
      },
      {
        name: "High Flow (15PPM) Units",
        file: "Hf_15.pdf",
        description:
          "Product information for high flow AquaClean units with a 15 PPM discharge rating.",
      },
      {
        name: "High Flow (10PPM) Units",
        file: "Hf_10.pdf",
        description:
          "Specifications for high flow AquaClean units rated at 10 PPM discharge.",
      },
      {
        name: "AquaClean Brochure",
        file: "AquaClean_Brochure_web.pdf",
        description:
          "Marketing brochure highlighting AquaClean Oil Water Separator features and benefits.",
      },
      {
        name: "Accessories",
        file: "64358249435378456110422c_900126_rev2002.pdf",
        description:
          "Accessories guide and optional equipment list for AquaClean systems.",
      },
    ],
  },
];

const PDFs_Separator: React.FC = () => {
  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .seppdf-display { font-family: 'Oswald', sans-serif; }
        .seppdf-mono    { font-family: 'Space Mono', monospace; }

        .seppdf-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        .seppdf-card {
          border-top: 2px solid rgba(198,41,49,0.2);
          transition: border-color 0.3s, transform 0.3s;
        }
        .seppdf-card:hover {
          border-color: #c62931;
          transform: translateY(-4px);
        }
      `}</style>

      <div className="absolute inset-0 seppdf-paper-grid pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#c62931] opacity-[0.05] blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#c62931]" />
            <span className="seppdf-mono text-[#c62931] text-xs tracking-[0.45em] uppercase">
              Downloads
            </span>
          </div>
          <h2 className="seppdf-display font-bold text-[#1a1a1a] uppercase leading-[0.9] text-[clamp(2.4rem,4vw,3.6rem)]">
            Downloadable
            <br />
            <span className="text-[#c62931]">Resources</span>
          </h2>
          <p className="seppdf-mono text-[#555] text-sm leading-7 mt-6 max-w-lg">
            Access our latest installation guides, warranties, and product
            literature for oil-water separator systems.
          </p>
        </motion.div>

        {pdfIndex.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {item.pdfs.map((pdf, i) => {
              const isExternal = pdf.file.startsWith("http");
              const href = isExternal ? pdf.file : `/pdfs/${pdf.file}`;

              return (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="seppdf-card pt-5 pb-4 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-[#c62931] group-hover:scale-110 transition-transform" />
                    <h4 className="seppdf-display font-semibold text-[#1a1a1a] uppercase text-base group-hover:text-[#c62931] transition-colors">
                      {pdf.name}
                    </h4>
                  </div>
                  <p className="seppdf-mono text-[#555] text-xs leading-6">
                    {pdf.description}
                  </p>
                </motion.a>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PDFs_Separator;
