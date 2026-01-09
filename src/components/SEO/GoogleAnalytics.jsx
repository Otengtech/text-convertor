import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    
    // Only initialize if not already done
    if (!window.GA_INITIALIZED) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Replace with your ID
      document.head.appendChild(script);
      
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX'); // Replace with your ID
      window.GA_INITIALIZED = true;
    }

    // Track page view for SPA
    if (window.gtag) {
      const pagePath = location.hash ? location.hash.substring(1) : 'home';
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: `/${pagePath}`
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;