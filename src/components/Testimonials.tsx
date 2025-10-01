import { User, Star, Quote } from "lucide-react";

interface TestimonialsProps {
  lang: 'fr' | 'en';
}

const Testimonials = ({ lang }: TestimonialsProps) => {
  const content = {
    fr: {
      title: "Ils Nous Font Confiance",
      subtitle: "Témoignages de notre communauté dynamique",
      testimonials: [
        {
          name: "Marie Kouam",
          role: "CEO, Tech Startup",
          content: "West Hub Innovation a transformé notre vision en réalité. L'accompagnement et l'accès au réseau ont été déterminants pour notre croissance."
        },
        {
          name: "Paul Tagne",
          role: "Développeur Full Stack",
          content: "L'espace de coworking est parfait pour travailler dans un environnement professionnel et rencontrer d'autres talents tech. Les meetups sont excellents!"
        },
        {
          name: "Sophie Nana",
          role: "Fondatrice PME",
          content: "Le conseil en stratégie digitale nous a aidés à moderniser notre entreprise. Une équipe compétente et à l'écoute de nos besoins."
        }
      ]
    },
    en: {
      title: "They Trust Us",
      subtitle: "Testimonials from our dynamic community",
      testimonials: [
        {
          name: "Marie Kouam",
          role: "CEO, Tech Startup",
          content: "West Hub Innovation transformed our vision into reality. The support and access to the network were crucial for our growth."
        },
        {
          name: "Paul Tagne",
          role: "Full Stack Developer",
          content: "The coworking space is perfect for working in a professional environment and meeting other tech talents. The meetups are excellent!"
        },
        {
          name: "Sophie Nana",
          role: "SME Founder",
          content: "The digital strategy consulting helped us modernize our business. A competent team that listens to our needs."
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-accent/10 text-accent-foreground rounded-full font-semibold text-sm mb-6">
            {lang === 'fr' ? 'TÉMOIGNAGES' : 'TESTIMONIALS'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl p-10 shadow-card hover:shadow-glow transition-all duration-500 border border-border hover:border-accent/30"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-accent" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full p-4 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base italic">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
