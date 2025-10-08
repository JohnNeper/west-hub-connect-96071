import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Zap, Coffee, Users, Clock, Shield, ArrowRight, Check } from "lucide-react";
import coworkingImg from "@/assets/hero-coworking.jpg";
import privateOfficeImg from "@/assets/private-office.jpg";
import meetingRoomImg from "@/assets/meeting-room.jpg";
import cafeSpaceImg from "@/assets/cafe-space.jpg";

const CoworkingPage = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const content = {
    fr: {
      title: "Coworking Bafoussam — West Digital Hub",
      subtitle: "Espace de coworking 24/7 à Bafoussam. Postes partagés, bureaux privés, wifi Starlink, salles de réunion. Offres flexibles pour freelances et startups.",
      hero: {
        title: "West Digital Hub",
        subtitle: "Votre espace de travail professionnel à Bafoussam",
        description: "Coworking 24/7, WiFi Starlink haut débit, électricité permanente, et une communauté dynamique d'innovateurs."
      },
      benefits: [
        { icon: Clock, title: "Accès 24/7", description: "Travaillez à votre rythme, jour et nuit" },
        { icon: Wifi, title: "WiFi Starlink", description: "Connexion haut débit ultra-rapide et stable" },
        { icon: Zap, title: "Électricité permanente", description: "Pas de coupures, travail sans interruption" },
        { icon: Coffee, title: "Café & Détente", description: "Espace café et zone networking gratuits" },
        { icon: Users, title: "Communauté", description: "Rejoignez un écosystème d'entrepreneurs" },
        { icon: Shield, title: "Sécurité 24/7", description: "Espace sécurisé avec surveillance" }
      ],
      spaces: {
        title: "Nos Espaces",
        items: [
          {
            image: coworkingImg,
            title: "Postes Partagés",
            description: "Bureaux flexibles en open space",
            price: "À partir de 15.000 FCFA/jour"
          },
          {
            image: privateOfficeImg,
            title: "Bureaux Privés",
            description: "Espaces privés pour équipes 2-8 personnes",
            price: "À partir de 100.000 FCFA/mois"
          },
          {
            image: meetingRoomImg,
            title: "Salles de Réunion",
            description: "Équipées pour présentations et formations",
            price: "À partir de 10.000 FCFA/heure"
          },
          {
            image: cafeSpaceImg,
            title: "Espace Café & Networking",
            description: "Zone détente et collaboration informelle",
            price: "Inclus avec abonnement"
          }
        ]
      },
      packages: {
        title: "Nos Tarifs",
        subtitle: "Choisissez la formule adaptée à vos besoins",
        items: [
          {
            name: "Pass Journée",
            price: "15.000",
            period: "jour",
            features: [
              "Accès 1 journée (9h-18h)",
              "WiFi Starlink",
              "Café gratuit",
              "Salle de réunion (1h)"
            ]
          },
          {
            name: "Abonnement Mensuel",
            price: "50.000",
            period: "mois",
            popular: true,
            features: [
              "Accès illimité 24/7",
              "WiFi Starlink premium",
              "Café & snacks",
              "Salle de réunion (5h/mois)",
              "Adresse business"
            ]
          },
          {
            name: "Bureau Privé",
            price: "100.000",
            period: "mois",
            features: [
              "Bureau privé fermé",
              "Accès 24/7",
              "Tous services inclus",
              "Salle de réunion illimitée",
              "Services administratifs"
            ]
          }
        ]
      },
      cta: "Réserver maintenant"
    },
    en: {
      title: "Coworking Bafoussam — West Digital Hub",
      subtitle: "24/7 coworking space in Bafoussam. Shared desks, private offices, Starlink wifi, meeting rooms. Flexible offers for freelancers and startups.",
      hero: {
        title: "West Digital Hub",
        subtitle: "Your professional workspace in Bafoussam",
        description: "24/7 coworking, high-speed Starlink WiFi, permanent electricity, and a dynamic community of innovators."
      },
      benefits: [
        { icon: Clock, title: "24/7 Access", description: "Work at your pace, day and night" },
        { icon: Wifi, title: "Starlink WiFi", description: "Ultra-fast and stable high-speed connection" },
        { icon: Zap, title: "Permanent Electricity", description: "No outages, uninterrupted work" },
        { icon: Coffee, title: "Café & Relaxation", description: "Free café space and networking area" },
        { icon: Users, title: "Community", description: "Join an ecosystem of entrepreneurs" },
        { icon: Shield, title: "24/7 Security", description: "Secure space with surveillance" }
      ],
      spaces: {
        title: "Our Spaces",
        items: [
          {
            image: coworkingImg,
            title: "Shared Desks",
            description: "Flexible desks in open space",
            price: "From 15,000 FCFA/day"
          },
          {
            image: privateOfficeImg,
            title: "Private Offices",
            description: "Private spaces for 2-8 person teams",
            price: "From 100,000 FCFA/month"
          },
          {
            image: meetingRoomImg,
            title: "Meeting Rooms",
            description: "Equipped for presentations and training",
            price: "From 10,000 FCFA/hour"
          },
          {
            image: cafeSpaceImg,
            title: "Café & Networking Space",
            description: "Relaxation and informal collaboration zone",
            price: "Included with subscription"
          }
        ]
      },
      packages: {
        title: "Our Pricing",
        subtitle: "Choose the plan that fits your needs",
        items: [
          {
            name: "Day Pass",
            price: "15,000",
            period: "day",
            features: [
              "1 day access (9am-6pm)",
              "Starlink WiFi",
              "Free coffee",
              "Meeting room (1h)"
            ]
          },
          {
            name: "Monthly Subscription",
            price: "50,000",
            period: "month",
            popular: true,
            features: [
              "Unlimited 24/7 access",
              "Premium Starlink WiFi",
              "Coffee & snacks",
              "Meeting room (5h/month)",
              "Business address"
            ]
          },
          {
            name: "Private Office",
            price: "100,000",
            period: "month",
            features: [
              "Closed private office",
              "24/7 access",
              "All services included",
              "Unlimited meeting room",
              "Administrative services"
            ]
          }
        ]
      },
      cta: "Book Now"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={coworkingImg} 
            alt={t.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-accent mb-6">
            {t.hero.subtitle}
          </h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto mb-12">
            {t.hero.description}
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white hover:bg-accent/90 hover:scale-105 font-semibold px-10 py-7 text-lg shadow-glow transition-all duration-300 rounded-full"
          >
            {t.cta} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-glow transition-all duration-300">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-4 rounded-2xl w-fit mb-6">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section className="py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t.spaces.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.spaces.items.map((space, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative h-64">
                  <img 
                    src={space.image} 
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{space.title}</h3>
                    <p className="text-white/90 mb-2">{space.description}</p>
                    <p className="text-accent font-semibold">{space.price}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t.packages.title}
            </h2>
            <p className="text-xl text-muted-foreground">{t.packages.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.packages.items.map((pkg, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${pkg.popular ? 'border-primary shadow-glow scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {lang === 'fr' ? 'Populaire' : 'Popular'}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">FCFA/{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                  variant={pkg.popular ? 'default' : 'outline'}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default CoworkingPage;
