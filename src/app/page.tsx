"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import en from "@/app/translations/en";
import fr from "@/app/translations/fr";

import {
  BriefcaseIcon,
  AcademicCapIcon,
  CommandLineIcon,
  FolderIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { Skill } from "@/types";
import { aboutMe } from "@/data/aboutme";
// import ReCAPTCHA from "react-google-recaptcha";
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
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "@/components/LanguageDropdow";

/** Exemple d’icône de chevron bas/haut. 
    Vous pouvez utiliser Heroicons, FontAwesome, etc. */
function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-foreground transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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

function isMobileDevice() {
  if (typeof navigator === "undefined") return false;

  return /Mobi|Android/i.test(navigator.userAgent);
}

function handleClickNumber(
  event: React.MouseEvent<HTMLAnchorElement>,
  language: "en" | "fr"
) {
  if (!isMobileDevice()) {
    event.preventDefault();

    navigator.clipboard.writeText("0630205558").then(() => {
      // Message différent selon la langue
      if (language === "fr") {
        alert("Numéro copié dans le presse-papier !");
      } else {
        alert("Phone number copied to clipboard!");
      }
    });
  }
}

function getFirstNonEmptyLine(text: string): string {

  return text
    .split("\n")
    .map(line => line.trim())
    .filter(line => line.length > 0)[0]
    || "";
}

export default function Home() {
  const [language, setLanguage] = useState<"en" | "fr">("fr");
  const t = language === "fr" ? fr : en;
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const aboutMeFullText = language === "fr" ? aboutMe.textFr : aboutMe.textEn;
  const firstLine = getFirstNonEmptyLine(aboutMeFullText);
  const displayedText = isAboutMeOpen
  ? aboutMeFullText
  : `${firstLine}... ${language === "fr" ? "(Lire la suite)" : "(Read more)"}`;
  const [showDev, setShowDev] = useState(true);
  const [showSales, setShowSales] = useState(true);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>("aboutme");
  // const [recaptchaToken, setRecaptchaToken] = useState("");
  const [openExperiences, setOpenExperiences] = useState<number[]>([]);
  const [openEducations, setOpenEducations] = useState<number[]>([]);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleFilters = () => setIsFiltersOpen(!isFiltersOpen);

  // Fonction pour filtrer les compétences

  const aboutMeContent = isAboutMeOpen ? (
    <>{aboutMeFullText}</>
  ) : (
    <>
      {firstLine}...
      {" "}
      <span
        onClick={() => setIsAboutMeOpen(true)}
        className="text-blue-500 cursor-pointer underline"
      >
        {language === "fr" ? "(Lire la suite)" : "(Read more)"}
      </span>
    </>
  );

  const getTranslatedSkill = (skill: Skill, language: "en" | "fr") => ({
    name: skill.name[language],
    category: skill.category[language],
  });


  const filteredSkills =
    selectedCategory === "All"
      ? skills.map((skill) => getTranslatedSkill(skill, language))
      : skills
        .filter(
          (skill) => skill.category[language] === selectedCategory
        )
        .map((skill) => getTranslatedSkill(skill, language));

  // Fonction de toggle pour les expériences
  const toggleExperience = (index: number) => {
    setOpenExperiences((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
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
  // const handleRecaptchaChange = (token: string | null) => {
  //   if (token) {
  //     setRecaptchaToken(token);
  //   }
  // };

  // // Fonction de soumission du formulaire
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   // Vérification du token reCAPTCHA avant soumission
  //   if (!recaptchaToken) {
  //     alert("Veuillez vérifier le reCAPTCHA.");
  //     return;
  //   }

  //   const formData = new FormData(event.currentTarget);
  //   formData.append("recaptchaToken", recaptchaToken);

  //   fetch("/api/contact", {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         alert("Message envoyé avec succès !");
  //       } else {
  //         alert("Erreur lors de l'envoi du message.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Erreur:", error);
  //       alert("Erreur lors de l'envoi du message.");
  //     });
  // };

  const handleSectionClick = (sectionId: string, toggleFilters?: boolean) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
    if (toggleFilters) {
      setIsFiltersOpen(!isFiltersOpen);
    }
  };

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    experiences: null,
    formations: null,
    competences: null,
    projets: null,
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Menu */}
      <aside className="sidebar fixed-nav bg-background text-foreground w-[25%] flex-col justify-between h-full p-8">
        <div className="flex items-center justify-between ">
          {/* Titre */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform duration-300 transform ${isSidebarOpen ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground">
            Laurent Arcos
          </h1>

          <div className="flex gap-3">


            {/* Toggle Dark Mode - MOBILE ONLY */}
            <div className="md:hidden">
              <DarkModeToggle />
            </div>
          </div>
        </div>
        <div className={`${isSidebarOpen ? "block" : "hidden"} md:block`}>
          <p className="text-text-primary">{t.developerWeb}</p>

          {/* Social Links Mobile */}
          <div className="social-links flex gap-5 mt-4 md:hidden">
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/laurentarcos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
                aria-label="Profil LinkedIn de Laurent Arcos"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/LaurentArcos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
                aria-label="Profil GitHub de Laurent Arcos"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </a>
              <a
                href="https://bsky.app/profile/laurentarcos.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
                aria-label="Profil Bluesky de Laurent Arcos"
              >
                <FontAwesomeIcon icon={faBluesky} className="w-4 h-4" />
              </a>
              <a
                href="https://letterboxd.com/Laurent_A/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
                aria-label="Profil Letterboxd de Laurent Arcos"
              >
                <FontAwesomeIcon icon={faLetterboxd} className="w-4 h-4" />
              </a>
              <a
                href="https://steamcommunity.com/id/thryndil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary"
                aria-label="Profil Steam de Laurent Arcos"
              >
                <FontAwesomeIcon icon={faSteam} className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center mt-0 ml-16">
            <label htmlFor="languageSelect" className="sr-only">
              Choisir la langue
            </label>
              <div className="relative">
              <LanguageDropdown
                language={language}
                onChange={(lang) => setLanguage(lang)}
              />
              </div>
            </div>
          </div>

          <nav className="nav-links mt-4 md:mt-10 lg:mt-12 space-y-4" aria-label="Navigation principale">
            <a
              href="#aboutme"
              className={`flex items-center gap-2 ${activeSection === "aboutme" ? "text-foreground font-bold" : "text-text-secondary"
                }`}
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("aboutme");
              }}
            >
              {/* Le texte du lien, selon la langue */}
              {t.me}
            </a>
            {/* Expériences avec le chevron */}
            <div className="flex items-center justify-between">
              <a
                href="#experiences"
                className={`flex items-center gap-2 ${activeSection === "experiences"
                    ? "text-foreground font-bold"
                    : "text-text-secondary"
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick("experiences", true);
                }}
              >
                <span>{t.experiences}</span>
                <Chevron isOpen={isFiltersOpen} />
              </a>
            </div>

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
                    {t.dev}
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
                    {t.sales}
                  </span>
                </label>
              </div>
            )}

            <a
              href="#formations"
              className={`flex items-center gap-2 ${activeSection === "formations"
                  ? "text-foreground font-bold"
                  : "text-text-secondary"
                }`}
            >
              {t.formations}
            </a>
            <a
              href="#projets"
              className={`flex items-center gap-2 ${activeSection === "projets"
                  ? "text-foreground font-bold"
                  : "text-text-secondary"
                }`}
            >
              {t.projets}
            </a>
            <a
              href="#competences"
              className={`flex items-center gap-2 ${activeSection === "competences"
                  ? "text-foreground font-bold"
                  : "text-text-secondary"
                }`}
            >
              {t.competences}
            </a>
            <div className="flex items-center justify-between">
              <a
                href="#contact"
                className="flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEmailOpen(!isEmailOpen);
                }}
              >
                <span>{t.contact}</span>
                <Chevron isOpen={isEmailOpen} />
              </a>
            </div>

            {isEmailOpen && (
            <div className="flex flex-col gap-2 mt-2 text-sm text-text-secondary">

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                <a
                  href="mailto:laurent.arcos@gmail.com"
                >
                  laurent.arcos@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                <a
                  href="tel:+33630205558"
                  onClick={(e) => handleClickNumber(e, language)}
                  className="
                    text-lg
                    cursor-pointer
                    hover:font-bold
                    transition
                    duration-300
                  "
                  aria-label="Appeler Laurent Arcos ou copier le numéro"
                >
                  06&nbsp;30&nbsp;20&nbsp;55&nbsp;58
                </a>
              </div>
            </div>
          )}
          </nav>
        </div>
        {/* Social Links Desktop*/}
        <div className="social-links hidden md:flex flex-col justify-start mt-28  mb-auto">
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/laurentarcos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
              aria-label="Profil LinkedIn de Laurent Arcos"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/LaurentArcos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
              aria-label="Profil GitHub de Laurent Arcos"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            <a
              href="https://bsky.app/profile/laurentarcos.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
              aria-label="Profil Bluesky de Laurent Arcos"
            >
              <FontAwesomeIcon icon={faBluesky} className="w-6 h-6" />
            </a>
            <a
              href="https://letterboxd.com/Laurent_A/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
              aria-label="Profil Letterboxd de Laurent Arcos"
            >
              <FontAwesomeIcon icon={faLetterboxd} className="w-6 h-6" />
            </a>
            <a
              href="https://steamcommunity.com/id/thryndil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary"
              aria-label="Profil Steam de Laurent Arcos"
            >
              <FontAwesomeIcon icon={faSteam} className="w-6 h-6" />
            </a>
          </div>


          <div className="flex items-center mt-12">
            <div className="relative">
            <LanguageDropdown
              language={language}
              onChange={(lang) => setLanguage(lang)}
            />
            </div>
          </div>
        </div>

        {/* Toggle Dark Mode Button - DESKTOP ONLY */}
        <div className="fixed bottom-12 left-8 hidden md:block">
          <DarkModeToggle />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">

      {/* Bloc SEO visible pour Google, avant tout JS */}
      <section className="sr-only">
        <h2 className="text-lg font-semibold">Développeur web à Hyères – React, Node.js, Next.js</h2>
        <p>
          Laurent Arcos est un développeur web fullstack basé à Hyères (Var), spécialisé en React, Next.js, TypeScript, Node.js et automatisations avec n8n. 
          Il conçoit et développe des applications modernes performantes, en alliant expérience utilisateur et qualité du code. 
          Ce site est un projet personnel interactif auto-hébergé sur Raspberry Pi via Docker.
        </p>
      </section>
  

      {/* SECTION À PROPOS */}
      <section id="aboutme" className="mb-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-text-primary flex items-center">
          <UserCircleIcon className="w-6 h-6 mr-2 text-foreground" />
          {language === "fr" ? aboutMe.titleFr : aboutMe.titleEn}

          {/* Le chevron qui toggle également */}
          <button
            onClick={() => setIsAboutMeOpen(!isAboutMeOpen)}
            className="text-text-secondary hover:text-text-primary pl-4"
            aria-label="Toggle About Me"
          >
            <Chevron isOpen={isAboutMeOpen} />
          </button>
        </h2>
      </div>

      {/* Paragraphe : aboutMeContent */}
      <p className="aboutme text-sm md:text-base text-justify whitespace-pre-line">
        {aboutMeContent}
      </p>
    </section>

      {/* Certification - Titre Professionnel */}
        <section className="mb-8">
          <p className="aboutme text-sm md:text-base text-justify text-text-primary">
            Je suis titulaire du <strong>Titre Professionnel de Concepteur Développeur d’Applications</strong>, une certification de niveau 6 (équivalent Bac+3/4). 
            Cette formation me permet de concevoir, développer, mettre en ligne et maintenir des applications web et mobiles, de la base de données jusqu’à l’interface utilisateur. 
            <a
              href="https://www.francecompetences.fr/recherche/rncp/37873/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-1"
            >
              Voir la fiche officielle du diplôme
            </a>
          </p>
        </section>

        {/* Expériences Professionnelles */}
        <section
          id="experiences"
          ref={(el) => {
            sectionRefs.current.experiences = el;
          }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <BriefcaseIcon className="w-6 h-6 mr-2 text-foreground" />
            {t.experiencesTitle}
          </h2>
          <ul className="space-y-8">
            {experiences
              .filter((exp) => {
                if (exp.type === "dev" && !showDev) return false;
                if (exp.type === "sales" && !showSales) return false;
                return true;
              })
              .map((exp, index) => {
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
                        <div className="logo-wrapper bg-white rounded-md flex items-center justify-center">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={60}
                              height={60}
                              className="rounded-md"
                            />
                          ) : (
                            <div className=" bg-white rounded-md"></div>
                          )}
                        </div>
                        <div>
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-text-primary">
                          {language === "fr" ? exp.titleFr : exp.titleEn}
                        </h3>
                        <p className="text-xs md:text-sm text-text-secondary">{exp.company}</p>
                        <p className="date-color text-xs md:text-sm">
                          {language === "fr" ? exp.dateFr : exp.dateEn}
                        </p>
                        </div>
                      </div>
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


                    {isOpen && (
                      <>
                        <ul className="description list-disc list-inside text-text-secondary space-y-1 mt-2 text-sm md:text-base">
                          {(language === "fr" ? exp.descriptionFr : exp.descriptionEn)
                            .split("\n")
                            .filter((line) => line.trim().startsWith("-"))
                            .map((line, i) => (
                              <li key={i}>{line.replace("-", "").trim()}</li>
                            ))}
                        </ul>

                        {exp.website && (
                          <div className="mt-4">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 hover:underline"
                            >
                              {language === "fr" ? "Voir le site" : "Visit the website"}
                            </a>
                          </div>
                        )}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <span key={i} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.li>
                );
              })}
          </ul>
        </section>

        {/* Formations Académiques */}
        <section
          id="formations"
          ref={(el) => {
            sectionRefs.current.formations = el;
          }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <AcademicCapIcon className="w-6 h-6 mr-2 text-foreground" />
            {t.formationsTitle}
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
                        <h3 className="text-l md:text-xl lg:text-xl font-bold text-text-primary">
                          {edu.school}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {language === "fr" ? edu.degreeFr : edu.degreeEn}
                        </p>
                        <p className="date-color text-sm">
                          {language === "fr" ? edu.dateFr : edu.dateEn}
                        </p>
                      </div>
                    </div>
                    {/* Chevron */}
                    <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleEducation(index)}}
                      className="text-text-secondary hover:text-text-primary"
                      aria-label="Toggle Card"
                    >
                      <Chevron isOpen={isOpen} />
                    </button>
                  </div>

                  {/* Description */}
                  {isOpen && (
                    <>
                      {language === "fr" ? (
                        edu.descriptionFr.includes("-") ? (
                          <ul className="description list-disc list-inside space-y-2 mt-4">
                            {edu.descriptionFr
                              .split("\n")
                              .filter((line) => line.trim().startsWith("-"))
                              .map((line, i) => (
                                <li key={i}>{line.replace("-", "").trim()}</li>
                              ))}
                          </ul>
                        ) : (
                          <p className="description mt-2 text-text-secondy">
                            {edu.descriptionFr}
                          </p>
                        )
                      ) : edu.descriptionEn.includes("-") ? (
                        <ul className="description list-disc list-inside  space-y-2 mt-4">
                          {edu.descriptionEn
                            .split("\n")
                            .filter((line) => line.trim().startsWith("-"))
                            .map((line, i) => (
                              <li key={i}>{line.replace("-", "").trim()}</li>
                            ))}
                        </ul>
                      ) : (
                        <p className="description mt-2 ">
                          {edu.descriptionEn}
                        </p>
                      )}

                      {edu.website && (
                        <div className="mt-4">
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 hover:underline"
                          >
                            {language === "fr" ? "Voir le site" : "Visit the website"}
                          </a>
                        </div>
                      )}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {edu.tags.map((tag, i) => (
                          <span key={i} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </section>


        {/* Projets Section */}
        <section
          id="projets"
          ref={(el) => {
            sectionRefs.current.projets = el;
          }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <FolderIcon className="w-6 h-6 mr-2 text-foreground" />
            {t.projetsTitle}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 md:gap-8">
            {projects.map((project, index) => {
              const cardContent = (
                <div className="project-card block p-2 md:p-4 lg:p-4 bg-card-bg rounded-lg shadow-md border border-card-border hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={project.image}
                    alt={language === "fr" ? project.titleFr : project.titleEn}
                    width={400}
                    height={200}
                    className="project-image rounded-md"
                  />
                  <h3 className="text-xs md:text-xl lg:text-xl font-bold mt-4">
                    {language === "fr" ? project.titleFr : project.titleEn}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-m text-text-secondary">
                    {language === "fr"
                      ? project.descriptionFr
                      : project.descriptionEn}
                  </p>
                </div>
              );

              return project.link ? (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {cardContent}
                </a>
              ) : (
                <div key={index} className="opacity-80 cursor-not-allowed">
                  {cardContent}
                </div>
              );
            })}
          </ul>
        </section>

        {/* Section Compétences Techniques */}
        <section
          id="competences"
          ref={(el) => {
            sectionRefs.current.competences = el;
          }}
          className="mb-16"
        >
          <h2 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-text-primary flex items-center">
            <CommandLineIcon className="w-6 h-6 mr-2 text-foreground" />
            {t.competencesTitle}
          </h2>

          {/* Filtres */}  
          <div className="mb-8">
            <label htmlFor="categorySelect" className="block text-sm font-medium mb-2">
              {language === "fr" ? "Filtrer par catégorie :" : "Filter by category :"}
            </label>
            <select
              id="categorySelect"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className=""
            >
              <option value="All">{language === "fr" ? "Tous" : "All"}</option>
              {[...new Set(skills.map((skill) => skill.category[language]))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Liste des compétences */}
          <ul id="skills" className="grid grid-cols-3 gap-1 md:grid-cols-8 md:gap-2 lg:grid-cols-8 lg:gap-2">
            {filteredSkills.map((skill, index) => (
              <li
                key={index}
                className="p-4 bg-card-bg rounded-lg shadow-md border border-card-border hover:border-foreground transition-colors duration-300"
              >
                <h3 className="skills-title text-text-primary">
                  {skill.name}
                </h3>
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
        <footer className="text-center text-sm text-text-secondary mt-8 pb-4" role="contentinfo">
          {t.copyright}
        </footer>
      </main>
    </div>
  );
}
