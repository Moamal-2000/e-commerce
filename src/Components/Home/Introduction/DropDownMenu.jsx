import { useState } from "react";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
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
        <button
          type="button"
          className={isMenuOpen ? styles.active : ""}
          aria-label="arrow right"
        >
          <SvgIcon name="chevronRight" />
        </button>
      </div>

      <div className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
