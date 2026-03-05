import { useEffect } from 'react';

type SeoInput = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
};

function upsertMeta(name: string, content: string, isProperty = false): void {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement('meta');
    if (isProperty) {
      tag.setAttribute('property', name);
    } else {
      tag.setAttribute('name', name);
    }
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function upsertCanonical(url: string): void {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

export default function useSeo({ title, description, canonical, keywords, ogImage }: SeoInput): void {
  useEffect(() => {
    document.title = title;

    upsertMeta('description', description);
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:url', canonical, true);
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);

    if (keywords) upsertMeta('keywords', keywords);
    if (ogImage) upsertMeta('og:image', ogImage, true);

    upsertCanonical(canonical);
  }, [title, description, canonical, keywords, ogImage]);
}
