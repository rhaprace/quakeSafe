export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  category: 'safety' | 'research' | 'preparedness' | 'technology' | 'community';
  imageUrl?: string;
  url?: string;
  tags: string[];
  readTime: number;
}

export interface NewsCategory {
  id: string;
  name: string;
  description: string;
}

