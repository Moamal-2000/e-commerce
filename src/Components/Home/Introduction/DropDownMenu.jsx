import { useState } from "react";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./DropDownMenu.module.scss";

const DropDownMenu = ({ nameMenu, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeClass = isMenuOpen ? s.active : "";

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <sic
      className={s.dropDownMenu}
      onClick={handleToggleMenu}
      onFocus={openMenu}
    >
      <div className={s.nameMenu}>
        <span>{nameMenu}</span>
        <div className={activeClass} aria-label="arrow right">
          <SvgIcon name="chevronRight" />
        </div>
      </div>

      <div className={`${s.menu} ${activeClass}`}>{children}</div>
    </sic>
  );
};

export default DropDownMenu;
