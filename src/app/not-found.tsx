import Link from "next/link";
import GoldButton from "@/components/ui/GoldButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <p className="font-display text-8xl font-bold text-gold mb-4">404</p>
        <h1 className="font-display text-3xl font-semibold text-ink mb-4">
          Page introuvable
        </h1>
        <p className="text-ink-2 mb-8 max-w-sm mx-auto">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <GoldButton href="/" variant="outline">
          Retour à l&apos;accueil
        </GoldButton>
      </div>
    </div>
  );
}
