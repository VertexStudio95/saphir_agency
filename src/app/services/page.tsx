import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoldButton from "@/components/ui/GoldButton";
import PricingCard from "@/components/services/PricingCard";
import ServiceMockup from "@/components/services/ServiceMockup";
import { formules, garanties } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Nos Offres",
  description:
    "Découvrez les formules Éco, Standard et Premium de Saphir Agency. Des solutions web sur mesure adaptées à chaque budget et chaque ambition.",
};

const mockups = [
  { type: "browser" as const, label: "Sites & Applications Web" },
  { type: "phone" as const, label: "Applications Mobile" },
  { type: "terminal" as const, label: "APIs & Déploiement" },
];

export default function ServicesPage() {
  return (
    <main className="bg-base min-h-screen">
      {/* ── HERO ── */}
      <section className="section-padding pb-0 relative overflow-hidden">
        {/* Halo décoratif */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gold/4 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <ScrollReveal>
            <SectionLabel numero="01" label="Offres" />
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-ink mb-4 max-w-3xl">
              Des formules adaptées à{" "}
              <span className="gold-gradient">chaque ambition</span>
            </h1>
            <p className="text-ink-2 text-lg max-w-2xl mb-6 leading-relaxed">
              Que vous lanciez votre première présence en ligne ou que vous ayez
              besoin d&apos;une architecture avancée, nous avons la formule qu&apos;il vous faut.
            </p>
            <nav className="text-sm text-ink-3 flex items-center gap-2">
              <Link href="/" className="hover:text-gold transition-colors cursor-none">
                Accueil
              </Link>
              <span>/</span>
              <span className="text-ink">Nos offres</span>
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PRICING CARDS ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {formules.map((f, i) => (
              <PricingCard key={f.id} formule={f} index={i} />
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="text-center text-ink-3 text-sm mt-8">
              Vous ne savez pas quelle formule choisir ?{" "}
              <a href="/#contact" className="text-gold hover:text-gold-light transition-colors cursor-none underline underline-offset-2">
                Parlons de votre projet
              </a>{" "}
              — nous vous guidons gratuitement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GARANTIES COMMUNES ── */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel numero="02" label="Inclus dans toutes les formules" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-12">
              Notre engagement qualité
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {garanties.map((g, i) => (
              <ScrollReveal key={g.titre} delay={i * 0.1}>
                <div className="p-6 border border-rim/50 bg-surface rounded-sm hover:border-gold/30 transition-colors duration-300 group">
                  <span className="text-2xl text-gold mb-4 block group-hover:scale-110 transition-transform duration-300">
                    {g.icone}
                  </span>
                  <h3 className="font-display text-base font-semibold text-ink mb-2">
                    {g.titre}
                  </h3>
                  <p className="text-sm text-ink-2 leading-relaxed">
                    {g.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOCKUPS VISUELS ── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel numero="03" label="Ce que nous créons" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-4">
              Des solutions <span className="gold-gradient">qui impressionnent</span>
            </h2>
            <p className="text-ink-2 text-lg max-w-2xl mb-16 leading-relaxed">
              Sites vitrine, applications SaaS, APIs robustes, apps mobiles — nous
              livrons des produits dont vous êtes fiers.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {mockups.map((m, i) => (
              <ScrollReveal key={m.type} delay={i * 0.15}>
                <ServiceMockup type={m.type} label={m.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="section-padding bg-surface/30">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 bg-gold/5 text-gold text-xs tracking-[0.25em] uppercase font-mono mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Missions disponibles
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink mb-4">
              Un projet en tête ?
            </h2>
            <p className="text-ink-2 text-lg mb-10 leading-relaxed">
              Décrivez-nous votre idée. Nous vous répondons sous 24h avec une
              estimation claire et sans engagement.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GoldButton href="/#contact" variant="solid">
                Démarrer la conversation
              </GoldButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
