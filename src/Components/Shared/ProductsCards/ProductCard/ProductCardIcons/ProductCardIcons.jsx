import ProductCardDetailsIcon from "./ProductCardDetailsIcon";
import ProductCardFavIcon from "./ProductCardFavIcon";
import s from "./ProductCardIcons.module.scss";
import ProductCardRemoveIcon from "./ProductCardRemoveIcon";
import ProductCardWishListIcon from "./ProductCardWishListIcon";

const ProductCardIcons = ({
  iconsData: { showFavIcon, showDetailsIcon, showRemoveIcon, showWishList },
  productId,
  navigateToProductDetails,
  product,
  removeFrom,
  tabIndex,
}) => {
  return (
    <div className={s.icons} data-product-icons-hover>
      {showFavIcon && (
        <ProductCardFavIcon
          product={product}
          productId={productId}
          tabIndex={tabIndex}
        />
      )}

      {showDetailsIcon && (
        <ProductCardDetailsIcon
          navigateToProductDetails={navigateToProductDetails}
          tabIndex={tabIndex}
        />
      )}

      {showRemoveIcon && (
        <ProductCardRemoveIcon
          productId={productId}
          removeFrom={removeFrom}
          tabIndex={tabIndex}
        />
      )}

      {showWishList && (
        <ProductCardWishListIcon
          product={product}
          productId={productId}
          tabIndex={tabIndex}
        />
      )}
    </div>
  );
};
export default ProductCardIcons;
