import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Mic, Radio, BookOpen, Code } from "lucide-react";

const ServicesPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const content = {
    fr: {
      hero: "Nos Services",
      heroSubtitle: "Des solutions complètes pour entrepreneurs, startups et professionnels",
      eventsTitle: "Événements & Communauté",
      eventsSubtitle: "Booster l'innovation et l'écosystème dans la région",
      events: [
        {
          icon: Code,
          title: "Bootcamps Tech",
          description: "Formations intensives sur les technologies web, mobile, IA et blockchain pour développer vos compétences techniques",
          frequency: "Trimestriels"
        },
        {
          icon: Users,
          title: "Meetups Entrepreneurs",
          description: "Rencontres régulières pour échanger, networker et créer des synergies entre entrepreneurs de l'écosystème",
          frequency: "Mensuels"
        },
        {
          icon: Mic,
          title: "Tech Talks",
          description: "Conférences et présentations par des experts sur les tendances tech, stratégies business et success stories",
          frequency: "Bi-mensuels"
        },
        {
          icon: Radio,
          title: "Podcasts Innovation",
          description: "Interviews d'entrepreneurs, investisseurs et acteurs de l'innovation pour inspirer et informer la communauté",
          frequency: "Hebdomadaires"
        },
        {
          icon: BookOpen,
          title: "Workshops Pratiques",
          description: "Ateliers hands-on sur le marketing digital, le pitch, la levée de fonds et la gestion d'entreprise",
          frequency: "Mensuels"
        },
        {
          icon: Calendar,
          title: "Hackathons",
          description: "Compétitions de développement pour résoudre des problèmes réels et créer des solutions innovantes",
          frequency: "Annuels"
        }
      ],
      joinCommunity: "Rejoindre la Communauté",
      pricing: "Tarifs & Formules",
      contactUs: "Nous Contacter pour Plus d'Infos"
    },
    en: {
      hero: "Our Services",
      heroSubtitle: "Complete solutions for entrepreneurs, startups and professionals",
      eventsTitle: "Events & Community",
      eventsSubtitle: "Boosting innovation and the ecosystem in the region",
      events: [
        {
          icon: Code,
          title: "Tech Bootcamps",
          description: "Intensive training on web, mobile, AI and blockchain technologies to develop your technical skills",
          frequency: "Quarterly"
        },
        {
          icon: Users,
          title: "Entrepreneur Meetups",
          description: "Regular meetings to exchange, network and create synergies among ecosystem entrepreneurs",
          frequency: "Monthly"
        },
        {
          icon: Mic,
          title: "Tech Talks",
          description: "Conferences and presentations by experts on tech trends, business strategies and success stories",
          frequency: "Bi-monthly"
        },
        {
          icon: Radio,
          title: "Innovation Podcasts",
          description: "Interviews with entrepreneurs, investors and innovation actors to inspire and inform the community",
          frequency: "Weekly"
        },
        {
          icon: BookOpen,
          title: "Practical Workshops",
          description: "Hands-on workshops on digital marketing, pitching, fundraising and business management",
          frequency: "Monthly"
        },
        {
          icon: Calendar,
          title: "Hackathons",
          description: "Development competitions to solve real problems and create innovative solutions",
          frequency: "Annual"
        }
      ],
      joinCommunity: "Join the Community",
      pricing: "Pricing & Packages",
      contactUs: "Contact Us for More Info"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t.hero}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <Services lang={lang} />

      {/* Events & Community Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.eventsTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.eventsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {t.events.map((event, index) => (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 gradient-secondary rounded-xl flex items-center justify-center">
                    <event.icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                </div>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {event.frequency}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center animate-slide-up">
            <Button 
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-6 text-lg shadow-glow"
            >
              {t.joinCommunity}
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="p-12 gradient-primary text-primary-foreground shadow-glow text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.pricing}
            </h2>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              {t.contactUs}
            </Button>
          </Card>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default ServicesPage;
