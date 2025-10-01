import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Users, Loader2 } from "lucide-react";

interface JoinCommunityDialogProps {
  children?: React.ReactNode;
  triggerText?: string;
  lang?: 'fr' | 'en';
}

const JoinCommunityDialog = ({ children, triggerText, lang = 'fr' }: JoinCommunityDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    interests: "",
    message: ""
  });

  const content = {
    fr: {
      title: "Rejoindre la Communauté",
      description: "Remplissez ce formulaire pour faire partie de l'écosystème West Hub Innovation",
      name: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      occupation: "Profession / Statut",
      occupationPlaceholder: "Ex: Développeur, Entrepreneur, Étudiant...",
      interests: "Centres d'intérêt",
      interestsPlaceholder: "Ex: IA, Web Dev, Fintech, Agritech...",
      message: "Message (optionnel)",
      messagePlaceholder: "Dites-nous en plus sur vos projets et attentes...",
      submit: "Rejoindre la communauté",
      submitting: "Envoi en cours...",
      successTitle: "Bienvenue dans la communauté !",
      successDescription: "Votre demande a été enregistrée. Rejoignez maintenant notre groupe WhatsApp pour rester connecté.",
      joinWhatsApp: "Rejoindre le groupe WhatsApp",
      errorTitle: "Erreur",
      errorDescription: "Une erreur s'est produite. Veuillez réessayer.",
      selectOccupation: "Sélectionnez votre statut",
      developer: "Développeur",
      entrepreneur: "Entrepreneur",
      student: "Étudiant",
      designer: "Designer",
      marketer: "Marketing",
      investor: "Investisseur",
      other: "Autre"
    },
    en: {
      title: "Join the Community",
      description: "Fill out this form to become part of the West Hub Innovation ecosystem",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      occupation: "Profession / Status",
      occupationPlaceholder: "E.g.: Developer, Entrepreneur, Student...",
      interests: "Interests",
      interestsPlaceholder: "E.g.: AI, Web Dev, Fintech, Agritech...",
      message: "Message (optional)",
      messagePlaceholder: "Tell us more about your projects and expectations...",
      submit: "Join the community",
      submitting: "Submitting...",
      successTitle: "Welcome to the community!",
      successDescription: "Your request has been registered. Now join our WhatsApp group to stay connected.",
      joinWhatsApp: "Join WhatsApp group",
      errorTitle: "Error",
      errorDescription: "An error occurred. Please try again.",
      selectOccupation: "Select your status",
      developer: "Developer",
      entrepreneur: "Entrepreneur",
      student: "Student",
      designer: "Designer",
      marketer: "Marketing",
      investor: "Investor",
      other: "Other"
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation de l'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t.successTitle,
        description: t.successDescription,
      });

      // Redirection vers WhatsApp après 1 seconde
      setTimeout(() => {
        const whatsappMessage = encodeURIComponent(
          `Bonjour! Je suis ${formData.name} et je souhaite rejoindre la communauté West Hub Innovation.`
        );
        window.open(`https://wa.me/237658315610?text=${whatsappMessage}`, '_blank');
        setOpen(false);
        // Réinitialiser le formulaire
        setFormData({
          name: "",
          email: "",
          phone: "",
          occupation: "",
          interests: "",
          message: ""
        });
      }, 1000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Users className="mr-2 h-4 w-4" />
            {triggerText || t.title}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            {t.title}
          </DialogTitle>
          <DialogDescription>{t.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t.name} *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t.email} *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t.phone} *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+237 6XX XX XX XX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="occupation">{t.occupation} *</Label>
            <Select 
              required 
              value={formData.occupation}
              onValueChange={(value) => handleChange("occupation", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t.selectOccupation} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">{t.developer}</SelectItem>
                <SelectItem value="entrepreneur">{t.entrepreneur}</SelectItem>
                <SelectItem value="student">{t.student}</SelectItem>
                <SelectItem value="designer">{t.designer}</SelectItem>
                <SelectItem value="marketer">{t.marketer}</SelectItem>
                <SelectItem value="investor">{t.investor}</SelectItem>
                <SelectItem value="other">{t.other}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="interests">{t.interests} *</Label>
            <Input
              id="interests"
              required
              value={formData.interests}
              onChange={(e) => handleChange("interests", e.target.value)}
              placeholder={t.interestsPlaceholder}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder={t.messagePlaceholder}
              rows={3}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t.submitting}
              </>
            ) : (
              <>
                <Users className="mr-2 h-4 w-4" />
                {t.submit}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JoinCommunityDialog;