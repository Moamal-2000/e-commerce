import { useEffect, useRef, useState } from "react";
import styles from "./_FirstHeader.module.scss";

const FirstHeader = () => {
  const [isLangMenuActive, setIsLangMenuActive] = useState(false);
  const optionsEleRef = useRef();
  const currentLangRef = useRef();

  useEffect(() => {}, []);

  function handleLanguageMenu(e) {
    const target = e.target;
    const triggeredLanguage = target.textContent;
    const currentLangEle = currentLangRef.current;

    if (isLangMenuActive) currentLangEle.textContent = triggeredLanguage;

    setIsLangMenuActive((prevState) => !prevState);
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.space}></div>

        <div className={styles.headerContent}>
          <p className={styles.discount}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="/#">ShopNow</a>
          </p>

          <div
            className={styles.languageSelector}
            onClick={(e) => handleLanguageMenu(e)}
          >
            <div className={styles.currentOption} ref={currentLangRef}>
              English
            </div>
            <i className="fa-solid fa-chevron-down"></i>

            <div
              className={`${styles.options} ${
                isLangMenuActive ? styles.active : ""
              }`}
              ref={optionsEleRef}
            >
              <div className={styles.option}>English</div>
              <div className={styles.option}>Russian</div>
              <div className={styles.option}>Arabic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
