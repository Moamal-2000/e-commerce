import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToArray, removeById } from "../../../Features/productsSlice";
import { checkDateBeforeMonthToPresent } from "../../../Functions/helper";
import RateStars from "../MidComponents/RateStars";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import s from "./ProductCard.module.scss";

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
  } = product;
  const {
    stopHover,
    showDiscount,
    showFavIcon,
    showDetailsIcon,
    showRemoveIcon,
    showNewText,
    showWishList,
  } = customization;
  const noHoverClass = stopHover ? s.noHover : "";
  const hideDiscountClass = discount <= 0 || !showDiscount ? s.hide : "";
  const hideNewClass = shouldHideNewWord();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { cartProducts, wishList } = useSelector((state) => state.products);

  function shouldHideNewWord() {
    return checkDateBeforeMonthToPresent(addedDate) || !showNewText
      ? s.hide
      : "";
  }

  function navigateToProductDetails() {
    navigateTo(`/details/?product=${name.toLowerCase()}`);
  }

  function addProductToCart() {
    const isProductAlreadyExist = cartProducts.includes(product);
    if (isProductAlreadyExist) return;

    dispatch(addToArray({ key: "cartProducts", value: product }));
  }

  function addProductToWishList() {
    const isProductAlreadyExist = wishList.includes(product);
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
              <a href="#" className={s.iconHolder} aria-label="Favorite">
                <SvgIcon name="heart" />
                <ToolTip top="18px" left="-40px" content="Favorite" />
              </a>
            )}

            {showDetailsIcon && (
              <Link
                onClick={navigateToProductDetails}
                className={s.iconHolder}
                aria-label="Details"
              >
                <SvgIcon name="eye" />
                <ToolTip top="60px" left="-40px" content="Details" />
              </Link>
            )}

            {showRemoveIcon && (
              <button
                type="button"
                className={s.iconHolder}
                aria-label="Remove from wishlist"
                onClick={() => dispatch(removeById({ key: "wishList", id }))}
              >
                <SvgIcon name="trashCan" />
                <ToolTip top="18px" left="-40px" content="Remove" />
              </button>
            )}

            {showWishList && (
              <button
                type="button"
                className={s.iconHolder}
                onClick={addProductToWishList}
                aria-label="Add to wishlist"
              >
                <SvgIcon name="save" />
                <ToolTip top="100px" left="-40px" content="Wishlist" />
              </button>
            )}
          </div>

          <button
            type="button"
            className={s.addToCartBtn}
            onClick={addProductToCart}
            aria-label="Add to cart"
          >
            <SvgIcon name="cart3" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>

      <section className={s.productInfo}>
        <strong className={s.productName}>
          <Link onClick={navigateToProductDetails}>{name}</Link>
        </strong>
        <div className={s.price}>
          ${afterDiscount}
          {discount > 0 && <del className={s.afterDiscount}>${price}</del>}
        </div>

        <div className={s.rateContainer}>
          <RateStars rate={rate} />

          <span className={s.numOfVotes}>({votes})</span>
        </div>
      </section>
    </div>
  );
};
export default ProductCard;
