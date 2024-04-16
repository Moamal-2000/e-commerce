import { useRef, useState } from "react";
import { LANGUAGES } from "src/Data/staticData";
import s from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const currentLangRef = useRef();

  function selectLanguage(index) {
    const currentLangEle = currentLangRef.current.querySelector("span");
    const currentFlagEle = currentLangRef.current.querySelector("img");
    const selectedLangData = LANGUAGES[index];
    currentLangEle.textContent = selectedLangData.lang;
    currentFlagEle.src = selectedLangData.flag;

    // Required a function to change website's language
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
        {LANGUAGES.map(({ lang, flag }, i) => {
          const isLastOption = i + 1 === LANGUAGES.length;

          return (
            <button
              key={i}
              tabIndex="0"
              onBlur={isLastOption ? toggleLanguageMenu : null}
              type="button"
              className={s.option}
              onClick={() => selectLanguage(i)}
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
