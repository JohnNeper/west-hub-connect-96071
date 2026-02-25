import { Button } from "@/components/ui/button";
import partnerAic from "@/assets/partner-aic.png";
import partnerDimeltech from "@/assets/partner-dimeltech.png";
import partnerKamlewa from "@/assets/partner-kamlewa.jpg";

interface PartnersProps {
  lang: 'fr' | 'en';
}

const Partners = ({ lang }: PartnersProps) => {
  const partners = [
    { name: "Dimel Tech", logo: partnerDimeltech },
    { name: "Kamlewa Technologie", logo: partnerKamlewa },
    { name: "AIC", logo: partnerAic },
    { name: "Université de Dschang", logo: null },
  ];

  const trustedBy = [
    "West Tech", "Orange Cameroun", "MTN Cameroon", "GIZ", "Université de Dschang", "MINPOSTEL"
  ];

  return (
    <section id="partners" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-accent/10 text-accent rounded-full font-bold text-xs tracking-widest mb-6">
            {lang === 'fr' ? 'PARTENAIRES' : 'PARTNERS'}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            {lang === 'fr' ? 'Trusted By' : 'Trusted By'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'fr'
              ? "Entreprises, institutions et organisations qui nous font confiance."
              : "Companies, institutions and organizations that trust us."}
          </p>
        </div>

        {/* Partner logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {trustedBy.map((name, i) => (
            <div
              key={i}
              className="aspect-[3/2] bg-card rounded-xl border border-border flex items-center justify-center p-4 hover:shadow-card hover:border-accent/20 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-muted-foreground text-center">{name}</span>
            </div>
          ))}
        </div>

        {/* Key partners with logos */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {lang === 'fr' ? 'Partenaires Stratégiques' : 'Strategic Partners'}
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border border-border p-6 flex flex-col items-center justify-center gap-3 hover:shadow-card hover:border-accent/20 transition-all"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
              ) : (
                <div className="h-16 flex items-center">
                  <span className="text-lg font-bold text-foreground">{partner.name}</span>
                </div>
              )}
              <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 font-bold"
            onClick={() => window.location.href = '/contact'}
          >
            {lang === 'fr' ? 'Devenir Partenaire' : 'Become a Partner'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
