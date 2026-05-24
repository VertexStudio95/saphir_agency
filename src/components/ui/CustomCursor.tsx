"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    /* État interne — pas de re-render, tout géré en RAF */
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let targetScale = 1;
    let currentScale = 1;
    let visible = false;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    /* Curseur invisible jusqu'au premier mouvement */
    ring.style.opacity = "0";
    dot.style.opacity = "0";

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      /* Affichage au premier mouvement — ring téléporté pour éviter le flash */
      if (!visible) {
        ringX = mouseX;
        ringY = mouseY;
        ring.style.opacity = "1";
        dot.style.opacity = "1";
        visible = true;
      }

      /* Dot : suit la souris instantanément (-2 pour centrer w-1=4px) */
      dot.style.transform = `translate(${mouseX - 2}px, ${mouseY - 2}px)`;
    };

    const animate = () => {
      /* Ring : lerp fluide vers la souris */
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);

      /* Scale : lerp fluide — appliqué dans le même transform, pas de classe Tailwind */
      currentScale = lerp(currentScale, targetScale, 0.14);

      /* -16 pour centrer l'anneau 32px (w-8) sur le curseur */
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px) scale(${currentScale})`;

      /* Couleur de bordure selon hover */
      ring.style.borderColor = currentScale > 1.1
        ? "var(--color-gold-light, #e2c47a)"
        : "var(--color-gold, #c9a84c)";

      rafId = requestAnimationFrame(animate);
    };

    const onEnterLink = () => { targetScale = 1.6; };
    const onLeaveLink = () => { targetScale = 1; };

    /* Attache les listeners sur les éléments interactifs actuels */
    const targets = document.querySelectorAll<Element>("a, button, [data-cursor-grow]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      /* Cleanup des listeners pour éviter les doublons */
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Anneau — taille et position gérées en JS, pas de marges Tailwind négatives */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-8 h-8 rounded-full border border-gold will-change-transform"
        aria-hidden
      />
      {/* Point central */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block w-1 h-1 rounded-full bg-gold will-change-transform"
        aria-hidden
      />
    </>
  );
}
