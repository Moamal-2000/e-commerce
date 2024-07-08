import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";

const useCurrentLang = () => {
  const [lang, setLang] = useState(cookies.get("i18next") || "en");

  useEffect(() => {
    const handleLanguageChange = (lang) => setLang(lang);
    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return [lang, setLang];
};
export default useCurrentLang;
