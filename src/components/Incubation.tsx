import { Rocket, TrendingUp, Users2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface IncubationProps {
  lang: 'fr' | 'en';
}

const Incubation = ({ lang }: IncubationProps) => {
  const content = {
    fr: {
      badge: "Bientôt Disponible",
      title: "Programme d'Incubation Startup",
      subtitle: "Transformez votre idée en entreprise prospère",
      description: "West Hub Innovation lance bientôt son programme d'incubation dédié aux startups technologiques. Un accompagnement complet pour accélérer votre croissance et maximiser vos chances de succès.",
      features: [
        {
          icon: Rocket,
          title: "Accompagnement Personnalisé",
          description: "Coaching individuel et mentorat par des experts de l'industrie"
        },
        {
          icon: TrendingUp,
          title: "Stratégie de Croissance",
          description: "Plan d'action structuré pour développer votre business model"
        },
        {
          icon: Users2,
          title: "Réseau & Communauté",
          description: "Accès à un réseau d'entrepreneurs, investisseurs et partenaires"
        },
        {
          icon: Award,
          title: "Ressources & Financement",
          description: "Support pour lever des fonds et accéder aux opportunités"
        }
      ],
      cta: "Rejoindre la liste d'attente",
      west: "Écosystème West Tech",
      westDesc: "West Hub Innovation fait partie de l'écosystème West Tech, une initiative régionale qui rassemble entrepreneurs, développeurs, designers et investisseurs pour créer l'avenir technologique de la Région de l'Ouest."
    },
    en: {
      badge: "Coming Soon",
      title: "Startup Incubation Program",
      subtitle: "Transform your idea into a thriving business",
      description: "West Hub Innovation is launching soon its incubation program dedicated to tech startups. Complete support to accelerate your growth and maximize your chances of success.",
      features: [
        {
          icon: Rocket,
          title: "Personalized Support",
          description: "Individual coaching and mentoring by industry experts"
        },
        {
          icon: TrendingUp,
          title: "Growth Strategy",
          description: "Structured action plan to develop your business model"
        },
        {
          icon: Users2,
          title: "Network & Community",
          description: "Access to a network of entrepreneurs, investors and partners"
        },
        {
          icon: Award,
          title: "Resources & Funding",
          description: "Support to raise funds and access opportunities"
        }
      ],
      cta: "Join the Waitlist",
      west: "West Tech Ecosystem",
      westDesc: "West Hub Innovation is part of the West Tech ecosystem, a regional initiative bringing together entrepreneurs, developers, designers and investors to create the technological future of the West Region."
    }
  };

  const t = content[lang];

  return (
    <section id="incubation" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-4">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 gradient-secondary rounded-xl flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-secondary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16 animate-slide-up">
          <Button 
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-lg shadow-glow"
          >
            {t.cta}
          </Button>
        </div>

        <Card className="p-8 md:p-12 gradient-primary text-primary-foreground shadow-glow animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              {t.west}
            </h3>
            <p className="text-lg leading-relaxed opacity-90">
              {t.westDesc}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Incubation;
