import { Lightbulb, Building2, Users, Video, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import privateOfficeImg from "@/assets/private-office.jpg";
import coworkingImg from "@/assets/hero-coworking.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import cafeSpaceImg from "@/assets/cafe-space.jpg";

interface ServicesProps {
  lang: 'fr' | 'en';
}

const Services = ({ lang }: ServicesProps) => {
  const content = {
    fr: {
      title: "Nos Services",
      subtitle: "Des solutions adaptées pour transformer votre vision en réalité",
      services: [
        {
          icon: Users,
          title: "West Digital Hub Space (Coworking)",
          description: "Espace de coworking 24/7 avec WiFi Starlink haut débit, électricité permanente. Rejoignez une communauté dynamique d'innovateurs et entrepreneurs.",
          image: coworkingImg,
          features: ["Accès 24/7", "WiFi Starlink", "Café gratuit", "Communauté"]
        },
        {
          icon: Building2,
          title: "Bureaux Privés Équipés",
          description: "Bureaux privés entièrement équipés pour équipes et entreprises. Contrats flexibles mensuels, environnement professionnel premium.",
          image: privateOfficeImg,
          features: ["Bureaux meublés", "Contrats flexibles", "Services admin", "Sécurité 24/7"]
        },
        {
          icon: Video,
          title: "Salles de Réunion Ultra-Modernes",
          description: "Salles de conférence équipées avec projecteur HD, visioconférence et connexion haut débit. Parfait pour formations et réunions.",
          image: meetingRoomImg,
          features: ["Équipement pro", "Visioconférence", "Capacité 20-50", "Réservation flexible"]
        },
        {
          icon: Lightbulb,
          title: "Accompagnement Digitalisation & Business",
          description: "Services complets de transformation digitale : audit digital, stratégie business, refonte site web, e-commerce et marketing digital.",
          image: null,
          features: ["Audit digital", "Stratégie business", "Site web", "Marketing"]
        },
        {
          icon: Coffee,
          title: "Programmes & Événements Tech",
          description: "Hackathons, workshops, bootcamps intensifs et podcasts West Innovation pour booster l'écosystème tech de Bafoussam.",
          image: cafeSpaceImg,
          features: ["Hackathons", "Bootcamps", "Workshops", "Podcast"]
        }
      ],
      cta: "Réserver maintenant"
    },
    en: {
      title: "Our Services",
      subtitle: "Tailored solutions to transform your vision into reality",
      services: [
        {
          icon: Users,
          title: "West Digital Hub Space (Coworking)",
          description: "24/7 coworking space with high-speed Starlink WiFi, permanent electricity. Join a dynamic community of innovators and entrepreneurs.",
          image: coworkingImg,
          features: ["24/7 Access", "Starlink WiFi", "Free Coffee", "Community"]
        },
        {
          icon: Building2,
          title: "Equipped Private Offices",
          description: "Fully equipped private offices for teams and companies. Flexible monthly contracts, premium professional environment.",
          image: privateOfficeImg,
          features: ["Furnished offices", "Flexible contracts", "Admin services", "24/7 Security"]
        },
        {
          icon: Video,
          title: "Ultra-Modern Meeting Rooms",
          description: "Conference rooms equipped with HD projector, video conferencing and high-speed connection. Perfect for training and meetings.",
          image: meetingRoomImg,
          features: ["Pro equipment", "Video conferencing", "Capacity 20-50", "Flexible booking"]
        },
        {
          icon: Lightbulb,
          title: "Digitalization & Business Support",
          description: "Complete digital transformation services: digital audit, business strategy, website redesign, e-commerce and digital marketing.",
          image: null,
          features: ["Digital audit", "Business strategy", "Website", "Marketing"]
        },
        {
          icon: Coffee,
          title: "Tech Programs & Events",
          description: "Hackathons, workshops, intensive bootcamps and West Innovation podcasts to boost Bafoussam's tech ecosystem.",
          image: cafeSpaceImg,
          features: ["Hackathons", "Bootcamps", "Workshops", "Podcast"]
        }
      ],
      cta: "Book Now"
    }
  };

  const t = content[lang];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-6">
            {lang === 'fr' ? 'NOS SERVICES' : 'OUR SERVICES'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              {service.image ? (
                <div className="flex flex-col md:flex-row lg:flex-col">
                  <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden md:w-1/2 lg:w-full">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r lg:bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                      <div className="bg-white/20 backdrop-blur-sm p-2 lg:p-3 rounded-xl">
                        <service.icon className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 lg:p-8 md:w-1/2 lg:w-full flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    {service.features && (
                      <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                        {service.features.map((feature: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    <Button 
                      className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full w-full sm:w-auto"
                      onClick={() => window.location.href = '/contact'}
                    >
                      {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-6 lg:p-10">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 lg:p-5 rounded-2xl w-fit mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm lg:text-base text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {service.features && (
                    <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
                      {service.features.map((feature: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-full w-full sm:w-auto"
                    onClick={() => window.location.href = '/contact'}
                  >
                    {lang === 'fr' ? 'Demander un devis' : 'Request Quote'} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
