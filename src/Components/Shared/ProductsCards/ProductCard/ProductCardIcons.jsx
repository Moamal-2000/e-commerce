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
}) => {
  return (
    <div className={s.icons} data-product-icons-hover>
      {showFavIcon && (
        <ProductCardFavIcon product={product} productId={productId} />
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
