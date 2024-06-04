import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MAXIMUM_QUANTITY, MINIMUM_QUANTITY } from "src/Data/globalVariables";
import { addToArray, removeByKeyName } from "src/Features/productsSlice";
import { isItemFound } from "src/Functions/helper";
import { showAlert } from "../../../Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./ProductDealingControls.module.scss";

const ProductDealingControls = ({ data }) => {
  const { favoritesProducts } = useSelector((state) => state.products);
  const { loginInfo } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { t } = useTranslation();
  const isFavoriteProduct =
    favoritesProducts.filter((product) => product.shortName === data.shortName)
      .length !== 0;

  function increaseQuantity() {
    if (quantity >= MAXIMUM_QUANTITY) return;
    setQuantity((prevNumber) => +prevNumber + 1);
  }

  function decreaseQuantity() {
    if (quantity <= MINIMUM_QUANTITY) return;
    setQuantity((prevNumber) => +prevNumber - 1);
  }

  function handleBuyProduct() {
    if (!loginInfo.isSignIn) {
      dispatch(
        showAlert({
          alertText: t("toastAlert.pageRequiringSignIn"),
          alertState: "warning",
        })
      );
      navigateTo("/signup");
    }
  }

  function addProductToFavorite() {
    const isProductAlreadyExist = isItemFound(
      favoritesProducts,
      data,
      "shortName"
    );

    if (!loginInfo.isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) {
      dispatch(
        removeByKeyName({
          dataKey: "favoritesProducts",
          itemKey: "shortName",
          keyValue: data.shortName,
        })
      );
      return;
    }

    dispatch(addToArray({ key: "favoritesProducts", value: data }));
  }

  return (
    <section className={s.dealing}>
      <div className={s.customNumberInput}>
        <button onClick={decreaseQuantity} type="button">
          -
        </button>

        <input
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          min={1}
          max={1000}
        />

        <button onClick={increaseQuantity} type="button">
          +
        </button>
      </div>

      <div className={s.wrapper}>
        <button
          type="button"
          className={s.buyButton}
          onClick={handleBuyProduct}
        >
          {t("buttons.buyNow")}
        </button>

        <button
          type="button"
          className={`${s.addToFav} ${isFavoriteProduct ? s.active : ""}`}
          aria-label={t("detailsPage.addToFav")}
          onClick={addProductToFavorite}
        >
          <div className={s.heartBackground} />
          <SvgIcon name="heart" />
          <ToolTip left="50%" top="60px" content={t("detailsPage.addToFav")} />
        </button>
      </div>
    </section>
  );
};
export default ProductDealingControls;
