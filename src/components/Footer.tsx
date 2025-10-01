import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/west-hub-logo.jpeg";

interface FooterProps {
  lang: 'fr' | 'en';
}

const Footer = ({ lang }: FooterProps) => {
  const content = {
    fr: {
      tagline: "Connecter, Innover, Impacter",
      quickLinks: "Liens Rapides",
      services: "Services",
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      follow: "Suivez-nous",
      rights: "Tous droits réservés.",
      links: {
        about: "À propos",
        services: "Services",
        incubation: "Incubation",
        partners: "Partenaires",
        team: "Équipe",
        contact: "Contact"
      }
    },
    en: {
      tagline: "Connect, Innovate, Impact",
      quickLinks: "Quick Links",
      services: "Services",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      follow: "Follow Us",
      rights: "All rights reserved.",
      links: {
        about: "About",
        services: "Services",
        incubation: "Incubation",
        partners: "Partners",
        team: "Team",
        contact: "Contact"
      }
    }
  };

  const t = content[lang];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="West Hub Innovation" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {Object.entries(t.links).map(([key, label]) => (
                <li key={key}>
                  <a 
                    href={`#${key === 'about' ? 'about' : key}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  {t.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  {t.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.follow}</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} West Hub Innovation. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
