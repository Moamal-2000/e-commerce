import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeById } from "src/Features/productsSlice";
import { trashcanIconToolTipLeftPos } from "src/Functions/componentsFunctions";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import s from "./ProductCardRemoveIcon.module.scss";

const ProductCardRemoveIcon = ({ removeFrom, productId }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const lang = cookies.get("i18next");
  const trashcanIconLeftToolTipPos = trashcanIconToolTipLeftPos(lang);

  function removeProduct() {
    dispatch(removeById({ key: removeFrom, id: productId }));
  }

  return (
    <button
      type="button"
      className={`${s.iconHolder} ${s.removeIcon}`}
      aria-label={`Remove from ${removeFrom}`}
      onClick={removeProduct}
    >
      <SvgIcon name="trashCan" />
      <ToolTip
        top="18px"
        left={trashcanIconLeftToolTipPos}
        content={t("productCard.icons.remove")}
      />
    </button>
  );
};
export default ProductCardRemoveIcon;
