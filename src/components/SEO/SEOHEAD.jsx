import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ activeSection = 'home' }) => {
  const baseUrl = 'https://docscan.online';
  
  const seoConfig = {
    home: {
      title: 'DocScan - Free Image to Text Converter | Extract Text from Photos Online',
      description: 'Extract text from images instantly with DocScan. Convert photos, documents, screenshots to editable text with 99% accuracy. No registration required.',
      keywords: 'image to text, OCR online, text extractor, document scanner, photo to text, free OCR',
      canonical: `${baseUrl}/`,
      ogTitle: 'DocScan - Free Online Image to Text Converter'
    },
    about: {
      title: 'About DocScan - Free Online OCR Tool | Image Text Extraction',
      description: 'Learn about DocScan - the free online OCR tool that extracts text from images with high accuracy. Our mission to make text extraction accessible to everyone.',
      canonical: `${baseUrl}/#about`,
      ogTitle: 'About DocScan - Free OCR Technology'
    },
    'how-it-works': {
      title: 'How to Use DocScan - Step by Step Guide | Image to Text Tutorial',
      description: 'Learn how to extract text from images in 3 easy steps. Upload, extract, and copy text. No software installation required.',
      canonical: `${baseUrl}/#how-it-works`,
      ogTitle: 'How to Use DocScan - Easy Guide'
    },
    scanner: {
      title: 'DocScan Scanner - Extract Text from Images Online | Free OCR Tool',
      description: 'Use our online scanner to extract text from images. Support for JPG, PNG, PDF formats. 99% accuracy, completely free.',
      canonical: `${baseUrl}/#scanner`,
      ogTitle: 'DocScan Scanner - Free Text Extraction Tool'
    },
    othertools: {
      title: 'AI Tools by DocScan - Advanced Text Extraction Features',
      description: 'Explore our AI-powered tools: handwriting recognition, receipt scanning, business card scanning, and multilingual text extraction.',
      canonical: `${baseUrl}/#othertools`,
      ogTitle: 'AI Tools - Advanced Text Extraction'
    }
  };

  const config = seoConfig[activeSection] || seoConfig.home;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta name="keywords" content={config.keywords || seoConfig.home.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical */}
      <link rel="canonical" href={config.canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={config.ogTitle || config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.canonical} />
      <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DocScan" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={`${baseUrl}/twitter-card.jpg`} />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-title" content="DocScan" />
      <meta name="application-name" content="DocScan" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preload" as="image" href={`${baseUrl}/hero-bg.jpg`} />
    </Helmet>
  );
};

export default SEOHead;