"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; 

type Language = {
  code: "fr" | "en";
  label: string;
  icon: string; // chemin vers l'image du drapeau
};

const languages: Language[] = [
  {
    code: "fr",
    label: "Français (FR)",
    icon: "/images/flags/fr.png",
  },
  {
    code: "en",
    label: "English (EN)",
    icon: "/images/flags/en.png",
  },
];

interface LanguageDropdownProps {
  language: "fr" | "en";
  onChange: (lang: "fr" | "en") => void;
}

export default function LanguageDropdown({
  language,
  onChange,
}: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);

  // Trouver l’objet langue courant
  const currentLang = languages.find((lng) => lng.code === language) ?? languages[0];

  return (
    <div className="relative inline-block text-left">
      <button
        className="inline-flex items-center bg-background text-text-primary rounded-md hover:bg-hover-bg transition-colors"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choisir la langue"
      >
        {/* Affichage du drapeau seul sur mobile et du texte + drapeau sur desktop */}
        <Image
          src={currentLang.icon}
          alt={currentLang.label}
          width={20}
          height={20}
          className="rounded-sm"
        />
        <span className="ml-2 hidden md:inline">{currentLang.label}</span>

        <ChevronDownIcon
          className={`ml-2 h-4 w-4 transform transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          className="absolute z-10 mt-2 w-48 bg-background rounded-md shadow-lg"
          role="listbox"
          aria-label="Sélecteur de langue"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                className="flex items-center w-full p-2 text-left hover:bg-hover-bg transition-colors"
                onClick={() => {
                  onChange(lang.code);
                  setOpen(false);
                }}
                role="option"
                aria-selected={language === lang.code}
              >
                <Image
                  src={lang.icon}
                  alt={lang.label}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
                <span className="ml-2 hidden md:inline">{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
