import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  detailsIconToolTipLeftPos,
  favIconToolTipLeftPos,
  trashcanIconToolTipLeftPos,
  wishlistIconToolTipLeftPos,
} from "src/Functions/componentsFunctions";
import { isItemFound } from "src/Functions/helper";
import { addToArray, removeById } from "../../../../Features/productsSlice";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import s from "./ProductCardIcons.module.scss";

const ProductCardIcons = ({
  iconsData: { showFavIcon, showDetailsIcon, showRemoveIcon, showWishList },
  productId,
  navigateToProductDetails,
  product,
  removeFrom,
}) => {
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts, wishList } = useSelector(
    (state) => state.products
  );
  const isAddedToWishList = wishList?.find(
    (wishProduct) => wishProduct.id === productId
  );
  const isAddedToFavorites = favoritesProducts?.find(
    (favProduct) => favProduct.id === productId
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const lang = cookies.get("i18next");
  const favIconLeftToolTipPos = favIconToolTipLeftPos(lang);
  const detailsIconLeftToolTipPos = detailsIconToolTipLeftPos(lang);
  const trashcanIconLeftToolTipPos = trashcanIconToolTipLeftPos(lang);
  const wishlistIconLeftToolTipPos = wishlistIconToolTipLeftPos(lang);

  function addProductToFavorite() {
    const isProductAlreadyExist = isItemFound(favoritesProducts, product, "id");
    if (!loginInfo.isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) {
      dispatch(removeById({ key: "favoritesProducts", id: product.id }));
      return;
    }

    dispatch(addToArray({ key: "favoritesProducts", value: product }));
  }

  function addProductToWishList() {
    const isProductAlreadyExist = isItemFound(wishList, product, "id");
    if (!loginInfo.isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) {
      dispatch(removeById({ key: "wishList", id: product.id }));
      return;
    }

    dispatch(addToArray({ key: "wishList", value: product }));
  }

  function removeProduct() {
    dispatch(removeById({ key: removeFrom, id: productId }));
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
        <Link
          onClick={navigateToProductDetails}
          className={`${s.iconHolder} ${s.detailsIcon}`}
          aria-label={t("productCard.icons.details")}
        >
          <SvgIcon name="eye" />
          <ToolTip
            top="18px"
            left={detailsIconLeftToolTipPos}
            content={t("productCard.icons.details")}
          />
        </Link>
      )}

      {showRemoveIcon && (
        <button
          type="button"
          className={`${s.iconHolder} ${s.removeIcon}`}
          aria-label={`Remove from ${removeFrom}`}
          onClick={removeProduct}
        >
          <SvgIcon name="trashCan" />
          <ToolTip
            top="18px"
            left={trashcanIconLeftToolTipPos}
            content={t("productCard.icons.remove")}
          />
        </button>
      )}

      {showWishList && (
        <button
          type="button"
          className={`${s.iconHolder} ${s.wishListIcon} ${
            isAddedToWishList ? s.active : ""
          }`}
          onClick={addProductToWishList}
          aria-label="Add to wishlist"
        >
          <SvgIcon name="save" />
          <ToolTip
            top="18px"
            left={wishlistIconLeftToolTipPos}
            content={t("productCard.icons.wishlist")}
          />
        </button>
      )}
    </div>
  );
};
export default ProductCardIcons;
