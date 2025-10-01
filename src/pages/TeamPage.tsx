import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const TeamPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation lang={lang} toggleLang={toggleLang} />
      <Team lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default TeamPage;
