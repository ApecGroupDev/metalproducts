"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ContactPageSchema() {
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
        "description":
          "Metal Products Company — trusted U.S. manufacturer of aboveground, underground, and specialty tanks since 1941.",
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
        "@type": "ContactPage",
        "@id": "https://www.metalproductsusa.com/contact#contactpage",
        "url": "https://www.metalproductsusa.com/contact",
        "name": "Contact Metal Products Company",
        "description":
          "Contact Metal Products USA for custom tank manufacturing quotes, support, and expert guidance — Building Trust Since 1941.",
        "mainEntity": { "@id": "https://www.metalproductsusa.com#organization" },
        "inLanguage": "en-US"
      },
      {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "telephone": "+1-770-945-8383",
        "email": "sales@metalproductsusa.com",
        "areaServed": { "@type": "Country", "name": "United States" },
        "availableLanguage": ["English"]
      }
    ]
  };

  return <SchemaMarkup id="contact-page-schema" data={schema} />;
}
