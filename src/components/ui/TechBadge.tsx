"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
  icon?: string;
  level?: "expert" | "avancé" | "intermédiaire";
}

export default function TechBadge({ name, icon, level }: TechBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: "rgba(201,168,76,0.5)" }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 px-4 py-2.5 bg-surface border border-rim rounded-sm cursor-default"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <div>
        <p className="text-sm font-medium text-ink">{name}</p>
        {level && (
          <p className="text-xs text-ink-3 mt-0.5 capitalize">{level}</p>
        )}
      </div>
    </motion.div>
  );
}
