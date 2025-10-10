import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface NewsletterProps {
  lang: 'fr' | 'en';
}

const Newsletter = ({ lang }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    fr: {
      title: "Restez Informé",
      subtitle: "Abonnez-vous à notre newsletter pour recevoir nos actualités et événements",
      placeholder: "Votre email",
      button: "S'abonner",
      success: "Abonnement réussi!",
      successDesc: "Merci de vous être abonné à notre newsletter.",
      error: "Erreur",
      errorDesc: "Une erreur est survenue. Veuillez réessayer."
    },
    en: {
      title: "Stay Informed",
      subtitle: "Subscribe to our newsletter to receive our news and events",
      placeholder: "Your email",
      button: "Subscribe",
      success: "Subscription successful!",
      successDesc: "Thank you for subscribing to our newsletter.",
      error: "Error",
      errorDesc: "An error occurred. Please try again."
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-newsletter', {
        body: { email, lang }
      });

      if (error) throw error;

      toast.success(t.success, {
        description: t.successDesc
      });
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error(t.error, {
        description: t.errorDesc
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t.subtitle}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder={t.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {lang === 'fr' ? 'Envoi...' : 'Sending...'}
                </>
              ) : (
                t.button
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
