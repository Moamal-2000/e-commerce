import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { addToArray, removeById } from "src/Features/productsSlice";
import { wishlistIconToolTipLeftPos } from "src/Functions/componentsFunctions";
import { isItemFound } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import s from "./ProductCardWishListIcon.module.scss";

const ProductCardWishListIcon = ({ product, productId }) => {
  const { wishList } = useSelector((state) => state.products);
  const { loginInfo } = useSelector((state) => state.user);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = cookies.get("i18next");
  const wishlistIconLeftToolTipPos = wishlistIconToolTipLeftPos(lang);
  const isAddedToWishList = wishList?.find(
    (wishProduct) => wishProduct.id === productId
  );
  const activeClass = isAddedToWishList ? s.active : "";

  function addProductToWishList() {
    const isProductAlreadyExist = isItemFound(wishList, product, "id");

    if (!loginInfo.isSignIn) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.addToWishList"),
          alertState: "warning",
        })
      );

      return;
    }
    if (isProductAlreadyExist) {
      dispatch(removeById({ key: "wishList", id: product.id }));
      return;
    }

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
