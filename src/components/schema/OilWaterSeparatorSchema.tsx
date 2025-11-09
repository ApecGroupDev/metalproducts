"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function OilWaterSeparatorSchema() {
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
        "url": "https://www.metalproductsusa.com/oil-and-water-separator",
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com",
        "description":
          "Metal Products Company designs and manufactures durable, EPA-compliant oil-water separators that efficiently remove oils, fuels, and hydrocarbons from wastewater and stormwater.",
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
          "@id": "https://www.metalproductsusa.com/oil-and-water-separator"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.metalproductsusa.com#oilWaterSeparatorService",
        "name": "Oil-Water Separator Manufacturing",
        "serviceType": "Oil-Water Separator Manufacturing",
        "provider": {
          "@id": "https://www.metalproductsusa.com#localbusiness"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description":
          "Custom-engineered oil-water separators built to meet EPA SPCC and stormwater compliance standards, designed for durability and environmental protection.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/oil-and-water-separator"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.metalproductsusa.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What does an oil-water separator do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "An oil-water separator removes oil, fuels, and hydrocarbons from wastewater or stormwater before discharge, ensuring compliance and environmental protection."
            }
          },
          {
            "@type": "Question",
            "name": "Are your separators EPA-compliant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, our separators are engineered to meet EPA SPCC and local stormwater compliance standards."
            }
          },
          {
            "@type": "Question",
            "name": "Can you build a custom separator?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we manufacture custom separators tailored to specific flow and site requirements."
            }
          },
          {
            "@type": "Question",
            "name": "What materials are used?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The separators are constructed from high-quality steel with corrosion-resistant coatings for durability."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship nationwide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. We manufacture in Georgia and ship oil-water separators to facilities across the U.S."
            }
          }
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com/oil-and-water-separator"
        }
      }
    ]
  };

  return <SchemaMarkup id="oil-water-separator-schema" data={schema} />;
}
