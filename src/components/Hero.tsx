import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Zap, Calendar, Lightbulb } from "lucide-react";
import logo from "@/assets/west-innovation-hub-logo.png";
import heroImage from "@/assets/hero-coworking.jpg";
import JoinCommunityDialog from "./JoinCommunityDialog";

interface HeroProps {
  lang: 'fr' | 'en';
}

const Hero = ({ lang }: HeroProps) => {
  const content = {
    fr: {
      title: "West Innovation Hub",
      subtitle: "West Innovation Space à Bafoussam",
      description: "Espace de coworking 24/7, bureaux privés et salle de conférence ultra-moderne. Programmes, podcasts, bootcamps et services de digitalisation pour accélérer les startups et entreprises de l'Ouest.",
      cta1: "Réserver un poste",
      cta2: "Demander un devis digitalisation",
      benefits: [
        { icon: Wifi, label: "WiFi 24/7 Starlink" },
        { icon: Zap, label: "Électricité permanente" },
        { icon: Calendar, label: "Programmes & Événements" },
        { icon: Lightbulb, label: "Conseil Digitalisation" }
      ]
    },
    en: {
      title: "West Innovation Hub",
      subtitle: "West Innovation Space in Bafoussam",
      description: "24/7 coworking space, private offices and ultra-modern conference room. Programs, podcasts, bootcamps and digitalization services to accelerate startups and businesses in the West.",
      cta1: "Book Your Space",
      cta2: "Request Digitalization Quote",
      benefits: [
        { icon: Wifi, label: "24/7 WiFi Starlink" },
        { icon: Zap, label: "Permanent Electricity" },
        { icon: Calendar, label: "Programs & Events" },
        { icon: Lightbulb, label: "Digitalization Consulting" }
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
          alt="West Innovation Hub Coworking Space Bafoussam" 
          className="w-full h-full object-cover scale-105 animate-[scale_20s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="flex justify-center mb-12 animate-fade-in">
          <img 
            src={logo} 
            alt="West Innovation Hub Logo" 
            className="h-24 md:h-32 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 animate-slide-up leading-tight">
          {t.title}
        </h1>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent mb-8 animate-slide-up">
          {t.subtitle}
        </h2>
        
        <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto mb-16 animate-slide-up leading-relaxed font-light">
          {t.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up mb-20">
          <Button 
            size="lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white hover:bg-accent/90 hover:scale-105 font-semibold px-10 py-7 text-lg shadow-glow transition-all duration-300 rounded-full"
          >
            {t.cta1} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary hover:scale-105 font-semibold px-10 py-7 text-lg transition-all duration-300 rounded-full"
          >
            {t.cta2}
          </Button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="text-white/90 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <benefit.icon className="h-8 w-8 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-sm md:text-base font-medium">{benefit.label}</div>
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
