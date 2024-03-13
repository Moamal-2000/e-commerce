import { useState } from "react";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./DropDownMenu.module.scss";

const DropDownMenu = ({ nameMenu, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <div className={s.dropDownMenu} onClick={() => handleToggleMenu()}>
      <div className={s.nameMenu}>
        <span>{nameMenu}</span>
        <button
          type="button"
          className={isMenuOpen ? s.active : ""}
          aria-label="arrow right"
        >
          <SvgIcon name="chevronRight" />
        </button>
      </div>

      <div className={`${s.menu} ${isMenuOpen ? s.active : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
