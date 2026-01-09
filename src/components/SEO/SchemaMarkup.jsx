import React from 'react';

const SchemaMarkup = () => {
  const baseUrl = 'https://docscan.online';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DocScan - Image to Text Converter",
    "url": baseUrl,
    "description": "Free online OCR tool to extract text from images, photos, and documents",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Extract text from images",
      "Convert PDF to text",
      "Handwriting recognition",
      "Multiple language support",
      "Batch processing",
      "No registration required"
    ],
    "screenshot": `${baseUrl}/screenshot.jpg`,
    "author": {
      "@type": "Organization",
      "name": "DocScan",
      "url": baseUrl
    },
    "mainEntity": {
      "@type": "WebPage",
      "name": "DocScan Online Tools",
      "description": "Free image to text conversion tools",
      "hasPart": [
        {
          "@type": "WebPageElement",
          "name": "Image Scanner",
          "description": "Upload and extract text from images",
          "url": `${baseUrl}/#scanner`
        },
        {
          "@type": "WebPageElement",
          "name": "How It Works",
          "description": "Step-by-step guide to using DocScan",
          "url": `${baseUrl}/#how-it-works`
        },
        {
          "@type": "WebPageElement",
          "name": "AI Tools",
          "description": "Advanced text extraction features",
          "url": `${baseUrl}/#othertools`
        }
      ]
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SchemaMarkup;