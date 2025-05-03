import { default as i18n, default as i18next } from "i18next";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "src/Data/staticData";
import useEventListener from "src/Hooks/Helper/useEventListener";
import s from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const currentLangRef = useRef();
  const langSelectorRef = useRef();
  const { t } = useTranslation();
  const currLang = i18next.language || "en";

  useEventListener(document, "click", (event) => {
    const isLangMenuClicked = langSelectorRef?.current.contains(event.target);
    if (isLangMenuClicked) return;

    setIsLangMenuActive(false);
  });

  function selectLanguage(index, langCode) {
    const currentFlagEle = currentLangRef.current.querySelector("img");
    const selectedLangData = LANGUAGES[index];

    currentFlagEle.src = selectedLangData?.flag;
    i18n.changeLanguage(langCode);
  }

  function updateWebsiteLang() {
    const currentLang = LANGUAGES.find((lang) => lang.code === currLang);
    const currentLangIndex = LANGUAGES.indexOf(currentLang);

    document.documentElement.dir = i18n.dir(currLang);
    document.documentElement.lang = currLang;
    selectLanguage(currentLangIndex, currLang);
  }

  function updateSelectedLanguage() {
    const currentLangEle = currentLangRef.current.querySelector("span");
    const currentLangData = LANGUAGES?.find((lang) => lang?.code === currLang);
    const selectedLangLowerCase = currentLangData?.lang?.toLowerCase();

    currentLangEle.textContent = t(`languageSelector.${selectedLangLowerCase}`);
  }

  function toggleLanguageMenu() {
    setIsLangMenuActive((prevState) => !prevState);
  }

  function displayLanguageMenu(openMenu = true) {
    setIsLangMenuActive(openMenu);
  }

  useEffect(() => {
    updateWebsiteLang();
  }, [currLang]);

  useEffect(() => {
    updateSelectedLanguage();
  }, [t]);

  return (
    <div
      className={s.languageSelector}
      onClick={toggleLanguageMenu}
      onFocus={displayLanguageMenu}
      onBlur={() => displayLanguageMenu(false)}
      aria-haspopup="true"
      ref={langSelectorRef}
    >
      <div className={s.currentOption} ref={currentLangRef}>
        <span aria-live="polite" />
        <img src={LANGUAGES[0]?.flag} alt={"country flag"} />
      </div>

      <div className={`${s.menu} ${isLangMenuActive ? s.active : ""}`}>
        {LANGUAGES.map(({ lang, flag, flagName, code, id }, index) => {
          const langTrans = t(`languageSelector.${lang.toLowerCase()}`);

          return (
            <button
              key={id}
              tabIndex="0"
              type="button"
              className={s.option}
              onClick={() => selectLanguage(index, code)}
            >
              <span>{langTrans}</span>
              <img src={flag} alt={`${flagName} flag`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelector;
