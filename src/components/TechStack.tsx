interface TechStackProps {
  lang: 'fr' | 'en';
}

const TechStack = ({ lang }: TechStackProps) => {
  const categories = [
    {
      title: lang === 'fr' ? "Frontend" : "Frontend",
      techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Flutter"],
    },
    {
      title: "Backend",
      techs: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
    },
    {
      title: lang === 'fr' ? "IA & Data" : "AI & Data",
      techs: ["TensorFlow", "PyTorch", "LangChain", "OpenAI", "Pandas", "Power BI"],
    },
    {
      title: lang === 'fr' ? "Cloud & DevOps" : "Cloud & DevOps",
      techs: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      title: lang === 'fr' ? "Sécurité" : "Security",
      techs: ["OWASP", "Burp Suite", "Nessus", "Kali Linux", "ISO 27001", "RGPD"],
    },
    {
      title: "Blockchain",
      techs: ["Solidity", "Ethereum", "Hardhat", "Web3.js", "IPFS", "Smart Contracts"],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-accent/20 text-accent rounded-full font-bold text-xs tracking-widest mb-6">
            {lang === 'fr' ? 'EXPERTISE TECHNIQUE' : 'TECH EXPERTISE'}
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {lang === 'fr' ? 'Notre Stack Technique' : 'Our Tech Stack'}
          </h2>
          <p className="text-lg text-background/50 max-w-2xl mx-auto">
            {lang === 'fr'
              ? "Les technologies et plateformes que nous maîtrisons pour livrer des solutions robustes."
              : "The technologies and platforms we master to deliver robust solutions."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="p-6 rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-accent mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-full bg-background/10 text-background/70 text-sm font-medium hover:bg-accent/20 hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
