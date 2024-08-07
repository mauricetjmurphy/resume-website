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
  description = "Resume website for Maurice Murphy", 
  lang = 'en', 
  meta = [] 
}) => {
  const defaultTitle = "Maurice Murphy's resume";
  
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": title,
    "description": description,
    "url": "http://www.mauricemurphy.org"
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
      <link rel="icon" href="/favicon.ico" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHeader;
