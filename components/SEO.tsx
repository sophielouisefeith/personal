import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'profile';
  structuredData?: object;
}

export default function SEO({
  title = "Sophie Louise Feith - Conscious Technology & AI Integration Consultant",
  description = "Technology consultant specializing in conscious design, AI integration, privacy architecture, and cycle-centered technology. Building tools that support (non)human life and honor natural rhythms.",
  keywords = "conscious technology, AI integration consultant, privacy architecture, cycle-centered design, women's health technology, decentralized systems, sustainable technology, natural rhythms, ethical AI, Amsterdam consultant, software engineering, Rust developer, C++ developer, data sovereignty, blockchain privacy",
  url = "https://sophielouisefeith.com",
  image = "https://sophielouisefeith.com/og-image.png",
  type = "website",
  structuredData
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo]');
    existingMetas.forEach(meta => meta.remove());

    // Create and append new meta tags
    const metaTags = [
      // Basic SEO
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Sophie Louise Feith' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { httpEquiv: 'Content-Language', content: 'en' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:site_name', content: 'Sophie Louise Feith' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Cards
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: '@sophielouisefeith' },
      
      // Additional SEO
      { name: 'theme-color', content: '#6B8F7E' },
      { name: 'msapplication-TileColor', content: '#6B8F7E' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'Sophie Louise Feith' },
      
      // Professional/Business
      { name: 'geo.region', content: 'NL-NH' },
      { name: 'geo.placename', content: 'Amsterdam' },
      { name: 'geo.position', content: '52.3676;4.9041' },
      { name: 'ICBM', content: '52.3676, 4.9041' },
    ];

    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      meta.setAttribute('data-seo', 'true');
      
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      if (tag.httpEquiv) meta.setAttribute('http-equiv', tag.httpEquiv);
      if (tag.content) meta.setAttribute('content', tag.content);
      
      document.head.appendChild(meta);
    });

    // Add structured data
    const defaultStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sophie Louise Feith",
      "jobTitle": "Technology Consultant & AI Integration Specialist",
      "description": "Conscious technology consultant specializing in AI integration, privacy architecture, and cycle-centered design",
      "url": url,
      "image": image,
      "sameAs": [
        "https://www.linkedin.com/in/sophie-louise-feith/",
        "https://github.com/sophielouisefeith"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Hanah",
        "description": "Private decentralized ecosystem for women's health data"
      },
      "knowsAbout": [
        "AI Integration",
        "Privacy Architecture", 
        "Cycle-Centered Design",
        "Decentralized Systems",
        "Women's Health Technology",
        "Sustainable Technology",
        "Software Engineering",
        "Rust Programming",
        "C++ Programming",
        "Data Sovereignty"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Codam",
          "description": "Software Engineering"
        },
        {
          "@type": "EducationalOrganization", 
          "name": "AMFI",
          "description": "Bachelor of Branding"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amsterdam",
        "addressCountry": "Netherlands"
      },
      "email": "Sophylouise@pm.me",
      "seeks": "Consulting opportunities in conscious technology, AI integration, and privacy-preserving systems"
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-seo]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-seo', 'true');
    script.textContent = JSON.stringify(structuredData || defaultStructuredData);
    document.head.appendChild(script);

    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, url, image, type, structuredData]);

  return null;
}