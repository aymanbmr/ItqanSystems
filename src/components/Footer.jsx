export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <img src="/logo.png" alt="ITQAN Systems" className="h-10 w-auto brightness-200" />
            <p className="text-white/40 text-sm leading-relaxed font-body max-w-sm">
              ITQAN Systems — votre partenaire technologique de confiance pour des
              solutions logicielles innovantes et performantes.
            </p>
            <div className="flex gap-3 pt-2">
              {["in", "gh", "tw"].map((s) => (
                <div
                  key={s}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-xs font-display font-bold hover:border-copper hover:text-copper hover:bg-copper/10 transition-all duration-300 cursor-pointer"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-copper mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Accueil", id: "home" },
                { label: "À Propos", id: "about" },
                { label: "Nos Partenaires", id: "partners" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/40 text-sm font-body hover:text-copper transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-copper mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-white/40 text-sm font-body">
              <li>📍 Casablanca, Maroc</li>
              <li>📞 +212 (0) 536 XX XX XX</li>
              <li>✉️ contact@itqan-systems.ma</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-body">
            © 2024 ITQAN Systems. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Politique de confidentialité", "Conditions d'utilisation"].map((l) => (
              <button key={l} className="text-white/20 text-xs font-body hover:text-copper transition-colors">
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}