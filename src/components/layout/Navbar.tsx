"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const liens = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/#apropos" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /**
   * Handles anchor links that target sections on the home page (e.g. "/#contact").
   * — When already on "/": smooth-scroll to the element and update the hash in place.
   * — When on another page: use a hard navigation so the browser handles the hash
   *   scroll itself after the page loads, avoiding App-Router URL concatenation bugs.
   */
  const handleHashClick = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.preventDefault();
      setMenuOpen(false);
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", `#${id}`);
        }
      } else {
        window.location.href = `/#${id}`;
      }
    },
    [pathname]
  );

  const linkClass =
    "text-sm text-ink-2 hover:text-gold tracking-wide transition-colors duration-200 relative " +
    "after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-gold " +
    "after:transition-all after:duration-300 hover:after:w-full cursor-none";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-rim/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-wider text-ink group cursor-none"
        >
          <span className="text-gold">Saphir</span>
          <span className="text-ink ml-1.5 group-hover:text-gold transition-colors duration-300">
            Agency
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {liens.map((l) => {
            if (l.href.startsWith("/#")) {
              const id = l.href.slice(2);
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => handleHashClick(e, id)}
                    className={linkClass}
                  >
                    {l.label}
                  </a>
                </li>
              );
            }
            return (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Desktop */}
        <a
          href="/#contact"
          onClick={(e) => handleHashClick(e, "contact")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-base transition-all duration-300 cursor-none"
        >
          Parlons projet
        </a>

        {/* Burger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-ink origin-center transition-colors"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-ink"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-ink origin-center"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-base/95 backdrop-blur-md border-b border-rim/30"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {liens.map((l, i) => {
                const isHash = l.href.startsWith("/#");
                const id = isHash ? l.href.slice(2) : "";
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    {isHash ? (
                      <a
                        href={l.href}
                        onClick={(e) => handleHashClick(e, id)}
                        className="text-ink-2 hover:text-gold text-lg tracking-wide transition-colors"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-ink-2 hover:text-gold text-lg tracking-wide transition-colors"
                      >
                        {l.label}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: liens.length * 0.07 }}
              >
                <a
                  href="/#contact"
                  onClick={(e) => handleHashClick(e, "contact")}
                  className="inline-flex items-center gap-2 px-5 py-2 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-base transition-all duration-300"
                >
                  Parlons projet
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
