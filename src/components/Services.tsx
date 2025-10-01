import { Lightbulb, Building2, Users, Video, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import privateOffice from "@/assets/private-office.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import cafeSpace from "@/assets/cafe-space.jpg";

interface ServicesProps {
  lang: 'fr' | 'en';
}

const Services = ({ lang }: ServicesProps) => {
  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "Des solutions adaptées à vos besoins",
      services: [
        {
          icon: Lightbulb,
          title: "Conseil & Stratégie Digitale",
          description: "Accompagnement stratégique pour entreprises et particuliers dans leur transformation digitale. Analyse, conseil et mise en œuvre de solutions innovantes.",
          image: null
        },
        {
          icon: Building2,
          title: "Bureaux Privés",
          description: "Espaces de travail privés et équipés, parfaits pour les équipes et entreprises recherchant un environnement professionnel dédié.",
          image: privateOffice
        },
        {
          icon: Users,
          title: "Espace Coworking",
          description: "Rejoignez une communauté dynamique de professionnels et freelances dans un environnement collaboratif et inspirant.",
          image: null
        },
        {
          icon: Video,
          title: "Salle de Réunion",
          description: "Salles de réunion modernes et équipées (écrans, visioconférence) pour vos présentations, formations et réunions d'équipe.",
          image: meetingRoom
        },
        {
          icon: Coffee,
          title: "Café & Networking",
          description: "Espace détente et networking pour échanger, collaborer et créer des synergies autour d'un café.",
          image: cafeSpace
        }
      ],
      cta: "Réserver maintenant"
    },
    en: {
      title: "Our Services",
      subtitle: "Solutions tailored to your needs",
      services: [
        {
          icon: Lightbulb,
          title: "Consulting & Digital Strategy",
          description: "Strategic support for companies and individuals in their digital transformation. Analysis, consulting and implementation of innovative solutions.",
          image: null
        },
        {
          icon: Building2,
          title: "Private Offices",
          description: "Private and equipped workspaces, perfect for teams and companies seeking a dedicated professional environment.",
          image: privateOffice
        },
        {
          icon: Users,
          title: "Coworking Space",
          description: "Join a dynamic community of professionals and freelancers in a collaborative and inspiring environment.",
          image: null
        },
        {
          icon: Video,
          title: "Meeting Room",
          description: "Modern and equipped meeting rooms (screens, video conferencing) for your presentations, training and team meetings.",
          image: meetingRoom
        },
        {
          icon: Coffee,
          title: "Café & Networking",
          description: "Relaxation and networking space to exchange, collaborate and create synergies over coffee.",
          image: cafeSpace
        }
      ],
      cta: "Book Now"
    }
  };

  const t = content[lang];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 ${service.image ? 'gradient-primary' : 'gradient-secondary'} rounded-xl flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
