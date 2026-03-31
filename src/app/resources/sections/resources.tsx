"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, FileText, ExternalLink } from "lucide-react";

const ResourcesMain: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<string>("underground");
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  const resources = [
    {
      id: "underground",
      title: "UNDERGROUND TANKS",
      image: "/images/backgrounds/resources/Resources-UndergroundTank.webp",
      description:
        "Comprehensive technical resources and documentation for ELUTRON and Plasteel underground storage systems.",
      pdfs: [
        {
          name: "ELUTRON Installation",
          file: "Elutron_Install_Instructions.pdf",
          description:
            "Detailed instructions for installing ELUTRON underground tanks.",
        },
        {
          name: "Plasteel Composite Installation",
          file: "Plasteel_Installation_Instrs.pdf",
          description:
            "Guide for installing Plasteel composite underground tanks.",
        },
        {
          name: "ELUTRON Warranty",
          file: "Elutron_Warranty001.pdf",
          description:
            "Warranty terms and coverage details for ELUTRON underground tanks.",
        },
        {
          name: "Plasteel Composite Warranty",
          file: "Warranty_PS.pdf",
          description:
            "Official warranty document for Plasteel composite tanks.",
        },
        {
          name: "ELUTRON Flyer",
          file: "PlasteelBrochure04_07_2017.pdf",
          description:
            "Product brochure highlighting the features of ELUTRON tanks.",
        },
        {
          name: "Plasteel Composite Flyer",
          file: "PS_DW_FLYER_022824.pdf",
          description:
            "Marketing flyer showcasing the benefits of Plasteel composite tanks.",
        },
        {
          name: "Florida EQ# 333",
          file: "https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list",
          description:
            "Link to the Florida Department of Environmental Protection storage tank equipment registration list, including EQ# 333.",
        },
      ],
    },
    {
      id: "aboveground",
      title: "ABOVE GROUND TANKS",
      image: "/images/backgrounds/resources/Resources-AboveGroundTank.webp",
      description:
        "Technical documentation and warranty information for UL 142, Flameshield, and Fireguard tanks.",
      pdfs: [
        {
          name: "UL 142 Installation",
          file: "Installation_Instructions-R912.pdf",
          description:
            "Step-by-step installation guide for UL 142 aboveground storage tanks.",
        },
        {
          name: "Flameshield Installation",
          file: "Installation_Instructions.pdf",
          description:
            "Installation instructions for Flameshield protected aboveground storage tanks.",
        },
        {
          name: "Fireguard Installation",
          file: "Installation_Instructions.pdf",
          description:
            "Detailed guide for installing Fireguard insulated aboveground storage tanks.",
        },
        {
          name: "UL 142 Warranty",
          file: "AST_STD_LIMITED_WARRANTY.pdf",
          description:
            "Warranty terms and coverage details for UL 142 storage tanks.",
        },
        {
          name: "Flameshield Warranty",
          file: "Flameshield_Warranty_Dec_10.pdf",
          description:
            "Limited warranty document for Flameshield aboveground storage tanks.",
        },
        {
          name: "Fireguard Warranty",
          file: "FG_warranty.pdf",
          description:
            "Official warranty details for Fireguard insulated aboveground tanks.",
        },
        {
          name: "UL 142 Double Wall Flyer",
          file: "AST-UL142-101424.pdf",
          description:
            "Marketing flyer highlighting features of UL 142 double-wall tanks.",
        },
        {
          name: "Flameshield Flyer",
          file: "Flameshield_Product_Sheet.pdf",
          description:
            "Product sheet showcasing Flameshield tank features and benefits.",
        },
        {
          name: "Fireguard Flyer",
          file: "Fireguard_09_09.pdf",
          description:
            "Flyer presenting Fireguard tank specifications and fire protection details.",
        },
        {
          name: "Florida EQ# 342",
          file: "https://floridadep.gov/waste/permitting-compliance-assistance/documents/storage-tank-equipment-registration-list",
          description:
            "Link to the Florida DEP storage tank equipment registration list, including EQ# 342.",
        },
      ],
    },
    {
      id: "separator",
      title: "OIL / WATER SEPARATOR",
      image:
        "/images/backgrounds/resources/Resources-OilAndWaterSeparator.webp",
      description:
        "Operation manuals and technical references for AquaClean Oil/Water Separator systems.",
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
      },
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
      const top =
        section.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#f7f4f0] py-28 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        .resm-display { font-family: 'Oswald', sans-serif; }
        .resm-mono    { font-family: 'Space Mono', monospace; }

        .resm-paper-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
      `}</style>

      <div className="absolute inset-0 resm-paper-grid pointer-events-none" />
      <div className="absolute top-0 left-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-16 bottom-0 w-px bg-gradient-to-b from-transparent via-black/[0.05] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row md:gap-16 px-6 md:px-16">
        {/* --- Sidebar --- */}
        <aside className="md:sticky flex flex-col z-50 md:w-[280px] bg-white border border-black/10 p-6 h-fit top-32 transition-all">
          <h2
            id="resources-title"
            className="resm-display text-xl font-semibold mb-5 text-[#c62931] uppercase tracking-wide"
          >
            Resources
          </h2>
          <ul className="space-y-2" aria-labelledby="resources-title">
            {resources.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "true" : "false"}
                  className={`resm-mono w-full text-left px-4 py-3 text-sm transition-colors duration-300 border-l-2 ${
                    activeSection === item.id
                      ? "border-[#c62931] text-[#c62931] bg-[#c62931]/5"
                      : "border-transparent hover:border-[#c62931]/30 text-[#555] hover:text-[#1a1a1a]"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* --- Main Content --- */}
        <div className="md:w-3/4 space-y-20">
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
              transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white border border-black/10 overflow-hidden relative group"
            >
              {/* Banner */}
              <div className="relative w-full h-64 overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="resm-mono text-[#c62931] text-xs tracking-widest uppercase">
                    Resources
                  </span>
                  <h3 className="resm-display text-white text-2xl lg:text-3xl font-bold uppercase mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="resm-mono text-[#555] text-sm leading-7 mb-6 max-w-[900px]">
                  {item.description}
                </p>

                <button
                  onClick={() => toggleSection(index)}
                  className="resm-mono flex items-center gap-2 text-[#c62931] text-sm tracking-wide hover:text-[#1a1a1a] transition-colors mb-4"
                >
                  {openIndex === index ? (
                    <>
                      <ChevronUp className="w-4 h-4" /> HIDE DOCUMENTS
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" /> VIEW DOCUMENTS
                    </>
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3 mt-4"
                    >
                      {item.pdfs.map((pdf, pdfIndex) => {
                        const isExternal = pdf.file.startsWith("http");
                        const href = isExternal
                          ? pdf.file
                          : `/pdfs/${pdf.file}`;

                        return (
                          <a
                            key={pdfIndex}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border-t-2 border-[#c62931]/20 pt-4 pb-2 hover:border-[#c62931] transition-all group/link"
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-[#c62931] mt-0.5" />
                                <div>
                                  <p className="resm-display font-semibold text-[#1a1a1a] uppercase text-sm group-hover/link:text-[#c62931] transition-colors">
                                    {pdf.name}
                                  </p>
                                  <p className="resm-mono text-[#555] text-xs mt-1">
                                    {pdf.description}
                                  </p>
                                </div>
                              </div>
                              <ExternalLink className="w-4 h-4 text-[#999] group-hover/link:text-[#c62931] transition-colors" />
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
