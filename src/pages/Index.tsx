import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Incubation from "@/components/Incubation";
import Booking from "@/components/Booking";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Stats lang={lang} />
      <Services lang={lang} />
      <Testimonials lang={lang} />
      <Incubation lang={lang} />
      <Booking lang={lang} />
      <Partners lang={lang} />
      <Team lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
