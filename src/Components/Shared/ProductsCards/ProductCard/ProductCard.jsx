import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkDateBeforeMonthToPresent } from "src/Functions/helper";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import s from "./ProductCard.module.scss";
import ProductCardIcons from "./ProductCardIcons/ProductCardIcons";
import ProductCardInfo from "./ProductCardInfo/ProductCardInfo";

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
  loading = "eager",
}) => {
  const { name, discount, img, id, addedDate } = product;
  const {
    stopHover,
    showDiscount,
    showNewText,
    showFavIcon,
    showDetailsIcon,
    showRemoveIcon,
    showWishList,
    showColors,
  } = customization;
  const noHoverClass = stopHover ? s.noHover : "";
  const hideDiscountClass = discount <= 0 || !showDiscount ? s.hide : "";
  const hideNewClass = shouldHideNewWord();
  const { loadingProductDetails } = useSelector((state) => state.loading);
  const navigateTo = useNavigate();
  const iconsData = {
    showFavIcon,
    showDetailsIcon,
    showRemoveIcon,
    showWishList,
  };

  function shouldHideNewWord() {
    return checkDateBeforeMonthToPresent(addedDate) || !showNewText
      ? s.hide
      : "";
  }

  function navigateToProductDetails() {
    if (loadingProductDetails) return;
    navigateTo(`/details?product=${name.toLowerCase()}`);
  }

  return (
    <div className={`${s.card} ${noHoverClass}`}>
      <div className={s.productImg}>
        <div className={s.imgHolder}>
          <img
            src={img}
            alt={name}
            aria-label={name}
            loading={loading}
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

          <ProductCardIcons
            iconsData={iconsData}
            productId={id}
            navigateToProductDetails={navigateToProductDetails}
            product={product}
            removeFrom={removeFrom}
          />
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
