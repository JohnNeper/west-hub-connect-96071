import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/west-hub-logo.jpeg";
import heroImage from "@/assets/hero-coworking.jpg";

interface HeroProps {
  lang: 'fr' | 'en';
}

const Hero = ({ lang }: HeroProps) => {
  const content = {
    fr: {
      title: "Connecter, Innover, Impacter",
      subtitle: "West Hub Innovation est votre écosystème technologique à Bafoussam, stimulant l'innovation, l'entrepreneuriat et la collaboration pour transformer la Région de l'Ouest et l'Afrique Centrale.",
      cta1: "Réservez votre espace",
      cta2: "Découvrez nos services"
    },
    en: {
      title: "Connect, Innovate, Impact",
      subtitle: "West Hub Innovation is your tech ecosystem in Bafoussam, driving innovation, entrepreneurship and collaboration to transform the West Region and Central Africa.",
      cta1: "Book Your Space",
      cta2: "Discover Our Services"
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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center animate-fade-in">
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="West Hub Innovation Logo" 
            className="h-24 md:h-32 w-auto"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          {t.title}
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 animate-slide-up">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg shadow-glow"
          >
            {t.cta1} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
          >
            {t.cta2}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
