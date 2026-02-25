import { Code2, Smartphone, Brain, Shield, Link2, Building2, GraduationCap, Trophy, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ServicesProps {
  lang: 'fr' | 'en';
}

const Services = ({ lang }: ServicesProps) => {
  const content = {
    fr: {
      badge: "NOS SERVICES",
      title: "Business & Tech Services",
      subtitle: "Solutions technologiques pour marchés internationaux",
      ecosystemTitle: "Ecosystem & Community",
      ecosystemSubtitle: "L'infrastructure qui forme et connecte les talents",
      cta: "Demander un devis",
      ctaEco: "En savoir plus",
      techServices: [
        {
          icon: Code2,
          title: "Offshore Development",
          description: "Équipes dédiées pour le développement logiciel offshore. Web, mobile, desktop — des produits livrés selon les standards internationaux.",
          features: ["React / Next.js", "Node / Python", "DevOps & CI/CD", "Code Review"],
        },
        {
          icon: Smartphone,
          title: "Product Development",
          description: "De l'idée au produit fini. Design UX/UI, développement, tests et déploiement. Web, Mobile (iOS/Android), Desktop.",
          features: ["MVP & Prototypage", "UI/UX Design", "Apps Natives", "SaaS"],
        },
        {
          icon: Brain,
          title: "AI & Data Solutions",
          description: "Intelligence artificielle, machine learning, analyse de données et automatisation pour optimiser vos processus business.",
          features: ["Machine Learning", "NLP & Chatbots", "Data Analytics", "Automatisation"],
        },
        {
          icon: Shield,
          title: "Cybersecurity & Risk",
          description: "Audit de sécurité, tests de pénétration, conformité RGPD et stratégie de protection des données pour votre entreprise.",
          features: ["Audit Sécurité", "Pentest", "RGPD / ISO 27001", "SOC"],
        },
        {
          icon: Link2,
          title: "Blockchain & Web3",
          description: "Smart contracts, DApps, tokenisation et solutions blockchain pour la fintech, la supply chain et l'identité numérique.",
          features: ["Smart Contracts", "DApps", "Tokenisation", "DeFi"],
        },
      ],
      ecosystemServices: [
        {
          icon: Building2,
          title: "Coworking & Bureaux",
          description: "Espace 24/7 avec WiFi Starlink, bureaux privés équipés, salles de réunion ultra-modernes.",
          features: ["WiFi 24/7", "Bureaux privés", "Salles de réunion", "Café gratuit"],
        },
        {
          icon: GraduationCap,
          title: "Formations & Bootcamps",
          description: "Programmes intensifs en développement, IA, cybersécurité. Formation pratique orientée emploi.",
          features: ["Dev Bootcamp", "IA & Data", "Cybersécurité", "Certifications"],
        },
        {
          icon: Trophy,
          title: "Hackathons & Événements",
          description: "Compétitions tech, Innovator Talks, West Innovation Podcast et West All Tech Festival.",
          features: ["Hackathons", "Workshops", "Podcast", "Festival"],
        },
        {
          icon: Users,
          title: "Programme UPEE",
          description: "Un Pied à l'École, Un Pied en Entreprise — alternance pour intégrer les jeunes dans le monde professionnel.",
          features: ["Alternance", "Mentoring", "5 étudiants", "3 entreprises"],
          link: "/upee",
        },
      ],
    },
    en: {
      badge: "OUR SERVICES",
      title: "Business & Tech Services",
      subtitle: "Technology solutions for international markets",
      ecosystemTitle: "Ecosystem & Community",
      ecosystemSubtitle: "The infrastructure that trains and connects talent",
      cta: "Request a Quote",
      ctaEco: "Learn More",
      techServices: [
        {
          icon: Code2,
          title: "Offshore Development",
          description: "Dedicated teams for offshore software development. Web, mobile, desktop — products delivered to international standards.",
          features: ["React / Next.js", "Node / Python", "DevOps & CI/CD", "Code Review"],
        },
        {
          icon: Smartphone,
          title: "Product Development",
          description: "From idea to finished product. UX/UI design, development, testing and deployment. Web, Mobile (iOS/Android), Desktop.",
          features: ["MVP & Prototyping", "UI/UX Design", "Native Apps", "SaaS"],
        },
        {
          icon: Brain,
          title: "AI & Data Solutions",
          description: "Artificial intelligence, machine learning, data analysis and automation to optimize your business processes.",
          features: ["Machine Learning", "NLP & Chatbots", "Data Analytics", "Automation"],
        },
        {
          icon: Shield,
          title: "Cybersecurity & Risk",
          description: "Security audits, penetration testing, GDPR compliance and data protection strategy for your business.",
          features: ["Security Audit", "Pentest", "GDPR / ISO 27001", "SOC"],
        },
        {
          icon: Link2,
          title: "Blockchain & Web3",
          description: "Smart contracts, DApps, tokenization and blockchain solutions for fintech, supply chain and digital identity.",
          features: ["Smart Contracts", "DApps", "Tokenization", "DeFi"],
        },
      ],
      ecosystemServices: [
        {
          icon: Building2,
          title: "Coworking & Offices",
          description: "24/7 space with Starlink WiFi, equipped private offices, ultra-modern meeting rooms.",
          features: ["24/7 WiFi", "Private offices", "Meeting rooms", "Free coffee"],
        },
        {
          icon: GraduationCap,
          title: "Training & Bootcamps",
          description: "Intensive programs in development, AI, cybersecurity. Practical job-oriented training.",
          features: ["Dev Bootcamp", "AI & Data", "Cybersecurity", "Certifications"],
        },
        {
          icon: Trophy,
          title: "Hackathons & Events",
          description: "Tech competitions, Innovator Talks, West Innovation Podcast and West All Tech Festival.",
          features: ["Hackathons", "Workshops", "Podcast", "Festival"],
        },
        {
          icon: Users,
          title: "UPEE Program",
          description: "School-to-Employment — alternance program to integrate youth into the professional world.",
          features: ["Alternance", "Mentoring", "5 students", "3 companies"],
          link: "/upee",
        },
      ],
    }
  };

  const t = content[lang];

  const ServiceCard = ({ service, variant }: { service: any; variant: 'tech' | 'eco' }) => (
    <Card className="group p-6 lg:p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 h-full flex flex-col">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${variant === 'tech' ? 'bg-foreground' : 'bg-accent/10'} group-hover:scale-110 transition-transform`}>
        <service.icon className={`h-6 w-6 ${variant === 'tech' ? 'text-background' : 'text-accent'}`} />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">{service.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {service.features.map((f: string, i: number) => (
          <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
            <CheckCircle className="h-3 w-3 text-accent" />
            {f}
          </span>
        ))}
      </div>
      <Button
        variant={variant === 'tech' ? 'default' : 'outline'}
        className={`w-full rounded-full font-semibold ${variant === 'tech' ? 'bg-foreground text-background hover:bg-foreground/90' : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'}`}
        onClick={() => {
          if (service.link) {
            window.location.href = service.link;
          } else {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {service.link ? t.ctaEco : t.cta} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Business & Tech Services */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-foreground text-background rounded-full font-bold text-xs tracking-widest mb-6">
              {t.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">{t.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.techServices.map((service, i) => (
              <ServiceCard key={i} service={service} variant="tech" />
            ))}
          </div>
        </div>

        {/* Ecosystem & Community */}
        <div id="ecosystem">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full font-bold text-xs tracking-widest mb-6">
              ECOSYSTEM
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">{t.ecosystemTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.ecosystemSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.ecosystemServices.map((service, i) => (
              <ServiceCard key={i} service={service} variant="eco" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
