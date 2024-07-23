import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { mobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./NavLinksSideBar.module.scss";

const NavLinksSideBar = () => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <nav className={s.navLinks}>
      <ul role="menu">
        {mobileNavData.map(({ name, link, icon, requiteSignIn }, index) => {
          const shouldShow = requiteSignIn ? isSignIn : true;
          const currentPage =
            window.location.pathname === link ? "page" : undefined;

          if (!shouldShow) return null;

          return (
            <li key={"mobile-nav-link-" + index} role="menuitem">
              <NavLink to={link} aria-current={currentPage}>
                <SvgIcon name={icon} />
                <span>{t(`mobileNav.${camelCase(name)}`)}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default NavLinksSideBar;
