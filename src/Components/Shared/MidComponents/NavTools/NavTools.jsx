import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import IconWithCount from "../../NavTools/IconWithCount/IconWithCount";
import SearchProductsInput from "../../NavTools/SearchInput/SearchProductsInput";
import UserMenuIcon from "../../NavTools/UserMenuIcon/UserMenuIcon";
import s from "./NavTools.module.scss";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { t } = useTranslation();
  const { cartProducts, favoritesProducts } = useSelector(
    (state) => state.products
  );

  return (
    <div className={s.navTools}>
      <SearchProductsInput />

      <div className={s.tools}>
        <IconWithCount
          props={{
            visibility: showHeart,
            iconName: "heart",
            routePath: "/favorites",
            countLength: favoritesProducts.length,
            title: t("navTools.favorite"),
          }}
        />

        <IconWithCount
          props={{
            visibility: showCart,
            iconName: "cart3",
            routePath: "/cart",
            countLength: cartProducts.length,
            title: t("navTools.cart"),
          }}
        />

        <UserMenuIcon visibility={showUser} />
      </div>
    </div>
  );
};

export default NavTools;
