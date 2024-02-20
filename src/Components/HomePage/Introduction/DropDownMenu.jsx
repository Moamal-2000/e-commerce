import { useState } from "react";
import styles from "./DropDownMenu.module.scss";

const DropDownMenu = ({ nameMenu, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <div className={styles.dropDownMenu} onClick={() => handleToggleMenu()}>
      <div className={styles.nameMenu}>
        <span>{nameMenu}</span>
        <i
          className={`fa-solid fa-chevron-right ${
            isMenuOpen ? styles.active : ""
          }`}
        ></i>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
