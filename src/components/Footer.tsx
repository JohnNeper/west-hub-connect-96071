import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/west-digital-hub-logo.png";

interface FooterProps {
  lang: 'fr' | 'en';
}

const Footer = ({ lang }: FooterProps) => {
  const content = {
    fr: {
      tagline: "Tech Partner · Ecosystem Hub",
      description: "Partenaire technologique offshore et hub d'innovation basé à Bafoussam, Cameroun.",
      services: "Services",
      company: "Entreprise",
      legal: "Légal",
      privacy: "Confidentialité",
      terms: "CGU",
      rights: "Tous droits réservés.",
      serviceLinks: [
        { label: "Offshore Development", href: "/services" },
        { label: "AI & Data", href: "/services" },
        { label: "Cybersécurité", href: "/services" },
        { label: "Coworking", href: "/coworking" },
        { label: "Programme UPEE", href: "/upee" },
      ],
      companyLinks: [
        { label: "À propos", href: "/about" },
        { label: "Équipe", href: "/team" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    en: {
      tagline: "Tech Partner · Ecosystem Hub",
      description: "Offshore technology partner and innovation hub based in Bafoussam, Cameroon.",
      services: "Services",
      company: "Company",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      rights: "All rights reserved.",
      serviceLinks: [
        { label: "Offshore Development", href: "/services" },
        { label: "AI & Data", href: "/services" },
        { label: "Cybersecurity", href: "/services" },
        { label: "Coworking", href: "/coworking" },
        { label: "UPEE Program", href: "/upee" },
      ],
      companyLinks: [
        { label: "About", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    }
  };

  const t = content[lang];

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/westdigitalhub", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/237658315610", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="West Digital Hub" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm font-bold text-accent mb-2">{t.tagline}</p>
            <p className="text-background/50 text-sm leading-relaxed mb-4">{t.description}</p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-9 h-9 bg-background/10 hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors">
                  <s.icon className="h-4 w-4 text-background/60 hover:text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-accent">{t.services}</h3>
            <ul className="space-y-2">
              {t.serviceLinks.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/50 hover:text-accent transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-accent">{t.company}</h3>
            <ul className="space-y-2">
              {t.companyLinks.map((link, i) => (
                <li key={i}><Link to={link.href} className="text-background/50 hover:text-accent transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-sm text-background/50">
              <li>contact@westtechs.org</li>
              <li>+237 658 315 610</li>
              <li>Bafoussam, Cameroun</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 text-sm">© {new Date().getFullYear()} West Digital Hub. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
