"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function HomeSchema() {
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
        "url": "https://www.metalproductsusa.com",
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com",
        "description":
          "Metal Products Company provides USA-made aboveground, underground, oil-water separator, oilfield, and specialty tank manufacturing services trusted since 1941.",
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
          "@id": "https://www.metalproductsusa.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.metalproductsusa.com#tankManufacturingService",
        "serviceType":
          "Aboveground, Underground, Oil-Water Separator, Oilfield and Specialty Tank Manufacturing",
        "provider": {
          "@id": "https://www.metalproductsusa.com#localbusiness"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description":
          "High-quality, USA-made tanks built for durability, corrosion resistance, and compliance—crafted by Metal Products Company since 1941.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.metalproductsusa.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of tanks do you produce?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We offer aboveground, underground, oilfield, oil-water separators, and specialty systems like Fireguard® and Flameshield®."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get help selecting the right tank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely—we provide custom proposals and engineering support to match your operational needs."
            }
          },
          {
            "@type": "Question",
            "name": "Do you ship nationwide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes—our tanks are manufactured in Georgia and shipped across the United States."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a custom tank take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Typical lead time is 6–12 weeks depending on specifications and compliance requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer warranties or support post-sale?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes—our products come with trusted performance assurances and customer support."
            }
          }
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.metalproductsusa.com"
        }
      }
    ]
  };

  return <SchemaMarkup id="home-schema" data={schema} />;
}
