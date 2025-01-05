"use client";

import { motion } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar fixed-nav">
        <div>
          <h1 className="text-4xl font-bold mb-2">Laurent Arcos</h1>
          <p className="text-text-secondary">Développeur Web Frontend</p>
        </div>
        <nav className="nav-links mt-8">
          <a href="#experiences">Expériences</a>
          <a href="#formations">Formations</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="mt-8">
          <DarkModeToggle />
        </div>
      </aside>

      {/* Main Content */}
      <main className="p-8">
        {/* Profil Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-text-primary">Laurent Arcos</h1>
            <p className="text-lg text-text-secondary">Développeur Web Frontend</p>
            <p className="text-sm text-gray-400">Disponible pour de nouvelles opportunités !</p>
          </motion.div>
        </section>

        {/* Expériences Professionnelles */}
        <section id="experiences" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <BriefcaseIcon className="w-6 h-6 mr-2 text-text-secondary" />
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
                <h3 className="text-xl font-bold text-text-primary">{exp.title}</h3>
                <p className="text-sm text-text-secondary">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.date}</p>
                <p className="mt-2 text-text-secondary">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="tag"
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
          <h2 className="text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <AcademicCapIcon className="w-6 h-6 mr-2 text-text-secondary" />
            Formations Académiques
          </h2>
          <ul className="space-y-8">
            {education.map((edu, index) => (
              <motion.li
                key={index}
                className="card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold text-text-primary">{edu.school}</h3>
                <p className="text-sm text-text-secondary">{edu.degree}</p>
                <p className="text-sm text-gray-400">{edu.date}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Compétences Section */}
        <section id="competences" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary">
            Compétences Techniques
          </h2>
          <p className="text-text-secondary">Section à compléter avec un filtrage par technologie.</p>
        </section>

        {/* Projets Section */}
        <section id="projets" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary">
            Projets
          </h2>
          <p className="text-text-secondary">Section à compléter avec des projets filtrables par technologie.</p>
        </section>

        {/* Formulaire de Contact */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary">
            Contact
          </h2>
          <p className="text-text-secondary">Section à compléter avec un formulaire de contact.</p>
        </section>
      </main>
    </div>
  );
}
