import { useState } from "react";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./DropDownMenu.module.scss";

const DropDownMenu = ({ nameMenu, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeClass = isMenuOpen ? s.active : "";
  const ariaLabel = isMenuOpen ? "Close submenu" : "Open submenu";

  const dropDownMenuAttributes = {
    className: s.dropDownMenu,
    onClick: handleToggleMenu,
    onFocus: openMenu,
    "aria-haspopup": "true",
    "aria-expanded": isMenuOpen,
  };

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState);
  }

  function openMenu() {
    setIsMenuOpen(true);
  }

  return (
    <div {...dropDownMenuAttributes}>
      <div className={s.nameMenu}>
        <span>{nameMenu}</span>
        <div className={activeClass} aria-label={ariaLabel}>
          <SvgIcon name="chevronRight" />
        </div>
      </div>

      <div className={`${s.menu} ${activeClass}`} role="menu">
        {children}
      </div>
    </div>
  );
};

export default DropDownMenu;
