import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/west-hub-logo.jpeg";
import heroImage from "@/assets/hero-coworking.jpg";
import JoinCommunityDialog from "./JoinCommunityDialog";

interface HeroProps {
  lang: 'fr' | 'en';
}

const Hero = ({ lang }: HeroProps) => {
  const content = {
    fr: {
      title: "Connecter, Innover, Impacter",
      subtitle: "West Hub Innovation est votre écosystème technologique à Bafoussam, stimulant l'innovation, l'entrepreneuriat et la collaboration pour transformer la Région de l'Ouest et l'Afrique Centrale.",
      cta1: "Réservez votre espace",
      cta2: "Rejoindre la communauté"
    },
    en: {
      title: "Connect, Innovate, Impact",
      subtitle: "West Hub Innovation is your tech ecosystem in Bafoussam, driving innovation, entrepreneurship and collaboration to transform the West Region and Central Africa.",
      cta1: "Book Your Space",
      cta2: "Join the Community"
    }
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="West Hub Coworking Space" 
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-12 animate-fade-in">
          <img 
            src={logo} 
            alt="West Hub Innovation Logo" 
            className="h-20 md:h-28 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-slide-up leading-tight">
          {t.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-16 animate-slide-up leading-relaxed font-light">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-20">
          <Button 
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 font-semibold px-10 py-7 text-lg shadow-glow transition-all duration-300 rounded-full"
          >
            {t.cta1} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <JoinCommunityDialog lang={lang} triggerText={t.cta2}>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary hover:scale-105 font-semibold px-10 py-7 text-lg transition-all duration-300 rounded-full"
            >
              {t.cta2}
            </Button>
          </JoinCommunityDialog>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in">
          {[
            { number: "500+", label: lang === 'fr' ? "Membres" : "Members" },
            { number: "50+", label: lang === 'fr' ? "Startups" : "Startups" },
            { number: "100+", label: lang === 'fr' ? "Événements/an" : "Events/year" },
            { number: "10+", label: lang === 'fr' ? "Partenaires" : "Partners" }
          ].map((stat, index) => (
            <div key={index} className="text-white/90 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm md:text-base font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
