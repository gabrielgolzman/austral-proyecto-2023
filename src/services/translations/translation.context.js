import { createContext, useState } from "react";

export const TranslationContext = createContext();

const tValue = localStorage.getItem("translation");

const TranslationContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(tValue ?? "en");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("translation", newLanguage);
  };
  return (
    <TranslationContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;
