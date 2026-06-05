import Link from "next/link";

const annee = new Date().getFullYear();

const reseaux = [
  { label: "Email", href: "mailto:contact@saphiragency.fr" }
];

export default function Footer() {
  return (
    <footer className="border-t border-rim/30 bg-base">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="font-display text-lg font-bold tracking-wider">
          <span className="text-gold">M&M</span>
          <span className="text-ink ml-1.5">Agency</span>
        </Link>

        {/* Copyright */}
        <p className="text-ink-3 text-sm text-center">
          © {annee} M&M Agency — Tous droits réservés
        </p>

        {/* Réseaux */}
        <div className="flex items-center gap-6">
          {reseaux.map((r) => (
            <a
              key={r.label}
              href={r.href}
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-ink-3 hover:text-gold transition-colors duration-200"
            >
              {r.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
