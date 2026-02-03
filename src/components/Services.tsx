import { Lightbulb, Building2, Users, Video, Coffee, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
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
          features: ["Accès 24/7", "WiFi Starlink", "Café gratuit", "Communauté"],
          highlight: true
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
      cta: "Réserver maintenant",
      ctaQuote: "Demander un devis"
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
          features: ["24/7 Access", "Starlink WiFi", "Free Coffee", "Community"],
          highlight: true
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
      cta: "Book Now",
      ctaQuote: "Request Quote"
    }
  };

  const t = content[lang];

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm font-bold text-accent uppercase tracking-wide">
              {lang === 'fr' ? 'NOS SERVICES' : 'OUR SERVICES'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl transition-all duration-500 hover:shadow-glow border-2 ${
                service.highlight 
                  ? 'border-accent/50 bg-gradient-to-br from-accent/5 to-background' 
                  : 'border-border hover:border-accent/30'
              }`}
            >
              {service.image ? (
                <div className="flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-accent/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                        <service.icon className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>

                    {/* Highlight Badge */}
                    {service.highlight && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                          {lang === 'fr' ? 'POPULAIRE' : 'POPULAR'}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature: string, idx: number) => (
                        <span 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-semibold"
                        >
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full w-full"
                      onClick={() => {
                        const bookingSection = document.getElementById('booking');
                        if (bookingSection) {
                          bookingSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {t.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                // No image variant
                <div className="p-6 lg:p-10 h-full flex flex-col">
                  <div className="bg-gradient-to-br from-accent/20 to-primary/10 p-4 lg:p-5 rounded-2xl w-fit mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <service.icon className="h-8 w-8 lg:h-10 lg:w-10 text-accent" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-5 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature: string, idx: number) => (
                      <span 
                        key={idx} 
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-xs font-semibold"
                      >
                        <CheckCircle className="h-3 w-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 rounded-full w-full"
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                  >
                    {t.ctaQuote} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
