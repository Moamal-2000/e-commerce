import i18n from "i18next";
import cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "src/Data/staticData";
import s from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const currentLangRef = useRef();
  const currLang = cookies.get("i18next") || "en";

  function selectLanguage(index, langCode) {
    const currentLangEle = currentLangRef.current.querySelector("span");
    const currentFlagEle = currentLangRef.current.querySelector("img");
    const selectedLangData = LANGUAGES[index];
    currentLangEle.textContent = selectedLangData.lang;
    currentFlagEle.src = selectedLangData.flag;
    i18n.changeLanguage(langCode);
  }

  function toggleLanguageMenu() {
    setIsLangMenuActive((prevState) => !prevState);
  }

  function openLanguageMenu() {
    setIsLangMenuActive(true);
  }

  function updateWebsiteLang() {
    const currentLang = LANGUAGES.find((lang) => lang.code === currLang);
    const currentLangIndex = LANGUAGES.indexOf(currentLang);

    document.documentElement.dir = i18n.dir(currLang);
    document.documentElement.lang = currLang;
    selectLanguage(currentLangIndex, currLang);
  }

  useEffect(() => {
    updateWebsiteLang();
  }, [currLang]);

  return (
    <div
      className={s.languageSelector}
      onClick={toggleLanguageMenu}
      onFocus={openLanguageMenu}
    >
      <div className={s.currentOption} ref={currentLangRef}>
        <span>{t(`languageSelector.${currLang.toLowerCase()}`)}</span>
        <img src={LANGUAGES[0].flag} alt={`${LANGUAGES[0]} flag`} />
      </div>

      <div className={`${s.menu} ${isLangMenuActive ? s.active : ""}`}>
        {LANGUAGES.map(({ lang, flag, code, id }, index) => {
          const isLastOption = index + 1 === LANGUAGES.length;

          return (
            <button
              key={id}
              tabIndex="0"
              type="button"
              className={s.option}
              onBlur={isLastOption ? toggleLanguageMenu : null}
              onClick={() => selectLanguage(index, code)}
            >
              <span>{t(`languageSelector.${lang.toLowerCase()}`)}</span>
              <img src={flag} alt={`${lang} flag`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
