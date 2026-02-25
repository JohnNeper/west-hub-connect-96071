import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";

interface PortfolioProps {
  lang: 'fr' | 'en';
}

const Portfolio = ({ lang }: PortfolioProps) => {
  const content = {
    fr: {
      badge: "PORTFOLIO",
      title: "Projets & Résultats",
      subtitle: "Des livraisons concrètes, des résultats mesurables.",
      cta: "Discuter de votre projet",
      projects: [
        {
          title: "Plateforme E-Commerce Agricole",
          client: "Startup Agritech — Cameroun",
          description: "Marketplace B2B connectant producteurs agricoles et acheteurs avec paiement mobile intégré (MTN MoMo, Orange Money).",
          results: ["+300 producteurs inscrits", "2x augmentation des ventes", "MVP en 8 semaines"],
          tags: ["React", "Node.js", "Mobile Money API"],
        },
        {
          title: "Système de Gestion Hospitalière",
          client: "Clinique Privée — Douala",
          description: "Application complète de gestion patients, rendez-vous, facturation et dossiers médicaux électroniques.",
          results: ["-60% temps administratif", "500+ patients gérés/mois", "Conformité données santé"],
          tags: ["Next.js", "PostgreSQL", "RGPD"],
        },
        {
          title: "Audit Cybersécurité & Conformité",
          client: "Institution Financière — CEMAC",
          description: "Audit complet de sécurité, tests de pénétration et mise en conformité ISO 27001 pour une institution financière régionale.",
          results: ["15 vulnérabilités critiques corrigées", "Certification ISO 27001", "Formation 30 employés"],
          tags: ["Pentest", "ISO 27001", "OWASP"],
        },
        {
          title: "Chatbot IA Service Client",
          client: "Entreprise Telecom — Cameroun",
          description: "Assistant virtuel multilingue (Français, Anglais, Pidgin) pour le support client automatisé avec escalade intelligente.",
          results: ["-40% tickets support", "Réponse < 3 secondes", "85% satisfaction client"],
          tags: ["LangChain", "Python", "NLP"],
        },
      ],
    },
    en: {
      badge: "PORTFOLIO",
      title: "Projects & Results",
      subtitle: "Concrete deliveries, measurable results.",
      cta: "Discuss your project",
      projects: [
        {
          title: "Agricultural E-Commerce Platform",
          client: "Agritech Startup — Cameroon",
          description: "B2B marketplace connecting agricultural producers and buyers with integrated mobile payment (MTN MoMo, Orange Money).",
          results: ["300+ registered producers", "2x sales increase", "MVP in 8 weeks"],
          tags: ["React", "Node.js", "Mobile Money API"],
        },
        {
          title: "Hospital Management System",
          client: "Private Clinic — Douala",
          description: "Complete patient management, appointments, billing and electronic medical records application.",
          results: ["-60% admin time", "500+ patients managed/month", "Health data compliance"],
          tags: ["Next.js", "PostgreSQL", "GDPR"],
        },
        {
          title: "Cybersecurity Audit & Compliance",
          client: "Financial Institution — CEMAC",
          description: "Complete security audit, penetration testing and ISO 27001 compliance for a regional financial institution.",
          results: ["15 critical vulnerabilities fixed", "ISO 27001 certification", "30 employees trained"],
          tags: ["Pentest", "ISO 27001", "OWASP"],
        },
        {
          title: "AI Customer Service Chatbot",
          client: "Telecom Company — Cameroon",
          description: "Multilingual virtual assistant (French, English, Pidgin) for automated customer support with smart escalation.",
          results: ["-40% support tickets", "Response < 3 seconds", "85% customer satisfaction"],
          tags: ["LangChain", "Python", "NLP"],
        },
      ],
    }
  };

  const t = content[lang];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full font-bold text-xs tracking-widest mb-6">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {t.projects.map((project, i) => (
            <Card key={i} className="p-6 lg:p-8 rounded-2xl border border-border hover:border-accent/30 hover:shadow-card transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink className="h-4 w-4 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wide">{project.client}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Results */}
              <div className="space-y-2 mb-5">
                {project.results.map((result, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{result}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full px-10 shadow-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
