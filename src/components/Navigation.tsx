import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/west-digital-hub-logo.png";

interface NavigationProps {
  lang: 'fr' | 'en';
  toggleLang: () => void;
}

const Navigation = ({ lang, toggleLang }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const content = {
    fr: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      portfolio: "Portfolio",
      upee: "UPEE",
      blog: "Blog",
      contact: "Work With Us",
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      upee: "UPEE",
      blog: "Blog",
      contact: "Work With Us",
    }
  };

  const t = content[lang];

  const navItems = [
    { label: t.home, href: "/" },
    { label: t.about, href: "/about" },
    { label: t.services, href: "/services" },
    { label: t.upee, href: "/upee" },
    { label: t.blog, href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="West Digital Hub" className="h-14 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-accent transition-all font-medium px-4 py-2 rounded-full hover:bg-muted text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={toggleLang} className="hidden sm:flex items-center gap-2 rounded-full hover:bg-muted">
              <Globe className="h-4 w-4" />
              <span className="font-semibold text-xs">{lang === 'fr' ? 'EN' : 'FR'}</span>
            </Button>
            <Button
              size="sm"
              onClick={() => {
                if (isHome) {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-md rounded-full px-6 font-bold text-sm"
            >
              {t.contact}
            </Button>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block text-foreground hover:text-accent hover:bg-muted transition-all font-medium py-3 px-4 rounded-xl">
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="ghost" size="sm" onClick={toggleLang} className="w-full justify-start rounded-xl hover:bg-muted">
                <Globe className="h-4 w-4 mr-2" />
                {lang === 'fr' ? 'English' : 'Français'}
              </Button>
              <Button
                size="sm"
                onClick={() => { setIsOpen(false); window.location.href = '/contact'; }}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl font-bold"
              >
                {t.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
