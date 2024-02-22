import { useRef, useState } from "react";
import styles from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const optionsEleRef = useRef();
  const currentLangRef = useRef();

  function handleLanguageMenu(e) {
    const target = e.target;
    const triggeredLanguage = target.textContent;
    const currentLangEle = currentLangRef.current;

    if (target.tagName === "I") {
      setIsLangMenuActive((prevState) => !prevState);
      return;
    }

    if (isLangMenuActive) currentLangEle.textContent = triggeredLanguage;
    setIsLangMenuActive((prevState) => !prevState);
  }
  return (
    <div
      className={styles.languageSelector}
      onClick={(e) => handleLanguageMenu(e)}
    >
      <div className={styles.currentOption} ref={currentLangRef}>
        English
      </div>
      <i className="fa-solid fa-chevron-down"></i>

      <div
        className={`${styles.options} ${isLangMenuActive ? styles.active : ""}`}
        ref={optionsEleRef}
      >
        <div className={styles.option}>English</div>
        <div className={styles.option}>Russian</div>
        <div className={styles.option}>Arabic</div>
      </div>
    </div>
  );
};
export default LanguageSelector;
