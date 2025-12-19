import { useParams, Link, Navigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, User, ArrowLeft, Heart, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import westHubLaunch from "@/assets/blog-west-hub-launch.jpg";
import digitalTransformation from "@/assets/blog-digital-transformation.jpg";
import successStory from "@/assets/blog-success-story.jpg";
import bootcamp from "@/assets/blog-bootcamp.jpg";
import report2023 from "@/assets/blog-report-2023.jpg";
import techTrends from "@/assets/blog-tech-trends.jpg";

const BlogArticlePage = () => {
  const { id } = useParams();
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    { id: 1, author: "Jean Dupont", text: "Excellent article ! Très inspirant.", date: "16 Mars 2024" },
    { id: 2, author: "Marie Kamdem", text: "Merci pour ces informations précieuses.", date: "16 Mars 2024" }
  ]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const { toast } = useToast();

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    toast({
      description: isLiked ? (lang === 'fr' ? "Like retiré" : "Like removed") : (lang === 'fr' ? "Article aimé !" : "Article liked!"),
    });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.text) {
      const comment = {
        id: comments.length + 1,
        author: newComment.name,
        text: newComment.text,
        date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      };
      setComments([...comments, comment]);
      setNewComment({ name: "", text: "" });
      toast({
        description: lang === 'fr' ? "Commentaire ajouté avec succès !" : "Comment added successfully!",
      });
    }
  };

  const articlesData = {
    fr: [
      {
        id: "west-all-tech-festival-2025",
        title: "West All Tech Festival 2025 : Le plus grand événement tech de l'Ouest Cameroun",
        excerpt: "Rejoignez-nous le 27 Juillet 2025 au West Digital Hub à Bafoussam pour le West All Tech Festival !",
        category: "Événement",
        date: "27 Juillet 2025",
        author: "West Tech Team",
        image: westHubLaunch,
        content: `
          <h2>Le rendez-vous incontournable de la tech à l'Ouest</h2>
          <p>Le West All Tech Festival 2025 est l'événement tech majeur de la Région de l'Ouest Cameroun. Plus de 150 participants sont attendus pour célébrer l'innovation et l'entrepreneuriat tech.</p>
          
          <h3>Programme de l'événement</h3>
          <ul>
            <li><strong>Conférences</strong> : Des speakers inspirants sur l'entrepreneuriat tech en Afrique</li>
            <li><strong>Networking</strong> : Rencontrez les entrepreneurs, développeurs et investisseurs de la région</li>
            <li><strong>Démonstrations</strong> : Découvrez les dernières innovations des startups locales</li>
            <li><strong>Ateliers pratiques</strong> : Sessions hands-on pour développer vos compétences</li>
          </ul>
          
          <h3>Informations pratiques</h3>
          <p><strong>Date :</strong> 27 Juillet 2025 à 18h00</p>
          <p><strong>Lieu :</strong> West Digital Hub, Bafoussam</p>
          <p><strong>Participants attendus :</strong> 150+</p>
          
          <h3>Inscriptions</h3>
          <p>Les inscriptions sont ouvertes ! Réservez votre place dès maintenant pour ne pas manquer cet événement exceptionnel.</p>
        `
      },
      {
        id: "inauguration-west-digital-hub",
        title: "Inauguration du West Digital Hub : Une nouvelle ère numérique pour l'Ouest",
        excerpt: "Le West Digital Hub ouvre officiellement ses portes à Bafoussam.",
        category: "Annonce",
        date: "15 Juin 2025",
        author: "Therence Ngniguepa",
        image: digitalTransformation,
        content: `
          <h2>Une nouvelle ère numérique s'ouvre à l'Ouest Cameroun</h2>
          <p>Nous posons les bases du West Digital Hub, le premier hub tech avec WiFi Starlink 24/7 à Bafoussam, Région de l'Ouest Cameroun.</p>
          
          <h3>Notre mission</h3>
          <p>West Digital Hub aspire à combler le fossé numérique et créer des opportunités pour les talents de l'Ouest Cameroun afin de construire des solutions tech compétitives tout en répondant aux défis locaux.</p>
          
          <h3>Nos infrastructures</h3>
          <ul>
            <li><strong>Espace Coworking 24/7</strong> : Travaillez à toute heure avec WiFi Starlink et électricité garantis</li>
            <li><strong>Bureaux Privés</strong> : Espaces dédiés pour équipes en croissance</li>
            <li><strong>Salles de Réunion</strong> : Équipements modernes pour vos meetings</li>
            <li><strong>Incubateur</strong> : Programme d'accompagnement pour startups</li>
          </ul>
          
          <h3>Notre communauté</h3>
          <p>Avec plus de 1000 membres, 500+ entrepreneurs formés et 5+ startups lancées, West Digital Hub est devenu le cœur de l'écosystème tech de la région.</p>
        `
      },
      {
        id: "innovator-talks-blockchain",
        title: "Innovator Talks : Blockchain & Opportunités en Afrique avec Duclair Fopa Kuete",
        excerpt: "Chaque vendredi de 16h à 18h, rejoignez nos sessions Innovator Talks.",
        category: "Talk",
        date: "20 Juin 2025",
        author: "Patrick Manfouo",
        image: techTrends,
        content: `
          <h2>West Tech Talk Program</h2>
          <p>Rejoignez nos sessions hebdomadaires featuring des entrepreneurs à succès, experts de l'industrie et innovateurs tech qui partagent leurs insights et conseils pratiques.</p>
          
          <h3>Ce mois-ci : Blockchain & Opportunités en Afrique</h3>
          <p>Duclair Fopa Kuete, CEO de TalantaChain, nous parlera des opportunités de la blockchain pour les entrepreneurs africains.</p>
          
          <h3>Le format Innovator Talks</h3>
          <ul>
            <li><strong>Quand :</strong> Chaque vendredi de 16h à 18h</li>
            <li><strong>Pour qui :</strong> Étudiants, entrepreneurs et passionnés de tech</li>
            <li><strong>Format :</strong> Présentation suivie de Q&A et networking</li>
          </ul>
          
          <h3>Speakers précédents</h3>
          <p>Nous avons eu l'honneur d'accueillir des leaders de l'industrie tech camerounaise et africaine. Rejoignez-nous pour le prochain talk !</p>
        `
      },
      {
        id: "capture-the-flag-hackathon",
        title: "Capture The Flag Hackathon à l'Orange Digital Center Dschang",
        excerpt: "Plus de 200 participants au hackathon CTF organisé en partenariat avec l'Orange Digital Center de Dschang.",
        category: "Hackathon",
        date: "5 Septembre 2024",
        author: "Dilane Goune",
        image: bootcamp,
        content: `
          <h2>Un hackathon cybersécurité intense</h2>
          <p>En partenariat avec l'Orange Digital Center de Dschang, nous avons organisé un hackathon Capture The Flag rassemblant plus de 200 participants.</p>
          
          <h3>Le concept CTF</h3>
          <p>Le Capture The Flag est une compétition de cybersécurité où les participants doivent résoudre des défis pour "capturer des drapeaux" (flags). C'est une excellente façon d'apprendre la sécurité informatique de manière ludique.</p>
          
          <h3>Les catégories de défis</h3>
          <ul>
            <li><strong>Web Security</strong> : Vulnérabilités des applications web</li>
            <li><strong>Cryptographie</strong> : Déchiffrement et analyse cryptographique</li>
            <li><strong>Reverse Engineering</strong> : Analyse de binaires</li>
            <li><strong>Forensics</strong> : Investigation numérique</li>
          </ul>
          
          <h3>Nos partenaires</h3>
          <p>Merci à l'Orange Digital Center Dschang et à l'Université de Dschang pour leur soutien dans l'organisation de cet événement.</p>
        `
      },
      {
        id: "investor-pitch-day",
        title: "Investor Pitch Day : Connectez votre startup aux investisseurs",
        excerpt: "Le prochain Investor Pitch Day aura lieu au West Tech Incubator à Bafoussam.",
        category: "Funding",
        date: "20 Septembre 2024",
        author: "Sandra Motue",
        image: successStory,
        content: `
          <h2>Présentez votre startup aux investisseurs</h2>
          <p>L'Investor Pitch Day est une opportunité unique pour les startups de l'écosystème West Tech de présenter leurs projets à un panel d'investisseurs.</p>
          
          <h3>Comment participer ?</h3>
          <ul>
            <li>Être une startup en phase de seed ou série A</li>
            <li>Avoir un MVP fonctionnel</li>
            <li>Présenter un business plan solide</li>
            <li>Soumettre sa candidature avant la date limite</li>
          </ul>
          
          <h3>Le format</h3>
          <p>5 minutes de pitch suivies de 3 minutes de Q&A avec les investisseurs. Un coaching préalable est offert aux startups sélectionnées.</p>
          
          <h3>Nos success stories</h3>
          <p>Plusieurs startups de notre incubateur ont déjà levé des fonds grâce à cet événement. Rejoignez-nous pour la prochaine édition !</p>
        `
      },
      {
        id: "partenariat-universite-dschang",
        title: "Partenariat avec l'Université de Dschang : Former les entrepreneurs de demain",
        excerpt: "West Tech renforce son partenariat avec l'Université de Dschang.",
        category: "Partenariat",
        date: "10 Mai 2024",
        author: "West Tech Team",
        image: report2023,
        content: `
          <h2>Un partenariat stratégique pour l'innovation</h2>
          <p>West Tech et l'Université de Dschang unissent leurs forces pour développer l'entrepreneuriat étudiant et la recherche appliquée dans la région Ouest.</p>
          
          <h3>Les axes du partenariat</h3>
          <ul>
            <li><strong>Programmes de formation</strong> : Bootcamps et workshops pour étudiants</li>
            <li><strong>Stages</strong> : Opportunités de stages dans les startups de l'écosystème</li>
            <li><strong>Recherche</strong> : Projets de R&D collaboratifs</li>
            <li><strong>Incubation</strong> : Accompagnement des projets étudiants prometteurs</li>
          </ul>
          
          <h3>Nos partenaires académiques</h3>
          <p>Ce partenariat s'inscrit dans notre volonté de connecter le monde académique à l'écosystème entrepreneurial. Avec l'Université de Dschang, nous formons les innovateurs de demain.</p>
          
          <h3>Rejoignez le programme étudiant</h3>
          <p>Vous êtes étudiant et intéressé par l'entrepreneuriat tech ? Contactez-nous pour en savoir plus sur nos programmes dédiés.</p>
        `
      }
    ],
    en: [
      {
        id: "west-all-tech-festival-2025",
        title: "West All Tech Festival 2025: The Biggest Tech Event in Western Cameroon",
        excerpt: "Join us on July 27, 2025 at West Digital Hub in Bafoussam for the West All Tech Festival!",
        category: "Event",
        date: "July 27, 2025",
        author: "West Tech Team",
        image: westHubLaunch,
        content: `
          <h2>The must-attend tech event in the West</h2>
          <p>The West All Tech Festival 2025 is the major tech event of the West Region of Cameroon. Over 150 participants are expected to celebrate tech innovation and entrepreneurship.</p>
          
          <h3>Event Program</h3>
          <ul>
            <li><strong>Conferences</strong>: Inspiring speakers on tech entrepreneurship in Africa</li>
            <li><strong>Networking</strong>: Meet entrepreneurs, developers and investors from the region</li>
            <li><strong>Demonstrations</strong>: Discover the latest innovations from local startups</li>
            <li><strong>Hands-on Workshops</strong>: Sessions to develop your skills</li>
          </ul>
          
          <h3>Practical Information</h3>
          <p><strong>Date:</strong> July 27, 2025 at 6:00 PM</p>
          <p><strong>Location:</strong> West Digital Hub, Bafoussam</p>
          <p><strong>Expected participants:</strong> 150+</p>
          
          <h3>Registration</h3>
          <p>Registrations are open! Reserve your spot now to not miss this exceptional event.</p>
        `
      },
      {
        id: "inauguration-west-digital-hub",
        title: "West Digital Hub Inauguration: A New Digital Era for the West",
        excerpt: "West Digital Hub officially opens its doors in Bafoussam.",
        category: "Announcement",
        date: "June 15, 2025",
        author: "Therence Ngniguepa",
        image: digitalTransformation,
        content: `
          <h2>A new digital era opens in Western Cameroon</h2>
          <p>We are laying the foundation for West Digital Hub, the first tech hub with 24/7 Starlink WiFi in Bafoussam, West Region of Cameroon.</p>
          
          <h3>Our Mission</h3>
          <p>West Digital Hub aspires to bridge the digital divide and create opportunities for talented individuals in Western Cameroon to build globally competitive tech solutions while addressing local challenges.</p>
          
          <h3>Our Infrastructure</h3>
          <ul>
            <li><strong>24/7 Coworking Space</strong>: Work anytime with guaranteed Starlink WiFi and electricity</li>
            <li><strong>Private Offices</strong>: Dedicated spaces for growing teams</li>
            <li><strong>Meeting Rooms</strong>: Modern equipment for your meetings</li>
            <li><strong>Incubator</strong>: Support program for startups</li>
          </ul>
          
          <h3>Our Community</h3>
          <p>With over 1000 members, 500+ entrepreneurs trained and 5+ startups launched, West Digital Hub has become the heart of the region's tech ecosystem.</p>
        `
      },
      {
        id: "innovator-talks-blockchain",
        title: "Innovator Talks: Blockchain & Opportunities in Africa with Duclair Fopa Kuete",
        excerpt: "Every Friday from 4-6pm, join our Innovator Talks sessions.",
        category: "Talk",
        date: "June 20, 2025",
        author: "Patrick Manfouo",
        image: techTrends,
        content: `
          <h2>West Tech Talk Program</h2>
          <p>Join our weekly sessions featuring successful entrepreneurs, industry experts and tech innovators who share insights and practical advice.</p>
          
          <h3>This Month: Blockchain & Opportunities in Africa</h3>
          <p>Duclair Fopa Kuete, CEO of TalantaChain, will talk about blockchain opportunities for African entrepreneurs.</p>
          
          <h3>The Innovator Talks Format</h3>
          <ul>
            <li><strong>When:</strong> Every Friday from 4-6pm</li>
            <li><strong>For whom:</strong> Students, entrepreneurs and tech enthusiasts</li>
            <li><strong>Format:</strong> Presentation followed by Q&A and networking</li>
          </ul>
          
          <h3>Previous Speakers</h3>
          <p>We have had the honor of hosting leaders from the Cameroonian and African tech industry. Join us for the next talk!</p>
        `
      },
      {
        id: "capture-the-flag-hackathon",
        title: "Capture The Flag Hackathon at Orange Digital Center Dschang",
        excerpt: "Over 200 participants at the CTF hackathon organized in partnership with Orange Digital Center in Dschang.",
        category: "Hackathon",
        date: "September 5, 2024",
        author: "Dilane Goune",
        image: bootcamp,
        content: `
          <h2>An Intense Cybersecurity Hackathon</h2>
          <p>In partnership with Orange Digital Center in Dschang, we organized a Capture The Flag hackathon bringing together over 200 participants.</p>
          
          <h3>The CTF Concept</h3>
          <p>Capture The Flag is a cybersecurity competition where participants must solve challenges to "capture flags". It's an excellent way to learn computer security in a fun way.</p>
          
          <h3>Challenge Categories</h3>
          <ul>
            <li><strong>Web Security</strong>: Web application vulnerabilities</li>
            <li><strong>Cryptography</strong>: Decryption and cryptographic analysis</li>
            <li><strong>Reverse Engineering</strong>: Binary analysis</li>
            <li><strong>Forensics</strong>: Digital investigation</li>
          </ul>
          
          <h3>Our Partners</h3>
          <p>Thanks to Orange Digital Center Dschang and University of Dschang for their support in organizing this event.</p>
        `
      },
      {
        id: "investor-pitch-day",
        title: "Investor Pitch Day: Connect Your Startup to Investors",
        excerpt: "The next Investor Pitch Day will take place at West Tech Incubator in Bafoussam.",
        category: "Funding",
        date: "September 20, 2024",
        author: "Sandra Motue",
        image: successStory,
        content: `
          <h2>Present Your Startup to Investors</h2>
          <p>Investor Pitch Day is a unique opportunity for West Tech ecosystem startups to present their projects to a panel of investors.</p>
          
          <h3>How to Participate?</h3>
          <ul>
            <li>Be a startup in seed or series A stage</li>
            <li>Have a functional MVP</li>
            <li>Present a solid business plan</li>
            <li>Submit application before deadline</li>
          </ul>
          
          <h3>The Format</h3>
          <p>5 minutes of pitch followed by 3 minutes of Q&A with investors. Prior coaching is offered to selected startups.</p>
          
          <h3>Our Success Stories</h3>
          <p>Several startups from our incubator have already raised funds through this event. Join us for the next edition!</p>
        `
      },
      {
        id: "partenariat-universite-dschang",
        title: "Partnership with University of Dschang: Training Tomorrow's Entrepreneurs",
        excerpt: "West Tech strengthens its partnership with University of Dschang.",
        category: "Partnership",
        date: "May 10, 2024",
        author: "West Tech Team",
        image: report2023,
        content: `
          <h2>A Strategic Partnership for Innovation</h2>
          <p>West Tech and University of Dschang join forces to develop student entrepreneurship and applied research in the West region.</p>
          
          <h3>Partnership Focus Areas</h3>
          <ul>
            <li><strong>Training Programs</strong>: Bootcamps and workshops for students</li>
            <li><strong>Internships</strong>: Internship opportunities in ecosystem startups</li>
            <li><strong>Research</strong>: Collaborative R&D projects</li>
            <li><strong>Incubation</strong>: Support for promising student projects</li>
          </ul>
          
          <h3>Our Academic Partners</h3>
          <p>This partnership is part of our commitment to connect the academic world to the entrepreneurial ecosystem. With University of Dschang, we are training tomorrow's innovators.</p>
          
          <h3>Join the Student Program</h3>
          <p>Are you a student interested in tech entrepreneurship? Contact us to learn more about our dedicated programs.</p>
        `
      }
    ]
  };

  const articles = articlesData[lang];
  const article = articles.find(a => a.id === id);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

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

          <Card className="overflow-hidden shadow-glow mb-8">
            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-4">
                  {article.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {article.title}
                </h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12">
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

              {/* Like Button */}
              <div className="mt-12 pt-8 border-t border-border">
                <Button
                  onClick={handleLike}
                  variant={isLiked ? "default" : "outline"}
                  size="lg"
                  className="gap-2"
                >
                  <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  {likes} {lang === 'fr' ? 'J\'aime' : 'Likes'}
                </Button>
              </div>
            </div>
          </Card>

          {/* Comments Section */}
          <Card className="p-8 md:p-12 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6" />
              {lang === 'fr' ? 'Commentaires' : 'Comments'} ({comments.length})
            </h2>

            {/* Comment List */}
            <div className="space-y-6 mb-8">
              {comments.map((comment) => (
                <div key={comment.id} className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">• {comment.date}</span>
                  </div>
                  <p className="text-muted-foreground">{comment.text}</p>
                </div>
              ))}
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                {lang === 'fr' ? 'Laisser un commentaire' : 'Leave a comment'}
              </h3>
              <Input
                placeholder={lang === 'fr' ? 'Votre nom' : 'Your name'}
                value={newComment.name}
                onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                required
              />
              <Textarea
                placeholder={lang === 'fr' ? 'Votre commentaire...' : 'Your comment...'}
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                rows={4}
                required
              />
              <Button type="submit" className="gap-2">
                <Send className="h-4 w-4" />
                {lang === 'fr' ? 'Envoyer' : 'Send'}
              </Button>
            </form>
          </Card>
        </div>
      </article>

      <Footer lang={lang} />
    </div>
  );
};

export default BlogArticlePage;