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
      title: "Nos Services & Infrastructures",
      subtitle: "Un écosystème complet pour accélérer votre croissance et innovation",
      services: [
        {
          icon: Users,
          title: "West Innovation Space (Coworking)",
          description: "Espace de coworking moderne ouvert 24/7 avec WiFi haut débit et électricité permanente. Rejoignez une communauté d'innovateurs, développeurs et entrepreneurs dans un environnement collaboratif stimulant.",
          image: coworkingImg
        },
        {
          icon: Building2,
          title: "Bureaux Privés Équipés",
          description: "Bureaux privés modernes et entièrement équipés pour équipes et entreprises. WiFi ultra-rapide, électricité 24/7, mobilier ergonomique. L'environnement idéal pour votre croissance.",
          image: privateOfficeImg
        },
        {
          icon: Video,
          title: "Salles de Réunion Ultra-Modernes",
          description: "Salles de réunion high-tech avec écrans interactifs, systèmes de visioconférence professionnels, et équipements audiovisuels de pointe. Parfait pour présentations, formations et réunions stratégiques.",
          image: meetingRoomImg
        },
        {
          icon: Lightbulb,
          title: "Accompagnement Digitalisation & Business",
          description: "Confiez-nous votre stratégie de transformation digitale. Notre équipe d'experts accompagne entreprises et porteurs de projets dans leur développement : conseil stratégique, digitalisation, développement business.",
          image: null
        },
        {
          icon: Coffee,
          title: "Programmes & Événements Tech",
          description: "Hackathons, bootcamps, workshops et programmes de podcasts pour mettre en lumière les innovateurs. Sensibilisation, éducation et networking pour booster l'écosystème tech de la région Ouest.",
          image: cafeSpaceImg
        }
      ],
      cta: "Réserver maintenant"
    },
    en: {
      title: "Our Services & Infrastructure",
      subtitle: "A complete ecosystem to accelerate your growth and innovation",
      services: [
        {
          icon: Users,
          title: "West Innovation Space (Coworking)",
          description: "Modern 24/7 coworking space with high-speed WiFi and permanent electricity. Join a community of innovators, developers and entrepreneurs in a stimulating collaborative environment.",
          image: coworkingImg
        },
        {
          icon: Building2,
          title: "Equipped Private Offices",
          description: "Modern and fully equipped private offices for teams and companies. Ultra-fast WiFi, 24/7 electricity, ergonomic furniture. The ideal environment for your growth.",
          image: privateOfficeImg
        },
        {
          icon: Video,
          title: "Ultra-Modern Meeting Rooms",
          description: "High-tech meeting rooms with interactive screens, professional video conferencing systems, and state-of-the-art audiovisual equipment. Perfect for presentations, training and strategic meetings.",
          image: meetingRoomImg
        },
        {
          icon: Lightbulb,
          title: "Digitalization & Business Support",
          description: "Entrust us with your digital transformation strategy. Our team of experts supports companies and project leaders in their development: strategic consulting, digitalization, business development.",
          image: null
        },
        {
          icon: Coffee,
          title: "Tech Programs & Events",
          description: "Hackathons, bootcamps, workshops and podcast programs to highlight innovators. Awareness, education and networking to boost the West Region's tech ecosystem.",
          image: cafeSpaceImg
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
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button 
                      className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full"
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
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-full"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t.cta} <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
