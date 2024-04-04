import { useRef, useState } from "react";
import { LANGUAGES } from "src/Data/staticData";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const currentLangRef = useRef();

  function selectLanguage(index) {
    const selectedLanguage = LANGUAGES[index].lang;
    currentLangRef.current.textContent = selectedLanguage;
    // Call a function to change website's language
  }

  function toggleLanguageMenu(e) {
    setIsLangMenuActive((prevState) => !prevState);
  }

  return (
    <div className={s.languageSelector} onClick={(e) => toggleLanguageMenu(e)}>
      <div className={s.currentOption} ref={currentLangRef}>
        English
      </div>
      <SvgIcon name="chevronDown" />

      <div className={`${s.menu} ${isLangMenuActive ? s.active : ""}`}>
        {LANGUAGES.map(({ lang, flag }, i) => (
          <div key={i} className={s.option} onClick={() => selectLanguage(i)}>
            <span>{lang}</span>
            <img src={flag} alt={`${lang} flag`} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default LanguageSelector;
