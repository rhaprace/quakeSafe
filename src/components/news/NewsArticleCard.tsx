import { useState } from 'react';
import { Calendar, Clock, Tag, ImageOff } from 'lucide-react';
import type { NewsArticle } from '@/types/news';
import { newsCategories } from '@/data/news';

interface NewsArticleCardProps {
  article: NewsArticle;
  onClick: (article: NewsArticle) => void;
}

export const NewsArticleCard: React.FC<NewsArticleCardProps> = ({ article, onClick }) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article
      className="bg-background rounded-lg border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col"
      onClick={() => onClick(article)}
    >
      {article.imageUrl && !imageError ? (
        <div className="w-full h-48 overflow-hidden bg-muted relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            onError={() => {
              setImageError(true);
            }}
            loading="lazy"
          />
        </div>
      ) : article.imageUrl && imageError ? (
        <div className="w-full h-48 bg-muted flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <ImageOff className="h-8 w-8" />
            <span className="text-xs">Image unavailable</span>
          </div>
        </div>
      ) : null}

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            <Tag className="h-3 w-3" />
            {newsCategories.find(cat => cat.id === article.category)?.name}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mt-auto">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {formatDate(article.datePublished)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime} min
          </div>
        </div>
      </div>
      <div className="px-6 py-3 bg-muted/30 border-t text-sm text-primary font-medium group-hover:bg-primary/5 transition-colors">
        Read article →
      </div>
    </article>
  );
};

export default NewsArticleCard;

