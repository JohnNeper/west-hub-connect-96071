import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LogOut, FileText, Users, Plus, Trash2, Edit2, Eye, EyeOff } from "lucide-react";
import logo from "@/assets/west-digital-hub-logo.png";
import BlogArticleForm from "@/components/admin/BlogArticleForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface BlogArticle {
  id: string;
  title_fr: string;
  title_en: string;
  excerpt_fr: string;
  excerpt_en: string;
  content_fr: string;
  content_en: string;
  category_fr: string;
  category_en: string;
  author: string;
  image_url: string | null;
  featured: boolean;
  published: boolean;
  published_at: string;
  created_at: string;
}

interface UpeeRegistration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  university: string;
  field_of_study: string;
  domain: string;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [registrations, setRegistrations] = useState<UpeeRegistration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState<BlogArticle | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
      return;
    }

    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .single();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate('/admin/login');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      // Fetch articles (using service role implicitly through RLS for admin)
      const { data: articlesData, error: articlesError } = await supabase
        .from('blog_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (articlesError) throw articlesError;
      setArticles(articlesData || []);

      // Fetch UPEE registrations
      const { data: registrationsData, error: registrationsError } = await supabase
        .from('upee_registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (registrationsError) throw registrationsError;
      setRegistrations(registrationsData || []);
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;

    try {
      const { error } = await supabase
        .from('blog_articles')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Article supprimé",
        description: "L'article a été supprimé avec succès",
      });

      fetchData();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleTogglePublished = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_articles')
        .update({ published: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: currentStatus ? "Article masqué" : "Article publié",
        description: currentStatus ? "L'article n'est plus visible" : "L'article est maintenant visible",
      });

      fetchData();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleFormSuccess = () => {
    setIsFormOpen(false);
    setEditingArticle(null);
    fetchData();
  };

  const domainLabels: Record<string, string> = {
    'development': 'Développement',
    'cybersecurity': 'Cybersécurité',
    'data-ai': 'Data/IA',
    'design': 'Design',
    'marketing': 'Marketing Digital',
    'cloud': 'Cloud',
    'it-support': 'Support IT'
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/">
              <img src={logo} alt="West Digital Hub" className="h-12" />
            </a>
            <div>
              <h1 className="text-xl font-bold text-foreground">Administration</h1>
              <p className="text-sm text-muted-foreground">Gérez votre contenu</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" /> Déconnexion
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" /> Articles ({articles.length})
            </TabsTrigger>
            <TabsTrigger value="registrations" className="flex items-center gap-2">
              <Users className="h-4 w-4" /> UPEE ({registrations.length})
            </TabsTrigger>
          </TabsList>

          {/* Articles Tab */}
          <TabsContent value="articles" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">Articles du Blog</h2>
              <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setEditingArticle(null)}>
                    <Plus className="h-4 w-4 mr-2" /> Nouvel article
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingArticle ? "Modifier l'article" : "Nouvel article"}
                    </DialogTitle>
                  </DialogHeader>
                  <BlogArticleForm 
                    article={editingArticle} 
                    onSuccess={handleFormSuccess}
                    onCancel={() => setIsFormOpen(false)}
                  />
                </DialogContent>
              </Dialog>
            </div>

            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">Chargement...</div>
            ) : articles.length === 0 ? (
              <Card className="p-12 text-center">
                <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Aucun article</h3>
                <p className="text-muted-foreground mb-4">Commencez par créer votre premier article</p>
              </Card>
            ) : (
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titre</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Auteur</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {articles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell className="font-medium">
                          {article.title_fr}
                          {article.featured && (
                            <Badge variant="secondary" className="ml-2">À la une</Badge>
                          )}
                        </TableCell>
                        <TableCell>{article.category_fr}</TableCell>
                        <TableCell>{article.author}</TableCell>
                        <TableCell>
                          <Badge variant={article.published ? "default" : "outline"}>
                            {article.published ? "Publié" : "Brouillon"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(article.published_at).toLocaleDateString('fr-FR')}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleTogglePublished(article.id, article.published)}
                              title={article.published ? "Masquer" : "Publier"}
                            >
                              {article.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                setEditingArticle(article as any);
                                setIsFormOpen(true);
                              }}
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteArticle(article.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )}
          </TabsContent>

          {/* UPEE Registrations Tab */}
          <TabsContent value="registrations" className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Inscriptions UPEE</h2>

            {isLoading ? (
              <div className="text-center py-12 text-muted-foreground">Chargement...</div>
            ) : registrations.length === 0 ? (
              <Card className="p-12 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Aucune inscription</h3>
                <p className="text-muted-foreground">Les inscriptions apparaîtront ici</p>
              </Card>
            ) : (
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Téléphone</TableHead>
                      <TableHead>Université</TableHead>
                      <TableHead>Domaine</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.full_name}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.phone}</TableCell>
                        <TableCell>{reg.university}</TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {domainLabels[reg.domain] || reg.domain}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(reg.created_at).toLocaleDateString('fr-FR')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
