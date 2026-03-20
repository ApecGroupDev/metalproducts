"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function PrivacyPolicySchema() {
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
        "@type": "WebPage",
        "@id": "https://www.metalproductsusa.com/privacy-policy#webpage",
        "url": "https://www.metalproductsusa.com/privacy-policy",
        "name": "Privacy Policy",
        "description": "Privacy Policy for Metal Products USA covering how website visitor information is collected, used, and protected.",
        "isPartOf": { "@id": "https://www.metalproductsusa.com#website" },
        "about": {
          "@type": "Thing",
          "name": "Privacy Policy"
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return <SchemaMarkup id="privacy-policy-schema" data={schema} />;
}