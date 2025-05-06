import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import s from "./SideBarLink.module.scss";

const SideBarLink = ({ name, link, icon, currentPage }) => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { t } = useTranslation();

  return (
    <li className={s.listItemLink}>
      <NavLink
        to={link}
        aria-current={currentPage}
        aria-hidden={!isMobileMenuActive}
        tabIndex={isMobileMenuActive ? 0 : -1}
      >
        <SvgIcon name={icon} />
        <span className={s.text}>{t(`mobileNav.${camelCase(name)}`)}</span>
      </NavLink>
    </li>
  );
};

export default SideBarLink;
