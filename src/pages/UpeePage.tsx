import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { GraduationCap, Building2, Users, Briefcase, Code, Shield, Database, Palette, Megaphone, Cloud, Headphones, CheckCircle2, ArrowRight, Phone, Globe2, Target, Award, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import upeeImage from "@/assets/upee-program.png";

const UpeePage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    university: "",
    field_of_study: "",
    domain: "",
    motivation: ""
  });
  const { toast } = useToast();

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const content = {
    fr: {
      hero: "Programme UPEE",
      heroSubtitle: "Un Pied à l'École, Un Pied en Entreprise",
      tagline: "Le diplôme seul ne suffit plus. L'expérience fait la différence.",
      description: "Un programme innovant du West Digital Hub qui permet aux étudiants de combiner études académiques et expérience professionnelle concrète dans les entreprises tech de la région.",
      whatIs: "C'est quoi UPEE ?",
      whatIsDesc: "UPEE (Un Pied à l'École, Un Pied en Entreprise) est un programme d'alternance innovant qui connecte les étudiants camerounais au monde professionnel AVANT la fin de leurs études.",
      benefits: [
        "Travailler sur de vrais projets d'entreprise",
        "Obtenir des stages & recommandations",
        "Construire un CV + portfolio solides",
        "Accéder à des opportunités d'emploi",
        "Être connecté au monde professionnel AVANT la fin des études"
      ],
      domains: "Domaines Concernés",
      domainsList: [
        { name: "Développement", icon: Code },
        { name: "Cybersécurité", icon: Shield },
        { name: "Data/IA", icon: Database },
        { name: "Design", icon: Palette },
        { name: "Marketing Digital", icon: Megaphone },
        { name: "Cloud", icon: Cloud },
        { name: "Support IT", icon: Headphones }
      ],
      impact: "Impact & Objectifs",
      impactItems: [
        { title: "Réduire le chômage jeune", desc: "Préparer les étudiants au marché de l'emploi avant même l'obtention de leur diplôme" },
        { title: "Développer l'écosystème tech", desc: "Former une main d'œuvre qualifiée pour les entreprises de la région Ouest" },
        { title: "Innovation sociale", desc: "Un modèle reproductible et scalable pour d'autres régions d'Afrique" }
      ],
      partners: "Partenaires Potentiels",
      partnersDesc: "Ce programme est ouvert aux partenariats avec des organismes internationaux pour le financement et l'accompagnement.",
      cost: "Coût Étudiant",
      costAmount: "30 000 FCFA / mois",
      placesLimited: "Places limitées — Démarrage immédiat",
      registerTitle: "Rejoindre le Programme UPEE",
      form: {
        fullName: "Nom complet",
        email: "Adresse email",
        phone: "Téléphone",
        university: "Université / École",
        fieldOfStudy: "Filière d'études",
        domain: "Domaine souhaité",
        motivation: "Motivation (optionnel)",
        submit: "S'inscrire au Programme",
        selectDomain: "Sélectionner un domaine"
      },
      success: "Inscription envoyée !",
      successDesc: "Nous vous contacterons très bientôt pour la suite du processus.",
      error: "Erreur lors de l'inscription",
      errorDesc: "Veuillez réessayer ou nous contacter directement."
    },
    en: {
      hero: "UPEE Program",
      heroSubtitle: "One Foot in School, One Foot in Business",
      tagline: "A diploma alone is no longer enough. Experience makes the difference.",
      description: "An innovative program by West Digital Hub that allows students to combine academic studies with real professional experience in the region's tech companies.",
      whatIs: "What is UPEE?",
      whatIsDesc: "UPEE (Un Pied à l'École, Un Pied en Entreprise) is an innovative work-study program that connects Cameroonian students to the professional world BEFORE they finish their studies.",
      benefits: [
        "Work on real business projects",
        "Get internships & recommendations",
        "Build a solid CV + portfolio",
        "Access job opportunities",
        "Be connected to the professional world BEFORE graduation"
      ],
      domains: "Fields Covered",
      domainsList: [
        { name: "Development", icon: Code },
        { name: "Cybersecurity", icon: Shield },
        { name: "Data/AI", icon: Database },
        { name: "Design", icon: Palette },
        { name: "Digital Marketing", icon: Megaphone },
        { name: "Cloud", icon: Cloud },
        { name: "IT Support", icon: Headphones }
      ],
      impact: "Impact & Goals",
      impactItems: [
        { title: "Reduce youth unemployment", desc: "Prepare students for the job market before they even graduate" },
        { title: "Develop the tech ecosystem", desc: "Train a skilled workforce for businesses in the West region" },
        { title: "Social innovation", desc: "A replicable and scalable model for other African regions" }
      ],
      partners: "Potential Partners",
      partnersDesc: "This program is open to partnerships with international organizations for funding and support.",
      cost: "Student Cost",
      costAmount: "30,000 FCFA / month",
      placesLimited: "Limited spots — Immediate start",
      registerTitle: "Join the UPEE Program",
      form: {
        fullName: "Full name",
        email: "Email address",
        phone: "Phone number",
        university: "University / School",
        fieldOfStudy: "Field of study",
        domain: "Desired field",
        motivation: "Motivation (optional)",
        submit: "Register for the Program",
        selectDomain: "Select a field"
      },
      success: "Registration sent!",
      successDesc: "We will contact you very soon for the next steps.",
      error: "Registration error",
      errorDesc: "Please try again or contact us directly."
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('upee_registrations')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: t.success,
        description: t.successDesc,
      });

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        university: "",
        field_of_study: "",
        domain: "",
        motivation: ""
      });
    } catch (error) {
      toast({
        title: t.error,
        description: t.errorDesc,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-accent/20 via-primary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
                <GraduationCap className="h-5 w-5 text-accent" />
                <span className="text-sm font-semibold text-accent">{t.hero}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                <span className="text-primary">1 Pied</span> à l'École
                <br />
                <span className="text-accent">1 Pied</span> en Entreprise
              </h1>
              <p className="text-xl text-muted-foreground mb-6 italic">
                {t.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
                >
                  {t.form.submit} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="https://wa.me/237657977372" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    <Phone className="mr-2 h-5 w-5" /> WhatsApp
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src={upeeImage} 
                alt="Programme UPEE" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is UPEE */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.whatIs}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.whatIsDesc}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            {t.domains}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {t.domainsList.map((domain, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <domain.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                <p className="font-semibold text-foreground text-sm">{domain.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section - For International Organizations */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.impact}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.impactItems.map((item, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-glow transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  {index === 0 && <Target className="h-8 w-8 text-accent" />}
                  {index === 1 && <Award className="h-8 w-8 text-accent" />}
                  {index === 2 && <Globe2 className="h-8 w-8 text-accent" />}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          {/* Partners Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-dashed border-primary/20 animate-fade-in">
            <div className="text-center">
              <div className="flex justify-center gap-6 mb-6 flex-wrap">
                <div className="px-4 py-2 bg-background rounded-lg shadow-sm font-semibold text-muted-foreground">UNDP</div>
                <div className="px-4 py-2 bg-background rounded-lg shadow-sm font-semibold text-muted-foreground">GIZ</div>
                <div className="px-4 py-2 bg-background rounded-lg shadow-sm font-semibold text-muted-foreground">UNESCO</div>
                <div className="px-4 py-2 bg-background rounded-lg shadow-sm font-semibold text-muted-foreground">AFD</div>
                <div className="px-4 py-2 bg-background rounded-lg shadow-sm font-semibold text-muted-foreground">BAD</div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t.partners}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                {t.partnersDesc}
              </p>
              <a href="mailto:contact@westtechs.org">
                <Button variant="outline" size="lg" className="rounded-full">
                  <BookOpen className="mr-2 h-5 w-5" />
                  {lang === 'fr' ? 'Devenir Partenaire' : 'Become a Partner'}
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <p className="text-accent-foreground/80 text-lg mb-2">{t.cost}</p>
            <p className="text-4xl md:text-5xl font-bold text-accent-foreground mb-4">{t.costAmount}</p>
            <p className="text-accent-foreground/80">{t.placesLimited}</p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.registerTitle}
              </h2>
            </div>
            
            <Card className="p-8 shadow-glow animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">{t.form.fullName} *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.form.email} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.form.phone} *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+237 6XX XXX XXX"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">{t.form.university} *</Label>
                    <Input
                      id="university"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="field_of_study">{t.form.fieldOfStudy} *</Label>
                    <Input
                      id="field_of_study"
                      value={formData.field_of_study}
                      onChange={(e) => setFormData({ ...formData, field_of_study: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="domain">{t.form.domain} *</Label>
                    <Select
                      value={formData.domain}
                      onValueChange={(value) => setFormData({ ...formData, domain: value })}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.form.selectDomain} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">{lang === 'fr' ? 'Développement' : 'Development'}</SelectItem>
                        <SelectItem value="cybersecurity">{lang === 'fr' ? 'Cybersécurité' : 'Cybersecurity'}</SelectItem>
                        <SelectItem value="data-ai">Data/IA</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">{lang === 'fr' ? 'Marketing Digital' : 'Digital Marketing'}</SelectItem>
                        <SelectItem value="cloud">Cloud</SelectItem>
                        <SelectItem value="it-support">Support IT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">{t.form.motivation}</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                    rows={4}
                    placeholder={lang === 'fr' ? 'Pourquoi souhaitez-vous rejoindre le programme UPEE ?' : 'Why do you want to join the UPEE program?'}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...') : t.form.submit}
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

export default UpeePage;
