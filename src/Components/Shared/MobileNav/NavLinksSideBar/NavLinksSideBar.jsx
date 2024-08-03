import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { mobileNavData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import IconWithCountAndLabel from "../../NavTools/IconWithCountAndLabel/IconWithCountAndLabel";
import s from "./NavLinksSideBar.module.scss";

const NavLinksSideBar = () => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const { favoritesProducts, orderProducts, cartProducts, wishList } =
    useSelector((state) => state.products);
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
              visibility: isSignIn,
              routePath: "/cart",
              countLength: cartProducts.length,
              text: t(`mobileNav.${camelCase("my cart")}`),
            }}
          />
        </li>

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "cart",
              visibility: isSignIn,
              routePath: "/order",
              countLength: orderProducts.length,
              text: t(`mobileNav.${camelCase("my order")}`),
            }}
          />
        </li>

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "heart",
              visibility: isSignIn,
              routePath: "/favorites",
              countLength: favoritesProducts.length,
              text: t(`mobileNav.${camelCase("favorite")}`),
            }}
          />
        </li>

        <li role="menuitem">
          <IconWithCountAndLabel
            props={{
              iconName: "save",
              visibility: isSignIn,
              routePath: "/wishlist",
              countLength: wishList.length,
              text: t(`mobileNav.${camelCase("wishlist")}`),
            }}
          />
        </li>
      </ul>
    </nav>
  );
};
export default NavLinksSideBar;
