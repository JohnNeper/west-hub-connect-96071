import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactProps {
  lang: 'fr' | 'en';
}

const Contact = ({ lang }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const content = {
    fr: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes à votre écoute",
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      messagePlaceholder: "Votre message...",
      submit: "Envoyer",
      success: "Message envoyé!",
      successDesc: "Nous vous répondrons dans les plus brefs délais.",
      location: "Localisation",
      locationText: "Bafoussam, Région de l'Ouest, Cameroun",
      contactEmail: "Email",
      contactPhone: "Téléphone"
    },
    en: {
      title: "Contact Us",
      subtitle: "We're here to help",
      name: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      messagePlaceholder: "Your message...",
      submit: "Send",
      success: "Message sent!",
      successDesc: "We'll get back to you as soon as possible.",
      location: "Location",
      locationText: "Bafoussam, West Region, Cameroon",
      contactEmail: "Email",
      contactPhone: "Phone"
    }
  };

  const t = content[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.success, {
      description: t.successDesc
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up">
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.location}</h3>
                  <p className="text-muted-foreground">{t.locationText}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.contactEmail}</h3>
                  <a href="mailto:contact@westhub.cm" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@westhub.cm
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.contactPhone}</h3>
                  <a href="tel:+237" className="text-muted-foreground hover:text-primary transition-colors">
                    +237 XXX XXX XXX
                  </a>
                </div>
              </div>
            </Card>

            {/* Google Maps Placeholder */}
            <Card className="overflow-hidden shadow-card">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <MapPin className="h-12 w-12 text-muted-foreground" />
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{t.name}</Label>
                <Input
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">{t.email}</Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">{t.subject}</Label>
                <Input
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">{t.message}</Label>
                <Textarea
                  id="contact-message"
                  rows={6}
                  placeholder={t.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                {t.submit}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
