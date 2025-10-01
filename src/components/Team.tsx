import { Card } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

interface TeamProps {
  lang: 'fr' | 'en';
}

const Team = ({ lang }: TeamProps) => {
  const content = {
    fr: {
      title: "Notre Équipe",
      subtitle: "Des passionnés au service de l'innovation",
      description: "L'équipe de West Hub Innovation rassemble des entrepreneurs, développeurs, designers et experts business avec une expérience avérée dans l'écosystème West Tech.",
      community: "Notre Communauté",
      communityText: "Plus de 50 professionnels tech, 10+ startups accompagnées, et un réseau en constante expansion dans la Région de l'Ouest.",
      testimonial: "\"West Hub Innovation est le catalyseur dont la Région de l'Ouest avait besoin. Un lieu où les idées deviennent réalité.\"",
      testimonialAuthor: "Membre de la communauté West Tech"
    },
    en: {
      title: "Our Team",
      subtitle: "Passionate people serving innovation",
      description: "The West Hub Innovation team brings together entrepreneurs, developers, designers and business experts with proven experience in the West Tech ecosystem.",
      community: "Our Community",
      communityText: "Over 50 tech professionals, 10+ startups supported, and a constantly expanding network in the West Region.",
      testimonial: "\"West Hub Innovation is the catalyst the West Region needed. A place where ideas become reality.\"",
      testimonialAuthor: "West Tech community member"
    }
  };

  const t = content[lang];

  // Placeholder team members
  const teamMembers = [
    {
      name: lang === 'fr' ? 'Équipe Fondatrice' : 'Founding Team',
      role: 'Leadership',
      image: null
    },
    {
      name: 'Mentors',
      role: lang === 'fr' ? 'Conseil & Expertise' : 'Advisory & Expertise',
      image: null
    },
    {
      name: 'Community',
      role: lang === 'fr' ? 'Réseau West Tech' : 'West Tech Network',
      image: null
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-slide-up">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">?</div>
                  <p className="text-sm opacity-75">{lang === 'fr' ? 'Photo à venir' : 'Photo coming soon'}</p>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {member.role}
                </p>
                <div className="flex gap-3 justify-center">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          <Card className="p-8 shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t.community}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.communityText}
            </p>
          </Card>

          <Card className="p-8 gradient-secondary text-secondary-foreground shadow-glow">
            <div className="flex flex-col h-full justify-center">
              <blockquote className="text-lg italic mb-4">
                {t.testimonial}
              </blockquote>
              <cite className="text-sm not-italic opacity-90">
                — {t.testimonialAuthor}
              </cite>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
