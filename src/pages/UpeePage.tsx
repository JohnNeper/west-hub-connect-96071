import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  GraduationCap, 
  Building2, 
  Users, 
  Briefcase, 
  Code, 
  Shield, 
  Database, 
  Palette, 
  Megaphone, 
  Cloud, 
  Headphones, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calendar,
  Star,
  Handshake,
  Rocket,
  Clock,
  FileText,
  Award,
  TrendingUp,
  Heart,
  Target,
  Zap,
  Globe2,
  BadgeCheck,
  Trophy,
  Lightbulb,
  MapPin,
  Quote,
  BookOpen,
  Coins,
  Gift,
  Sparkles,
  UserCheck,
  CircleDollarSign
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import partnerDimeltech from "@/assets/partner-dimeltech.png";
import partnerKamlewa from "@/assets/partner-kamlewa.jpg";
import partnerAic from "@/assets/partner-aic.png";

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
      heroTitle: "Un Pied à l'École",
      heroTitle2: "Un Pied en Entreprise",
      heroTagline: "Ne sois plus un étudiant comme les autres. Deviens celui que les entreprises recherchent !",
      heroDescription: "Tu es étudiant(e) et tu veux te démarquer ? UPEE te permet d'acquérir une vraie expérience professionnelle pendant tes études, pour que ton CV brille dès la fin de ta formation.",
      ctaJoin: "Je veux rejoindre UPEE",
      ctaWhatsApp: "Poser une question",
      ctaSponsor: "Devenir Sponsor",
      
      // Impact Stats
      impactTitle: "Notre Impact en Chiffres",
      impactSubtitle: "Un programme qui transforme réellement les parcours étudiants",
      stats: [
        { value: "50+", label: "Étudiants Formés", icon: GraduationCap },
        { value: "12", label: "Entreprises Partenaires", icon: Building2 },
        { value: "85%", label: "Taux d'Insertion", icon: TrendingUp },
        { value: "6", label: "Domaines Tech", icon: Lightbulb }
      ],
      
      whatIsTitle: "C'est quoi le Programme UPEE ?",
      whatIsDescription: "UPEE (Un Pied à l'École, Un Pied en Entreprise) est un programme d'alternance innovant créé par West Digital Hub. Le principe est simple :",
      whatIsPoints: [
        "Tu continues tes cours normalement à l'université",
        "En parallèle, tu travailles sur de vrais projets d'entreprise",
        "Tu es encadré(e) par des professionnels expérimentés",
        "Tu construis ton portfolio et ton réseau professionnel"
      ],
      
      // Students in Business Section
      studentsTitle: "Nos Étudiants en Entreprise",
      studentsSubtitle: "Découvre les parcours inspirants de nos étudiants actuellement en mission",
      students: [
        {
          name: "Kevine Nguepi",
          university: "Université de Dschang",
          field: "Informatique L3",
          company: "Dimel Tech",
          role: "Développeuse Web Junior",
          quote: "UPEE m'a permis de passer de la théorie à la pratique. Aujourd'hui, je travaille sur de vrais projets clients !",
          duration: "6 mois"
        },
        {
          name: "Joel Teguia",
          university: "IUT Fotso Victor",
          field: "Génie Informatique",
          company: "Kamlewa Technologie",
          role: "Assistant Cybersécurité",
          quote: "Grâce au programme, j'ai découvert ma passion pour la cybersécurité et acquis des certifications.",
          duration: "4 mois"
        },
        {
          name: "Larissa Momo",
          university: "Université de Dschang",
          field: "Mathématiques-Info M1",
          company: "AIC",
          role: "Stagiaire Data Analyst",
          quote: "L'IA n'était qu'un concept théorique pour moi. Maintenant, je crée des modèles de prédiction réels.",
          duration: "5 mois"
        }
      ],
      studentsMoreText: "Et bien d'autres étudiants qui construisent leur avenir chaque jour...",
      
      whyTitle: "Pourquoi rejoindre UPEE ?",
      whySubtitle: "Parce que le diplôme seul ne suffit plus. Voici ce que tu gagnes :",
      benefits: [
        { 
          icon: Briefcase, 
          title: "Expérience Réelle", 
          desc: "Travaille sur de vrais projets d'entreprises locales et internationales, pas des exercices théoriques." 
        },
        { 
          icon: FileText, 
          title: "CV qui se Démarque", 
          desc: "À la fin du programme, tu auras un portfolio de projets concrets à montrer aux recruteurs." 
        },
        { 
          icon: Users, 
          title: "Réseau Professionnel", 
          desc: "Rencontre des professionnels, des mentors et d'autres étudiants ambitieux comme toi." 
        },
        { 
          icon: TrendingUp, 
          title: "Compétences Recherchées", 
          desc: "Maîtrise les outils et méthodes que les entreprises utilisent vraiment." 
        },
        { 
          icon: Award, 
          title: "Certificat Reconnu", 
          desc: "Obtiens une attestation de West Digital Hub valorisant ton expérience professionnelle." 
        },
        { 
          icon: Rocket, 
          title: "Accès à l'Emploi", 
          desc: "Nos partenaires recrutent en priorité les meilleurs participants du programme." 
        }
      ],
      
      domainsTitle: "Dans quel domaine veux-tu te spécialiser ?",
      domainsSubtitle: "Choisis ton domaine et deviens expert :",
      domainsList: [
        { name: "Développement Web & Mobile", icon: Code, desc: "Crée des applications et sites web modernes" },
        { name: "Cybersécurité", icon: Shield, desc: "Protège les systèmes contre les menaces" },
        { name: "Data & Intelligence Artificielle", icon: Database, desc: "Analyse les données et crée des modèles IA" },
        { name: "Design UI/UX", icon: Palette, desc: "Conçois des interfaces belles et intuitives" },
        { name: "Marketing Digital", icon: Megaphone, desc: "Maîtrise les stratégies de communication en ligne" },
        { name: "Cloud & DevOps", icon: Cloud, desc: "Gère l'infrastructure et le déploiement" },
        { name: "Support IT", icon: Headphones, desc: "Assiste les utilisateurs et résous les problèmes" }
      ],
      
      howTitle: "Comment ça marche ?",
      howSteps: [
        { step: "1", title: "Tu postules", desc: "Remplis le formulaire d'inscription avec ta motivation" },
        { step: "2", title: "Entretien", desc: "On discute ensemble pour comprendre tes objectifs" },
        { step: "3", title: "Tu intègres le programme", desc: "Tu rejoins une équipe et commences les projets" },
        { step: "4", title: "Tu évolues", desc: "Mentorat, formations, et montée en compétences continue" }
      ],
      
      // Sponsor Section
      sponsorTitle: "Soutenez la Jeunesse Tech Camerounaise",
      sponsorSubtitle: "En devenant sponsor UPEE, vous investissez dans l'avenir du numérique africain",
      sponsorDescription: "Le programme UPEE forme les talents tech de demain. Votre soutien nous aide à offrir des opportunités uniques aux étudiants de la région de l'Ouest Cameroun.",
      sponsorBenefits: [
        {
          icon: Globe2,
          title: "Visibilité Régionale",
          desc: "Votre marque associée à l'innovation et à l'éducation tech de l'Ouest"
        },
        {
          icon: UserCheck,
          title: "Accès aux Talents",
          desc: "Recrutez en priorité les meilleurs profils formés par notre programme"
        },
        {
          icon: Heart,
          title: "Impact Social",
          desc: "Contribuez à réduire le chômage des jeunes diplômés au Cameroun"
        },
        {
          icon: Trophy,
          title: "Responsabilité Sociale",
          desc: "Renforcez votre image RSE auprès de votre communauté"
        }
      ],
      sponsorTiers: [
        { name: "Bronze", amount: "200 000 FCFA", features: ["Logo sur le site", "Mention sur les réseaux sociaux", "Rapport d'impact annuel"] },
        { name: "Argent", amount: "500 000 FCFA", features: ["Avantages Bronze +", "Présence aux événements", "2 étudiants dédiés à vos projets"] },
        { name: "Or", amount: "1 000 000 FCFA", features: ["Avantages Argent +", "Naming d'une cohorte", "5 étudiants dédiés", "Partenariat exclusif"] }
      ],
      sponsorCta: "Devenir Sponsor",
      sponsorContact: "Contactez-nous pour discuter de votre partenariat",
      
      partnersTitle: "Nos Entreprises Partenaires",
      partnersSubtitle: "Ces entreprises accueillent nos étudiants et les forment :",
      partnersEmpty: "Espace réservé aux entreprises partenaires",
      becomePartner: "Devenir Entreprise Partenaire",
      becomePartnerDesc: "Vous êtes une entreprise tech ? Rejoignez notre réseau de partenaires et accédez à des talents formés et motivés.",
      
      // Testimonials
      testimonialsTitle: "Ce Qu'ils Disent du Programme",
      testimonialsSubtitle: "Témoignages de nos étudiants et partenaires",
      testimonials: [
        {
          type: "student",
          name: "Blaise Tchakounte",
          role: "Ancien étudiant UPEE, maintenant Développeur chez MTN",
          quote: "UPEE a été le tremplin de ma carrière. 6 mois après le programme, j'ai été recruté grâce aux compétences et au réseau acquis.",
          avatar: "BT"
        },
        {
          type: "company",
          name: "M. Fotso Jean",
          role: "CEO, Dimel Tech",
          quote: "Les étudiants UPEE arrivent avec une vraie capacité d'adaptation. Nous avons déjà intégré 3 anciens participants à notre équipe.",
          avatar: "FJ"
        },
        {
          type: "student",
          name: "Sandrine Kengne",
          role: "Étudiante en Cybersécurité",
          quote: "J'ai appris plus en 4 mois de programme que durant toute ma formation théorique. C'est concret et stimulant !",
          avatar: "SK"
        }
      ],
      
      faqTitle: "Questions Fréquentes",
      faq: [
        { 
          q: "Je suis en quelle année pour postuler ?", 
          a: "UPEE est ouvert aux étudiants de Licence 2 jusqu'au Master 2. L'essentiel c'est ta motivation !" 
        },
        { 
          q: "Combien de temps dure le programme ?", 
          a: "Le programme dure 6 mois minimum, renouvelable. Tu peux rester jusqu'à la fin de tes études." 
        },
        { 
          q: "Ça prend combien de temps par semaine ?", 
          a: "En moyenne 10-15 heures par semaine, adaptées à ton emploi du temps universitaire." 
        },
        { 
          q: "C'est compatible avec mes cours ?", 
          a: "Absolument ! Le programme est conçu pour s'adapter à ton rythme universitaire. Pas de stress." 
        },
        { 
          q: "Est-ce que je suis payé ?", 
          a: "UPEE est un programme de formation. Tu investis en toi-même pour acquérir de l'expérience inestimable." 
        },
        { 
          q: "Comment sont sélectionnés les participants ?", 
          a: "On cherche des étudiants motivés, curieux et prêts à s'investir. Pas besoin d'être un génie, juste d'avoir la volonté d'apprendre." 
        }
      ],
      
      registerTitle: "Prêt(e) à transformer ton avenir ?",
      registerSubtitle: "Inscris-toi maintenant et rejoins les étudiants qui font la différence.",
      form: {
        fullName: "Ton nom complet",
        email: "Ton adresse email",
        phone: "Ton numéro WhatsApp",
        university: "Ton université / école",
        fieldOfStudy: "Ta filière d'études",
        domain: "Domaine qui t'intéresse",
        motivation: "Pourquoi veux-tu rejoindre UPEE ? (Quelques lignes suffisent)",
        submit: "Envoyer ma candidature",
        selectDomain: "Choisis un domaine"
      },
      success: "Candidature envoyée !",
      successDesc: "Super ! On te contacte très bientôt pour la suite. Check tes emails et WhatsApp !",
      error: "Erreur lors de l'envoi",
      errorDesc: "Réessaie ou contacte-nous directement sur WhatsApp."
    },
    en: {
      hero: "UPEE Program",
      heroTitle: "One Foot in School",
      heroTitle2: "One Foot in Business",
      heroTagline: "Don't be just another student. Become the one companies are looking for!",
      heroDescription: "Are you a student who wants to stand out? UPEE lets you gain real professional experience during your studies, so your CV shines from day one.",
      ctaJoin: "I want to join UPEE",
      ctaWhatsApp: "Ask a question",
      ctaSponsor: "Become a Sponsor",
      
      // Impact Stats
      impactTitle: "Our Impact in Numbers",
      impactSubtitle: "A program that truly transforms student careers",
      stats: [
        { value: "50+", label: "Students Trained", icon: GraduationCap },
        { value: "12", label: "Partner Companies", icon: Building2 },
        { value: "85%", label: "Employment Rate", icon: TrendingUp },
        { value: "6", label: "Tech Domains", icon: Lightbulb }
      ],
      
      whatIsTitle: "What is the UPEE Program?",
      whatIsDescription: "UPEE (Un Pied à l'École, Un Pied en Entreprise) is an innovative work-study program created by West Digital Hub. The concept is simple:",
      whatIsPoints: [
        "You continue your regular university courses",
        "In parallel, you work on real company projects",
        "You're mentored by experienced professionals",
        "You build your portfolio and professional network"
      ],
      
      // Students in Business Section
      studentsTitle: "Our Students in Business",
      studentsSubtitle: "Discover the inspiring journeys of our students currently on assignment",
      students: [
        {
          name: "Kevine Nguepi",
          university: "University of Dschang",
          field: "Computer Science L3",
          company: "Dimel Tech",
          role: "Junior Web Developer",
          quote: "UPEE allowed me to go from theory to practice. Today, I work on real client projects!",
          duration: "6 months"
        },
        {
          name: "Joel Teguia",
          university: "IUT Fotso Victor",
          field: "Computer Engineering",
          company: "Kamlewa Technologie",
          role: "Cybersecurity Assistant",
          quote: "Thanks to the program, I discovered my passion for cybersecurity and obtained certifications.",
          duration: "4 months"
        },
        {
          name: "Larissa Momo",
          university: "University of Dschang",
          field: "Mathematics-CS M1",
          company: "AIC",
          role: "Data Analyst Intern",
          quote: "AI was just a theoretical concept for me. Now, I create real prediction models.",
          duration: "5 months"
        }
      ],
      studentsMoreText: "And many more students building their future every day...",
      
      whyTitle: "Why join UPEE?",
      whySubtitle: "Because a diploma alone is no longer enough. Here's what you gain:",
      benefits: [
        { 
          icon: Briefcase, 
          title: "Real Experience", 
          desc: "Work on real projects for local and international companies, not theoretical exercises." 
        },
        { 
          icon: FileText, 
          title: "Standout CV", 
          desc: "By the end of the program, you'll have a portfolio of concrete projects to show recruiters." 
        },
        { 
          icon: Users, 
          title: "Professional Network", 
          desc: "Meet professionals, mentors, and other ambitious students like yourself." 
        },
        { 
          icon: TrendingUp, 
          title: "In-Demand Skills", 
          desc: "Master the tools and methods that companies actually use." 
        },
        { 
          icon: Award, 
          title: "Recognized Certificate", 
          desc: "Get a certificate from West Digital Hub validating your professional experience." 
        },
        { 
          icon: Rocket, 
          title: "Job Access", 
          desc: "Our partners prioritize hiring the best program participants." 
        }
      ],
      
      domainsTitle: "Which field do you want to specialize in?",
      domainsSubtitle: "Choose your domain and become an expert:",
      domainsList: [
        { name: "Web & Mobile Development", icon: Code, desc: "Create modern apps and websites" },
        { name: "Cybersecurity", icon: Shield, desc: "Protect systems from threats" },
        { name: "Data & AI", icon: Database, desc: "Analyze data and build AI models" },
        { name: "UI/UX Design", icon: Palette, desc: "Design beautiful and intuitive interfaces" },
        { name: "Digital Marketing", icon: Megaphone, desc: "Master online communication strategies" },
        { name: "Cloud & DevOps", icon: Cloud, desc: "Manage infrastructure and deployment" },
        { name: "IT Support", icon: Headphones, desc: "Assist users and solve problems" }
      ],
      
      howTitle: "How does it work?",
      howSteps: [
        { step: "1", title: "You apply", desc: "Fill out the registration form with your motivation" },
        { step: "2", title: "Interview", desc: "We discuss together to understand your goals" },
        { step: "3", title: "You join the program", desc: "You join a team and start on projects" },
        { step: "4", title: "You grow", desc: "Mentoring, training, and continuous skill development" }
      ],
      
      // Sponsor Section
      sponsorTitle: "Support Cameroonian Tech Youth",
      sponsorSubtitle: "By becoming a UPEE sponsor, you invest in the future of African digital",
      sponsorDescription: "The UPEE program trains tomorrow's tech talents. Your support helps us provide unique opportunities to students in West Cameroon.",
      sponsorBenefits: [
        {
          icon: Globe2,
          title: "Regional Visibility",
          desc: "Your brand associated with innovation and tech education in the West"
        },
        {
          icon: UserCheck,
          title: "Talent Access",
          desc: "Priority recruitment of the best profiles trained by our program"
        },
        {
          icon: Heart,
          title: "Social Impact",
          desc: "Help reduce youth unemployment among graduates in Cameroon"
        },
        {
          icon: Trophy,
          title: "Social Responsibility",
          desc: "Strengthen your CSR image with your community"
        }
      ],
      sponsorTiers: [
        { name: "Bronze", amount: "200,000 FCFA", features: ["Logo on website", "Social media mention", "Annual impact report"] },
        { name: "Silver", amount: "500,000 FCFA", features: ["Bronze benefits +", "Event presence", "2 students dedicated to your projects"] },
        { name: "Gold", amount: "1,000,000 FCFA", features: ["Silver benefits +", "Cohort naming", "5 dedicated students", "Exclusive partnership"] }
      ],
      sponsorCta: "Become a Sponsor",
      sponsorContact: "Contact us to discuss your partnership",
      
      partnersTitle: "Our Partner Companies",
      partnersSubtitle: "These companies welcome our students and train them:",
      partnersEmpty: "Space reserved for partner companies",
      becomePartner: "Become a Partner Company",
      becomePartnerDesc: "Are you a tech company? Join our partner network and access trained, motivated talent.",
      
      // Testimonials
      testimonialsTitle: "What They Say About the Program",
      testimonialsSubtitle: "Testimonials from our students and partners",
      testimonials: [
        {
          type: "student",
          name: "Blaise Tchakounte",
          role: "Former UPEE student, now Developer at MTN",
          quote: "UPEE was the springboard for my career. 6 months after the program, I was hired thanks to the skills and network I gained.",
          avatar: "BT"
        },
        {
          type: "company",
          name: "Mr. Fotso Jean",
          role: "CEO, Dimel Tech",
          quote: "UPEE students come with real adaptability. We have already integrated 3 former participants into our team.",
          avatar: "FJ"
        },
        {
          type: "student",
          name: "Sandrine Kengne",
          role: "Cybersecurity Student",
          quote: "I learned more in 4 months of the program than during my entire theoretical training. It's concrete and stimulating!",
          avatar: "SK"
        }
      ],
      
      faqTitle: "Frequently Asked Questions",
      faq: [
        { 
          q: "What year should I be in to apply?", 
          a: "UPEE is open to students from Year 2 undergraduate to Master's level. What matters most is your motivation!" 
        },
        { 
          q: "How long is the program?", 
          a: "The program lasts a minimum of 6 months, renewable. You can stay until you finish your studies." 
        },
        { 
          q: "How many hours per week?", 
          a: "On average 10-15 hours per week, adapted to your university schedule." 
        },
        { 
          q: "Is it compatible with my courses?", 
          a: "Absolutely! The program is designed to fit your university rhythm. No stress." 
        },
        { 
          q: "Do I get paid?", 
          a: "UPEE is a training program. You invest in yourself to gain invaluable experience." 
        },
        { 
          q: "How are participants selected?", 
          a: "We're looking for motivated, curious students ready to commit. You don't need to be a genius, just willing to learn." 
        }
      ],
      
      registerTitle: "Ready to transform your future?",
      registerSubtitle: "Sign up now and join the students who make a difference.",
      form: {
        fullName: "Your full name",
        email: "Your email address",
        phone: "Your WhatsApp number",
        university: "Your university / school",
        fieldOfStudy: "Your field of study",
        domain: "Field that interests you",
        motivation: "Why do you want to join UPEE? (A few lines are enough)",
        submit: "Send my application",
        selectDomain: "Choose a field"
      },
      success: "Application sent!",
      successDesc: "Great! We'll contact you very soon for the next steps. Check your email and WhatsApp!",
      error: "Error sending",
      errorDesc: "Try again or contact us directly on WhatsApp."
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
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6 animate-fade-in">
              <GraduationCap className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">{t.hero}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              <span className="text-primary">{t.heroTitle}</span>
              <br />
              <span className="text-accent">{t.heroTitle2}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-4 animate-fade-in">
              {t.heroTagline}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
              {t.heroDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <Button 
                size="lg"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-lg"
              >
                {t.ctaJoin} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('sponsor')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full px-8 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <CircleDollarSign className="mr-2 h-5 w-5" /> {t.ctaSponsor}
              </Button>
              <a href="https://wa.me/237657977372" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="rounded-full px-8 text-lg">
                  <Phone className="mr-2 h-5 w-5" /> {t.ctaWhatsApp}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              {t.impactTitle}
            </h2>
            <p className="text-primary-foreground/80">{t.impactSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {t.stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-foreground" />
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is UPEE Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.whatIsTitle}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.whatIsDescription}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {t.whatIsPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <p className="text-foreground font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Students in Business Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Success Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.studentsTitle}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.studentsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {t.students.map((student, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300 animate-slide-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">{student.field}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{student.university}</span>
                  </div>
                </div>
                
                {/* Company info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">{student.company}</span>
                    </div>
                    <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-medium">
                      {student.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{student.role}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-border/50">
                    <Quote className="h-5 w-5 text-accent/50 mb-2" />
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{student.quote}"
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground animate-fade-in">
            <span className="inline-flex items-center gap-2">
              <Users className="h-5 w-5" />
              {t.studentsMoreText}
            </span>
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.whySubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {t.benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-2 border-transparent hover:border-accent/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.domainsTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.domainsSubtitle}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {t.domainsList.map((domain, index) => (
              <Card 
                key={index}
                className="p-5 text-center hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-muted group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                  <domain.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{domain.name}</h3>
                <p className="text-sm text-muted-foreground">{domain.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.howTitle}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {t.howSteps.map((step, index) => (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {index < t.howSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-primary/50 to-accent/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section id="sponsor" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Sponsorship</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.sponsorTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
              {t.sponsorSubtitle}
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t.sponsorDescription}
            </p>
          </div>
          
          {/* Sponsor Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {t.sponsorBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
          
          {/* Sponsor Tiers */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {t.sponsorTiers.map((tier, index) => (
              <Card 
                key={index}
                className={`p-8 text-center transition-all animate-slide-up ${
                  index === 2 
                    ? 'border-2 border-accent shadow-glow scale-105' 
                    : 'border border-border hover:border-primary/30'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {lang === 'fr' ? 'Populaire' : 'Popular'}
                    </span>
                  </div>
                )}
                <div className={`text-2xl font-bold mb-2 ${
                  index === 0 ? 'text-amber-600' : index === 1 ? 'text-slate-500' : 'text-yellow-500'
                }`}>
                  {tier.name}
                </div>
                <div className="text-3xl font-bold text-foreground mb-6">{tier.amount}</div>
                <ul className="space-y-3 text-left mb-6">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="mailto:contact@westtechs.org">
                  <Button 
                    className={`w-full rounded-full ${
                      index === 2 
                        ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {t.sponsorCta}
                  </Button>
                </a>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground animate-fade-in">
            {t.sponsorContact}: <a href="mailto:contact@westtechs.org" className="text-primary hover:underline font-semibold">contact@westtechs.org</a>
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.testimonialsTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.testimonialsSubtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-lg transition-all border-2 border-transparent hover:border-accent/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <Quote className="h-8 w-8 text-accent/30 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    testimonial.type === 'student' 
                      ? 'bg-gradient-to-br from-accent to-accent/80' 
                      : 'bg-gradient-to-br from-primary to-primary/80'
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    testimonial.type === 'student' 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    {testimonial.type === 'student' ? (lang === 'fr' ? 'Étudiant' : 'Student') : (lang === 'fr' ? 'Entreprise' : 'Company')}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.partnersTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.partnersSubtitle}
            </p>
          </div>
          
          {/* Partner logos */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              {[
                { name: "Dimel Tech", logo: partnerDimeltech, desc: lang === 'fr' ? "Solutions digitales innovantes" : "Innovative digital solutions" },
                { name: "Kamlewa Technologie", logo: partnerKamlewa, desc: lang === 'fr' ? "Cybersécurité & Développement" : "Cybersecurity & Development" },
                { name: "Intelligence Artificielle Cameroun", logo: partnerAic, desc: lang === 'fr' ? "IA & Data Science" : "AI & Data Science" }
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="group bg-background rounded-2xl border border-border/50 p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video rounded-xl bg-muted/30 flex items-center justify-center mb-4 overflow-hidden p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-bold text-foreground text-center">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground text-center mt-1">{partner.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Become Partner CTA */}
          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-0 animate-slide-up">
            <div className="text-center">
              <Handshake className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t.becomePartner}</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {t.becomePartnerDesc}
              </p>
              <a href="mailto:contact@westtechs.org">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Heart className="mr-2 h-5 w-5" />
                  {t.becomePartner}
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.faqTitle}
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full animate-slide-up">
              {t.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-gradient-to-br from-accent/10 via-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Star className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.registerTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t.registerSubtitle}
              </p>
            </div>
            
            <Card className="p-8 shadow-glow border-2 border-accent/20 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">{t.form.fullName} *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="Ex: Jean Kamga"
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
                      placeholder="jean@email.com"
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
                      placeholder="Ex: Université de Dschang"
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
                      placeholder="Ex: Informatique L3"
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
                        <SelectItem value="development">{lang === 'fr' ? 'Développement Web & Mobile' : 'Web & Mobile Development'}</SelectItem>
                        <SelectItem value="cybersecurity">{lang === 'fr' ? 'Cybersécurité' : 'Cybersecurity'}</SelectItem>
                        <SelectItem value="data-ai">Data & IA</SelectItem>
                        <SelectItem value="design">Design UI/UX</SelectItem>
                        <SelectItem value="marketing">{lang === 'fr' ? 'Marketing Digital' : 'Digital Marketing'}</SelectItem>
                        <SelectItem value="cloud">Cloud & DevOps</SelectItem>
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
                    placeholder={lang === 'fr' ? "Dis-nous ce qui te motive et ce que tu espères apprendre..." : "Tell us what motivates you and what you hope to learn..."}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...') : t.form.submit}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
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
