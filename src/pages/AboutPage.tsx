import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Target, Users2, Lightbulb, Globe2, Award } from "lucide-react";

const AboutPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const content = {
    fr: {
      hero: "À Propos de Nous",
      heroSubtitle: "L'histoire, la mission et la vision de West Hub Innovation",
      storyTitle: "Notre Histoire",
      storyText: "West Hub Innovation est né de la volonté de créer un véritable écosystème technologique dans la Région de l'Ouest du Cameroun. Fondé par des entrepreneurs passionnés ayant une expérience avérée dans l'écosystème West Tech, notre hub est devenu le point de convergence pour l'innovation, l'entrepreneuriat et la collaboration. Depuis notre création, nous avons accompagné plus de 50 professionnels et 10+ startups dans leur développement.",
      whyTitle: "Pourquoi Choisir West Hub Innovation",
      whySubtitle: "Ce qui nous rend uniques",
      reasons: [
        {
          icon: CheckCircle2,
          title: "Expertise Avérée",
          description: "Une équipe avec une expérience confirmée en conseil digital, stratégie business et accompagnement de startups"
        },
        {
          icon: Target,
          title: "Approche Personnalisée",
          description: "Des solutions sur mesure adaptées à vos besoins spécifiques, que vous soyez startup, PME ou freelance"
        },
        {
          icon: Users2,
          title: "Communauté Active",
          description: "Un réseau dynamique d'entrepreneurs, développeurs, designers et investisseurs engagés"
        },
        {
          icon: Lightbulb,
          title: "Innovation Continue",
          description: "Accès aux dernières technologies et méthodologies pour rester à la pointe de l'innovation"
        },
        {
          icon: Globe2,
          title: "Réseau Régional",
          description: "Connexions avec l'écosystème West Tech et au-delà, en Afrique Centrale et internationale"
        },
        {
          icon: Award,
          title: "Professionnalisme",
          description: "Espaces modernes, équipements de qualité et services professionnels pour votre réussite"
        }
      ],
      impactTitle: "Notre Impact",
      stats: [
        { number: "50+", label: "Professionnels Tech" },
        { number: "10+", label: "Startups Accompagnées" },
        { number: "100+", label: "Événements Organisés" },
        { number: "3", label: "Années d'Expérience" }
      ]
    },
    en: {
      hero: "About Us",
      heroSubtitle: "The story, mission and vision of West Hub Innovation",
      storyTitle: "Our Story",
      storyText: "West Hub Innovation was born from the desire to create a true technological ecosystem in Cameroon's West Region. Founded by passionate entrepreneurs with proven experience in the West Tech ecosystem, our hub has become the convergence point for innovation, entrepreneurship and collaboration. Since our creation, we have supported over 50 professionals and 10+ startups in their development.",
      whyTitle: "Why Choose West Hub Innovation",
      whySubtitle: "What makes us unique",
      reasons: [
        {
          icon: CheckCircle2,
          title: "Proven Expertise",
          description: "A team with confirmed experience in digital consulting, business strategy and startup support"
        },
        {
          icon: Target,
          title: "Personalized Approach",
          description: "Tailored solutions adapted to your specific needs, whether you're a startup, SME or freelancer"
        },
        {
          icon: Users2,
          title: "Active Community",
          description: "A dynamic network of entrepreneurs, developers, designers and committed investors"
        },
        {
          icon: Lightbulb,
          title: "Continuous Innovation",
          description: "Access to the latest technologies and methodologies to stay at the forefront of innovation"
        },
        {
          icon: Globe2,
          title: "Regional Network",
          description: "Connections with the West Tech ecosystem and beyond, in Central Africa and internationally"
        },
        {
          icon: Award,
          title: "Professionalism",
          description: "Modern spaces, quality equipment and professional services for your success"
        }
      ],
      impactTitle: "Our Impact",
      stats: [
        { number: "50+", label: "Tech Professionals" },
        { number: "10+", label: "Startups Supported" },
        { number: "100+", label: "Events Organized" },
        { number: "3", label: "Years of Experience" }
      ]
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

      <About lang={lang} />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center animate-fade-in">
              {t.storyTitle}
            </h2>
            <Card className="p-8 shadow-card animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.storyText}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.whySubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.reasons.map((reason, index) => (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                    <reason.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {t.impactTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default AboutPage;
