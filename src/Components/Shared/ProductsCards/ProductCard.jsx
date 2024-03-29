import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToArray, removeById } from "../../../Features/productsSlice";
import { checkDateBeforeMonthToPresent } from "../../../Functions/helper";
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
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { wishList } = useSelector((state) => state.products);
  const { isSignIn } = useSelector((state) => state.user);

  function shouldHideNewWord() {
    return checkDateBeforeMonthToPresent(addedDate) || !showNewText
      ? s.hide
      : "";
  }

  function addProductToFavorite() {
    if (!isSignIn) navigateTo("/signup");
  }

  function navigateToProductDetails() {
    navigateTo(`/details/?product=${name.toLowerCase()}`);
  }

  function addProductToWishList() {
    const isProductAlreadyExist = wishList.includes(product);
    if (!isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) return;

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
              <a
                href="#"
                className={`${s.iconHolder} ${s.favIcon}`}
                onClick={addProductToFavorite}
                aria-label="Favorite"
              >
                <SvgIcon name="heart" />
                <ToolTip top="18px" left="-44px" content="Favorite" />
              </a>
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
                aria-label="Remove from wishlist"
                onClick={() => dispatch(removeById({ key: "wishList", id }))}
              >
                <SvgIcon name="trashCan" />
                <ToolTip top="18px" left="-41px" content="Remove" />
              </button>
            )}

            {showWishList && (
              <button
                type="button"
                className={`${s.iconHolder} ${s.wishListIcon}`}
                onClick={addProductToWishList}
                aria-label="Add to wishlist"
              >
                <SvgIcon name="save" />
                <ToolTip top="18px" left="-40px" content="Wishlist" />
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
