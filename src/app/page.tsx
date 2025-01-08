"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon, CommandLineIcon } from "@heroicons/react/24/solid";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import ReCAPTCHA from "react-google-recaptcha";
import DarkModeToggle from "@/components/DarkModeToggle";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faSteam,
  faBluesky,
  faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";

/** Exemple d’icône de chevron bas/haut. 
    Vous pouvez utiliser Heroicons, FontAwesome, etc. */
function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-foreground transform transition-transform duration-300 ${
        isOpen ? "rotate-180" : "" 
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Home() {

  const [showDev, setShowDev] = useState(true);
  const [showSales, setShowSales] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [openExperiences, setOpenExperiences] = useState<number[]>([]);
  const [openEducations, setOpenEducations] = useState<number[]>([]);
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const toggleFilters = () => setIsFiltersOpen(!isFiltersOpen);

    // Fonction pour filtrer les compétences
    const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill: Skill) => skill.category === selectedCategory);

  // Fonction de toggle pour les expériences
  const toggleExperience = (index: number) => {
    setOpenExperiences((prev) => {
      // si l’index est déjà présent => on le retire
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        // sinon, on l’ajoute
        return [...prev, index];
      }
    });
  };

  // Fonction de toggle pour les formations
  const toggleEducation = (index: number) => {
    setOpenEducations((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

    // Fonction appelée lorsque le reCAPTCHA est validé
    const handleRecaptchaChange = (token: string | null) => {
      if (token) {
        setRecaptchaToken(token);
      }
    };
  
    // Fonction de soumission du formulaire
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      // Vérification du token reCAPTCHA avant soumission
      if (!recaptchaToken) {
        alert("Veuillez vérifier le reCAPTCHA.");
        return;
      }
  
      const formData = new FormData(event.currentTarget);
      formData.append("recaptchaToken", recaptchaToken);
  
      fetch("/api/contact", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            alert("Message envoyé avec succès !");
          } else {
            alert("Erreur lors de l'envoi du message.");
          }
        })
        .catch((error) => {
          console.error("Erreur:", error);
          alert("Erreur lors de l'envoi du message.");
        });
    };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="sidebar fixed-nav bg-background text-foreground w-[25%] flex flex-col justify-between h-full p-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 text-foreground">Laurent Arcos</h1>
          <p className="text-text-secondary">Développeur Web</p>
          <nav className="nav-links mt-8 space-y-4">
            {/* Expériences avec le chevron */}
            <div className="flex items-center justify-between">
              <a
                href="#experiences"
                className="hover:underline flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFilters();
                }}
              >
                <span>Expériences</span>
                <Chevron isOpen={isFiltersOpen} />
              </a>
            </div>

            {/* Checkboxes conditionnelles */}
            {isFiltersOpen && (
              <div className="flex flex-col space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showDev}
                    onChange={(e) => setShowDev(e.target.checked)}
                    className="form-checkbox text-foreground rounded-md h-5 w-5"
                  />
                  <span className="text-sm text-text-secondary">
                    Développement Web
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={showSales}
                    onChange={(e) => setShowSales(e.target.checked)}
                    className="form-checkbox text-foreground rounded-md h-5 w-5"
                  />
                  <span className="text-sm text-text-secondary">
                    Commerce / Logistique
                  </span>
                </label>
              </div>
            )}

            <a href="#formations" className="hover:underline">
              Formations
            </a>
            <a href="#competences" className="hover:underline">
              Compétences
            </a>
            <a href="#projets" className="hover:underline">
              Projets
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>

        {/* Social Links */}
        <div className="social-links flex justify-start mt-16 mb-auto">
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/laurentarcos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/LaurentArcos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            <a
              href="https://bsky.app/profile/laurentarcos.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
            >
              <FontAwesomeIcon icon={faBluesky} className="w-6 h-6" />
            </a>
            <a
              href="https://letterboxd.com/Laurent_A/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
            >
              <FontAwesomeIcon icon={faLetterboxd} className="w-6 h-6" />
            </a>
            <a
              href="https://steamcommunity.com/id/thryndil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
            >
              <FontAwesomeIcon icon={faSteam} className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Toggle Dark Mode Button */}
        <div className="fixed bottom-12 left-8">
          <DarkModeToggle />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        {/* Expériences Professionnelles */}
        <section id="experiences" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <BriefcaseIcon className="w-6 h-6 mr-2 text-foreground" />
            Expériences Professionnelles
          </h2>
          <ul className="space-y-8">
            {experiences
              .filter((exp) => {
              if (exp.type === "dev" && !showDev) return false;
              if (exp.type === "sales" && !showSales) return false;
              return true;
            })
              .map((exp, index) => {
              // booléen "cette card est-elle ouverte ?"
              const isOpen = openExperiences.includes(index);
              return (
                <motion.li
                  key={index}
                  onClick={() => {
                    if (!isOpen) {
                      toggleExperience(index);
                    }
                  }}
                  className="card p-4 border border-gray-200 rounded-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 justify-between">

                    <div className="flex items-center gap-4">
                      <div className="logo-wrapper bg-white w-[60px] h-[60px] rounded-md flex items-center justify-center">
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={60}
                            height={60}
                            className="rounded-md"
                          />
                        ) : (
                          <div className="w-[60px] h-[60px] bg-white rounded-md"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-text-secondary">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.date}</p>
                      </div>
                    </div>
                    {/* Chevron */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExperience(index);
                      }}
                      className="text-text-secondary hover:text-text-primary"
                      aria-label="Toggle Card"
                    >
                      <Chevron isOpen={isOpen} />
                    </button>
                  </div>

                  {/* Les tags sont toujours visibles */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description + site => affichés seulement si isOpen */}
                  {isOpen && (
                    <>
                      <p className="mt-2 text-text-secondary">{exp.description}</p>
                      {exp.website && (
                        <div className="mt-4">
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 hover:underline"
                          >
                            Voir le site
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </section>

        {/* Formations Académiques */}
        <section id="formations" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <AcademicCapIcon className="w-6 h-6 mr-2 text-foreground" />
            Formations Académiques
          </h2>
          <ul className="space-y-8">
            {education.map((edu, index) => {
              const isOpen = openEducations.includes(index);
              return (
                <motion.li
                  key={index}
                  onClick={() => {
                    if (!isOpen) {
                      toggleEducation(index);
                    }
                  }}
                  className="card p-4 border border-gray-200 rounded-lg"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-4 justify-between">
                    {/* Logo + titre */}
                    <div className="flex items-center gap-4">
                      <div className="logo-wrapper bg-white w-[60px] h-[60px] rounded-md flex items-center justify-center">
                        {edu.logo ? (
                          <Image
                            src={edu.logo}
                            alt={`${edu.school} logo`}
                            width={60}
                            height={60}
                            className="rounded-md"
                          />
                        ) : (
                          <div className="w-[60px] h-[60px] bg-white rounded-md"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">
                          {edu.school}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-gray-400">{edu.date}</p>
                      </div>
                    </div>
                    {/* Chevron */}
                    <button
                      onClick={() => toggleEducation(index)}
                      className="text-text-secondary hover:text-text-primary"
                      aria-label="Toggle Card"
                    >
                      <Chevron isOpen={isOpen} />
                    </button>
                  </div>

                  {/* Les tags sont toujours visibles */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.tags.map((tag, i) => (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Affichage conditionnel */}
                  {isOpen && (
                    <>
                      <p className="mt-2 text-text-secondary">{edu.description}</p>
                      {edu.website && (
                        <div className="mt-4">
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 hover:underline"
                          >
                            Voir le site
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </section>

        {/* Section Compétences Techniques */}
        <section id="competences" className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <CommandLineIcon className="w-6 h-6 mr-2 text-foreground" />
            Compétences Techniques
          </h2>

          {/* Filtres */}
          <div className="flex gap-4 mb-8">
            {["Tout", "Frontend", "Backend", "Divers", "Languages"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md ${
                  selectedCategory === category ? "bg-foreground text-background" : "bg-card-bg"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Liste des compétences */}
          <ul id="skills" className="grid grid-cols-4 gap-2">
            {filteredSkills.map((skill, index) => (
              <motion.li
                key={index}
                className="p-4 bg-card-bg rounded-lg shadow-md border border-card-border hover:border-foreground transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-text-primary">{skill.name}</h3>
              </motion.li>
            ))}
          </ul>
        </section>

{/* Projets Section */}
<section id="projets" className="mb-16">
  <h2 className="text-3xl font-semibold mb-4 text-text-primary">Projets</h2>
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <li key={index} className="p-4 bg-card-bg rounded-lg shadow-md border border-card-border hover:shadow-xl transition-shadow duration-300">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="rounded-md"
        />
        <h3 className="text-xl font-bold mt-4">{project.title}</h3>
        <p className="text-sm text-text-secondary">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-foreground text-background py-2 px-4 rounded-md hover:bg-text-primary transition"
        >
          Voir le projet
        </a>
      </li>
    ))}
  </ul>
</section>

        {/* Formulaire de Contact */}
        {/* <section id="contact" className="mb-16">
  <h2 className="text-3xl font-semibold mb-4 text-text-primary">Contact</h2>

  <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-card-bg p-8 rounded-lg shadow-md border border-card-border"
          >
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label htmlFor="firstName" className="block text-sm text-text-secondary">
          Prénom
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="w-full p-2 rounded-md bg-background border border-card-border"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm text-text-secondary">
          Nom
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="w-full p-2 rounded-md bg-background border border-card-border"
        />
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm text-text-secondary">
        Email (obligatoire)
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="w-full p-2 rounded-md bg-background border border-card-border"
      />
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm text-text-secondary">
        Numéro de téléphone
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="w-full p-2 rounded-md bg-background border border-card-border"
      />
    </div>

    <div>
      <label htmlFor="company" className="block text-sm text-text-secondary">
        Entreprise
      </label>
      <input
        type="text"
        name="company"
        id="company"
        className="w-full p-2 rounded-md bg-background border border-card-border"
      />
    </div>

    <div>
      <label htmlFor="subject" className="block text-sm text-text-secondary">
        Objet
      </label>
      <input
        type="text"
        name="subject"
        id="subject"
        className="w-full p-2 rounded-md bg-background border border-card-border"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm text-text-secondary">
        Message (limité à 2000 caractères)
      </label>
      <textarea
        name="message"
        id="message"
        rows="6"
        maxLength="2000"
        required
        className="w-full p-2 rounded-md bg-background border border-card-border"
      ></textarea>
    </div>

                // Composant reCAPTCHA 
                <div className="mt-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={handleRecaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-foreground text-background py-2 px-4 rounded-md hover:bg-text-primary transition"
            >
              Envoyer
            </button>
  </form>
</section> */}
      </main>
    </div>
  );
}
