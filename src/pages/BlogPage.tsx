import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Newspaper, Rocket, Trophy } from "lucide-react";

const BlogPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const content = {
    fr: {
      hero: "Blog & Actualités",
      heroSubtitle: "Suivez l'actualité de l'innovation tech dans la Région de l'Ouest",
      featured: "À la Une",
      allArticles: "Tous les Articles",
      readMore: "Lire la suite",
      articles: [
        {
          title: "Lancement de West Hub Innovation : Un nouveau souffle pour l'écosystème tech",
          excerpt: "West Hub Innovation ouvre ses portes à Bafoussam avec l'ambition de devenir le hub technologique de référence en Afrique Centrale. Découvrez notre vision et nos services.",
          category: "Annonce",
          date: "15 Mars 2024",
          author: "Équipe West Hub",
          image: Newspaper,
          featured: true
        },
        {
          title: "Comment réussir sa transformation digitale : Guide pratique pour PME",
          excerpt: "La transformation digitale n'est plus une option mais une nécessité. Découvrez les étapes clés pour digitaliser votre entreprise avec succès.",
          category: "Stratégie",
          date: "10 Mars 2024",
          author: "Expert Digital",
          image: Rocket,
          featured: false
        },
        {
          title: "Success Story : Startup camerounaise lève 100K$ grâce à West Tech",
          excerpt: "Retour sur le parcours inspirant d'une startup accompagnée par l'écosystème West Tech qui a réussi sa première levée de fonds.",
          category: "Success Story",
          date: "5 Mars 2024",
          author: "Community Manager",
          image: Trophy,
          featured: false
        },
        {
          title: "Bootcamp Web Development : Les inscriptions sont ouvertes",
          excerpt: "Rejoignez notre prochain bootcamp intensif de 12 semaines pour maîtriser React, Node.js et devenir développeur fullstack.",
          category: "Événement",
          date: "1 Mars 2024",
          author: "Équipe Formation",
          image: Rocket,
          featured: false
        },
        {
          title: "L'écosystème West Tech en chiffres : Bilan 2023",
          excerpt: "Découvrez les accomplissements de la communauté West Tech en 2023 : événements, startups lancées, emplois créés et plus encore.",
          category: "Rapport",
          date: "25 Février 2024",
          author: "Direction",
          image: Trophy,
          featured: false
        },
        {
          title: "5 tendances tech à surveiller en 2024 en Afrique",
          excerpt: "Intelligence artificielle, fintech, agritech... Découvrez les secteurs qui vont transformer le continent africain cette année.",
          category: "Tendances",
          date: "20 Février 2024",
          author: "Analyste Tech",
          image: Rocket,
          featured: false
        }
      ]
    },
    en: {
      hero: "Blog & News",
      heroSubtitle: "Follow the latest tech innovation news in the West Region",
      featured: "Featured",
      allArticles: "All Articles",
      readMore: "Read more",
      articles: [
        {
          title: "West Hub Innovation Launch: A new breath for the tech ecosystem",
          excerpt: "West Hub Innovation opens its doors in Bafoussam with the ambition to become the reference tech hub in Central Africa. Discover our vision and services.",
          category: "Announcement",
          date: "March 15, 2024",
          author: "West Hub Team",
          image: Newspaper,
          featured: true
        },
        {
          title: "How to succeed in digital transformation: Practical guide for SMEs",
          excerpt: "Digital transformation is no longer an option but a necessity. Discover the key steps to successfully digitize your business.",
          category: "Strategy",
          date: "March 10, 2024",
          author: "Digital Expert",
          image: Rocket,
          featured: false
        },
        {
          title: "Success Story: Cameroonian startup raises 100K$ thanks to West Tech",
          excerpt: "Review of the inspiring journey of a startup supported by the West Tech ecosystem that succeeded in its first fundraising.",
          category: "Success Story",
          date: "March 5, 2024",
          author: "Community Manager",
          image: Trophy,
          featured: false
        },
        {
          title: "Web Development Bootcamp: Applications are open",
          excerpt: "Join our next intensive 12-week bootcamp to master React, Node.js and become a fullstack developer.",
          category: "Event",
          date: "March 1, 2024",
          author: "Training Team",
          image: Rocket,
          featured: false
        },
        {
          title: "West Tech ecosystem in numbers: 2023 Report",
          excerpt: "Discover the achievements of the West Tech community in 2023: events, startups launched, jobs created and more.",
          category: "Report",
          date: "February 25, 2024",
          author: "Management",
          image: Trophy,
          featured: false
        },
        {
          title: "5 tech trends to watch in 2024 in Africa",
          excerpt: "Artificial intelligence, fintech, agritech... Discover the sectors that will transform the African continent this year.",
          category: "Trends",
          date: "February 20, 2024",
          author: "Tech Analyst",
          image: Rocket,
          featured: false
        }
      ]
    }
  };

  const t = content[lang];
  const featuredArticle = t.articles.find(a => a.featured);
  const regularArticles = t.articles.filter(a => !a.featured);

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

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
              {t.featured}
            </h2>
            <Card className="overflow-hidden shadow-glow hover:shadow-xl transition-all duration-300 animate-slide-up">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary to-secondary p-12 flex items-center justify-center">
                  <featuredArticle.image className="h-32 w-32 text-white" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      {t.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">
            {t.allArticles}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <Card 
                key={index}
                className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-secondary to-accent p-8 flex items-center justify-center">
                  <article.image className="h-16 w-16 text-white" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      {t.readMore} <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
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

export default BlogPage;
