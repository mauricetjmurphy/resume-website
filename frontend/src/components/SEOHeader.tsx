import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeaderProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

const SEOHeader: React.FC<SEOHeaderProps> = ({ 
  title, 
  description = "Your website's default description.", 
  lang = 'en', 
  meta = [] 
}) => {
  const defaultTitle = "Your Website's Default Title";
  
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": title,
    "description": description,
    "url": "http://www.yourwebsite.com"
  };

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${defaultTitle}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        ...meta,
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHeader;
