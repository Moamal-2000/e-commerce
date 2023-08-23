import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./_NavTools.module.scss";

const NavTools = ({
  showHeart = true,
  showCart = true,
  showUser = true,
  activeUser = false,
}) => {
  const { addedProducts, addedFavorites } = useGlobalContext();

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
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>


      <div className={styles.tools}>
        {showHeart && (
          <div className={styles.addedProducts}>
            <i className="fa-regular fa-heart"></i>
            {addedProducts > 0 && (
              <span>{addedProducts > 99 ? "99+" : addedProducts}</span>
            )}
          </div>
        )}

        {showCart && (
          <div className={styles.addedFavorites}>
            <i className="bi bi-cart3"></i>
            {addedFavorites > 0 && (
              <span>{addedFavorites > 99 ? "99+" : addedFavorites}</span>
            )}
          </div>
        )}

        {showUser && (
          <div className={styles.userContainer}>
            <i
              className={`fa-regular fa-user ${
                activeUser ? styles.active : ""
              }`}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavTools;
