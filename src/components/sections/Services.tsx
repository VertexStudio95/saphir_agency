import { services } from "@/lib/services";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-base-light">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel numero="01" label="Services" />
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            Nos services
          </h2>
          <p className="text-ink-2 text-lg max-w-2xl mb-16 leading-relaxed">
            Des solutions techniques adaptées à vos besoins, de la conception
            initiale au déploiement en production.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.1}>
              <div className="group h-full p-8 bg-surface border border-rim rounded-card gold-border-glow-hover transition-all duration-500">
                {/* Icône */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl text-gold font-display">{service.icone}</span>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    {service.titre}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-ink-2 mb-6 leading-relaxed">{service.description}</p>

                {/* Points */}
                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-ink-2">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bordure dorée en bas au hover */}
                <div className="mt-8 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
