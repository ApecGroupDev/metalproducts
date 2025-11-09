'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, FileText, ExternalLink } from 'lucide-react';

const ResourcesMain: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<string>('underground');
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const resources = [
    {
      id: 'underground',
      title: 'UNDERGROUND TANKS',
      image: '/images/backgrounds/resources/Resources-UndergroundTank.webp',
      description:
        'Comprehensive technical resources and documentation for ELUTRON and Plasteel underground storage systems.',
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
      id: 'aboveground',
      title: 'ABOVE GROUND TANKS',
      image: '/images/backgrounds/resources/Resources-AboveGroundTank.webp',
      description:
        'Technical documentation and warranty information for UL 142, Flameshield, and Fireguard tanks.',
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
    {
      id: 'separator',
      title: 'OIL / WATER SEPARATOR',
      image: '/images/backgrounds/resources/Resources-OilAndWaterSeparator.webp',
      description:
        'Operation manuals and technical references for AquaClean Oil/Water Separator systems.',
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveSection(id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -65% 0px",
        threshold: 0,
      }
    );

    // ✅ Copy ref values into a stable variable
    const currentSections = [...sectionsRef.current];

    currentSections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      currentSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // --- Smooth scroll
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100; // adjust this until it perfectly stops below your header
      const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-32">
      <div className="max-w-[1440px] mx-auto flex flex-col scrn-800:flex-row scrn-800:gap-16 px-6 scrn-1000:px-8">

        {/* --- Sidebar --- */}
        <aside
          className="scrn-800:sticky flex flex-col z-50 scrn-800:w-[280px] bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg rounded-3xl p-6 h-fit top-32 transition-all"
        >
          <h2 id="resources-title" className="text-xl font-semibold mb-5 text-[#c62931]">
            Resources
          </h2>
          <ul className="space-y-2" aria-labelledby="resources-title">
            {resources.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? 'true' : 'false'}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors duration-300 ${activeSection === item.id
                    ? 'bg-gradient-to-r from-[#c62931]/20 to-[#c62931]/10 text-[#c62931] shadow-sm'
                    : 'hover:bg-[#c62931]/10 text-gray-700 hover:text-[#c62931]'
                    }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* --- Main Content --- */}
        <div className="scrn-800:w-3/4 space-y-32">
          {resources.map((item, index) => (
            <motion.div
              key={index}
              id={item.id}
              ref={(el: HTMLDivElement | null) => {
                sectionsRef.current[index] = el ?? null;
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-md overflow-hidden relative group"
            >
              {/* Banner */}
              <div className="relative w-full h-64 scrn-900:h-120 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent transition-all duration-500" />
                <div className="absolute bottom-8 left-8 bg-black/40 p-3 rounded-md">
                  <h3 className="text-white text-2xl scrn-1000:text-3xl font-semibold mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="italic text-red-400 text-sm font-bold uppercase tracking-wider">
                    RESOURCES
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 scrn-900:p-12">
                <p className="text-gray-600 leading-relaxed text-base scrn-900:text-lg mb-6 max-w-[900px]">
                  {item.description}
                </p>

                <button
                  onClick={() => toggleSection(index)}
                  className="flex items-center gap-2 text-[#c62931] font-semibold hover:underline mb-4"
                >
                  {openIndex === index ? (
                    <>
                      <ChevronUp className="w-5 h-5" /> Hide Documents
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" /> View Documents
                    </>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3 mt-2"
                    >
                      {item.pdfs.map((pdf, pdfIndex) => {
                        const isExternal = pdf.file.startsWith('http');
                        const href = isExternal ? pdf.file : `/pdfs/${pdf.file}`;

                        return (
                          <a
                            key={pdfIndex}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border border-gray-200 hover:border-[#c62931] rounded-xl p-5 bg-gray-50 hover:bg-red-50 transition-all"
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-[#c62931] mt-1" />
                                <div>
                                  <p className="font-semibold text-gray-800">{pdf.name}</p>
                                  <p className="text-gray-500 text-sm mt-1">{pdf.description}</p>
                                </div>
                              </div>
                              <ExternalLink className="w-4 h-4 text-gray-400 mt-1" />
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesMain;
