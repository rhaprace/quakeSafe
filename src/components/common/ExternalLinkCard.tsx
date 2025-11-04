import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { ExternalLinkCardProps } from '@/types/ui';
import { TypeTag } from './TypeTag';
import { useTranslation } from 'react-i18next';

export const ExternalLinkCard: React.FC<ExternalLinkCardProps> = ({
  name,
  description,
  url,
  type,
  className,
}) => {
  const { t } = useTranslation('common');

  return (
    <div
      className={cn(
        'border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all flex flex-col',
        className
      )}
    >
      <div className="flex-1">
        <div className="mb-3">
          <TypeTag type={type} />
          <h3 className="font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4">
        <Button asChild variant="outline" className="w-full justify-center">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {t('buttons.visitWebsite')}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

