import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { addToArray, removeById } from "src/Features/productsSlice";
import { favIconToolTipLeftPos } from "src/Functions/componentsFunctions";
import { isItemFound } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import s from "./ProductCardFavIcon.module.scss";

const ProductCardFavIcon = ({ product, productId }) => {
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts } = useSelector((state) => state.products);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = cookies.get("i18next");
  const favIconLeftToolTipPos = favIconToolTipLeftPos(lang);
  const isAddedToFavorites = favoritesProducts?.find(
    (favProduct) => favProduct.id === productId
  );
  const activeClass = isAddedToFavorites ? s.active : "";

  function addProductToFavorite() {
    const isProductAlreadyExist = isItemFound(favoritesProducts, product, "id");
    if (!loginInfo.isSignIn) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.addToFavorite"),
          alertState: "warning",
        })
      );

      return;
    }

    if (isProductAlreadyExist) {
      dispatch(removeById({ key: "favoritesProducts", id: product.id }));
      return;
    }

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
