import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coworking.jpg";
import privateOffice from "@/assets/private-office.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";
import cafeSpace from "@/assets/cafe-space.jpg";

interface AboutProps {
  lang: 'fr' | 'en';
}

const About = ({ lang }: AboutProps) => {
  const content = {
    fr: {
      title: "L'écosystème tech de l'Ouest Cameroun",
      mission: "Fondé en 2021, West Digital Hub est le centre d'innovation et hub technologique situé à Bafoussam, Région de l'Ouest Cameroun. Notre mission est de combler le fossé numérique et créer des opportunités pour les talents de l'Ouest Cameroun.",
      vision: "Nous offrons un espace coworking 24/7 avec WiFi Starlink, des bureaux privés, des salles de réunion modernes, et des programmes comme les Innovator Talks, hackathons, bootcamps et le West All Tech Festival. Nous accompagnons les startups et PME vers le succès.",
      cta: "En savoir plus"
    },
    en: {
      title: "West Cameroon Tech Ecosystem",
      mission: "Founded in 2021, West Digital Hub is the innovation center and technology hub located in Bafoussam, West Region of Cameroon. Our mission is to bridge the digital divide and create opportunities for talented individuals in Western Cameroon.",
      vision: "We offer a 24/7 coworking space with Starlink WiFi, private offices, modern meeting rooms, and programs like Innovator Talks, hackathons, bootcamps and the West All Tech Festival. We support startups and SMEs towards success.",
      cta: "Learn more"
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm">
              {lang === 'fr' ? 'À PROPOS' : 'ABOUT US'}
            </span>
            
            <h2 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
              {t.title}
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-xl">
                {t.mission}
              </p>
              <p>
                {t.vision}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 shadow-glow rounded-full px-8"
                onClick={() => window.location.href = '/about'}
              >
                {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            {/* Main Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={privateOffice} 
                      alt="Private Office" 
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={cafeSpace} 
                      alt="Cafe Space" 
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={meetingRoom} 
                      alt="Meeting Room" 
                      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={heroImage} 
                      alt="Coworking Space" 
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
