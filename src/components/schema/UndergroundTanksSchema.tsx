"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function UndergroundTankSchema() {
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
        "url": "https://www.metalproductsusa.com/underground-tanks",
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com",
        "description":
          "Metal Products Company manufactures durable, EPA-compliant underground storage tanks designed for long-term performance, corrosion resistance, and regulatory compliance across the U.S.",
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
          "@id": "https://www.metalproductsusa.com/underground-tanks"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.metalproductsusa.com#undergroundTankService",
        "name": "Underground Storage Tank Manufacturing",
        "serviceType": "Underground Storage Tank Manufacturing",
        "provider": {
          "@id": "https://www.metalproductsusa.com#localbusiness"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description":
          "Custom-engineered underground storage tanks built with corrosion-resistant coatings and reinforced steel for reliable, long-term performance underground.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/underground-tanks"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.metalproductsusa.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What makes underground storage tanks different from aboveground ones?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Underground storage tanks are built to withstand soil pressure, moisture, and shifting conditions, with reinforced walls and protective coatings."
            }
          },
          {
            "@type": "Question",
            "name": "Are your tanks EPA-compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, our underground storage tanks are manufactured to meet EPA requirements and local underground storage regulations."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a custom-sized underground tank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we engineer custom tanks to align with specific capacity, layout, and regulatory requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What materials are used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Construction uses high-strength steel with corrosion-resistant coatings to ensure longevity underground."
            }
          },
          {
            "@type": "Question",
            "name": "How do I inspect or monitor the tank after installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our tanks include inspection ports for easy, efficient monitoring without intrusive excavation."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship nationwide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we ship our underground storage tanks nationwide, all manufactured in Georgia."
            }
          }
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/underground-tanks"
        }
      }
    ]
  };

  return <SchemaMarkup id="underground-tank-schema" data={schema} />;
}
