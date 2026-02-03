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
  Star,
  Handshake,
  Rocket,
  FileText,
  Award,
  TrendingUp,
  Heart,
  Zap,
  Globe2,
  Trophy,
  Lightbulb,
  MapPin,
  Quote,
  Sparkles,
  UserCheck,
  CircleDollarSign,
  Wrench,
  Stethoscope,
  ShoppingBag,
  Leaf,
  HardHat
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
      ctaJoin: "Devenir Pionnier",
      ctaWhatsApp: "Poser une question",
      ctaSponsor: "Devenir Sponsor",
      
      launchBadge: "🚀 PHASE DE LANCEMENT",
      launchMessage: "Rejoins les 5 premiers étudiants pionniers du programme !",
      
      impactTitle: "Le Début d'une Grande Aventure",
      impactSubtitle: "Un programme en phase de lancement avec une vision ambitieuse",
      stats: [
        { value: "5", label: "Étudiants Pionniers", icon: GraduationCap },
        { value: "3", label: "Entreprises Partenaires", icon: Building2 },
        { value: "100%", label: "Accompagnement Personnalisé", icon: TrendingUp },
        { value: "∞", label: "Domaines à Explorer", icon: Lightbulb }
      ],
      
      whatIsTitle: "C'est quoi le Programme UPEE ?",
      whatIsDescription: "UPEE (Un Pied à l'École, Un Pied en Entreprise) est un programme d'alternance innovant créé par West Digital Hub. Le principe est simple :",
      whatIsPoints: [
        "Tu continues tes cours normalement à l'université",
        "En parallèle, tu travailles sur de vrais projets d'entreprise",
        "Tu es encadré(e) par des professionnels expérimentés",
        "Tu construis ton portfolio et ton réseau professionnel"
      ],
      
      visionTitle: "Notre Vision : Au-delà du Numérique",
      visionSubtitle: "Aujourd'hui le tech, demain TOUS les métiers !",
      visionDescription: "UPEE a démarré dans le numérique, mais notre ambition est bien plus grande. Nous voulons étendre le programme à TOUS les secteurs professionnels : agriculture, santé, commerce, artisanat, industrie... Chaque jeune mérite une vraie expérience professionnelle !",
      visionPhases: [
        { title: "Phase 1 : Tech & Digital", desc: "Développement, IA, Cybersécurité, Design", status: "active", icon: Code },
        { title: "Phase 2 : Services", desc: "Marketing, Comptabilité, RH, Commerce", status: "coming", icon: ShoppingBag },
        { title: "Phase 3 : Métiers Techniques", desc: "BTP, Électricité, Mécanique, Agriculture", status: "future", icon: HardHat },
        { title: "Phase 4 : Tous Secteurs", desc: "Santé, Artisanat, Industrie et plus", status: "future", icon: Stethoscope }
      ],
      
      studentsTitle: "Nos 5 Étudiants Pionniers",
      studentsSubtitle: "Les premiers à croire en UPEE et à construire leur avenir avec nous",
      students: [
        {
          name: "Kevine Nguepi",
          university: "Université de Dschang",
          field: "Informatique L3",
          company: "Dimel Tech",
          role: "Développeuse Web Junior",
          quote: "Être parmi les premiers du programme UPEE, c'est une opportunité unique. J'apprends chaque jour !",
          duration: "En cours"
        },
        {
          name: "Joel Teguia",
          university: "IUT Fotso Victor",
          field: "Génie Informatique",
          company: "Kamlewa Technologie",
          role: "Assistant Cybersécurité",
          quote: "UPEE m'a ouvert les portes d'une vraie entreprise. L'expérience est incroyable.",
          duration: "En cours"
        },
        {
          name: "Larissa Momo",
          university: "Université de Dschang",
          field: "Mathématiques-Info M1",
          company: "AIC",
          role: "Stagiaire Data Analyst",
          quote: "Je fais partie des pionniers et j'en suis fière. On construit quelque chose de grand !",
          duration: "En cours"
        }
      ],
      studentsMoreText: "Et 2 autres étudiants pionniers qui rejoignent l'aventure...",
      joinPioneers: "Deviens le prochain pionnier !",
      
      whyTitle: "Pourquoi rejoindre UPEE ?",
      whySubtitle: "Parce que le diplôme seul ne suffit plus. Voici ce que tu gagnes :",
      benefits: [
        { icon: Briefcase, title: "Expérience Réelle", desc: "Travaille sur de vrais projets d'entreprises, pas des exercices théoriques." },
        { icon: FileText, title: "CV qui se Démarque", desc: "Un portfolio de projets concrets à montrer aux recruteurs." },
        { icon: Users, title: "Réseau Professionnel", desc: "Rencontre des professionnels et des mentors du secteur." },
        { icon: TrendingUp, title: "Compétences Recherchées", desc: "Maîtrise les outils que les entreprises utilisent vraiment." },
        { icon: Award, title: "Certificat Reconnu", desc: "Une attestation valorisant ton expérience professionnelle." },
        { icon: Rocket, title: "Accès à l'Emploi", desc: "Nos partenaires recrutent en priorité nos participants." }
      ],
      
      domainsTitle: "Domaines Disponibles (Phase 1)",
      domainsSubtitle: "Commence par le numérique, bientôt tous les métiers !",
      domainsList: [
        { name: "Développement Web & Mobile", icon: Code, desc: "Crée des applications modernes" },
        { name: "Cybersécurité", icon: Shield, desc: "Protège les systèmes" },
        { name: "Data & IA", icon: Database, desc: "Analyse et modèles IA" },
        { name: "Design UI/UX", icon: Palette, desc: "Interfaces intuitives" },
        { name: "Marketing Digital", icon: Megaphone, desc: "Communication en ligne" },
        { name: "Cloud & DevOps", icon: Cloud, desc: "Infrastructure cloud" }
      ],
      comingSoonDomains: "🔜 Bientôt : Commerce, Agriculture, Santé, BTP, Artisanat et plus !",
      
      howTitle: "Comment ça marche ?",
      howSteps: [
        { step: "1", title: "Tu postules", desc: "Remplis le formulaire avec ta motivation" },
        { step: "2", title: "Entretien", desc: "On discute de tes objectifs" },
        { step: "3", title: "Tu intègres", desc: "Tu rejoins une équipe et les projets" },
        { step: "4", title: "Tu évolues", desc: "Mentorat et montée en compétences" }
      ],
      
      sponsorTitle: "Soutenez la Jeunesse Camerounaise",
      sponsorSubtitle: "En devenant sponsor UPEE, vous investissez dans l'avenir professionnel des jeunes",
      sponsorDescription: "Le programme UPEE forme les talents de demain dans TOUS les secteurs. Votre soutien nous aide à offrir des opportunités uniques aux étudiants de la région de l'Ouest Cameroun et à étendre le programme à de nouveaux métiers.",
      sponsorBenefits: [
        { icon: Globe2, title: "Visibilité Régionale", desc: "Votre marque associée à l'insertion professionnelle des jeunes" },
        { icon: UserCheck, title: "Accès aux Talents", desc: "Recrutez les meilleurs profils formés par notre programme" },
        { icon: Heart, title: "Impact Social", desc: "Contribuez à réduire le chômage des jeunes diplômés" },
        { icon: Trophy, title: "RSE Renforcée", desc: "Renforcez votre image auprès de votre communauté" }
      ],
      sponsorTiers: [
        { name: "Bronze", amount: "200 000 FCFA", features: ["Logo sur le site", "Mention sur les réseaux sociaux", "Rapport d'impact annuel"] },
        { name: "Argent", amount: "500 000 FCFA", features: ["Avantages Bronze +", "Présence aux événements", "2 étudiants dédiés à vos projets"] },
        { name: "Or", amount: "1 000 000 FCFA", features: ["Avantages Argent +", "Naming d'une cohorte", "5 étudiants dédiés", "Partenariat exclusif"] }
      ],
      sponsorCta: "Devenir Sponsor",
      sponsorContact: "Contactez-nous pour discuter",
      
      partnersTitle: "Nos Entreprises Partenaires",
      partnersSubtitle: "Ces entreprises accueillent et forment nos étudiants :",
      becomePartner: "Devenir Entreprise Partenaire",
      becomePartnerDesc: "Vous êtes une entreprise ? Rejoignez notre réseau et accédez à des talents motivés, quel que soit votre secteur !",
      
      testimonialsTitle: "Ce Qu'ils Disent du Programme",
      testimonialsSubtitle: "Témoignages de nos étudiants et partenaires",
      testimonials: [
        { type: "student", name: "Kevine N.", role: "Étudiante pionnière UPEE", quote: "Être dans la première cohorte UPEE, c'est construire l'histoire. On apprend en faisant pour de vrai !", avatar: "KN" },
        { type: "company", name: "M. Fotso Jean", role: "CEO, Dimel Tech", quote: "Nous croyons en ce programme. Former les jeunes en entreprise, c'est investir dans notre futur collectif.", avatar: "FJ" },
        { type: "student", name: "Joel T.", role: "Étudiant pionnier UPEE", quote: "Je fais de la vraie cybersécurité, pas juste de la théorie. UPEE change tout !", avatar: "JT" }
      ],
      
      faqTitle: "Questions Fréquentes",
      faq: [
        { q: "Pourquoi 'Phase de lancement' ?", a: "UPEE vient de démarrer avec 5 étudiants pionniers. C'est le moment idéal pour rejoindre et bénéficier d'un accompagnement ultra personnalisé !" },
        { q: "Le programme est-il limité au numérique ?", a: "Non ! Nous démarrons par le tech, mais notre vision est d'inclure TOUS les métiers : commerce, agriculture, santé, BTP, artisanat... L'expansion arrive bientôt !" },
        { q: "Je suis en quelle année pour postuler ?", a: "UPEE est ouvert de la Licence 2 au Master 2. L'essentiel c'est ta motivation !" },
        { q: "Combien de temps dure le programme ?", a: "6 mois minimum, renouvelable. Tu peux rester jusqu'à la fin de tes études." },
        { q: "Ça prend combien de temps par semaine ?", a: "En moyenne 10-15 heures, adaptées à ton emploi du temps universitaire." },
        { q: "Est-ce que je suis payé ?", a: "UPEE est un programme de formation. Tu investis en toi-même pour acquérir une expérience inestimable." }
      ],
      
      registerTitle: "Deviens un Pionnier UPEE",
      registerSubtitle: "Rejoins les premiers étudiants qui construisent l'avenir avec nous !",
      form: {
        fullName: "Ton nom complet",
        email: "Ton adresse email",
        phone: "Ton numéro WhatsApp",
        university: "Ton université / école",
        fieldOfStudy: "Ta filière d'études",
        domain: "Domaine qui t'intéresse",
        motivation: "Pourquoi veux-tu rejoindre UPEE ?",
        submit: "Envoyer ma candidature",
        selectDomain: "Choisis un domaine"
      },
      success: "Candidature envoyée !",
      successDesc: "Super ! On te contacte très bientôt. Check tes emails et WhatsApp !",
      error: "Erreur lors de l'envoi",
      errorDesc: "Réessaie ou contacte-nous sur WhatsApp."
    },
    en: {
      hero: "UPEE Program",
      heroTitle: "One Foot in School",
      heroTitle2: "One Foot in Business",
      heroTagline: "Don't be just another student. Become the one companies are looking for!",
      heroDescription: "Are you a student who wants to stand out? UPEE lets you gain real professional experience during your studies, so your CV shines from day one.",
      ctaJoin: "Become a Pioneer",
      ctaWhatsApp: "Ask a question",
      ctaSponsor: "Become a Sponsor",
      
      launchBadge: "🚀 LAUNCH PHASE",
      launchMessage: "Join the first 5 pioneer students of the program!",
      
      impactTitle: "The Beginning of a Great Adventure",
      impactSubtitle: "A program in launch phase with an ambitious vision",
      stats: [
        { value: "5", label: "Pioneer Students", icon: GraduationCap },
        { value: "3", label: "Partner Companies", icon: Building2 },
        { value: "100%", label: "Personalized Support", icon: TrendingUp },
        { value: "∞", label: "Fields to Explore", icon: Lightbulb }
      ],
      
      whatIsTitle: "What is the UPEE Program?",
      whatIsDescription: "UPEE (One Foot in School, One Foot in Business) is an innovative work-study program created by West Digital Hub. The concept is simple:",
      whatIsPoints: [
        "You continue your regular university courses",
        "In parallel, you work on real company projects",
        "You're mentored by experienced professionals",
        "You build your portfolio and professional network"
      ],
      
      visionTitle: "Our Vision: Beyond Digital",
      visionSubtitle: "Today tech, tomorrow ALL professions!",
      visionDescription: "UPEE started in digital, but our ambition is much bigger. We want to extend the program to ALL professional sectors: agriculture, healthcare, commerce, crafts, industry... Every young person deserves real professional experience!",
      visionPhases: [
        { title: "Phase 1: Tech & Digital", desc: "Development, AI, Cybersecurity, Design", status: "active", icon: Code },
        { title: "Phase 2: Services", desc: "Marketing, Accounting, HR, Commerce", status: "coming", icon: ShoppingBag },
        { title: "Phase 3: Technical Trades", desc: "Construction, Electrical, Mechanics, Agriculture", status: "future", icon: HardHat },
        { title: "Phase 4: All Sectors", desc: "Healthcare, Crafts, Industry and more", status: "future", icon: Stethoscope }
      ],
      
      studentsTitle: "Our 5 Pioneer Students",
      studentsSubtitle: "The first to believe in UPEE and build their future with us",
      students: [
        {
          name: "Kevine Nguepi",
          university: "University of Dschang",
          field: "Computer Science L3",
          company: "Dimel Tech",
          role: "Junior Web Developer",
          quote: "Being among the first in UPEE is a unique opportunity. I learn every day!",
          duration: "Ongoing"
        },
        {
          name: "Joel Teguia",
          university: "IUT Fotso Victor",
          field: "Computer Engineering",
          company: "Kamlewa Technologie",
          role: "Cybersecurity Assistant",
          quote: "UPEE opened the doors of a real company for me. The experience is incredible.",
          duration: "Ongoing"
        },
        {
          name: "Larissa Momo",
          university: "University of Dschang",
          field: "Mathematics-CS M1",
          company: "AIC",
          role: "Data Analyst Intern",
          quote: "I'm part of the pioneers and I'm proud of it. We're building something big!",
          duration: "Ongoing"
        }
      ],
      studentsMoreText: "And 2 more pioneer students joining the adventure...",
      joinPioneers: "Become the next pioneer!",
      
      whyTitle: "Why join UPEE?",
      whySubtitle: "Because a diploma alone is no longer enough. Here's what you gain:",
      benefits: [
        { icon: Briefcase, title: "Real Experience", desc: "Work on real company projects, not theoretical exercises." },
        { icon: FileText, title: "Standout CV", desc: "A portfolio of concrete projects to show recruiters." },
        { icon: Users, title: "Professional Network", desc: "Meet professionals and mentors in the field." },
        { icon: TrendingUp, title: "In-Demand Skills", desc: "Master the tools companies actually use." },
        { icon: Award, title: "Recognized Certificate", desc: "A certificate validating your professional experience." },
        { icon: Rocket, title: "Job Access", desc: "Our partners prioritize hiring our participants." }
      ],
      
      domainsTitle: "Available Fields (Phase 1)",
      domainsSubtitle: "Start with digital, soon all professions!",
      domainsList: [
        { name: "Web & Mobile Development", icon: Code, desc: "Create modern apps" },
        { name: "Cybersecurity", icon: Shield, desc: "Protect systems" },
        { name: "Data & AI", icon: Database, desc: "Analysis and AI models" },
        { name: "UI/UX Design", icon: Palette, desc: "Intuitive interfaces" },
        { name: "Digital Marketing", icon: Megaphone, desc: "Online communication" },
        { name: "Cloud & DevOps", icon: Cloud, desc: "Cloud infrastructure" }
      ],
      comingSoonDomains: "🔜 Coming soon: Commerce, Agriculture, Healthcare, Construction, Crafts and more!",
      
      howTitle: "How does it work?",
      howSteps: [
        { step: "1", title: "You apply", desc: "Fill out the form with your motivation" },
        { step: "2", title: "Interview", desc: "We discuss your goals" },
        { step: "3", title: "You join", desc: "You join a team and projects" },
        { step: "4", title: "You grow", desc: "Mentoring and skill development" }
      ],
      
      sponsorTitle: "Support Cameroonian Youth",
      sponsorSubtitle: "By becoming a UPEE sponsor, you invest in the professional future of young people",
      sponsorDescription: "The UPEE program trains tomorrow's talents in ALL sectors. Your support helps us provide unique opportunities to students in West Cameroon and expand to new professions.",
      sponsorBenefits: [
        { icon: Globe2, title: "Regional Visibility", desc: "Your brand associated with youth employability" },
        { icon: UserCheck, title: "Talent Access", desc: "Recruit the best profiles trained by our program" },
        { icon: Heart, title: "Social Impact", desc: "Help reduce youth unemployment" },
        { icon: Trophy, title: "Enhanced CSR", desc: "Strengthen your image with your community" }
      ],
      sponsorTiers: [
        { name: "Bronze", amount: "200,000 FCFA", features: ["Logo on website", "Social media mention", "Annual impact report"] },
        { name: "Silver", amount: "500,000 FCFA", features: ["Bronze benefits +", "Event presence", "2 students on your projects"] },
        { name: "Gold", amount: "1,000,000 FCFA", features: ["Silver benefits +", "Cohort naming", "5 dedicated students", "Exclusive partnership"] }
      ],
      sponsorCta: "Become a Sponsor",
      sponsorContact: "Contact us to discuss",
      
      partnersTitle: "Our Partner Companies",
      partnersSubtitle: "These companies welcome and train our students:",
      becomePartner: "Become a Partner Company",
      becomePartnerDesc: "Are you a company? Join our network and access motivated talent, regardless of your sector!",
      
      testimonialsTitle: "What They Say About the Program",
      testimonialsSubtitle: "Testimonials from our students and partners",
      testimonials: [
        { type: "student", name: "Kevine N.", role: "UPEE Pioneer Student", quote: "Being in the first UPEE cohort is making history. We learn by really doing!", avatar: "KN" },
        { type: "company", name: "Mr. Fotso Jean", role: "CEO, Dimel Tech", quote: "We believe in this program. Training young people in companies is investing in our collective future.", avatar: "FJ" },
        { type: "student", name: "Joel T.", role: "UPEE Pioneer Student", quote: "I do real cybersecurity, not just theory. UPEE changes everything!", avatar: "JT" }
      ],
      
      faqTitle: "Frequently Asked Questions",
      faq: [
        { q: "Why 'Launch Phase'?", a: "UPEE just started with 5 pioneer students. It's the ideal time to join and benefit from ultra-personalized support!" },
        { q: "Is the program limited to digital?", a: "No! We're starting with tech, but our vision is to include ALL professions: commerce, agriculture, healthcare, construction, crafts... Expansion is coming soon!" },
        { q: "What year should I be in to apply?", a: "UPEE is open from Year 2 undergraduate to Master's level. What matters most is your motivation!" },
        { q: "How long is the program?", a: "Minimum 6 months, renewable. You can stay until you finish your studies." },
        { q: "How many hours per week?", a: "On average 10-15 hours, adapted to your university schedule." },
        { q: "Do I get paid?", a: "UPEE is a training program. You invest in yourself to gain invaluable experience." }
      ],
      
      registerTitle: "Become a UPEE Pioneer",
      registerSubtitle: "Join the first students building the future with us!",
      form: {
        fullName: "Your full name",
        email: "Your email address",
        phone: "Your WhatsApp number",
        university: "Your university / school",
        fieldOfStudy: "Your field of study",
        domain: "Field that interests you",
        motivation: "Why do you want to join UPEE?",
        submit: "Send my application",
        selectDomain: "Choose a field"
      },
      success: "Application sent!",
      successDesc: "Great! We'll contact you very soon. Check your email and WhatsApp!",
      error: "Error sending",
      errorDesc: "Try again or contact us on WhatsApp."
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
            {/* Launch Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full mb-6 animate-fade-in font-bold">
              <Zap className="h-5 w-5" />
              <span className="text-sm">{t.launchBadge}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in">
              <span className="text-primary">{t.heroTitle}</span>
              <br />
              <span className="text-accent">{t.heroTitle2}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-4 animate-fade-in">
              {t.heroTagline}
            </p>
            
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto animate-fade-in">
              {t.heroDescription}
            </p>

            {/* Launch Message */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full mb-8 animate-fade-in">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">{t.launchMessage}</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <Button 
                size="lg"
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 text-lg font-bold"
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

      {/* Vision Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-4">
              <Globe2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Vision</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.visionTitle}
            </h2>
            <p className="text-xl text-accent font-semibold mb-4">
              {t.visionSubtitle}
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t.visionDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {t.visionPhases.map((phase, index) => (
              <Card 
                key={index}
                className={`p-6 text-center transition-all animate-slide-up ${
                  phase.status === 'active' 
                    ? 'border-2 border-accent bg-accent/5 shadow-glow' 
                    : phase.status === 'coming'
                    ? 'border-2 border-primary/30 bg-primary/5'
                    : 'border border-border/50 opacity-70'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  phase.status === 'active' ? 'bg-accent' : phase.status === 'coming' ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <phase.icon className={`h-7 w-7 ${
                    phase.status === 'active' ? 'text-accent-foreground' : 'text-primary'
                  }`} />
                </div>
                {phase.status === 'active' && (
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-3">
                    {lang === 'fr' ? 'EN COURS' : 'ACTIVE'}
                  </span>
                )}
                {phase.status === 'coming' && (
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-3">
                    {lang === 'fr' ? 'BIENTÔT' : 'COMING'}
                  </span>
                )}
                <h3 className="font-bold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </Card>
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
                  className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl border border-border/50 hover:border-accent/30 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">{index + 1}</span>
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
              <span className="text-sm font-semibold text-accent">Pionniers</span>
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
                className="overflow-hidden border-2 border-accent/30 hover:border-accent/50 transition-all duration-300 animate-slide-up group bg-gradient-to-br from-accent/5 to-background"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-gradient-to-r from-accent/20 to-primary/10 p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl">
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
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-foreground">{student.company}</span>
                    </div>
                    <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-bold">
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
          
          <div className="text-center animate-fade-in">
            <p className="text-muted-foreground mb-6">
              <span className="inline-flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t.studentsMoreText}
              </span>
            </p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-bold"
            >
              {t.joinPioneers} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-accent" />
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
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.domainsTitle}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.domainsSubtitle}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {t.domainsList.map((domain, index) => (
              <Card 
                key={index}
                className="p-5 text-center hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer border-2 border-transparent hover:border-accent/30 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                  <domain.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{domain.name}</h3>
                <p className="text-sm text-muted-foreground">{domain.desc}</p>
              </Card>
            ))}
          </div>

          <p className="text-center text-lg font-semibold text-primary animate-fade-in">
            {t.comingSoonDomains}
          </p>
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
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                  {index < t.howSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-accent/50 to-primary/50" />
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
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {t.sponsorTiers.map((tier, index) => (
              <Card 
                key={index}
                className={`p-8 text-center transition-all animate-slide-up relative ${
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
            {t.sponsorContact}: <a href="mailto:contact@westtechs.org" className="text-accent hover:underline font-semibold">contact@westtechs.org</a>
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
                    {testimonial.type === 'student' ? (lang === 'fr' ? 'Pionnier' : 'Pioneer') : (lang === 'fr' ? 'Entreprise' : 'Company')}
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
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              {[
                { name: "Dimel Tech", logo: partnerDimeltech, desc: lang === 'fr' ? "Solutions digitales innovantes" : "Innovative digital solutions" },
                { name: "Kamlewa Technologie", logo: partnerKamlewa, desc: lang === 'fr' ? "Cybersécurité & Développement" : "Cybersecurity & Development" },
                { name: "Intelligence Artificielle Cameroun", logo: partnerAic, desc: lang === 'fr' ? "IA & Data Science" : "AI & Data Science" }
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="group bg-background rounded-2xl border-2 border-border/50 p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
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
          
          <Card className="max-w-3xl mx-auto p-8 md:p-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20 animate-slide-up">
            <div className="text-center">
              <Handshake className="h-12 w-12 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{t.becomePartner}</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {t.becomePartnerDesc}
              </p>
              <a href="mailto:contact@westtechs.org">
                <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
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
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
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
            
            <Card className="p-8 shadow-glow border-2 border-accent/30 animate-slide-up">
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
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t.form.selectDomain} />
                      </SelectTrigger>
                      <SelectContent>
                        {t.domainsList.map((domain, index) => (
                          <SelectItem key={index} value={domain.name}>
                            {domain.name}
                          </SelectItem>
                        ))}
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
                    placeholder={lang === 'fr' ? "Parle-nous de toi et de ta motivation..." : "Tell us about yourself and your motivation..."}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full py-6 text-lg font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (lang === 'fr' ? 'Envoi en cours...' : 'Sending...') : t.form.submit}
                  <ArrowRight className="ml-2 h-5 w-5" />
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
