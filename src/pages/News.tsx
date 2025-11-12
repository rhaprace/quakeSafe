import { useState } from 'react';
import { AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SectionHeader } from '@/components/common';
import { Button } from '@/components/ui/button';
import { NewsArticleCard, NewsArticleDetail, NewsCategoryFilter } from '@/components/news';
import { useNews } from '@/hooks/useNews';
import { getNewsSEO, getNewsArticleSEO } from '@/utils/seo';
import type { NewsArticle } from '@/types/news';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const { data: articles = [], isLoading, error, refetch, isFetching } = useNews({
    useRealAPI: true,
  });

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const handleRefresh = () => {
    refetch();
  };

  if (selectedArticle) {
    return (
      <>
        <SEO {...getNewsArticleSEO(selectedArticle)} />
        <NewsArticleDetail
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)}
        />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <SEO {...getNewsSEO()} />
        <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
          <div className="container mx-auto px-4 py-8 lg:py-12">
            <SectionHeader
              title="Earthquake News & Updates"
              subtitle="Stay informed with the latest earthquake safety news, research, and community stories"
              size="lg"
            />
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">Loading news articles...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <SEO {...getNewsSEO()} />
        <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
          <div className="container mx-auto px-4 py-8 lg:py-12">
            <SectionHeader
              title="Earthquake News & Updates"
              subtitle="Stay informed with the latest earthquake safety news, research, and community stories"
              size="lg"
            />
            <div className="flex items-center justify-center py-20">
              <div className="flex flex-col items-center gap-4 max-w-md text-center">
                <AlertCircle className="h-12 w-12 text-destructive" />
                <p className="text-sm text-muted-foreground">
                  Unable to load news articles. Please try again later.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...getNewsSEO()} />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="flex items-start justify-between gap-4 mb-4">
            <SectionHeader
              title="Earthquake News & Updates"
              subtitle="Stay informed with the latest earthquake safety news, research, and community stories"
              size="lg"
              className="mb-0"
            />

            <Button
              onClick={handleRefresh}
              disabled={isFetching}
              variant="outline"
              size="sm"
              className="shrink-0 mt-1"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
              {isFetching ? 'Refreshing...' : 'Refresh'}
            </Button>
          </div>

          <div className="mb-6">
            <NewsCategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <NewsArticleCard
                key={article.id}
                article={article}
                onClick={setSelectedArticle}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;

