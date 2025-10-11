const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} QuakeSafe. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-2 text-center text-xs text-muted-foreground">
          <div>
            Earthquake data provided by the U.S. Geological Survey (USGS)
          </div>
          <div>
            Developed by <span className="font-medium text-primary">RAFAEL RACE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
