import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Zap, Calendar, Lightbulb } from "lucide-react";
import logo from "@/assets/west-digital-hub-logo.png";
import heroImage from "@/assets/hero-coworking.jpg";
import JoinCommunityDialog from "./JoinCommunityDialog";

interface HeroProps {
  lang: 'fr' | 'en';
}

const Hero = ({ lang }: HeroProps) => {
  const content = {
    fr: {
      title: "West Digital Hub",
      subtitle: "Connect - Innove - Impact",
      description: "L'écosystème tech de l'Ouest Cameroun",
      cta1: "Réserver un espace",
      cta2: "Nos services",
      benefits: [
        { icon: Wifi, label: "WiFi 24/7" },
        { icon: Zap, label: "Électricité 24/7" },
        { icon: Calendar, label: "Location à la journée" },
        { icon: Lightbulb, label: "Événements & Programmes" }
      ]
    },
    en: {
      title: "West Digital Hub",
      subtitle: "Connect - Innovate - Impact",
      description: "West Cameroon's tech ecosystem",
      cta1: "Book a Space",
      cta2: "Our Services",
      benefits: [
        { icon: Wifi, label: "24/7 WiFi" },
        { icon: Zap, label: "24/7 Electricity" },
        { icon: Calendar, label: "Daily Rentals" },
        { icon: Lightbulb, label: "Events & Programs" }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="West Digital Hub Coworking Space Bafoussam" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <img 
              src={logo} 
              alt="West Digital Hub Logo - Espace de coworking à Bafoussam" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 animate-slide-up">
          {t.subtitle}
        </h1>
        
        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-12 animate-slide-up">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-16">
          <Button 
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-lg shadow-glow"
          >
            {t.cta1} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg"
          >
            {t.cta2}
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="text-white backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <benefit.icon className="h-6 w-6 text-accent mb-2 mx-auto" />
              <div className="text-sm font-medium">{benefit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
