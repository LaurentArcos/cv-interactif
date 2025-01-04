"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  );
}
