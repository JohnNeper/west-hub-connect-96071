import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import westtechWorkspace from "@/assets/westtech-workspace.jpeg";
import blockchainTalk from "@/assets/blockchain-talk.jpeg";
import teamPatrick from "@/assets/team-patrick-real.jpg";
import teamDilane from "@/assets/team-dilane.jpg";
import teamTherence from "@/assets/team-therence.jpg";
import heroCoworking from "@/assets/hero-coworking.jpg";

const BlogPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const content = {
    fr: {
      hero: "Blog & Actualités",
      heroSubtitle: "Suivez l'actualité de l'innovation tech dans la Région de l'Ouest Cameroun",
      featured: "À la Une",
      allArticles: "Tous les Articles",
      readMore: "Lire la suite",
      articles: [
        {
          id: "west-all-tech-festival-2025",
          title: "West All Tech Festival 2025 : Le plus grand événement tech de l'Ouest Cameroun",
          excerpt: "Rejoignez-nous le 27 Juillet 2025 au West Digital Hub à Bafoussam pour le West All Tech Festival ! Plus de 150 participants attendus pour célébrer l'innovation tech de la région Ouest. Networking, conférences, hackathons et bien plus !",
          category: "Événement",
          date: "27 Juillet 2025",
          author: "West Tech Team",
          image: westtechWorkspace,
          featured: true
        },
        {
          id: "inauguration-west-digital-hub",
          title: "Inauguration du West Digital Hub : Une nouvelle ère numérique pour l'Ouest",
          excerpt: "Le West Digital Hub ouvre officiellement ses portes à Bafoussam. Premier hub tech de la région avec WiFi Starlink 24/7, espaces de coworking modernes, bureaux privés et programmes d'accompagnement pour les entrepreneurs locaux.",
          category: "Annonce",
          date: "15 Juin 2025",
          author: "Therence Ngniguepa",
          image: heroCoworking,
          featured: false
        },
        {
          id: "innovator-talks-blockchain",
          title: "Innovator Talks : Blockchain & Opportunités en Afrique avec Duclair Fopa Kuete",
          excerpt: "Chaque vendredi de 16h à 18h, rejoignez nos sessions Innovator Talks au West Digital Hub. Ce mois-ci : Duclair Fopa Kuete, CEO de TalantaChain, partage son expertise sur 'Blockchain & Opportunités en Afrique'.",
          category: "Talk",
          date: "20 Juin 2025",
          author: "Patrick Manfouo",
          image: blockchainTalk,
          featured: false
        },
        {
          id: "capture-the-flag-hackathon",
          title: "Capture The Flag Hackathon à l'Orange Digital Center Dschang",
          excerpt: "Plus de 200 participants au hackathon CTF organisé par West Tech en partenariat avec l'Orange Digital Center de Dschang. Une compétition intense pour résoudre des défis de cybersécurité et révéler les talents tech de la région.",
          category: "Hackathon",
          date: "5 Septembre 2024",
          author: "Dilane Goune",
          image: teamDilane,
          featured: false
        },
        {
          id: "investor-pitch-day",
          title: "Investor Pitch Day : Connectez votre startup aux investisseurs",
          excerpt: "Le prochain Investor Pitch Day aura lieu au West Tech Incubator à Bafoussam. Plus de 100 participants attendus. Une opportunité unique pour présenter votre projet à des investisseurs et obtenir du financement pour votre startup.",
          category: "Funding",
          date: "20 Septembre 2024",
          author: "Sandra Motue",
          image: teamPatrick,
          featured: false
        },
        {
          id: "partenariat-universite-dschang",
          title: "Partenariat avec l'Université de Dschang : Former les entrepreneurs de demain",
          excerpt: "West Tech renforce son partenariat stratégique avec l'Université de Dschang. Au programme : formations en entrepreneuriat, stages en startup, mentorat et initiatives pour accompagner les étudiants vers l'innovation.",
          category: "Partenariat",
          date: "10 Mai 2024",
          author: "West Tech Team",
          image: westtechWorkspace,
          featured: false
        }
      ]
    },
    en: {
      hero: "Blog & News",
      heroSubtitle: "Follow the latest tech innovation news in the West Region of Cameroon",
      featured: "Featured",
      allArticles: "All Articles",
      readMore: "Read more",
      articles: [
        {
          id: "west-all-tech-festival-2025",
          title: "West All Tech Festival 2025: The Biggest Tech Event in Western Cameroon",
          excerpt: "Join us on July 27, 2025 at West Digital Hub in Bafoussam for the West All Tech Festival! Over 150 participants expected to celebrate tech innovation in the West Region. Networking, conferences, hackathons and more!",
          category: "Event",
          date: "July 27, 2025",
          author: "West Tech Team",
          image: westtechWorkspace,
          featured: true
        },
        {
          id: "inauguration-west-digital-hub",
          title: "West Digital Hub Inauguration: A New Digital Era for the West",
          excerpt: "West Digital Hub officially opens its doors in Bafoussam. The region's first tech hub with 24/7 Starlink WiFi, modern coworking spaces, private offices and support programs for local entrepreneurs.",
          category: "Announcement",
          date: "June 15, 2025",
          author: "Therence Ngniguepa",
          image: heroCoworking,
          featured: false
        },
        {
          id: "innovator-talks-blockchain",
          title: "Innovator Talks: Blockchain & Opportunities in Africa with Duclair Fopa Kuete",
          excerpt: "Every Friday from 4-6pm, join our Innovator Talks sessions at West Digital Hub. This month: Duclair Fopa Kuete, CEO of TalantaChain, shares his expertise on 'Blockchain & Opportunities in Africa'.",
          category: "Talk",
          date: "June 20, 2025",
          author: "Patrick Manfouo",
          image: blockchainTalk,
          featured: false
        },
        {
          id: "capture-the-flag-hackathon",
          title: "Capture The Flag Hackathon at Orange Digital Center Dschang",
          excerpt: "Over 200 participants at the CTF hackathon organized by West Tech in partnership with Orange Digital Center in Dschang. An intense competition to solve cybersecurity challenges and discover regional tech talent.",
          category: "Hackathon",
          date: "September 5, 2024",
          author: "Dilane Goune",
          image: teamDilane,
          featured: false
        },
        {
          id: "investor-pitch-day",
          title: "Investor Pitch Day: Connect Your Startup to Investors",
          excerpt: "The next Investor Pitch Day will take place at West Tech Incubator in Bafoussam. Over 100 participants expected. A unique opportunity to present your project to investors and secure funding for your startup.",
          category: "Funding",
          date: "September 20, 2024",
          author: "Sandra Motue",
          image: teamPatrick,
          featured: false
        },
        {
          id: "partenariat-universite-dschang",
          title: "Partnership with University of Dschang: Training Tomorrow's Entrepreneurs",
          excerpt: "West Tech strengthens its strategic partnership with University of Dschang. Programs include entrepreneurship training, startup internships, mentorship and initiatives to guide students toward innovation.",
          category: "Partnership",
          date: "May 10, 2024",
          author: "West Tech Team",
          image: westtechWorkspace,
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
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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
                    <Link to={`/blog/${featuredArticle.id}`}>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        {t.readMore} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
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
                    <Link to={`/blog/${article.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        {t.readMore} <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
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