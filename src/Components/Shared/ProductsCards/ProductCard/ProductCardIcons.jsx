import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { favIconToolTipLeftPos } from "src/Functions/componentsFunctions";
import { isItemFound } from "src/Functions/helper";
import { addToArray, removeById } from "../../../../Features/productsSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import ProductCardDetailsIcon from "./ProductCardDetailsIcon";
import s from "./ProductCardIcons.module.scss";
import ProductCardRemoveIcon from "./ProductCardRemoveIcon";
import ProductCardWishListIcon from "./ProductCardWishListIcon";

const ProductCardIcons = ({
  iconsData: { showFavIcon, showDetailsIcon, showRemoveIcon, showWishList },
  productId,
  navigateToProductDetails,
  product,
  removeFrom,
}) => {
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts } = useSelector((state) => state.products);
  const isAddedToFavorites = favoritesProducts?.find(
    (favProduct) => favProduct.id === productId
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const lang = cookies.get("i18next");
  const favIconLeftToolTipPos = favIconToolTipLeftPos(lang);

  function addProductToFavorite() {
    const isProductAlreadyExist = isItemFound(favoritesProducts, product, "id");
    if (!loginInfo.isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) {
      dispatch(removeById({ key: "favoritesProducts", id: product.id }));
      return;
    }

    dispatch(addToArray({ key: "favoritesProducts", value: product }));
  }

  return (
    <div className={s.icons} data-product-icons-hover>
      {showFavIcon && (
        <button
          type="button"
          className={`${s.iconHolder} ${s.favIcon} ${
            isAddedToFavorites ? s.active : ""
          }`}
          onClick={addProductToFavorite}
          aria-label={t("productCard.icons.favorite")}
        >
          <div className={s.heartBackground}></div>
          <SvgIcon name="heart" />
          <ToolTip
            top="18px"
            left={favIconLeftToolTipPos}
            content={t("productCard.icons.favorite")}
          />
        </button>
      )}

      {showDetailsIcon && (
        <ProductCardDetailsIcon
          navigateToProductDetails={navigateToProductDetails}
        />
      )}

      {showRemoveIcon && (
        <ProductCardRemoveIcon productId={productId} removeFrom={removeFrom} />
      )}

      {showWishList && (
        <ProductCardWishListIcon product={product} productId={productId} />
      )}
    </div>
  );
};
export default ProductCardIcons;
