import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/alertsSlice";
import { addToArray, removeById } from "src/Features/productsSlice";
import { favIconToolTipLeftPos } from "src/Functions/componentsFunctions";
import { isItemFound } from "src/Functions/helper";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import ToolTip from "../../../MiniComponents/ToolTip";
import s from "./ProductCardFavIcon.module.scss";

const ProductCardFavIcon = ({ product, productId }) => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const { favoritesProducts } = useSelector((state) => state.products);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const favIconLeftToolTipPos = favIconToolTipLeftPos(i18n.language);
  const isAddedToFavorites = favoritesProducts?.find(
    (favProduct) => favProduct.id === productId
  );
  const activeClass = isAddedToFavorites ? s.active : "";

  function addProductToFavorite() {
    if (!isSignIn) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.addToFavorite"),
          alertState: "warning",
          alertType: "alert",
        })
      );
      return;
    }

    const isProductAlreadyExist = isItemFound(favoritesProducts, product, "id");

    if (isProductAlreadyExist) {
      removeProduct();
      return;
    }

    addProduct();
  }

  function removeProduct() {
    dispatch(removeById({ key: "favoritesProducts", id: product.id }));
  }

  function addProduct() {
    dispatch(addToArray({ key: "favoritesProducts", value: product }));
  }

  return (
    <button
      type="button"
      className={`${s.iconHolder} ${s.favIcon} ${activeClass}`}
      onClick={addProductToFavorite}
      aria-label={t("productCard.icons.favorite")}
    >
      <div className={s.heartBackground} />

      <SvgIcon name="heart" />
      <ToolTip
        top="18px"
        left={favIconLeftToolTipPos}
        content={t("productCard.icons.favorite")}
      />
    </button>
  );
};
export default ProductCardFavIcon;
