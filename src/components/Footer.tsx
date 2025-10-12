import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.privacy'), href: '/privacy' },
    { name: t('footer.terms'), href: '/terms' },
    { name: t('footer.about'), href: '/about' },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} QuakeSafe. {t('footer.rights')}
          </div>
          <div className="flex space-x-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-2 text-center text-xs text-muted-foreground">
          <div>
            {t('footer.dataSource')}
          </div>
          <div>
            {t('footer.developer')} <span className="font-medium text-primary">RAFAEL RACE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
