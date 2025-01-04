"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import type { Experience, Education } from "@/types";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen p-8 font-sans">

      {/* Toggle Dark Mode */}
      <div className="flex justify-end mb-8">
        <DarkModeToggle />
      </div>

      {/* Profil Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Laurent Arcos
          </h1>
          <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
            Développeur Web Frontend
          </p>
          <p className="text-sm text-gray-400">Disponible pour de nouvelles opportunités !</p>
        </motion.div>
      </section>

      {/* Expériences Professionnelles */}
      <section id="experiences" className="mb-16">
        <h2
          className="text-3xl font-semibold mb-4 flex items-center"
          style={{ color: "var(--text-primary)" }}
        >
          <BriefcaseIcon className="w-6 h-6 mr-2" style={{ color: "var(--text-secondary)" }} />
          Expériences Professionnelles
        </h2>
        <ul className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              className="card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                {exp.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {exp.company}
              </p>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-sm font-medium rounded-lg shadow-md"
                    style={{
                      backgroundColor: "var(--card-bg)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--card-border)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Formations Académiques */}
      <section id="formations" className="mb-16">
        <h2
          className="text-3xl font-semibold mb-4 flex items-center"
          style={{ color: "var(--text-primary)" }}
        >
          <AcademicCapIcon className="w-6 h-6 mr-2" style={{ color: "var(--text-secondary)" }} />
          Formations Académiques
        </h2>
        <ul className="space-y-8">
          {education.map((edu: Education, index) => (
            <motion.li
              key={index}
              className="relative border-l-4 pl-6 p-4 rounded-lg shadow-md transition-colors duration-300"
              style={{
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--card-border)",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="absolute -left-2 top-0 w-4 h-4 rounded-full"
                style={{ backgroundColor: "var(--card-border)" }}
              ></div>
              <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                {edu.school}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {edu.degree}
              </p>
              <p className="text-sm text-gray-400">{edu.date}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
          Compétences Techniques
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>Section à compléter avec un filtrage par technologie.</p>
      </section>

      {/* Projets Section */}
      <section id="projets" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
          Projets
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>Section à compléter avec des projets filtrables par technologie.</p>
      </section>

      {/* Formulaire de Contact */}
      <section id="contact" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
          Contact
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>Section à compléter avec un formulaire de contact.</p>
      </section>
    </main>
  );
}
