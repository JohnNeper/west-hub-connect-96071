import { Users, Building2, TrendingUp, Briefcase } from "lucide-react";

interface StatsProps {
  lang: 'fr' | 'en';
}

const Stats = ({ lang }: StatsProps) => {
  const content = {
    fr: {
      title: "Notre Impact",
      subtitle: "Des chiffres qui parlent d'eux-mêmes",
      stats: [
        {
          icon: Users,
          number: "500+",
          label: "Membres actifs",
          description: "Une communauté dynamique de professionnels"
        },
        {
          icon: Building2,
          number: "50+",
          label: "Startups accompagnées",
          description: "De l'idée au succès"
        },
        {
          icon: TrendingUp,
          number: "2M FCFA+",
          label: "Levés de fonds",
          description: "Par nos startups incubées"
        },
        {
          icon: Briefcase,
          number: "100+",
          label: "Événements par an",
          description: "Bootcamps, meetups, talks & podcasts"
        }
      ]
    },
    en: {
      title: "Our Impact",
      subtitle: "Numbers that speak for themselves",
      stats: [
        {
          icon: Users,
          number: "500+",
          label: "Active Members",
          description: "A dynamic community of professionals"
        },
        {
          icon: Building2,
          number: "50+",
          label: "Startups Supported",
          description: "From idea to success"
        },
        {
          icon: TrendingUp,
          number: "2M+ FCFA",
          label: "Funds Raised",
          description: "By our incubated startups"
        },
        {
          icon: Briefcase,
          number: "100+",
          label: "Events per year",
          description: "Bootcamps, meetups, talks & podcasts"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card hover:bg-card/80 rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-primary/30 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <div className="text-5xl md:text-6xl font-bold mb-3 gradient-text">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {stat.label}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
