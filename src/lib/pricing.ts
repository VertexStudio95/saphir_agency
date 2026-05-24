export interface Formule {
  id: string;
  nom: string;
  prix: string;
  prixNote?: string;
  badge?: string;
  description: string;
  features: string[];
  notInclus?: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
}

export const formules: Formule[] = [
  {
    id: "eco",
    nom: "Prélude",
    prix: "À partir de 300 €",
    description: "La solution idéale pour lancer votre présence en ligne rapidement avec un résultat professionnel.",
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design responsive (mobile / tablette / desktop)",
      "SEO de base (balises, sitemap, Open Graph)",
      "Formulaire de contact",
      "Déploiement Vercel inclus",
      "1 mois de support inclus",
    ],
    notInclus: [
      "Espace membre / authentification",
      "Dashboard admin",
      "Intégrations API tierces",
    ],
    cta: "Démarrer un projet",
    ctaHref: "/#contact",
    highlighted: false,
  },
  {
    id: "standard",
    nom: "Signature",
    prix: "À partir de 500 €",
    badge: "Populaire",
    description: "Une application web complète, pensée pour scaler avec votre activité.",
    features: [
      "Tout ce qui est inclus dans Prélude",
      "Application Next.js full-stack",
      "Authentification (OAuth, JWT)",
      "Dashboard admin personnalisé",
      "Intégrations API (paiement, CRM, etc.)",
      "Tests unitaires & CI/CD",
      "6 mois de support inclus",
    ],
    cta: "Choisir Standard",
    ctaHref: "/#contact",
    highlighted: true,
  },
  {
    id: "premium",
    nom: "Prestige",
    prix: "Sur devis",
    prixNote: "accompagnement dédié",
    badge: "Sur-mesure",
    description: "Une architecture avancée pour les projets ambitieux avec des besoins complexes.",
    features: [
      "Tout ce qui est inclus dans Signature",
      "Architecture microservices / monorepo",
      "Application mobile React Native (iOS & Android)",
      "Infrastructure cloud (AWS / GCP / Azure)",
      "SLA garanti et monitoring 24/7",
      "Revue de code & audit de performance",
      "Accompagnement technique dédié",
    ],
    cta: "Nous contacter",
    ctaHref: "/#contact",
    highlighted: false,
  },
];

export const garanties = [
  { icone: "◈", titre: "Code source livré", description: "Vous êtes propriétaire du code, sans clause d'exclusivité." },
  { icone: "⬡", titre: "Documentation incluse", description: "README, architecture et guide de déploiement fournis." },
  { icone: "◇", titre: "Tests automatisés", description: "Couverture de tests sur les fonctionnalités critiques." },
  { icone: "△", titre: "Déploiement Vercel", description: "Mise en production rapide avec previews sur chaque PR." },
];
