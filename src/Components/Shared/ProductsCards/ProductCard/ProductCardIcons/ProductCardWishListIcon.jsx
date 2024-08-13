import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/alertsSlice";
import { addToArray, removeById } from "src/Features/productsSlice";
import { wishlistIconToolTipLeftPos } from "src/Functions/componentsFunctions";
import { isItemFound } from "src/Functions/helper";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import ToolTip from "../../../MiniComponents/ToolTip";
import s from "./ProductCardWishListIcon.module.scss";

const ProductCardWishListIcon = ({ product, productId }) => {
  const {
    loginInfo: { isSignIn },
  } = useSelector((state) => state.user);
  const { wishList } = useSelector((state) => state.products);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const wishlistIconLeftToolTipPos = wishlistIconToolTipLeftPos(i18n.language);
  const isAddedToWishList = wishList?.find(
    (wishProduct) => wishProduct.id === productId
  );
  const activeClass = isAddedToWishList ? s.active : "";

  function addProductToWishList() {
    if (!isSignIn) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.addToWishList"),
          alertState: "warning",
          alertType: "alert",
        })
      );
      return;
    }

    const isProductAlreadyExist = isItemFound(wishList, product, "id");

    if (isProductAlreadyExist) {
      removeProduct();
      return;
    }

    addProduct();
  }

  function removeProduct() {
    dispatch(removeById({ key: "wishList", id: product.id }));
  }

  function addProduct() {
    dispatch(addToArray({ key: "wishList", value: product }));
  }

  return (
    <button
      type="button"
      className={`${s.iconHolder} ${s.wishListIcon} ${activeClass}`}
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
  );
};
export default ProductCardWishListIcon;
