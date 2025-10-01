import { Card } from "@/components/ui/card";
import { Users2, Building2, Calendar, Award } from "lucide-react";

interface StatsProps {
  lang: 'fr' | 'en';
}

const Stats = ({ lang }: StatsProps) => {
  const content = {
    fr: {
      title: "Notre Impact en Chiffres",
      stats: [
        {
          icon: Users2,
          number: "50+",
          label: "Professionnels Tech",
          description: "Membres actifs"
        },
        {
          icon: Building2,
          number: "10+",
          label: "Startups Accompagnées",
          description: "En croissance"
        },
        {
          icon: Calendar,
          number: "100+",
          label: "Événements",
          description: "Bootcamps, meetups, talks"
        },
        {
          icon: Award,
          number: "3",
          label: "Années",
          description: "D'expérience tech"
        }
      ]
    },
    en: {
      title: "Our Impact in Numbers",
      stats: [
        {
          icon: Users2,
          number: "50+",
          label: "Tech Professionals",
          description: "Active members"
        },
        {
          icon: Building2,
          number: "10+",
          label: "Startups Supported",
          description: "Growing"
        },
        {
          icon: Calendar,
          number: "100+",
          label: "Events",
          description: "Bootcamps, meetups, talks"
        },
        {
          icon: Award,
          number: "3",
          label: "Years",
          description: "Of tech experience"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                  <stat.icon className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-foreground font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
