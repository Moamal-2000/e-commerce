import { useRef } from "react";
import { useTranslation } from "react-i18next";
import useEventListener from "src/Hooks/Helper/useEventListener";
import useToggle from "src/Hooks/Helper/useToggle";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import UserMenu from "../../UserMenu/UserMenu";
import s from "./UserMenuIcon.module.scss";

const UserMenuIcon = ({ visibility }) => {
  const { t } = useTranslation();
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);
  const userContainerRef = useRef();
  const activeClass = isMenuUserActive ? s.active : "";

  useEventListener(document, "click", (event) => {
    const isUserIconClicked = userContainerRef?.current.contains(event.target);
    if (isUserIconClicked) return;

    toggleMenuUserActive(false);
  });

  function openMenu() {
    toggleMenuUserActive(true);
  }

  if (!visibility) return null;

  return (
    <div
      className={`${s.userContainer} ${activeClass}`}
      onClick={toggleMenuUserActive}
      onFocus={openMenu}
      aria-label={t("navTools.userMenu")}
      aria-haspopup="true"
      ref={userContainerRef}
    >
      <SvgIcon name="user" />
      <ToolTip bottom="26px" left="50%" content={t("navTools.userMenu")} />

      <UserMenu isActive={isMenuUserActive} toggler={toggleMenuUserActive} />
    </div>
  );
};

export default UserMenuIcon;
