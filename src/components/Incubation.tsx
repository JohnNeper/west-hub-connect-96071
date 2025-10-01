import { useState } from "react";
import { Lightbulb, Users, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface IncubationProps {
  lang: 'fr' | 'en';
}

const Incubation = ({ lang }: IncubationProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startup: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      lang === 'fr' 
        ? "Inscription réussie! Nous vous contacterons bientôt." 
        : "Registration successful! We'll contact you soon."
    );
    setFormData({ name: "", email: "", startup: "" });
  };

  const content = {
    fr: {
      title: "Programme d'Incubation",
      subtitle: "Transformez votre idée en startup à succès",
      features: [
        "Mentorat Expert",
        "Réseau & Networking",
        "Accès au Financement"
      ],
      formTitle: "Rejoignez la liste d'attente",
      formButton: "S'inscrire maintenant"
    },
    en: {
      title: "Incubation Program",
      subtitle: "Transform your idea into a successful startup",
      features: [
        "Expert Mentorship",
        "Network & Networking",
        "Access to Funding"
      ],
      formTitle: "Join the Waitlist",
      formButton: "Sign Up Now"
    }
  };

  const t = content[lang];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary)) 0%, transparent 50%)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm mb-6">
              {lang === 'fr' ? 'BIENTÔT DISPONIBLE' : 'COMING SOON'}
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {t.title}
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-white/20 rounded-2xl p-5 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">{t.features[0]}</h3>
              <p className="text-white/80 text-sm">
                {lang === 'fr' ? 'Accompagnement personnalisé pour transformer votre idée en startup' : 'Personalized support to transform your idea into a startup'}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-white/20 rounded-2xl p-5 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">{t.features[1]}</h3>
              <p className="text-white/80 text-sm">
                {lang === 'fr' ? 'Connectez avec des mentors, investisseurs et entrepreneurs' : 'Connect with mentors, investors and entrepreneurs'}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="bg-white/20 rounded-2xl p-5 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-white">{t.features[2]}</h3>
              <p className="text-white/80 text-sm">
                {lang === 'fr' ? 'Accédez à des opportunités de financement pour votre startup' : 'Access funding opportunities for your startup'}
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-3 text-white text-center">{t.formTitle}</h3>
            <p className="text-white/80 text-center mb-8">
              {lang === 'fr' ? 'Soyez parmi les premiers à rejoindre notre programme' : 'Be among the first to join our program'}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                name="name"
                placeholder={lang === 'fr' ? "Votre nom complet" : "Your full name"}
                value={formData.name}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 rounded-2xl backdrop-blur-sm focus:bg-white/30 transition-all"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder={lang === 'fr' ? "Votre email" : "Your email"}
                value={formData.email}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 rounded-2xl backdrop-blur-sm focus:bg-white/30 transition-all"
                required
              />
              <Input
                type="text"
                name="startup"
                placeholder={lang === 'fr' ? "Nom de votre startup (optionnel)" : "Your startup name (optional)"}
                value={formData.startup}
                onChange={handleChange}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 rounded-2xl backdrop-blur-sm focus:bg-white/30 transition-all"
              />
              <Button 
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 h-14 text-lg font-semibold rounded-2xl shadow-glow transition-all duration-300"
                size="lg"
              >
                {t.formButton} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Incubation;
