import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SPASEO = () => {
  const location = useLocation()
  
  // Define SEO data for each section
  const seoData = {
    '/': {
      title: 'DocScan - Free Image to Text Converter | Extract Text from Photos Online',
      description: 'Extract text from images instantly with DocScan. Convert photos, documents, screenshots to editable text with 99% accuracy. No registration required.',
      keywords: 'image to text, OCR online, text extractor, document scanner, photo to text',
      canonical: 'https://docscan.online/'
    },
    '/#about': {
      title: 'About DocScan - Free Online OCR Tool | Image Text Extraction',
      description: 'Learn about DocScan - the free online OCR tool that extracts text from images with high accuracy. Our mission to make text extraction accessible to everyone.',
      canonical: 'https://docscan.online/#about'
    },
    '/#how-to-use': {
      title: 'How to Use DocScan - Step by Step Guide | Image to Text Tutorial',
      description: 'Learn how to extract text from images in 3 easy steps. Upload, extract, and copy text. No software installation required.',
      canonical: 'https://docscan.online/#how-it-works'
    },
    '/#scanner': {
      title: 'DocScan Scanner - Extract Text from Images Online | Free OCR Tool',
      description: 'Use our online scanner to extract text from images. Support for JPG, PNG, PDF formats. 99% accuracy, completely free.',
      canonical: 'https://docscan.online/#scanner'
    },
    '/#ai-tools': {
      title: 'AI Tools by DocScan - Advanced Text Extraction Features',
      description: 'Explore our AI-powered tools: handwriting recognition, receipt scanning, business card scanning, and multilingual text extraction.',
      canonical: 'https://docscan.online/#othertools'
    }
  }

  const currentPath = location.pathname + location.hash
  const data = seoData[currentPath] || seoData['/']

  // Update history for better SEO (Google can index # sections)
  useEffect(() => {
    if (location.hash) {
      // Update canonical URL with hash
      const link = document.querySelector("link[rel='canonical']")
      if (link) {
        link.setAttribute('href', `https://docscan.online${currentPath}`)
      }
    }
  }, [location.hash, currentPath])

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "DocScan - Image to Text Converter",
    "url": "https://docscan.online",
    "description": "Free online OCR tool to extract text from images",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "mainEntity": [
      {
        "@type": "WebPageElement",
        "name": "Image Scanner",
        "description": "Upload and extract text from images"
      },
      {
        "@type": "WebPageElement", 
        "name": "How to Use Guide",
        "description": "Step-by-step instructions"
      },
      {
        "@type": "WebPageElement",
        "name": "AI Tools",
        "description": "Advanced text extraction features"
      }
    ]
  }

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      {data.keywords && <meta name="keywords" content={data.keywords} />}
      
      <link rel="canonical" href={data.canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={data.canonical} />
      <meta property="og:image" content="https://docscan.online/og-image.jpg" />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SPASEO