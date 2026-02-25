import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Sparkles, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-coworking.jpg";
import privateOffice from "@/assets/private-office.jpg";
import meetingRoom from "@/assets/meeting-room.jpg";

interface AboutProps {
  lang: 'fr' | 'en';
}

const About = ({ lang }: AboutProps) => {
  const content = {
    fr: {
      badge: "QUI SOMMES-NOUS",
      title: "Tech Partner International.",
      titleAccent: "Écosystème Local.",
      mission: "West Digital Hub est un partenaire technologique offshore et un hub d'innovation basé à Bafoussam, Cameroun. Nous combinons expertise technique internationale et impact local pour construire des produits digitaux de classe mondiale.",
      vision: "Notre vision : faire du Cameroun un acteur incontournable de la tech mondiale. Africa to the World.",
      cta: "En savoir plus",
      values: [
        { icon: Sparkles, title: "Innovation", desc: "Technologies de pointe, solutions créatives" },
        { icon: Shield, title: "Qualité & Sécurité", desc: "Standards internationaux, code audité" },
        { icon: Target, title: "Impact", desc: "Chaque projet crée des emplois locaux" },
        { icon: Heart, title: "Communauté", desc: "Former la prochaine génération tech africaine" },
      ]
    },
    en: {
      badge: "ABOUT US",
      title: "International Tech Partner.",
      titleAccent: "Local Ecosystem.",
      mission: "West Digital Hub is an offshore technology partner and innovation hub based in Bafoussam, Cameroon. We combine international technical expertise with local impact to build world-class digital products.",
      vision: "Our vision: make Cameroon a key player in global tech. Africa to the World.",
      cta: "Learn more",
      values: [
        { icon: Sparkles, title: "Innovation", desc: "Cutting-edge technologies, creative solutions" },
        { icon: Shield, title: "Quality & Security", desc: "International standards, audited code" },
        { icon: Target, title: "Impact", desc: "Every project creates local jobs" },
        { icon: Heart, title: "Community", desc: "Training Africa's next tech generation" },
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8 animate-fade-in">
            <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full font-bold text-xs tracking-widest">
              {t.badge}
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground">
              {t.title}
              <br />
              <span className="text-accent">{t.titleAccent}</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">{t.mission}</p>
            <p className="text-xl font-semibold text-foreground italic">"{t.vision}"</p>

            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 font-bold"
              onClick={() => window.location.href = '/about'}
            >
              {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right - Values Grid */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {t.values.map((value, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border border-border bg-card hover:shadow-card transition-all duration-300 ${i === 1 ? 'translate-y-6' : ''} ${i === 3 ? 'translate-y-6' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
