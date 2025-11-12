import { useState } from 'react';
import { Calendar, Clock, Tag, User, ExternalLink, ImageOff } from 'lucide-react';
import type { NewsArticle } from '@/types/news';
import { newsCategories } from '@/data/news';
import { Button } from '@/components/ui/button';

interface NewsArticleDetailProps {
  article: NewsArticle;
  onBack: () => void;
}

export const NewsArticleDetail: React.FC<NewsArticleDetailProps> = ({ article, onBack }) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        const headingText = paragraph.replace(/\*\*/g, '');
        return (
          <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
            {headingText}
          </h2>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(line => line.startsWith('- '));
        return (
          <ul key={index} className="list-disc pl-6 space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i}>{item.substring(2)}</li>
            ))}
          </ul>
        );
      }
      if (/^\d+\./.test(paragraph)) {
        const items = paragraph.split('\n').filter(line => /^\d+\./.test(line));
        return (
          <ol key={index} className="list-decimal pl-6 space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      }
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <button
          onClick={onBack}
          className="mb-6 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          ← Back to News
        </button>

        <article className="max-w-4xl mx-auto">
          {article.imageUrl && !imageError ? (
            <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden mb-8 bg-muted">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                onError={() => {
                  setImageError(true);
                }}
                loading="lazy"
              />
            </div>
          ) : article.imageUrl && imageError ? (
            <div className="w-full h-64 lg:h-96 rounded-lg bg-muted mb-8 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <ImageOff className="h-12 w-12" />
                <span className="text-sm">Image unavailable</span>
              </div>
            </div>
          ) : null}

          <div className="bg-background/50 backdrop-blur-sm rounded-lg border p-8 lg:p-12">
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <Tag className="h-3 w-3" />
                {newsCategories.find(cat => cat.id === article.category)?.name}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {article.excerpt}
              </p>
            )}

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(article.datePublished)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readTime} min read
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              {renderContent(article.content)}
            </div>

            {article.content.includes('[+') && article.url && (
              <div className="mt-8 p-4 bg-muted/50 rounded-lg border">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    This article is truncated. Visit the original source for the full story.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                    className="shrink-0"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Full Article
                  </Button>
                </div>
              </div>
            )}

            {article.url && !article.content.includes('[+') && (
              <div className="mt-8">
                <Button
                  variant="default"
                  onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                  className="w-full sm:w-auto"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Full Article on Original Site
                </Button>
              </div>
            )}

            {article.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 pt-8 border-t">
              <Button onClick={onBack} variant="outline">
                ← Back to News
              </Button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default NewsArticleDetail;
