"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen p-8">
      {/* Profil Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Laurent Arcos</h1>
          <p className="text-lg">Développeur Web Frontend</p>
          <p className="text-sm text-gray-500">Disponible pour de nouvelles opportunités !</p>
        </motion.div>
      </section>

      {/* Expériences Section */}
      <section id="experiences" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Expériences Professionnelles</h2>
        <p>Section à compléter avec une timeline interactive.</p>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Compétences Techniques</h2>
        <p>Section à compléter avec un filtrage par technologie.</p>
      </section>

      {/* Formations Section */}
      <section id="formations" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Formations</h2>
        <p>Section à compléter avec un affichage dynamique.</p>
      </section>

      {/* Projets Section */}
      <section id="projets" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Projets</h2>
        <p>Section à compléter avec des projets filtrables par technologie.</p>
      </section>

      {/* Formulaire de Contact */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Section à compléter avec un formulaire de contact.</p>
      </section>
    </main>
  );
}
