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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow"
            >
              {service.image ? (
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    {service.features && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature: string, idx: number) => (
                          <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    <Button 
                      className="bg-accent text-white hover:bg-accent/90 font-semibold rounded-full"
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-10">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-5 rounded-2xl w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {service.features && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.features.map((feature: string, idx: number) => (
                        <span key={idx} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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
