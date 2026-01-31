import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface BlogArticle {
  id?: string;
  title_fr: string;
  title_en: string;
  excerpt_fr: string;
  excerpt_en: string;
  content_fr: string;
  content_en: string;
  category_fr: string;
  category_en: string;
  author: string;
  image_url: string;
  featured: boolean;
  published: boolean;
  published_at: string;
}

interface BlogArticleFormProps {
  article?: BlogArticle | null;
  onSuccess: () => void;
  onCancel: () => void;
}

const BlogArticleForm = ({ article, onSuccess, onCancel }: BlogArticleFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Omit<BlogArticle, 'id'>>({
    title_fr: article?.title_fr || "",
    title_en: article?.title_en || "",
    excerpt_fr: article?.excerpt_fr || "",
    excerpt_en: article?.excerpt_en || "",
    content_fr: article?.content_fr || "",
    content_en: article?.content_en || "",
    category_fr: article?.category_fr || "",
    category_en: article?.category_en || "",
    author: article?.author || "",
    image_url: article?.image_url || "",
    featured: article?.featured || false,
    published: article?.published ?? true,
    published_at: article?.published_at || new Date().toISOString(),
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (article?.id) {
        // Update existing article
        const { error } = await supabase
          .from('blog_articles')
          .update(formData)
          .eq('id', article.id);

        if (error) throw error;

        toast({
          title: "Article mis à jour",
          description: "Les modifications ont été enregistrées",
        });
      } else {
        // Create new article
        const { error } = await supabase
          .from('blog_articles')
          .insert([formData]);

        if (error) throw error;

        toast({
          title: "Article créé",
          description: "L'article a été publié avec succès",
        });
      }

      onSuccess();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="fr" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="fr">🇫🇷 Français</TabsTrigger>
          <TabsTrigger value="en">🇬🇧 English</TabsTrigger>
        </TabsList>

        <TabsContent value="fr" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title_fr">Titre *</Label>
            <Input
              id="title_fr"
              value={formData.title_fr}
              onChange={(e) => setFormData({ ...formData, title_fr: e.target.value })}
              placeholder="Titre de l'article"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt_fr">Extrait *</Label>
            <Textarea
              id="excerpt_fr"
              value={formData.excerpt_fr}
              onChange={(e) => setFormData({ ...formData, excerpt_fr: e.target.value })}
              placeholder="Courte description de l'article"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content_fr">Contenu *</Label>
            <Textarea
              id="content_fr"
              value={formData.content_fr}
              onChange={(e) => setFormData({ ...formData, content_fr: e.target.value })}
              placeholder="Contenu complet de l'article (supporte le Markdown)"
              rows={10}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category_fr">Catégorie *</Label>
            <Input
              id="category_fr"
              value={formData.category_fr}
              onChange={(e) => setFormData({ ...formData, category_fr: e.target.value })}
              placeholder="Ex: Événement, Annonce, Talk..."
              required
            />
          </div>
        </TabsContent>

        <TabsContent value="en" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title_en">Title *</Label>
            <Input
              id="title_en"
              value={formData.title_en}
              onChange={(e) => setFormData({ ...formData, title_en: e.target.value })}
              placeholder="Article title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt_en">Excerpt *</Label>
            <Textarea
              id="excerpt_en"
              value={formData.excerpt_en}
              onChange={(e) => setFormData({ ...formData, excerpt_en: e.target.value })}
              placeholder="Short article description"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content_en">Content *</Label>
            <Textarea
              id="content_en"
              value={formData.content_en}
              onChange={(e) => setFormData({ ...formData, content_en: e.target.value })}
              placeholder="Full article content (supports Markdown)"
              rows={10}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category_en">Category *</Label>
            <Input
              id="category_en"
              value={formData.category_en}
              onChange={(e) => setFormData({ ...formData, category_en: e.target.value })}
              placeholder="Ex: Event, Announcement, Talk..."
              required
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Common fields */}
      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
        <div className="space-y-2">
          <Label htmlFor="author">Auteur *</Label>
          <Input
            id="author"
            value={formData.author}
            onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            placeholder="Nom de l'auteur"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image_url">URL de l'image</Label>
          <Input
            id="image_url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="published_at">Date de publication</Label>
          <Input
            id="published_at"
            type="date"
            value={formData.published_at.split('T')[0]}
            onChange={(e) => setFormData({ ...formData, published_at: new Date(e.target.value).toISOString() })}
          />
        </div>
      </div>

      <div className="flex items-center gap-6 pt-4 border-t">
        <div className="flex items-center gap-2">
          <Switch
            id="published"
            checked={formData.published}
            onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
          />
          <Label htmlFor="published">Publié</Label>
        </div>

        <div className="flex items-center gap-2">
          <Switch
            id="featured"
            checked={formData.featured}
            onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
          />
          <Label htmlFor="featured">À la une</Label>
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enregistrement..." : (article ? "Mettre à jour" : "Créer l'article")}
        </Button>
      </div>
    </form>
  );
};

export default BlogArticleForm;
