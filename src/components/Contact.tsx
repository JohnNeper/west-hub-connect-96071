import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2, Linkedin, MessageCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ContactProps {
  lang: 'fr' | 'en';
}

const Contact = ({ lang }: ContactProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const content = {
    fr: {
      badge: "CONTACTEZ-NOUS",
      title: "Work With Us",
      subtitle: "Parlez-nous de votre projet. Notre équipe vous répondra sous 24h.",
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      messagePlaceholder: "Décrivez votre projet ou besoin...",
      submit: "Envoyer le message",
      success: "Message envoyé!",
      successDesc: "Nous vous répondrons dans les plus brefs délais.",
      or: "Ou contactez-nous directement",
    },
    en: {
      badge: "CONTACT US",
      title: "Work With Us",
      subtitle: "Tell us about your project. Our team will respond within 24h.",
      name: "Full Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      messagePlaceholder: "Describe your project or need...",
      submit: "Send Message",
      success: "Message sent!",
      successDesc: "We'll get back to you as soon as possible.",
      or: "Or contact us directly",
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact', {
        body: { ...formData, lang }
      });
      if (error) throw error;
      toast.success(t.success, { description: t.successDesc });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact error:", error);
      toast.error(lang === 'fr' ? "Erreur" : "Error", {
        description: lang === 'fr' ? "Une erreur est survenue." : "An error occurred."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const directContacts = [
    { icon: Mail, label: "contact@westtechs.org", href: "mailto:contact@westtechs.org" },
    { icon: Phone, label: "+237 658 315 610", href: "tel:+237658315610" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/237658315610" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/westdigitalhub" },
    { icon: MapPin, label: "Bafoussam, Cameroun", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-accent/20 text-accent rounded-full font-bold text-xs tracking-widest mb-6">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">{t.title}</h2>
          <p className="text-lg text-background/50 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <Card className="p-8 rounded-2xl bg-background text-foreground border-0">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{t.name}</Label>
                <Input id="contact-name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">{t.email}</Label>
                <Input id="contact-email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject">{t.subject}</Label>
                <Input id="contact-subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">{t.message}</Label>
                <Textarea id="contact-message" rows={5} placeholder={t.messagePlaceholder} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full" disabled={isLoading}>
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />{lang === 'fr' ? 'Envoi...' : 'Sending...'}</> : <>{t.submit} <ArrowRight className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </Card>

          {/* Direct contacts */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-bold text-background/70 mb-2">{t.or}</h3>
            {directContacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-background/10 bg-background/5 hover:bg-background/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="font-medium text-background/80 group-hover:text-accent transition-colors">{c.label}</span>
              </a>
            ))}

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-background/10 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127172.08245845685!2d10.352485!3d5.478394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f31ea3a50b823%3A0x8e4faa8cd2c8b0e5!2sBafoussam%2C%20Cameroon!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
