import { useTranslation } from "react-i18next";
import useToggle from "src/Hooks/Helper/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import UserMenu from "../UserMenu/UserMenu";
import s from "./UserMenuIcon.module.scss";

const UserMenuIcon = ({ visibility }) => {
  const { t } = useTranslation();
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);
  const activeClass = isMenuUserActive ? s.active : "";

  function openMenu() {
    toggleMenuUserActive(true);
  }

  return (
    visibility && (
      <div
        className={`${s.userContainer} ${activeClass}`}
        onClick={toggleMenuUserActive}
        onFocus={openMenu}
        aria-label={t("navTools.userMenu")}
      >
        <SvgIcon name="user" />
        <ToolTip top="48px" left="50%" content={t("navTools.userMenu")} />

        <UserMenu isActive={isMenuUserActive} toggler={toggleMenuUserActive} />
      </div>
    )
  );
};

export default UserMenuIcon;
