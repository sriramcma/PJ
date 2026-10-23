import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description?: string;
  pathname?: string;
  noindex?: boolean;
}

export function SEO({ title, description, pathname = '', noindex = false }: SEOProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const cleanPath = pathname
    ? pathname.startsWith('/')
      ? pathname
      : `/${pathname}`
    : '/';
  const canonicalUrl = `https://padminijanaki.com${cleanPath === '/' ? '/' : cleanPath}`;

  // Truncate description if longer than 155 characters as per guidelines
  const formattedDescription = description
    ? description.length > 155
      ? description.slice(0, 152).trim() + '…'
      : description
    : undefined;

  return (
    <>
      <title>{title}</title>
      {formattedDescription && <meta name="description" content={formattedDescription} />}
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={title} />
      {formattedDescription && <meta property="og:description" content={formattedDescription} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      {formattedDescription && <meta name="twitter:description" content={formattedDescription} />}
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}

export default SEO;
