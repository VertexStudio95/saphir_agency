import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "web",
    titre: "Développement Web",
    description:
      "Applications web modernes et performantes, de la conception à la mise en production.",
    icone: "◈",
    points: [
      "Sites vitrine & e-commerce",
      "Applications SaaS",
      "Progressive Web Apps",
      "Next.js, React, TypeScript",
    ],
  },
  {
    id: "api",
    titre: "APIs & Backend",
    description:
      "Architecture backend robuste et APIs RESTful ou GraphQL pensées pour la scalabilité.",
    icone: "⬡",
    points: [
      "API REST & GraphQL",
      "Microservices",
      "Base de données relationnelles & NoSQL",
      "Node.js, Python, PostgreSQL",
    ],
  },
  {
    id: "mobile",
    titre: "Applications Mobile",
    description:
      "Applications iOS et Android cross-platform avec une expérience native et fluide.",
    icone: "◇",
    points: [
      "React Native",
      "Expo",
      "Publication App Store & Play Store",
      "Intégrations API",
    ],
  },
  {
    id: "conseil",
    titre: "Conseil & Audit",
    description:
      "Accompagnement technique pour structurer vos projets et optimiser vos performances.",
    icone: "△",
    points: [
      "Audit de code & architecture",
      "Revue de performance",
      "Choix technologiques",
      "Formation & accompagnement",
    ],
  },
];
