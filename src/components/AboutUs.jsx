import { Target, Compass, Cpu, Handshake } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  {
    icon: Target,
    title: "Mission",
    desc: "Accompagner les entreprises dans leur transformation digitale en livrant des solutions logicielles de haute qualité, adaptées à leurs besoins spécifiques.",
  },
  {
    icon: Compass,
    title: "Vision",
    desc: "Devenir le partenaire technologique de référence au Maroc et en Afrique du Nord, reconnu pour l'excellence, l'innovation et la fiabilité de nos solutions.",
  },
  {
    icon: Cpu,
    title: "Expertise",
    desc: "Notre équipe maîtrise les technologies modernes : Java, .NET, Angular, React, Docker, microservices, IA et bien plus encore.",
  },
  {
    icon: Handshake,
    title: "Engagement",
    desc: "Nous construisons des partenariats durables basés sur la confiance, la transparence et la satisfaction totale de nos clients.",
  },
];

const team = [
  { name: "Ahmed Benali", role: "CEO & Co-Fondateur", initials: "AB" },
  { name: "Sara El Fassi", role: "Directrice Technique", initials: "SE" },
  { name: "Youssef Khatib", role: "Architecte Logiciel", initials: "YK" },
  { name: "Fatima Zahra", role: "Cheffe de Projet", initials: "FZ" },
];

export default function AboutUs() {
  const headerRef   = useScrollReveal();
  const storyRef    = useScrollReveal(100);
  const statsRef    = useScrollReveal(200);
  const valuesRef   = useScrollReveal(100);
  const teamRef     = useScrollReveal(100);

  return (
    <section id="about" className="bg-white py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-copper" />
              <span className="text-copper text-xs font-display font-semibold tracking-widest uppercase">
                À Propos de Nous
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy leading-tight">
              Qui sommes-nous ?
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-md font-body">
            ITQAN Systems est une société marocaine spécialisée dans le développement
            logiciel sur mesure, fondée par des ingénieurs passionnés par l'innovation
            et l'excellence technique.
          </p>
        </div>

        {/* Story + Image placeholder */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div ref={storyRef} className="reveal-left space-y-6">
            <h3 className="font-heading font-bold text-2xl text-navy">
              Notre Histoire
            </h3>
            <p className="text-gray-500 leading-relaxed font-body">
              Fondée à Casablanca, ITQAN Systems est née d'une vision simple : rendre la
              technologie accessible et efficace pour toutes les entreprises, quelle
              que soit leur taille. Notre nom « ITQAN » (إتقان) signifie l'excellence
              et la maîtrise parfaite — des valeurs qui guident chaque ligne de code
              que nous écrivons.
            </p>
            <p className="text-gray-500 leading-relaxed font-body">
              Depuis notre création, nous avons accompagné des dizaines d'entreprises
              dans la digitalisation de leurs processus métier, le développement
              d'applications web et mobiles, et la mise en place d'infrastructures
              cloud robustes.
            </p>
            <div className="flex gap-6 pt-2">
              <div className="border-l-2 border-copper pl-4">
                <div className="font-heading font-bold text-2xl text-navy">2015</div>
                <div className="text-gray-400 text-sm font-body">Année de création</div>
              </div>
              <div className="border-l-2 border-copper pl-4">
                <div className="font-heading font-bold text-2xl text-navy">Casablanca</div>
                <div className="text-gray-400 text-sm font-body">Siège social</div>
              </div>
            </div>
          </div>

          {/* Decorative block */}
          <div ref={statsRef} className="reveal-right relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-copper/10 rounded-2xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy/5 rounded-2xl" />
            <div className="relative bg-navy rounded-3xl p-10 text-white">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { n: "50+", l: "Projets" },
                  { n: "30+", l: "Clients" },
                  { n: "10+", l: "Ans d'exp." },
                  { n: "100%", l: "Satisfaction" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="font-display font-extrabold text-4xl text-copper">{s.n}</div>
                    <div className="text-white/50 text-sm mt-1 font-body">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-white/40 text-xs text-center font-body">
                Des chiffres qui reflètent notre engagement quotidien
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="reveal mb-24">
          <h3 className="font-heading font-bold text-2xl text-navy mb-10 text-center">
            Nos Valeurs
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group border border-gray-100 rounded-2xl p-6 hover:border-copper/30 hover:shadow-lg hover:shadow-copper/5 transition-all duration-300"
              >
                <v.icon className="w-8 h-8 text-copper mb-4" strokeWidth={1.5} />
                <h4 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-copper transition-colors">
                  {v.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div ref={teamRef} className="reveal">
          <h3 className="font-heading font-bold text-2xl text-navy mb-10 text-center">
            Notre Équipe
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="mx-auto w-20 h-20 rounded-2xl bg-navy flex items-center justify-center mb-4 group-hover:bg-copper transition-colors duration-300">
                  <span className="font-display font-bold text-xl text-white">{member.initials}</span>
                </div>
                <h4 className="font-display font-semibold text-navy text-base">{member.name}</h4>
                <p className="text-gray-400 text-sm font-body mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}