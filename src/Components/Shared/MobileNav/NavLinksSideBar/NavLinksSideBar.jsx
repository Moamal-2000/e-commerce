import { useSelector } from "react-redux";
import { mobileNavData } from "src/Data/staticData";
import s from "./NavLinksSideBar.module.scss";
import RestNavLinks from "./RestNavLinks";
import SideBarLink from "./SideBarLink/SideBarLink";

const NavLinksSideBar = () => {
  const { loginInfo } = useSelector((state) => state.user);

  return (
    <nav className={s.navLinks}>
      <ul>
        {mobileNavData.map(({ name, link, icon, requiteSignIn }, index) => {
          const shouldShow = requiteSignIn ? loginInfo.isSignIn : true;
          const currentPage =
            window.location.pathname === link ? "page" : undefined;

          if (!shouldShow) return null;

          return (
            <SideBarLink
              key={"mobile-nav-link-" + index}
              {...{ name, link, icon, currentPage }}
            />
          );
        })}

        <RestNavLinks />
      </ul>
    </nav>
  );
};
export default NavLinksSideBar;
