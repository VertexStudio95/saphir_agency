"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GoldButton from "@/components/ui/GoldButton";

const schema = z.object({
  nom: z.string().min(2, "Nom requis (2 caractères min)"),
  email: z.string().email("Adresse email invalide"),
  sujet: z.string().min(3, "Sujet requis"),
  message: z.string().min(20, "Message trop court (20 caractères min)"),
});

type FormData = z.infer<typeof schema>;

const infos = [
  { label: "Email", valeur: "contact@saphiragency.fr", href: "mailto:contact@saphiragency.fr" },
  { label: "Localisation", valeur: "France — Remote friendly", href: null },
  { label: "Disponibilité", valeur: "Missions disponibles", href: null },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-base-light">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel numero="03" label="Contact" />
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-ink-2 text-lg max-w-2xl mb-16 leading-relaxed">
            Une idée, un projet, une question ? Notre équipe répond dans les 24h.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Infos */}
          <ScrollReveal className="lg:col-span-2" direction="right">
            <div className="space-y-8">
              {infos.map((info) => (
                <div key={info.label}>
                  <p className="text-xs font-mono tracking-[0.25em] uppercase text-gold mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-ink hover:text-gold transition-colors cursor-none"
                    >
                      {info.valeur}
                    </a>
                  ) : (
                    <p className="text-ink">{info.valeur}</p>
                  )}
                </div>
              ))}

              
            </div>
          </ScrollReveal>

          {/* Formulaire */}
          <ScrollReveal className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-ink-3 mb-2">
                    Nom
                  </label>
                  <input
                    {...register("nom")}
                    className="w-full bg-surface border border-rim rounded-sm px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Votre nom"
                  />
                  {errors.nom && (
                    <p className="text-red-400 text-xs mt-1">{errors.nom.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-ink-3 mb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-surface border border-rim rounded-sm px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="vous@exemple.fr"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-ink-3 mb-2">
                  Sujet
                </label>
                <input
                  {...register("sujet")}
                  className="w-full bg-surface border border-rim rounded-sm px-4 py-3 text-ink
                    placeholder:text-ink-3 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Développement site web, application mobile..."
                />
                {errors.sujet && (
                  <p className="text-red-400 text-xs mt-1">{errors.sujet.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-mono tracking-widest uppercase text-ink-3 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full bg-surface border border-rim rounded-sm px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos besoins, votre timeline..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <GoldButton type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Envoi..." : "Envoyer le message"}
                </GoldButton>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-green-400"
                    >
                      Message envoyé — nous vous répondrons bientôt !
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-red-400"
                    >
                      Erreur d'envoi. Essayez par email directement.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
