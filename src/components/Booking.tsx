import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Calendar, Clock, MapPin, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface BookingProps {
  lang: 'fr' | 'en';
}

const Booking = ({ lang }: BookingProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    spaceType: "",
    date: "",
    duration: "",
    message: ""
  });

  const content = {
    fr: {
      title: "Réservez Votre Espace",
      subtitle: "Prenez rendez-vous ou réservez un espace en quelques clics",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      spaceType: "Type d'espace",
      selectSpace: "Sélectionnez un espace",
      spaces: {
        office: "Bureau Privé (à partir de 50 000 FCFA/mois)",
        coworking: "Espace Coworking (15 000 FCFA/jour)",
        meeting: "Salle de Réunion (25 000 FCFA/jour)",
        consulting: "Consultation Stratégie Digitale (sur devis)"
      },
      date: "Date souhaitée",
      duration: "Durée",
      selectDuration: "Sélectionnez la durée",
      durations: {
        hour: "1 heure",
        halfDay: "Demi-journée",
        day: "Journée complète",
        week: "1 semaine",
        month: "1 mois"
      },
      message: "Message (optionnel)",
      messagePlaceholder: "Décrivez vos besoins spécifiques...",
      submit: "Envoyer la demande",
      success: "Demande envoyée avec succès!",
      successDesc: "Nous vous contacterons sous peu.",
      info1: "Situé à Bafoussam",
      info2: "Horaires flexibles",
      info3: "Réponse sous 24h"
    },
    en: {
      title: "Book Your Space",
      subtitle: "Schedule an appointment or book a space in a few clicks",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      spaceType: "Space Type",
      selectSpace: "Select a space",
      spaces: {
        office: "Private Office (from 50,000 FCFA/month)",
        coworking: "Coworking Space (15,000 FCFA/day)",
        meeting: "Meeting Room (25,000 FCFA/day)",
        consulting: "Digital Strategy Consultation (quote based)"
      },
      date: "Desired Date",
      duration: "Duration",
      selectDuration: "Select duration",
      durations: {
        hour: "1 hour",
        halfDay: "Half day",
        day: "Full day",
        week: "1 week",
        month: "1 month"
      },
      message: "Message (optional)",
      messagePlaceholder: "Describe your specific needs...",
      submit: "Send Request",
      success: "Request sent successfully!",
      successDesc: "We will contact you shortly.",
      info1: "Located in Bafoussam",
      info2: "Flexible hours",
      info3: "Response within 24h"
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke('send-booking', {
        body: { ...formData, lang }
      });

      if (error) throw error;

      toast.success(t.success, {
        description: t.successDesc
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        spaceType: "",
        date: "",
        duration: "",
        message: ""
      });
    } catch (error) {
      console.error("Booking error:", error);
      toast.error(lang === 'fr' ? "Erreur" : "Error", {
        description: lang === 'fr' 
          ? "Une erreur est survenue. Veuillez réessayer." 
          : "An error occurred. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-card animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.name}</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spaceType">{t.spaceType}</Label>
                    <Select
                      value={formData.spaceType}
                      onValueChange={(value) => setFormData({ ...formData, spaceType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.selectSpace} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">{t.spaces.office}</SelectItem>
                        <SelectItem value="coworking">{t.spaces.coworking}</SelectItem>
                        <SelectItem value="meeting">{t.spaces.meeting}</SelectItem>
                        <SelectItem value="consulting">{t.spaces.consulting}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date">{t.date}</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">{t.duration}</Label>
                    <Select
                      value={formData.duration}
                      onValueChange={(value) => setFormData({ ...formData, duration: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.selectDuration} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hour">{t.durations.hour}</SelectItem>
                        <SelectItem value="halfDay">{t.durations.halfDay}</SelectItem>
                        <SelectItem value="day">{t.durations.day}</SelectItem>
                        <SelectItem value="week">{t.durations.week}</SelectItem>
                        <SelectItem value="month">{t.durations.month}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.message}</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {lang === 'fr' ? 'Envoi...' : 'Sending...'}
                    </>
                  ) : (
                    t.submit
                  )}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.info1}</h3>
                  <p className="text-sm text-muted-foreground">Bafoussam, Région de l'Ouest, Cameroun</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.info2}</h3>
                  <p className="text-sm text-muted-foreground">Lun - Sam: 8h - 20h</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{t.info3}</h3>
                  <p className="text-sm text-muted-foreground">contact@westhub.cm</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
