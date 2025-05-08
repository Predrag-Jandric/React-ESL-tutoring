import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "zh";
  });

  // useEffect(() => {
  //   localStorage.setItem("lang", language); // Save to localStorage
  // }, [language]);

  const t = (key) => translations[language][key] || key; // fallback if key not found

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);
