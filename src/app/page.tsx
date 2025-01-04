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
          <h1 className="text-5xl font-bold text-goldenrod mb-4">Laurent Arcos</h1>
          <p className="text-lg text-yellow-300">Développeur Web Frontend</p>
          <p className="text-sm text-gray-400">Disponible pour de nouvelles opportunités !</p>
        </motion.div>
      </section>

      {/* Expériences Professionnelles */}
      <section id="experiences" className="mb-16">
        <h2 className="text-3xl font-semibold text-goldenrod mb-4 flex items-center">
          <BriefcaseIcon className="w-6 h-6 mr-2 text-yellow-300" /> Expériences Professionnelles
        </h2>
        <ul className="space-y-8">
          {experiences.map((exp: Experience, index) => (
            <motion.li
              key={index}
              className="relative border-l-4 border-goldenrod pl-6 bg-blue-900 bg-opacity-30 p-4 rounded-lg shadow-md hover:bg-yellow-900 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-goldenrod rounded-full"></div>
              <h3 className="text-xl font-bold text-white">{exp.title}</h3>
              <p className="text-sm text-yellow-300">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p className="text-white mt-2">{exp.description}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Formations Académiques */}
      <section id="formations" className="mb-16">
        <h2 className="text-3xl font-semibold text-goldenrod mb-4 flex items-center">
          <AcademicCapIcon className="w-6 h-6 mr-2 text-yellow-300" /> Formations Académiques
        </h2>
        <ul className="space-y-8">
          {education.map((edu: Education, index) => (
            <motion.li
              key={index}
              className="relative border-l-4 border-goldenrod pl-6 bg-blue-900 bg-opacity-30 p-4 rounded-lg shadow-md hover:bg-yellow-900 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-goldenrod rounded-full"></div>
              <h3 className="text-xl font-bold text-white">{edu.school}</h3>
              <p className="text-sm text-yellow-300">{edu.degree}</p>
              <p className="text-sm text-gray-400">{edu.date}</p>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Compétences Techniques</h2>
        <p>Section à compléter avec un filtrage par technologie.</p>
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
