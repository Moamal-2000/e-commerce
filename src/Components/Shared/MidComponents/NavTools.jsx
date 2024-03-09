import { useSelector } from "react-redux";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import IconWithCount from "../NavTools/IconWithCount";
import SearchProductsInput from "../NavTools/SearchProductsInput";
import styles from "./NavTools.module.scss";
import UserMenu from "./UserMenu";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { cartProducts, favoritesProducts } = useSelector(
    (state) => state.products
  );
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);
  const cartProductsLength = cartProducts.length;
  const favoritesProductsLength = favoritesProducts.length;

  return (
    <div className={styles.navTools}>
      <SearchProductsInput />

      <div className={styles.tools}>
        <IconWithCount
          visibility={showHeart}
          iconName="heart"
          routePath="/favorites"
          countLength={favoritesProductsLength}
        />

        <IconWithCount
          visibility={showCart}
          iconName="cart3"
          routePath="/cart"
          countLength={cartProductsLength}
        />

        {showUser && (
          <button
            type="button"
            className={`${styles.userContainer} ${
              isMenuUserActive ? styles.active : ""
            }`}
            onClick={() => toggleMenuUserActive()}
          >
            <SvgIcon name="user" />

            <UserMenu
              isActive={isMenuUserActive}
              toggler={toggleMenuUserActive}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavTools;
