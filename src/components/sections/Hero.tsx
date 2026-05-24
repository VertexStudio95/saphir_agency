"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import GoldButton from "@/components/ui/GoldButton";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const CURRENT_YEAR = new Date().getFullYear();

const stats = [
  { value: "20+", label: "Projets livrés" },
  { value: "100%", label: "Satisfaction client" },
  { value: "3+", label: "Ans d'expertise" },
];

const TICKER = [
  "Studio Digital",
  "Applications Web",
  "Mobile React Native",
  "APIs & Backend",
  "Conseil Technique",
  "Next.js & TypeScript",
  "Studio Digital",
  "Applications Web",
  "Mobile React Native",
  "APIs & Backend",
  "Conseil Technique",
  "Next.js & TypeScript",
];

/* ── Monogramme circulaire ── */
function Monogram() {
  return (
    <div className="relative w-[220px] h-[220px] shrink-0">
      {/* Halo de fond derrière les anneaux */}
      <div className="absolute inset-6 rounded-full bg-base/30 backdrop-blur-[6px]" />

      {/* Anneaux concentriques — plus visibles contre l'image */}
      <div className="absolute inset-0 rounded-full border border-gold/30" />
      <div className="absolute inset-5 rounded-full border border-gold/15" />
      <div className="absolute inset-10 rounded-full border border-gold/35" />

      {/* Ticks cardinaux */}
      {[0, 90, 180, 270].map((deg) => (
        <div
          key={deg}
          className="absolute inset-0 flex items-start justify-center"
          style={{ transform: `rotate(${deg}deg)` }}>
          <div className="w-px h-3.5 bg-gold/60 mt-0" />
        </div>
      ))}

      {/* Point rotatif */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold shadow-[0_0_12px_rgba(201,168,76,1),0_0_24px_rgba(201,168,76,0.5)]" />
      </motion.div>

      {/* Monogramme SA */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display font-bold italic select-none"
          style={{
            fontSize: "2.6rem",
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.55) 0%, rgba(226,196,122,0.75) 50%, rgba(201,168,76,0.55) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 12px rgba(201,168,76,0.35))",
          }}>
          SA
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-base flex flex-col pt-16 lg:pt-20">

      {/* ═══════════════════════════════════════
          ARRIÈRE-PLAN — Stratégie 4 couches
          ═══════════════════════════════════════ */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden>

        {/* Image mobile — affichée uniquement en dessous de md */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/hero-bg-mobile.jpeg"
            alt=""
            fill
            quality={75}
            className="object-cover opacity-80"
          />
        </div>

        {/* 1. IMAGE desktop — cachée sur mobile pour ne pas se superposer à l'image mobile */}
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          priority
          quality={75}
          className="object-cover hidden md:block opacity-55"
          style={{ objectPosition: "55% center" }}
        />

        {/* 2. MASQUE RADIAL GAUCHE — vignette sombre concentrée sur la zone texte
               Résultat : texte lisible, image respire à droite */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 110% at 14% 52%, rgba(15,23,42,0.97) 0%, rgba(15,23,42,0.91) 32%, rgba(15,23,42,0.55) 58%, rgba(15,23,42,0.15) 78%, transparent 92%)",
          }}
        />

        {/* 3. FONDU VERTICAL — haut pour navbar, bas pour transition section */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,23,42,0.75) 0%, transparent 20%, transparent 70%, rgba(15,23,42,0.92) 100%)",
          }}
        />

        {/* 4. CHALEUR DORÉE SUBTILE à droite — harmonise l'image avec les tokens gold de l'UI */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 70% at 82% 40%, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Ligne verticale séparatrice */}
        <div className="absolute top-0 right-[38%] w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </motion.div>

      {/* ── Bandeau supérieur ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="relative z-10 flex items-center justify-between px-8 lg:px-14 py-4 border-b border-gold/[0.12]">
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-gold inline-block"
          />
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-ink-3">
            Saphir Agency — Studio Digital
          </span>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-[10px] font-mono tracking-[0.22em] uppercase text-ink-3">
          <span>France</span>
          <span className="w-px h-2.5 bg-rim" />
          <span>Remote Friendly</span>
          <span className="w-px h-2.5 bg-rim" />
          {/* date today */}
          <span>{CURRENT_YEAR}</span>
        </div>
      </motion.div>

      {/* ── Contenu principal ── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex-1 flex flex-col lg:flex-row">

        {/* ─ GAUCHE : titre + texte + CTA ─ */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-14 xl:px-20 py-16 lg:py-0">

          {/* Étiquette */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-gold" />
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-gold">
              Expériences Digitales
            </span>
          </motion.div>

          {/* Titre — ligne 1 "Saphir"
              textShadow sombre = profondeur contre l'image, plus jamais "collé" */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
              className="font-display font-bold text-ink leading-[0.87]"
              style={{
                fontSize: "clamp(3.8rem, 9.5vw, 9.5rem)",
                textShadow:
                  "0 2px 20px rgba(15,23,42,0.9), 0 8px 60px rgba(15,23,42,0.7)",
              }}>
              Saphir
            </motion.h1>
          </div>

          {/* Titre — ligne 2 "Agency." avec glow or */}
          <div className="mb-8">
            <motion.div
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
              className="font-display font-bold italic leading-[0.87]"
              style={{
                fontSize: "clamp(3.8rem, 9.5vw, 9.5rem)",
                filter: "drop-shadow(0 0 32px rgba(201,168,76,0.28))",
              }}>
              <span className="gold-gradient">Agency.</span>
            </motion.div>
          </div>

          {/* Règle or animée */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.0, ease: EASE }}
            style={{ originX: 0 }}
            className="h-px bg-gradient-to-r from-gold via-gold/50 to-transparent mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
            className="text-ink-2 text-base lg:text-lg max-w-md leading-relaxed mb-10"
            style={{ textShadow: "0 1px 12px rgba(15,23,42,0.8)" }}>
            Nous concevons des expériences digitales pour les marques{" "}
            <span className="text-ink font-medium">qui refusent le banal</span>.
            Applications web, mobile, conseil.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
            className="flex flex-wrap items-center gap-4">
            <GoldButton href="/services" variant="solid">
              Découvrir nos offres
            </GoldButton>
            <GoldButton href="/#contact" variant="outline">
              Parlons de votre projet
            </GoldButton>
          </motion.div>
        </div>

        {/* ─ DROITE : monogramme + stats
             Panel "fenêtre" — verre givré léger, vit dans l'image ─ */}
        <motion.aside
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.55, ease: EASE }}
          className="hidden lg:flex w-[360px] xl:w-[420px] shrink-0 flex-col justify-center items-center gap-12 px-10 py-16"
          style={{
            borderLeft: "1px solid rgba(201,168,76,0.18)",
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.30) 0%, rgba(15,23,42,0.12) 50%, rgba(15,23,42,0.05) 100%)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}>

          <Monogram />

          {/* Stats */}
          <div className="w-full">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 1.1 + i * 0.14,
                  duration: 0.7,
                  ease: EASE,
                }}
                className="flex items-center justify-between py-4 last:border-0"
                style={{ borderBottom: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.14)" : "none" }}>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-ink-3/80">
                  {s.label}
                </span>
                <span
                  className="font-display text-2xl font-bold text-gold"
                  style={{ textShadow: "0 0 20px rgba(201,168,76,0.4)" }}>
                  {s.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </motion.div>

      {/* ── Indicateur de défilement ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-20 left-8 lg:left-14 hidden lg:flex flex-col items-center gap-3 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold/70 to-transparent"
        />
        <span
          className="text-[9px] tracking-[0.35em] uppercase text-ink-3/50 font-mono"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Défiler
        </span>
      </motion.div>

      {/* ── Ticker infini ── */}
      <div className="relative z-10 border-t border-gold/[0.1] py-3 overflow-hidden shrink-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap">
          {TICKER.map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink-3/40 px-2">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-gold/30 mx-1 shrink-0" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
