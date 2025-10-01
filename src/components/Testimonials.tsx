import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialsProps {
  lang: 'fr' | 'en';
}

const Testimonials = ({ lang }: TestimonialsProps) => {
  const content = {
    fr: {
      title: "Ce Qu'Ils Disent de Nous",
      subtitle: "Témoignages de notre communauté",
      testimonials: [
        {
          name: "Startup Founder",
          role: "CEO, Tech Startup",
          text: "West Hub Innovation a transformé notre vision en réalité. L'accompagnement et l'accès au réseau ont été déterminants pour notre croissance.",
          rating: 5
        },
        {
          name: "Freelance Developer",
          role: "Développeur Full Stack",
          text: "L'espace de coworking est parfait pour travailler dans un environnement professionnel et rencontrer d'autres talents tech. Les meetups sont excellents!",
          rating: 5
        },
        {
          name: "Entrepreneur",
          role: "Fondateur PME",
          text: "Le conseil en stratégie digitale nous a aidés à moderniser notre entreprise. Une équipe compétente et à l'écoute de nos besoins.",
          rating: 5
        }
      ]
    },
    en: {
      title: "What They Say About Us",
      subtitle: "Testimonials from our community",
      testimonials: [
        {
          name: "Startup Founder",
          role: "CEO, Tech Startup",
          text: "West Hub Innovation transformed our vision into reality. The support and access to the network were crucial for our growth.",
          rating: 5
        },
        {
          name: "Freelance Developer",
          role: "Full Stack Developer",
          text: "The coworking space is perfect for working in a professional environment and meeting other tech talents. The meetups are excellent!",
          rating: 5
        },
        {
          name: "Entrepreneur",
          role: "SME Founder",
          text: "The digital strategy consulting helped us modernize our business. A competent team that listens to our needs.",
          rating: 5
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-bold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
