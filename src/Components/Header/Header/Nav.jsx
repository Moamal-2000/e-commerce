import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

const Nav = () => {
  const { t, i18n } = useTranslation();
  const { loginInfo } = useSelector((state) => state.user);
  const navDirection = i18n.dir() === "ltr" ? "ltr" : "rtl";

  return (
    <nav className={s.nav} dir={navDirection}>
      <ul>
        <li>
          <NavLink to="/">{t("nav.home")}</NavLink>
        </li>

        <li>
          <NavLink to="/contact">{t("nav.contact")}</NavLink>
        </li>

        <li>
          <NavLink to="/about">{t("nav.about")}</NavLink>
        </li>

        <li>
          {loginInfo.isSignIn ? (
            <NavLink to="/profile">{t("nav.profile")}</NavLink>
          ) : (
            <NavLink to="/signup">{t("nav.signUp")}</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
