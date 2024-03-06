import { useSelector } from "react-redux";
import useToggle from "../../../Hooks/useToggle";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./NavTools.module.scss";
import UserMenu from "./UserMenu";

const NavTools = ({ showHeart = true, showCart = true, showUser = true }) => {
  const { addedProducts, addedFavorites } = useSelector(
    (state) => state.products
  );
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);

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
          <button type="button" className={styles.addedProducts}>
            <SvgIcon name="heart" />
            {addedProducts > 0 && (
              <span>{addedProducts > 99 ? "99+" : addedProducts}</span>
            )}
          </button>
        )}

        {showCart && (
          <button type="button" className={styles.addedFavorites}>
            <SvgIcon name="cart3" />
            {addedFavorites > 0 && (
              <span>{addedFavorites > 99 ? "99+" : addedFavorites}</span>
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
