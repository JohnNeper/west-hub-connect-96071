import { useParams, Link, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, User, ArrowLeft, Heart, MessageCircle, Send, Share2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import westtechWorkspace from "@/assets/westtech-workspace.jpeg";

const BlogArticlePage = () => {
  const { id } = useParams();
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: "Jean Dupont", text: "Excellent article ! Très inspirant.", date: "16 Mars 2024" },
    { id: 2, author: "Marie Kamdem", text: "Merci pour ces informations précieuses.", date: "16 Mars 2024" }
  ]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const { toast } = useToast();

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  // Fetch article from Supabase
  const { data: article, isLoading, error } = useQuery({
    queryKey: ['blog-article', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_articles')
        .select('*')
        .eq('id', id)
        .eq('published', true)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!id
  });

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    toast({
      description: isLiked ? (lang === 'fr' ? "Like retiré" : "Like removed") : (lang === 'fr' ? "Article aimé !" : "Article liked!"),
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      description: lang === 'fr' ? "Lien copié !" : "Link copied!",
    });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.text) {
      const comment = {
        id: comments.length + 1,
        author: newComment.name,
        text: newComment.text,
        date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      };
      setComments([...comments, comment]);
      setNewComment({ name: "", text: "" });
      toast({
        description: lang === 'fr' ? "Commentaire ajouté avec succès !" : "Comment added successfully!",
      });
    }
  };

  const content = {
    fr: {
      back: "Retour au blog",
      comments: "Commentaires",
      addComment: "Ajouter un commentaire",
      yourName: "Votre nom",
      yourComment: "Votre commentaire",
      submit: "Publier",
      share: "Partager",
      notFound: "Article non trouvé",
      notFoundDesc: "L'article que vous recherchez n'existe pas.",
      loading: "Chargement..."
    },
    en: {
      back: "Back to blog",
      comments: "Comments",
      addComment: "Add a comment",
      yourName: "Your name",
      yourComment: "Your comment",
      submit: "Submit",
      share: "Share",
      notFound: "Article not found",
      notFoundDesc: "The article you're looking for doesn't exist.",
      loading: "Loading..."
    }
  };

  const t = content[lang];

  // Get localized content
  const getLocalizedContent = () => {
    if (!article) return null;
    return {
      title: lang === 'fr' ? article.title_fr : article.title_en,
      excerpt: lang === 'fr' ? article.excerpt_fr : article.excerpt_en,
      content: lang === 'fr' ? article.content_fr : article.content_en,
      category: lang === 'fr' ? article.category_fr : article.category_en,
      author: article.author,
      date: new Date(article.published_at).toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      image: article.image_url || westtechWorkspace
    };
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navigation lang={lang} toggleLang={toggleLang} />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Skeleton className="h-8 w-32 mb-8" />
            <Skeleton className="h-80 w-full rounded-2xl mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </section>
        <Footer lang={lang} />
      </div>
    );
  }

  // Not found state
  if (error || !article) {
    return (
      <div className="min-h-screen">
        <Navigation lang={lang} toggleLang={toggleLang} />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6">
            <Card className="max-w-lg mx-auto p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t.notFound}</h2>
              <p className="text-muted-foreground mb-6">{t.notFoundDesc}</p>
              <Link to="/blog">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <ArrowLeft className="mr-2 h-4 w-4" /> {t.back}
                </Button>
              </Link>
            </Card>
          </div>
        </section>
        <Footer lang={lang} />
      </div>
    );
  }

  const localizedContent = getLocalizedContent();
  if (!localizedContent) return null;

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />
      
      {/* Article Header */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" /> {t.back}
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden mb-8 shadow-glow">
              <img 
                src={localizedContent.image}
                alt={localizedContent.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = westtechWorkspace;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-bold rounded-full mb-4">
                  {localizedContent.category}
                </span>
              </div>
            </div>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {localizedContent.date}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {localizedContent.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {localizedContent.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {localizedContent.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none 
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:my-4
                  prose-li:mb-2
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: localizedContent.content }}
              />
            </Card>

            {/* Actions */}
            <div className="flex items-center justify-between mt-8 py-6 border-t border-b border-border">
              <div className="flex items-center gap-4">
                <Button 
                  variant={isLiked ? "default" : "outline"}
                  onClick={handleLike}
                  className={isLiked ? "bg-accent text-accent-foreground" : ""}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {likes}
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  {t.share}
                </Button>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MessageCircle className="h-4 w-4 mr-2" />
                {comments.length} {t.comments}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">{t.comments}</h2>
            
            {/* Existing Comments */}
            <div className="space-y-6 mb-12">
              {comments.map((comment) => (
                <Card key={comment.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-semibold text-foreground">{comment.author}</span>
                        <span className="text-sm text-muted-foreground">{comment.date}</span>
                      </div>
                      <p className="text-muted-foreground">{comment.text}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Add Comment Form */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t.addComment}</h3>
              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <Input 
                  placeholder={t.yourName}
                  value={newComment.name}
                  onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                  required
                />
                <Textarea 
                  placeholder={t.yourComment}
                  value={newComment.text}
                  onChange={(e) => setNewComment({...newComment, text: e.target.value})}
                  rows={4}
                  required
                />
                <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Send className="h-4 w-4 mr-2" />
                  {t.submit}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default BlogArticlePage;
