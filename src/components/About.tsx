import { Target, Eye, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AboutProps {
  lang: 'fr' | 'en';
}

const About = ({ lang }: AboutProps) => {
  const content = {
    fr: {
      title: "À Propos de West Hub Innovation",
      subtitle: "Construire l'écosystème tech de demain",
      description: "West Hub Innovation est né d'une vision audacieuse : créer un écosystème technologique dynamique dans la Région de l'Ouest du Cameroun. Situé à Bafoussam, notre hub est le catalyseur de l'innovation, de l'entrepreneuriat et de la collaboration.",
      mission: "Notre Mission",
      missionText: "Construire un écosystème technologique local et régional qui stimule l'innovation, l'entrepreneuriat et la collaboration pour transformer la Région de l'Ouest et l'Afrique Centrale.",
      vision: "Notre Vision",
      visionText: "Devenir le hub technologique de référence en Afrique Centrale, où les idées deviennent réalité et où les startups trouvent les ressources pour croître et impacter.",
      values: "Nos Valeurs",
      valuesText: "Innovation continue, collaboration authentique, excellence professionnelle, et impact social positif guident chacune de nos actions."
    },
    en: {
      title: "About West Hub Innovation",
      subtitle: "Building tomorrow's tech ecosystem",
      description: "West Hub Innovation was born from a bold vision: to create a dynamic tech ecosystem in Cameroon's West Region. Located in Bafoussam, our hub is the catalyst for innovation, entrepreneurship and collaboration.",
      mission: "Our Mission",
      missionText: "Build a local and regional tech ecosystem that drives innovation, entrepreneurship and collaboration to transform the West Region and Central Africa.",
      vision: "Our Vision",
      visionText: "Become the reference tech hub in Central Africa, where ideas become reality and startups find the resources to grow and make an impact.",
      values: "Our Values",
      valuesText: "Continuous innovation, authentic collaboration, professional excellence, and positive social impact guide all our actions."
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 animate-slide-up">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-slide-up">
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t.mission}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.missionText}
            </p>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mb-4">
                <Eye className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t.vision}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.visionText}
            </p>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t.values}
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.valuesText}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
