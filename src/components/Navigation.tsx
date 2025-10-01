import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/west-hub-logo.jpeg";

interface NavigationProps {
  lang: 'fr' | 'en';
  toggleLang: () => void;
}

const Navigation = ({ lang, toggleLang }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    fr: {
      about: "À propos",
      services: "Services",
      incubation: "Incubation",
      partners: "Partenaires",
      team: "Équipe",
      contact: "Contact",
      book: "Réserver"
    },
    en: {
      about: "About",
      services: "Services",
      incubation: "Incubation",
      partners: "Partners",
      team: "Team",
      contact: "Contact",
      book: "Book Now"
    }
  };

  const t = content[lang];

  const navItems = [
    { label: t.about, href: "#about" },
    { label: t.services, href: "#services" },
    { label: t.incubation, href: "#incubation" },
    { label: t.partners, href: "#partners" },
    { label: t.team, href: "#team" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="West Hub" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLang}
              className="hidden sm:flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              {lang === 'fr' ? 'EN' : 'FR'}
            </Button>
            <Button 
              size="sm"
              className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {t.book}
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLang}
                className="w-full justify-start"
              >
                <Globe className="h-4 w-4 mr-2" />
                {lang === 'fr' ? 'English' : 'Français'}
              </Button>
              <Button 
                size="sm"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {t.book}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
