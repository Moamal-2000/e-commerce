import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SvgIcon from "src/Components/Shared/MiniComponents/SvgIcon";
import ToolTip from "src/Components/Shared/MiniComponents/ToolTip";
import { addToArray, removeByKeyName } from "src/Features/productsSlice";
import { isItemFound } from "src/Functions/helper";
import s from "./AddToFavButton.module.scss";

const AddToFavButton = ({ productData }) => {
  const { loginInfo } = useSelector((state) => state.user);
  const { favoritesProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const isFavoriteProduct = favoritesProducts.some(
    (product) => product.shortName === productData.shortName
  );

  function addProductToFavorite() {
    const isProductAlreadyExist = isItemFound(
      favoritesProducts,
      productData,
      "shortName"
    );

    if (!loginInfo.isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) {
      dispatch(
        removeByKeyName({
          dataKey: "favoritesProducts",
          itemKey: "shortName",
          keyValue: productData.shortName,
        })
      );
      return;
    }

    dispatch(addToArray({ key: "favoritesProducts", value: productData }));
  }

  return (
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
  );
};
export default AddToFavButton;
