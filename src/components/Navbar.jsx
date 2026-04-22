import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg border-b border-copper/10"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="ITQAN Systems" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Accueil", id: "home" },
            { label: "Nos Services", id: "services" },
            { label: "À Propos", id: "about" },
            { label: "Partenaires", id: "partners" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative font-display font-600 text-sm tracking-wide transition-colors duration-300 group text-navy hover:text-copper"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-copper transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-copper text-white px-5 py-2.5 rounded-lg font-display font-semibold text-sm tracking-wide hover:bg-navy transition-all duration-300 shadow-md hover:shadow-copper/30"
          >
            Nous Contacter
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-copper/10 px-6 py-6 flex flex-col gap-5 shadow-xl">
          {[
            { label: "Accueil", id: "home" },
            { label: "Nos Services", id: "services" },
            { label: "À Propos", id: "about" },
            { label: "Partenaires", id: "partners" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-navy font-display font-semibold text-base hover:text-copper transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="bg-copper text-white px-5 py-2.5 rounded-lg font-display font-semibold text-sm w-fit"
          >
            Nous Contacter
          </button>
        </div>
      )}
    </header>
  );
}