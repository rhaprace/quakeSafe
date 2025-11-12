import { newsCategories } from '@/data/news';

interface NewsCategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const NewsCategoryFilter: React.FC<NewsCategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="border-b border-border overflow-x-auto">
      <nav className="flex gap-1 min-w-max" aria-label="News categories">
        {newsCategories.map((category) => {
          const isActive = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default NewsCategoryFilter;

