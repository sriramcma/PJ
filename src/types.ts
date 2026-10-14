export interface Milestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  highlight?: string;
  citation: string;
}

export interface CarePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string;
  details: string[];
}

export interface BookExcerpt {
  id: string;
  chapter: string;
  title: string;
  quote: string;
  context: string;
}

export interface MediaItem {
  id: string;
  title: string;
  category: 'News' | 'Interviews' | 'Podcasts' | 'Videos' | 'Social Media' | 'Achievements' | 'Events' | 'Articles';
  platform: string;
  url: string;
  date: string;
  summary: string;
  howFeatured: string;
  verificationStatus: 'High' | 'Medium-High' | 'Medium' | 'Pending Verification';
  embeddable?: boolean;
  requiresPermission?: boolean;
}
