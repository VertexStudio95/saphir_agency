import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TechBadge from "@/components/ui/TechBadge";

const stack = [
  { name: "Next.js", icon: "▲", level: "expert" as const },
  { name: "React", icon: "⚛", level: "expert" as const },
  { name: "TypeScript", icon: "⬡", level: "expert" as const },
  { name: "Node.js", icon: "◉", level: "expert" as const },
  { name: "Python", icon: "◈", level: "avancé" as const },
  { name: "PostgreSQL", icon: "◇", level: "avancé" as const },
  { name: "Docker", icon: "▣", level: "avancé" as const },
  { name: "Tailwind CSS", icon: "△", level: "expert" as const },
];

const stats = [
  { valeur: "3+", label: "Années d'expérience" },
  { valeur: "20+", label: "Projets livrés" },
  { valeur: "100%", label: "Satisfaction client" },
];

export default function APropos() {
  return (
    <section id="apropos" className="section-padding bg-base-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <div>
            <ScrollReveal>
              <SectionLabel numero="02" label="À propos" />
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-6">
                Notre studio,{" "}
                <span className="gold-gradient">votre succès</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-ink-2 leading-relaxed mb-4">
                <span className="text-gold font-medium">Saphir Agency</span> est un
                studio digital spécialisé dans la conception et le développement
                d'applications web et mobile. Nous intervenons sur des projets
                ambitieux, de l'idée initiale au déploiement en production.
              </p>
              <p className="text-ink-2 leading-relaxed mb-4">
                Notre approche combine rigueur technique et sensibilité produit.
                Nous ne livrons pas du code —{" "}
                <span className="text-ink">nous livrons des solutions pérennes</span>,
                pensées pour scaler avec votre activité.
              </p>
              <p className="text-ink-2 leading-relaxed mb-8">
                Disponibles pour des missions de développement, de conseil ou
                d'audit technique. 100% remote.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-rim">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-bold text-gold mb-1">
                      {stat.valeur}
                    </p>
                    <p className="text-xs text-ink-3 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Stack */}
          <div>
            <ScrollReveal delay={0.15} direction="left">
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-gold mb-6">
                Stack technique
              </p>
              <div className="grid grid-cols-2 gap-3">
                {stack.map((tech, i) => (
                  <ScrollReveal key={tech.name} delay={i * 0.06}>
                    <TechBadge
                      name={tech.name}
                      icon={tech.icon}
                      level={tech.level}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
