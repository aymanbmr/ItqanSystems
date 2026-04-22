import { Database, Lightbulb, Wifi, GraduationCap } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    number: "01",
    icon: Database,
    title: "Systèmes d'Information",
    subtitle: "Conception, Développement & Gestion",
    desc: "Nous concevons et développons des systèmes d'information robustes et évolutifs, parfaitement adaptés aux processus métier de votre organisation.",
    tags: ["ERP", "CRM", "BI", "Architecture"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Transformation Digitale",
    subtitle: "Conseil & Accompagnement Stratégique",
    desc: "Nous accompagnons les entreprises dans leur mutation numérique avec une approche sur mesure, de l'audit initial jusqu'au déploiement final.",
    tags: ["Audit", "Stratégie", "Change Management"],
  },
  {
    number: "03",
    icon: Wifi,
    title: "Télécommunication & Création Web",
    subtitle: "Web, Mobile & Solutions Télécom",
    desc: "Du site vitrine à l'application mobile complexe, en passant par les infrastructures télécom, nous maîtrisons l'ensemble de la chaîne digitale.",
    tags: ["Web", "Mobile", "iOS", "Android", "Télécom"],
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Formation Professionnelle",
    subtitle: "Programmes Adaptés aux Besoins Métier",
    desc: "Des formations techniques et fonctionnelles dispensées par des experts, pour monter en compétences vos équipes sur les technologies qui comptent.",
    tags: ["Java", ".NET", "React", "Cloud", "Agile"],
  },
];

function ServiceCard({ service, delay }) {
  const ref = useScrollReveal(delay);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="reveal service-card relative group bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-navy/8 hover:-translate-y-1 transition-all duration-400 cursor-default"
    >
      {/* Background number */}
      <span className="absolute top-6 right-8 font-heading font-black text-7xl text-gray-50 select-none leading-none group-hover:text-copper/8 transition-colors duration-500">
        {service.number}
      </span>

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mb-6 group-hover:bg-copper transition-colors duration-400 shadow-lg shadow-navy/20">
          <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
        </div>

        <p className="text-copper text-xs font-display font-semibold tracking-widest uppercase mb-1">
          {service.subtitle}
        </p>
        <h3 className="font-heading font-bold text-2xl text-navy mb-3 leading-snug">
          {service.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed font-body mb-6">
          {service.desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-display font-semibold px-3 py-1 rounded-full bg-gray-50 text-gray-400 border border-gray-100 group-hover:border-copper/20 group-hover:text-copper/70 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const headerRef = useScrollReveal();

  return (
    <section id="services" className="bg-white py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div ref={headerRef} className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-copper" />
            <span className="text-copper text-xs font-display font-semibold tracking-widest uppercase">
              Domaines d'Expertise
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-navy leading-tight mb-4">
            Ce que nous faisons
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-body text-base leading-relaxed">
            Quatre pôles d'excellence pour couvrir l'ensemble de vos besoins
            technologiques et digitaux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.number} service={s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
