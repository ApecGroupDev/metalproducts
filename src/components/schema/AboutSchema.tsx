"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function AboutPageSchema() {
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
        "founders": [
          { "@type": "Person", "name": "C.E. Gammage" },
          { "@type": "Person", "name": "Robert Harris" }
        ],
        "slogan": "Let's Talk — We've Been Building Trust Since 1941",
        "description":
          "Metal Products Company, founded in 1941, is a trusted U.S. tank manufacturer with over 80 years of experience in underground, aboveground, and specialty tank manufacturing.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "725 Main Street",
          "addressLocality": "Suwanee",
          "addressRegion": "GA",
          "postalCode": "30024",
          "addressCountry": "US"
        },
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com"
      },
      {
        "@type": "AboutPage",
        "@id": "https://www.metalproductsusa.com/about#aboutpage",
        "url": "https://www.metalproductsusa.com/about",
        "name": "About Metal Products Company",
        "description":
          "Learn more about Metal Products Company — a U.S. tank manufacturer founded in 1941, trusted for over eight decades of precision-engineered storage solutions.",
        "mainEntity": { "@id": "https://www.metalproductsusa.com#organization" },
        "inLanguage": "en-US"
      }
    ]
  };

  return <SchemaMarkup id="about-page-schema" data={schema} />;
}
