"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function AboveGroundTankSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.metalproductsusa.com#website",
        "url": "https://www.metalproductsusa.com",
        "name": "Metal Products Company",
        "publisher": { "@id": "https://www.metalproductsusa.com#organization" },
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
        "url": "https://www.metalproductsusa.com/above-ground-tank",
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com",
        "description":
          "Metal Products Company manufactures heavy-duty, corrosion-resistant above ground gas tanks designed for durability, safety, and long-term performance across the U.S.",
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
          { "@type": "Country", "name": "United States" }
        ],
        "foundingDate": "1941",
        "slogan": "Let's Talk — We've Been Building Trust Since 1941",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/above-ground-tank"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.metalproductsusa.com#aboveGroundTankService",
        "name": "Above Ground Gas Tank Manufacturing",
        "serviceType": "Above Ground Gas Tank Manufacturing",
        "provider": {
          "@id": "https://www.metalproductsusa.com#localbusiness"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description":
          "High-quality above ground gas tanks built in the U.S. with corrosion-resistant coatings, customizable designs, and secure access features for safe fuel storage.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/above-ground-tank"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.metalproductsusa.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes above ground tanks different from underground ones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Above ground tanks are more accessible for inspection and maintenance, and do not require excavation."
            }
          },
          {
            "@type": "Question",
            "name": "Are your tanks corrosion-resistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. They have specialized anti-corrosion coatings to endure harsh environmental conditions."
            }
          },
          {
            "@type": "Question",
            "name": "Can these tanks be customized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we manufacture tanks customized to specific capacity, footprint, and user requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Are they secure and tamper-resistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, our design includes locking fill ports and secure manways to enhance security."
            }
          },
          {
            "@type": "Question",
            "name": "How easy is maintenance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Routine checks are simple thanks to access panels, inspection ports, and sight gauges."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship across the U.S.?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we build in Georgia and ship tanks across the United States."
            }
          }
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/above-ground-tank"
        }
      }
    ]
  };

  return <SchemaMarkup id="above-ground-tank-schema" data={schema} />;
}
