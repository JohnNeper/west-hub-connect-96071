import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, ArrowRight, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

// Fallback images
import westtechWorkspace from "@/assets/westtech-workspace.jpeg";
import blockchainTalk from "@/assets/blockchain-talk.jpeg";
import heroCoworking from "@/assets/hero-coworking.jpg";

const BlogPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  // Fetch articles from Supabase
  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['blog-articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  const content = {
    fr: {
      hero: "Blog & Actualités",
      heroSubtitle: "Suivez l'actualité de l'innovation tech dans la Région de l'Ouest Cameroun",
      featured: "À la Une",
      allArticles: "Tous les Articles",
      readMore: "Lire la suite",
      noArticles: "Aucun article pour le moment",
      noArticlesDesc: "Revenez bientôt pour découvrir nos dernières actualités !",
      loading: "Chargement des articles..."
    },
    en: {
      hero: "Blog & News",
      heroSubtitle: "Follow the latest tech innovation news in the West Region of Cameroon",
      featured: "Featured",
      allArticles: "All Articles",
      readMore: "Read more",
      noArticles: "No articles yet",
      noArticlesDesc: "Come back soon to discover our latest news!",
      loading: "Loading articles..."
    }
  };

  const t = content[lang];

  // Get fallback image based on index
  const getFallbackImage = (index: number) => {
    const images = [westtechWorkspace, blockchainTalk, heroCoworking];
    return images[index % images.length];
  };

  // Get localized content from article
  const getLocalizedArticle = (article: any) => ({
    id: article.id,
    title: lang === 'fr' ? article.title_fr : article.title_en,
    excerpt: lang === 'fr' ? article.excerpt_fr : article.excerpt_en,
    category: lang === 'fr' ? article.category_fr : article.category_en,
    content: lang === 'fr' ? article.content_fr : article.content_en,
    author: article.author,
    date: new Date(article.published_at).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }),
    image: article.image_url || getFallbackImage(0),
    featured: article.featured
  });

  const featuredArticle = articles?.find(a => a.featured);
  const regularArticles = articles?.filter(a => !a.featured) || [];

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t.hero}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-6 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Articles State */}
      {!isLoading && (!articles || articles.length === 0) && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <Card className="max-w-lg mx-auto p-12 text-center">
              <Sparkles className="h-16 w-16 mx-auto text-accent mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">{t.noArticles}</h2>
              <p className="text-muted-foreground">{t.noArticlesDesc}</p>
            </Card>
          </div>
        </section>
      )}

      {/* Featured Article */}
      {!isLoading && featuredArticle && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">
              {t.featured}
            </h2>
            <Card className="overflow-hidden shadow-glow hover:shadow-xl transition-all duration-300 animate-slide-up border-2 border-transparent hover:border-accent/30">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <img 
                    src={getLocalizedArticle(featuredArticle).image} 
                    alt={getLocalizedArticle(featuredArticle).title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = westtechWorkspace;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      {getLocalizedArticle(featuredArticle).category}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {getLocalizedArticle(featuredArticle).date}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {getLocalizedArticle(featuredArticle).title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {getLocalizedArticle(featuredArticle).excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {getLocalizedArticle(featuredArticle).author}
                    </div>
                    <Link to={`/blog/${featuredArticle.id}`}>
                      <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
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
      {!isLoading && regularArticles.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">
              {t.allArticles}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => {
                const localizedArticle = getLocalizedArticle(article);
                return (
                  <Card 
                    key={article.id}
                    className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up flex flex-col border-2 border-transparent hover:border-accent/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={localizedArticle.image || getFallbackImage(index)}
                        alt={localizedArticle.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = getFallbackImage(index);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                          {localizedArticle.category}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {localizedArticle.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {localizedArticle.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {localizedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="h-3 w-3 mr-1" />
                          {localizedArticle.author}
                        </div>
                        <Link to={`/blog/${article.id}`}>
                          <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80 hover:bg-accent/10">
                            {t.readMore} <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer lang={lang} />
    </div>
  );
};

export default BlogPage;
