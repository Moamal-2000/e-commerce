import { useSelector } from "react-redux";
import IconWithCount from "../NavTools/IconWithCount";
import SearchProductsInput from "../NavTools/SearchProductsInput";
import UserMenuIcon from "../NavTools/UserMenuIcon";
import styles from "./NavTools.module.scss";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { cartProducts, favoritesProducts } = useSelector(
    (state) => state.products
  );

  return (
    <div className={styles.navTools}>
      <SearchProductsInput />

      <div className={styles.tools}>
        <IconWithCount
          visibility={showHeart}
          iconName="heart"
          routePath="/favorites"
          countLength={favoritesProducts.length}
        />

        <IconWithCount
          visibility={showCart}
          iconName="cart3"
          routePath="/cart"
          countLength={cartProducts.length}
        />

        <UserMenuIcon visibility={showUser} />
      </div>
    </div>
  );
};

export default NavTools;
