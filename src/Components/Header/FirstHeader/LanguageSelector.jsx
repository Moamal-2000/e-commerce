import i18next from "i18next";
import { useRef, useState } from "react";
import { LANGUAGES } from "src/Data/staticData";
import s from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const currentLangRef = useRef();

  function selectLanguage(index, langCode) {
    const currentLangEle = currentLangRef.current.querySelector("span");
    const currentFlagEle = currentLangRef.current.querySelector("img");
    const selectedLangData = LANGUAGES[index];
    currentLangEle.textContent = selectedLangData.lang;
    currentFlagEle.src = selectedLangData.flag;
    i18next.changeLanguage(langCode);
  }

  function toggleLanguageMenu() {
    setIsLangMenuActive((prevState) => !prevState);
  }

  function openLanguageMenu() {
    setIsLangMenuActive(true);
  }

  return (
    <div
      className={s.languageSelector}
      onClick={toggleLanguageMenu}
      onFocus={openLanguageMenu}
    >
      <div className={s.currentOption} ref={currentLangRef}>
        <span>English</span>
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
              <span>{lang}</span>
              <img src={flag} alt={`${lang} flag`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default LanguageSelector;
