import { Database, Lightbulb, Wifi, GraduationCap, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a2735 0%, #2D3E50 50%, #1e3045 100%)" }}
    >
      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-a absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-copper/10 blur-[100px]" />
        <div className="orb-b absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="orb-c absolute top-1/2 right-10 w-64 h-64 rounded-full bg-copper/8 blur-[80px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C07830 1px, transparent 1px), linear-gradient(90deg, #C07830 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-copper/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-copper/10 border border-copper/25 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              <span className="text-copper text-xs font-display font-semibold tracking-widest uppercase">
                Solutions Digitales
              </span>
            </div>

            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-[1.08] text-white">
              L'Excellence{" "}
              <span className="gradient-text">Technologique</span>
              <br />à Votre Service
            </h1>

            <p className="text-white/55 text-lg leading-relaxed max-w-lg font-body">
              ITQAN Systems est une société de développement logiciel dédiée à la
              conception de solutions innovantes, robustes et évolutives pour les
              entreprises modernes.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("services")}
                className="group flex items-center gap-2 bg-copper text-white px-8 py-3.5 rounded-xl font-display font-semibold tracking-wide hover:bg-white hover:text-copper transition-all duration-300 shadow-lg shadow-copper/30"
              >
                Nos Domaines
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="border border-white/20 text-white px-8 py-3.5 rounded-xl font-display font-semibold tracking-wide hover:border-copper hover:text-copper transition-all duration-300"
              >
                Nous Contacter
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-6 border-t border-white/10">
              {[
                { number: "50+", label: "Projets Livrés" },
                { number: "10+", label: "Années d'Expérience" },
                { number: "30+", label: "Clients Satisfaits" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display font-extrabold text-3xl text-copper">
                    {stat.number}
                  </div>
                  <div className="text-white/40 text-sm mt-1 font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Service Cards */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {[
              { icon: Database,      title: "Systèmes d'Information",  desc: "Conception, développement et gestion sur mesure" },
              { icon: Lightbulb,     title: "Transformation Digitale", desc: "Conseil stratégique et accompagnement" },
              { icon: Wifi,          title: "Télécommunication & Web", desc: "Création web, mobile et solutions télécom" },
              { icon: GraduationCap, title: "Formation Professionnelle", desc: "Programmes adaptés aux besoins métier" },
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-copper/50 hover:bg-white/8 transition-all duration-400 cursor-default backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-copper/10"
              >
                <div className="w-10 h-10 rounded-xl bg-copper/15 flex items-center justify-center mb-4 group-hover:bg-copper/25 transition-colors duration-300">
                  <card.icon className="w-5 h-5 text-copper" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-heading font-semibold text-sm mb-1.5 group-hover:text-copper transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed font-body">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs font-body tracking-widest uppercase">Défiler</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
