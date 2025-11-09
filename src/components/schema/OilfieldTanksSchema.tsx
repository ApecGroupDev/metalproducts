"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function OilfieldTankSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.metalproductsusa.com#website",
        "url": "https://www.metalproductsusa.com",
        "name": "Metal Products Company",
        "publisher": {
          "@id": "https://www.metalproductsusa.com#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://www.metalproductsusa.com#organization",
        "name": "Metal Products Company",
        "url": "https://www.metalproductsusa.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.metalproductsusa.com/logo.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/metalproductscompany",
          "https://www.facebook.com/metalproductsusa"
        ],
        "foundingDate": "1941",
        "slogan": "Let's Talk — We've Been Building Trust Since 1941"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.metalproductsusa.com#localbusiness",
        "name": "Metal Products Company",
        "url": "https://www.metalproductsusa.com/oilfield-tanks-resources",
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com",
        "description": "Metal Products Company designs and manufactures rugged, pressure-safe oilfield tanks built to handle extreme conditions, transport, and regulatory compliance across the United States.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.metalproductsusa.com/logo.png"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "725 Main Street",
          "addressLocality": "Suwanee",
          "addressRegion": "GA",
          "postalCode": "30024",
          "addressCountry": "US"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "foundingDate": "1941",
        "slogan": "Let's Talk — We've Been Building Trust Since 1941",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/oilfield-tanks-resources"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.metalproductsusa.com#oilfieldTankService",
        "name": "Oilfield Tank Manufacturing",
        "serviceType": "Oilfield Tank Manufacturing",
        "provider": {
          "@id": "https://www.metalproductsusa.com#localbusiness"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description": "High-performance oilfield tanks built in the U.S. for durability, safety, and compliance — engineered to withstand pressure, rough handling, and harsh environments.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/oilfield-tanks-resources"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.metalproductsusa.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are your oilfield tanks safe for pressure use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — pressure-safe features like sealed vents and reinforced construction are built into the design for harsh environments."
            }
          },
          {
            "@type": "Question",
            "name": "Can these tanks withstand rough handling and transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. They’re engineered with reinforced hulls and impact-resistant coatings for on-site mobility."
            }
          },
          {
            "@type": "Question",
            "name": "Are they compliant with environmental safety standards?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — designed for spill containment and built to meet environmental protection standards in oilfield settings."
            }
          },
          {
            "@type": "Question",
            "name": "Can the tanks be customized for specific fluids or sizes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We manufacture custom configurations that fit capacity, chemical compatibility, and operational requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What materials are used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Heavy-duty steel with corrosion-resistant finishes, along with optional coatings or insulation for extreme conditions."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a nationwide delivery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — all tanks are built in Georgia and distributed across the U.S."
            }
          }
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/oilfield-tanks-resources"
        }
      }
    ]
  };

  return <SchemaMarkup id="oilfield-tank-schema" data={schema
  } />;
}