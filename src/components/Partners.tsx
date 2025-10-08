import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Handshake, TrendingUp, Users2, Globe2 } from "lucide-react";

interface PartnersProps {
  lang: 'fr' | 'en';
}

const Partners = ({ lang }: PartnersProps) => {
  const content = {
    fr: {
      title: "Nos Partenaires",
      subtitle: "Ensemble pour l'innovation à l'Ouest",
      description: "West Digital Hub collabore avec des partenaires stratégiques pour développer l'écosystème tech de la région de l'Ouest Cameroun.",
      benefits: [
        {
          icon: TrendingUp,
          title: "Visibilité & Impact",
          description: "Augmentez votre visibilité auprès d'un écosystème tech dynamique et en croissance"
        },
        {
          icon: Users2,
          title: "Accès aux Talents",
          description: "Connectez-vous avec les meilleurs talents tech de la région"
        },
        {
          icon: Globe2,
          title: "Réseau Régional",
          description: "Intégrez un réseau d'innovation à l'échelle de l'Afrique Centrale"
        },
        {
          icon: Handshake,
          title: "Collaborations",
          description: "Opportunités de collaboration avec startups et entrepreneurs"
        }
      ],
      cta: "Devenir Partenaire",
      sponsorCta: "Devenir Sponsor"
    },
    en: {
      title: "Our Partners",
      subtitle: "Together for innovation in the West",
      description: "West Digital Hub collaborates with strategic partners to develop the tech ecosystem of the West Region of Cameroon.",
      benefits: [
        {
          icon: TrendingUp,
          title: "Visibility & Impact",
          description: "Increase your visibility within a dynamic and growing tech ecosystem"
        },
        {
          icon: Users2,
          title: "Access to Talents",
          description: "Connect with the best tech talents in the region"
        },
        {
          icon: Globe2,
          title: "Regional Network",
          description: "Join an innovation network across Central Africa"
        },
        {
          icon: Handshake,
          title: "Collaborations",
          description: "Collaboration opportunities with startups and entrepreneurs"
        }
      ],
      cta: "Become a Partner",
      sponsorCta: "Become a Sponsor"
    }
  };

  const t = content[lang];

  return (
    <section id="partners" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
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
          {t.benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                  <benefit.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg shadow-glow"
          >
            {t.cta}
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-8 py-6 text-lg"
          >
            {t.sponsorCta}
          </Button>
        </div>

        {/* Partner logos */}
        <div className="mt-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {lang === 'fr' ? 'Ils nous font confiance' : 'They trust us'}
            </h3>
            <p className="text-muted-foreground">
              {lang === 'fr' ? 'Partenaires stratégiques et sponsors' : 'Strategic partners and sponsors'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['West Tech', 'Université de Dschang', 'Orange Cameroun', 'MTN Cameroon'].map((partner, i) => (
              <div 
                key={i}
                className="aspect-video bg-card rounded-lg flex items-center justify-center border border-border p-6 hover:shadow-card transition-all"
              >
                <span className="text-foreground font-semibold text-center text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
