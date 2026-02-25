import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Code2, Users, Globe } from "lucide-react";
import logo from "@/assets/west-digital-hub-logo.png";
import heroImage from "@/assets/hero-coworking.jpg";

interface HeroProps {
  lang: 'fr' | 'en';
}

const Hero = ({ lang }: HeroProps) => {
  const content = {
    fr: {
      tagline: "TECH PARTNER · ECOSYSTEM HUB",
      headline: "We Build Products &",
      headlineAccent: "Secure Digital Solutions",
      headlineSuffix: "While Empowering Local Tech Talent.",
      description: "Partenaire technologique offshore basé à Bafoussam, Cameroun. Développement produit, IA, cybersécurité — avec un impact réel sur l'écosystème local.",
      cta1: "Travaillez avec nous",
      cta2: "Rejoignez l'Écosystème",
      stats: [
        { value: "50+", label: "Projets livrés" },
        { value: "15+", label: "Talents tech" },
        { value: "3", label: "Pays clients" },
        { value: "24/7", label: "Support & Ops" },
      ]
    },
    en: {
      tagline: "TECH PARTNER · ECOSYSTEM HUB",
      headline: "We Build Products &",
      headlineAccent: "Secure Digital Solutions",
      headlineSuffix: "While Empowering Local Tech Talent.",
      description: "Offshore technology partner based in Bafoussam, Cameroon. Product development, AI, cybersecurity — with real impact on the local ecosystem.",
      cta1: "Work With Us",
      cta2: "Join the Ecosystem",
      stats: [
        { value: "50+", label: "Projects Delivered" },
        { value: "15+", label: "Tech Talents" },
        { value: "3", label: "Client Countries" },
        { value: "24/7", label: "Support & Ops" },
      ]
    }
  };

  const t = content[lang];

  const pillItems = [
    { icon: Code2, label: lang === 'fr' ? "Dev & Produit" : "Dev & Product" },
    { icon: Shield, label: lang === 'fr' ? "Cybersécurité" : "Cybersecurity" },
    { icon: Globe, label: lang === 'fr' ? "IA & Data" : "AI & Data" },
    { icon: Users, label: lang === 'fr' ? "Talent local" : "Local Talent" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="West Digital Hub" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/80 to-foreground/70"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }}></div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-4 mb-10 animate-fade-in">
            <div className="bg-background/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <img src={logo} alt="West Digital Hub" className="h-12 md:h-16 w-auto" />
            </div>
            <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-accent uppercase">
              {t.tagline}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 animate-slide-up">
            <span className="text-background">{t.headline}</span>
            <br />
            <span className="text-accent">{t.headlineAccent}</span>
            <br />
            <span className="text-background/70 text-3xl md:text-4xl lg:text-5xl font-semibold">
              {t.headlineSuffix}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-background/60 max-w-2xl mb-10 leading-relaxed animate-slide-up">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
            <Button
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 py-7 text-lg rounded-full shadow-glow"
            >
              {t.cta1} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-background/30 text-background hover:bg-background/10 font-semibold px-10 py-7 text-lg rounded-full"
            >
              {t.cta2}
            </Button>
          </div>

          {/* Capability pills */}
          <div className="flex flex-wrap gap-3 mb-16 animate-fade-in">
            {pillItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-background/15 bg-background/5 backdrop-blur-sm">
                <item.icon className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-background/80">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl animate-fade-in">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-black text-accent">{stat.value}</div>
                <div className="text-sm text-background/50 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
