import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { mobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./MobileNav.module.scss";
import UserProfileSidebar from "./UserProfileSidebar/UserProfileSidebar";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo } = useSelector((state) => state.user);
  const { isSignIn } = loginInfo;
  const handleSignOut = useSignOut();
  const { t } = useTranslation();

  return (
    <div className={`${s.mobileMenu} ${isMobileMenuActive ? s.active : ""}`}>
      <UserProfileSidebar />

      <nav className={s.navLinks}>
        <ul>
          {mobileNavData.map(({ name, link, icon, requiteSignIn }, index) => {
            const shouldShow = requiteSignIn ? isSignIn : true;
            const currentPage =
              window.location.pathname === link ? "page" : undefined;

            if (!shouldShow) return null;

            return (
              <li key={"mobile-nav-link-" + index}>
                <NavLink to={link} aria-current={currentPage}>
                  <SvgIcon name={icon} />
                  <span>{t(`mobileNav.${camelCase(name)}`)}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <hr className={s.line}></hr>

      {isSignIn && (
        <button
          className={s.signOutButton}
          type="button"
          onClick={handleSignOut}
        >
          <SvgIcon name="boxArrowRight" />
          <span>{t("mobileNav.signOut")}</span>
        </button>
      )}

      {!isSignIn && (
        <Link to="/signup" className={s.signOutButton}>
          <SvgIcon name="boxArrowRight" />
          <span>{t("mobileNav.signIn")}</span>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
