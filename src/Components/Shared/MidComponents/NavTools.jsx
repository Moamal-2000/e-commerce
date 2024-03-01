import { useSelector } from "react-redux";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./NavTools.module.scss";

const NavTools = ({
  showHeart = true,
  showCart = true,
  showUser = true,
  activeUser = false,
}) => {
  const { addedProducts, addedFavorites } = useSelector(
    (state) => state.products
  );

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
            <SvgIcon name="love" />
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
              activeUser ? styles.active : ""
            }`}
          >
            <SvgIcon name="user" />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavTools;
