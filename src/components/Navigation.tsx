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
      upee: "Programme UPEE",
      team: "Équipe",
      blog: "Blog",
      contact: "Contact",
      book: "Réserver"
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      upee: "UPEE Program",
      team: "Team",
      blog: "Blog",
      contact: "Contact",
      book: "Book Now"
    }
  };

  const t = content[lang];

  const navItems = [
    { label: t.home, href: "/", isSection: false },
    { label: t.about, href: "/about", isSection: false },
    { label: t.services, href: "/services", isSection: false },
    { label: t.upee, href: "/upee", isSection: false },
    { label: t.team, href: "/team", isSection: false },
    { label: t.blog, href: "/blog", isSection: false },
    { label: t.contact, href: "/contact", isSection: false },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="West Digital Hub" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.isSection ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-all font-medium px-4 py-2 rounded-full hover:bg-muted"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-all font-medium px-4 py-2 rounded-full hover:bg-muted"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-2 rounded-full hover:bg-muted"
            >
              <Globe className="h-4 w-4" />
              <span className="font-semibold">{lang === 'fr' ? 'EN' : 'FR'}</span>
            </Button>
            {isHome && (
              <Button 
                size="sm"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden sm:inline-flex bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90 shadow-md hover:shadow-lg transition-all rounded-full px-6 font-semibold"
              >
                {t.book}
              </Button>
            )}
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              item.isSection ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-xl"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-foreground hover:text-primary hover:bg-muted transition-all font-medium py-3 px-4 rounded-xl"
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLang}
                className="w-full justify-start rounded-xl hover:bg-muted"
              >
                <Globe className="h-4 w-4 mr-2" />
                {lang === 'fr' ? 'English' : 'Français'}
              </Button>
              {isHome && (
                <Button 
                  size="sm"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90 rounded-xl font-semibold"
                >
                  {t.book}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
