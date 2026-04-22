import { useScrollReveal } from "../hooks/useScrollReveal";

const partners = [
  { name: "Microsoft", category: "Cloud & Outils", letter: "M", color: "#0078D4" },
  { name: "Oracle", category: "Base de Données", letter: "O", color: "#F80000" },
  { name: "AWS", category: "Cloud Computing", letter: "A", color: "#FF9900" },
  { name: "Google", category: "Workspace & Cloud", letter: "G", color: "#4285F4" },
  { name: "Docker", category: "Conteneurisation", letter: "D", color: "#2496ED" },
  { name: "Atlassian", category: "Gestion de Projets", letter: "At", color: "#0052CC" },
];

const testimonials = [
  {
    text: "ITQAN Systems a transformé notre infrastructure digitale en un temps record. Une équipe sérieuse et compétente.",
    author: "Directeur IT, Groupe Industriel",
    initials: "DI",
  },
  {
    text: "Leur approche sur mesure et leur expertise technique ont parfaitement répondu à nos besoins complexes.",
    author: "DSI, Entreprise de Logistique",
    initials: "DS",
  },
  {
    text: "Professionnalisme, réactivité et qualité de code irréprochable. Nous recommandons vivement ITQAN Systems.",
    author: "PDG, Startup Fintech",
    initials: "PF",
  },
];

export default function Partners() {
  const headerRef      = useScrollReveal();
  const gridRef        = useScrollReveal(100);
  const testimonialRef = useScrollReveal(100);
  const ctaRef         = useScrollReveal(100);

  return (
    <section id="partners" className="bg-gray-50 py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-copper" />
            <span className="text-copper text-xs font-display font-semibold tracking-widest uppercase">
              Nos Partenaires
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy leading-tight mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body">
            Nous collaborons avec les leaders technologiques mondiaux pour offrir
            à nos clients les meilleures solutions du marché.
          </p>
        </div>

        {/* Partners Grid */}
        <div ref={gridRef} className="reveal grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group bg-white rounded-2xl p-6 flex flex-col items-center gap-3 border border-gray-100 hover:border-copper/30 hover:shadow-lg hover:shadow-copper/5 transition-all duration-300 cursor-default"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: p.color }}
              >
                {p.letter}
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-navy text-sm">{p.name}</div>
                <div className="text-gray-400 text-xs mt-0.5 font-body">{p.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={testimonialRef} className="reveal">
          <h3 className="font-heading font-bold text-2xl text-navy mb-10 text-center">
            Ce que disent nos clients
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-copper/30 hover:shadow-lg hover:shadow-copper/5 transition-all duration-300 relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 font-display font-black text-6xl text-copper/10 leading-none select-none">
                  "
                </div>
                <p className="text-gray-600 leading-relaxed font-body text-sm mb-6 relative z-10">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xs">{t.initials}</span>
                  </div>
                  <div className="text-gray-400 text-xs font-body">{t.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div ref={ctaRef} className="reveal mt-16 bg-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <polygon points="0,0 200,200 400,0" fill="#C07830" />
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-white/50 mb-8 font-body max-w-md mx-auto">
              Parlons de vos besoins et construisons ensemble la solution idéale pour votre entreprise.
            </p>
            <button
              id="contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-copper text-white px-10 py-4 rounded-xl font-display font-bold tracking-wide hover:bg-white hover:text-copper transition-all duration-300 shadow-lg shadow-copper/30"
            >
              Démarrer un Projet
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}