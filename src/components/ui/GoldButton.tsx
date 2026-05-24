"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function GoldButton({
  children,
  href,
  onClick,
  variant = "solid",
  className = "",
  type = "button",
  disabled = false,
}: GoldButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-none";

  const solid =
    "bg-gold text-base hover:bg-gold-light active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const outline =
    "border border-gold text-gold hover:bg-gold hover:text-base active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const classes = `${base} ${variant === "solid" ? solid : outline} ${className}`;

  if (href) {
    // Use a plain <a> for "/#section" links so the browser handles
    // cross-page hash navigation natively, avoiding App Router URL bugs.
    const isHashRootLink = href.startsWith("/#");
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        {isHashRootLink ? (
          <a href={href} className={classes}>
            {children}
          </a>
        ) : (
          <Link href={href} className={classes}>
            {children}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
