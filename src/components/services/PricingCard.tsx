"use client";

import { motion } from "framer-motion";
import GoldButton from "@/components/ui/GoldButton";
import type { Formule } from "@/lib/pricing";

interface Props {
  formule: Formule;
  index: number;
}

export default function PricingCard({ formule, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col rounded-sm border p-8 transition-shadow duration-300
        ${formule.highlighted
          ? "border-gold/60 ring-1 ring-gold/25 shadow-[0_0_40px_rgba(201,168,76,0.08)]"
          : "border-rim hover:border-rim/80"
        }
        bg-surface`}
    >
      {/* Badge */}
      {formule.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-gold text-base text-xs font-mono tracking-[0.2em] uppercase font-semibold rounded-full">
            {formule.badge}
          </span>
        </div>
      )}

      {/* En-tête */}
      <div className="mb-6">
        <p className="text-xs font-mono tracking-[0.25em] uppercase text-gold mb-2">
          {formule.nom}
        </p>
        <p className="font-display text-3xl font-bold text-ink mb-1">
          {formule.prix}
        </p>
        {formule.prixNote && (
          <p className="text-xs text-ink-3 italic">{formule.prixNote}</p>
        )}
      </div>

      {/* Description */}
      <p className="text-ink-2 text-sm leading-relaxed mb-8 border-b border-rim pb-6">
        {formule.description}
      </p>

      {/* Features incluses */}
      <ul className="space-y-3 mb-6 flex-1">
        {formule.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-ink-2">
            <span className="text-gold mt-0.5 shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Features non incluses */}
      {formule.notInclus && formule.notInclus.length > 0 && (
        <ul className="space-y-2 mb-8 border-t border-rim pt-4">
          {formule.notInclus.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-ink-3">
              <span className="mt-0.5 shrink-0 opacity-40">✕</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-auto pt-4">
        <GoldButton
          href={formule.ctaHref}
          variant={formule.highlighted ? "solid" : "outline"}
          className="w-full justify-center"
        >
          {formule.cta}
        </GoldButton>
      </div>
    </motion.div>
  );
}
