import { useSelector } from "react-redux";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./NavTools.module.scss";
import UserMenu from "./UserMenu";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { cartProducts, favoritesProducts } = useSelector(
    (state) => state.products
  );
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);
  const cartProductsLength = cartProducts.length;
  const favoritesProductsLength = favoritesProducts.length;

  function focusInput(e) {
    const searchInput = e.currentTarget.querySelector("#search-input");
    searchInput.focus();
  }

  return (
    <div className={styles.navTools}>
      <div className={styles.searchContainer} onClick={(e) => focusInput(e)}>
        <input
          id="search-input"
          type="text"
          placeholder="What are you looking for?"
        />
        <SvgIcon name="search" />
      </div>

      <div className={styles.tools}>
        {showHeart && (
          <button type="button" className={styles.addedFavorites}>
            <SvgIcon name="heart" />
            {favoritesProductsLength > 0 && (
              <span>
                {favoritesProductsLength > 99 ? "99+" : favoritesProductsLength}
              </span>
            )}
          </button>
        )}

        {showCart && (
          <button type="button" className={styles.addedProducts}>
            <SvgIcon name="cart3" />
            {cartProductsLength > 0 && (
              <span>
                {cartProductsLength > 99 ? "99+" : cartProductsLength}
              </span>
            )}
          </button>
        )}

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
