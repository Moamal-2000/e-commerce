import { useRef, useState } from "react";
import { LANGUAGES } from "src/Data/staticData";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
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

  return (
    <div className={s.languageSelector} onClick={toggleLanguageMenu}>
      <div className={s.currentOption} ref={currentLangRef}>
        <span>English</span>
        <img src={LANGUAGES[0].flag} alt={`${LANGUAGES[0]} flag`} />
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
