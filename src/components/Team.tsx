import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import orlaneImg from "@/assets/team-orlane.jpg";
import patrickImg from "@/assets/team-patrick.jpg";
import therenceImg from "@/assets/team-therence.jpg";

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

  // Real team members
  const teamMembers = [
    {
      name: 'Therence Ngniguepa',
      role: lang === 'fr' ? 'Fondateur & CEO' : 'Founder & CEO',
      experience: lang === 'fr' 
        ? 'Entrepreneur tech passionné, visionnaire de l\'écosystème West Tech. Expert en innovation et développement de startups avec 5+ ans d\'expérience.' 
        : 'Passionate tech entrepreneur, West Tech ecosystem visionary. Expert in innovation and startup development with 5+ years of experience.',
      image: therenceImg,
      linkedin: 'https://cm.linkedin.com/in/therence-ngniguepa-648750222'
    },
    {
      name: 'Orlane Motue Sandra',
      role: lang === 'fr' ? 'Directrice des Opérations' : 'Operations Director',
      experience: lang === 'fr'
        ? 'Spécialiste en gestion opérationnelle et développement communautaire. 4+ ans d\'expérience en coordination de projets tech et événements.'
        : 'Specialist in operational management and community development. 4+ years of experience in tech project coordination and events.',
      image: orlaneImg,
      linkedin: '#'
    },
    {
      name: 'Patrick Manfouo',
      role: lang === 'fr' ? 'Directeur Technique' : 'Technical Director',
      experience: lang === 'fr'
        ? 'Développeur senior et architecte logiciel. Expert en solutions tech innovantes avec 6+ ans d\'expérience en développement full-stack.'
        : 'Senior developer and software architect. Expert in innovative tech solutions with 6+ years of full-stack development experience.',
      image: patrickImg,
      linkedin: '#'
    },
    {
      name: 'Prof Fouotsa Emmanuel',
      role: lang === 'fr' ? 'Advisor, Associate & Board Member' : 'Advisor, Associate & Board Member',
      experience: lang === 'fr'
        ? 'Professeur et chercheur renommé. Conseiller stratégique avec expertise académique et industrielle de 15+ ans en technologie et innovation.'
        : 'Renowned professor and researcher. Strategic advisor with 15+ years of academic and industrial expertise in technology and innovation.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      linkedin: 'https://cm.linkedin.com/in/emmanuel-fouotsa-9b6820254'
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 animate-slide-up">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-sm lg:text-base text-accent font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-xs lg:text-sm text-muted-foreground mb-4 line-clamp-4">
                  {member.experience}
                </p>
                <div className="flex gap-3 justify-start">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
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
