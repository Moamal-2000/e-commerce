import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { mobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import IconWithCountAndLabel from "../../NavTools/IconWithCountAndLabel/IconWithCountAndLabel";
import s from "./NavLinksSideBar.module.scss";

const NavLinksSideBar = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts, orderProducts, cartProducts, wishList } =
    useSelector((state) => state.products);
  const { t } = useTranslation();

  return (
    <nav className={s.navLinks}>
      <ul role="menu">
        {mobileNavData.map(({ name, link, icon, requiteSignIn }, index) => {
          const shouldShow = requiteSignIn ? loginInfo.isSignIn : true;
          const currentPage =
            window.location.pathname === link ? "page" : undefined;

          if (!shouldShow) return null;

          return (
            <li key={"mobile-nav-link-" + index} role="menuitem">
              <NavLink
                to={link}
                aria-current={currentPage}
                aria-hidden={!isMobileMenuActive}
                tabIndex={isMobileMenuActive ? 0 : -1}
              >
                <SvgIcon name={icon} />
                <span className={s.text}>
                  {t(`mobileNav.${camelCase(name)}`)}
                </span>
              </NavLink>
            </li>
          );
        })}

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "cart3",
              visibility: loginInfo.isSignIn,
              routePath: "/cart",
              countLength: cartProducts.length,
              text: t(`mobileNav.${camelCase("my cart")}`),
              ariaHidden: !isMobileMenuActive,
              tabIndex: isMobileMenuActive ? 0 : -1,
            }}
          />
        </li>

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "cart",
              visibility: loginInfo.isSignIn,
              routePath: "/order",
              countLength: orderProducts.length,
              text: t(`mobileNav.${camelCase("my order")}`),
              ariaHidden: !isMobileMenuActive,
              tabIndex: isMobileMenuActive ? 0 : -1,
            }}
          />
        </li>

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "heart",
              visibility: loginInfo.isSignIn,
              routePath: "/favorites",
              countLength: favoritesProducts.length,
              text: t(`mobileNav.${camelCase("favorite")}`),
              ariaHidden: !isMobileMenuActive,
              tabIndex: isMobileMenuActive ? 0 : -1,
            }}
          />
        </li>

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "save",
              visibility: loginInfo.isSignIn,
              routePath: "/wishlist",
              countLength: wishList.length,
              text: t(`mobileNav.${camelCase("wishlist")}`),
              ariaHidden: !isMobileMenuActive,
              tabIndex: isMobileMenuActive ? 0 : -1,
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
export default NavLinksSideBar;
