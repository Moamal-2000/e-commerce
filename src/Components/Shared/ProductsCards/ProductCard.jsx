import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToArray, removeById } from "src/Features/productsSlice";
import {
  checkDateBeforeMonthToPresent,
  isItemFound,
} from "src/Functions/helper";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import s from "./ProductCard.module.scss";
import AddToCartButton from "./ProductCardComponents/AddToCartButton";
import ProductCardInfo from "./ProductCardComponents/ProductCardInfo";

const ProductCard = ({
  product,
  customization = {
    stopHover: false,
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showRemoveIcon: false,
    showNewText: false,
    showWishList: true,
    showColors: false,
  },
  removeFrom,
}) => {
  const {
    name,
    price,
    discount,
    afterDiscount,
    img,
    rate,
    votes,
    id,
    addedDate,
    colors,
  } = product;
  const {
    stopHover,
    showDiscount,
    showFavIcon,
    showDetailsIcon,
    showRemoveIcon,
    showNewText,
    showWishList,
    showColors,
  } = customization;
  const noHoverClass = stopHover ? s.noHover : "";
  const hideDiscountClass = discount <= 0 || !showDiscount ? s.hide : "";
  const hideNewClass = shouldHideNewWord();
  const { loadingProductDetails } = useSelector((state) => state.global);
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts, wishList } = useSelector(
    (state) => state.products
  );
  const isAddedToWishList = wishList?.find(
    (wishProduct) => wishProduct.id === id
  );
  const isAddedToFavorites = favoritesProducts?.find(
    (favProduct) => favProduct.id === id
  );
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function shouldHideNewWord() {
    return checkDateBeforeMonthToPresent(addedDate) || !showNewText
      ? s.hide
      : "";
  }

  function addProductToFavorite() {
    const isProductAlreadyExist = isItemFound(favoritesProducts, product, "id");
    if (!loginInfo.isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) {
      dispatch(removeById({ key: "favoritesProducts", id: product.id }));
      return;
    }

    dispatch(addToArray({ key: "favoritesProducts", value: product }));
  }

  function navigateToProductDetails() {
    if (loadingProductDetails) return;
    navigateTo(`/details?product=${name.toLowerCase()}`);
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

  return (
    <div className={`${s.card} ${noHoverClass}`}>
      <div className={s.productImg}>
        <div className={s.imgHolder}>
          <img
            src={img}
            alt={name}
            aria-label={name}
            onClick={navigateToProductDetails}
          />
        </div>

        <div className={s.layerContent}>
          {hideNewClass && (
            <div className={`${s.discount} ${hideDiscountClass}`}>
              -{discount}%
            </div>
          )}

          <div className={`${s.new} ${hideNewClass}`}>New</div>

          <div className={s.icons}>
            {showFavIcon && (
              <button
                type="button"
                className={`${s.iconHolder} ${s.favIcon} ${
                  isAddedToFavorites ? s.active : ""
                }`}
                onClick={addProductToFavorite}
                aria-label="Favorite"
              >
                <div className={s.heartBackground}></div>
                <SvgIcon name="heart" />
                <ToolTip top="18px" left="-44px" content="Favorite" />
              </button>
            )}

            {showDetailsIcon && (
              <Link
                onClick={navigateToProductDetails}
                className={`${s.iconHolder} ${s.detailsIcon}`}
                aria-label="Details"
              >
                <SvgIcon name="eye" />
                <ToolTip top="18px" left="-39px" content="Details" />
              </Link>
            )}

            {showRemoveIcon && (
              <button
                type="button"
                className={`${s.iconHolder} ${s.removeIcon}`}
                aria-label={`Remove from ${removeFrom}`}
                onClick={() => dispatch(removeById({ key: removeFrom, id }))}
              >
                <SvgIcon name="trashCan" />
                <ToolTip top="18px" left="-41px" content="Remove" />
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
                <ToolTip top="18px" left="-41px" content="Wishlist" />
              </button>
            )}
          </div>

          <AddToCartButton hoverDataAttribute={true} product={product} />
        </div>
      </div>

      <ProductCardInfo
        product={product}
        showColors={showColors}
        navigateToProductDetails={navigateToProductDetails}
      />
    </div>
  );
};
export default ProductCard;
