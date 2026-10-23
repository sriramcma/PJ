import React from 'react';

export interface BlogSource {
  text: string;
  link?: string;
}

export interface BlogPostMeta {
  id: string;
  slug: string;
  title: string;
  author: string;
  readTime: string;
  date?: string;
  excerpt: string;
  tags?: string[];
}

export interface BlogPostItem extends BlogPostMeta {
  Content: React.ComponentType;
  sources?: (string | React.ReactNode | BlogSource)[];
  additionalNotes?: (string | React.ReactNode)[];
}
