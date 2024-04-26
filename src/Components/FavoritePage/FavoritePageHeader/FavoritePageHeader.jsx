import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateProductsState } from "src/Features/productsSlice";
import { getUniqueArrayByObjectKey } from "src/Functions/helper";
import s from "./FavoritePageHeader.module.scss";

const FavoritePageHeader = () => {
  const { favoritesProducts, cartProducts } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lengthOfFavorites = favoritesProducts.length;

  function moveAllToCart() {
    const uniqueCartProducts = getUniqueArrayByObjectKey({
      arr: cartProducts,
      newArr: favoritesProducts,
      key: "shortName",
    });

    dispatch(updateProductsState({ key: "favoritesProducts", value: [] }));
    dispatch(
      updateProductsState({ key: "cartProducts", value: uniqueCartProducts })
    );
  }

  return (
    <header className={s.header}>
      <label htmlFor="wishlist">Favorite ({lengthOfFavorites})</label>

      <button type="button" onClick={moveAllToCart}>
        {t("buttons.moveAllToBag")}
      </button>
    </header>
  );
};
export default FavoritePageHeader;
