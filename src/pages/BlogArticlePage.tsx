import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowLeft, Newspaper, Rocket, Trophy } from "lucide-react";
import { useState } from "react";

const BlogArticlePage = () => {
  const { id } = useParams();
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const articlesData = {
    fr: [
      {
        id: "lancement-west-hub",
        title: "Lancement de West Hub Innovation : Un nouveau souffle pour l'écosystème tech",
        excerpt: "West Hub Innovation ouvre ses portes à Bafoussam avec l'ambition de devenir le hub technologique de référence en Afrique Centrale.",
        category: "Annonce",
        date: "15 Mars 2024",
        author: "Équipe West Hub",
        image: Newspaper,
        content: `
          <h2>Un nouveau hub pour l'Ouest Cameroun</h2>
          <p>Nous sommes ravis d'annoncer l'ouverture officielle de West Hub Innovation à Bafoussam, marquant une étape importante dans le développement de l'écosystème technologique de la Région de l'Ouest.</p>
          
          <h3>Notre Vision</h3>
          <p>West Hub Innovation aspire à devenir le catalyseur de l'innovation technologique en Afrique Centrale. Notre mission est de créer un environnement propice à l'émergence de startups innovantes et de talents tech de classe mondiale.</p>
          
          <h3>Nos Services</h3>
          <ul>
            <li><strong>Espaces de Coworking</strong> : Des bureaux modernes et flexibles pour travailler dans les meilleures conditions</li>
            <li><strong>Salles de Conférence</strong> : Équipements de pointe pour vos réunions et événements</li>
            <li><strong>Bureaux Privés</strong> : Espaces dédiés pour votre équipe</li>
            <li><strong>Formations</strong> : Programmes de développement de compétences tech</li>
          </ul>
          
          <h3>Rejoignez-nous</h3>
          <p>Que vous soyez entrepreneur, développeur, designer ou simplement passionné de technologie, West Hub Innovation vous accueille pour construire ensemble l'avenir du tech en Afrique.</p>
        `
      },
      {
        id: "transformation-digitale",
        title: "Comment réussir sa transformation digitale : Guide pratique pour PME",
        excerpt: "La transformation digitale n'est plus une option mais une nécessité. Découvrez les étapes clés pour digitaliser votre entreprise avec succès.",
        category: "Stratégie",
        date: "10 Mars 2024",
        author: "Expert Digital",
        image: Rocket,
        content: `
          <h2>La transformation digitale : Un impératif pour les PME</h2>
          <p>Dans un monde de plus en plus connecté, la transformation digitale est devenue cruciale pour la survie et la croissance des entreprises.</p>
          
          <h3>Étape 1 : Évaluer votre maturité digitale</h3>
          <p>Avant de vous lancer, il est essentiel de faire un état des lieux de votre situation actuelle. Où en êtes-vous dans votre parcours digital ?</p>
          
          <h3>Étape 2 : Définir une stratégie claire</h3>
          <p>Identifiez vos objectifs business et comment le digital peut vous aider à les atteindre. Ne digitalisez pas pour digitaliser, mais pour créer de la valeur.</p>
          
          <h3>Étape 3 : Former vos équipes</h3>
          <p>La technologie n'est rien sans les compétences pour l'utiliser. Investissez dans la formation de vos collaborateurs.</p>
          
          <h3>Étape 4 : Choisir les bons outils</h3>
          <p>CRM, ERP, outils de collaboration... Sélectionnez les solutions adaptées à vos besoins et votre budget.</p>
          
          <h3>Étape 5 : Mesurer et ajuster</h3>
          <p>Définissez des KPIs pour suivre vos progrès et ajustez votre stratégie en fonction des résultats.</p>
        `
      },
      {
        id: "success-story-100k",
        title: "Success Story : Startup camerounaise lève 100K$ grâce à West Tech",
        excerpt: "Retour sur le parcours inspirant d'une startup accompagnée par l'écosystème West Tech qui a réussi sa première levée de fonds.",
        category: "Success Story",
        date: "5 Mars 2024",
        author: "Community Manager",
        image: Trophy,
        content: `
          <h2>De l'idée à la levée de fonds</h2>
          <p>Découvrez comment une jeune startup camerounaise est passée d'une simple idée à une levée de fonds réussie de 100 000$ en seulement 18 mois.</p>
          
          <h3>Le début de l'aventure</h3>
          <p>Tout a commencé dans notre espace de coworking, où les fondateurs ont développé leur MVP en participant à nos programmes d'accompagnement.</p>
          
          <h3>L'accompagnement West Tech</h3>
          <p>Grâce au mentorat personnalisé, aux formations techniques et au réseau de l'écosystème West Tech, l'équipe a pu structurer son projet et attirer l'attention des investisseurs.</p>
          
          <h3>Les clés du succès</h3>
          <ul>
            <li>Une vision claire et un business model solide</li>
            <li>Une équipe complémentaire et déterminée</li>
            <li>Un produit qui répond à un vrai besoin du marché</li>
            <li>Un excellent pitch et une présentation professionnelle</li>
          </ul>
          
          <h3>Et maintenant ?</h3>
          <p>La startup continue son développement avec l'ambition de devenir un acteur majeur de son secteur en Afrique Centrale.</p>
        `
      },
      {
        id: "bootcamp-web-dev",
        title: "Bootcamp Web Development : Les inscriptions sont ouvertes",
        excerpt: "Rejoignez notre prochain bootcamp intensif de 12 semaines pour maîtriser React, Node.js et devenir développeur fullstack.",
        category: "Événement",
        date: "1 Mars 2024",
        author: "Équipe Formation",
        image: Rocket,
        content: `
          <h2>Devenez Développeur Fullstack en 12 semaines</h2>
          <p>Notre bootcamp intensif vous permettra d'acquérir toutes les compétences nécessaires pour démarrer une carrière dans le développement web.</p>
          
          <h3>Programme</h3>
          <ul>
            <li><strong>Semaines 1-4</strong> : Fondamentaux du web (HTML, CSS, JavaScript)</li>
            <li><strong>Semaines 5-8</strong> : Frontend moderne avec React et TypeScript</li>
            <li><strong>Semaines 9-11</strong> : Backend avec Node.js et bases de données</li>
            <li><strong>Semaine 12</strong> : Projet final et présentation</li>
          </ul>
          
          <h3>Pour qui ?</h3>
          <p>Ce bootcamp s'adresse aux débutants motivés et aux professionnels en reconversion qui souhaitent se lancer dans le développement web.</p>
          
          <h3>Modalités</h3>
          <p>Formation en présentiel à West Hub Innovation, du lundi au vendredi de 9h à 17h. Places limitées à 20 participants.</p>
          
          <h3>Inscriptions</h3>
          <p>Les inscriptions sont ouvertes jusqu'au 25 Mars 2024. Contactez-nous pour réserver votre place !</p>
        `
      },
      {
        id: "bilan-2023",
        title: "L'écosystème West Tech en chiffres : Bilan 2023",
        excerpt: "Découvrez les accomplissements de la communauté West Tech en 2023 : événements, startups lancées, emplois créés et plus encore.",
        category: "Rapport",
        date: "25 Février 2024",
        author: "Direction",
        image: Trophy,
        content: `
          <h2>Une année 2023 exceptionnelle</h2>
          <p>L'année 2023 a marqué un tournant pour l'écosystème West Tech avec des résultats dépassant toutes nos attentes.</p>
          
          <h3>Les chiffres clés</h3>
          <ul>
            <li><strong>50+ startups</strong> accompagnées</li>
            <li><strong>200+ emplois</strong> créés</li>
            <li><strong>30+ événements</strong> organisés</li>
            <li><strong>1000+ membres</strong> dans la communauté</li>
            <li><strong>5M FCFA</strong> levés par nos startups</li>
          </ul>
          
          <h3>Nos succès</h3>
          <p>Plusieurs startups de notre écosystème ont connu des succès remarquables, avec des levées de fonds, des expansions internationales et des partenariats stratégiques.</p>
          
          <h3>Nos événements phares</h3>
          <p>Tech Talks mensuels, hackathons, bootcamps, sessions de networking... Nous avons créé de nombreuses opportunités de rencontre et d'apprentissage.</p>
          
          <h3>2024 : Cap vers de nouveaux horizons</h3>
          <p>Fort de ces résultats, nous nous préparons à une année 2024 encore plus ambitieuse avec de nouveaux programmes et services.</p>
        `
      },
      {
        id: "tendances-2024",
        title: "5 tendances tech à surveiller en 2024 en Afrique",
        excerpt: "Intelligence artificielle, fintech, agritech... Découvrez les secteurs qui vont transformer le continent africain cette année.",
        category: "Tendances",
        date: "20 Février 2024",
        author: "Analyste Tech",
        image: Rocket,
        content: `
          <h2>L'Afrique à l'heure de la révolution technologique</h2>
          <p>Le continent africain connaît une transformation digitale sans précédent. Voici les 5 tendances à suivre de près en 2024.</p>
          
          <h3>1. L'Intelligence Artificielle générative</h3>
          <p>L'IA générative s'invite dans tous les secteurs, de l'éducation au commerce en passant par la santé. Les startups africaines adoptent ces technologies pour créer des solutions locales.</p>
          
          <h3>2. La Fintech inclusive</h3>
          <p>Mobile money, microfinance digitale, crypto-monnaies... La fintech continue de révolutionner l'accès aux services financiers en Afrique.</p>
          
          <h3>3. L'Agritech</h3>
          <p>Technologies pour l'agriculture de précision, marketplaces agricoles, systèmes d'irrigation intelligents... L'agritech transforme le secteur primaire africain.</p>
          
          <h3>4. L'EdTech</h3>
          <p>Plateformes d'apprentissage en ligne, contenus éducatifs localisés, certifications digitales... L'éducation se digitalise rapidement.</p>
          
          <h3>5. La HealthTech</h3>
          <p>Télémédecine, dossiers médicaux électroniques, diagnostic assisté par IA... La santé digitale améliore l'accès aux soins de qualité.</p>
        `
      }
    ],
    en: [
      {
        id: "lancement-west-hub",
        title: "West Hub Innovation Launch: A new breath for the tech ecosystem",
        excerpt: "West Hub Innovation opens its doors in Bafoussam with the ambition to become the reference tech hub in Central Africa.",
        category: "Announcement",
        date: "March 15, 2024",
        author: "West Hub Team",
        image: Newspaper,
        content: `
          <h2>A new hub for Western Cameroon</h2>
          <p>We are excited to announce the official opening of West Hub Innovation in Bafoussam, marking an important milestone in the development of the West Region's technology ecosystem.</p>
          
          <h3>Our Vision</h3>
          <p>West Hub Innovation aspires to become the catalyst for technological innovation in Central Africa. Our mission is to create an environment conducive to the emergence of innovative startups and world-class tech talents.</p>
          
          <h3>Our Services</h3>
          <ul>
            <li><strong>Coworking Spaces</strong>: Modern and flexible offices to work in the best conditions</li>
            <li><strong>Conference Rooms</strong>: State-of-the-art equipment for your meetings and events</li>
            <li><strong>Private Offices</strong>: Dedicated spaces for your team</li>
            <li><strong>Training</strong>: Tech skills development programs</li>
          </ul>
          
          <h3>Join Us</h3>
          <p>Whether you are an entrepreneur, developer, designer or simply a technology enthusiast, West Hub Innovation welcomes you to build the future of tech in Africa together.</p>
        `
      },
      {
        id: "transformation-digitale",
        title: "How to succeed in digital transformation: Practical guide for SMEs",
        excerpt: "Digital transformation is no longer an option but a necessity. Discover the key steps to successfully digitize your business.",
        category: "Strategy",
        date: "March 10, 2024",
        author: "Digital Expert",
        image: Rocket,
        content: `
          <h2>Digital Transformation: An Imperative for SMEs</h2>
          <p>In an increasingly connected world, digital transformation has become crucial for business survival and growth.</p>
          
          <h3>Step 1: Assess your digital maturity</h3>
          <p>Before you start, it's essential to take stock of your current situation. Where are you in your digital journey?</p>
          
          <h3>Step 2: Define a clear strategy</h3>
          <p>Identify your business objectives and how digital can help you achieve them. Don't digitize for the sake of it, but to create value.</p>
          
          <h3>Step 3: Train your teams</h3>
          <p>Technology is nothing without the skills to use it. Invest in training your employees.</p>
          
          <h3>Step 4: Choose the right tools</h3>
          <p>CRM, ERP, collaboration tools... Select solutions adapted to your needs and budget.</p>
          
          <h3>Step 5: Measure and adjust</h3>
          <p>Define KPIs to track your progress and adjust your strategy based on results.</p>
        `
      },
      {
        id: "success-story-100k",
        title: "Success Story: Cameroonian startup raises 100K$ thanks to West Tech",
        excerpt: "Review of the inspiring journey of a startup supported by the West Tech ecosystem that succeeded in its first fundraising.",
        category: "Success Story",
        date: "March 5, 2024",
        author: "Community Manager",
        image: Trophy,
        content: `
          <h2>From Idea to Fundraising</h2>
          <p>Discover how a young Cameroonian startup went from a simple idea to a successful $100,000 fundraising in just 18 months.</p>
          
          <h3>The Beginning of the Adventure</h3>
          <p>It all started in our coworking space, where the founders developed their MVP by participating in our support programs.</p>
          
          <h3>West Tech Support</h3>
          <p>Thanks to personalized mentoring, technical training and the West Tech ecosystem network, the team was able to structure their project and attract investor attention.</p>
          
          <h3>Keys to Success</h3>
          <ul>
            <li>A clear vision and solid business model</li>
            <li>A complementary and determined team</li>
            <li>A product that addresses a real market need</li>
            <li>An excellent pitch and professional presentation</li>
          </ul>
          
          <h3>What's Next?</h3>
          <p>The startup continues its development with the ambition to become a major player in its sector in Central Africa.</p>
        `
      },
      {
        id: "bootcamp-web-dev",
        title: "Web Development Bootcamp: Applications are open",
        excerpt: "Join our next intensive 12-week bootcamp to master React, Node.js and become a fullstack developer.",
        category: "Event",
        date: "March 1, 2024",
        author: "Training Team",
        image: Rocket,
        content: `
          <h2>Become a Fullstack Developer in 12 weeks</h2>
          <p>Our intensive bootcamp will allow you to acquire all the skills needed to start a career in web development.</p>
          
          <h3>Program</h3>
          <ul>
            <li><strong>Weeks 1-4</strong>: Web fundamentals (HTML, CSS, JavaScript)</li>
            <li><strong>Weeks 5-8</strong>: Modern frontend with React and TypeScript</li>
            <li><strong>Weeks 9-11</strong>: Backend with Node.js and databases</li>
            <li><strong>Week 12</strong>: Final project and presentation</li>
          </ul>
          
          <h3>For Whom?</h3>
          <p>This bootcamp is for motivated beginners and professionals in career transition who want to get into web development.</p>
          
          <h3>Details</h3>
          <p>In-person training at West Hub Innovation, Monday to Friday from 9am to 5pm. Limited to 20 participants.</p>
          
          <h3>Registration</h3>
          <p>Registration is open until March 25, 2024. Contact us to reserve your spot!</p>
        `
      },
      {
        id: "bilan-2023",
        title: "West Tech ecosystem in numbers: 2023 Report",
        excerpt: "Discover the achievements of the West Tech community in 2023: events, startups launched, jobs created and more.",
        category: "Report",
        date: "February 25, 2024",
        author: "Management",
        image: Trophy,
        content: `
          <h2>An Exceptional 2023</h2>
          <p>The year 2023 marked a turning point for the West Tech ecosystem with results exceeding all our expectations.</p>
          
          <h3>Key Figures</h3>
          <ul>
            <li><strong>50+ startups</strong> supported</li>
            <li><strong>200+ jobs</strong> created</li>
            <li><strong>30+ events</strong> organized</li>
            <li><strong>1000+ members</strong> in the community</li>
            <li><strong>5M FCFA</strong> raised by our startups</li>
          </ul>
          
          <h3>Our Successes</h3>
          <p>Several startups in our ecosystem have achieved remarkable success, with fundraising, international expansions and strategic partnerships.</p>
          
          <h3>Our Flagship Events</h3>
          <p>Monthly Tech Talks, hackathons, bootcamps, networking sessions... We created many opportunities for meeting and learning.</p>
          
          <h3>2024: Heading for New Horizons</h3>
          <p>Building on these results, we are preparing for an even more ambitious 2024 with new programs and services.</p>
        `
      },
      {
        id: "tendances-2024",
        title: "5 tech trends to watch in 2024 in Africa",
        excerpt: "Artificial intelligence, fintech, agritech... Discover the sectors that will transform the African continent this year.",
        category: "Trends",
        date: "February 20, 2024",
        author: "Tech Analyst",
        image: Rocket,
        content: `
          <h2>Africa in the Era of Technological Revolution</h2>
          <p>The African continent is experiencing an unprecedented digital transformation. Here are the 5 trends to watch closely in 2024.</p>
          
          <h3>1. Generative Artificial Intelligence</h3>
          <p>Generative AI is entering all sectors, from education to commerce and healthcare. African startups are adopting these technologies to create local solutions.</p>
          
          <h3>2. Inclusive Fintech</h3>
          <p>Mobile money, digital microfinance, cryptocurrencies... Fintech continues to revolutionize access to financial services in Africa.</p>
          
          <h3>3. Agritech</h3>
          <p>Precision agriculture technologies, agricultural marketplaces, smart irrigation systems... Agritech is transforming Africa's primary sector.</p>
          
          <h3>4. EdTech</h3>
          <p>Online learning platforms, localized educational content, digital certifications... Education is rapidly digitizing.</p>
          
          <h3>5. HealthTech</h3>
          <p>Telemedicine, electronic medical records, AI-assisted diagnosis... Digital health is improving access to quality care.</p>
        `
      }
    ]
  };

  const articles = articlesData[lang];
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const Icon = article.image;

  return (
    <div className="min-h-screen">
      <Navigation lang={lang} toggleLang={toggleLang} />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {lang === 'fr' ? 'Retour au blog' : 'Back to blog'}
            </Button>
          </Link>

          <Card className="overflow-hidden shadow-glow">
            <div className="bg-gradient-to-br from-primary to-secondary p-16 flex items-center justify-center">
              <Icon className="h-32 w-32 text-white" />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="h-4 w-4 mr-1" />
                  {article.author}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {article.title}
              </h1>

              <div 
                className="prose prose-lg max-w-none text-foreground
                  prose-headings:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:text-muted-foreground prose-ul:my-4
                  prose-li:mb-2
                  prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </Card>
        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
};

export default BlogArticlePage;